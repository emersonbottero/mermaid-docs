import{_ as e,c as t,o as a,d}from"./app.ef92c309.js";const g=JSON.parse('{"title":"Module: dagre-wrapper/shapes/util","description":"","frontmatter":{},"headers":[{"level":2,"title":"Table of contents","slug":"table-of-contents","link":"#table-of-contents","children":[{"level":3,"title":"Functions","slug":"functions","link":"#functions","children":[]}]},{"level":2,"title":"Functions","slug":"functions-1","link":"#functions-1","children":[{"level":3,"title":"insertPolygonShape","slug":"insertpolygonshape","link":"#insertpolygonshape","children":[]},{"level":3,"title":"labelHelper","slug":"labelhelper","link":"#labelhelper","children":[]},{"level":3,"title":"updateNodeBounds","slug":"updatenodebounds","link":"#updatenodebounds","children":[]}]}],"relativePath":"code/modules/dagre_wrapper_shapes_util.md"}'),r={name:"code/modules/dagre_wrapper_shapes_util.md"},l=d('<p><a href="./../README.html">mermaid-docs</a> / <a href="./../modules.html">Exports</a> / dagre-wrapper/shapes/util</p><h1 id="module-dagre-wrapper-shapes-util" tabindex="-1">Module: dagre-wrapper/shapes/util <a class="header-anchor" href="#module-dagre-wrapper-shapes-util" aria-hidden="true">#</a></h1><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a></h2><h3 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-hidden="true">#</a></h3><ul><li><a href="./dagre_wrapper_shapes_util.html#insertpolygonshape">insertPolygonShape</a></li><li><a href="./dagre_wrapper_shapes_util.html#labelhelper">labelHelper</a></li><li><a href="./dagre_wrapper_shapes_util.html#updatenodebounds">updateNodeBounds</a></li></ul><h2 id="functions-1" tabindex="-1">Functions <a class="header-anchor" href="#functions-1" aria-hidden="true">#</a></h2><h3 id="insertpolygonshape" tabindex="-1">insertPolygonShape <a class="header-anchor" href="#insertpolygonshape" aria-hidden="true">#</a></h3><p>\u25B8 <strong>insertPolygonShape</strong>(<code>parent</code>, <code>w</code>, <code>h</code>, <code>points</code>): <code>any</code></p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>parent</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>w</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>h</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>points</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h4><p><code>any</code></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-hidden="true">#</a></h4><p><a href="https://github.com/emersonbottero/mermaid-docs/blob/f565dc0/src/dagre-wrapper/shapes/util.js#L66" target="_blank" rel="noreferrer">src/dagre-wrapper/shapes/util.js:66</a></p><hr><h3 id="labelhelper" tabindex="-1">labelHelper <a class="header-anchor" href="#labelhelper" aria-hidden="true">#</a></h3><p>\u25B8 <strong>labelHelper</strong>(<code>parent</code>, <code>node</code>, <code>_classes</code>, <code>isNode</code>): <code>Object</code></p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>parent</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>node</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>_classes</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>isNode</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-hidden="true">#</a></h4><p><code>Object</code></p><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>bbox</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>halfPadding</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>label</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>shapeSvg</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a></h4><p><a href="https://github.com/emersonbottero/mermaid-docs/blob/f565dc0/src/dagre-wrapper/shapes/util.js#L6" target="_blank" rel="noreferrer">src/dagre-wrapper/shapes/util.js:6</a></p><hr><h3 id="updatenodebounds" tabindex="-1">updateNodeBounds <a class="header-anchor" href="#updatenodebounds" aria-hidden="true">#</a></h3><p>\u25B8 <strong>updateNodeBounds</strong>(<code>node</code>, <code>element</code>): <code>void</code></p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>node</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>element</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a></h4><p><a href="https://github.com/emersonbottero/mermaid-docs/blob/f565dc0/src/dagre-wrapper/shapes/util.js#L54" target="_blank" rel="noreferrer">src/dagre-wrapper/shapes/util.js:54</a></p>',33),n=[l];function o(s,i,h,c,p,f){return a(),t("div",null,n)}const b=e(r,[["render",o]]);export{g as __pageData,b as default};