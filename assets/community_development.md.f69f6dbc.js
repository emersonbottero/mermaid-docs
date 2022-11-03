import{_ as e,o as t,c as a,a as o}from"./app.640ec9d8.js";const m=JSON.parse('{"title":"Development and Contribution \u{1F64C}","description":"","frontmatter":{},"headers":[{"level":2,"title":"Branching","slug":"branching","link":"#branching","children":[]},{"level":2,"title":"Contributing Code","slug":"contributing-code","link":"#contributing-code","children":[]},{"level":2,"title":"Contributing to Documentation","slug":"contributing-to-documentation","link":"#contributing-to-documentation","children":[]},{"level":2,"title":"How to Contribute to Documentation","slug":"how-to-contribute-to-documentation","link":"#how-to-contribute-to-documentation","children":[{"level":3,"title":"Add Unit Tests for Parsing","slug":"add-unit-tests-for-parsing","link":"#add-unit-tests-for-parsing","children":[]},{"level":3,"title":"Add E2E Tests","slug":"add-e2e-tests","link":"#add-e2e-tests","children":[]},{"level":3,"title":"Any Questions or Suggestions?","slug":"any-questions-or-suggestions","link":"#any-questions-or-suggestions","children":[]},{"level":3,"title":"How to Contribute a Suggestion","slug":"how-to-contribute-a-suggestion","link":"#how-to-contribute-a-suggestion","children":[]}]},{"level":2,"title":"Last Words","slug":"last-words","link":"#last-words","children":[]}],"relativePath":"community/development.md"}'),n={name:"community/development.md"},s=o(`<h1 id="development-and-contribution-\u{1F64C}" tabindex="-1">Development and Contribution \u{1F64C} <a class="header-anchor" href="#development-and-contribution-\u{1F64C}" aria-hidden="true">#</a></h1><p>So you want to help? That&#39;s great!</p><p><img src="https://media.giphy.com/media/BlVnrxJgTGsUw/giphy.gif" alt="Image of happy people jumping with excitement"></p><p>Here are a few things to get you started on the right path.</p><p><strong>The Docs Structure is dictated by <a href="https://github.com/mermaid-js/mermaid/edit/develop/src/docs/_sidebar.md" target="_blank" rel="noreferrer">sidebar.md</a></strong></p><p><strong>Note: Commits and Pull Requests should be directed to the develop branch.</strong></p><h2 id="branching" tabindex="-1">Branching <a class="header-anchor" href="#branching" aria-hidden="true">#</a></h2><p>Mermaid uses a <a href="https://guides.github.com/introduction/flow/" target="_blank" rel="noreferrer">Git Flow</a>\u2013inspired approach to branching. So development is done in the <code>develop</code> branch.</p><p>Once development is done we branch a <code>release</code> branch from <code>develop</code> for testing.</p><p>Once the release happens we merge the <code>release</code> branch with <code>master</code> and kill the <code>release</code> branch.</p><p>This means that <strong>you should branch off your pull request from develop</strong> and direct all Pull Requests to it.</p><h2 id="contributing-code" tabindex="-1">Contributing Code <a class="header-anchor" href="#contributing-code" aria-hidden="true">#</a></h2><p>We make all changes via Pull Requests. As we have many Pull Requests from developers new to mermaid, we have put in place a process, wherein <em>knsv, Knut Sveidqvist</em> is the primary reviewer of changes and merging pull requests. The process is as follows:</p><ul><li>Large changes reviewed by knsv or other developer asked to review by knsv</li><li>Smaller, low-risk changes like dependencies, documentation, etc. can be merged by active collaborators</li><li>Documentation (we encourage updates to the <code>src/docs</code> folder; you can submit them via direct commits)</li></ul><p>When you commit code, create a branch with the following naming convention:</p><p>Start with the type, such as <strong>feature</strong> or <strong>bug</strong>, followed by the issue number for reference, and a text that describes the issue.</p><p><strong>One example:</strong></p><p><code>feature/945_state_diagrams</code></p><p><strong>Another example:</strong></p><p><code>bug/123_nasty_bug_branch</code></p><h2 id="contributing-to-documentation" tabindex="-1">Contributing to Documentation <a class="header-anchor" href="#contributing-to-documentation" aria-hidden="true">#</a></h2><p>If it is not in the documentation, it&#39;s like it never happened. Wouldn&#39;t that be sad? With all the effort that was put into the feature?</p><p>The docs are located in the <code>src/docs</code> folder and are written in Markdown. Just pick the right section and start typing. If you want to propose changes to the structure of the documentation, such as adding a new section or a new file you do that via the <strong><a href="https://github.com/mermaid-js/mermaid/edit/develop/src/docs/_sidebar.md" target="_blank" rel="noreferrer">sidebar</a></strong>.</p><blockquote><p><strong>All the documents displayed in the <a href="http://GitHub.io" target="_blank" rel="noreferrer">GitHub.io</a> page are listed in <a href="https://github.com/mermaid-js/mermaid/edit/develop/src/docs/_sidebar.md" target="_blank" rel="noreferrer">sidebar.md</a></strong>.</p></blockquote><p>The contents of <a href="https://mermaid-js.github.io/mermaid/" target="_blank" rel="noreferrer">https://mermaid-js.github.io/mermaid/</a> are based on the docs from the <code>master</code> branch. Updates committed to the <code>master</code> branch are reflected in the <a href="https://mermaid-js.github.io/mermaid/" target="_blank" rel="noreferrer">Mermaid Docs</a> once released.</p><h2 id="how-to-contribute-to-documentation" tabindex="-1">How to Contribute to Documentation <a class="header-anchor" href="#how-to-contribute-to-documentation" aria-hidden="true">#</a></h2><p>We are a little less strict here, it is OK to commit directly in the <code>develop</code> branch if you are a collaborator.</p><p>The documentation is located in the <code>src/docs</code> directory and organized according to relevant subfolder.</p><p>The <code>docs</code> folder will be automatically generated when committing to <code>src/docs</code> and should not be edited manually.</p><p>We encourage contributions to the documentation at <a href="https://github.com/mermaid-js/mermaid/tree/develop/src/docs" target="_blank" rel="noreferrer">mermaid-js/mermaid/src/docs</a>. We publish documentation using GitHub Pages with <a href="https://www.youtube.com/watch?v=TV88lp7egMw&amp;t=3s" target="_blank" rel="noreferrer">Docsify</a></p><h3 id="add-unit-tests-for-parsing" tabindex="-1">Add Unit Tests for Parsing <a class="header-anchor" href="#add-unit-tests-for-parsing" aria-hidden="true">#</a></h3><p>This is important so that, if someone that does not know about this great feature suggests a change to the grammar, they get notified early on when that change breaks the parser. Another important aspect is that, without proper parsing, tests refactoring is pretty much impossible.</p><h3 id="add-e2e-tests" tabindex="-1">Add E2E Tests <a class="header-anchor" href="#add-e2e-tests" aria-hidden="true">#</a></h3><p>This tests the rendering and visual appearance of the diagrams. This ensures that the rendering of that feature in the e2e will be reviewed in the release process going forward. Less chance that it breaks!</p><p>To start working with the e2e tests:</p><ol><li>Run <code>pnpm run dev</code> to start the dev server</li><li>Start <strong>Cypress</strong> by running <code>pnpm exec cypress open</code> in the <strong>mermaid</strong> folder.</li></ol><p>The rendering tests are very straightforward to create. There is a function <code>imgSnapshotTest</code>, which takes a diagram in text form and the mermaid options, and it renders that diagram in Cypress.</p><p>When running in CI it will take a snapshot of the rendered diagram and compare it with the snapshot from last build and flag it for review if it differs.</p><p>This is what a rendering test looks like:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#82AAFF;">it</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">should render forks and joins</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">imgSnapshotTest</span><span style="color:#F07178;">(</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#C3E88D;">    stateDiagram</span></span>
<span class="line"><span style="color:#C3E88D;">    state fork_state &amp;lt;&amp;lt;fork&amp;gt;&amp;gt;</span></span>
<span class="line"><span style="color:#C3E88D;">      [*] --&gt; fork_state</span></span>
<span class="line"><span style="color:#C3E88D;">      fork_state --&gt; State2</span></span>
<span class="line"><span style="color:#C3E88D;">      fork_state --&gt; State3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">      state join_state &amp;lt;&amp;lt;join&amp;gt;&amp;gt;</span></span>
<span class="line"><span style="color:#C3E88D;">      State2 --&gt; join_state</span></span>
<span class="line"><span style="color:#C3E88D;">      State3 --&gt; join_state</span></span>
<span class="line"><span style="color:#C3E88D;">      join_state --&gt; State4</span></span>
<span class="line"><span style="color:#C3E88D;">      State4 --&gt; [*]</span></span>
<span class="line"><span style="color:#C3E88D;">    </span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> logLevel</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">cy</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">svg</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="any-questions-or-suggestions" tabindex="-1">Any Questions or Suggestions? <a class="header-anchor" href="#any-questions-or-suggestions" aria-hidden="true">#</a></h3><p>After logging in at <a href="https://www.github.com" target="_blank" rel="noreferrer">GitHub.com</a>, open or append to an issue <a href="https://github.com/mermaid-js/mermaid/issues?q=is%3Aissue+is%3Aopen+label%3A%22Area%3A+Documentation%22" target="_blank" rel="noreferrer">using the GitHub issue tracker of the mermaid-js repository</a>.</p><h3 id="how-to-contribute-a-suggestion" tabindex="-1">How to Contribute a Suggestion <a class="header-anchor" href="#how-to-contribute-a-suggestion" aria-hidden="true">#</a></h3><p>Markdown is used to format the text, for more information about Markdown <a href="https://help.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax" target="_blank" rel="noreferrer">see the GitHub Markdown help page</a>.</p><p>To edit Docs on your computer:</p><ol><li>Find the Markdown file (.md) to edit in the <a href="https://github.com/mermaid-js/mermaid/tree/develop/src/docs" target="_blank" rel="noreferrer">mermaid-js/mermaid/src/docs</a> directory in the <code>develop</code> branch.</li><li>Create a fork of the develop branch.</li><li>Make changes or add new documentation.</li><li>Commit changes to your fork and push it to GitHub.</li><li>Create a Pull Request of your fork.</li></ol><p>To edit Docs on GitHub:</p><ol><li>Login to <a href="https://www.github.com" target="_blank" rel="noreferrer">GitHub.com</a>.</li><li>Navigate to <a href="https://github.com/mermaid-js/mermaid/tree/develop/src/docs" target="_blank" rel="noreferrer">mermaid-js/mermaid/src/docs</a>.</li><li>To edit a file, click the pencil icon at the top-right of the file contents panel.</li><li>Describe what you changed in the <strong>Propose file change</strong> section, located at the bottom of the page.</li><li>Submit your changes by clicking the button <strong>Propose file change</strong> at the bottom (by automatic creation of a fork and a new branch).</li><li>Create a Pull Request of your newly forked branch by clicking the green <strong>Create Pull Request</strong> button.</li></ol><h2 id="last-words" tabindex="-1">Last Words <a class="header-anchor" href="#last-words" aria-hidden="true">#</a></h2><p>Don&#39;t get daunted if it is hard in the beginning. We have a great community with only encouraging words. So, if you get stuck, ask for help and hints in the Slack forum. If you want to show off something good, show it off there.</p><p><a href="https://join.slack.com/t/mermaid-talk/shared_invite/enQtNzc4NDIyNzk4OTAyLWVhYjQxOTI2OTg4YmE1ZmJkY2Y4MTU3ODliYmIwOTY3NDJlYjA0YjIyZTdkMDMyZTUwOGI0NjEzYmEwODcwOTE" target="_blank" rel="noreferrer">Join our Slack community if you want closer contact!</a></p><p><img src="https://media.giphy.com/media/l49JHz7kJvl6MCj3G/giphy.gif" alt="Image of superhero wishing you good luck"></p>`,52),r=[s];function i(l,c,d,p,h,g){return t(),a("div",null,r)}const b=e(n,[["render",i]]);export{m as __pageData,b as default};