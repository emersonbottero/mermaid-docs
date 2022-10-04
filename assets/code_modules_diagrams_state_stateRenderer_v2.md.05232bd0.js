import{_ as e,c as t,o as a,d}from"./app.ef92c309.js";const b=JSON.parse('{"title":"Module: diagrams/state/stateRenderer-v2","description":"","frontmatter":{},"headers":[{"level":2,"title":"Table of contents","slug":"table-of-contents","link":"#table-of-contents","children":[{"level":3,"title":"Variables","slug":"variables","link":"#variables","children":[]},{"level":3,"title":"Functions","slug":"functions","link":"#functions","children":[]}]},{"level":2,"title":"Variables","slug":"variables-1","link":"#variables-1","children":[{"level":3,"title":"default","slug":"default","link":"#default","children":[]}]},{"level":2,"title":"Functions","slug":"functions-1","link":"#functions-1","children":[{"level":3,"title":"draw","slug":"draw","link":"#draw","children":[]},{"level":3,"title":"getClasses","slug":"getclasses","link":"#getclasses","children":[]},{"level":3,"title":"setConf","slug":"setconf","link":"#setconf","children":[]}]}],"relativePath":"code/modules/diagrams_state_stateRenderer_v2.md"}'),r={name:"code/modules/diagrams_state_stateRenderer_v2.md"},s=d('<p><a href="./../README.html">mermaid-docs</a> / <a href="./../modules.html">Exports</a> / diagrams/state/stateRenderer-v2</p><h1 id="module-diagrams-state-staterenderer-v2" tabindex="-1">Module: diagrams/state/stateRenderer-v2 <a class="header-anchor" href="#module-diagrams-state-staterenderer-v2" aria-hidden="true">#</a></h1><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a></h2><h3 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-hidden="true">#</a></h3><ul><li><a href="./diagrams_state_stateRenderer_v2.html#default">default</a></li></ul><h3 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-hidden="true">#</a></h3><ul><li><a href="./diagrams_state_stateRenderer_v2.html#draw">draw</a></li><li><a href="./diagrams_state_stateRenderer_v2.html#getclasses">getClasses</a></li><li><a href="./diagrams_state_stateRenderer_v2.html#setconf">setConf</a></li></ul><h2 id="variables-1" tabindex="-1">Variables <a class="header-anchor" href="#variables-1" aria-hidden="true">#</a></h2><h3 id="default" tabindex="-1">default <a class="header-anchor" href="#default" aria-hidden="true">#</a></h3><p>\u2022 <strong>default</strong>: <code>Object</code></p><h4 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>draw</code></td><td style="text-align:left;">(<code>text</code>: <code>any</code>, <code>id</code>: <code>any</code>, <code>_version</code>: <code>any</code>, <code>diag</code>: <code>any</code>) =&gt; <code>void</code></td></tr><tr><td style="text-align:left;"><code>getClasses</code></td><td style="text-align:left;">(<code>text</code>: <code>any</code>, <code>diag</code>: <code>any</code>) =&gt; <code>object</code></td></tr><tr><td style="text-align:left;"><code>setConf</code></td><td style="text-align:left;">(<code>cnf</code>: <code>any</code>) =&gt; <code>void</code></td></tr></tbody></table><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-hidden="true">#</a></h4><p><a href="https://github.com/emersonbottero/mermaid-docs/blob/f565dc0/src/diagrams/state/stateRenderer-v2.js#L333" target="_blank" rel="noreferrer">src/diagrams/state/stateRenderer-v2.js:333</a></p><h2 id="functions-1" tabindex="-1">Functions <a class="header-anchor" href="#functions-1" aria-hidden="true">#</a></h2><h3 id="draw" tabindex="-1">draw <a class="header-anchor" href="#draw" aria-hidden="true">#</a></h3><p>\u25B8 <strong>draw</strong>(<code>text</code>, <code>id</code>, <code>_version</code>, <code>diag</code>): <code>void</code></p><p>Draws a flowchart in the tag with id: id based on the graph definition in text.</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>text</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>id</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>_version</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>diag</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a></h4><p><a href="https://github.com/emersonbottero/mermaid-docs/blob/f565dc0/src/diagrams/state/stateRenderer-v2.js#L241" target="_blank" rel="noreferrer">src/diagrams/state/stateRenderer-v2.js:241</a></p><hr><h3 id="getclasses" tabindex="-1">getClasses <a class="header-anchor" href="#getclasses" aria-hidden="true">#</a></h3><p>\u25B8 <strong>getClasses</strong>(<code>text</code>, <code>diag</code>): <code>object</code></p><p>Returns the all the styles from classDef statements in the graph definition.</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>text</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>diag</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-hidden="true">#</a></h4><p><code>object</code></p><p>ClassDef styles</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a></h4><p><a href="https://github.com/emersonbottero/mermaid-docs/blob/f565dc0/src/diagrams/state/stateRenderer-v2.js#L27" target="_blank" rel="noreferrer">src/diagrams/state/stateRenderer-v2.js:27</a></p><hr><h3 id="setconf" tabindex="-1">setConf <a class="header-anchor" href="#setconf" aria-hidden="true">#</a></h3><p>\u25B8 <strong>setConf</strong>(<code>cnf</code>): <code>void</code></p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>cnf</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a></h4><p><a href="https://github.com/emersonbottero/mermaid-docs/blob/f565dc0/src/diagrams/state/stateRenderer-v2.js#L11" target="_blank" rel="noreferrer">src/diagrams/state/stateRenderer-v2.js:11</a></p>',44),n=[s];function i(l,o,c,h,f,g){return a(),t("div",null,n)}const m=e(r,[["render",i]]);export{b as __pageData,m as default};
