import{_ as o,o as e,c as p,b as a,a as n,d as l,e as t,r as c}from"./app.640ec9d8.js";const T=JSON.parse('{"title":"Examples","description":"","frontmatter":{},"headers":[{"level":2,"title":"Basic Pie Chart","slug":"basic-pie-chart","link":"#basic-pie-chart","children":[]},{"level":2,"title":"Basic sequence diagram","slug":"basic-sequence-diagram","link":"#basic-sequence-diagram","children":[]},{"level":2,"title":"Basic flowchart","slug":"basic-flowchart","link":"#basic-flowchart","children":[]},{"level":2,"title":"Larger flowchart with some styling","slug":"larger-flowchart-with-some-styling","link":"#larger-flowchart-with-some-styling","children":[]},{"level":2,"title":"SequenceDiagram: Loops, alt and opt","slug":"sequencediagram-loops-alt-and-opt","link":"#sequencediagram-loops-alt-and-opt","children":[]},{"level":2,"title":"SequenceDiagram: Message to self in loop","slug":"sequencediagram-message-to-self-in-loop","link":"#sequencediagram-message-to-self-in-loop","children":[]},{"level":2,"title":"Sequence Diagram: Blogging app service communication","slug":"sequence-diagram-blogging-app-service-communication","link":"#sequence-diagram-blogging-app-service-communication","children":[]},{"level":2,"title":"A commit flow diagram.","slug":"a-commit-flow-diagram","link":"#a-commit-flow-diagram","children":[]}],"relativePath":"syntax/examples.md"}'),r={name:"syntax/examples.md"},D=n("",8),A=n("",3),i=n("",4),C=n("",4),y=n("",4),d=n("",4),F=n("",4),h=n("",4),g=l("h2",{id:"a-commit-flow-diagram",tabindex:"-1"},[t("A commit flow diagram. "),l("a",{class:"header-anchor",href:"#a-commit-flow-diagram","aria-hidden":"true"},"#")],-1);function u(m,b,E,_,f,w){const s=c("Mermaid");return e(),p("div",null,[D,a(s,{id:"me15",graph:"pie%20title%20NETFLIX%0A%20%20%20%20%20%20%20%20%20%22Time%20spent%20looking%20for%20movie%22%20%3A%2090%0A%20%20%20%20%20%20%20%20%20%22Time%20spent%20watching%20it%22%20%3A%2010%0A"}),A,a(s,{id:"me16",graph:"pie%20title%20What%20Voldemort%20doesn't%20have%3F%0A%20%20%20%20%20%20%20%20%20%22FRIENDS%22%20%3A%202%0A%20%20%20%20%20%20%20%20%20%22FAMILY%22%20%3A%203%0A%20%20%20%20%20%20%20%20%20%22NOSE%22%20%3A%2045%0A"}),i,a(s,{id:"me20",graph:"sequenceDiagram%0A%20%20%20%20Alice%20-%3E%3E%20Bob%3A%20Hello%20Bob%2C%20how%20are%20you%3F%0A%20%20%20%20Bob--%3E%3EJohn%3A%20How%20about%20you%20John%3F%0A%20%20%20%20Bob--x%20Alice%3A%20I%20am%20good%20thanks!%0A%20%20%20%20Bob-x%20John%3A%20I%20am%20good%20thanks!%0A%20%20%20%20Note%20right%20of%20John%3A%20Bob%20thinks%20a%20long%3Cbr%2F%3Elong%20time%2C%20so%20long%3Cbr%2F%3Ethat%20the%20text%20does%3Cbr%2F%3Enot%20fit%20on%20a%20row.%0A%0A%20%20%20%20Bob--%3EAlice%3A%20Checking%20with%20John...%0A%20%20%20%20Alice-%3EJohn%3A%20Yes...%20John%2C%20how%20are%20you%3F%0A"}),C,a(s,{id:"me24",graph:"graph%20LR%0A%20%20%20%20A%5BSquare%20Rect%5D%20--%20Link%20text%20--%3E%20B((Circle))%0A%20%20%20%20A%20--%3E%20C(Round%20Rect)%0A%20%20%20%20B%20--%3E%20D%7BRhombus%7D%0A%20%20%20%20C%20--%3E%20D%0A"}),y,a(s,{id:"me28",graph:"graph%20TB%0A%20%20%20%20sq%5BSquare%20shape%5D%20--%3E%20ci((Circle%20shape))%0A%0A%20%20%20%20subgraph%20A%0A%20%20%20%20%20%20%20%20od%3EOdd%20shape%5D--%20Two%20line%3Cbr%2F%3Eedge%20comment%20--%3E%20ro%0A%20%20%20%20%20%20%20%20di%7BDiamond%20with%20%3Cbr%2F%3E%20line%20break%7D%20-.-%3E%20ro(Rounded%3Cbr%3Esquare%3Cbr%3Eshape)%0A%20%20%20%20%20%20%20%20di%3D%3D%3Ero2(Rounded%20square%20shape)%0A%20%20%20%20end%0A%0A%20%20%20%20%25%25%20Notice%20that%20no%20text%20in%20shape%20are%20added%20here%20instead%20that%20is%20appended%20further%20down%0A%20%20%20%20e%20--%3E%20od3%3EReally%20long%20text%20with%20linebreak%3Cbr%3Ein%20an%20Odd%20shape%5D%0A%0A%20%20%20%20%25%25%20Comments%20after%20double%20percent%20signs%0A%20%20%20%20e((Inner%20%2F%20circle%3Cbr%3Eand%20some%20odd%20%3Cbr%3Especial%20characters))%20--%3E%20f(%2C.%3F!%2B-*%D8%B2)%0A%0A%20%20%20%20cyr%5BCyrillic%5D--%3Ecyr2((Circle%20shape%20%D0%9D%D0%B0%D1%87%D0%B0%D0%BB%D0%BE))%3B%0A%0A%20%20%20%20%20classDef%20green%20fill%3A%239f6%2Cstroke%3A%23333%2Cstroke-width%3A2px%3B%0A%20%20%20%20%20classDef%20orange%20fill%3A%23f96%2Cstroke%3A%23333%2Cstroke-width%3A4px%3B%0A%20%20%20%20%20class%20sq%2Ce%20green%0A%20%20%20%20%20class%20di%20orange%0A"}),d,a(s,{id:"me32",graph:"sequenceDiagram%0A%20%20%20%20loop%20Daily%20query%0A%20%20%20%20%20%20%20%20Alice-%3E%3EBob%3A%20Hello%20Bob%2C%20how%20are%20you%3F%0A%20%20%20%20%20%20%20%20alt%20is%20sick%0A%20%20%20%20%20%20%20%20%20%20%20%20Bob-%3E%3EAlice%3A%20Not%20so%20good%20%3A(%0A%20%20%20%20%20%20%20%20else%20is%20well%0A%20%20%20%20%20%20%20%20%20%20%20%20Bob-%3E%3EAlice%3A%20Feeling%20fresh%20like%20a%20daisy%0A%20%20%20%20%20%20%20%20end%0A%0A%20%20%20%20%20%20%20%20opt%20Extra%20response%0A%20%20%20%20%20%20%20%20%20%20%20%20Bob-%3E%3EAlice%3A%20Thanks%20for%20asking%0A%20%20%20%20%20%20%20%20end%0A%20%20%20%20end%0A"}),F,a(s,{id:"me36",graph:"sequenceDiagram%0A%20%20%20%20participant%20Alice%0A%20%20%20%20participant%20Bob%0A%20%20%20%20Alice-%3E%3EJohn%3A%20Hello%20John%2C%20how%20are%20you%3F%0A%20%20%20%20loop%20Healthcheck%0A%20%20%20%20%20%20%20%20John-%3E%3EJohn%3A%20Fight%20against%20hypochondria%0A%20%20%20%20end%0A%20%20%20%20Note%20right%20of%20John%3A%20Rational%20thoughts%3Cbr%2F%3Eprevail...%0A%20%20%20%20John--%3E%3EAlice%3A%20Great!%0A%20%20%20%20John-%3E%3EBob%3A%20How%20about%20you%3F%0A%20%20%20%20Bob--%3E%3EJohn%3A%20Jolly%20good!%0A"}),h,a(s,{id:"me40",graph:"sequenceDiagram%0A%20%20%20%20participant%20web%20as%20Web%20Browser%0A%20%20%20%20participant%20blog%20as%20Blog%20Service%0A%20%20%20%20participant%20account%20as%20Account%20Service%0A%20%20%20%20participant%20mail%20as%20Mail%20Service%0A%20%20%20%20participant%20db%20as%20Storage%0A%0A%20%20%20%20Note%20over%20web%2Cdb%3A%20The%20user%20must%20be%20logged%20in%20to%20submit%20blog%20posts%0A%20%20%20%20web-%3E%3E%2Baccount%3A%20Logs%20in%20using%20credentials%0A%20%20%20%20account-%3E%3Edb%3A%20Query%20stored%20accounts%0A%20%20%20%20db-%3E%3Eaccount%3A%20Respond%20with%20query%20result%0A%0A%20%20%20%20alt%20Credentials%20not%20found%0A%20%20%20%20%20%20%20%20account-%3E%3Eweb%3A%20Invalid%20credentials%0A%20%20%20%20else%20Credentials%20found%0A%20%20%20%20%20%20%20%20account-%3E%3E-web%3A%20Successfully%20logged%20in%0A%0A%20%20%20%20%20%20%20%20Note%20over%20web%2Cdb%3A%20When%20the%20user%20is%20authenticated%2C%20they%20can%20now%20submit%20new%20posts%0A%20%20%20%20%20%20%20%20web-%3E%3E%2Bblog%3A%20Submit%20new%20post%0A%20%20%20%20%20%20%20%20blog-%3E%3Edb%3A%20Store%20post%20data%0A%0A%20%20%20%20%20%20%20%20par%20Notifications%0A%20%20%20%20%20%20%20%20%20%20%20%20blog--)mail%3A%20Send%20mail%20to%20blog%20subscribers%0A%20%20%20%20%20%20%20%20%20%20%20%20blog--)db%3A%20Store%20in-site%20notifications%0A%20%20%20%20%20%20%20%20and%20Response%0A%20%20%20%20%20%20%20%20%20%20%20%20blog--%3E%3E-web%3A%20Successfully%20posted%0A%20%20%20%20%20%20%20%20end%0A%20%20%20%20end%0A%0A"}),g,a(s,{id:"mermaid_382ee1a6",graph:"gitGraph%3A%0A%20%20%20%20commit%20%22Ashish%22%0A%20%20%20%20branch%20newbranch%0A%20%20%20%20checkout%20newbranch%0A%20%20%20%20commit%20id%3A%221111%22%0A%20%20%20%20commit%20tag%3A%22test%22%0A%20%20%20%20checkout%20main%0A%20%20%20%20commit%20type%3A%20HIGHLIGHT%0A%20%20%20%20commit%0A%20%20%20%20merge%20newbranch%0A%20%20%20%20commit%0A%20%20%20%20branch%20b2%0A%20%20%20%20commit"})])}const k=o(r,[["render",u]]);export{T as __pageData,k as default};