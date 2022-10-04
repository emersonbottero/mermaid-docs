import{_ as e,c as t,o as d,d as o}from"./app.ef92c309.js";const x=JSON.parse('{"title":"Module: diagrams/requirement/requirementDb","description":"","frontmatter":{},"headers":[{"level":2,"title":"Table of contents","slug":"table-of-contents","link":"#table-of-contents","children":[{"level":3,"title":"Variables","slug":"variables","link":"#variables","children":[]},{"level":3,"title":"Functions","slug":"functions","link":"#functions","children":[]}]},{"level":2,"title":"Variables","slug":"variables-1","link":"#variables-1","children":[{"level":3,"title":"default","slug":"default","link":"#default","children":[]}]},{"level":2,"title":"Functions","slug":"functions-1","link":"#functions-1","children":[{"level":3,"title":"parseDirective","slug":"parsedirective","link":"#parsedirective","children":[]}]}],"relativePath":"code/modules/diagrams_requirement_requirementDb.md"}'),c={name:"code/modules/diagrams_requirement_requirementDb.md"},l=o('<p><a href="./../README.html">mermaid-docs</a> / <a href="./../modules.html">Exports</a> / diagrams/requirement/requirementDb</p><h1 id="module-diagrams-requirement-requirementdb" tabindex="-1">Module: diagrams/requirement/requirementDb <a class="header-anchor" href="#module-diagrams-requirement-requirementdb" aria-hidden="true">#</a></h1><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a></h2><h3 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-hidden="true">#</a></h3><ul><li><a href="./diagrams_requirement_requirementDb.html#default">default</a></li></ul><h3 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-hidden="true">#</a></h3><ul><li><a href="./diagrams_requirement_requirementDb.html#parsedirective">parseDirective</a></li></ul><h2 id="variables-1" tabindex="-1">Variables <a class="header-anchor" href="#variables-1" aria-hidden="true">#</a></h2><h3 id="default" tabindex="-1">default <a class="header-anchor" href="#default" aria-hidden="true">#</a></h3><p>\u2022 <strong>default</strong>: <code>Object</code></p><h4 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>Relationships</code></td><td style="text-align:left;">{ <code>CONTAINS</code>: <code>string</code> = &#39;contains&#39;; <code>COPIES</code>: <code>string</code> = &#39;copies&#39;; <code>DERIVES</code>: <code>string</code> = &#39;derives&#39;; <code>REFINES</code>: <code>string</code> = &#39;refines&#39;; <code>SATISFIES</code>: <code>string</code> = &#39;satisfies&#39;; <code>TRACES</code>: <code>string</code> = &#39;traces&#39;; <code>VERIFIES</code>: <code>string</code> = &#39;verifies&#39; }</td></tr><tr><td style="text-align:left;"><code>Relationships.CONTAINS</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>Relationships.COPIES</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>Relationships.DERIVES</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>Relationships.REFINES</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>Relationships.SATISFIES</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>Relationships.TRACES</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>Relationships.VERIFIES</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>RequirementType</code></td><td style="text-align:left;">{ <code>DESIGN_CONSTRAINT</code>: <code>string</code> = &#39;Design Constraint&#39;; <code>FUNCTIONAL_REQUIREMENT</code>: <code>string</code> = &#39;Functional Requirement&#39;; <code>INTERFACE_REQUIREMENT</code>: <code>string</code> = &#39;Interface Requirement&#39;; <code>PERFORMANCE_REQUIREMENT</code>: <code>string</code> = &#39;Performance Requirement&#39;; <code>PHYSICAL_REQUIREMENT</code>: <code>string</code> = &#39;Physical Requirement&#39;; <code>REQUIREMENT</code>: <code>string</code> = &#39;Requirement&#39; }</td></tr><tr><td style="text-align:left;"><code>RequirementType.DESIGN_CONSTRAINT</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>RequirementType.FUNCTIONAL_REQUIREMENT</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>RequirementType.INTERFACE_REQUIREMENT</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>RequirementType.PERFORMANCE_REQUIREMENT</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>RequirementType.PHYSICAL_REQUIREMENT</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>RequirementType.REQUIREMENT</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>RiskLevel</code></td><td style="text-align:left;">{ <code>HIGH_RISK</code>: <code>string</code> = &#39;High&#39;; <code>LOW_RISK</code>: <code>string</code> = &#39;Low&#39;; <code>MED_RISK</code>: <code>string</code> = &#39;Medium&#39; }</td></tr><tr><td style="text-align:left;"><code>RiskLevel.HIGH_RISK</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>RiskLevel.LOW_RISK</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>RiskLevel.MED_RISK</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>VerifyType</code></td><td style="text-align:left;">{ <code>VERIFY_ANALYSIS</code>: <code>string</code> = &#39;Analysis&#39;; <code>VERIFY_DEMONSTRATION</code>: <code>string</code> = &#39;Demonstration&#39;; <code>VERIFY_INSPECTION</code>: <code>string</code> = &#39;Inspection&#39;; <code>VERIFY_TEST</code>: <code>string</code> = &#39;Test&#39; }</td></tr><tr><td style="text-align:left;"><code>VerifyType.VERIFY_ANALYSIS</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>VerifyType.VERIFY_DEMONSTRATION</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>VerifyType.VERIFY_INSPECTION</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>VerifyType.VERIFY_TEST</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>addElement</code></td><td style="text-align:left;">(<code>name</code>: <code>any</code>) =&gt; <code>any</code></td></tr><tr><td style="text-align:left;"><code>addRelationship</code></td><td style="text-align:left;">(<code>type</code>: <code>any</code>, <code>src</code>: <code>any</code>, <code>dst</code>: <code>any</code>) =&gt; <code>void</code></td></tr><tr><td style="text-align:left;"><code>addRequirement</code></td><td style="text-align:left;">(<code>name</code>: <code>any</code>, <code>type</code>: <code>any</code>) =&gt; <code>any</code></td></tr><tr><td style="text-align:left;"><code>clear</code></td><td style="text-align:left;">() =&gt; <code>void</code></td></tr><tr><td style="text-align:left;"><code>getAccDescription</code></td><td style="text-align:left;">() =&gt; <code>string</code></td></tr><tr><td style="text-align:left;"><code>getAccTitle</code></td><td style="text-align:left;">() =&gt; <code>string</code></td></tr><tr><td style="text-align:left;"><code>getConfig</code></td><td style="text-align:left;">() =&gt; <code>any</code></td></tr><tr><td style="text-align:left;"><code>getElements</code></td><td style="text-align:left;">() =&gt; {}</td></tr><tr><td style="text-align:left;"><code>getRelationships</code></td><td style="text-align:left;">() =&gt; <code>any</code>[]</td></tr><tr><td style="text-align:left;"><code>getRequirements</code></td><td style="text-align:left;">() =&gt; {}</td></tr><tr><td style="text-align:left;"><code>parseDirective</code></td><td style="text-align:left;">(<code>statement</code>: <code>any</code>, <code>context</code>: <code>any</code>, <code>type</code>: <code>any</code>) =&gt; <code>void</code></td></tr><tr><td style="text-align:left;"><code>setAccDescription</code></td><td style="text-align:left;">(<code>txt</code>: <code>string</code>) =&gt; <code>void</code></td></tr><tr><td style="text-align:left;"><code>setAccTitle</code></td><td style="text-align:left;">(<code>txt</code>: <code>string</code>) =&gt; <code>void</code></td></tr><tr><td style="text-align:left;"><code>setNewElementDocRef</code></td><td style="text-align:left;">(<code>docRef</code>: <code>any</code>) =&gt; <code>void</code></td></tr><tr><td style="text-align:left;"><code>setNewElementType</code></td><td style="text-align:left;">(<code>type</code>: <code>any</code>) =&gt; <code>void</code></td></tr><tr><td style="text-align:left;"><code>setNewReqId</code></td><td style="text-align:left;">(<code>id</code>: <code>any</code>) =&gt; <code>void</code></td></tr><tr><td style="text-align:left;"><code>setNewReqRisk</code></td><td style="text-align:left;">(<code>risk</code>: <code>any</code>) =&gt; <code>void</code></td></tr><tr><td style="text-align:left;"><code>setNewReqText</code></td><td style="text-align:left;">(<code>text</code>: <code>any</code>) =&gt; <code>void</code></td></tr><tr><td style="text-align:left;"><code>setNewReqVerifyMethod</code></td><td style="text-align:left;">(<code>verifyMethod</code>: <code>any</code>) =&gt; <code>void</code></td></tr></tbody></table><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-hidden="true">#</a></h4><p><a href="https://github.com/emersonbottero/mermaid-docs/blob/f565dc0/src/diagrams/requirement/requirementDb.js#L146" target="_blank" rel="noreferrer">src/diagrams/requirement/requirementDb.js:146</a></p><h2 id="functions-1" tabindex="-1">Functions <a class="header-anchor" href="#functions-1" aria-hidden="true">#</a></h2><h3 id="parsedirective" tabindex="-1">parseDirective <a class="header-anchor" href="#parsedirective" aria-hidden="true">#</a></h3><p>\u25B8 <strong>parseDirective</strong>(<code>statement</code>, <code>context</code>, <code>type</code>): <code>void</code></p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>statement</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>context</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>type</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a></h4><p><a href="https://github.com/emersonbottero/mermaid-docs/blob/f565dc0/src/diagrams/requirement/requirementDb.js#L51" target="_blank" rel="noreferrer">src/diagrams/requirement/requirementDb.js:51</a></p>',23),i=[l];function r(a,n,s,g,f,y){return d(),t("div",null,i)}const u=e(c,[["render",r]]);export{x as __pageData,u as default};
