import { version } from "../../package.json";
import MermaidExample from "./mermaid-markdown-all";
import { MermaidMarkdown } from "vitepress-plugin-mermaid";
import CustomMarkdown from "./blocks-markdown";
import { defineConfig } from "vitepress";

const allMarkdownTransformers = {
  config: async (md) => {
    MermaidMarkdown(md);
    await MermaidExample(md);
    CustomMarkdown(md);
  },
};

export default defineConfig({
  lang: "en-US",
  title: "Mermaid",
  description: "Create diagrams and visualizations using text and code.",
  base: "/mermaid-docs/",
  markdown: allMarkdownTransformers,
  ignoreDeadLinks: true,
  head: [
    [
      "link",
      { rel: "icon", type: "image/x-icon", href: "/mermaid-js/favicon.ico" },
    ],
  ],
  themeConfig: {
    nav: nav(),
    editLink: {
      pattern:
        "https://github.com/mermaid-docs/mermaid/edit/develop/packages/mermaid/src/docs/:path",
      text: "Edit this page on GitHub",
    },

    sidebar: {
      "/": sidebarAll(),
      // "/intro/": sidebarIntro(),
      // "/syntax/": sidebarSyntax(),
      // "/config": sidebarConfig(),
      // "/misc/": sidebarMisc(),
      // "/community/": sidebarCommunity(),
    },
  },
});

function nav() {
  return [
    { text: "Intro", link: "/intro/", activeMatch: "/intro/" },
    {
      text: "Configuration",
      link: "/config/Tutorials",
      activeMatch: "/config/",
    },
    { text: "Syntax", link: "/syntax/classDiagram", activeMatch: "/syntax/" },
    { text: "Misc", link: "/misc/integrations", activeMatch: "/misc/" },
    {
      text: "Community",
      link: "/community/n00b-overview",
      activeMatch: "/community/",
    },
    {
      text: version,
      items: [
        {
          text: "Changelog",
          link: "https://github.com/mermaid-js/mermaid/blob/develop/CHANGELOG.md",
        },
        {
          text: "Contributing",
          link: "https://github.com/mermaid-js/mermaid/blob/develop/CONTRIBUTING.md",
        },
      ],
    },
    {
      text: "💻 Live Editor",
      link: "https://mermaid.live",
    },
  ];
}

function sidebarAll() {
  return [
    {
      text: "📔 Introduction",
      collapsible: true,
      items: [
        { text: "About Mermaid", link: "/intro/" },
        { text: "Deployment", link: "/intro/n00b-gettingStarted" },
        {
          text: "Syntax and Configuration",
          link: "/intro/n00b-syntaxReference",
        },
      ],
    },
    ...sidebarSyntax(),
    ...sidebarConfig(),
    ...sidebarMisc(),
    ...sidebarCommunity(),
    // {
    //   text: "Generated",
    //   items: [{ text: "modules", link: "docs/code/modules" }],
    // },
  ];
}

function sidebarSyntax() {
  return [
    {
      text: "📊 Diagram Syntax",
      collapsible: true,
      items: [
        { text: "Flowchart", link: "/syntax/flowchart" },
        { text: "Sequence Diagram", link: "/syntax/sequenceDiagram" },
        { text: "Class Diagram", link: "/syntax/classDiagram" },
        { text: "State Diagram", link: "/syntax/stateDiagram" },
        {
          text: "Entity Relationship Diagram",
          link: "/syntax/entityRelationshipDiagram",
        },
        { text: "User Journey", link: "/syntax/userJourney" },
        { text: "Gantt", link: "/syntax/gantt" },
        { text: "Pie Chart", link: "/syntax/pie" },
        { text: "Requirement Diagram", link: "/syntax/requirementDiagram" },
        { text: "Gitgraph (Git) Diagram 🔥", link: "/syntax/gitGraph" },
        { text: "C4C Diagram (Context) Diagram 🦺⚠️", link: "/syntax/c4c" },
        { text: "Other Examples", link: "/syntax/examples" },
      ],
    },
  ];
}

function sidebarConfig() {
  return [
    {
      text: "⚙️ Deployment and Configuration",
      collapsible: true,
      items: [
        { text: "Tutorials", link: "/config/Tutorials" },
        { text: "API-Usage", link: "/config/usage" },
        { text: "Mermaid API Configuration", link: "/config/setup/modules" },
        { text: "Directives", link: "/config/directives" },
        { text: "Theming", link: "/config/theming" },
        { text: "Accessibility", link: "/config/accessibility" },
        { text: "Mermaid CLI", link: "/config/mermaidCLI" },
        { text: "Advanced usage", link: "/config/n00b-advanced" },
        { text: "Configuration", link: "/config/configuration" },
      ],
    },
  ];
}

function sidebarMisc() {
  return [
    {
      text: "📚 Misc",
      collapsible: true,
      items: [
        { text: "Use-Cases and Integrations", link: "/misc/integrations" },
        { text: "FAQ", link: "/misc/faq" },
      ],
    },
  ];
}

function sidebarCommunity() {
  return [
    {
      text: "🙌 Contributions and Community",
      collapsible: true,
      items: [
        { text: "Overview for Beginners", link: "/community/n00b-overview" },
        {
          text: "Development and Contribution",
          link: "/community/development",
        },
        { text: "Changelog", link: "/community/CHANGELOG" },
        { text: "Adding Diagrams", link: "/community/newDiagram" },
        { text: "Security", link: "/community/security" },
      ],
    },
  ];
}
