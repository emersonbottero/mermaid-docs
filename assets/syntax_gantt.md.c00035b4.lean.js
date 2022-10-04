import{_ as e,c as l,e as n,d as s,o,r as t}from"./app.236d4e53.js";const p="/mermaid-docs/assets/Gantt-excluded-days-within.3ac81246.png",r="/mermaid-docs/assets/Gantt-long-weekend-look.fa8b39d3.png",k=JSON.parse('{"title":"Gantt diagrams","description":"","frontmatter":{},"headers":[{"level":2,"title":"A note to users","slug":"a-note-to-users","link":"#a-note-to-users","children":[]},{"level":2,"title":"Syntax","slug":"syntax","link":"#syntax","children":[{"level":3,"title":"Title","slug":"title","link":"#title","children":[]},{"level":3,"title":"Section statements","slug":"section-statements","link":"#section-statements","children":[]},{"level":3,"title":"Milestones","slug":"milestones","link":"#milestones","children":[]}]},{"level":2,"title":"Setting dates","slug":"setting-dates","link":"#setting-dates","children":[{"level":3,"title":"Input date format","slug":"input-date-format","link":"#input-date-format","children":[]},{"level":3,"title":"Output date format on the axis","slug":"output-date-format-on-the-axis","link":"#output-date-format-on-the-axis","children":[]}]},{"level":2,"title":"Comments","slug":"comments","link":"#comments","children":[]},{"level":2,"title":"Styling","slug":"styling","link":"#styling","children":[{"level":3,"title":"Classes used","slug":"classes-used","link":"#classes-used","children":[]},{"level":3,"title":"Sample stylesheet","slug":"sample-stylesheet","link":"#sample-stylesheet","children":[]}]},{"level":2,"title":"Today marker","slug":"today-marker","link":"#today-marker","children":[]},{"level":2,"title":"Configuration","slug":"configuration","link":"#configuration","children":[{"level":3,"title":"Possible configuration params:","slug":"possible-configuration-params","link":"#possible-configuration-params","children":[]}]},{"level":2,"title":"Interaction","slug":"interaction","link":"#interaction","children":[]}],"relativePath":"syntax/gantt.md"}'),c={name:"syntax/gantt.md"},i=s("",11),y=s("",4),D=s("",4),C=s("",10),A=s("",41);function d(F,h,m,u,g,f){const a=t("Mermaid");return o(),l("div",null,[i,n(a,{id:"me26",graph:"gantt%0A%20%20%20%20title%20A%20Gantt%20Diagram%0A%20%20%20%20dateFormat%20%20YYYY-MM-DD%0A%20%20%20%20section%20Section%0A%20%20%20%20A%20task%20%20%20%20%20%20%20%20%20%20%20%3Aa1%2C%202014-01-01%2C%2030d%0A%20%20%20%20Another%20task%20%20%20%20%20%3Aafter%20a1%20%20%2C%2020d%0A%20%20%20%20section%20Another%0A%20%20%20%20Task%20in%20sec%20%20%20%20%20%20%3A2014-01-12%20%20%2C%2012d%0A%20%20%20%20another%20task%20%20%20%20%20%20%3A%2024d%0A"}),y,n(a,{id:"me30",graph:"gantt%0A%20%20%20%20dateFormat%20%20YYYY-MM-DD%0A%20%20%20%20title%20%20%20%20%20%20%20Adding%20GANTT%20diagram%20functionality%20to%20mermaid%0A%20%20%20%20excludes%20%20%20%20weekends%0A%20%20%20%20%25%25%20(%60excludes%60%20accepts%20specific%20dates%20in%20YYYY-MM-DD%20format%2C%20days%20of%20the%20week%20(%22sunday%22)%20or%20%22weekends%22%2C%20but%20not%20the%20word%20%22weekdays%22.)%0A%0A%20%20%20%20section%20A%20section%0A%20%20%20%20Completed%20task%20%20%20%20%20%20%20%20%20%20%20%20%3Adone%2C%20%20%20%20des1%2C%202014-01-06%2C2014-01-08%0A%20%20%20%20Active%20task%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Aactive%2C%20%20des2%2C%202014-01-09%2C%203d%0A%20%20%20%20Future%20task%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3A%20%20%20%20%20%20%20%20%20des3%2C%20after%20des2%2C%205d%0A%20%20%20%20Future%20task2%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3A%20%20%20%20%20%20%20%20%20des4%2C%20after%20des3%2C%205d%0A%0A%20%20%20%20section%20Critical%20tasks%0A%20%20%20%20Completed%20task%20in%20the%20critical%20line%20%3Acrit%2C%20done%2C%202014-01-06%2C24h%0A%20%20%20%20Implement%20parser%20and%20jison%20%20%20%20%20%20%20%20%20%20%3Acrit%2C%20done%2C%20after%20des1%2C%202d%0A%20%20%20%20Create%20tests%20for%20parser%20%20%20%20%20%20%20%20%20%20%20%20%20%3Acrit%2C%20active%2C%203d%0A%20%20%20%20Future%20task%20in%20critical%20line%20%20%20%20%20%20%20%20%3Acrit%2C%205d%0A%20%20%20%20Create%20tests%20for%20renderer%20%20%20%20%20%20%20%20%20%20%20%3A2d%0A%20%20%20%20Add%20to%20mermaid%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3A1d%0A%20%20%20%20Functionality%20added%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Amilestone%2C%202014-01-25%2C%200d%0A%0A%20%20%20%20section%20Documentation%0A%20%20%20%20Describe%20gantt%20syntax%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Aactive%2C%20a1%2C%20after%20des1%2C%203d%0A%20%20%20%20Add%20gantt%20diagram%20to%20demo%20page%20%20%20%20%20%20%3Aafter%20a1%20%20%2C%2020h%0A%20%20%20%20Add%20another%20diagram%20to%20demo%20page%20%20%20%20%3Adoc1%2C%20after%20a1%20%20%2C%2048h%0A%0A%20%20%20%20section%20Last%20section%0A%20%20%20%20Describe%20gantt%20syntax%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Aafter%20doc1%2C%203d%0A%20%20%20%20Add%20gantt%20diagram%20to%20demo%20page%20%20%20%20%20%20%3A20h%0A%20%20%20%20Add%20another%20diagram%20to%20demo%20page%20%20%20%20%3A48h%0A"}),D,n(a,{id:"me34",graph:"%20%20%20%20gantt%0A%20%20%20%20%20%20%20%20apple%20%3Aa%2C%202017-07-20%2C%201w%0A%20%20%20%20%20%20%20%20banana%20%3Acrit%2C%20b%2C%202017-07-23%2C%201d%0A%20%20%20%20%20%20%20%20cherry%20%3Aactive%2C%20c%2C%20after%20b%20a%2C%201d%0A"}),C,n(a,{id:"me56",graph:"gantt%0AdateFormat%20HH%3Amm%0AaxisFormat%20%25H%3A%25M%0AInitial%20milestone%20%3A%20milestone%2C%20m1%2C%2017%3A49%2C2min%0Ataska2%20%3A%2010min%0Ataska3%20%3A%205min%0AFinal%20milestone%20%3A%20milestone%2C%20m2%2C%2018%3A14%2C%202min%0A"}),A])}const w=e(c,[["render",d]]);export{k as __pageData,w as default};