import { darken, lighten, isDark } from 'khroma';

const genSections = (options) => {
  let sections = '';

  for (let i = 0; i < 8; i++) {
    options['lineColor' + i] = options['lineColor' + i] || options['gitInv' + i];
    if (isDark(options['lineColor' + i])) {
      options['lineColor' + i] = lighten(options['lineColor' + i], 20);
    } else {
      options['lineColor' + i] = darken(options['lineColor' + i], 20);
    }
  }

  for (let i = 0; i < 8; i++) {
    const sw = '' + (17 - 3 * i);
    sections += `
    .section-${i - 1} rect, .section-${i - 1} path, .section-${i - 1} circle, .section-${
      i - 1
    } path  {
      fill: ${options['git' + i]};
    }
    .section-${i - 1} text {
     fill: ${options['gitBranchLabel' + i]};
    //  fill: ${options['gitInv' + i]};
    }
    .node-icon-${i - 1} {
      font-size: 40px;
      color: ${options['gitBranchLabel' + i]};
      // color: ${options['gitInv' + i]};
    }
    .section-edge-${i - 1}{
      stroke: ${options['git' + i]};
    }
    .edge-depth-${i - 1}{
      stroke-width: ${sw};
    }
    .section-${i - 1} line {
      stroke: ${options['lineColor' + i]} ;
      stroke-width: 3;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }
    `;
  }
  return sections;
};

const getStyles = (options) =>
  `
  .edge {
    stroke-width: 3;
  }
  ${genSections(options)}
  .section-root rect, .section-root path, .section-root circle  {
    fill: ${options.git0};
  }
  .section-root text {
    fill: ${options.gitBranchLabel0};
  }
  .icon-container {
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edge {
    fill: none;
  }
`;
export default getStyles;
