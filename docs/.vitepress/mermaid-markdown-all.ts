// import { deflate } from 'pako';
// import { fromUint8Array } from 'js-base64';
import { getHighlighter } from "shiki";

// const serializeState = (state: State, serde: SerdeType = 'pako'): string => {
// 	if (serdes[serde] === undefined) {
// 		throw new Error(`Unknown serde type: ${serde}`);
// 	}
// 	const json = JSON.stringify(state);
// 	const serialized = serdes[serde].serialize(json);
// 	return `${serde}:${serialized}`;
// };

// const serialize = (state: string): string => {
//   const data = new TextEncoder().encode(state);
//   const compressed = deflate(data, { level: 9 });
//   return fromUint8Array(compressed, true);
// };

const MermaidExample = async (md) => {
  const fence = md.renderer.rules.fence.bind(md.renderer.rules);

  const highlighter = await getHighlighter({ theme: "material-palenight" });

  md.renderer.rules.fence = (tokens, index, options, env, slf) => {
    const token = tokens[index];
    // console.log("==>",token.info);

    if (token.info.trim() === "mermaid-example") {
      let code = highlighter.codeToHtml(token.content, { lang: "mermaid" });
      code = code.replace("#2e3440ff", "transparent");
      code = code.replace("#292D3E", "transparent");

      code =
        "<h5>Code:</h5>" +
        `<div class="language-mermaid">` +
        // TODO: compute edit link!
        // `<a class="edit" href="https://mermaid.live/edit#pako:${serialize(
        //   token.content
        // )}"  target=”_blank”>✒️</a>` +
        `<button class="copy"></button><span class="lang">mermaid</span>` +
        code +
        "</div>";

      // return code;
      return `${code}
          <h5>Render:</h5>
          <Mermaid id="me${index}"  graph="${encodeURIComponent(
        token.content
      )}"></Mermaid>`;
    }
    return fence(tokens, index, options, env, slf);
  };
};

export default MermaidExample;
