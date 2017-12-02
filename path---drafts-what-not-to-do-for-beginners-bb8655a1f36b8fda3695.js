webpackJsonp([27497009134091],{"./node_modules/json-loader/index.js!./.cache/json/drafts-what-not-to-do-for-beginners.json":function(n,s){n.exports={data:{site:{siteMetadata:{title:"Kostas Bariotis' Blog",description:"I'm Kostas Bariotis, a web developer, a proud wanderer and a passionate doer. My mission is to write clean and efficient code, to solve problems on the web and to learn something more.",siteUrl:"https://kostasbariotis.com"}},markdownRemark:{html:"<p>dont do word wrap and leave your lines huge\nfind how your language handles multilne strings\nexamples on JS/PHP/etc</p>\n<p>dont keep global state. avoid it in any situation\nuse pure functions and flow the state through them.</p>",excerpt:"dont do word wrap and leave your lines huge\nfind how your language handles multilne strings\nexamples on JS/PHP/etc dont keep global state…",frontmatter:{date:"October 10, 2015",path:"/drafts/what-not-to-do-for-beginners/",tags:null,title:"What not to do for beginners",draft:!0}}},pathContext:{prev:{excerpt:'"... and once you understand that, once you truly believe that, then you\'re free."',html:'<blockquote>\n<p>"... and once you understand that, once you truly believe that, then you\'re free."</p>\n</blockquote>\n<iframe width="100%" height="400px" src="https://www.youtube.com/embed/8pTEmbeENF4" frameborder="0" allowfullscreen></iframe>',id:"/home/travis/build/kbariotis/kostasbariotis.com/src/pages/dont-know-what-im-doing/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2015-10-11T10:01:17.000Z",path:"/dont-know-what-im-doing/",tags:"programming",title:"I don't know what I'm doing",draft:null}},next:{excerpt:"Recursion is one of the initial courses we take in every CS university, with the most used example being the Fibonacci sequence: This works great in most of the languages we've been taught, but with asynchronous environments such as Node.js, things…",html:'<p>Recursion is one of the initial courses we take in every CS university, with the most used example being the Fibonacci sequence:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">let</span> recursive <span class="token operator">=</span> <span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span><span class="token punctuation">(</span>n <span class="token operator">&lt;=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token number">1</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token function">recursive</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">recursive</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>This works great in most of the languages we\'ve been taught, but with asynchronous environments such as Node.js, things are getting tricky. Using asynchronous functions, we need to wait for the function to end before call the next iteration of the recursion.</p>\n<p>Say we need to recursively delete an item and all of it\'s children from a connected list.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">let</span> recursivelyDelete <span class="token operator">=</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  db<span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> <span class="token punctuation">(</span>err<span class="token punctuation">,</span> item<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token function">callback</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      db<span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token string">\'_id\'</span><span class="token punctuation">:</span> item<span class="token punctuation">.</span>_id<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>err<span class="token punctuation">,</span> results<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token function">callback</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n          <span class="token keyword">if</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>child_id<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token function">recursivelyDelete</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>child_id<span class="token punctuation">)</span>\n          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token boolean">true</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>You can find all different recursion patterns for Node.js <a href="http://metaduck.com/01-asynchronous-iteration-patterns.html">here</a>.</p>\n<p>This is all good but you can see how easily can lead to a callback hell. What if we had to do some checks before the deletion? Or update something else? What about a tree structure with multiple children?</p>\n<p>Fortunately, we can use <a href="https://www.promisejs.org/">Promises</a>. Let\'s rewrite.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">let</span> recursivelyDelete <span class="token operator">=</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> item\n  <span class="token keyword">return</span> <span class="token function">findOne</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      item <span class="token operator">=</span> document\n\n      <span class="token keyword">if</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>child_id<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token function">recursivelyDelete</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>child_id<span class="token punctuation">)</span>\n      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token function">remove</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>_id<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> remove <span class="token operator">=</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    db<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> <span class="token punctuation">(</span>err<span class="token punctuation">,</span> item<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>\n      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> findOne <span class="token operator">=</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    db<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> <span class="token punctuation">(</span>err<span class="token punctuation">,</span> item<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>\n      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token function">resolve</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>We can see how it\'s better written and can easily scale and more functions can be added.</p>\n<p>Here\'s a more complicated example. Say we need to handle the deletion of a category in a tree. Given an ID, we have to check if the category exists and if there are dependent blog posts connected with that category. Only then, we have to run the same process for it\'s children and for their children. Delete all or reject. Deletion must go after the checks of all children, just like the above example.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">let</span> handleDeletion <span class="token operator">=</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token function">findOne</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n       <span class="token keyword">return</span> <span class="token function">recursivelyDelete</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> findOne <span class="token operator">=</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    db<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> <span class="token punctuation">(</span>err<span class="token punctuation">,</span> item<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>\n      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token keyword">return</span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n          <span class="token keyword">return</span> <span class="token function">resolve</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> recursivelyDelete <span class="token operator">=</span> <span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token function">checkForDependencies</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>_id<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token function">getChildrenCategories</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>_id<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>children<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">let</span> calls <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n\n      children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        calls<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">recursivelyDelete</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>_id<span class="token punctuation">)</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n      <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>calls<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token function">remove</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>_id<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> checkForDependencies <span class="token operator">=</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    db<span class="token punctuation">.</span>products<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span> category_id<span class="token punctuation">:</span> id <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>err<span class="token punctuation">,</span> results<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>\n      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>results <span class="token operator">&amp;&amp;</span> results<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token keyword">return</span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n          <span class="token keyword">return</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> getChildrenCategories <span class="token operator">=</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    db<span class="token punctuation">.</span>categories<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span> parent_id<span class="token punctuation">:</span> id <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>err<span class="token punctuation">,</span> results<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>\n      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token function">resolve</span><span class="token punctuation">(</span>results<span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> remove <span class="token operator">=</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    db<span class="token punctuation">.</span>categories<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> <span class="token punctuation">(</span>err<span class="token punctuation">,</span> item<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>\n      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<br/>\n<p><strong>Examples are written in <a href="http://es6-features.org">ES6</a> with the <a href="https://www.promisejs.org/">Promises API</a> which you can run using the latest <a href="https://nodejs.org/en/">Node.js</a> v4 build</strong>\n<br/></p>',id:"/home/travis/build/kbariotis/kostasbariotis.com/src/pages/node-js-recursion/index.md absPath of file >>> MarkdownRemark",timeToRead:3,frontmatter:{date:"2015-10-01T13:54:36.000Z",path:"/node-js-recursion/",tags:"recursion, javascript, node.js",title:"Node.js & Recursion",draft:null}}}}}});
//# sourceMappingURL=path---drafts-what-not-to-do-for-beginners-bb8655a1f36b8fda3695.js.map