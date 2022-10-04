import assignWithDepth from './assignWithDepth';
import { log } from './logger';
import theme from './themes';
import config from './defaultConfig';
import type { MermaidConfig } from './config.type';

export const defaultConfig: MermaidConfig = Object.freeze(config);

let siteConfig: MermaidConfig = assignWithDepth({}, defaultConfig);
let configFromInitialize: MermaidConfig;
let directives: any[] = [];
let currentConfig: MermaidConfig = assignWithDepth({}, defaultConfig);

export const updateCurrentConfig = (siteCfg: MermaidConfig, _directives: any[]) => {
  // start with config being the siteConfig
  let cfg: MermaidConfig = assignWithDepth({}, siteCfg);
  // let sCfg = assignWithDepth(defaultConfig, siteConfigDelta);

  // Join directives
  let sumOfDirectives: MermaidConfig = {};
  for (let i = 0; i < _directives.length; i++) {
    const d = _directives[i];
    sanitize(d);

    // Apply the data from the directive where the the overrides the themeVariables
    sumOfDirectives = assignWithDepth(sumOfDirectives, d);
  }

  cfg = assignWithDepth(cfg, sumOfDirectives);

  if (sumOfDirectives.theme && sumOfDirectives.theme in theme) {
    const tmpConfigFromInitialize = assignWithDepth({}, configFromInitialize);
    const themeVariables = assignWithDepth(
      tmpConfigFromInitialize.themeVariables || {},
      sumOfDirectives.themeVariables
    );
    if (cfg.theme && cfg.theme in theme) {
      cfg.themeVariables = theme[cfg.theme as keyof typeof theme].getThemeVariables(themeVariables);
    }
  }

  currentConfig = cfg;
  return cfg;
};

/**
 * ## setSiteConfig
 *
 * | Function      | Description                           | Type        | Values                                  |
 * | ------------- | ------------------------------------- | ----------- | --------------------------------------- |
 * | setSiteConfig | Sets the siteConfig to desired values | Put Request | Any Values, except ones in secure array |
 *
 * **Notes:** Sets the siteConfig. The siteConfig is a protected configuration for repeat use. Calls
 * to reset() will reset the currentConfig to siteConfig. Calls to reset(configApi.defaultConfig)
 * will reset siteConfig and currentConfig to the defaultConfig Note: currentConfig is set in this
 * function _Default value: At default, will mirror Global Config_
 *
 * @param conf - The base currentConfig to use as siteConfig
 * @returns {object} - The siteConfig
 */
export const setSiteConfig = (conf: MermaidConfig): MermaidConfig => {
  siteConfig = assignWithDepth({}, defaultConfig);
  siteConfig = assignWithDepth(siteConfig, conf);

  // @ts-ignore: TODO Fix ts errors
  if (conf.theme && theme[conf.theme]) {
    // @ts-ignore: TODO Fix ts errors
    siteConfig.themeVariables = theme[conf.theme].getThemeVariables(conf.themeVariables);
  }

  currentConfig = updateCurrentConfig(siteConfig, directives);
  return siteConfig;
};

export const saveConfigFromInitialize = (conf: MermaidConfig): void => {
  configFromInitialize = assignWithDepth({}, conf);
};

export const updateSiteConfig = (conf: MermaidConfig): MermaidConfig => {
  siteConfig = assignWithDepth(siteConfig, conf);
  updateCurrentConfig(siteConfig, directives);

  return siteConfig;
};
/**
 * ## getSiteConfig
 *
 * | Function      | Description                                       | Type        | Values                           |
 * | ------------- | ------------------------------------------------- | ----------- | -------------------------------- |
 * | setSiteConfig | Returns the current siteConfig base configuration | Get Request | Returns Any Values in siteConfig |
 *
 * **Notes**: Returns **any** values in siteConfig.
 *
 * @returns {object} - The siteConfig
 */
