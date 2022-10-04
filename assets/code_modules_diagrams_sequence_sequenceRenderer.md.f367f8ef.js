import{_ as e,c as d,o as t,d as o}from"./app.ef92c309.js";const h=JSON.parse('{"title":"Module: diagrams/sequence/sequenceRenderer","description":"","frontmatter":{},"headers":[{"level":2,"title":"Table of contents","slug":"table-of-contents","link":"#table-of-contents","children":[{"level":3,"title":"Variables","slug":"variables","link":"#variables","children":[]},{"level":3,"title":"Functions","slug":"functions","link":"#functions","children":[]}]},{"level":2,"title":"Variables","slug":"variables-1","link":"#variables-1","children":[{"level":3,"title":"bounds","slug":"bounds","link":"#bounds","children":[]},{"level":3,"title":"default","slug":"default","link":"#default","children":[]}]},{"level":2,"title":"Functions","slug":"functions-1","link":"#functions-1","children":[{"level":3,"title":"draw","slug":"draw","link":"#draw","children":[]},{"level":3,"title":"drawActors","slug":"drawactors","link":"#drawactors","children":[]},{"level":3,"title":"drawActorsPopup","slug":"drawactorspopup","link":"#drawactorspopup","children":[]},{"level":3,"title":"setConf","slug":"setconf","link":"#setconf","children":[]}]}],"relativePath":"code/modules/diagrams_sequence_sequenceRenderer.md"}'),c={name:"code/modules/diagrams_sequence_sequenceRenderer.md"},a=o('<p><a href="./../README.html">mermaid-docs</a> / <a href="./../modules.html">Exports</a> / diagrams/sequence/sequenceRenderer</p><h1 id="module-diagrams-sequence-sequencerenderer" tabindex="-1">Module: diagrams/sequence/sequenceRenderer <a class="header-anchor" href="#module-diagrams-sequence-sequencerenderer" aria-hidden="true">#</a></h1><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a></h2><h3 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-hidden="true">#</a></h3><ul><li><a href="./diagrams_sequence_sequenceRenderer.html#bounds">bounds</a></li><li><a href="./diagrams_sequence_sequenceRenderer.html#default">default</a></li></ul><h3 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-hidden="true">#</a></h3><ul><li><a href="./diagrams_sequence_sequenceRenderer.html#draw">draw</a></li><li><a href="./diagrams_sequence_sequenceRenderer.html#drawactors">drawActors</a></li><li><a href="./diagrams_sequence_sequenceRenderer.html#drawactorspopup">drawActorsPopup</a></li><li><a href="./diagrams_sequence_sequenceRenderer.html#setconf">setConf</a></li></ul><h2 id="variables-1" tabindex="-1">Variables <a class="header-anchor" href="#variables-1" aria-hidden="true">#</a></h2><h3 id="bounds" tabindex="-1">bounds <a class="header-anchor" href="#bounds" aria-hidden="true">#</a></h3><p>\u2022 <code>Const</code> <strong>bounds</strong>: <code>Object</code></p><h4 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>activations</code></td><td style="text-align:left;"><code>never</code>[]</td></tr><tr><td style="text-align:left;"><code>addSectionToLoop</code></td><td style="text-align:left;">(<code>message</code>: <code>any</code>) =&gt; <code>void</code></td></tr><tr><td style="text-align:left;"><code>bumpVerticalPos</code></td><td style="text-align:left;">(<code>bump</code>: <code>any</code>) =&gt; <code>void</code></td></tr><tr><td style="text-align:left;"><code>createLoop</code></td><td style="text-align:left;">(<code>title</code>: { <code>message</code>: <code>undefined</code> = undefined; <code>width</code>: <code>undefined</code> = undefined; <code>wrap</code>: <code>boolean</code> = false }, <code>fill</code>: <code>any</code>) =&gt; { <code>fill</code>: <code>any</code> = fill; <code>height</code>: <code>number</code> = 0; <code>startx</code>: <code>undefined</code> = undefined; <code>starty</code>: <code>number</code> ; <code>stopx</code>: <code>undefined</code> = undefined; <code>stopy</code>: <code>undefined</code> = undefined; <code>title</code>: <code>undefined</code> = title.message; <code>width</code>: <code>undefined</code> = title.width; <code>wrap</code>: <code>boolean</code> = title.wrap }</td></tr><tr><td style="text-align:left;"><code>data</code></td><td style="text-align:left;">{ <code>startx</code>: <code>undefined</code> = undefined; <code>starty</code>: <code>undefined</code> = undefined; <code>stopx</code>: <code>undefined</code> = undefined; <code>stopy</code>: <code>undefined</code> = undefined }</td></tr><tr><td style="text-align:left;"><code>data.startx</code></td><td style="text-align:left;"><code>undefined</code></td></tr><tr><td style="text-align:left;"><code>data.starty</code></td><td style="text-align:left;"><code>undefined</code></td></tr><tr><td style="text-align:left;"><code>data.stopx</code></td><td style="text-align:left;"><code>undefined</code></td></tr><tr><td style="text-align:left;"><code>data.stopy</code></td><td style="text-align:left;"><code>undefined</code></td></tr><tr><td style="text-align:left;"><code>endActivation</code></td><td style="text-align:left;">(<code>message</code>: <code>any</code>) =&gt; <code>never</code></td></tr><tr><td style="text-align:left;"><code>endLoop</code></td><td style="text-align:left;">() =&gt; <code>undefined</code></td></tr><tr><td style="text-align:left;"><code>getBounds</code></td><td style="text-align:left;">() =&gt; { <code>bounds</code>: { <code>startx</code>: <code>undefined</code> = undefined; <code>starty</code>: <code>undefined</code> = undefined; <code>stopx</code>: <code>undefined</code> = undefined; <code>stopy</code>: <code>undefined</code> = undefined } ; <code>models</code>: { <code>actors</code>: <code>never</code>[] = []; <code>addActor</code>: (<code>actorModel</code>: <code>any</code>) =&gt; <code>void</code> ; <code>addLoop</code>: (<code>loopModel</code>: <code>any</code>) =&gt; <code>void</code> ; <code>addMessage</code>: (<code>msgModel</code>: <code>any</code>) =&gt; <code>void</code> ; <code>addNote</code>: (<code>noteModel</code>: <code>any</code>) =&gt; <code>void</code> ; <code>clear</code>: () =&gt; <code>void</code> ; <code>getHeight</code>: () =&gt; <code>any</code> ; <code>lastActor</code>: () =&gt; <code>never</code> ; <code>lastLoop</code>: () =&gt; <code>never</code> ; <code>lastMessage</code>: () =&gt; <code>never</code> ; <code>lastNote</code>: () =&gt; <code>never</code> ; <code>loops</code>: <code>never</code>[] = []; <code>messages</code>: <code>never</code>[] = []; <code>notes</code>: <code>never</code>[] = [] } }</td></tr><tr><td style="text-align:left;"><code>getVerticalPos</code></td><td style="text-align:left;">() =&gt; <code>number</code></td></tr><tr><td style="text-align:left;"><code>init</code></td><td style="text-align:left;">() =&gt; <code>void</code></td></tr><tr><td style="text-align:left;"><code>insert</code></td><td style="text-align:left;">(<code>startx</code>: <code>any</code>, <code>starty</code>: <code>any</code>, <code>stopx</code>: <code>any</code>, <code>stopy</code>: <code>any</code>) =&gt; <code>void</code></td></tr><tr><td style="text-align:left;"><code>models</code></td><td style="text-align:left;">{ <code>actors</code>: <code>never</code>[] = []; <code>addActor</code>: (<code>actorModel</code>: <code>any</code>) =&gt; <code>void</code> ; <code>addLoop</code>: (<code>loopModel</code>: <code>any</code>) =&gt; <code>void</code> ; <code>addMessage</code>: (<code>msgModel</code>: <code>any</code>) =&gt; <code>void</code> ; <code>addNote</code>: (<code>noteModel</code>: <code>any</code>) =&gt; <code>void</code> ; <code>clear</code>: () =&gt; <code>void</code> ; <code>getHeight</code>: () =&gt; <code>any</code> ; <code>lastActor</code>: () =&gt; <code>never</code> ; <code>lastLoop</code>: () =&gt; <code>never</code> ; <code>lastMessage</code>: () =&gt; <code>never</code> ; <code>lastNote</code>: () =&gt; <code>never</code> ; <code>loops</code>: <code>never</code>[] = []; <code>messages</code>: <code>never</code>[] = []; <code>notes</code>: <code>never</code>[] = [] }</td></tr><tr><td style="text-align:left;"><code>models.actors</code></td><td style="text-align:left;"><code>never</code>[]</td></tr><tr><td style="text-align:left;"><code>models.addActor</code></td><td style="text-align:left;">(<code>actorModel</code>: <code>any</code>) =&gt; <code>void</code></td></tr><tr><td style="text-align:left;"><code>models.addLoop</code></td><td style="text-align:left;">(<code>loopModel</code>: <code>any</code>) =&gt; <code>void</code></td></tr><tr><td style="text-align:left;"><code>models.addMessage</code></td><td style="text-align:left;">(<code>msgModel</code>: <code>any</code>) =&gt; <code>void</code></td></tr><tr><td style="text-align:left;"><code>models.addNote</code></td><td style="text-align:left;">(<code>noteModel</code>: <code>any</code>) =&gt; <code>void</code></td></tr><tr><td style="text-align:left;"><code>models.clear</code></td><td style="text-align:left;">() =&gt; <code>void</code></td></tr><tr><td style="text-align:left;"><code>models.getHeight</code></td><td style="text-align:left;">() =&gt; <code>any</code></td></tr><tr><td style="text-align:left;"><code>models.lastActor</code></td><td style="text-align:left;">() =&gt; <code>never</code></td></tr><tr><td style="text-align:left;"><code>models.lastLoop</code></td><td style="text-align:left;">() =&gt; <code>never</code></td></tr><tr><td style="text-align:left;"><code>models.lastMessage</code></td><td style="text-align:left;">() =&gt; <code>never</code></td></tr><tr><td style="text-align:left;"><code>models.lastNote</code></td><td style="text-align:left;">() =&gt; <code>never</code></td></tr><tr><td style="text-align:left;"><code>models.loops</code></td><td style="text-align:left;"><code>never</code>[]</td></tr><tr><td style="text-align:left;"><code>models.messages</code></td><td style="text-align:left;"><code>never</code>[]</td></tr><tr><td style="text-align:left;"><code>models.notes</code></td><td style="text-align:left;"><code>never</code>[]</td></tr><tr><td style="text-align:left;"><code>newActivation</code></td><td style="text-align:left;">(<code>message</code>: <code>any</code>, <code>diagram</code>: <code>any</code>, <code>actors</code>: <code>any</code>) =&gt; <code>void</code></td></tr><tr><td style="text-align:left;"><code>newLoop</code></td><td style="text-align:left;">(<code>title</code>: { <code>message</code>: <code>undefined</code> = undefined; <code>width</code>: <code>undefined</code> = undefined; <code>wrap</code>: <code>boolean</code> = false }, <code>fill</code>: <code>any</code>) =&gt; <code>void</code></td></tr><tr><td style="text-align:left;"><code>sequenceItems</code></td><td style="text-align:left;"><code>never</code>[]</td></tr><tr><td style="text-align:left;"><code>updateBounds</code></td><td style="text-align:left;">(<code>startx</code>: <code>any</code>, <code>starty</code>: <code>any</code>, <code>stopx</code>: <code>any</code>, <code>stopy</code>: <code>any</code>) =&gt; <code>void</code></td></tr><tr><td style="text-align:left;"><code>updateVal</code></td><td style="text-align:left;">(<code>obj</code>: <code>any</code>, <code>key</code>: <code>any</code>, <code>val</code>: <code>any</code>, <code>fun</code>: <code>any</code>) =&gt; <code>void</code></td></tr><tr><td style="text-align:left;"><code>verticalPos</code></td><td style="text-align:left;"><code>number</code></td></tr></tbody></table><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-hidden="true">#</a></h4><p><a href="https://github.com/emersonbottero/mermaid-docs/blob/f565dc0/src/diagrams/sequence/sequenceRenderer.ts#L16" target="_blank" rel="noreferrer">src/diagrams/sequence/sequenceRenderer.ts:16</a></p><hr><h3 id="default" tabindex="-1">default <a class="header-anchor" href="#default" aria-hidden="true">#</a></h3><p>\u2022 <strong>default</strong>: <code>Object</code></p><h4 id="type-declaration-1" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration-1" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>bounds</code></td><td style="text-align:left;">{ <code>activations</code>: <code>never</code>[] = []; <code>addSectionToLoop</code>: (<code>message</code>: <code>any</code>) =&gt; <code>void</code> ; <code>bumpVerticalPos</code>: (<code>bump</code>: <code>any</code>) =&gt; <code>void</code> ; <code>createLoop</code>: (<code>title</code>: { <code>message</code>: <code>undefined</code> = undefined; <code>width</code>: <code>undefined</code> = undefined; <code>wrap</code>: <code>boolean</code> = false }, <code>fill</code>: <code>any</code>) =&gt; { <code>fill</code>: <code>any</code> = fill; <code>height</code>: <code>number</code> = 0; <code>startx</code>: <code>undefined</code> = undefined; <code>starty</code>: <code>number</code> ; <code>stopx</code>: <code>undefined</code> = undefined; <code>stopy</code>: <code>undefined</code> = undefined; <code>title</code>: <code>undefined</code> = title.message; <code>width</code>: <code>undefined</code> = title.width; <code>wrap</code>: <code>boolean</code> = title.wrap } ; <code>data</code>: { <code>startx</code>: <code>undefined</code> = undefined; <code>starty</code>: <code>undefined</code> = undefined; <code>stopx</code>: <code>undefined</code> = undefined; <code>stopy</code>: <code>undefined</code> = undefined } ; <code>endActivation</code>: (<code>message</code>: <code>any</code>) =&gt; <code>never</code> ; <code>endLoop</code>: () =&gt; <code>undefined</code> ; <code>getBounds</code>: () =&gt; { <code>bounds</code>: { <code>startx</code>: <code>undefined</code> = undefined; <code>starty</code>: <code>undefined</code> = undefined; <code>stopx</code>: <code>undefined</code> = undefined; <code>stopy</code>: <code>undefined</code> = undefined } ; <code>models</code>: { <code>actors</code>: <code>never</code>[] = []; <code>addActor</code>: (<code>actorModel</code>: <code>any</code>) =&gt; <code>void</code> ; <code>addLoop</code>: (<code>loopModel</code>: <code>any</code>) =&gt; <code>void</code> ; <code>addMessage</code>: (<code>msgModel</code>: <code>any</code>) =&gt; <code>void</code> ; <code>addNote</code>: (<code>noteModel</code>: <code>any</code>) =&gt; <code>void</code> ; <code>clear</code>: () =&gt; <code>void</code> ; <code>getHeight</code>: () =&gt; <code>any</code> ; <code>lastActor</code>: () =&gt; <code>never</code> ; <code>lastLoop</code>: () =&gt; <code>never</code> ; <code>lastMessage</code>: () =&gt; <code>never</code> ; <code>lastNote</code>: () =&gt; <code>never</code> ; <code>loops</code>: <code>never</code>[] = []; <code>messages</code>: <code>never</code>[] = []; <code>notes</code>: <code>never</code>[] = [] } } ; <code>getVerticalPos</code>: () =&gt; <code>number</code> ; <code>init</code>: () =&gt; <code>void</code> ; <code>insert</code>: (<code>startx</code>: <code>any</code>, <code>starty</code>: <code>any</code>, <code>stopx</code>: <code>any</code>, <code>stopy</code>: <code>any</code>) =&gt; <code>void</code> ; <code>models</code>: { <code>actors</code>: <code>never</code>[] = []; <code>addActor</code>: (<code>actorModel</code>: <code>any</code>) =&gt; <code>void</code> ; <code>addLoop</code>: (<code>loopModel</code>: <code>any</code>) =&gt; <code>void</code> ; <code>addMessage</code>: (<code>msgModel</code>: <code>any</code>) =&gt; <code>void</code> ; <code>addNote</code>: (<code>noteModel</code>: <code>any</code>) =&gt; <code>void</code> ; <code>clear</code>: () =&gt; <code>void</code> ; <code>getHeight</code>: () =&gt; <code>any</code> ; <code>lastActor</code>: () =&gt; <code>never</code> ; <code>lastLoop</code>: () =&gt; <code>never</code> ; <code>lastMessage</code>: () =&gt; <code>never</code> ; <code>lastNote</code>: () =&gt; <code>never</code> ; <code>loops</code>: <code>never</code>[] = []; <code>messages</code>: <code>never</code>[] = []; <code>notes</code>: <code>never</code>[] = [] } ; <code>newActivation</code>: (<code>message</code>: <code>any</code>, <code>diagram</code>: <code>any</code>, <code>actors</code>: <code>any</code>) =&gt; <code>void</code> ; <code>newLoop</code>: (<code>title</code>: { <code>message</code>: <code>undefined</code> = undefined; <code>width</code>: <code>undefined</code> = undefined; <code>wrap</code>: <code>boolean</code> = false }, <code>fill</code>: <code>any</code>) =&gt; <code>void</code> ; <code>sequenceItems</code>: <code>never</code>[] = []; <code>updateBounds</code>: (<code>startx</code>: <code>any</code>, <code>starty</code>: <code>any</code>, <code>stopx</code>: <code>any</code>, <code>stopy</code>: <code>any</code>) =&gt; <code>void</code> ; <code>updateVal</code>: (<code>obj</code>: <code>any</code>, <code>key</code>: <code>any</code>, <code>val</code>: <code>any</code>, <code>fun</code>: <code>any</code>) =&gt; <code>void</code> ; <code>verticalPos</code>: <code>number</code> = 0 }</td></tr><tr><td style="text-align:left;"><code>bounds.activations</code></td><td style="text-align:left;"><code>never</code>[]</td></tr><tr><td style="text-align:left;"><code>bounds.addSectionToLoop</code></td><td style="text-align:left;">(<code>message</code>: <code>any</code>) =&gt; <code>void</code></td></tr><tr><td style="text-align:left;"><code>bounds.bumpVerticalPos</code></td><td style="text-align:left;">(<code>bump</code>: <code>any</code>) =&gt; <code>void</code></td></tr><tr><td style="text-align:left;"><code>bounds.createLoop</code></td><td style="text-align:left;">(<code>title</code>: { <code>message</code>: <code>undefined</code> = undefined; <code>width</code>: <code>undefined</code> = undefined; <code>wrap</code>: <code>boolean</code> = false }, <code>fill</code>: <code>any</code>) =&gt; { <code>fill</code>: <code>any</code> = fill; <code>height</code>: <code>number</code> = 0; <code>startx</code>: <code>undefined</code> = undefined; <code>starty</code>: <code>number</code> ; <code>stopx</code>: <code>undefined</code> = undefined; <code>stopy</code>: <code>undefined</code> = undefined; <code>title</code>: <code>undefined</code> = title.message; <code>width</code>: <code>undefined</code> = title.width; <code>wrap</code>: <code>boolean</code> = title.wrap }</td></tr><tr><td style="text-align:left;"><code>bounds.data</code></td><td style="text-align:left;">{ <code>startx</code>: <code>undefined</code> = undefined; <code>starty</code>: <code>undefined</code> = undefined; <code>stopx</code>: <code>undefined</code> = undefined; <code>stopy</code>: <code>undefined</code> = undefined }</td></tr><tr><td style="text-align:left;"><code>bounds.data.startx</code></td><td style="text-align:left;"><code>undefined</code></td></tr><tr><td style="text-align:left;"><code>bounds.data.starty</code></td><td style="text-align:left;"><code>undefined</code></td></tr><tr><td style="text-align:left;"><code>bounds.data.stopx</code></td><td style="text-align:left;"><code>undefined</code></td></tr><tr><td style="text-align:left;"><code>bounds.data.stopy</code></td><td style="text-align:left;"><code>undefined</code></td></tr><tr><td style="text-align:left;"><code>bounds.endActivation</code></td><td style="text-align:left;">(<code>message</code>: <code>any</code>) =&gt; <code>never</code></td></tr><tr><td style="text-align:left;"><code>bounds.endLoop</code></td><td style="text-align:left;">() =&gt; <code>undefined</code></td></tr><tr><td style="text-align:left;"><code>bounds.getBounds</code></td><td style="text-align:left;">() =&gt; { <code>bounds</code>: { <code>startx</code>: <code>undefined</code> = undefined; <code>starty</code>: <code>undefined</code> = undefined; <code>stopx</code>: <code>undefined</code> = undefined; <code>stopy</code>: <code>undefined</code> = undefined } ; <code>models</code>: { <code>actors</code>: <code>never</code>[] = []; <code>addActor</code>: (<code>actorModel</code>: <code>any</code>) =&gt; <code>void</code> ; <code>addLoop</code>: (<code>loopModel</code>: <code>any</code>) =&gt; <code>void</code> ; <code>addMessage</code>: (<code>msgModel</code>: <code>any</code>) =&gt; <code>void</code> ; <code>addNote</code>: (<code>noteModel</code>: <code>any</code>) =&gt; <code>void</code> ; <code>clear</code>: () =&gt; <code>void</code> ; <code>getHeight</code>: () =&gt; <code>any</code> ; <code>lastActor</code>: () =&gt; <code>never</code> ; <code>lastLoop</code>: () =&gt; <code>never</code> ; <code>lastMessage</code>: () =&gt; <code>never</code> ; <code>lastNote</code>: () =&gt; <code>never</code> ; <code>loops</code>: <code>never</code>[] = []; <code>messages</code>: <code>never</code>[] = []; <code>notes</code>: <code>never</code>[] = [] } }</td></tr><tr><td style="text-align:left;"><code>bounds.getVerticalPos</code></td><td style="text-align:left;">() =&gt; <code>number</code></td></tr><tr><td style="text-align:left;"><code>bounds.init</code></td><td style="text-align:left;">() =&gt; <code>void</code></td></tr><tr><td style="text-align:left;"><code>bounds.insert</code></td><td style="text-align:left;">(<code>startx</code>: <code>any</code>, <code>starty</code>: <code>any</code>, <code>stopx</code>: <code>any</code>, <code>stopy</code>: <code>any</code>) =&gt; <code>void</code></td></tr><tr><td style="text-align:left;"><code>bounds.models</code></td><td style="text-align:left;">{ <code>actors</code>: <code>never</code>[] = []; <code>addActor</code>: (<code>actorModel</code>: <code>any</code>) =&gt; <code>void</code> ; <code>addLoop</code>: (<code>loopModel</code>: <code>any</code>) =&gt; <code>void</code> ; <code>addMessage</code>: (<code>msgModel</code>: <code>any</code>) =&gt; <code>void</code> ; <code>addNote</code>: (<code>noteModel</code>: <code>any</code>) =&gt; <code>void</code> ; <code>clear</code>: () =&gt; <code>void</code> ; <code>getHeight</code>: () =&gt; <code>any</code> ; <code>lastActor</code>: () =&gt; <code>never</code> ; <code>lastLoop</code>: () =&gt; <code>never</code> ; <code>lastMessage</code>: () =&gt; <code>never</code> ; <code>lastNote</code>: () =&gt; <code>never</code> ; <code>loops</code>: <code>never</code>[] = []; <code>messages</code>: <code>never</code>[] = []; <code>notes</code>: <code>never</code>[] = [] }</td></tr><tr><td style="text-align:left;"><code>bounds.models.actors</code></td><td style="text-align:left;"><code>never</code>[]</td></tr><tr><td style="text-align:left;"><code>bounds.models.addActor</code></td><td style="text-align:left;">(<code>actorModel</code>: <code>any</code>) =&gt; <code>void</code></td></tr><tr><td style="text-align:left;"><code>bounds.models.addLoop</code></td><td style="text-align:left;">(<code>loopModel</code>: <code>any</code>) =&gt; <code>void</code></td></tr><tr><td style="text-align:left;"><code>bounds.models.addMessage</code></td><td style="text-align:left;">(<code>msgModel</code>: <code>any</code>) =&gt; <code>void</code></td></tr><tr><td style="text-align:left;"><code>bounds.models.addNote</code></td><td style="text-align:left;">(<code>noteModel</code>: <code>any</code>) =&gt; <code>void</code></td></tr><tr><td style="text-align:left;"><code>bounds.models.clear</code></td><td style="text-align:left;">() =&gt; <code>void</code></td></tr><tr><td style="text-align:left;"><code>bounds.models.getHeight</code></td><td style="text-align:left;">() =&gt; <code>any</code></td></tr><tr><td style="text-align:left;"><code>bounds.models.lastActor</code></td><td style="text-align:left;">() =&gt; <code>never</code></td></tr><tr><td style="text-align:left;"><code>bounds.models.lastLoop</code></td><td style="text-align:left;">() =&gt; <code>never</code></td></tr><tr><td style="text-align:left;"><code>bounds.models.lastMessage</code></td><td style="text-align:left;">() =&gt; <code>never</code></td></tr><tr><td style="text-align:left;"><code>bounds.models.lastNote</code></td><td style="text-align:left;">() =&gt; <code>never</code></td></tr><tr><td style="text-align:left;"><code>bounds.models.loops</code></td><td style="text-align:left;"><code>never</code>[]</td></tr><tr><td style="text-align:left;"><code>bounds.models.messages</code></td><td style="text-align:left;"><code>never</code>[]</td></tr><tr><td style="text-align:left;"><code>bounds.models.notes</code></td><td style="text-align:left;"><code>never</code>[]</td></tr><tr><td style="text-align:left;"><code>bounds.newActivation</code></td><td style="text-align:left;">(<code>message</code>: <code>any</code>, <code>diagram</code>: <code>any</code>, <code>actors</code>: <code>any</code>) =&gt; <code>void</code></td></tr><tr><td style="text-align:left;"><code>bounds.newLoop</code></td><td style="text-align:left;">(<code>title</code>: { <code>message</code>: <code>undefined</code> = undefined; <code>width</code>: <code>undefined</code> = undefined; <code>wrap</code>: <code>boolean</code> = false }, <code>fill</code>: <code>any</code>) =&gt; <code>void</code></td></tr><tr><td style="text-align:left;"><code>bounds.sequenceItems</code></td><td style="text-align:left;"><code>never</code>[]</td></tr><tr><td style="text-align:left;"><code>bounds.updateBounds</code></td><td style="text-align:left;">(<code>startx</code>: <code>any</code>, <code>starty</code>: <code>any</code>, <code>stopx</code>: <code>any</code>, <code>stopy</code>: <code>any</code>) =&gt; <code>void</code></td></tr><tr><td style="text-align:left;"><code>bounds.updateVal</code></td><td style="text-align:left;">(<code>obj</code>: <code>any</code>, <code>key</code>: <code>any</code>, <code>val</code>: <code>any</code>, <code>fun</code>: <code>any</code>) =&gt; <code>void</code></td></tr><tr><td style="text-align:left;"><code>bounds.verticalPos</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>draw</code></td><td style="text-align:left;">(<code>_text</code>: <code>any</code>, <code>id</code>: <code>any</code>, <code>_version</code>: <code>any</code>, <code>diagObj</code>: <code>any</code>) =&gt; <code>void</code></td></tr><tr><td style="text-align:left;"><code>drawActors</code></td><td style="text-align:left;">(<code>diagram</code>: <code>any</code>, <code>actors</code>: <code>any</code>, <code>actorKeys</code>: <code>any</code>, <code>verticalPos</code>: <code>any</code>, <code>configuration</code>: <code>any</code>, <code>messages</code>: <code>any</code>) =&gt; <code>void</code></td></tr><tr><td style="text-align:left;"><code>drawActorsPopup</code></td><td style="text-align:left;">(<code>diagram</code>: <code>any</code>, <code>actors</code>: <code>any</code>, <code>actorKeys</code>: <code>any</code>, <code>doc</code>: <code>any</code>) =&gt; { <code>maxHeight</code>: <code>number</code> = maxHeight; <code>maxWidth</code>: <code>number</code> = maxWidth }</td></tr><tr><td style="text-align:left;"><code>setConf</code></td><td style="text-align:left;">(<code>cnf</code>: <code>any</code>) =&gt; <code>void</code></td></tr></tbody></table><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a></h4><p><a href="https://github.com/emersonbottero/mermaid-docs/blob/f565dc0/src/diagrams/sequence/sequenceRenderer.ts#L1305" target="_blank" rel="noreferrer">src/diagrams/sequence/sequenceRenderer.ts:1305</a></p><h2 id="functions-1" tabindex="-1">Functions <a class="header-anchor" href="#functions-1" aria-hidden="true">#</a></h2><h3 id="draw" tabindex="-1">draw <a class="header-anchor" href="#draw" aria-hidden="true">#</a></h3><p>\u25B8 <strong>draw</strong>(<code>_text</code>, <code>id</code>, <code>_version</code>, <code>diagObj</code>): <code>void</code></p><p>Draws a sequenceDiagram in the tag with id: id based on the graph definition in text.</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>_text</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">The text of the diagram</td></tr><tr><td style="text-align:left;"><code>id</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">The id of the diagram which will be used as a DOM element id\xA8</td></tr><tr><td style="text-align:left;"><code>_version</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">Mermaid version from package.json</td></tr><tr><td style="text-align:left;"><code>diagObj</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">A stanard diagram containing the db and the text and type etc of the diagram</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a></h4><p><a href="https://github.com/emersonbottero/mermaid-docs/blob/f565dc0/src/diagrams/sequence/sequenceRenderer.ts#L592" target="_blank" rel="noreferrer">src/diagrams/sequence/sequenceRenderer.ts:592</a></p><hr><h3 id="drawactors" tabindex="-1">drawActors <a class="header-anchor" href="#drawactors" aria-hidden="true">#</a></h3><p>\u25B8 <strong>drawActors</strong>(<code>diagram</code>, <code>actors</code>, <code>actorKeys</code>, <code>verticalPos</code>, <code>configuration</code>, <code>messages</code>): <code>void</code></p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>diagram</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>actors</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>actorKeys</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>verticalPos</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>configuration</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>messages</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a></h4><p><a href="https://github.com/emersonbottero/mermaid-docs/blob/f565dc0/src/diagrams/sequence/sequenceRenderer.ts#L452" target="_blank" rel="noreferrer">src/diagrams/sequence/sequenceRenderer.ts:452</a></p><hr><h3 id="drawactorspopup" tabindex="-1">drawActorsPopup <a class="header-anchor" href="#drawactorspopup" aria-hidden="true">#</a></h3><p>\u25B8 <strong>drawActorsPopup</strong>(<code>diagram</code>, <code>actors</code>, <code>actorKeys</code>, <code>doc</code>): <code>Object</code></p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>diagram</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>actors</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>actorKeys</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>doc</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-hidden="true">#</a></h4><p><code>Object</code></p><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>maxHeight</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>maxWidth</code></td><td style="text-align:left;"><code>number</code></td></tr></tbody></table><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-hidden="true">#</a></h4><p><a href="https://github.com/emersonbottero/mermaid-docs/blob/f565dc0/src/diagrams/sequence/sequenceRenderer.ts#L498" target="_blank" rel="noreferrer">src/diagrams/sequence/sequenceRenderer.ts:498</a></p><hr><h3 id="setconf" tabindex="-1">setConf <a class="header-anchor" href="#setconf" aria-hidden="true">#</a></h3><p>\u25B8 <strong>setConf</strong>(<code>cnf</code>): <code>void</code></p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>cnf</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-hidden="true">#</a></h4><p><a href="https://github.com/emersonbottero/mermaid-docs/blob/f565dc0/src/diagrams/sequence/sequenceRenderer.ts#L523" target="_blank" rel="noreferrer">src/diagrams/sequence/sequenceRenderer.ts:523</a></p>',59),n=[a];function l(r,s,i,g,f,y){return t(),d("div",null,n)}const x=e(c,[["render",l]]);export{h as __pageData,x as default};