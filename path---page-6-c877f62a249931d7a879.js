webpackJsonp([0xb2078d670e21],{"./node_modules/json-loader/index.js!./.cache/json/page-6.json":function(e,t){e.exports={data:{site:{siteMetadata:{title:"Kostas Bariotis' Blog",description:"I'm Kostas Bariotis, a web developer, a proud wanderer and a passionate doer. My mission is to write clean and efficient code, to solve problems on the web and to learn something more.",siteUrl:"https://kostasbariotis.com"}}},pathContext:{posts:[{excerpt:"Client Side JS frameworks have come a long way. Since the rise of  Backbone.js  back at 2010, the way we write Javascript and everything about it has changed. A lot of frameworks have born, almost one for every need. But what does a Client Side JS…",html:'<p>Client Side JS frameworks have come a long way. Since the rise of <a href="http://backbonejs.org/">Backbone.js</a> back at 2010, the way we write Javascript and everything about it has changed. A lot of frameworks have born, almost one for every need. But what does a Client Side JS framework consists of? Should I adopt one out of the wild or write my own? As always, it depends. And you should do your <a href="https://medium.com/@kbariotis/choosing-your-next-best-tool-fba96eb19a7f">homework</a> before choosing one or the other.</p>\n<p>I\'ve come up with a list of six concepts you should consider adopting on your next setup.</p>\n<h3>MV*</h3>\n<p>Whether it\'s MVC or any other convention, your framework should have a standard way of doing things, naming things and moving around things. Never write or mix JS inside HTML unless you know what you\'re doing. When you\'re in a seek for a file, you should know exactly where to look and it has to be there.</p>\n<p>A structure like that should help you organise your code. Keeping everything where it should be. Organise both by type and module, so many teams can work on different parts of the project and not having conflicts.</p>\n<p>Backbone.js first taught us how to organise our code, using the <a href="http://addyosmani.com/blog/understanding-mvc-and-mvp-for-javascript-and-backbone-developers/">MVP pattern</a>. Since then lots of conventions have come up.</p>\n<h3>Dependency Injection / Dependency Management</h3>\n<p>Modularizing everything is not only a current trend but a trend that our developers ancestor would like us to follow. It will allow you for much code reusability and less duplication. Modules are easy to share, as easy as is to use other\'s people modules.</p>\n<p>But those modules must be managed and be injected in the appropriated places and not everywhere. They should also be called by the modules that need them and not by a <code>script</code> tag or any other place, keeping also the required HTTP calls for dependencies at the greatest low.</p>\n<p>Your framework can do some sort of <a href="https://en.wikipedia.org/wiki/Dependency_injection">Dependency Injection</a>. Each place of your application, should load only the modules it needs. <a href="https://docs.angularjs.org/guide/di">Angular\'s powerful DI</a> system does lazy loading only the modules you need each time. From the docs:</p>\n<blockquote>\n<p>The Angular injector subsystem is in charge of creating components, resolving their dependencies, and providing them to other components as requested.</p>\n</blockquote>\n<h3>2 Way Data Bindings</h3>\n<p>I first saw this concept with <a href="https://docs.angularjs.org/guide/databinding">Angular</a>. I\'ve never encountered something like that before and I am not sure if it was exist. But that blew up my mind.</p>\n<p>Imagine a form with 10 input fields and an object that you just fetched from the server. Now you need to populate the form with that object so the user can edited, hit save and send the object back to the server.</p>\n<p>You start by selecting fields using a library like jQuery. One after the other and then put the appropriate field of the object into that field. You could also use a function that will take the name of each field in the form and seek that property inside the object.</p>\n<p>This is what I am talking about. All that, should be done by the framework. Not you. And it should be done in a clever, performant and robust way. Make sure your framework support this.</p>\n<h3>Virtual DOM diffing</h3>\n<p>Oh, the Virtual DOM. The sugar on top of everything. DOM manipulation is expensive. Even though computing resources are cheap and almost in saturation, still DOM is expensive. So what we do? Instead of talking to the DOM directly, we talk to a Virtual DOM, one that is in memory. When we done and we want to render, we compute a diff between the real DOM and the Virtual DOM. So we render only the changes. In other words, we apply a patch on top of the real DOM. Much like how git works.</p>\n<p><a href="http://kostasbariotis.com/hands-on-react-js/">React</a> works that way. By componetizing our DOM, we almost never compute the diff in the whole DOM, just inside the components we like to rerender.</p>\n<p>This is pretty much a safe technique and I would say although not a must, you should consider adopting it. Comes handy, especially on those, rich with data, UIs where frequently rerendering is required.</p>\n<h3>Client Side Routing</h3>\n<p>Doing Server requests while bouncing on a web site\'s pages is time expensive. What if we could only load the assets we need to render a specific page and let the browser know, so a User can hit the Back button and go the previous state? This is the Client Side routing which every major framework supports out of the box.</p>\n<p>This site runs with <a href="http://www.pixelstech.net/article/1366737736-What-is-pjax-and-why-we-should-use-it">pjax</a> the simplest client side routing technique. Open Developer Tools at the Network tab and see it your self.</p>\n<p>Although, Client Side routing hides troubles, especially with SEO, it\'s a neat technique.  Lots of big players, like Youtube and Twitter, are using for a long time now.</p>\n<p>And this brings me to the final feature:</p>\n<h3>Isomorphic / Universal Javascript</h3>\n<p><a href="https://www.meteor.com/">Meteor.js</a> first gave us the opportunity to run the same code both in the Server side and in the Client side. Imagine if we could allow a User to use the Client Side app while letting Users (or search engines) with no or limited Javascript support on their Browsers to use our Server Side app. This must be the real deal. (BTW, of course <a href="http://searchengineland.com/tested-googlebot-crawls-javascript-heres-learned-220157">Google can understand Javascript</a>)</p>\n<p>After Meteor.js, Isomorphic Javascript got showed up everywhere while Airbnb\'s <a href="http://nerds.airbnb.com/weve-open-sourced-rendr-run-your-backbonejs-a/">Rendr</a> framework was introduced. Since then, <a href="http://isomorphic.net/">Isomorphic</a> evolved into the so called <a href="https://medium.com/@mjackson/universal-javascript-4761051b7ae9">Universal Javascript</a> that made our apps <a href="http://techblog.netflix.com/2015/08/making-netflixcom-faster.html">even faster</a>.</p>\n<p>In case that you need the best of the two worlds, Server side and Client size, this must be the feature you need.</p>\n<h2>Closing</h2>\n<p>Client Side Javascript have become a trivial part of our every day\'s development life. Keeping it updated, organised and features full can guarantee a performant project and/or business.</p>\n<p>I will try, on a future post, to write an implementation of the above, using separate modules that I\'ve picked out of the wild. In cases where you can\'t/want to use a framework, building your own client side infrastructure is absolutely OK.</p>\n<p><strong>So, what are your favorite concepts of a Client Side Javascript framework?</strong></p>',id:"/home/travis/build/kbariotis/kostasbariotis.com/src/pages/state-of-client-side-js-frameworks/index.md absPath of file >>> MarkdownRemark",timeToRead:5,frontmatter:{date:"2015-09-19T09:54:54.000Z",path:"/state-of-client-side-js-frameworks/",tags:"javascript, client-side, frameworks",title:"The road to Client Side Javascript",draft:null}},{excerpt:"There is no way, by default, to ensure that your Javascript Object you passed into a function will stay as is nevertheless. And that creates a problem and a lot of side effects. To avoid this common pitfall we create immutable objects, those that no…",html:'<p>There is no way, by default, to ensure that your Javascript Object you passed into a function will stay as is nevertheless. And that creates a problem and a lot of side effects.</p>\n<p>To avoid this common pitfall we create immutable objects, those that no one can change during the app\'s lifecycle. By default, all Javascript types, except objects, define immutable values.</p>\n<p>Have you ever tried to alter an object, say to delete a property, but you couldn\'t? Say to delete a Mongoose document\'s property? Mongoose documents are immutable and their properties can\'t be alter in any way, except of altering their actual values that they\'re holding.</p>\n<h3>Cloning objects in Javascript</h3>\n<p>So what do we do when we need to alter them? We clone them.</p>\n<p>The most easy way to clone an object is the simple hack:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> object <span class="token operator">=</span> <span class="token punctuation">{</span> firstname<span class="token punctuation">:</span> <span class="token string">\'Kostas\'</span><span class="token punctuation">,</span> lastname<span class="token punctuation">:</span> <span class="token string">\'Bariotis\'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> clone <span class="token operator">=</span> JSON<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>JSON<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>object<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>That hack have been always working for me and I\'m using in every chance I\'ve got.</p>\n<p>For Node.js/jQuery users there are also the appropriate <code>extend</code> methods:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> extend <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'util\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>_extend<span class="token punctuation">;</span>\n<span class="token keyword">var</span> clone <span class="token operator">=</span> <span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> object<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> clone <span class="token operator">=</span> jQuery<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> object<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>There is also <a href="http://stackoverflow.com/a/728694/1955940">this</a> answer that covers a generic <code>clone</code> functionality.</p>\n<h3>Create immutable Javascript objects</h3>\n<p>There are two ways:</p>\n<ol>\n<li>\n<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty">Object.definePropety()</a>\nUsing Javascript\'s <code>defineProperty</code> we can create non configurable and/or hidden properties inside objects. This way we can be sure that a developer can\'t mess with our code or hide from them info about our structures that they don\'t have to know about. <strong><code>defineProperty</code> won\'t throw an error while you\'re trying to alter the object\'s properties and this can really be a PITA.</strong></p>\n</li>\n<li>\n<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty">Object.freeze()</a> / <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal">Object.seal()</a>\n<code>freeze</code> and <code>seal</code> are basically shorthands for the <code>defineProperty</code> and can both come in handy. Make sure that their compatibility tables meet your needs before you use them. <strong>Will throw an error and will save you hours of frustration.</strong></p>\n</li>\n</ol>\n<h2>The End</h2>\n<p>Next time you are writing a Javascript module and you are exposing objects that other developers may use, make sure that they have the exact needed permissions to alter your objects, otherwise they may broke your code without even realising it. Make sure also to document it.</p>',id:"/home/travis/build/kbariotis/kostasbariotis.com/src/pages/immutable-objects-javascript/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2015-09-14T13:51:58.000Z",path:"/immutable-objects-javascript/",tags:"javascript, node.js",title:"Immutable Objects with Javascript",draft:null}},{excerpt:"Fortunately, I have been lucky enough to work with a lot of dev teams.  Good  and bad. I've seen teams with a sickness so deeply in their DNA that they were doomed to fail. I've also seen teams that gets  you up in the morning  while looking forward…",html:"<p>Fortunately, I have been lucky enough to work with a lot of dev teams. <a href=\"http://www.lifehack.org/articles/work/10-signs-you-are-working-happy-workplace.html\">Good</a> and bad.</p>\n<p>I've seen teams with a sickness so deeply in their DNA that they were doomed to fail. I've also seen teams that gets <a href=\"http://www.leadertoleaderjournal.com/sample-articles/the-importance-of-happiness-in-the-workplace.aspx\">you up in the morning</a> while looking forward to meet your colleagues.</p>\n<p>But that team that keeps you in being that place and continue working with them, didn't happen accidentally. Someone created it. This is my list for a happy and efficient development team. Cause these two are tied together and evolving along side.</p>\n<h3>Coding Style Guide</h3>\n<p>is the new RFC. Force everyone to <a href=\"https://github.com/airbnb/javascript\">be in the same page</a>. As in every other social team, so and your team must <a href=\"https://github.com/google/styleguide\">meet rules</a> and follow them for the common good.</p>\n<p>Everyone should write the same code. Otherwise, you'll end up with a huge code base that no one can understand, leave aside to scale it.</p>\n<h3>Git &#x26;  Git flow</h3>\n<p>or <a href=\"http://nvie.com/posts/a-successful-git-branching-model/\">in other words</a>. Now, this is the first and the last time I'm talking about this. If you don't keep your code under some kind of version control, there is nothing much left for you.</p>\n<p>Version controlling your code means that you keep history of every file change, every line addition and deletion. Jumping from the present to a certain point of past, that you know your code was working will save you tone of hours of frustration and money.</p>\n<h3>Dev Environments</h3>\n<p>that simulates the live project. You make changes to the live site? No, it's not normal. No, no one does this any more. What it takes to be able to deliver the best to our clients? Is to test it for them, before them.</p>\n<p>Make sure you can make a change to your project, or a replica of it, and be able to reproduce any sort of abnormality you can before it goes live.</p>\n<h3>Automation</h3>\n<p>is key. He/She who has ever worked at a fast grown company, knows that speed is priority. But keep doing the same process over and over again  can't be efficient. Find those processes. Automate them. Out source them. Hire people to do them and get back to your work.</p>\n<h3>Tasks Assignment &#x26; Prioritisation</h3>\n<p>that are visible by everyone, Making sure everyone knows what it has to be done. Most of the times, team will stay in idle state when they don't know what to do. Talks should be clear to everyone and allow them to do work for a given time before new tasks arrive and reassigned. Those tasks should be sorted by criticality - prioritisation should be respected.</p>\n<h3>Responsibilities</h3>\n<p>must be clear to everyone. Have you ever been in a situation where the manager asks why something happened and everyone in the team is looking each other? I know, it sucks. But clearly, there weren't no responsibilities. Keeping responsibilities clear means that everyone knows when it's time to stand up and take the response. So, the team can learn and continue.</p>\n<h3>Document Everything</h3>\n<p>because no one can guarantee you a job for ever like no manager can guarantee a team that would stay the same for ever. Documenting means that while the faces in team changes, the work can continue. Each new person coming can immediately  get in track and continue the task the someone left unfinished.</p>\n<h2>Finally</h2>\n<p>I would say that, when you're joining a team, you can't simply wait everyone to be as you would like to be. You may have to put a little something in the mix. Teams are not born perfect. It's the everyday inside process that will eventually mature and fill with wisdom the people behind. A perfect recipe to scale your team.</p>",id:"/home/travis/build/kbariotis/kostasbariotis.com/src/pages/scaling-your-team/index.md absPath of file >>> MarkdownRemark",timeToRead:3,frontmatter:{date:"2015-09-10T17:33:38.000Z",path:"/scaling-your-team/",tags:"team, dev, scale, workplace",title:"Be prepared to scale your team",draft:null}},{excerpt:"Today I lost a few hours trying to understand why a document that I was fetching through Mongoose, kept returning true against checking for a field with the   operator, even though the document didn't contain that field. But still it would return…",html:'<p>Today I lost a few hours trying to understand why a document that I was fetching through Mongoose, kept returning true against checking for a field with the <code>in</code> operator, even though the document didn\'t contain that field.</p>\n<p>But still it would return true:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> mongoose <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'mongoose\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  Schema <span class="token operator">=</span> mongoose<span class="token punctuation">.</span>Schema<span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> exampleSchema <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Schema</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  someField<span class="token punctuation">:</span> String<span class="token punctuation">,</span>\n  notExistingField<span class="token punctuation">:</span> String\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> versionKey<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">/* We know that this document doesn\'t have the notExistingField in the DB */</span>\nexampleSchema<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token string">\'_id\'</span><span class="token punctuation">:</span> id\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> document<span class="token punctuation">)</span><span class="token punctuation">{</span>\n\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span> <span class="token comment" spellcheck="true">/* { someField: \'value\' } */</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>document<span class="token punctuation">[</span><span class="token string">\'notExistingField\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment" spellcheck="true">/* undefined */</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'notExistingField\'</span> <span class="token keyword">in</span> document<span class="token punctuation">)</span> <span class="token comment" spellcheck="true">/* true */</span>\n\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>The fact is that Mongoose will first comply the fetched document against the defined Schema in order for it\'s getters/setters functions to work. So even though, we can\'t see the <code>notExistingField</code>, the <code>in</code> operator will always return true.</p>\n<p>A solution is to change the checking and check for an undefined value, like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment" spellcheck="true">/* We know that this document doesn\'t have the notExistingField in the DB */</span>\nexampleSchema<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token string">\'_id\'</span><span class="token punctuation">:</span> id\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> document<span class="token punctuation">)</span><span class="token punctuation">{</span>\n\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span> <span class="token comment" spellcheck="true">/* { someField: \'value\' } */</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>document<span class="token punctuation">[</span><span class="token string">\'notExistingField\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment" spellcheck="true">/* undefined */</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token operator">!</span>document<span class="token punctuation">[</span><span class="token string">\'notExistingField\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment" spellcheck="true">/* false */</span>\n\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Fixed.</p>',id:"/home/travis/build/kbariotis/kostasbariotis.com/src/pages/mongoose-objects-and-the-in-operator/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2015-08-31T17:51:38.000Z",path:"/mongoose-objects-and-the-in-operator/",tags:"mongodb, mongoose",title:"Mongoose objects and the IN operator",draft:null}},{excerpt:"Making a discoverable API means thats some software would be able to traverse it, by only providing it's root endpoint. For example, my IDE could provide me all the endpoints, input schemas and responses of Github's API by putting in it's root, that…",html:"<p>Making a discoverable API means thats some software would be able to traverse it, by only providing it's root endpoint. For example, my IDE could provide me all the endpoints, input schemas and responses of Github's API by putting in it's root, that is <code>https://api.github.com</code>.</p>\n<p>This can have some major advantages. Speed would be the absolute greatest, since I don't have to search through documentation and going back and forth their site. Also, in case of an endpoint changes it's name, the software will automatically adopt the new name.</p>\n<p>Now, all these are definitely good, but we don't see that much of API's making themselves discoverable. Why is that? Well, mostly because speed is not that much of an issue, since REST is pretty explanatory it self, you only have a few verbs to respond to, so each API's documentation wouldn't be that much. As for the breaking changes, well putting a Version number in front of each endpoint seems to work pretty good.</p>\n<p>The first thing that comes in mind when talking about discovering web services is Web Services Description Language(WSDL). Before the major adoption of REST principles, people would create APIs in different forms. And so a way to describe them was necessary. That's where WSDL would take action. REST on the other hand is not the same. When we hear an API is REST compliant, we know that uses the common HTTP verbs, can return/accept XML or JSON and respond with the known HTTP statuses codes. That is what REST APIs is all about.</p>\n<p>Nevertheless, I would say that machines that talk to each other, that are indeed able to discover each other's resources, is a tasty subject and I'm pretty sure that we will see it really soon. At the mean time, let's focus on making our APIs usable and understandable with bare eye.</p>\n<p>Here are some references you can use if you want to make your API's discoverable. You can check out these great specs about describing your API through it's responses. I am not sure how these can be widely adopted, but once they do, we should expect it to go big. Never used them, so I am expecting from you. Google's also has looked into this and came out with some really fascinated results, be sure to check them also.</p>\n<p><a href=\"http://micro-api.org/\">http://micro-api.org/</a>\n<a href=\"http://jsonapi.org/\">http://jsonapi.org/</a>\n<a href=\"http://www.odata.org/\">http://www.odata.org/</a>\n<a href=\"https://developers.google.com/discovery/\">https://developers.google.com/discovery/</a></p>",id:"/home/travis/build/kbariotis/kostasbariotis.com/src/pages/making-a-rest-api-discoverable/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2015-08-24T14:39:27.000Z",path:"/making-a-rest-api-discoverable/",tags:"rest, api",title:"Making a REST API discoverable",draft:null}}],page:6,pagesSum:14,prevPath:"/page/5",nextPath:"/page/7"}}}});
//# sourceMappingURL=path---page-6-c877f62a249931d7a879.js.map