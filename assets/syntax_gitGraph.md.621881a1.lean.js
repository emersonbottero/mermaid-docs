import{_ as l,c as p,b as a,a as n,d as e,e as o,o as t,r as c}from"./app.0ddf1673.js";const j=JSON.parse('{"title":"Gitgraph Diagrams","description":"","frontmatter":{},"headers":[{"level":2,"title":"Syntax","slug":"syntax","link":"#syntax","children":[{"level":3,"title":"Adding custom commit id","slug":"adding-custom-commit-id","link":"#adding-custom-commit-id","children":[]},{"level":3,"title":"Modifying commit type","slug":"modifying-commit-type","link":"#modifying-commit-type","children":[]},{"level":3,"title":"Adding Tags","slug":"adding-tags","link":"#adding-tags","children":[]},{"level":3,"title":"Create a new branch","slug":"create-a-new-branch","link":"#create-a-new-branch","children":[]},{"level":3,"title":"Checking out an existing branch","slug":"checking-out-an-existing-branch","link":"#checking-out-an-existing-branch","children":[]},{"level":3,"title":"Merging two branches","slug":"merging-two-branches","link":"#merging-two-branches","children":[]},{"level":3,"title":"Cherry Pick commit from another branch","slug":"cherry-pick-commit-from-another-branch","link":"#cherry-pick-commit-from-another-branch","children":[]}]},{"level":2,"title":"Gitgraph specific configuration options","slug":"gitgraph-specific-configuration-options","link":"#gitgraph-specific-configuration-options","children":[]},{"level":2,"title":"Hiding Branch names and lines","slug":"hiding-branch-names-and-lines","link":"#hiding-branch-names-and-lines","children":[]},{"level":2,"title":"Commit labels Layout: Rotated or Horizontal","slug":"commit-labels-layout-rotated-or-horizontal","link":"#commit-labels-layout-rotated-or-horizontal","children":[]},{"level":2,"title":"Hiding commit labels","slug":"hiding-commit-labels","link":"#hiding-commit-labels","children":[]},{"level":2,"title":"Customizing main branch name","slug":"customizing-main-branch-name","link":"#customizing-main-branch-name","children":[]},{"level":2,"title":"Customizing branch ordering","slug":"customizing-branch-ordering","link":"#customizing-branch-ordering","children":[]},{"level":2,"title":"Themes","slug":"themes","link":"#themes","children":[{"level":3,"title":"Base Theme","slug":"base-theme","link":"#base-theme","children":[]},{"level":3,"title":"Forest Theme","slug":"forest-theme","link":"#forest-theme","children":[]},{"level":3,"title":"Default Theme","slug":"default-theme","link":"#default-theme","children":[]},{"level":3,"title":"Dark Theme","slug":"dark-theme","link":"#dark-theme","children":[]},{"level":3,"title":"Neutral Theme","slug":"neutral-theme","link":"#neutral-theme","children":[]}]},{"level":2,"title":"Customize using Theme Variables","slug":"customize-using-theme-variables","link":"#customize-using-theme-variables","children":[{"level":3,"title":"Customizing branch colors","slug":"customizing-branch-colors","link":"#customizing-branch-colors","children":[]},{"level":3,"title":"Customizing branch label colors","slug":"customizing-branch-label-colors","link":"#customizing-branch-label-colors","children":[]},{"level":3,"title":"Customizing Commit colors","slug":"customizing-commit-colors","link":"#customizing-commit-colors","children":[]},{"level":3,"title":"Customizing Commit Label Font Size","slug":"customizing-commit-label-font-size","link":"#customizing-commit-label-font-size","children":[]},{"level":3,"title":"Customizing Tag Label Font Size","slug":"customizing-tag-label-font-size","link":"#customizing-tag-label-font-size","children":[]},{"level":3,"title":"Customizing Tag colors","slug":"customizing-tag-colors","link":"#customizing-tag-colors","children":[]},{"level":3,"title":"Customizing Highlight commit colors","slug":"customizing-highlight-commit-colors","link":"#customizing-highlight-commit-colors","children":[]}]}],"relativePath":"syntax/gitGraph.md"}'),r={name:"syntax/gitGraph.md"},i=n("",7),A=n("",12),D=n("",7),C=n("",10),y=n("",7),m=n("",8),h=n("",8),d=n("",9),F=n("",8),u=n("",11),g=n("",10),b=n("",8),f=n("",4),k=n("",6),_=n("",6),v=n("",11),T=n("",5),w=n("",12),L=n("",4),B=n("",4),E=n("",4),q=n("",4),x=n("",7),I=n("",9),G=n("",8),S=n("",7),R=n("",7),H=n("",7),z=n("",6),V=n("",8),N=e("p",null,[o("See how the highlighted commit color on the first branch is changed to the value specified in the theme variable "),e("code",null,"gitInv0"),o(".")],-1);function M(P,O,Y,U,W,$){const s=c("Mermaid");return t(),p("div",null,[i,a(s,{id:"me14",graph:"%20%20%20%20gitGraph%0A%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20branch%20develop%0A%20%20%20%20%20%20%20checkout%20develop%0A%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20checkout%20main%0A%20%20%20%20%20%20%20merge%20develop%0A%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20commit%0A"}),A,a(s,{id:"me61",graph:"%20%20%20%20gitGraph%0A%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20commit%0A"}),D,a(s,{id:"me74",graph:"%20%20%20%20gitGraph%0A%20%20%20%20%20%20%20commit%20id%3A%20%22Alpha%22%0A%20%20%20%20%20%20%20commit%20id%3A%20%22Beta%22%0A%20%20%20%20%20%20%20commit%20id%3A%20%22Gamma%22%0A"}),C,a(s,{id:"me110",graph:"%20%20%20%20gitGraph%0A%20%20%20%20%20%20%20commit%20id%3A%20%22Normal%22%0A%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20commit%20id%3A%20%22Reverse%22%20type%3A%20REVERSE%0A%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20commit%20id%3A%20%22Highlight%22%20type%3A%20HIGHLIGHT%0A%20%20%20%20%20%20%20commit%0A"}),y,a(s,{id:"me123",graph:"%20%20%20%20gitGraph%0A%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20commit%20id%3A%20%22Normal%22%20tag%3A%20%22v1.0.0%22%0A%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20commit%20id%3A%20%22Reverse%22%20type%3A%20REVERSE%20tag%3A%20%22RC_1%22%0A%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20commit%20id%3A%20%22Highlight%22%20type%3A%20HIGHLIGHT%20tag%3A%20%228.8.4%22%0A%20%20%20%20%20%20%20commit%0A"}),m,a(s,{id:"me139",graph:"%20%20%20%20gitGraph%0A%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20branch%20develop%0A%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20commit%0A"}),h,a(s,{id:"me155",graph:"%20%20%20%20gitGraph%0A%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20branch%20develop%0A%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20checkout%20main%0A%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20commit%0A"}),d,a(s,{id:"me174",graph:"%20%20%20%20gitGraph%0A%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20branch%20develop%0A%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20checkout%20main%0A%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20merge%20develop%0A%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20commit%0A"}),F,a(s,{id:"me204",graph:"%20%20%20%20gitGraph%0A%20%20%20%20%20%20%20commit%20id%3A%20%221%22%0A%20%20%20%20%20%20%20commit%20id%3A%20%222%22%0A%20%20%20%20%20%20%20branch%20nice_feature%0A%20%20%20%20%20%20%20checkout%20nice_feature%0A%20%20%20%20%20%20%20commit%20id%3A%20%223%22%0A%20%20%20%20%20%20%20checkout%20main%0A%20%20%20%20%20%20%20commit%20id%3A%20%224%22%0A%20%20%20%20%20%20%20checkout%20nice_feature%0A%20%20%20%20%20%20%20branch%20very_nice_feature%0A%20%20%20%20%20%20%20checkout%20very_nice_feature%0A%20%20%20%20%20%20%20commit%20id%3A%20%225%22%0A%20%20%20%20%20%20%20checkout%20main%0A%20%20%20%20%20%20%20commit%20id%3A%20%226%22%0A%20%20%20%20%20%20%20checkout%20nice_feature%0A%20%20%20%20%20%20%20commit%20id%3A%20%227%22%0A%20%20%20%20%20%20%20checkout%20main%0A%20%20%20%20%20%20%20merge%20nice_feature%20id%3A%20%22customID%22%20tag%3A%20%22customTag%22%20type%3A%20REVERSE%0A%20%20%20%20%20%20%20checkout%20very_nice_feature%0A%20%20%20%20%20%20%20commit%20id%3A%20%228%22%0A%20%20%20%20%20%20%20checkout%20main%0A%20%20%20%20%20%20%20commit%20id%3A%20%229%22%0A"}),u,a(s,{id:"me243",graph:"%20%20%20%20gitGraph%0A%20%20%20%20%20%20%20commit%20id%3A%20%22ZERO%22%0A%20%20%20%20%20%20%20branch%20develop%0A%20%20%20%20%20%20%20commit%20id%3A%22A%22%0A%20%20%20%20%20%20%20checkout%20main%0A%20%20%20%20%20%20%20commit%20id%3A%22ONE%22%0A%20%20%20%20%20%20%20checkout%20develop%0A%20%20%20%20%20%20%20commit%20id%3A%22B%22%0A%20%20%20%20%20%20%20checkout%20main%0A%20%20%20%20%20%20%20commit%20id%3A%22TWO%22%0A%20%20%20%20%20%20%20cherry-pick%20id%3A%22A%22%0A%20%20%20%20%20%20%20commit%20id%3A%22THREE%22%0A%20%20%20%20%20%20%20checkout%20develop%0A%20%20%20%20%20%20%20commit%20id%3A%22C%22%0A"}),g,a(s,{id:"me284",graph:"%25%25%7Binit%3A%20%7B%20'logLevel'%3A%20'debug'%2C%20'theme'%3A%20'base'%2C%20'gitGraph'%3A%20%7B'showBranches'%3A%20false%7D%7D%20%7D%25%25%0A%20%20%20%20%20%20gitGraph%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20branch%20hotfix%0A%20%20%20%20%20%20%20%20checkout%20hotfix%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20branch%20develop%0A%20%20%20%20%20%20%20%20checkout%20develop%0A%20%20%20%20%20%20%20%20commit%20id%3A%22ash%22%20tag%3A%22abc%22%0A%20%20%20%20%20%20%20%20branch%20featureB%0A%20%20%20%20%20%20%20%20checkout%20featureB%0A%20%20%20%20%20%20%20%20commit%20type%3AHIGHLIGHT%0A%20%20%20%20%20%20%20%20checkout%20main%0A%20%20%20%20%20%20%20%20checkout%20hotfix%0A%20%20%20%20%20%20%20%20commit%20type%3ANORMAL%0A%20%20%20%20%20%20%20%20checkout%20develop%0A%20%20%20%20%20%20%20%20commit%20type%3AREVERSE%0A%20%20%20%20%20%20%20%20checkout%20featureB%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20checkout%20main%0A%20%20%20%20%20%20%20%20merge%20hotfix%0A%20%20%20%20%20%20%20%20checkout%20featureB%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20checkout%20develop%0A%20%20%20%20%20%20%20%20branch%20featureA%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20checkout%20develop%0A%20%20%20%20%20%20%20%20merge%20hotfix%0A%20%20%20%20%20%20%20%20checkout%20featureA%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20checkout%20featureB%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20checkout%20develop%0A%20%20%20%20%20%20%20%20merge%20featureA%0A%20%20%20%20%20%20%20%20branch%20release%0A%20%20%20%20%20%20%20%20checkout%20release%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20checkout%20main%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20checkout%20release%0A%20%20%20%20%20%20%20%20merge%20main%0A%20%20%20%20%20%20%20%20checkout%20develop%0A%20%20%20%20%20%20%20%20merge%20release%0A"}),b,a(s,{id:"me300",graph:"%25%25%7Binit%3A%20%7B%20'logLevel'%3A%20'debug'%2C%20'theme'%3A%20'base'%2C%20'gitGraph'%3A%20%7B'rotateCommitLabel'%3A%20true%7D%7D%20%7D%25%25%0AgitGraph%0A%20%20commit%20id%3A%20%22feat(api)%3A%20...%22%0A%20%20commit%20id%3A%20%22a%22%0A%20%20commit%20id%3A%20%22b%22%0A%20%20commit%20id%3A%20%22fix(client)%3A%20.extra%20long%20label..%22%0A%20%20branch%20c2%0A%20%20commit%20id%3A%20%22feat(modules)%3A%20...%22%0A%20%20commit%20id%3A%20%22test(client)%3A%20...%22%0A%20%20checkout%20main%0A%20%20commit%20id%3A%20%22fix(api)%3A%20...%22%0A%20%20commit%20id%3A%20%22ci%3A%20...%22%0A%20%20branch%20b1%0A%20%20commit%0A%20%20branch%20b2%0A%20%20commit%0A"}),f,a(s,{id:"me304",graph:"%25%25%7Binit%3A%20%7B%20'logLevel'%3A%20'debug'%2C%20'theme'%3A%20'base'%2C%20'gitGraph'%3A%20%7B'rotateCommitLabel'%3A%20false%7D%7D%20%7D%25%25%0AgitGraph%0A%20%20commit%20id%3A%20%22feat(api)%3A%20...%22%0A%20%20commit%20id%3A%20%22a%22%0A%20%20commit%20id%3A%20%22b%22%0A%20%20commit%20id%3A%20%22fix(client)%3A%20.extra%20long%20label..%22%0A%20%20branch%20c2%0A%20%20commit%20id%3A%20%22feat(modules)%3A%20...%22%0A%20%20commit%20id%3A%20%22test(client)%3A%20...%22%0A%20%20checkout%20main%0A%20%20commit%20id%3A%20%22fix(api)%3A%20...%22%0A%20%20commit%20id%3A%20%22ci%3A%20...%22%0A%20%20branch%20b1%0A%20%20commit%0A%20%20branch%20b2%0A%20%20commit%0A"}),k,a(s,{id:"me314",graph:"%25%25%7Binit%3A%20%7B%20'logLevel'%3A%20'debug'%2C%20'theme'%3A%20'base'%2C%20'gitGraph'%3A%20%7B'showBranches'%3A%20false%2C'showCommitLabel'%3A%20false%7D%7D%20%7D%25%25%0A%20%20%20%20%20%20gitGraph%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20branch%20hotfix%0A%20%20%20%20%20%20%20%20checkout%20hotfix%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20branch%20develop%0A%20%20%20%20%20%20%20%20checkout%20develop%0A%20%20%20%20%20%20%20%20commit%20id%3A%22ash%22%0A%20%20%20%20%20%20%20%20branch%20featureB%0A%20%20%20%20%20%20%20%20checkout%20featureB%0A%20%20%20%20%20%20%20%20commit%20type%3AHIGHLIGHT%0A%20%20%20%20%20%20%20%20checkout%20main%0A%20%20%20%20%20%20%20%20checkout%20hotfix%0A%20%20%20%20%20%20%20%20commit%20type%3ANORMAL%0A%20%20%20%20%20%20%20%20checkout%20develop%0A%20%20%20%20%20%20%20%20commit%20type%3AREVERSE%0A%20%20%20%20%20%20%20%20checkout%20featureB%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20checkout%20main%0A%20%20%20%20%20%20%20%20merge%20hotfix%0A%20%20%20%20%20%20%20%20checkout%20featureB%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20checkout%20develop%0A%20%20%20%20%20%20%20%20branch%20featureA%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20checkout%20develop%0A%20%20%20%20%20%20%20%20merge%20hotfix%0A%20%20%20%20%20%20%20%20checkout%20featureA%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20checkout%20featureB%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20checkout%20develop%0A%20%20%20%20%20%20%20%20merge%20featureA%0A%20%20%20%20%20%20%20%20branch%20release%0A%20%20%20%20%20%20%20%20checkout%20release%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20checkout%20main%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20checkout%20release%0A%20%20%20%20%20%20%20%20merge%20main%0A%20%20%20%20%20%20%20%20checkout%20develop%0A%20%20%20%20%20%20%20%20merge%20release%0A"}),_,a(s,{id:"me324",graph:"%25%25%7Binit%3A%20%7B%20'logLevel'%3A%20'debug'%2C%20'theme'%3A%20'base'%2C%20'gitGraph'%3A%20%7B'showBranches'%3A%20true%2C%20'showCommitLabel'%3Atrue%2C'mainBranchName'%3A%20'MetroLine1'%7D%7D%20%7D%25%25%0A%20%20%20%20%20%20gitGraph%0A%20%20%20%20%20%20%20%20commit%20id%3A%22NewYork%22%0A%20%20%20%20%20%20%20%20commit%20id%3A%22Dallas%22%0A%20%20%20%20%20%20%20%20branch%20MetroLine2%0A%20%20%20%20%20%20%20%20commit%20id%3A%22LosAngeles%22%0A%20%20%20%20%20%20%20%20commit%20id%3A%22Chicago%22%0A%20%20%20%20%20%20%20%20commit%20id%3A%22Houston%22%0A%20%20%20%20%20%20%20%20branch%20MetroLine3%0A%20%20%20%20%20%20%20%20commit%20id%3A%22Phoenix%22%0A%20%20%20%20%20%20%20%20commit%20type%3A%20HIGHLIGHT%20id%3A%22Denver%22%0A%20%20%20%20%20%20%20%20commit%20id%3A%22Boston%22%0A%20%20%20%20%20%20%20%20checkout%20MetroLine1%0A%20%20%20%20%20%20%20%20commit%20id%3A%22Atlanta%22%0A%20%20%20%20%20%20%20%20merge%20MetroLine3%0A%20%20%20%20%20%20%20%20commit%20id%3A%22Miami%22%0A%20%20%20%20%20%20%20%20commit%20id%3A%22Washington%22%0A%20%20%20%20%20%20%20%20merge%20MetroLine2%20tag%3A%22MY%20JUNCTION%22%0A%20%20%20%20%20%20%20%20commit%20id%3A%22Boston%22%0A%20%20%20%20%20%20%20%20commit%20id%3A%22Detroit%22%0A%20%20%20%20%20%20%20%20commit%20type%3AREVERSE%20id%3A%22SanFrancisco%22%0A"}),v,a(s,{id:"me363",graph:"%25%25%7Binit%3A%20%7B%20'logLevel'%3A%20'debug'%2C%20'theme'%3A%20'base'%2C%20'gitGraph'%3A%20%7B'showBranches'%3A%20true%2C%20'showCommitLabel'%3Atrue%7D%7D%20%7D%25%25%0A%20%20%20%20%20%20gitGraph%0A%20%20%20%20%20%20commit%0A%20%20%20%20%20%20branch%20test1%20order%3A%203%0A%20%20%20%20%20%20branch%20test2%20order%3A%202%0A%20%20%20%20%20%20branch%20test3%20order%3A%201%0A%0A"}),T,a(s,{id:"me370",graph:"%25%25%7Binit%3A%20%7B%20'logLevel'%3A%20'debug'%2C%20'theme'%3A%20'base'%2C%20'gitGraph'%3A%20%7B'showBranches'%3A%20true%2C%20'showCommitLabel'%3Atrue%2C'mainBranchOrder'%3A%202%7D%7D%20%7D%25%25%0A%20%20%20%20%20%20gitGraph%0A%20%20%20%20%20%20commit%0A%20%20%20%20%20%20branch%20test1%20order%3A%203%0A%20%20%20%20%20%20branch%20test2%0A%20%20%20%20%20%20branch%20test3%0A%20%20%20%20%20%20branch%20test4%20order%3A%201%0A%0A"}),w,a(s,{id:"me422",graph:"%25%25%7Binit%3A%20%7B%20'logLevel'%3A%20'debug'%2C%20'theme'%3A%20'base'%20%7D%20%7D%25%25%0A%20%20%20%20%20%20gitGraph%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20branch%20hotfix%0A%20%20%20%20%20%20%20%20checkout%20hotfix%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20branch%20develop%0A%20%20%20%20%20%20%20%20checkout%20develop%0A%20%20%20%20%20%20%20%20commit%20id%3A%22ash%22%20tag%3A%22abc%22%0A%20%20%20%20%20%20%20%20branch%20featureB%0A%20%20%20%20%20%20%20%20checkout%20featureB%0A%20%20%20%20%20%20%20%20commit%20type%3AHIGHLIGHT%0A%20%20%20%20%20%20%20%20checkout%20main%0A%20%20%20%20%20%20%20%20checkout%20hotfix%0A%20%20%20%20%20%20%20%20commit%20type%3ANORMAL%0A%20%20%20%20%20%20%20%20checkout%20develop%0A%20%20%20%20%20%20%20%20commit%20type%3AREVERSE%0A%20%20%20%20%20%20%20%20checkout%20featureB%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20checkout%20main%0A%20%20%20%20%20%20%20%20merge%20hotfix%0A%20%20%20%20%20%20%20%20checkout%20featureB%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20checkout%20develop%0A%20%20%20%20%20%20%20%20branch%20featureA%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20checkout%20develop%0A%20%20%20%20%20%20%20%20merge%20hotfix%0A%20%20%20%20%20%20%20%20checkout%20featureA%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20checkout%20featureB%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20checkout%20develop%0A%20%20%20%20%20%20%20%20merge%20featureA%0A%20%20%20%20%20%20%20%20branch%20release%0A%20%20%20%20%20%20%20%20checkout%20release%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20checkout%20main%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20checkout%20release%0A%20%20%20%20%20%20%20%20merge%20main%0A%20%20%20%20%20%20%20%20checkout%20develop%0A%20%20%20%20%20%20%20%20merge%20release%0A"}),L,a(s,{id:"me426",graph:"%25%25%7Binit%3A%20%7B%20'logLevel'%3A%20'debug'%2C%20'theme'%3A%20'forest'%20%7D%20%7D%25%25%0A%20%20%20%20%20%20gitGraph%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20branch%20hotfix%0A%20%20%20%20%20%20%20%20checkout%20hotfix%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20branch%20develop%0A%20%20%20%20%20%20%20%20checkout%20develop%0A%20%20%20%20%20%20%20%20commit%20id%3A%22ash%22%20tag%3A%22abc%22%0A%20%20%20%20%20%20%20%20branch%20featureB%0A%20%20%20%20%20%20%20%20checkout%20featureB%0A%20%20%20%20%20%20%20%20commit%20type%3AHIGHLIGHT%0A%20%20%20%20%20%20%20%20checkout%20main%0A%20%20%20%20%20%20%20%20checkout%20hotfix%0A%20%20%20%20%20%20%20%20commit%20type%3ANORMAL%0A%20%20%20%20%20%20%20%20checkout%20develop%0A%20%20%20%20%20%20%20%20commit%20type%3AREVERSE%0A%20%20%20%20%20%20%20%20checkout%20featureB%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20checkout%20main%0A%20%20%20%20%20%20%20%20merge%20hotfix%0A%20%20%20%20%20%20%20%20checkout%20featureB%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20checkout%20develop%0A%20%20%20%20%20%20%20%20branch%20featureA%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20checkout%20develop%0A%20%20%20%20%20%20%20%20merge%20hotfix%0A%20%20%20%20%20%20%20%20checkout%20featureA%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20checkout%20featureB%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20checkout%20develop%0A%20%20%20%20%20%20%20%20merge%20featureA%0A%20%20%20%20%20%20%20%20branch%20release%0A%20%20%20%20%20%20%20%20checkout%20release%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20checkout%20main%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20checkout%20release%0A%20%20%20%20%20%20%20%20merge%20main%0A%20%20%20%20%20%20%20%20checkout%20develop%0A%20%20%20%20%20%20%20%20merge%20release%0A"}),B,a(s,{id:"me430",graph:"%25%25%7Binit%3A%20%7B%20'logLevel'%3A%20'debug'%2C%20'theme'%3A%20'default'%20%7D%20%7D%25%25%0A%20%20%20%20%20%20gitGraph%0A%20%20%20%20%20%20%20%20commit%20type%3AHIGHLIGHT%0A%20%20%20%20%20%20%20%20branch%20hotfix%0A%20%20%20%20%20%20%20%20checkout%20hotfix%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20branch%20develop%0A%20%20%20%20%20%20%20%20checkout%20develop%0A%20%20%20%20%20%20%20%20commit%20id%3A%22ash%22%20tag%3A%22abc%22%0A%20%20%20%20%20%20%20%20branch%20featureB%0A%20%20%20%20%20%20%20%20checkout%20featureB%0A%20%20%20%20%20%20%20%20commit%20type%3AHIGHLIGHT%0A%20%20%20%20%20%20%20%20checkout%20main%0A%20%20%20%20%20%20%20%20checkout%20hotfix%0A%20%20%20%20%20%20%20%20commit%20type%3ANORMAL%0A%20%20%20%20%20%20%20%20checkout%20develop%0A%20%20%20%20%20%20%20%20commit%20type%3AREVERSE%0A%20%20%20%20%20%20%20%20checkout%20featureB%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20checkout%20main%0A%20%20%20%20%20%20%20%20merge%20hotfix%0A%20%20%20%20%20%20%20%20checkout%20featureB%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20checkout%20develop%0A%20%20%20%20%20%20%20%20branch%20featureA%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20checkout%20develop%0A%20%20%20%20%20%20%20%20merge%20hotfix%0A%20%20%20%20%20%20%20%20checkout%20featureA%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20checkout%20featureB%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20checkout%20develop%0A%20%20%20%20%20%20%20%20merge%20featureA%0A%20%20%20%20%20%20%20%20branch%20release%0A%20%20%20%20%20%20%20%20checkout%20release%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20checkout%20main%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20checkout%20release%0A%20%20%20%20%20%20%20%20merge%20main%0A%20%20%20%20%20%20%20%20checkout%20develop%0A%20%20%20%20%20%20%20%20merge%20release%0A"}),E,a(s,{id:"me434",graph:"%25%25%7Binit%3A%20%7B%20'logLevel'%3A%20'debug'%2C%20'theme'%3A%20'dark'%20%7D%20%7D%25%25%0A%20%20%20%20%20%20gitGraph%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20branch%20hotfix%0A%20%20%20%20%20%20%20%20checkout%20hotfix%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20branch%20develop%0A%20%20%20%20%20%20%20%20checkout%20develop%0A%20%20%20%20%20%20%20%20commit%20id%3A%22ash%22%20tag%3A%22abc%22%0A%20%20%20%20%20%20%20%20branch%20featureB%0A%20%20%20%20%20%20%20%20checkout%20featureB%0A%20%20%20%20%20%20%20%20commit%20type%3AHIGHLIGHT%0A%20%20%20%20%20%20%20%20checkout%20main%0A%20%20%20%20%20%20%20%20checkout%20hotfix%0A%20%20%20%20%20%20%20%20commit%20type%3ANORMAL%0A%20%20%20%20%20%20%20%20checkout%20develop%0A%20%20%20%20%20%20%20%20commit%20type%3AREVERSE%0A%20%20%20%20%20%20%20%20checkout%20featureB%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20checkout%20main%0A%20%20%20%20%20%20%20%20merge%20hotfix%0A%20%20%20%20%20%20%20%20checkout%20featureB%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20checkout%20develop%0A%20%20%20%20%20%20%20%20branch%20featureA%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20checkout%20develop%0A%20%20%20%20%20%20%20%20merge%20hotfix%0A%20%20%20%20%20%20%20%20checkout%20featureA%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20checkout%20featureB%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20checkout%20develop%0A%20%20%20%20%20%20%20%20merge%20featureA%0A%20%20%20%20%20%20%20%20branch%20release%0A%20%20%20%20%20%20%20%20checkout%20release%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20checkout%20main%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20checkout%20release%0A%20%20%20%20%20%20%20%20merge%20main%0A%20%20%20%20%20%20%20%20checkout%20develop%0A%20%20%20%20%20%20%20%20merge%20release%0A"}),q,a(s,{id:"me438",graph:"%25%25%7Binit%3A%20%7B%20'logLevel'%3A%20'debug'%2C%20'theme'%3A%20'neutral'%20%7D%20%7D%25%25%0A%20%20%20%20%20%20gitGraph%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20branch%20hotfix%0A%20%20%20%20%20%20%20%20checkout%20hotfix%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20branch%20develop%0A%20%20%20%20%20%20%20%20checkout%20develop%0A%20%20%20%20%20%20%20%20commit%20id%3A%22ash%22%20tag%3A%22abc%22%0A%20%20%20%20%20%20%20%20branch%20featureB%0A%20%20%20%20%20%20%20%20checkout%20featureB%0A%20%20%20%20%20%20%20%20commit%20type%3AHIGHLIGHT%0A%20%20%20%20%20%20%20%20checkout%20main%0A%20%20%20%20%20%20%20%20checkout%20hotfix%0A%20%20%20%20%20%20%20%20commit%20type%3ANORMAL%0A%20%20%20%20%20%20%20%20checkout%20develop%0A%20%20%20%20%20%20%20%20commit%20type%3AREVERSE%0A%20%20%20%20%20%20%20%20checkout%20featureB%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20checkout%20main%0A%20%20%20%20%20%20%20%20merge%20hotfix%0A%20%20%20%20%20%20%20%20checkout%20featureB%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20checkout%20develop%0A%20%20%20%20%20%20%20%20branch%20featureA%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20checkout%20develop%0A%20%20%20%20%20%20%20%20merge%20hotfix%0A%20%20%20%20%20%20%20%20checkout%20featureA%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20checkout%20featureB%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20checkout%20develop%0A%20%20%20%20%20%20%20%20merge%20featureA%0A%20%20%20%20%20%20%20%20branch%20release%0A%20%20%20%20%20%20%20%20checkout%20release%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20checkout%20main%0A%20%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20%20checkout%20release%0A%20%20%20%20%20%20%20%20merge%20main%0A%20%20%20%20%20%20%20%20checkout%20develop%0A%20%20%20%20%20%20%20%20merge%20release%0A"}),x,a(s,{id:"me451",graph:"%25%25%7Binit%3A%20%7B%20'logLevel'%3A%20'debug'%2C%20'theme'%3A%20'default'%20%7D%20%7D%25%25%0A%20%20%20%20%20%20%20gitGraph%0A%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20branch%20develop%0A%20%20%20%20%20%20%20commit%20tag%3A%22v1.0.0%22%0A%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20checkout%20main%0A%20%20%20%20%20%20%20commit%20type%3A%20HIGHLIGHT%0A%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20merge%20develop%0A%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20branch%20featureA%0A%20%20%20%20%20%20%20commit%0A"}),I,a(s,{id:"me475",graph:"%20%20%20%20%25%25%7Binit%3A%20%7B%20'logLevel'%3A%20'debug'%2C%20'theme'%3A%20'default'%20%2C%20'themeVariables'%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20'git0'%3A%20'%23ff0000'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20'git1'%3A%20'%2300ff00'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20'git2'%3A%20'%230000ff'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20'git3'%3A%20'%23ff00ff'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20'git4'%3A%20'%2300ffff'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20'git5'%3A%20'%23ffff00'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20'git6'%3A%20'%23ff00ff'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20'git7'%3A%20'%2300ffff'%0A%20%20%20%20%20%20%20%7D%20%7D%20%7D%25%25%0A%20%20%20%20%20%20%20gitGraph%0A%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20branch%20develop%0A%20%20%20%20%20%20%20commit%20tag%3A%22v1.0.0%22%0A%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20checkout%20main%0A%20%20%20%20%20%20%20commit%20type%3A%20HIGHLIGHT%0A%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20merge%20develop%0A%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20branch%20featureA%0A%20%20%20%20%20%20%20commit%0A%0A"}),G,a(s,{id:"me491",graph:"%20%20%20%20%25%25%7Binit%3A%20%7B%20'logLevel'%3A%20'debug'%2C%20'theme'%3A%20'default'%20%2C%20'themeVariables'%3A%20%7B%0A%20%20%20%20%20%20%20%20'gitBranchLabel0'%3A%20'%23ffffff'%2C%0A%20%20%20%20%20%20%20%20'gitBranchLabel1'%3A%20'%23ffffff'%2C%0A%20%20%20%20%20%20%20%20'gitBranchLabel2'%3A%20'%23ffffff'%2C%0A%20%20%20%20%20%20%20%20'gitBranchLabel3'%3A%20'%23ffffff'%2C%0A%20%20%20%20%20%20%20%20'gitBranchLabel4'%3A%20'%23ffffff'%2C%0A%20%20%20%20%20%20%20%20'gitBranchLabel5'%3A%20'%23ffffff'%2C%0A%20%20%20%20%20%20%20%20'gitBranchLabel6'%3A%20'%23ffffff'%2C%0A%20%20%20%20%20%20%20%20'gitBranchLabel7'%3A%20'%23ffffff'%2C%0A%20%20%20%20%20%20%20%20'gitBranchLabel8'%3A%20'%23ffffff'%2C%0A%20%20%20%20%20%20%20%20'gitBranchLabel9'%3A%20'%23ffffff'%0A%20%20%7D%20%7D%20%7D%25%25%0A%20%20gitGraph%0A%20%20%20%20checkout%20main%0A%20%20%20%20branch%20branch1%0A%20%20%20%20branch%20branch2%0A%20%20%20%20branch%20branch3%0A%20%20%20%20branch%20branch4%0A%20%20%20%20branch%20branch5%0A%20%20%20%20branch%20branch6%0A%20%20%20%20branch%20branch7%0A%20%20%20%20branch%20branch8%0A%20%20%20%20branch%20branch9%0A%20%20%20%20checkout%20branch1%0A%20%20%20%20commit%0A"}),S,a(s,{id:"me504",graph:"%20%20%20%20%25%25%7Binit%3A%20%7B%20'logLevel'%3A%20'debug'%2C%20'theme'%3A%20'default'%20%2C%20'themeVariables'%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20'commitLabelColor'%3A%20'%23ff0000'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20'commitLabelBackground'%3A%20'%2300ff00'%0A%20%20%20%20%20%20%20%7D%20%7D%20%7D%25%25%0A%20%20%20%20%20%20%20gitGraph%0A%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20branch%20develop%0A%20%20%20%20%20%20%20commit%20tag%3A%22v1.0.0%22%0A%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20checkout%20main%0A%20%20%20%20%20%20%20commit%20type%3A%20HIGHLIGHT%0A%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20merge%20develop%0A%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20branch%20featureA%0A%20%20%20%20%20%20%20commit%0A%0A"}),R,a(s,{id:"me517",graph:"%20%20%20%20%25%25%7Binit%3A%20%7B%20'logLevel'%3A%20'debug'%2C%20'theme'%3A%20'default'%20%2C%20'themeVariables'%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20'commitLabelColor'%3A%20'%23ff0000'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20'commitLabelBackground'%3A%20'%2300ff00'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20'commitLabelFontSize'%3A%20'16px'%0A%20%20%20%20%20%20%20%7D%20%7D%20%7D%25%25%0A%20%20%20%20%20%20%20gitGraph%0A%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20branch%20develop%0A%20%20%20%20%20%20%20commit%20tag%3A%22v1.0.0%22%0A%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20checkout%20main%0A%20%20%20%20%20%20%20commit%20type%3A%20HIGHLIGHT%0A%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20merge%20develop%0A%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20branch%20featureA%0A%20%20%20%20%20%20%20commit%0A%0A"}),H,a(s,{id:"me530",graph:"%20%20%20%20%25%25%7Binit%3A%20%7B%20'logLevel'%3A%20'debug'%2C%20'theme'%3A%20'default'%20%2C%20'themeVariables'%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20'commitLabelColor'%3A%20'%23ff0000'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20'commitLabelBackground'%3A%20'%2300ff00'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20'tagLabelFontSize'%3A%20'16px'%0A%20%20%20%20%20%20%20%7D%20%7D%20%7D%25%25%0A%20%20%20%20%20%20%20gitGraph%0A%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20branch%20develop%0A%20%20%20%20%20%20%20commit%20tag%3A%22v1.0.0%22%0A%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20checkout%20main%0A%20%20%20%20%20%20%20commit%20type%3A%20HIGHLIGHT%0A%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20merge%20develop%0A%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20branch%20featureA%0A%20%20%20%20%20%20%20commit%0A%0A"}),z,a(s,{id:"me540",graph:"%20%20%20%20%25%25%7Binit%3A%20%7B%20'logLevel'%3A%20'debug'%2C%20'theme'%3A%20'default'%20%2C%20'themeVariables'%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20'tagLabelColor'%3A%20'%23ff0000'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20'tagLabelBackground'%3A%20'%2300ff00'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20'tagLabelBorder'%3A%20'%230000ff'%0A%20%20%20%20%20%20%20%7D%20%7D%20%7D%25%25%0A%20%20%20%20%20%20%20gitGraph%0A%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20branch%20develop%0A%20%20%20%20%20%20%20commit%20tag%3A%22v1.0.0%22%0A%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20checkout%20main%0A%20%20%20%20%20%20%20commit%20type%3A%20HIGHLIGHT%0A%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20merge%20develop%0A%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20branch%20featureA%0A%20%20%20%20%20%20%20commit%0A%0A"}),V,a(s,{id:"me556",graph:"%20%20%20%20%25%25%7Binit%3A%20%7B%20'logLevel'%3A%20'debug'%2C%20'theme'%3A%20'default'%20%2C%20'themeVariables'%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20'gitInv0'%3A%20'%23ff0000'%0A%20%20%20%20%20%20%20%7D%20%7D%20%7D%25%25%0A%20%20%20%20%20%20%20gitGraph%0A%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20branch%20develop%0A%20%20%20%20%20%20%20commit%20tag%3A%22v1.0.0%22%0A%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20checkout%20main%0A%20%20%20%20%20%20%20commit%20type%3A%20HIGHLIGHT%0A%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20merge%20develop%0A%20%20%20%20%20%20%20commit%0A%20%20%20%20%20%20%20branch%20featureA%0A%20%20%20%20%20%20%20commit%0A%0A"}),N])}const Z=l(r,[["render",M]]);export{j as __pageData,Z as default};
