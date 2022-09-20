import{_ as e,c as l,b as a,a as n,o,r as p}from"./app.f29a59a5.js";const t="/mermaid-docs/assets/accessibility-div-example.f2818ee4.png",c="/mermaid-docs/assets/accessibility-div-example-2.fd543bb5.png",R=JSON.parse('{"title":"Accessibility Options","description":"","frontmatter":{},"headers":[{"level":2,"title":"Accessibility","slug":"accessibility","link":"#accessibility","children":[]},{"level":2,"title":"Defining Accessibility Options","slug":"defining-accessibility-options","link":"#defining-accessibility-options","children":[{"level":3,"title":"Single line accessibility values","slug":"single-line-accessibility-values","link":"#single-line-accessibility-values","children":[]},{"level":3,"title":"Multi-line Accessibility title/description","slug":"multi-line-accessibility-title-description","link":"#multi-line-accessibility-title-description","children":[]},{"level":3,"title":"Sample Code Snippet for other diagram types","slug":"sample-code-snippet-for-other-diagram-types","link":"#sample-code-snippet-for-other-diagram-types","children":[]}]}],"relativePath":"config/accessibility.md"}'),i={name:"config/accessibility.md"},r=n("",14),A=n("",11),D=n("",7),y=n("",4),C=n("",4),d=n("",4),h=n("",4),m=n("",4),g=n("",4),u=n("",4),_=n("",4);function F(b,T,E,f,M,S){const s=p("Mermaid");return o(),l("div",null,[r,a(s,{id:"me42",graph:"%20%20%20graph%20LR%0A%20%20%20%20%20%20accTitle%3A%20Big%20decisions%0A%20%20%20%20%20%20accDescr%3A%20Flow%20chart%20of%20the%20decision%20making%20process%0A%20%20%20%20%20%20A%5BHard%5D%20--%3E%7CText%7C%20B(Round)%0A%20%20%20%20%20%20B%20--%3E%20C%7BDecision%7D%0A%20%20%20%20%20%20C%20--%3E%7COne%7C%20D%5BResult%201%5D%0A%0A"}),A,a(s,{id:"me67",graph:"%20%20%20graph%20LR%0A%20%20%20%20%20%20accTitle%3A%20Big%20decisions%0A%0A%20%20%20%20%20%20accDescr%20%7B%0A%20%20%20%20%20%20%20%20My%20multi-line%20description%0A%20%20%20%20%20%20%20%20of%20the%20diagram%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20A%5BHard%5D%20--%3E%7CText%7C%20B(Round)%0A%20%20%20%20%20%20B%20--%3E%20C%7BDecision%7D%0A%20%20%20%20%20%20C%20--%3E%7COne%7C%20D%5BResult%201%5D%0A%0A"}),D,a(s,{id:"me80",graph:"%20%20%20sequenceDiagram%0A%20%20%20%20%20%20accTitle%3A%20My%20Sequence%20Diagram%0A%20%20%20%20%20%20accDescr%3A%20My%20Sequence%20Diagram%20Description%0A%0A%20%20%20%20%20%20Alice-%3E%3EJohn%3A%20Hello%20John%2C%20how%20are%20you%3F%0A%20%20%20%20%20%20John--%3E%3EAlice%3A%20Great!%0A%20%20%20%20%20%20Alice-)John%3A%20See%20you%20later!%0A"}),y,a(s,{id:"me84",graph:"%20%20%20classDiagram%0A%20%20%20%20%20%20accTitle%3A%20My%20Class%20Diagram%0A%20%20%20%20%20%20accDescr%3A%20My%20Class%20Diagram%20Description%0A%0A%20%20%20%20%20%20Vehicle%20%3C%7C--%20Car%0A"}),C,a(s,{id:"me88",graph:"%20%20%20stateDiagram%0A%20%20%20%20%20%20accTitle%3A%20My%20State%20Diagram%0A%20%20%20%20%20%20accDescr%3A%20My%20State%20Diagram%20Description%0A%0A%20%20%20%20%20%20%20s1%20--%3E%20s2%0A%0A"}),d,a(s,{id:"me92",graph:"%20%20%20erDiagram%0A%20%20%20%20%20%20accTitle%3A%20My%20Entity%20Relationship%20Diagram%0A%20%20%20%20%20%20accDescr%3A%20My%20Entity%20Relationship%20Diagram%20Description%0A%0A%20%20%20%20CUSTOMER%20%7C%7C--o%7B%20ORDER%20%3A%20places%0A%20%20%20%20ORDER%20%7C%7C--%7C%7B%20LINE-ITEM%20%3A%20contains%0A%20%20%20%20CUSTOMER%20%7D%7C..%7C%7B%20DELIVERY-ADDRESS%20%3A%20uses%0A%0A"}),h,a(s,{id:"me96",graph:"%20%20journey%0A%20%20%20%20%20%20accTitle%3A%20My%20User%20Journey%20Diagram%0A%20%20%20%20%20%20accDescr%3A%20My%20User%20Journey%20Diagram%20Description%0A%0A%20%20%20%20%20%20title%20My%20working%20day%0A%20%20%20%20%20%20section%20Go%20to%20work%0A%20%20%20%20%20%20%20%20Make%20tea%3A%205%3A%20Me%0A%20%20%20%20%20%20%20%20Go%20upstairs%3A%203%3A%20Me%0A%20%20%20%20%20%20%20%20Do%20work%3A%201%3A%20Me%2C%20Cat%0A%20%20%20%20%20%20section%20Go%20home%0A%20%20%20%20%20%20%20%20Go%20downstairs%3A%205%3A%20Me%0A%20%20%20%20%20%20%20%20Sit%20down%3A%205%3A%20Me%0A%0A"}),m,a(s,{id:"me100",graph:"%20%20%20gantt%0A%20%20%20%20%20%20accTitle%3A%20My%20Gantt%20Chart%20Accessibility%20Title%0A%20%20%20%20%20%20accDescr%3A%20My%20Gantt%20Chart%20Accessibility%20Description%0A%0A%20%20%20%20title%20A%20Gantt%20Diagram%0A%20%20%20%20dateFormat%20%20YYYY-MM-DD%0A%20%20%20%20section%20Section%0A%20%20%20%20A%20task%20%20%20%20%20%20%20%20%20%20%20%3Aa1%2C%202014-01-01%2C%2030d%0A%20%20%20%20Another%20task%20%20%20%20%20%3Aafter%20a1%20%20%2C%2020d%0A%20%20%20%20section%20Another%0A%20%20%20%20Task%20in%20sec%20%20%20%20%20%20%3A2014-01-12%20%20%2C%2012d%0A%20%20%20%20another%20task%20%20%20%20%20%20%3A%2024d%0A%0A"}),g,a(s,{id:"me104",graph:"%20%20%20pie%0A%20%20%20%20%20%20accTitle%3A%20My%20Pie%20Chart%20Accessibility%20Title%0A%20%20%20%20%20%20accDescr%3A%20My%20Pie%20Chart%20Accessibility%20Description%0A%0A%20%20%20%20title%20Key%20elements%20in%20Product%20X%0A%20%20%20%20%22Calcium%22%20%3A%2042.96%0A%20%20%20%20%22Potassium%22%20%3A%2050.05%0A%20%20%20%20%22Magnesium%22%20%3A%2010.01%0A%20%20%20%20%22Iron%22%20%3A%20%205%0A%0A"}),u,a(s,{id:"me108",graph:"%20%20requirementDiagram%0A%20%20%20%20%20%20accTitle%3A%20My%20Requirement%20Diagram%0A%20%20%20%20%20%20accDescr%3A%20My%20Requirement%20Diagram%20Description%0A%0A%20%20%20%20%20%20%20requirement%20test_req%20%7B%0A%20%20id%3A%201%0A%20%20text%3A%20the%20test%20text.%0A%20%20risk%3A%20high%0A%20%20verifymethod%3A%20test%0A%20%20%7D%0A%0A%20%20element%20test_entity%20%7B%0A%20%20type%3A%20simulation%0A%20%20%7D%0A%0A%20%20test_entity%20-%20satisfies%20-%3E%20test_req%0A%0A"}),_,a(s,{id:"me112",graph:"%20%20gitGraph%0A%20%20%20%20%20%20accTitle%3A%20My%20Gitgraph%20Accessibility%20Title%0A%20%20%20%20%20%20accDescr%3A%20My%20Gitgraph%20Accessibility%20Description%0A%0A%20%20%20%20%20commit%0A%20%20%20%20%20commit%0A%20%20%20%20%20branch%20develop%0A%20%20%20%20%20checkout%20develop%0A%20%20%20%20%20commit%0A%20%20%20%20%20commit%0A%20%20%20%20%20checkout%20main%0A%20%20%20%20%20merge%20develop%0A%20%20%20%20%20commit%0A%20%20%20%20%20commit%0A%0A"})])}const v=e(i,[["render",F]]);export{R as __pageData,v as default};
