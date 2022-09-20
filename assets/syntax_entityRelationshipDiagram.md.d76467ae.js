import{_ as a,c as t,b as n,a as s,o,r as l}from"./app.0ddf1673.js";const E=JSON.parse('{"title":"Entity Relationship Diagrams","description":"","frontmatter":{},"headers":[{"level":2,"title":"Syntax","slug":"syntax","link":"#syntax","children":[{"level":3,"title":"Entities and Relationships","slug":"entities-and-relationships","link":"#entities-and-relationships","children":[]},{"level":3,"title":"Relationship Syntax","slug":"relationship-syntax","link":"#relationship-syntax","children":[]},{"level":3,"title":"Identification","slug":"identification","link":"#identification","children":[]},{"level":3,"title":"Attributes","slug":"attributes","link":"#attributes","children":[]},{"level":3,"title":"Other Things","slug":"other-things","link":"#other-things","children":[]}]},{"level":2,"title":"Styling","slug":"styling","link":"#styling","children":[{"level":3,"title":"Config options","slug":"config-options","link":"#config-options","children":[]},{"level":3,"title":"Classes used","slug":"classes-used","link":"#classes-used","children":[]}]}],"relativePath":"syntax/entityRelationshipDiagram.md"}'),i={name:"syntax/entityRelationshipDiagram.md"},r=s(`<h1 id="entity-relationship-diagrams" tabindex="-1">Entity Relationship Diagrams <a class="header-anchor" href="#entity-relationship-diagrams" aria-hidden="true">#</a></h1><blockquote><p>An entity\u2013relationship model (or ER model) describes interrelated things of interest in a specific domain of knowledge. A basic ER model is composed of entity types (which classify the things of interest) and specifies relationships that can exist between entities (instances of those entity types). Wikipedia.</p></blockquote><p>Note that practitioners of ER modelling almost always refer to <em>entity types</em> simply as <em>entities</em>. For example the <code>CUSTOMER</code> entity <em>type</em> would be referred to simply as the <code>CUSTOMER</code> entity. This is so common it would be inadvisable to do anything else, but technically an entity is an abstract <em>instance</em> of an entity type, and this is what an ER diagram shows - abstract instances, and the relationships between them. This is why entities are always named using singular nouns.</p><p>Mermaid can render ER diagrams</p><h5>Code:</h5><div class="language-mermaid"><button class="copy"></button><span class="lang">mermaid</span><pre class="shiki" style="background-color:transparent;"><code><span class="line"><span style="color:#89DDFF;">erDiagram</span></span>
<span class="line"><span style="color:#A6ACCD;">    CUSTOMER </span><span style="color:#89DDFF;">||--o{</span><span style="color:#A6ACCD;"> ORDER </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">places</span></span>
<span class="line"><span style="color:#A6ACCD;">    ORDER </span><span style="color:#89DDFF;">||--|{</span><span style="color:#A6ACCD;"> LINE-ITEM </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">contains</span></span>
<span class="line"><span style="color:#A6ACCD;">    CUSTOMER </span><span style="color:#89DDFF;">}|..|{</span><span style="color:#A6ACCD;"> DELIVERY-ADDRESS </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">uses</span></span>
<span class="line"></span></code></pre></div><h5>Render:</h5>`,7),p=s(`<p>Entity names are often capitalised, although there is no accepted standard on this, and it is not required in Mermaid.</p><p>Relationships between entities are represented by lines with end markers representing cardinality. Mermaid uses the most popular crow&#39;s foot notation. The crow&#39;s foot intuitively conveys the possibility of many instances of the entity that it connects to.</p><p>ER diagrams can be used for various purposes, ranging from abstract logical models devoid of any implementation details, through to physical models of relational database tables. It can be useful to include attribute definitions on ER diagrams to aid comprehension of the purpose and meaning of entities. These do not necessarily need to be exhaustive; often a small subset of attributes is enough. Mermaid allows them to be defined in terms of their <em>type</em> and <em>name</em>.</p><h5>Code:</h5><div class="language-mermaid"><button class="copy"></button><span class="lang">mermaid</span><pre class="shiki" style="background-color:transparent;"><code><span class="line"><span style="color:#89DDFF;">erDiagram</span></span>
<span class="line"><span style="color:#A6ACCD;">    CUSTOMER </span><span style="color:#89DDFF;">||--o{</span><span style="color:#A6ACCD;"> ORDER </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">places</span></span>
<span class="line"><span style="color:#A6ACCD;">    CUSTOMER </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">string</span><span style="color:#A6ACCD;"> name</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">string</span><span style="color:#A6ACCD;"> custNumber</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">string</span><span style="color:#A6ACCD;"> sector</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    ORDER </span><span style="color:#89DDFF;">||--|{</span><span style="color:#A6ACCD;"> LINE-ITEM </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">contains</span></span>
<span class="line"><span style="color:#A6ACCD;">    ORDER </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> orderNumber</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">string</span><span style="color:#A6ACCD;"> deliveryAddress</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    LINE-ITEM </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">string</span><span style="color:#A6ACCD;"> productCode</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> quantity</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">float</span><span style="color:#A6ACCD;"> pricePerUnit</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h5>Render:</h5>`,6),c=s(`<p>When including attributes on ER diagrams, you must decide whether to include foreign keys as attributes. This probably depends on how closely you are trying to represent relational table structures. If your diagram is a <em>logical</em> model which is not meant to imply a relational implementation, then it is better to leave these out because the associative relationships already convey the way that entities are associated. For example, a JSON data structure can implement a one-to-many relationship without the need for foreign key properties, using arrays. Similarly an object-oriented programming language may use pointers or references to collections. Even for models that are intended for relational implementation, you might decide that inclusion of foreign key attributes duplicates information already portrayed by the relationships, and does not add meaning to entities. Ultimately, it&#39;s your choice.</p><h2 id="syntax" tabindex="-1">Syntax <a class="header-anchor" href="#syntax" aria-hidden="true">#</a></h2><h3 id="entities-and-relationships" tabindex="-1">Entities and Relationships <a class="header-anchor" href="#entities-and-relationships" aria-hidden="true">#</a></h3><p>Mermaid syntax for ER diagrams is compatible with PlantUML, with an extension to label the relationship. Each statement consists of the following parts:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">    &lt;first-entity&gt; [&lt;relationship&gt; &lt;second-entity&gt; : &lt;relationship-label&gt;]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Where:</p><ul><li><code>first-entity</code> is the name of an entity. Names must begin with an alphabetic character and may also contain digits, hyphens, and underscores.</li><li><code>relationship</code> describes the way that both entities inter-relate. See below.</li><li><code>second-entity</code> is the name of the other entity.</li><li><code>relationship-label</code> describes the relationship from the perspective of the first entity.</li></ul><p>For example:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">    PROPERTY ||--|{ ROOM : contains</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>This statement can be read as <em>a property contains one or more rooms, and a room is part of one and only one property</em>. You can see that the label here is from the first entity&#39;s perspective: a property contains a room, but a room does not contain a property. When considered from the perspective of the second entity, the equivalent label is usually very easy to infer. (Some ER diagrams label relationships from both perspectives, but this is not supported here, and is usually superfluous).</p><p>Only the <code>first-entity</code> part of a statement is mandatory. This makes it possible to show an entity with no relationships, which can be useful during iterative construction of diagrams. If any other parts of a statement are specified, then all parts are mandatory.</p><h3 id="relationship-syntax" tabindex="-1">Relationship Syntax <a class="header-anchor" href="#relationship-syntax" aria-hidden="true">#</a></h3><p>The <code>relationship</code> part of each statement can be broken down into three sub-components:</p><ul><li>the cardinality of the first entity with respect to the second,</li><li>whether the relationship confers identity on a &#39;child&#39; entity</li><li>the cardinality of the second entity with respect to the first</li></ul><p>Cardinality is a property that describes how many elements of another entity can be related to the entity in question. In the above example a <code>PROPERTY</code> can have one or more <code>ROOM</code> instances associated to it, whereas a <code>ROOM</code> can only be associated with one <code>PROPERTY</code>. In each cardinality marker there are two characters. The outermost character represents a maximum value, and the innermost character represents a minimum value. The table below summarises possible cardinalities.</p><table><thead><tr><th style="text-align:center;">Value (left)</th><th style="text-align:center;">Value (right)</th><th>Meaning</th></tr></thead><tbody><tr><td style="text-align:center;"><code>|o</code></td><td style="text-align:center;"><code>o|</code></td><td>Zero or one</td></tr><tr><td style="text-align:center;"><code>||</code></td><td style="text-align:center;"><code>||</code></td><td>Exactly one</td></tr><tr><td style="text-align:center;"><code>}o</code></td><td style="text-align:center;"><code>o{</code></td><td>Zero or more (no upper limit)</td></tr><tr><td style="text-align:center;"><code>}|</code></td><td style="text-align:center;"><code>|{</code></td><td>One or more (no upper limit)</td></tr></tbody></table><h3 id="identification" tabindex="-1">Identification <a class="header-anchor" href="#identification" aria-hidden="true">#</a></h3><p>Relationships may be classified as either <em>identifying</em> or <em>non-identifying</em> and these are rendered with either solid or dashed lines respectively. This is relevant when one of the entities in question can not have independent existence without the other. For example a firm that insures people to drive cars might need to store data on <code>NAMED-DRIVER</code>s. In modelling this we might start out by observing that a <code>CAR</code> can be driven by many <code>PERSON</code> instances, and a <code>PERSON</code> can drive many <code>CAR</code>s - both entities can exist without the other, so this is a non-identifying relationship that we might specify in Mermaid as: <code>PERSON }|..|{ CAR : &quot;driver&quot;</code>. Note the two dots in the middle of the relationship that will result in a dashed line being drawn between the two entities. But when this many-to-many relationship is resolved into two one-to-many relationships, we observe that a <code>NAMED-DRIVER</code> cannot exist without both a <code>PERSON</code> and a <code>CAR</code> - the relationships become identifying and would be specified using hyphens, which translate to a solid line:</p><div class="language-mermaid"><button class="copy"></button><span class="lang">mermaid</span><pre><code><span class="line"><span style="color:#89DDFF;">erDiagram</span></span>
<span class="line"><span style="color:#A6ACCD;">    CAR </span><span style="color:#89DDFF;">||--o{</span><span style="color:#A6ACCD;"> NAMED-DRIVER </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">allows</span></span>
<span class="line"><span style="color:#A6ACCD;">    PERSON </span><span style="color:#89DDFF;">||--o{</span><span style="color:#A6ACCD;"> NAMED-DRIVER </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">is</span></span>
<span class="line"></span></code></pre></div><h3 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-hidden="true">#</a></h3><p>Attributes can be defined for entities by specifying the entity name followed by a block containing multiple <code>type name</code> pairs, where a block is delimited by an opening <code>{</code> and a closing <code>}</code>. For example:</p><h5>Code:</h5><div class="language-mermaid"><button class="copy"></button><span class="lang">mermaid</span><pre class="shiki" style="background-color:transparent;"><code><span class="line"><span style="color:#89DDFF;">erDiagram</span></span>
<span class="line"><span style="color:#A6ACCD;">    CAR </span><span style="color:#89DDFF;">||--o{</span><span style="color:#A6ACCD;"> NAMED-DRIVER </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">allows</span></span>
<span class="line"><span style="color:#A6ACCD;">    CAR </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">string</span><span style="color:#A6ACCD;"> registrationNumber</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">string</span><span style="color:#A6ACCD;"> make</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">string</span><span style="color:#A6ACCD;"> model</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    PERSON </span><span style="color:#89DDFF;">||--o{</span><span style="color:#A6ACCD;"> NAMED-DRIVER </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">is</span></span>
<span class="line"><span style="color:#A6ACCD;">    PERSON </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">string</span><span style="color:#A6ACCD;"> firstName</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">string</span><span style="color:#A6ACCD;"> lastName</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> age</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h5>Render:</h5>`,24),d=s(`<p>The attributes are rendered inside the entity boxes:</p><h5>Code:</h5><div class="language-mermaid"><button class="copy"></button><span class="lang">mermaid</span><pre class="shiki" style="background-color:transparent;"><code><span class="line"><span style="color:#89DDFF;">erDiagram</span></span>
<span class="line"><span style="color:#A6ACCD;">    CAR </span><span style="color:#89DDFF;">||--o{</span><span style="color:#A6ACCD;"> NAMED-DRIVER </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">allows</span></span>
<span class="line"><span style="color:#A6ACCD;">    CAR </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">string</span><span style="color:#A6ACCD;"> registrationNumber</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">string</span><span style="color:#A6ACCD;"> make</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">string</span><span style="color:#A6ACCD;"> model</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    PERSON </span><span style="color:#89DDFF;">||--o{</span><span style="color:#A6ACCD;"> NAMED-DRIVER </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">is</span></span>
<span class="line"><span style="color:#A6ACCD;">    PERSON </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">string</span><span style="color:#A6ACCD;"> firstName</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">string</span><span style="color:#A6ACCD;"> lastName</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> age</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h5>Render:</h5>`,4),y=s(`<p>The <code>type</code> and <code>name</code> values must begin with an alphabetic character and may contain digits, hyphens or underscores. Other than that, there are no restrictions, and there is no implicit set of valid data types.</p><h4 id="attribute-keys-and-comments" tabindex="-1">Attribute Keys and Comments <a class="header-anchor" href="#attribute-keys-and-comments" aria-hidden="true">#</a></h4><p>Attributes may also have a <code>key</code> or comment defined. Keys can be &quot;PK&quot; or &quot;FK&quot;, for Primary Key or Foreign Key. And a <code>comment</code> is defined by double quotes at the end of an attribute. Comments themselves cannot have double-quote characters in them.</p><h5>Code:</h5><div class="language-mermaid"><button class="copy"></button><span class="lang">mermaid</span><pre class="shiki" style="background-color:transparent;"><code><span class="line"><span style="color:#89DDFF;">erDiagram</span></span>
<span class="line"><span style="color:#A6ACCD;">    CAR </span><span style="color:#89DDFF;">||--o{</span><span style="color:#A6ACCD;"> NAMED-DRIVER </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">allows</span></span>
<span class="line"><span style="color:#A6ACCD;">    CAR </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">string</span><span style="color:#A6ACCD;"> allowedDriver </span><span style="color:#89DDFF;">FK</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&quot;The license of the allowed driver&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">string</span><span style="color:#A6ACCD;"> registrationNumber</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">string</span><span style="color:#A6ACCD;"> make</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">string</span><span style="color:#A6ACCD;"> model</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    PERSON </span><span style="color:#89DDFF;">||--o{</span><span style="color:#A6ACCD;"> NAMED-DRIVER </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">is</span></span>
<span class="line"><span style="color:#A6ACCD;">    PERSON </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">string</span><span style="color:#A6ACCD;"> driversLicense </span><span style="color:#89DDFF;">PK</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&quot;The license #&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">string</span><span style="color:#A6ACCD;"> firstName</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">string</span><span style="color:#A6ACCD;"> lastName</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> age</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h5>Render:</h5>`,6),h=s('<h3 id="other-things" tabindex="-1">Other Things <a class="header-anchor" href="#other-things" aria-hidden="true">#</a></h3><ul><li>If you want the relationship label to be more than one word, you must use double quotes around the phrase</li><li>If you don&#39;t want a label at all on a relationship, you must use an empty double-quoted string</li></ul><h2 id="styling" tabindex="-1">Styling <a class="header-anchor" href="#styling" aria-hidden="true">#</a></h2><h3 id="config-options" tabindex="-1">Config options <a class="header-anchor" href="#config-options" aria-hidden="true">#</a></h3><p>For simple color customization:</p><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Used as</th></tr></thead><tbody><tr><td style="text-align:left;"><code>fill</code></td><td style="text-align:left;">Background color of an entity or attribute</td></tr><tr><td style="text-align:left;"><code>stroke</code></td><td style="text-align:left;">Border color of an entity or attribute, line color of a relationship</td></tr></tbody></table><h3 id="classes-used" tabindex="-1">Classes used <a class="header-anchor" href="#classes-used" aria-hidden="true">#</a></h3><p>The following CSS class selectors are available for richer styling:</p><table><thead><tr><th style="text-align:left;">Selector</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>.er.attributeBoxEven</code></td><td style="text-align:left;">The box containing attributes on even-numbered rows</td></tr><tr><td style="text-align:left;"><code>.er.attributeBoxOdd</code></td><td style="text-align:left;">The box containing attributes on odd-numbered rows</td></tr><tr><td style="text-align:left;"><code>.er.entityBox</code></td><td style="text-align:left;">The box representing an entity</td></tr><tr><td style="text-align:left;"><code>.er.entityLabel</code></td><td style="text-align:left;">The label for an entity</td></tr><tr><td style="text-align:left;"><code>.er.relationshipLabel</code></td><td style="text-align:left;">The label for a relationship</td></tr><tr><td style="text-align:left;"><code>.er.relationshipLabelBox</code></td><td style="text-align:left;">The box surrounding a relationship label</td></tr><tr><td style="text-align:left;"><code>.er.relationshipLine</code></td><td style="text-align:left;">The line representing a relationship between entities</td></tr></tbody></table>',9);function A(C,D,m,g,u,b){const e=l("Mermaid");return o(),t("div",null,[r,n(e,{id:"me14",graph:"erDiagram%0A%20%20%20%20CUSTOMER%20%7C%7C--o%7B%20ORDER%20%3A%20places%0A%20%20%20%20ORDER%20%7C%7C--%7C%7B%20LINE-ITEM%20%3A%20contains%0A%20%20%20%20CUSTOMER%20%7D%7C..%7C%7B%20DELIVERY-ADDRESS%20%3A%20uses%0A"}),p,n(e,{id:"me24",graph:"erDiagram%0A%20%20%20%20CUSTOMER%20%7C%7C--o%7B%20ORDER%20%3A%20places%0A%20%20%20%20CUSTOMER%20%7B%0A%20%20%20%20%20%20%20%20string%20name%0A%20%20%20%20%20%20%20%20string%20custNumber%0A%20%20%20%20%20%20%20%20string%20sector%0A%20%20%20%20%7D%0A%20%20%20%20ORDER%20%7C%7C--%7C%7B%20LINE-ITEM%20%3A%20contains%0A%20%20%20%20ORDER%20%7B%0A%20%20%20%20%20%20%20%20int%20orderNumber%0A%20%20%20%20%20%20%20%20string%20deliveryAddress%0A%20%20%20%20%7D%0A%20%20%20%20LINE-ITEM%20%7B%0A%20%20%20%20%20%20%20%20string%20productCode%0A%20%20%20%20%20%20%20%20int%20quantity%0A%20%20%20%20%20%20%20%20float%20pricePerUnit%0A%20%20%20%20%7D%0A"}),c,n(e,{id:"me173",graph:"erDiagram%0A%20%20%20%20CAR%20%7C%7C--o%7B%20NAMED-DRIVER%20%3A%20allows%0A%20%20%20%20CAR%20%7B%0A%20%20%20%20%20%20%20%20string%20registrationNumber%0A%20%20%20%20%20%20%20%20string%20make%0A%20%20%20%20%20%20%20%20string%20model%0A%20%20%20%20%7D%0A%20%20%20%20PERSON%20%7C%7C--o%7B%20NAMED-DRIVER%20%3A%20is%0A%20%20%20%20PERSON%20%7B%0A%20%20%20%20%20%20%20%20string%20firstName%0A%20%20%20%20%20%20%20%20string%20lastName%0A%20%20%20%20%20%20%20%20int%20age%0A%20%20%20%20%7D%0A"}),d,n(e,{id:"me177",graph:"erDiagram%0A%20%20%20%20CAR%20%7C%7C--o%7B%20NAMED-DRIVER%20%3A%20allows%0A%20%20%20%20CAR%20%7B%0A%20%20%20%20%20%20%20%20string%20registrationNumber%0A%20%20%20%20%20%20%20%20string%20make%0A%20%20%20%20%20%20%20%20string%20model%0A%20%20%20%20%7D%0A%20%20%20%20PERSON%20%7C%7C--o%7B%20NAMED-DRIVER%20%3A%20is%0A%20%20%20%20PERSON%20%7B%0A%20%20%20%20%20%20%20%20string%20firstName%0A%20%20%20%20%20%20%20%20string%20lastName%0A%20%20%20%20%20%20%20%20int%20age%0A%20%20%20%20%7D%0A"}),y,n(e,{id:"me187",graph:"erDiagram%0A%20%20%20%20CAR%20%7C%7C--o%7B%20NAMED-DRIVER%20%3A%20allows%0A%20%20%20%20CAR%20%7B%0A%20%20%20%20%20%20%20%20string%20allowedDriver%20FK%20%22The%20license%20of%20the%20allowed%20driver%22%0A%20%20%20%20%20%20%20%20string%20registrationNumber%0A%20%20%20%20%20%20%20%20string%20make%0A%20%20%20%20%20%20%20%20string%20model%0A%20%20%20%20%7D%0A%20%20%20%20PERSON%20%7C%7C--o%7B%20NAMED-DRIVER%20%3A%20is%0A%20%20%20%20PERSON%20%7B%0A%20%20%20%20%20%20%20%20string%20driversLicense%20PK%20%22The%20license%20%23%22%0A%20%20%20%20%20%20%20%20string%20firstName%0A%20%20%20%20%20%20%20%20string%20lastName%0A%20%20%20%20%20%20%20%20int%20age%0A%20%20%20%20%7D%0A"}),h])}const R=a(i,[["render",A]]);export{E as __pageData,R as default};
