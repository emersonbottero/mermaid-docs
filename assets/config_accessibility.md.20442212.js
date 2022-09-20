import{_ as e,c as l,b as a,a as n,o,r as p}from"./app.0ddf1673.js";const t="/mermaid/assets/accessibility-div-example.f2818ee4.png",c="/mermaid/assets/accessibility-div-example-2.fd543bb5.png",R=JSON.parse('{"title":"Accessibility Options","description":"","frontmatter":{},"headers":[{"level":2,"title":"Accessibility","slug":"accessibility","link":"#accessibility","children":[]},{"level":2,"title":"Defining Accessibility Options","slug":"defining-accessibility-options","link":"#defining-accessibility-options","children":[{"level":3,"title":"Single line accessibility values","slug":"single-line-accessibility-values","link":"#single-line-accessibility-values","children":[]},{"level":3,"title":"Multi-line Accessibility title/description","slug":"multi-line-accessibility-title-description","link":"#multi-line-accessibility-title-description","children":[]},{"level":3,"title":"Sample Code Snippet for other diagram types","slug":"sample-code-snippet-for-other-diagram-types","link":"#sample-code-snippet-for-other-diagram-types","children":[]}]}],"relativePath":"config/accessibility.md"}'),i={name:"config/accessibility.md"},r=n(`<h1 id="accessibility-options" tabindex="-1">Accessibility Options <a class="header-anchor" href="#accessibility-options" aria-hidden="true">#</a></h1><h2 id="accessibility" tabindex="-1">Accessibility <a class="header-anchor" href="#accessibility" aria-hidden="true">#</a></h2><p>Now with Mermaid library in much wider use, we have started to work towards more accessible features, based on the feedback from the community.</p><p>To begin with, we have added a new feature to Mermaid library, which is to support accessibility options, <strong>Accessibility Title</strong> and <strong>Accessibility Description</strong>.</p><p>This support for accessibility options is available for all the diagrams/chart types. Also, we have tired to keep the same format for the accessibility options, so that it is easy to understand and maintain.</p><h2 id="defining-accessibility-options" tabindex="-1">Defining Accessibility Options <a class="header-anchor" href="#defining-accessibility-options" aria-hidden="true">#</a></h2><h3 id="single-line-accessibility-values" tabindex="-1">Single line accessibility values <a class="header-anchor" href="#single-line-accessibility-values" aria-hidden="true">#</a></h3><p>The diagram authors can now add the accessibility options in the diagram definition, using the <code>accTitle</code> and <code>accDescr</code> keywords, where each keyword is followed by <code>:</code> and the string value for title and description like:</p><ul><li><code>accTitle: &quot;Your Accessibility Title&quot;</code> or</li><li><code>accDescr: &quot;Your Accessibility Description&quot;</code></li></ul><p><strong>When these two options are defined, they will add a coressponding <code>&lt;title&gt;</code> and <code>&lt;desc&gt;</code> tag in the SVG.</strong></p><p>Let us take a look at the following example with a flowchart diagram:</p><h5>Code:</h5><div class="language-mermaid"><button class="copy"></button><span class="lang">mermaid</span><pre class="shiki" style="background-color:transparent;"><code><span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">graph</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">LR</span></span>
<span class="line"><span style="color:#A6ACCD;">      accTitle: Big decisions</span></span>
<span class="line"><span style="color:#A6ACCD;">      accDescr: Flow chart of the decision making process</span></span>
<span class="line"><span style="color:#A6ACCD;">      A</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">Hard</span><span style="color:#89DDFF;">] --&gt;|</span><span style="color:#C3E88D;">Text</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> B</span><span style="color:#89DDFF;">(</span><span style="color:#C3E88D;">Round</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">      B </span><span style="color:#89DDFF;">--&gt;</span><span style="color:#A6ACCD;"> C</span><span style="color:#89DDFF;">{</span><span style="color:#C3E88D;">Decision</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">      C </span><span style="color:#89DDFF;">--&gt;|</span><span style="color:#C3E88D;">One</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> D</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">Result</span><span style="color:#A6ACCD;"> 1</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h5>Render:</h5>`,14),A=n('<p>See in the code snippet above, the <code>accTitle</code> and <code>accDescr</code> are defined in the diagram definition. They result in the following tags in SVG code:</p><p><img src="'+t+`" alt="Accessibility options rendered inside SVG"></p><h3 id="multi-line-accessibility-title-description" tabindex="-1">Multi-line Accessibility title/description <a class="header-anchor" href="#multi-line-accessibility-title-description" aria-hidden="true">#</a></h3><p>You can also define the accessibility options in a multi-line format, where the keyword is followed by opening curly bracket <code>{</code> and then multiple lines, followed by a closing <code>}</code>.</p><p><code>accTitle: My single line title value</code> (<strong><em>single line format</em></strong>)</p><p>vs</p><p><code>accDescr: { My multi-line description of the diagram }</code> (<strong><em>multi-line format</em></strong>)</p><p>Let us look at it in the following example, with same flowchart:</p><h5>Code:</h5><div class="language-mermaid"><button class="copy"></button><span class="lang">mermaid</span><pre class="shiki" style="background-color:transparent;"><code><span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">graph</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">LR</span></span>
<span class="line"><span style="color:#A6ACCD;">      accTitle: Big decisions</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">      accDescr {</span></span>
<span class="line"><span style="color:#A6ACCD;">        My multi-line description</span></span>
<span class="line"><span style="color:#A6ACCD;">        of the diagram</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">      A</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">Hard</span><span style="color:#89DDFF;">] --&gt;|</span><span style="color:#C3E88D;">Text</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> B</span><span style="color:#89DDFF;">(</span><span style="color:#C3E88D;">Round</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">      B </span><span style="color:#89DDFF;">--&gt;</span><span style="color:#A6ACCD;"> C</span><span style="color:#89DDFF;">{</span><span style="color:#C3E88D;">Decision</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">      C </span><span style="color:#89DDFF;">--&gt;|</span><span style="color:#C3E88D;">One</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> D</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">Result</span><span style="color:#A6ACCD;"> 1</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h5>Render:</h5>`,11),D=n('<p>See in the code snippet above, the <code>accTitle</code> and <code>accDescr</code> are defined in the diagram definition. They result in the following tags in SVG code:</p><p><img src="'+c+`" alt="Accessibility options rendered inside SVG"></p><h3 id="sample-code-snippet-for-other-diagram-types" tabindex="-1">Sample Code Snippet for other diagram types <a class="header-anchor" href="#sample-code-snippet-for-other-diagram-types" aria-hidden="true">#</a></h3><h4 id="sequence-diagram" tabindex="-1">Sequence Diagram <a class="header-anchor" href="#sequence-diagram" aria-hidden="true">#</a></h4><h5>Code:</h5><div class="language-mermaid"><button class="copy"></button><span class="lang">mermaid</span><pre class="shiki" style="background-color:transparent;"><code><span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">sequenceDiagram</span></span>
<span class="line"><span style="color:#A6ACCD;">      accTitle: My Sequence Diagram</span></span>
<span class="line"><span style="color:#A6ACCD;">      accDescr: My Sequence Diagram Description</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">      Alice</span><span style="color:#89DDFF;">-&gt;&gt;</span><span style="color:#A6ACCD;">John</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Hello John, how are you?</span></span>
<span class="line"><span style="color:#A6ACCD;">      John</span><span style="color:#89DDFF;">--&gt;&gt;</span><span style="color:#A6ACCD;">Alice</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Great!</span></span>
<span class="line"><span style="color:#A6ACCD;">      Alice</span><span style="color:#89DDFF;">-)</span><span style="color:#A6ACCD;">John</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">See you later!</span></span>
<span class="line"></span></code></pre></div><h5>Render:</h5>`,7),y=n(`<h4 id="class-diagram" tabindex="-1">Class Diagram <a class="header-anchor" href="#class-diagram" aria-hidden="true">#</a></h4><h5>Code:</h5><div class="language-mermaid"><button class="copy"></button><span class="lang">mermaid</span><pre class="shiki" style="background-color:transparent;"><code><span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">classDiagram</span></span>
<span class="line"><span style="color:#A6ACCD;">      accTitle: My Class Diagram</span></span>
<span class="line"><span style="color:#A6ACCD;">      accDescr: My Class Diagram Description</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">Vehicle</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;|--</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Car</span></span>
<span class="line"></span></code></pre></div><h5>Render:</h5>`,4),C=n(`<h4 id="state-diagram" tabindex="-1">State Diagram <a class="header-anchor" href="#state-diagram" aria-hidden="true">#</a></h4><h5>Code:</h5><div class="language-mermaid"><button class="copy"></button><span class="lang">mermaid</span><pre class="shiki" style="background-color:transparent;"><code><span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">stateDiagram</span></span>
<span class="line"><span style="color:#A6ACCD;">      accTitle: My State Diagram</span></span>
<span class="line"><span style="color:#A6ACCD;">      accDescr: My State Diagram Description</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">       s1 </span><span style="color:#89DDFF;">--&gt;</span><span style="color:#A6ACCD;"> s2</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h5>Render:</h5>`,4),d=n(`<h4 id="entity-relationship-diagram" tabindex="-1">Entity Relationship Diagram <a class="header-anchor" href="#entity-relationship-diagram" aria-hidden="true">#</a></h4><h5>Code:</h5><div class="language-mermaid"><button class="copy"></button><span class="lang">mermaid</span><pre class="shiki" style="background-color:transparent;"><code><span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">erDiagram</span></span>
<span class="line"><span style="color:#A6ACCD;">      accTitle: My Entity Relationship Diagram</span></span>
<span class="line"><span style="color:#A6ACCD;">      accDescr: My Entity Relationship Diagram Description</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    CUSTOMER </span><span style="color:#89DDFF;">||--o{</span><span style="color:#A6ACCD;"> ORDER </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">places</span></span>
<span class="line"><span style="color:#A6ACCD;">    ORDER </span><span style="color:#89DDFF;">||--|{</span><span style="color:#A6ACCD;"> LINE-ITEM </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">contains</span></span>
<span class="line"><span style="color:#A6ACCD;">    CUSTOMER </span><span style="color:#89DDFF;">}|..|{</span><span style="color:#A6ACCD;"> DELIVERY-ADDRESS </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">uses</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h5>Render:</h5>`,4),h=n(`<h4 id="user-journey-diagram" tabindex="-1">User Journey Diagram <a class="header-anchor" href="#user-journey-diagram" aria-hidden="true">#</a></h4><h5>Code:</h5><div class="language-mermaid"><button class="copy"></button><span class="lang">mermaid</span><pre class="shiki" style="background-color:transparent;"><code><span class="line"><span style="color:#A6ACCD;">  journey</span></span>
<span class="line"><span style="color:#A6ACCD;">      accTitle: My User Journey Diagram</span></span>
<span class="line"><span style="color:#A6ACCD;">      accDescr: My User Journey Diagram Description</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">      title My working day</span></span>
<span class="line"><span style="color:#A6ACCD;">      section Go to work</span></span>
<span class="line"><span style="color:#A6ACCD;">        Make tea: 5: Me</span></span>
<span class="line"><span style="color:#A6ACCD;">        Go upstairs: 3: Me</span></span>
<span class="line"><span style="color:#A6ACCD;">        Do work: 1: Me, Cat</span></span>
<span class="line"><span style="color:#A6ACCD;">      section Go home</span></span>
<span class="line"><span style="color:#A6ACCD;">        Go downstairs: 5: Me</span></span>
<span class="line"><span style="color:#A6ACCD;">        Sit down: 5: Me</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h5>Render:</h5>`,4),m=n(`<h4 id="gantt-chart" tabindex="-1">Gantt Chart <a class="header-anchor" href="#gantt-chart" aria-hidden="true">#</a></h4><h5>Code:</h5><div class="language-mermaid"><button class="copy"></button><span class="lang">mermaid</span><pre class="shiki" style="background-color:transparent;"><code><span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">gantt</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">     accTitle</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> My Gantt Chart Accessibility Title</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">     accDescr</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> My Gantt Chart Accessibility Description</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">title</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">A Gantt Diagram</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">dateFormat</span><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">YYYY-MM-DD</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">section</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Section</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">   A task           </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">a1, 2014-01-01, 30d</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">   Another task     </span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;">after</span><span style="color:#A6ACCD;"> a1  , 20d</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">section</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Another</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">   Task in sec      </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">2014-01-12  , 12d</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">   another task      </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> 24d</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h5>Render:</h5>`,4),g=n(`<h4 id="pie-chart" tabindex="-1">Pie Chart <a class="header-anchor" href="#pie-chart" aria-hidden="true">#</a></h4><h5>Code:</h5><div class="language-mermaid"><button class="copy"></button><span class="lang">mermaid</span><pre class="shiki" style="background-color:transparent;"><code><span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">pie</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">     accTitle</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> My Pie Chart Accessibility Title</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">     accDescr</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> My Pie Chart Accessibility Description</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">title</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Key elements in Product X</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">   &quot;Calcium&quot; </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> 42.96</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">   &quot;Potassium&quot; </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> 50.05</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">   &quot;Magnesium&quot; </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> 10.01</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">   &quot;Iron&quot; </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">  5</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h5>Render:</h5>`,4),u=n(`<h4 id="requirement-diagram" tabindex="-1">Requirement Diagram <a class="header-anchor" href="#requirement-diagram" aria-hidden="true">#</a></h4><h5>Code:</h5><div class="language-mermaid"><button class="copy"></button><span class="lang">mermaid</span><pre class="shiki" style="background-color:transparent;"><code><span class="line"><span style="color:#A6ACCD;">  requirementDiagram</span></span>
<span class="line"><span style="color:#A6ACCD;">      accTitle: My Requirement Diagram</span></span>
<span class="line"><span style="color:#A6ACCD;">      accDescr: My Requirement Diagram Description</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">       requirement test_req {</span></span>
<span class="line"><span style="color:#A6ACCD;">  id: 1</span></span>
<span class="line"><span style="color:#A6ACCD;">  text: the test text.</span></span>
<span class="line"><span style="color:#A6ACCD;">  risk: high</span></span>
<span class="line"><span style="color:#A6ACCD;">  verifymethod: test</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  element test_entity {</span></span>
<span class="line"><span style="color:#A6ACCD;">  type: simulation</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  test_entity - satisfies -&gt; test_req</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h5>Render:</h5>`,4),_=n(`<h4 id="gitgraph" tabindex="-1">Gitgraph <a class="header-anchor" href="#gitgraph" aria-hidden="true">#</a></h4><h5>Code:</h5><div class="language-mermaid"><button class="copy"></button><span class="lang">mermaid</span><pre class="shiki" style="background-color:transparent;"><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">gitGraph</span></span>
<span class="line"><span style="color:#A6ACCD;">      accTitle: My Gitgraph Accessibility Title</span></span>
<span class="line"><span style="color:#A6ACCD;">      accDescr: My Gitgraph Accessibility Description</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">commit</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">commit</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">branch</span><span style="color:#A6ACCD;"> develop</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">checkout</span><span style="color:#A6ACCD;"> develop</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">commit</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">commit</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">checkout</span><span style="color:#A6ACCD;"> main</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">merge</span><span style="color:#A6ACCD;"> develop</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">commit</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">commit</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h5>Render:</h5>`,4);function F(b,T,E,f,M,S){const s=p("Mermaid");return o(),l("div",null,[r,a(s,{id:"me42",graph:"%20%20%20graph%20LR%0A%20%20%20%20%20%20accTitle%3A%20Big%20decisions%0A%20%20%20%20%20%20accDescr%3A%20Flow%20chart%20of%20the%20decision%20making%20process%0A%20%20%20%20%20%20A%5BHard%5D%20--%3E%7CText%7C%20B(Round)%0A%20%20%20%20%20%20B%20--%3E%20C%7BDecision%7D%0A%20%20%20%20%20%20C%20--%3E%7COne%7C%20D%5BResult%201%5D%0A%0A"}),A,a(s,{id:"me67",graph:"%20%20%20graph%20LR%0A%20%20%20%20%20%20accTitle%3A%20Big%20decisions%0A%0A%20%20%20%20%20%20accDescr%20%7B%0A%20%20%20%20%20%20%20%20My%20multi-line%20description%0A%20%20%20%20%20%20%20%20of%20the%20diagram%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20A%5BHard%5D%20--%3E%7CText%7C%20B(Round)%0A%20%20%20%20%20%20B%20--%3E%20C%7BDecision%7D%0A%20%20%20%20%20%20C%20--%3E%7COne%7C%20D%5BResult%201%5D%0A%0A"}),D,a(s,{id:"me80",graph:"%20%20%20sequenceDiagram%0A%20%20%20%20%20%20accTitle%3A%20My%20Sequence%20Diagram%0A%20%20%20%20%20%20accDescr%3A%20My%20Sequence%20Diagram%20Description%0A%0A%20%20%20%20%20%20Alice-%3E%3EJohn%3A%20Hello%20John%2C%20how%20are%20you%3F%0A%20%20%20%20%20%20John--%3E%3EAlice%3A%20Great!%0A%20%20%20%20%20%20Alice-)John%3A%20See%20you%20later!%0A"}),y,a(s,{id:"me84",graph:"%20%20%20classDiagram%0A%20%20%20%20%20%20accTitle%3A%20My%20Class%20Diagram%0A%20%20%20%20%20%20accDescr%3A%20My%20Class%20Diagram%20Description%0A%0A%20%20%20%20%20%20Vehicle%20%3C%7C--%20Car%0A"}),C,a(s,{id:"me88",graph:"%20%20%20stateDiagram%0A%20%20%20%20%20%20accTitle%3A%20My%20State%20Diagram%0A%20%20%20%20%20%20accDescr%3A%20My%20State%20Diagram%20Description%0A%0A%20%20%20%20%20%20%20s1%20--%3E%20s2%0A%0A"}),d,a(s,{id:"me92",graph:"%20%20%20erDiagram%0A%20%20%20%20%20%20accTitle%3A%20My%20Entity%20Relationship%20Diagram%0A%20%20%20%20%20%20accDescr%3A%20My%20Entity%20Relationship%20Diagram%20Description%0A%0A%20%20%20%20CUSTOMER%20%7C%7C--o%7B%20ORDER%20%3A%20places%0A%20%20%20%20ORDER%20%7C%7C--%7C%7B%20LINE-ITEM%20%3A%20contains%0A%20%20%20%20CUSTOMER%20%7D%7C..%7C%7B%20DELIVERY-ADDRESS%20%3A%20uses%0A%0A"}),h,a(s,{id:"me96",graph:"%20%20journey%0A%20%20%20%20%20%20accTitle%3A%20My%20User%20Journey%20Diagram%0A%20%20%20%20%20%20accDescr%3A%20My%20User%20Journey%20Diagram%20Description%0A%0A%20%20%20%20%20%20title%20My%20working%20day%0A%20%20%20%20%20%20section%20Go%20to%20work%0A%20%20%20%20%20%20%20%20Make%20tea%3A%205%3A%20Me%0A%20%20%20%20%20%20%20%20Go%20upstairs%3A%203%3A%20Me%0A%20%20%20%20%20%20%20%20Do%20work%3A%201%3A%20Me%2C%20Cat%0A%20%20%20%20%20%20section%20Go%20home%0A%20%20%20%20%20%20%20%20Go%20downstairs%3A%205%3A%20Me%0A%20%20%20%20%20%20%20%20Sit%20down%3A%205%3A%20Me%0A%0A"}),m,a(s,{id:"me100",graph:"%20%20%20gantt%0A%20%20%20%20%20%20accTitle%3A%20My%20Gantt%20Chart%20Accessibility%20Title%0A%20%20%20%20%20%20accDescr%3A%20My%20Gantt%20Chart%20Accessibility%20Description%0A%0A%20%20%20%20title%20A%20Gantt%20Diagram%0A%20%20%20%20dateFormat%20%20YYYY-MM-DD%0A%20%20%20%20section%20Section%0A%20%20%20%20A%20task%20%20%20%20%20%20%20%20%20%20%20%3Aa1%2C%202014-01-01%2C%2030d%0A%20%20%20%20Another%20task%20%20%20%20%20%3Aafter%20a1%20%20%2C%2020d%0A%20%20%20%20section%20Another%0A%20%20%20%20Task%20in%20sec%20%20%20%20%20%20%3A2014-01-12%20%20%2C%2012d%0A%20%20%20%20another%20task%20%20%20%20%20%20%3A%2024d%0A%0A"}),g,a(s,{id:"me104",graph:"%20%20%20pie%0A%20%20%20%20%20%20accTitle%3A%20My%20Pie%20Chart%20Accessibility%20Title%0A%20%20%20%20%20%20accDescr%3A%20My%20Pie%20Chart%20Accessibility%20Description%0A%0A%20%20%20%20title%20Key%20elements%20in%20Product%20X%0A%20%20%20%20%22Calcium%22%20%3A%2042.96%0A%20%20%20%20%22Potassium%22%20%3A%2050.05%0A%20%20%20%20%22Magnesium%22%20%3A%2010.01%0A%20%20%20%20%22Iron%22%20%3A%20%205%0A%0A"}),u,a(s,{id:"me108",graph:"%20%20requirementDiagram%0A%20%20%20%20%20%20accTitle%3A%20My%20Requirement%20Diagram%0A%20%20%20%20%20%20accDescr%3A%20My%20Requirement%20Diagram%20Description%0A%0A%20%20%20%20%20%20%20requirement%20test_req%20%7B%0A%20%20id%3A%201%0A%20%20text%3A%20the%20test%20text.%0A%20%20risk%3A%20high%0A%20%20verifymethod%3A%20test%0A%20%20%7D%0A%0A%20%20element%20test_entity%20%7B%0A%20%20type%3A%20simulation%0A%20%20%7D%0A%0A%20%20test_entity%20-%20satisfies%20-%3E%20test_req%0A%0A"}),_,a(s,{id:"me112",graph:"%20%20gitGraph%0A%20%20%20%20%20%20accTitle%3A%20My%20Gitgraph%20Accessibility%20Title%0A%20%20%20%20%20%20accDescr%3A%20My%20Gitgraph%20Accessibility%20Description%0A%0A%20%20%20%20%20commit%0A%20%20%20%20%20commit%0A%20%20%20%20%20branch%20develop%0A%20%20%20%20%20checkout%20develop%0A%20%20%20%20%20commit%0A%20%20%20%20%20commit%0A%20%20%20%20%20checkout%20main%0A%20%20%20%20%20merge%20develop%0A%20%20%20%20%20commit%0A%20%20%20%20%20commit%0A%0A"})])}const v=e(i,[["render",F]]);export{R as __pageData,v as default};
