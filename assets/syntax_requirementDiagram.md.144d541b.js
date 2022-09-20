import{_ as a,c as t,b as s,a as n,o as l,r as p}from"./app.f29a59a5.js";const _=JSON.parse('{"title":"Requirement Diagram","description":"","frontmatter":{},"headers":[{"level":2,"title":"Syntax","slug":"syntax","link":"#syntax","children":[{"level":3,"title":"Requirement","slug":"requirement","link":"#requirement","children":[]},{"level":3,"title":"Element","slug":"element","link":"#element","children":[]},{"level":3,"title":"Relationship","slug":"relationship","link":"#relationship","children":[]}]},{"level":2,"title":"Larger Example","slug":"larger-example","link":"#larger-example","children":[]}],"relativePath":"syntax/requirementDiagram.md"}'),i={name:"syntax/requirementDiagram.md"},r=n(`<h1 id="requirement-diagram" tabindex="-1">Requirement Diagram <a class="header-anchor" href="#requirement-diagram" aria-hidden="true">#</a></h1><blockquote><p>A Requirement diagram provides a visualization for requirements and their connections, to each other and other documented elements. The modeling specs follow those defined by SysML v1.6.</p></blockquote><p>Rendering requirements is straightforward.</p><h5>Code:</h5><div class="language-mermaid"><button class="copy"></button><span class="lang">mermaid</span><pre class="shiki" style="background-color:transparent;"><code><span class="line"><span style="color:#A6ACCD;">    requirementDiagram</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    requirement test_req {</span></span>
<span class="line"><span style="color:#A6ACCD;">    id: 1</span></span>
<span class="line"><span style="color:#A6ACCD;">    text: the test text.</span></span>
<span class="line"><span style="color:#A6ACCD;">    risk: high</span></span>
<span class="line"><span style="color:#A6ACCD;">    verifymethod: test</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    element test_entity {</span></span>
<span class="line"><span style="color:#A6ACCD;">    type: simulation</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    test_entity - satisfies -&gt; test_req</span></span>
<span class="line"></span></code></pre></div><h5>Render:</h5>`,6),o=n(`<h2 id="syntax" tabindex="-1">Syntax <a class="header-anchor" href="#syntax" aria-hidden="true">#</a></h2><p>There are three types of components to a requirement diagram: requirement, element, and relationship.</p><p>The grammar for defining each is defined below. Words denoted in angle brackets, such as <code>&lt;word&gt;</code>, are enumerated keywords that have options elaborated in a table. <code>user_defined_...</code> is use in any place where user input is expected.</p><p>An important note on user text: all input can be surrounded in quotes or not. For example, both <code>Id: &quot;here is an example&quot;</code> and <code>Id: here is an example</code> are both valid. However, users must be careful with unquoted input. The parser will fail if another keyword is detected.</p><h3 id="requirement" tabindex="-1">Requirement <a class="header-anchor" href="#requirement" aria-hidden="true">#</a></h3><p>A requirement definition contains a requirement type, name, id, text, risk, and verification method. The syntax follows:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;type&gt; user_defined_name {</span></span>
<span class="line"><span style="color:#A6ACCD;">    id: user_defined_id</span></span>
<span class="line"><span style="color:#A6ACCD;">    text: user_defined text</span></span>
<span class="line"><span style="color:#A6ACCD;">    risk: &lt;risk&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    verifymethod: &lt;method&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Type, risk, and method are enumerations defined in SysML.</p><table><thead><tr><th>Keyword</th><th>Options</th></tr></thead><tbody><tr><td>Type</td><td>requirement, functionalRequirement, interfaceRequirement, performanceRequirement, physicalRequirement, designConstraint</td></tr><tr><td>Risk</td><td>Low, Medium, High</td></tr><tr><td>VerificationMethod</td><td>Analysis, Inspection, Test, Demonstration</td></tr></tbody></table><h3 id="element" tabindex="-1">Element <a class="header-anchor" href="#element" aria-hidden="true">#</a></h3><p>An element definition contains an element name, type, and document reference. These three are all user defined. The element feature is intended to be lightweight but allow requirements to be connected to portions of other documents.</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">element user_defined_name {</span></span>
<span class="line"><span style="color:#A6ACCD;">    type: user_defined_type</span></span>
<span class="line"><span style="color:#A6ACCD;">    docref: user_defined_ref</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="relationship" tabindex="-1">Relationship <a class="header-anchor" href="#relationship" aria-hidden="true">#</a></h3><p>Relationships are comprised of a source node, destination node, and relationship type.</p><p>Each follows the definition format of</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{name of source} - &lt;type&gt; -&gt; {name of destination}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>or</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{name of destination} &lt;- &lt;type&gt; - {name of source}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>&quot;name of source&quot; and &quot;name of destination&quot; should be names of requirement or element nodes defined elsewhere.</p><p>A relationship type can be one of contains, copies, derives, satisfies, verifies, refines, or traces.</p><p>Each relationship is labeled in the diagram.</p><h2 id="larger-example" tabindex="-1">Larger Example <a class="header-anchor" href="#larger-example" aria-hidden="true">#</a></h2><p>This example uses all features of the diagram.</p><h5>Code:</h5><div class="language-mermaid"><button class="copy"></button><span class="lang">mermaid</span><pre class="shiki" style="background-color:transparent;"><code><span class="line"><span style="color:#A6ACCD;">    requirementDiagram</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    requirement test_req {</span></span>
<span class="line"><span style="color:#A6ACCD;">    id: 1</span></span>
<span class="line"><span style="color:#A6ACCD;">    text: the test text.</span></span>
<span class="line"><span style="color:#A6ACCD;">    risk: high</span></span>
<span class="line"><span style="color:#A6ACCD;">    verifymethod: test</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    functionalRequirement test_req2 {</span></span>
<span class="line"><span style="color:#A6ACCD;">    id: 1.1</span></span>
<span class="line"><span style="color:#A6ACCD;">    text: the second test text.</span></span>
<span class="line"><span style="color:#A6ACCD;">    risk: low</span></span>
<span class="line"><span style="color:#A6ACCD;">    verifymethod: inspection</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    performanceRequirement test_req3 {</span></span>
<span class="line"><span style="color:#A6ACCD;">    id: 1.2</span></span>
<span class="line"><span style="color:#A6ACCD;">    text: the third test text.</span></span>
<span class="line"><span style="color:#A6ACCD;">    risk: medium</span></span>
<span class="line"><span style="color:#A6ACCD;">    verifymethod: demonstration</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    interfaceRequirement test_req4 {</span></span>
<span class="line"><span style="color:#A6ACCD;">    id: 1.2.1</span></span>
<span class="line"><span style="color:#A6ACCD;">    text: the fourth test text.</span></span>
<span class="line"><span style="color:#A6ACCD;">    risk: medium</span></span>
<span class="line"><span style="color:#A6ACCD;">    verifymethod: analysis</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    physicalRequirement test_req5 {</span></span>
<span class="line"><span style="color:#A6ACCD;">    id: 1.2.2</span></span>
<span class="line"><span style="color:#A6ACCD;">    text: the fifth test text.</span></span>
<span class="line"><span style="color:#A6ACCD;">    risk: medium</span></span>
<span class="line"><span style="color:#A6ACCD;">    verifymethod: analysis</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    designConstraint test_req6 {</span></span>
<span class="line"><span style="color:#A6ACCD;">    id: 1.2.3</span></span>
<span class="line"><span style="color:#A6ACCD;">    text: the sixth test text.</span></span>
<span class="line"><span style="color:#A6ACCD;">    risk: medium</span></span>
<span class="line"><span style="color:#A6ACCD;">    verifymethod: analysis</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    element test_entity {</span></span>
<span class="line"><span style="color:#A6ACCD;">    type: simulation</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    element test_entity2 {</span></span>
<span class="line"><span style="color:#A6ACCD;">    type: word doc</span></span>
<span class="line"><span style="color:#A6ACCD;">    docRef: reqs/test_entity</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    element test_entity3 {</span></span>
<span class="line"><span style="color:#A6ACCD;">    type: &quot;test suite&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    docRef: github.com/all_the_tests</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    test_entity - satisfies -&gt; test_req2</span></span>
<span class="line"><span style="color:#A6ACCD;">    test_req - traces -&gt; test_req2</span></span>
<span class="line"><span style="color:#A6ACCD;">    test_req - contains -&gt; test_req3</span></span>
<span class="line"><span style="color:#A6ACCD;">    test_req3 - contains -&gt; test_req4</span></span>
<span class="line"><span style="color:#A6ACCD;">    test_req4 - derives -&gt; test_req5</span></span>
<span class="line"><span style="color:#A6ACCD;">    test_req5 - refines -&gt; test_req6</span></span>
<span class="line"><span style="color:#A6ACCD;">    test_entity3 - verifies -&gt; test_req5</span></span>
<span class="line"><span style="color:#A6ACCD;">    test_req &lt;- copies - test_entity2</span></span>
<span class="line"></span></code></pre></div><h5>Render:</h5>`,26);function c(A,d,m,C,y,h){const e=p("Mermaid");return l(),t("div",null,[r,s(e,{id:"me11",graph:"%20%20%20%20requirementDiagram%0A%0A%20%20%20%20requirement%20test_req%20%7B%0A%20%20%20%20id%3A%201%0A%20%20%20%20text%3A%20the%20test%20text.%0A%20%20%20%20risk%3A%20high%0A%20%20%20%20verifymethod%3A%20test%0A%20%20%20%20%7D%0A%0A%20%20%20%20element%20test_entity%20%7B%0A%20%20%20%20type%3A%20simulation%0A%20%20%20%20%7D%0A%0A%20%20%20%20test_entity%20-%20satisfies%20-%3E%20test_req%0A"}),o,s(e,{id:"me108",graph:"%20%20%20%20requirementDiagram%0A%0A%20%20%20%20requirement%20test_req%20%7B%0A%20%20%20%20id%3A%201%0A%20%20%20%20text%3A%20the%20test%20text.%0A%20%20%20%20risk%3A%20high%0A%20%20%20%20verifymethod%3A%20test%0A%20%20%20%20%7D%0A%0A%20%20%20%20functionalRequirement%20test_req2%20%7B%0A%20%20%20%20id%3A%201.1%0A%20%20%20%20text%3A%20the%20second%20test%20text.%0A%20%20%20%20risk%3A%20low%0A%20%20%20%20verifymethod%3A%20inspection%0A%20%20%20%20%7D%0A%0A%20%20%20%20performanceRequirement%20test_req3%20%7B%0A%20%20%20%20id%3A%201.2%0A%20%20%20%20text%3A%20the%20third%20test%20text.%0A%20%20%20%20risk%3A%20medium%0A%20%20%20%20verifymethod%3A%20demonstration%0A%20%20%20%20%7D%0A%0A%20%20%20%20interfaceRequirement%20test_req4%20%7B%0A%20%20%20%20id%3A%201.2.1%0A%20%20%20%20text%3A%20the%20fourth%20test%20text.%0A%20%20%20%20risk%3A%20medium%0A%20%20%20%20verifymethod%3A%20analysis%0A%20%20%20%20%7D%0A%0A%20%20%20%20physicalRequirement%20test_req5%20%7B%0A%20%20%20%20id%3A%201.2.2%0A%20%20%20%20text%3A%20the%20fifth%20test%20text.%0A%20%20%20%20risk%3A%20medium%0A%20%20%20%20verifymethod%3A%20analysis%0A%20%20%20%20%7D%0A%0A%20%20%20%20designConstraint%20test_req6%20%7B%0A%20%20%20%20id%3A%201.2.3%0A%20%20%20%20text%3A%20the%20sixth%20test%20text.%0A%20%20%20%20risk%3A%20medium%0A%20%20%20%20verifymethod%3A%20analysis%0A%20%20%20%20%7D%0A%0A%20%20%20%20element%20test_entity%20%7B%0A%20%20%20%20type%3A%20simulation%0A%20%20%20%20%7D%0A%0A%20%20%20%20element%20test_entity2%20%7B%0A%20%20%20%20type%3A%20word%20doc%0A%20%20%20%20docRef%3A%20reqs%2Ftest_entity%0A%20%20%20%20%7D%0A%0A%20%20%20%20element%20test_entity3%20%7B%0A%20%20%20%20type%3A%20%22test%20suite%22%0A%20%20%20%20docRef%3A%20github.com%2Fall_the_tests%0A%20%20%20%20%7D%0A%0A%0A%20%20%20%20test_entity%20-%20satisfies%20-%3E%20test_req2%0A%20%20%20%20test_req%20-%20traces%20-%3E%20test_req2%0A%20%20%20%20test_req%20-%20contains%20-%3E%20test_req3%0A%20%20%20%20test_req3%20-%20contains%20-%3E%20test_req4%0A%20%20%20%20test_req4%20-%20derives%20-%3E%20test_req5%0A%20%20%20%20test_req5%20-%20refines%20-%3E%20test_req6%0A%20%20%20%20test_entity3%20-%20verifies%20-%3E%20test_req5%0A%20%20%20%20test_req%20%3C-%20copies%20-%20test_entity2%0A"})])}const D=a(i,[["render",c]]);export{_ as __pageData,D as default};
