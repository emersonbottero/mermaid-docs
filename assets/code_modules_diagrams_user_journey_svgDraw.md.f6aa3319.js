import{_ as e,c as t,o as d,d as a}from"./app.ef92c309.js";const y=JSON.parse('{"title":"Module: diagrams/user-journey/svgDraw","description":"","frontmatter":{},"headers":[{"level":2,"title":"Table of contents","slug":"table-of-contents","link":"#table-of-contents","children":[{"level":3,"title":"Variables","slug":"variables","link":"#variables","children":[]},{"level":3,"title":"Functions","slug":"functions","link":"#functions","children":[]}]},{"level":2,"title":"Variables","slug":"variables-1","link":"#variables-1","children":[{"level":3,"title":"default","slug":"default","link":"#default","children":[]}]},{"level":2,"title":"Functions","slug":"functions-1","link":"#functions-1","children":[{"level":3,"title":"drawBackgroundRect","slug":"drawbackgroundrect","link":"#drawbackgroundrect","children":[]},{"level":3,"title":"drawCircle","slug":"drawcircle","link":"#drawcircle","children":[]},{"level":3,"title":"drawFace","slug":"drawface","link":"#drawface","children":[]},{"level":3,"title":"drawLabel","slug":"drawlabel","link":"#drawlabel","children":[]},{"level":3,"title":"drawRect","slug":"drawrect","link":"#drawrect","children":[]},{"level":3,"title":"drawSection","slug":"drawsection","link":"#drawsection","children":[]},{"level":3,"title":"drawTask","slug":"drawtask","link":"#drawtask","children":[]},{"level":3,"title":"drawText","slug":"drawtext","link":"#drawtext","children":[]},{"level":3,"title":"getNoteRect","slug":"getnoterect","link":"#getnoterect","children":[]},{"level":3,"title":"getTextObj","slug":"gettextobj","link":"#gettextobj","children":[]}]}],"relativePath":"code/modules/diagrams_user_journey_svgDraw.md"}'),r={name:"code/modules/diagrams_user_journey_svgDraw.md"},o=a('<p><a href="./../README.html">mermaid-docs</a> / <a href="./../modules.html">Exports</a> / diagrams/user-journey/svgDraw</p><h1 id="module-diagrams-user-journey-svgdraw" tabindex="-1">Module: diagrams/user-journey/svgDraw <a class="header-anchor" href="#module-diagrams-user-journey-svgdraw" aria-hidden="true">#</a></h1><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a></h2><h3 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-hidden="true">#</a></h3><ul><li><a href="./diagrams_user_journey_svgDraw.html#default">default</a></li></ul><h3 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-hidden="true">#</a></h3><ul><li><a href="./diagrams_user_journey_svgDraw.html#drawbackgroundrect">drawBackgroundRect</a></li><li><a href="./diagrams_user_journey_svgDraw.html#drawcircle">drawCircle</a></li><li><a href="./diagrams_user_journey_svgDraw.html#drawface">drawFace</a></li><li><a href="./diagrams_user_journey_svgDraw.html#drawlabel">drawLabel</a></li><li><a href="./diagrams_user_journey_svgDraw.html#drawrect">drawRect</a></li><li><a href="./diagrams_user_journey_svgDraw.html#drawsection">drawSection</a></li><li><a href="./diagrams_user_journey_svgDraw.html#drawtask">drawTask</a></li><li><a href="./diagrams_user_journey_svgDraw.html#drawtext">drawText</a></li><li><a href="./diagrams_user_journey_svgDraw.html#getnoterect">getNoteRect</a></li><li><a href="./diagrams_user_journey_svgDraw.html#gettextobj">getTextObj</a></li></ul><h2 id="variables-1" tabindex="-1">Variables <a class="header-anchor" href="#variables-1" aria-hidden="true">#</a></h2><h3 id="default" tabindex="-1">default <a class="header-anchor" href="#default" aria-hidden="true">#</a></h3><p>\u2022 <strong>default</strong>: <code>Object</code></p><h4 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>drawBackgroundRect</code></td><td style="text-align:left;">(<code>elem</code>: <code>any</code>, <code>bounds</code>: <code>any</code>) =&gt; <code>void</code></td></tr><tr><td style="text-align:left;"><code>drawCircle</code></td><td style="text-align:left;">(<code>element</code>: <code>any</code>, <code>circleData</code>: <code>any</code>) =&gt; <code>any</code></td></tr><tr><td style="text-align:left;"><code>drawLabel</code></td><td style="text-align:left;">(<code>elem</code>: <code>any</code>, <code>txtObject</code>: <code>any</code>) =&gt; <code>void</code></td></tr><tr><td style="text-align:left;"><code>drawRect</code></td><td style="text-align:left;">(<code>elem</code>: <code>any</code>, <code>rectData</code>: <code>any</code>) =&gt; <code>any</code></td></tr><tr><td style="text-align:left;"><code>drawSection</code></td><td style="text-align:left;">(<code>elem</code>: <code>any</code>, <code>section</code>: <code>any</code>, <code>conf</code>: <code>any</code>) =&gt; <code>void</code></td></tr><tr><td style="text-align:left;"><code>drawTask</code></td><td style="text-align:left;">(<code>elem</code>: <code>any</code>, <code>task</code>: <code>any</code>, <code>conf</code>: <code>any</code>) =&gt; <code>void</code></td></tr><tr><td style="text-align:left;"><code>drawText</code></td><td style="text-align:left;">(<code>elem</code>: <code>any</code>, <code>textData</code>: <code>any</code>) =&gt; <code>any</code></td></tr><tr><td style="text-align:left;"><code>getNoteRect</code></td><td style="text-align:left;">() =&gt; { <code>anchor</code>: <code>string</code> = &#39;start&#39;; <code>height</code>: <code>number</code> = 100; <code>rx</code>: <code>number</code> = 0; <code>ry</code>: <code>number</code> = 0; <code>width</code>: <code>number</code> = 100; <code>x</code>: <code>number</code> = 0; <code>y</code>: <code>number</code> = 0 }</td></tr><tr><td style="text-align:left;"><code>getTextObj</code></td><td style="text-align:left;">() =&gt; { <code>fill</code>: <code>undefined</code> = undefined; <code>height</code>: <code>number</code> = 100; <code>rx</code>: <code>number</code> = 0; <code>ry</code>: <code>number</code> = 0; <code>text-anchor</code>: <code>string</code> = &#39;start&#39;; <code>textMargin</code>: <code>number</code> = 0; <code>width</code>: <code>number</code> = 100; <code>x</code>: <code>number</code> = 0; <code>y</code>: <code>number</code> = 0 }</td></tr><tr><td style="text-align:left;"><code>initGraphics</code></td><td style="text-align:left;">(<code>graphics</code>: <code>any</code>) =&gt; <code>void</code></td></tr></tbody></table><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-hidden="true">#</a></h4><p><a href="https://github.com/emersonbottero/mermaid-docs/blob/f565dc0/src/diagrams/user-journey/svgDraw.js#L467" target="_blank" rel="noreferrer">src/diagrams/user-journey/svgDraw.js:467</a></p><h2 id="functions-1" tabindex="-1">Functions <a class="header-anchor" href="#functions-1" aria-hidden="true">#</a></h2><h3 id="drawbackgroundrect" tabindex="-1">drawBackgroundRect <a class="header-anchor" href="#drawbackgroundrect" aria-hidden="true">#</a></h3><p>\u25B8 <strong>drawBackgroundRect</strong>(<code>elem</code>, <code>bounds</code>): <code>void</code></p><p>Draws a background rectangle</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>elem</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">The html element</td></tr><tr><td style="text-align:left;"><code>bounds</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">The bounds of the drawing</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a></h4><p><a href="https://github.com/emersonbottero/mermaid-docs/blob/f565dc0/src/diagrams/user-journey/svgDraw.js#L297" target="_blank" rel="noreferrer">src/diagrams/user-journey/svgDraw.js:297</a></p><hr><h3 id="drawcircle" tabindex="-1">drawCircle <a class="header-anchor" href="#drawcircle" aria-hidden="true">#</a></h3><p>\u25B8 <strong>drawCircle</strong>(<code>element</code>, <code>circleData</code>): <code>any</code></p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>element</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>circleData</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-hidden="true">#</a></h4><p><code>any</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a></h4><p><a href="https://github.com/emersonbottero/mermaid-docs/blob/f565dc0/src/diagrams/user-journey/svgDraw.js#L110" target="_blank" rel="noreferrer">src/diagrams/user-journey/svgDraw.js:110</a></p><hr><h3 id="drawface" tabindex="-1">drawFace <a class="header-anchor" href="#drawface" aria-hidden="true">#</a></h3><p>\u25B8 <strong>drawFace</strong>(<code>element</code>, <code>faceData</code>): <code>any</code></p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>element</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>faceData</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-hidden="true">#</a></h4><p><code>any</code></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a></h4><p><a href="https://github.com/emersonbottero/mermaid-docs/blob/f565dc0/src/diagrams/user-journey/svgDraw.js#L21" target="_blank" rel="noreferrer">src/diagrams/user-journey/svgDraw.js:21</a></p><hr><h3 id="drawlabel" tabindex="-1">drawLabel <a class="header-anchor" href="#drawlabel" aria-hidden="true">#</a></h3><p>\u25B8 <strong>drawLabel</strong>(<code>elem</code>, <code>txtObject</code>): <code>void</code></p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>elem</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>txtObject</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-hidden="true">#</a></h4><p><a href="https://github.com/emersonbottero/mermaid-docs/blob/f565dc0/src/diagrams/user-journey/svgDraw.js#L152" target="_blank" rel="noreferrer">src/diagrams/user-journey/svgDraw.js:152</a></p><hr><h3 id="drawrect" tabindex="-1">drawRect <a class="header-anchor" href="#drawrect" aria-hidden="true">#</a></h3><p>\u25B8 <strong>drawRect</strong>(<code>elem</code>, <code>rectData</code>): <code>any</code></p><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>elem</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>rectData</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-hidden="true">#</a></h4><p><code>any</code></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-hidden="true">#</a></h4><p><a href="https://github.com/emersonbottero/mermaid-docs/blob/f565dc0/src/diagrams/user-journey/svgDraw.js#L3" target="_blank" rel="noreferrer">src/diagrams/user-journey/svgDraw.js:3</a></p><hr><h3 id="drawsection" tabindex="-1">drawSection <a class="header-anchor" href="#drawsection" aria-hidden="true">#</a></h3><p>\u25B8 <strong>drawSection</strong>(<code>elem</code>, <code>section</code>, <code>conf</code>): <code>void</code></p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>elem</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>section</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>conf</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-hidden="true">#</a></h4><p><a href="https://github.com/emersonbottero/mermaid-docs/blob/f565dc0/src/diagrams/user-journey/svgDraw.js#L192" target="_blank" rel="noreferrer">src/diagrams/user-journey/svgDraw.js:192</a></p><hr><h3 id="drawtask" tabindex="-1">drawTask <a class="header-anchor" href="#drawtask" aria-hidden="true">#</a></h3><p>\u25B8 <strong>drawTask</strong>(<code>elem</code>, <code>task</code>, <code>conf</code>): <code>void</code></p><p>Draws an actor in the diagram with the attaced line</p><h4 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>elem</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">The HTML element</td></tr><tr><td style="text-align:left;"><code>task</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">The task to render</td></tr><tr><td style="text-align:left;"><code>conf</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">The global configuration</td></tr></tbody></table><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-hidden="true">#</a></h4><p><a href="https://github.com/emersonbottero/mermaid-docs/blob/f565dc0/src/diagrams/user-journey/svgDraw.js#L227" target="_blank" rel="noreferrer">src/diagrams/user-journey/svgDraw.js:227</a></p><hr><h3 id="drawtext" tabindex="-1">drawText <a class="header-anchor" href="#drawtext" aria-hidden="true">#</a></h3><p>\u25B8 <strong>drawText</strong>(<code>elem</code>, <code>textData</code>): <code>any</code></p><h4 id="parameters-7" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-7" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>elem</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>textData</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-hidden="true">#</a></h4><p><code>any</code></p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-hidden="true">#</a></h4><p><a href="https://github.com/emersonbottero/mermaid-docs/blob/f565dc0/src/diagrams/user-journey/svgDraw.js#L130" target="_blank" rel="noreferrer">src/diagrams/user-journey/svgDraw.js:130</a></p><hr><h3 id="getnoterect" tabindex="-1">getNoteRect <a class="header-anchor" href="#getnoterect" aria-hidden="true">#</a></h3><p>\u25B8 <strong>getNoteRect</strong>(): <code>Object</code></p><h4 id="returns-8" tabindex="-1">Returns <a class="header-anchor" href="#returns-8" aria-hidden="true">#</a></h4><p><code>Object</code></p><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>anchor</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>height</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>rx</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>ry</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>width</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>x</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>y</code></td><td style="text-align:left;"><code>number</code></td></tr></tbody></table><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9" aria-hidden="true">#</a></h4><p><a href="https://github.com/emersonbottero/mermaid-docs/blob/f565dc0/src/diagrams/user-journey/svgDraw.js#L323" target="_blank" rel="noreferrer">src/diagrams/user-journey/svgDraw.js:323</a></p><hr><h3 id="gettextobj" tabindex="-1">getTextObj <a class="header-anchor" href="#gettextobj" aria-hidden="true">#</a></h3><p>\u25B8 <strong>getTextObj</strong>(): <code>Object</code></p><h4 id="returns-9" tabindex="-1">Returns <a class="header-anchor" href="#returns-9" aria-hidden="true">#</a></h4><p><code>Object</code></p><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>fill</code></td><td style="text-align:left;"><code>undefined</code></td></tr><tr><td style="text-align:left;"><code>height</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>rx</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>ry</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>text-anchor</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>textMargin</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>width</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>x</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>y</code></td><td style="text-align:left;"><code>number</code></td></tr></tbody></table><h4 id="defined-in-10" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-10" aria-hidden="true">#</a></h4><p><a href="https://github.com/emersonbottero/mermaid-docs/blob/f565dc0/src/diagrams/user-journey/svgDraw.js#L309" target="_blank" rel="noreferrer">src/diagrams/user-journey/svgDraw.js:309</a></p>',104),c=[o];function l(n,i,s,h,g,f){return d(),t("div",null,c)}const b=e(r,[["render",l]]);export{y as __pageData,b as default};