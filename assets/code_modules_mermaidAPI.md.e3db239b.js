import{_ as e,c as d,o as t,d as a}from"./app.ef92c309.js";const u=JSON.parse('{"title":"Module: mermaidAPI","description":"","frontmatter":{},"headers":[{"level":2,"title":"Table of contents","slug":"table-of-contents","link":"#table-of-contents","children":[{"level":3,"title":"References","slug":"references","link":"#references","children":[]},{"level":3,"title":"Variables","slug":"variables","link":"#variables","children":[]},{"level":3,"title":"Functions","slug":"functions","link":"#functions","children":[]}]},{"level":2,"title":"References","slug":"references-1","link":"#references-1","children":[{"level":3,"title":"default","slug":"default","link":"#default","children":[]}]},{"level":2,"title":"Variables","slug":"variables-1","link":"#variables-1","children":[{"level":3,"title":"mermaidAPI","slug":"mermaidapi","link":"#mermaidapi","children":[]}]},{"level":2,"title":"Functions","slug":"functions-1","link":"#functions-1","children":[{"level":3,"title":"decodeEntities","slug":"decodeentities","link":"#decodeentities","children":[]},{"level":3,"title":"encodeEntities","slug":"encodeentities","link":"#encodeentities","children":[]}]}],"relativePath":"code/modules/mermaidAPI.md"}'),i={name:"code/modules/mermaidAPI.md"},r=a('<p><a href="./../README.html">mermaid-docs</a> / <a href="./../modules.html">Exports</a> / mermaidAPI</p><h1 id="module-mermaidapi" tabindex="-1">Module: mermaidAPI <a class="header-anchor" href="#module-mermaidapi" aria-hidden="true">#</a></h1><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a></h2><h3 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-hidden="true">#</a></h3><ul><li><a href="./mermaidAPI.html#default">default</a></li></ul><h3 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-hidden="true">#</a></h3><ul><li><a href="./mermaidAPI.html#mermaidapi">mermaidAPI</a></li></ul><h3 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-hidden="true">#</a></h3><ul><li><a href="./mermaidAPI.html#decodeentities">decodeEntities</a></li><li><a href="./mermaidAPI.html#encodeentities">encodeEntities</a></li></ul><h2 id="references-1" tabindex="-1">References <a class="header-anchor" href="#references-1" aria-hidden="true">#</a></h2><h3 id="default" tabindex="-1">default <a class="header-anchor" href="#default" aria-hidden="true">#</a></h3><p>Renames and re-exports <a href="./mermaidAPI.html#mermaidapi">mermaidAPI</a></p><h2 id="variables-1" tabindex="-1">Variables <a class="header-anchor" href="#variables-1" aria-hidden="true">#</a></h2><h3 id="mermaidapi" tabindex="-1">mermaidAPI <a class="header-anchor" href="#mermaidapi" aria-hidden="true">#</a></h3><p>\u2022 <code>Const</code> <strong>mermaidAPI</strong>: <code>Readonly</code>&lt;{ <code>defaultConfig</code>: <a href="./../interfaces/config_type.MermaidConfig.html"><code>MermaidConfig</code></a> = configApi.defaultConfig; <code>getConfig</code>: () =&gt; <a href="./../interfaces/config_type.MermaidConfig.html"><code>MermaidConfig</code></a> = configApi.getConfig; <code>getSiteConfig</code>: () =&gt; <a href="./../interfaces/config_type.MermaidConfig.html"><code>MermaidConfig</code></a> = configApi.getSiteConfig; <code>globalReset</code>: () =&gt; <code>void</code> ; <code>initialize</code>: (<code>options</code>: <a href="./../interfaces/config_type.MermaidConfig.html"><code>MermaidConfig</code></a>) =&gt; <code>void</code> ; <code>parse</code>: (<code>text</code>: <code>string</code>, <code>parseError?</code>: <code>Function</code>) =&gt; <code>boolean</code> ; <code>parseDirective</code>: (<code>p</code>: <code>any</code>, <code>statement</code>: <code>string</code>, <code>context</code>: <code>string</code>, <code>type</code>: <code>string</code>) =&gt; <code>void</code> ; <code>render</code>: (<code>id</code>: <code>string</code>, <code>text</code>: <code>string</code>, <code>cb</code>: (<code>svgCode</code>: <code>string</code>, <code>bindFunctions?</code>: (<code>element</code>: <code>Element</code>) =&gt; <code>void</code>) =&gt; <code>void</code>, <code>container?</code>: <code>Element</code>) =&gt; <code>void</code> ; <code>reset</code>: () =&gt; <code>void</code> ; <code>setConfig</code>: (<code>conf</code>: <a href="./../interfaces/config_type.MermaidConfig.html"><code>MermaidConfig</code></a>) =&gt; <a href="./../interfaces/config_type.MermaidConfig.html"><code>MermaidConfig</code></a> = configApi.setConfig; <code>updateSiteConfig</code>: (<code>conf</code>: <a href="./../interfaces/config_type.MermaidConfig.html"><code>MermaidConfig</code></a>) =&gt; <a href="./../interfaces/config_type.MermaidConfig.html"><code>MermaidConfig</code></a> = configApi.updateSiteConfig }&gt;</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-hidden="true">#</a></h4><p><a href="https://github.com/emersonbottero/mermaid-docs/blob/f565dc0/src/mermaidAPI.ts#L493" target="_blank" rel="noreferrer">src/mermaidAPI.ts:493</a></p><h2 id="functions-1" tabindex="-1">Functions <a class="header-anchor" href="#functions-1" aria-hidden="true">#</a></h2><h3 id="decodeentities" tabindex="-1">decodeEntities <a class="header-anchor" href="#decodeentities" aria-hidden="true">#</a></h3><p>\u25B8 <strong>decodeEntities</strong>(<code>text</code>): <code>string</code></p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>text</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h4><p><code>string</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a></h4><p><a href="https://github.com/emersonbottero/mermaid-docs/blob/f565dc0/src/mermaidAPI.ts#L78" target="_blank" rel="noreferrer">src/mermaidAPI.ts:78</a></p><hr><h3 id="encodeentities" tabindex="-1">encodeEntities <a class="header-anchor" href="#encodeentities" aria-hidden="true">#</a></h3><p>\u25B8 <strong>encodeEntities</strong>(<code>text</code>): <code>string</code></p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>text</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-hidden="true">#</a></h4><p><code>string</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a></h4><p><a href="https://github.com/emersonbottero/mermaid-docs/blob/f565dc0/src/mermaidAPI.ts#L52" target="_blank" rel="noreferrer">src/mermaidAPI.ts:52</a></p>',35),o=[r];function n(c,s,l,h,f,m){return t(),d("div",null,o)}const p=e(i,[["render",n]]);export{u as __pageData,p as default};