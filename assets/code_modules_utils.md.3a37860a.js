import{_ as d,c as a,e as r,d as e,o as i,r as l}from"./app.ef92c309.js";const x=JSON.parse('{"title":"Module: utils","description":"","frontmatter":{},"headers":[{"level":2,"title":"Table of contents","slug":"table-of-contents","link":"#table-of-contents","children":[{"level":3,"title":"Interfaces","slug":"interfaces","link":"#interfaces","children":[]},{"level":3,"title":"Variables","slug":"variables","link":"#variables","children":[]},{"level":3,"title":"Functions","slug":"functions","link":"#functions","children":[]}]},{"level":2,"title":"Variables","slug":"variables-1","link":"#variables-1","children":[{"level":3,"title":"calculateTextDimensions","slug":"calculatetextdimensions","link":"#calculatetextdimensions","children":[]},{"level":3,"title":"default","slug":"default","link":"#default","children":[]},{"level":3,"title":"initIdGenerator","slug":"initidgenerator","link":"#initidgenerator","children":[]},{"level":3,"title":"wrapLabel","slug":"wraplabel","link":"#wraplabel","children":[]}]},{"level":2,"title":"Functions","slug":"functions-1","link":"#functions-1","children":[{"level":3,"title":"calculateTextHeight","slug":"calculatetextheight","link":"#calculatetextheight","children":[]},{"level":3,"title":"calculateTextWidth","slug":"calculatetextwidth","link":"#calculatetextwidth","children":[]},{"level":3,"title":"detectDirective","slug":"detectdirective","link":"#detectdirective","children":[]},{"level":3,"title":"detectInit","slug":"detectinit","link":"#detectinit","children":[]},{"level":3,"title":"directiveSanitizer","slug":"directivesanitizer","link":"#directivesanitizer","children":[]},{"level":3,"title":"drawSimpleText","slug":"drawsimpletext","link":"#drawsimpletext","children":[]},{"level":3,"title":"entityDecode","slug":"entitydecode","link":"#entitydecode","children":[]},{"level":3,"title":"formatUrl","slug":"formaturl","link":"#formaturl","children":[]},{"level":3,"title":"generateId","slug":"generateid","link":"#generateid","children":[]},{"level":3,"title":"getErrorMessage","slug":"geterrormessage","link":"#geterrormessage","children":[]},{"level":3,"title":"getStylesFromArray","slug":"getstylesfromarray","link":"#getstylesfromarray","children":[]},{"level":3,"title":"getTextObj","slug":"gettextobj","link":"#gettextobj","children":[]},{"level":3,"title":"interpolateToCurve","slug":"interpolatetocurve","link":"#interpolatetocurve","children":[]},{"level":3,"title":"isDetailedError","slug":"isdetailederror","link":"#isdetailederror","children":[]},{"level":3,"title":"isSubstringInArray","slug":"issubstringinarray","link":"#issubstringinarray","children":[]},{"level":3,"title":"random","slug":"random","link":"#random","children":[]},{"level":3,"title":"runFunc","slug":"runfunc","link":"#runfunc","children":[]},{"level":3,"title":"sanitizeCss","slug":"sanitizecss","link":"#sanitizecss","children":[]}]}],"relativePath":"code/modules/utils.md"}'),n={name:"code/modules/utils.md"},o=e('<p><a href="./../README.html">mermaid-docs</a> / <a href="./../modules.html">Exports</a> / utils</p><h1 id="module-utils" tabindex="-1">Module: utils <a class="header-anchor" href="#module-utils" aria-hidden="true">#</a></h1><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a></h2><h3 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-hidden="true">#</a></h3><ul><li><a href="./../interfaces/utils.DetailedError.html">DetailedError</a></li></ul><h3 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-hidden="true">#</a></h3><ul><li><a href="./utils.html#calculatetextdimensions">calculateTextDimensions</a></li><li><a href="./utils.html#default">default</a></li><li><a href="./utils.html#initidgenerator">initIdGenerator</a></li><li><a href="./utils.html#wraplabel">wrapLabel</a></li></ul><h3 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-hidden="true">#</a></h3><ul><li><a href="./utils.html#calculatetextheight">calculateTextHeight</a></li><li><a href="./utils.html#calculatetextwidth">calculateTextWidth</a></li><li><a href="./utils.html#detectdirective">detectDirective</a></li><li><a href="./utils.html#detectinit">detectInit</a></li><li><a href="./utils.html#directivesanitizer">directiveSanitizer</a></li><li><a href="./utils.html#drawsimpletext">drawSimpleText</a></li><li><a href="./utils.html#entitydecode">entityDecode</a></li><li><a href="./utils.html#formaturl">formatUrl</a></li><li><a href="./utils.html#generateid">generateId</a></li><li><a href="./utils.html#geterrormessage">getErrorMessage</a></li><li><a href="./utils.html#getstylesfromarray">getStylesFromArray</a></li><li><a href="./utils.html#gettextobj">getTextObj</a></li><li><a href="./utils.html#interpolatetocurve">interpolateToCurve</a></li><li><a href="./utils.html#isdetailederror">isDetailedError</a></li><li><a href="./utils.html#issubstringinarray">isSubstringInArray</a></li><li><a href="./utils.html#random">random</a></li><li><a href="./utils.html#runfunc">runFunc</a></li><li><a href="./utils.html#sanitizecss">sanitizeCss</a></li></ul><h2 id="variables-1" tabindex="-1">Variables <a class="header-anchor" href="#variables-1" aria-hidden="true">#</a></h2><h3 id="calculatetextdimensions" tabindex="-1">calculateTextDimensions <a class="header-anchor" href="#calculatetextdimensions" aria-hidden="true">#</a></h3><p>\u2022 <code>Const</code> <strong>calculateTextDimensions</strong>: <code>any</code></p><p>This calculates the dimensions of the given text, font size, font family, font weight, and margins.</p><p><strong><code>Param</code></strong></p><p>The text to calculate the width of</p><p><strong><code>Param</code></strong></p><p>The config for fontSize, fontFamily, fontWeight, and margin all impacting the resulting size</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-hidden="true">#</a></h4><p><a href="https://github.com/emersonbottero/mermaid-docs/blob/f565dc0/src/utils.ts#L646" target="_blank" rel="noreferrer">src/utils.ts:646</a></p><hr><h3 id="default" tabindex="-1">default <a class="header-anchor" href="#default" aria-hidden="true">#</a></h3><p>\u2022 <strong>default</strong>: <code>Object</code></p><h4 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>assignWithDepth</code></td><td style="text-align:left;">(<code>dst</code>: <code>any</code>, <code>src</code>: <code>any</code>, <code>config?</code>: { <code>clobber</code>: <code>boolean</code> ; <code>depth</code>: <code>number</code> }) =&gt; <code>any</code></td></tr><tr><td style="text-align:left;"><code>calcCardinalityPosition</code></td><td style="text-align:left;">(<code>isRelationTypePresent</code>: <code>any</code>, <code>points</code>: <code>any</code>, <code>initialPosition</code>: <code>any</code>) =&gt; { <code>x</code>: <code>number</code> = 0; <code>y</code>: <code>number</code> = 0 }</td></tr><tr><td style="text-align:left;"><code>calcLabelPosition</code></td><td style="text-align:left;">(<code>points</code>: <code>any</code>) =&gt; <code>any</code></td></tr><tr><td style="text-align:left;"><code>calcTerminalLabelPosition</code></td><td style="text-align:left;">(<code>terminalMarkerSize</code>: <code>any</code>, <code>position</code>: <code>any</code>, <code>_points</code>: <code>any</code>) =&gt; { <code>x</code>: <code>number</code> = 0; <code>y</code>: <code>number</code> = 0 }</td></tr><tr><td style="text-align:left;"><code>calculateTextDimensions</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>calculateTextHeight</code></td><td style="text-align:left;">(<code>text</code>: <code>any</code>, <code>config</code>: <code>any</code>) =&gt; <code>any</code></td></tr><tr><td style="text-align:left;"><code>calculateTextWidth</code></td><td style="text-align:left;">(<code>text</code>: <code>any</code>, <code>config</code>: <code>any</code>) =&gt; <code>any</code></td></tr><tr><td style="text-align:left;"><code>detectDirective</code></td><td style="text-align:left;">(<code>text</code>: <code>any</code>, <code>type</code>: <code>null</code>) =&gt; { <code>args</code>: <code>any</code> ; <code>type</code>: <code>string</code> } | { <code>args</code>: <code>null</code> = null; <code>type</code>: <code>any</code> = text } | ({ <code>args</code>: <code>any</code> ; <code>type</code>: <code>string</code> } | { <code>args</code>: <code>null</code> = null; <code>type</code>: <code>any</code> = text })[]</td></tr><tr><td style="text-align:left;"><code>detectInit</code></td><td style="text-align:left;">(<code>text</code>: <code>string</code>, <code>config?</code>: <a href="./../interfaces/config_type.MermaidConfig.html"><code>MermaidConfig</code></a>) =&gt; <a href="./../interfaces/config_type.MermaidConfig.html"><code>MermaidConfig</code></a></td></tr><tr><td style="text-align:left;"><code>directiveSanitizer</code></td><td style="text-align:left;">(<code>args</code>: <code>any</code>) =&gt; <code>void</code></td></tr><tr><td style="text-align:left;"><code>entityDecode</code></td><td style="text-align:left;">(<code>html</code>: <code>any</code>) =&gt; <code>string</code></td></tr><tr><td style="text-align:left;"><code>formatUrl</code></td><td style="text-align:left;">(<code>linkStr</code>: <code>any</code>, <code>config</code>: <code>any</code>) =&gt; <code>any</code></td></tr><tr><td style="text-align:left;"><code>generateId</code></td><td style="text-align:left;">() =&gt; <code>string</code></td></tr><tr><td style="text-align:left;"><code>getStylesFromArray</code></td><td style="text-align:left;">(<code>arr</code>: <code>any</code>) =&gt; { <code>labelStyle</code>: <code>string</code> = labelStyle; <code>style</code>: <code>string</code> = style }</td></tr><tr><td style="text-align:left;"><code>initIdGenerator</code></td><td style="text-align:left;">typeof <code>iterator</code></td></tr><tr><td style="text-align:left;"><code>interpolateToCurve</code></td><td style="text-align:left;">(<code>interpolate</code>: <code>any</code>, <code>defaultCurve</code>: <code>any</code>) =&gt; <code>any</code></td></tr><tr><td style="text-align:left;"><code>isSubstringInArray</code></td><td style="text-align:left;">(<code>str</code>: <code>any</code>, <code>arr</code>: <code>any</code>) =&gt; <code>number</code></td></tr><tr><td style="text-align:left;"><code>random</code></td><td style="text-align:left;">(<code>options</code>: <code>any</code>) =&gt; <code>string</code></td></tr><tr><td style="text-align:left;"><code>runFunc</code></td><td style="text-align:left;">(<code>functionName</code>: <code>any</code>, ...<code>params</code>: <code>any</code>[]) =&gt; <code>void</code></td></tr><tr><td style="text-align:left;"><code>sanitizeCss</code></td><td style="text-align:left;">(<code>str</code>: <code>any</code>) =&gt; <code>any</code></td></tr><tr><td style="text-align:left;"><code>wrapLabel</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a></h4><p><a href="https://github.com/emersonbottero/mermaid-docs/blob/f565dc0/src/utils.ts#L842" target="_blank" rel="noreferrer">src/utils.ts:842</a></p><hr><h3 id="initidgenerator" tabindex="-1">initIdGenerator <a class="header-anchor" href="#initidgenerator" aria-hidden="true">#</a></h3><p>\u2022 <code>Const</code> <strong>initIdGenerator</strong>: typeof <code>iterator</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a></h4><p><a href="https://github.com/emersonbottero/mermaid-docs/blob/f565dc0/src/utils.ts#L706" target="_blank" rel="noreferrer">src/utils.ts:706</a></p><hr><h3 id="wraplabel" tabindex="-1">wrapLabel <a class="header-anchor" href="#wraplabel" aria-hidden="true">#</a></h3><p>\u2022 <code>Const</code> <strong>wrapLabel</strong>: <code>any</code></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a></h4><p><a href="https://github.com/emersonbottero/mermaid-docs/blob/f565dc0/src/utils.ts#L537" target="_blank" rel="noreferrer">src/utils.ts:537</a></p><h2 id="functions-1" tabindex="-1">Functions <a class="header-anchor" href="#functions-1" aria-hidden="true">#</a></h2><h3 id="calculatetextheight" tabindex="-1">calculateTextHeight <a class="header-anchor" href="#calculatetextheight" aria-hidden="true">#</a></h3><p>\u25B8 <strong>calculateTextHeight</strong>(<code>text</code>, <code>config</code>): <code>any</code></p><p>This calculates the text&#39;s height, taking into account the wrap breaks and both the statically configured height, width, and the length of the text (in pixels).</p><p>If the wrapped text text has greater height, we extend the height, so it&#39;s value won&#39;t overflow.</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>text</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">The text to measure</td></tr><tr><td style="text-align:left;"><code>config</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">The config for fontSize, fontFamily, and fontWeight all impacting the resulting size</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h4><p><code>any</code></p><ul><li>The height for the given text</li></ul><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-hidden="true">#</a></h4><p><a href="https://github.com/emersonbottero/mermaid-docs/blob/f565dc0/src/utils.ts#L616" target="_blank" rel="noreferrer">src/utils.ts:616</a></p><hr><h3 id="calculatetextwidth" tabindex="-1">calculateTextWidth <a class="header-anchor" href="#calculatetextwidth" aria-hidden="true">#</a></h3><p>\u25B8 <strong>calculateTextWidth</strong>(<code>text</code>, <code>config</code>): <code>any</code></p><p>This calculates the width of the given text, font size and family.</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>text</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">The text to calculate the width of</td></tr><tr><td style="text-align:left;"><code>config</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">The config for fontSize, fontFamily, and fontWeight all impacting the resulting size</td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-hidden="true">#</a></h4><p><code>any</code></p><ul><li>The width for the given text</li></ul><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-hidden="true">#</a></h4><p><a href="https://github.com/emersonbottero/mermaid-docs/blob/f565dc0/src/utils.ts#L632" target="_blank" rel="noreferrer">src/utils.ts:632</a></p><hr><h3 id="detectdirective" tabindex="-1">detectDirective <a class="header-anchor" href="#detectdirective" aria-hidden="true">#</a></h3><p>\u25B8 <strong>detectDirective</strong>(<code>text</code>, <code>type?</code>): { <code>args</code>: <code>any</code> ; <code>type</code>: <code>string</code> } | { <code>args</code>: <code>null</code> = null; <code>type</code>: <code>any</code> = text } | ({ <code>args</code>: <code>any</code> ; <code>type</code>: <code>string</code> } | { <code>args</code>: <code>null</code> = null; <code>type</code>: <code>any</code> = text })[]</p><p><strong><code>Function</code></strong></p><p>detectDirective Detects the directive from the text. Text can be single line or multiline. If type is null or omitted the first directive encountered in text will be returned</p>',64),c=e('<h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>text</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">The text defining the graph</td></tr><tr><td style="text-align:left;"><code>type</code></td><td style="text-align:left;"><code>null</code></td><td style="text-align:left;"><code>null</code></td><td style="text-align:left;">The directive to return (default: null)</td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-hidden="true">#</a></h4><p>{ <code>args</code>: <code>any</code> ; <code>type</code>: <code>string</code> } | { <code>args</code>: <code>null</code> = null; <code>type</code>: <code>any</code> = text } | ({ <code>args</code>: <code>any</code> ; <code>type</code>: <code>string</code> } | { <code>args</code>: <code>null</code> = null; <code>type</code>: <code>any</code> = text })[]</p><p>An object or Array representing the directive(s): { type: string, args: object|null } matched by the input type if a single directive was found, that directive object will be returned.</p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-hidden="true">#</a></h4><p><a href="https://github.com/emersonbottero/mermaid-docs/blob/f565dc0/src/utils.ts#L128" target="_blank" rel="noreferrer">src/utils.ts:128</a></p><hr><h3 id="detectinit" tabindex="-1">detectInit <a class="header-anchor" href="#detectinit" aria-hidden="true">#</a></h3><p>\u25B8 <strong>detectInit</strong>(<code>text</code>, <code>config?</code>): <a href="./../interfaces/config_type.MermaidConfig.html"><code>MermaidConfig</code></a></p><p><strong><code>Function</code></strong></p><p>detectInit Detects the init config object from the text</p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>text</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">The text defining the graph</td></tr><tr><td style="text-align:left;"><code>config?</code></td><td style="text-align:left;"><a href="./../interfaces/config_type.MermaidConfig.html"><code>MermaidConfig</code></a></td><td style="text-align:left;"><code>mermaid %%{init: {&quot;theme&quot;: &quot;debug&quot;, &quot;logLevel&quot;: 1 }}%% graph LR a--&gt;b b--&gt;c c--&gt;d d--&gt;e e--&gt;f f--&gt;g g--&gt;h </code> Or <code>mermaid %%{initialize: {&quot;theme&quot;: &quot;dark&quot;, logLevel: &quot;debug&quot; }}%% graph LR a--&gt;b b--&gt;c c--&gt;d d--&gt;e e--&gt;f f--&gt;g g--&gt;h </code></td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-hidden="true">#</a></h4><p><a href="./../interfaces/config_type.MermaidConfig.html"><code>MermaidConfig</code></a></p><p>The json object representing the init passed to mermaid.initialize()</p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-hidden="true">#</a></h4><p><a href="https://github.com/emersonbottero/mermaid-docs/blob/f565dc0/src/utils.ts#L78" target="_blank" rel="noreferrer">src/utils.ts:78</a></p><hr><h3 id="directivesanitizer" tabindex="-1">directiveSanitizer <a class="header-anchor" href="#directivesanitizer" aria-hidden="true">#</a></h3><p>\u25B8 <strong>directiveSanitizer</strong>(<code>args</code>): <code>void</code></p><p>Sanitizes directive objects</p><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>args</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">Directive&#39;s JSON</td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-hidden="true">#</a></h4><p><a href="https://github.com/emersonbottero/mermaid-docs/blob/f565dc0/src/utils.ts#L744" target="_blank" rel="noreferrer">src/utils.ts:744</a></p><hr><h3 id="drawsimpletext" tabindex="-1">drawSimpleText <a class="header-anchor" href="#drawsimpletext" aria-hidden="true">#</a></h3><p>\u25B8 <strong>drawSimpleText</strong>(<code>elem</code>, <code>textData</code>): <code>any</code></p><p>Adds text to an element</p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>elem</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">Element to add text to</td></tr><tr><td style="text-align:left;"><code>textData</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;"></td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-hidden="true">#</a></h4><p><code>any</code></p><p>Text element with given styling and content</p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9" aria-hidden="true">#</a></h4><p><a href="https://github.com/emersonbottero/mermaid-docs/blob/f565dc0/src/utils.ts#L513" target="_blank" rel="noreferrer">src/utils.ts:513</a></p><hr><h3 id="entitydecode" tabindex="-1">entityDecode <a class="header-anchor" href="#entitydecode" aria-hidden="true">#</a></h3><p>\u25B8 <strong>entityDecode</strong>(<code>html</code>): <code>string</code></p><p>Decodes HTML, source: <a href="https://github.com/shrpne/entity-decode/blob/v2.0.1/browser.js" target="_blank" rel="noreferrer">https://github.com/shrpne/entity-decode/blob/v2.0.1/browser.js</a></p><h4 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>html</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">HTML as a string</td></tr></tbody></table><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-hidden="true">#</a></h4><p><code>string</code></p><p>Unescaped HTML</p><h4 id="defined-in-10" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-10" aria-hidden="true">#</a></h4><p><a href="https://github.com/emersonbottero/mermaid-docs/blob/f565dc0/src/utils.ts#L730" target="_blank" rel="noreferrer">src/utils.ts:730</a></p><hr><h3 id="formaturl" tabindex="-1">formatUrl <a class="header-anchor" href="#formaturl" aria-hidden="true">#</a></h3><p>\u25B8 <strong>formatUrl</strong>(<code>linkStr</code>, <code>config</code>): <code>any</code></p><p>Formats a URL string</p><h4 id="parameters-7" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-7" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>linkStr</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">String of the URL</td></tr><tr><td style="text-align:left;"><code>config</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">Configuration passed to MermaidJS</td></tr></tbody></table><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-hidden="true">#</a></h4><p><code>any</code></p><p>The formatted URL</p><h4 id="defined-in-11" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-11" aria-hidden="true">#</a></h4><p><a href="https://github.com/emersonbottero/mermaid-docs/blob/f565dc0/src/utils.ts#L204" target="_blank" rel="noreferrer">src/utils.ts:204</a></p><hr><h3 id="generateid" tabindex="-1">generateId <a class="header-anchor" href="#generateid" aria-hidden="true">#</a></h3><p>\u25B8 <strong>generateId</strong>(): <code>string</code></p><h4 id="returns-8" tabindex="-1">Returns <a class="header-anchor" href="#returns-8" aria-hidden="true">#</a></h4><p><code>string</code></p><h4 id="defined-in-12" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-12" aria-hidden="true">#</a></h4><p><a href="https://github.com/emersonbottero/mermaid-docs/blob/f565dc0/src/utils.ts#L456" target="_blank" rel="noreferrer">src/utils.ts:456</a></p><hr><h3 id="geterrormessage" tabindex="-1">getErrorMessage <a class="header-anchor" href="#geterrormessage" aria-hidden="true">#</a></h3><p>\u25B8 <strong>getErrorMessage</strong>(<code>error</code>): <code>string</code></p><h4 id="parameters-8" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-8" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>error</code></td><td style="text-align:left;"><code>unknown</code></td></tr></tbody></table><h4 id="returns-9" tabindex="-1">Returns <a class="header-anchor" href="#returns-9" aria-hidden="true">#</a></h4><p><code>string</code></p><h4 id="defined-in-13" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-13" aria-hidden="true">#</a></h4><p><a href="https://github.com/emersonbottero/mermaid-docs/blob/f565dc0/src/utils.ts#L837" target="_blank" rel="noreferrer">src/utils.ts:837</a></p><hr><h3 id="getstylesfromarray" tabindex="-1">getStylesFromArray <a class="header-anchor" href="#getstylesfromarray" aria-hidden="true">#</a></h3><p>\u25B8 <strong>getStylesFromArray</strong>(<code>arr</code>): <code>Object</code></p><p>Gets styles from an array of declarations</p><h4 id="parameters-9" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-9" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>arr</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">Declarations</td></tr></tbody></table><h4 id="returns-10" tabindex="-1">Returns <a class="header-anchor" href="#returns-10" aria-hidden="true">#</a></h4><p><code>Object</code></p><p>The styles grouped as strings</p><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>labelStyle</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>style</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="defined-in-14" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-14" aria-hidden="true">#</a></h4><p><a href="https://github.com/emersonbottero/mermaid-docs/blob/f565dc0/src/utils.ts#L437" target="_blank" rel="noreferrer">src/utils.ts:437</a></p><hr><h3 id="gettextobj" tabindex="-1">getTextObj <a class="header-anchor" href="#gettextobj" aria-hidden="true">#</a></h3><p>\u25B8 <strong>getTextObj</strong>(): <code>Object</code></p><h4 id="returns-11" tabindex="-1">Returns <a class="header-anchor" href="#returns-11" aria-hidden="true">#</a></h4><p><code>Object</code></p><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>anchor</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>fill</code></td><td style="text-align:left;"><code>undefined</code></td></tr><tr><td style="text-align:left;"><code>height</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>rx</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>ry</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>style</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>textMargin</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>valign</code></td><td style="text-align:left;"><code>undefined</code></td></tr><tr><td style="text-align:left;"><code>width</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>x</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>y</code></td><td style="text-align:left;"><code>number</code></td></tr></tbody></table><h4 id="defined-in-15" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-15" aria-hidden="true">#</a></h4><p><a href="https://github.com/emersonbottero/mermaid-docs/blob/f565dc0/src/utils.ts#L479" target="_blank" rel="noreferrer">src/utils.ts:479</a></p><hr><h3 id="interpolatetocurve" tabindex="-1">interpolateToCurve <a class="header-anchor" href="#interpolatetocurve" aria-hidden="true">#</a></h3><p>\u25B8 <strong>interpolateToCurve</strong>(<code>interpolate</code>, <code>defaultCurve</code>): <code>any</code></p><p>Returns a d3 curve given a curve name</p><h4 id="parameters-10" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-10" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>interpolate</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">The interpolation name</td></tr><tr><td style="text-align:left;"><code>defaultCurve</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">The default curve to return</td></tr></tbody></table><h4 id="returns-12" tabindex="-1">Returns <a class="header-anchor" href="#returns-12" aria-hidden="true">#</a></h4><p><code>any</code></p><p>The curve factory to use</p><h4 id="defined-in-16" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-16" aria-hidden="true">#</a></h4><p><a href="https://github.com/emersonbottero/mermaid-docs/blob/f565dc0/src/utils.ts#L189" target="_blank" rel="noreferrer">src/utils.ts:189</a></p><hr><h3 id="isdetailederror" tabindex="-1">isDetailedError <a class="header-anchor" href="#isdetailederror" aria-hidden="true">#</a></h3><p>\u25B8 <strong>isDetailedError</strong>(<code>error</code>): error is DetailedError</p><h4 id="parameters-11" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-11" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>error</code></td><td style="text-align:left;"><code>unknown</code></td></tr></tbody></table><h4 id="returns-13" tabindex="-1">Returns <a class="header-anchor" href="#returns-13" aria-hidden="true">#</a></h4><p>error is DetailedError</p><h4 id="defined-in-17" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-17" aria-hidden="true">#</a></h4><p><a href="https://github.com/emersonbottero/mermaid-docs/blob/f565dc0/src/utils.ts#L832" target="_blank" rel="noreferrer">src/utils.ts:832</a></p><hr><h3 id="issubstringinarray" tabindex="-1">isSubstringInArray <a class="header-anchor" href="#issubstringinarray" aria-hidden="true">#</a></h3><p>\u25B8 <strong>isSubstringInArray</strong>(<code>str</code>, <code>arr</code>): <code>number</code></p><p><strong><code>Function</code></strong></p><p>isSubstringInArray Detects whether a substring in present in a given array</p><h4 id="parameters-12" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-12" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>str</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">The substring to detect</td></tr><tr><td style="text-align:left;"><code>arr</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">The array to search</td></tr></tbody></table><h4 id="returns-14" tabindex="-1">Returns <a class="header-anchor" href="#returns-14" aria-hidden="true">#</a></h4><p><code>number</code></p><p>The array index containing the substring or -1 if not present</p><h4 id="defined-in-18" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-18" aria-hidden="true">#</a></h4><p><a href="https://github.com/emersonbottero/mermaid-docs/blob/f565dc0/src/utils.ts#L175" target="_blank" rel="noreferrer">src/utils.ts:175</a></p><hr><h3 id="random" tabindex="-1">random <a class="header-anchor" href="#random" aria-hidden="true">#</a></h3><p>\u25B8 <strong>random</strong>(<code>options</code>): <code>string</code></p><h4 id="parameters-13" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-13" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>options</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="returns-15" tabindex="-1">Returns <a class="header-anchor" href="#returns-15" aria-hidden="true">#</a></h4><p><code>string</code></p><h4 id="defined-in-19" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-19" aria-hidden="true">#</a></h4><p><a href="https://github.com/emersonbottero/mermaid-docs/blob/f565dc0/src/utils.ts#L475" target="_blank" rel="noreferrer">src/utils.ts:475</a></p><hr><h3 id="runfunc" tabindex="-1">runFunc <a class="header-anchor" href="#runfunc" aria-hidden="true">#</a></h3><p>\u25B8 <strong>runFunc</strong>(<code>functionName</code>, ...<code>params</code>): <code>void</code></p><p>Runs a function</p><h4 id="parameters-14" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-14" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionName</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">A dot seperated path to the function relative to the <code>window</code></td></tr><tr><td style="text-align:left;"><code>...params</code></td><td style="text-align:left;"><code>any</code>[]</td><td style="text-align:left;">Parameters to pass to the function</td></tr></tbody></table><h4 id="returns-16" tabindex="-1">Returns <a class="header-anchor" href="#returns-16" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-20" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-20" aria-hidden="true">#</a></h4><p><a href="https://github.com/emersonbottero/mermaid-docs/blob/f565dc0/src/utils.ts#L222" target="_blank" rel="noreferrer">src/utils.ts:222</a></p><hr><h3 id="sanitizecss" tabindex="-1">sanitizeCss <a class="header-anchor" href="#sanitizecss" aria-hidden="true">#</a></h3><p>\u25B8 <strong>sanitizeCss</strong>(<code>str</code>): <code>any</code></p><h4 id="parameters-15" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-15" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>str</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="returns-17" tabindex="-1">Returns <a class="header-anchor" href="#returns-17" aria-hidden="true">#</a></h4><p><code>any</code></p><h4 id="defined-in-21" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-21" aria-hidden="true">#</a></h4><p><a href="https://github.com/emersonbottero/mermaid-docs/blob/f565dc0/src/utils.ts#L805" target="_blank" rel="noreferrer">src/utils.ts:805</a></p>',158);function s(h,f,g,u,y,p){const t=l("Mermaid");return i(),a("div",null,[o,r(t,{id:"mermaid_64a551a6",graph:"graph%20LR%0A%20%25%25%7Bsomedirective%7D%25%25%0A%20a--%3Eb%0A%20b--%3Ec%0A%20c--%3Ed%0A%20d--%3Ee%0A%20e--%3Ef%0A%20f--%3Eg%0A%20g--%3Eh"}),c])}const m=d(n,[["render",s]]);export{x as __pageData,m as default};