export const getSiteConfig = (): MermaidConfig => {
  return assignWithDepth({}, siteConfig);
};
/**
 * ## setConfig
 *
 * | Function      | Description                           | Type        | Values                                  |
 * | ------------- | ------------------------------------- | ----------- | --------------------------------------- |
 * | setSiteConfig | Sets the siteConfig to desired values | Put Request | Any Values, except ones in secure array |
 *
 * **Notes**: Sets the currentConfig. The parameter conf is sanitized based on the siteConfig.secure
 * keys. Any values found in conf with key found in siteConfig.secure will be replaced with the
 * corresponding siteConfig value.
 *
 * @param {any} conf - The potential currentConfig
 * @returns {any} - The currentConfig merged with the sanitized conf
 */
export const setConfig = (conf: MermaidConfig): MermaidConfig => {
  // sanitize(conf);
  // Object.keys(conf).forEach(key => {
  //   const manipulator = manipulators[key];
  //   conf[key] = manipulator ? manipulator(conf[key]) : conf[key];
  // });

  assignWithDepth(currentConfig, conf);

  return getConfig();
};

/**
 * ## getConfig
 *
 * | Function  | Description               | Type        | Return Values                  |
 * | --------- | ------------------------- | ----------- | ------------------------------ |
 * | getConfig | Obtains the currentConfig | Get Request | Any Values from current Config |
 *
 * **Notes**: Returns **any** the currentConfig
 *
 * @returns {any} - The currentConfig
 */
export const getConfig = (): MermaidConfig => {
  return assignWithDepth({}, currentConfig);
};
/**
 * ## sanitize
 *
 * | Function | Description                            | Type        | Values |
 * | -------- | -------------------------------------- | ----------- | ------ |
 * | sanitize | Sets the siteConfig to desired values. | Put Request | None   |
 *
 * Ensures options parameter does not attempt to override siteConfig secure keys **Notes**: modifies
 * options in-place
 *
 * @param {any} options - The potential setConfig parameter
 */
export const sanitize = (options: any) => {
  // Checking that options are not in the list of excluded options
  ['secure', ...(siteConfig.secure ?? [])].forEach((key) => {
    if (typeof options[key] !== 'undefined') {
      // DO NOT attempt to print options[key] within `${}` as a malicious script
      // can exploit the logger's attempt to stringify the value and execute arbitrary code
      log.debug(`Denied attempt to modify a secure key ${key}`, options[key]);
      delete options[key];
    }
  });

  // Check that there no attempts of prototype pollution
  Object.keys(options).forEach((key) => {
    if (key.indexOf('__') === 0) {
      delete options[key];
    }
  });
  // Check that there no attempts of xss, there should be no tags at all in the directive
  // blocking data urls as base64 urls can contain svgs with inline script tags
  Object.keys(options).forEach((key) => {
    if (typeof options[key] === 'string') {
      if (
        options[key].indexOf('<') > -1 ||
        options[key].indexOf('>') > -1 ||
        options[key].indexOf('url(data:') > -1
      ) {
        delete options[key];
      }
    }
    if (typeof options[key] === 'object') {
      sanitize(options[key]);
    }
  });
};

/**
 * Pushes in a directive to the configuration
 *
 * @param {object} directive The directive to push in
 */
export const addDirective = (directive: any) => {
  if (directive.fontFamily) {
    if (!directive.themeVariables) {
      directive.themeVariables = { fontFamily: directive.fontFamily };
    } else {
      if (!directive.themeVariables.fontFamily) {
        directive.themeVariables = { fontFamily: directive.fontFamily };
      }
    }
  }
  directives.push(directive);
  updateCurrentConfig(siteConfig, directives);
};

/**
 * ## reset
 *
 * | Function | Description                  | Type        | Required | Values |
 * | -------- | ---------------------------- | ----------- | -------- | ------ |
 * | reset    | Resets currentConfig to conf | Put Request | Required | None   |
 *
 * ## conf
 *
 * | Parameter | Description                                                    | Type       | Required | Values                                       |
 * | --------- | -------------------------------------------------------------- | ---------- | -------- | -------------------------------------------- |
 * | conf      | base set of values, which currentConfig could be **reset** to. | Dictionary | Required | Any Values, with respect to the secure Array |
 *
 * **Notes**: (default: current siteConfig ) (optional, default `getSiteConfig()`)
 *
 * @param config
 */
export const reset = (config = siteConfig): void => {
  // Replace current config with siteConfig
  directives = [];
  updateCurrentConfig(config, directives);
};
