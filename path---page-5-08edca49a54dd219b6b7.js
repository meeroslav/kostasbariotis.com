webpackJsonp([0x9e7fb4e3147],{"./node_modules/json-loader/index.js!./.cache/json/page-5.json":function(n,s){n.exports={data:{site:{siteMetadata:{title:"Kostas Bariotis' Blog",description:"I'm Kostas Bariotis, a web developer, a proud wanderer and a passionate doer. My mission is to write clean and efficient code, to solve problems on the web and to learn something more.",siteUrl:"https://kostasbariotis.com"}}},pathContext:{posts:[{excerpt:"While we were moving towards the  Microservices  path at  Goodvidio , we were in the need of keeping in a central place the configuration of our system. Thus, we created the  Configuration Service . The  Configuration Service  exposes a REST API…",html:'<p>While we were moving towards the <a href="http://martinfowler.com/microservices/">Microservices</a> path at <a href="https://goodvid.io">Goodvidio</a>, we were in the need of keeping in a central place the configuration of our system. Thus, we created the <em>Configuration Service</em>.</p>\n<p>The <em>Configuration Service</em> exposes a REST API (like all of our services) and provides a place to store configuration variables and values to all of our developers. Each Service of our infrastructure can have a record stored in the <em>Configuration Service</em>. Those records will then be consumed and manipulated by a front end screen, so that even non technical people can alter their values.</p>\n<p>As a developer that I am working in a feature and I want to make use of the <em>Configuration Service</em>, I must first make sure that there isn\'t already a record for the Service that I work on and if there isn\'t I have to create it.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>GET /v1/configurations/ONBOARDING</code></pre>\n      </div>\n<p>If the above call return an empty array, I can create it by <code>POST</code>ing a body:</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">"_id"</span><span class="token operator">:</span> <span class="token string">"ONBOARDING"</span><span class="token punctuation">,</span>\n  <span class="token property">"configuration"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"free_trial_duration"</span> <span class="token operator">:</span> <span class="token string">"43800"</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>This way we keep all the configuration of our System in a central place and even the marketing team can decide some day to change the duration of the free trial period.</p>\n<p>That means fewer deployments, thus faster involvement.</p>',id:"/home/travis/build/kbariotis/kostasbariotis.com/src/pages/the-configuration-service/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2015-11-13T18:51:34.000Z",path:"/the-configuration-service/",tags:"Microservices",title:"The Configuration Service",draft:null}},{excerpt:"User stories  are a part of every agile driven process that teams usually follow. Often, even a developer can be called to write a story, based on a business requirement, that will eventually be called to develop it. Here's an example: As a Developer…",html:'<p><a href="https://en.wikipedia.org/wiki/User_story">User stories</a> are a part of every agile driven process that teams usually follow.</p>\n<p>Often, even a developer can be called to write a story, based on a business requirement, that will eventually be called to develop it. Here\'s an example:</p>\n<p><em>As a Developer, I want to be able to filter Blog Posts by Category ID, so I can display a filtered table.</em></p>\n<p>But one can easily be distracted and write a story based on their understanding of how consumers are using their code. Much like product owners.</p>\n<p>Before you start, talk to your consumers. See how their are using your code or your REST API. Ask them for feedback and for possible hard times they have with it.</p>\n<p>Then, write your user stories, based on that.</p>',id:"/home/travis/build/kbariotis/kostasbariotis.com/src/pages/user-stories/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2015-10-22T17:03:09.000Z",path:"/user-stories/",tags:null,title:"User Stories as in User Stories",draft:null}},{excerpt:'"... and once you understand that, once you truly believe that, then you\'re free."',html:'<blockquote>\n<p>"... and once you understand that, once you truly believe that, then you\'re free."</p>\n</blockquote>\n<iframe width="100%" height="400px" src="https://www.youtube.com/embed/8pTEmbeENF4" frameborder="0" allowfullscreen></iframe>',id:"/home/travis/build/kbariotis/kostasbariotis.com/src/pages/dont-know-what-im-doing/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2015-10-11T10:01:17.000Z",path:"/dont-know-what-im-doing/",tags:"programming",title:"I don't know what I'm doing",draft:null}},{excerpt:"Recursion is one of the initial courses we take in every CS university, with the most used example being the Fibonacci sequence: This works great in most of the languages we've been taught, but with asynchronous environments such as Node.js, things…",html:'<p>Recursion is one of the initial courses we take in every CS university, with the most used example being the Fibonacci sequence:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">let</span> recursive <span class="token operator">=</span> <span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span><span class="token punctuation">(</span>n <span class="token operator">&lt;=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token number">1</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token function">recursive</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">recursive</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>This works great in most of the languages we\'ve been taught, but with asynchronous environments such as Node.js, things are getting tricky. Using asynchronous functions, we need to wait for the function to end before call the next iteration of the recursion.</p>\n<p>Say we need to recursively delete an item and all of it\'s children from a connected list.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">let</span> recursivelyDelete <span class="token operator">=</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  db<span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> <span class="token punctuation">(</span>err<span class="token punctuation">,</span> item<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token function">callback</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      db<span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token string">\'_id\'</span><span class="token punctuation">:</span> item<span class="token punctuation">.</span>_id<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>err<span class="token punctuation">,</span> results<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token function">callback</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n          <span class="token keyword">if</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>child_id<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token function">recursivelyDelete</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>child_id<span class="token punctuation">)</span>\n          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token boolean">true</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>You can find all different recursion patterns for Node.js <a href="http://metaduck.com/01-asynchronous-iteration-patterns.html">here</a>.</p>\n<p>This is all good but you can see how easily can lead to a callback hell. What if we had to do some checks before the deletion? Or update something else? What about a tree structure with multiple children?</p>\n<p>Fortunately, we can use <a href="https://www.promisejs.org/">Promises</a>. Let\'s rewrite.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">let</span> recursivelyDelete <span class="token operator">=</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> item\n  <span class="token keyword">return</span> <span class="token function">findOne</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      item <span class="token operator">=</span> document\n\n      <span class="token keyword">if</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>child_id<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token function">recursivelyDelete</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>child_id<span class="token punctuation">)</span>\n      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token function">remove</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>_id<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> remove <span class="token operator">=</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    db<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> <span class="token punctuation">(</span>err<span class="token punctuation">,</span> item<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>\n      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> findOne <span class="token operator">=</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    db<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> <span class="token punctuation">(</span>err<span class="token punctuation">,</span> item<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>\n      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token function">resolve</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>We can see how it\'s better written and can easily scale and more functions can be added.</p>\n<p>Here\'s a more complicated example. Say we need to handle the deletion of a category in a tree. Given an ID, we have to check if the category exists and if there are dependent blog posts connected with that category. Only then, we have to run the same process for it\'s children and for their children. Delete all or reject. Deletion must go after the checks of all children, just like the above example.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">let</span> handleDeletion <span class="token operator">=</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token function">findOne</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n       <span class="token keyword">return</span> <span class="token function">recursivelyDelete</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> findOne <span class="token operator">=</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    db<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> <span class="token punctuation">(</span>err<span class="token punctuation">,</span> item<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>\n      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token keyword">return</span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n          <span class="token keyword">return</span> <span class="token function">resolve</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> recursivelyDelete <span class="token operator">=</span> <span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token function">checkForDependencies</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>_id<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token function">getChildrenCategories</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>_id<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>children<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">let</span> calls <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n\n      children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        calls<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">recursivelyDelete</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>_id<span class="token punctuation">)</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n      <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>calls<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token function">remove</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>_id<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> checkForDependencies <span class="token operator">=</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    db<span class="token punctuation">.</span>products<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span> category_id<span class="token punctuation">:</span> id <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>err<span class="token punctuation">,</span> results<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>\n      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>results <span class="token operator">&amp;&amp;</span> results<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token keyword">return</span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n          <span class="token keyword">return</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> getChildrenCategories <span class="token operator">=</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    db<span class="token punctuation">.</span>categories<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span> parent_id<span class="token punctuation">:</span> id <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>err<span class="token punctuation">,</span> results<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>\n      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token function">resolve</span><span class="token punctuation">(</span>results<span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> remove <span class="token operator">=</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    db<span class="token punctuation">.</span>categories<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> <span class="token punctuation">(</span>err<span class="token punctuation">,</span> item<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>\n      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<br/>\n<p><strong>Examples are written in <a href="http://es6-features.org">ES6</a> with the <a href="https://www.promisejs.org/">Promises API</a> which you can run using the latest <a href="https://nodejs.org/en/">Node.js</a> v4 build</strong>\n<br/></p>',
id:"/home/travis/build/kbariotis/kostasbariotis.com/src/pages/node-js-recursion/index.md absPath of file >>> MarkdownRemark",timeToRead:3,frontmatter:{date:"2015-10-01T13:54:36.000Z",path:"/node-js-recursion/",tags:"recursion, javascript, node.js",title:"Node.js & Recursion",draft:null}},{excerpt:"I watch a lot of people on the Internet.  Authors ,  film makers ,  music producers . I often wonder where do these guys get inspiration and motivation. It came down to be one thing. Inspiration is like metabolism. You have to put it in work in order…",html:'<p>I watch a lot of people on the Internet. <a href="http://sethgodin.typepad.com">Authors</a>, <a href="https://www.youtube.com/user/caseyneistat">film makers</a>, <a href="https://www.youtube.com/user/Hopsintv">music producers</a>. I often wonder where do these guys get inspiration and motivation.</p>\n<p>It came down to be one thing.</p>\n<p>Inspiration is like metabolism. You have to put it in work in order to start working. It won\'t work by it\'s own. If you just sit and wait, it won\'t start working.</p>\n<p>Do. Be a doer. Regularly.</p>\n<blockquote>\n<h3><em>"The first rule of doing work that matters: Going to work on a regular basis."</em><br/><br/></h3>\n<p>Seth Godin</p>\n</blockquote>',id:"/home/travis/build/kbariotis/kostasbariotis.com/src/pages/inspiration-motivation-action/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2015-09-30T07:03:28.000Z",path:"/inspiration-motivation-action/",tags:"inspiration, motivation",title:"Action, Inspiration, Motivation",draft:null}}],page:5,pagesSum:14,prevPath:"/page/4",nextPath:"/page/6"}}}});
//# sourceMappingURL=path---page-5-08edca49a54dd219b6b7.js.map