import{_ as s,c as a,o as e,d as n}from"./app.ef92c309.js";const u=JSON.parse('{"title":"Module: defaultConfig","description":"","frontmatter":{},"headers":[{"level":2,"title":"Table of contents","slug":"table-of-contents","link":"#table-of-contents","children":[{"level":3,"title":"Variables","slug":"variables","link":"#variables","children":[]}]},{"level":2,"title":"Variables","slug":"variables-1","link":"#variables-1","children":[{"level":3,"title":"configKeys","slug":"configkeys","link":"#configkeys","children":[]},{"level":3,"title":"default","slug":"default","link":"#default","children":[]}]},{"level":2,"title":"What follows are config instructions for older versions","slug":"what-follows-are-config-instructions-for-older-versions","link":"#what-follows-are-config-instructions-for-older-versions","children":[]}],"relativePath":"code/modules/defaultConfig.md"}'),o={name:"code/modules/defaultConfig.md"},l=n(`<p><a href="./../README.html">mermaid-docs</a> / <a href="./../modules.html">Exports</a> / defaultConfig</p><h1 id="module-defaultconfig" tabindex="-1">Module: defaultConfig <a class="header-anchor" href="#module-defaultconfig" aria-hidden="true">#</a></h1><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a></h2><h3 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-hidden="true">#</a></h3><ul><li><a href="./defaultConfig.html#configkeys">configKeys</a></li><li><a href="./defaultConfig.html#default">default</a></li></ul><h2 id="variables-1" tabindex="-1">Variables <a class="header-anchor" href="#variables-1" aria-hidden="true">#</a></h2><h3 id="configkeys" tabindex="-1">configKeys <a class="header-anchor" href="#configkeys" aria-hidden="true">#</a></h3><p>\u2022 <code>Const</code> <strong>configKeys</strong>: <code>string</code>[]</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-hidden="true">#</a></h4><p><a href="https://github.com/emersonbottero/mermaid-docs/blob/f565dc0/src/defaultConfig.ts#L1871" target="_blank" rel="noreferrer">src/defaultConfig.ts:1871</a></p><hr><h3 id="default" tabindex="-1">default <a class="header-anchor" href="#default" aria-hidden="true">#</a></h3><p>\u2022 <code>Const</code> <strong>default</strong>: <code>Partial</code>&lt;<a href="./../interfaces/config_type.MermaidConfig.html"><code>MermaidConfig</code></a>&gt;</p><p><strong>Configuration methods in Mermaid version 8.6.0 have been updated, to learn more[<a href="./8.6.0_docs.html">click here</a>].</strong></p><h2 id="what-follows-are-config-instructions-for-older-versions" tabindex="-1"><strong>What follows are config instructions for older versions</strong> <a class="header-anchor" href="#what-follows-are-config-instructions-for-older-versions" aria-hidden="true">#</a></h2><p>These are the default options which can be overridden with the initialization call like so:</p><p><strong>Example 1:</strong></p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;"> mermaid</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">initialize</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">flowchart</span><span style="color:#89DDFF;">:{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">htmlLabels</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p><strong>Example 2:</strong></p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> config </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">startOnLoad</span><span style="color:#89DDFF;">:</span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">flowchart</span><span style="color:#89DDFF;">:{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">useMaxWidth</span><span style="color:#89DDFF;">:</span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">htmlLabels</span><span style="color:#89DDFF;">:</span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">curve</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">cardinal</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">securityLevel</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">loose</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">};</span><span style="color:#A6ACCD;"> mermaid</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">initialize</span><span style="color:#A6ACCD;">(config)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>A summary of all options and their defaults is found <a href="#mermaidapi-configuration-defaults">here</a>. A description of each option follows below.</p><p><strong><code>Name</code></strong></p><p>Configuration</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a></h4><p><a href="https://github.com/emersonbottero/mermaid-docs/blob/f565dc0/src/defaultConfig.ts#L31" target="_blank" rel="noreferrer">src/defaultConfig.ts:31</a></p>`,25),t=[l];function r(i,p,c,d,f,h){return e(),a("div",null,t)}const y=s(o,[["render",r]]);export{u as __pageData,y as default};
