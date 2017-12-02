webpackJsonp([0xc61b59b78031],{"./node_modules/json-loader/index.js!./.cache/json/page-3.json":function(n,a){n.exports={data:{site:{siteMetadata:{title:"Kostas Bariotis' Blog",description:"I'm Kostas Bariotis, a web developer, a proud wanderer and a passionate doer. My mission is to write clean and efficient code, to solve problems on the web and to learn something more.",siteUrl:"https://kostasbariotis.com"}}},pathContext:{posts:[{excerpt:"A database is a vital part of every complex application. Databases change very often and contain data that can even disintegrate our whole application if they get out of sync. Changing a live database, whether it's related to schema or data, can be…",html:'<p>A database is a vital part of every complex application. Databases change very often and contain data that can even disintegrate our whole application if they get out of sync. Changing a live database, whether it\'s related to schema or data, can be hard. Modern apps, where Agile methodologies along with processes such as <a href="http://continuousdelivery.com/">Continuous Integration</a> apply, have raised the bar of complexity so maintaining a database separately from the application\'s business logic can be quite painful.</p>\n<p>Fortunately, we have <a href="https://en.wikipedia.org/wiki/Schema_migration">Database Migrations</a>, a technique to help us keep our database changes under control.</p>\n<h2>The problem</h2>\n<p>Problems I have seen over the years:</p>\n<ul>\n<li>Apps often need certain data to be in place in order to run. In a fresh environment, a team member may not have those or may need to import a subset of the production database.</li>\n<li>Different instances of databases, such as production, stage, local environments, may get out of sync.</li>\n<li>Multiple environments setups raise the complexity of different databases versions running at the same time</li>\n<li>Continuous delivery needs repeatable and testable tasks</li>\n<li>When a developer puts his/her hands in the DB, that change will be lost forever. Code evolves along with our Schema so keeping changes tracked is quite a necessity</li>\n<li>Data integrity after updates</li>\n<li>Rollbacks are our safety net of broken deployments. You can’t rollback your app when your data will be out of order.</li>\n</ul>\n<p>Shorter release cycles often require database changes. Having those changes under version control allows us to make changes safely and in a more consistent way. A crucial part of following such methodologies is the evolutionary design which can help us keep track of how the database evolved along with our application. That way our data can rollback at any point of the history hand in hand with our app.</p>\n<p>Evolving our database design along with our core functioning data during the application development, and doing that in a seamless way, requires the use of more sophisticated processes like Database migrations, which essentially are the management of incremental, reversible changes to our databases.</p>\n<p>Database migrations are all about treating our database as another piece of code while applying core principles of Continuous Integration. Publishing new features along with the database changes, without requiring manual Ops work and removing any hands-on session from the DB is the way to move forward and create robust apps.</p>\n<p>This article will walk you through the different types of migrations, how they are being used and how to write DB migrations in a Nodejs environment.</p>\n<p>Let\'s explore the types of database migrations.</p>\n<h2>Types of Migrations</h2>\n<p>Database migrations usually have two forms. Both of those forms are usually required in a long-running project.</p>\n<h3>Altering schema</h3>\n<p>One of them is when we are in need of changing the database\'s schema. For example, when we add an Index, removing/adding a field or restructuring the current fields, moving one from being a String into an Integer.\nThis could also mean that we may need to restructure the data that is already in the database, which brings us to the second form of migrations.</p>\n<h3>Migrating data</h3>\n<p>In a production environment, where data is already in the DB, we may have to migrate those as well. Same cases apply to testing and staging environments but production is a more fragile universe where mistakes are not forgiven.  Say we need to split the <code>Name</code> field of our Users table into a <code>First/Last Name</code> fields combination. One approach would be to create a field called <code>Last Name</code>. Traverse the table, split the <code>Name</code> into two chunks and move the latter to the newly created field. Finally, rename the <code>Name</code> field into <code>First Name</code>. This is a case of data migrations.</p>\n<p>But how do we handle this without putting our hands in the DB?</p>\n<h2>Automation is the key</h2>\n<p>We must be able to describe our database and the migrations with code. This will allow us to store them into our VCS and run them on demand and in an autonomous way.</p>\n<h2>SQL vs NoSQL</h2>\n<p>As we know, SQL and NoSQL have some core differences but that also doesn\'t mean that we can omit migrations in any of them. SQL structure is strictly defined and both data and schema changes can be safely done using migrations. NoSQL, on the other hand, may not need that much of a schema change, due to their elasticity in that subject, but will definitely need data migrations.</p>\n<h2>Database?</h2>\n<p>Modern apps don\'t necessarily handle data or talk to a database directly. E.g., in a Microservices environment, applications may rely on other applications to hold their data and communicate with them through a REST API. That\'s ok because migrations may still need to run. But instead of interacting directly with a database, you have to use the API to make your changes.</p>\n<h2>Migrations dive with Nodejs</h2>\n<p>Applications built with Nodejs have no differences from any other stack.</p>\n<p>After doing a little research, I ended up using <a href="https://github.com/sequelize/umzug">umzug</a> which provides a nice programmatic API to make your migrations. It\'s not opinionated at all and it doesn\'t provide any helper functions to make your actual migrations. It\'s just a library that will store what migrations have run. Which is actually what I need. If you need a more powerful thing you may want to take a look at <a href="https://github.com/db-migrate/node-db-migrate">db-migrate</a>, which provides adapters for major databases and it will help you make changes to those in a more intuitive way.</p>\n<p>Migration systems are providing a few standard things in order to make your migrations. Let\'s see those using Node.js:</p>\n<h3>Write a migration</h3>\n<p>Usually, we want to define two standard methods for a migration script. The function to run when we are migrating and the function when we are rolling back:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token string">\'use strict\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> Promise <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'bluebird\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  up<span class="token punctuation">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment" spellcheck="true">/* Here we write our migration function */</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n  down<span class="token punctuation">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment" spellcheck="true">/* This runs if we decide to rollback. In that case we must revert the `up` function and bring our database to it\'s initial state */</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Our migrations are residing inside a configurable storage and umzug is referring to them with their filenames. For that matter, we should choose our naming strategy wisely before implementation. I have chosen to give them a separate versioning, e.g. 1.0.js, 1.1.js or we could give them the issue ID of our PM that refers to the particular requirement. The choice is yours. Just be consistent.</p>\n<h3>Keep track of the migrations that have already been executed</h3>\n<p>At any given moment, we must be able to tell what migrations have been executed and which migration needs to run next if there is one to run.\nThis allows us to know the state of our database.</p>\n<p>Umzug can use Sequelize to store the history of the migration into MySQL. <a href="https://github.com/sequelize/umzug#custom">But with no hassle at all, we can write our own Adaptor to store them wherever we want</a>.</p>\n<h3>Run a migration or run all migrations</h3>\n<p>We have to be able to run a specific migration or run all migrations we have written. Those must run in order because usually some of them depend on others.\nE.g. on a fresh environment we must run all migrations in order to bring the newly created database to its current state, as it currently lies in production.</p>\n<p>To run all migrations:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>umzug<span class="token punctuation">.</span><span class="token function">up</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>or to run up to a particular migration:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>umzug<span class="token punctuation">.</span><span class="token function">up</span><span class="token punctuation">(</span><span class="token punctuation">{</span> to<span class="token punctuation">:</span> <span class="token string">\'migration-filename\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h3>Rollback a migration</h3>\n<p>When defining one particular migration we are describing changes that will be applied to the database. Those changes must be reversible and that is why we must also describe the reverse action of that migration.\nIn case we need to rollback our application back in a previous state that also introduced database changes, those changes must be revert as well in order for the application to continue operating like it used to do.</p>\n<p>Just like <code>up</code>, but running <code>down</code> instead:\nTo revert all migrations:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>umzug<span class="token punctuation">.</span><span class="token function">down</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>or to revert down to a particular migration:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>umzug<span class="token punctuation">.</span><span class="token function">down</span><span class="token punctuation">(</span><span class="token punctuation">{</span> to<span class="token punctuation">:</span> <span class="token string">\'migration-filename\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h3>Automating</h3>\n<p>umzug doesn\'t come with a CLI out of the box, but it doesn\'t take much to write one yourself.\nAfter I wrote mine, it\'s just a matter of:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>node scripts/migrate\n</code></pre>\n      </div>\n<p>to run all migrations in fresh environments.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>node scripts/migrate <span class="token punctuation">[</span>up<span class="token operator">|</span>down<span class="token punctuation">]</span> <span class="token punctuation">{</span>version<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>to go to that particular migration. This will run on every instance of our application at boot time, so if there is a pending migration, it will run it.</p>\n<h2>In conclusion</h2>\n<p>Database manipulation should be part of our development process. There could be heavy changes where a developer couldn\'t handle and a DBA should come, but for rapid changes, migrations will serve us right, especially when we seeking for faster release cycles and keeping track of our Database changes.</p>\n<p>I am sure that your system handles migration somehow, search it up if you have never thought of it.</p>\n<p>In case you are already doing migrations, what is your preferred workflow? Leave me a comment.</p>\n<p>See also:</p>\n<ul>\n<li><a href="http://enterprisecraftsmanship.com/2015/08/10/database-versioning-best-practices/">http://enterprisecraftsmanship.com/2015/08/10/database-versioning-best-practices/</a></li>\n<li><a href="http://martinfowler.com/articles/evodb.html">http://martinfowler.com/articles/evodb.html</a></li>\n<li><a href="http://www.brunton-spall.co.uk/post/2014/05/06/database-migrations-done-right/">http://www.brunton-spall.co.uk/post/2014/05/06/database-migrations-done-right/</a></li>\n<li><a href="http://databaserefactoring.com/index.html">http://databaserefactoring.com/index.html</a></li>\n</ul>\n<br/>\n*[Kwstas](https://twitter.com/_margaritis/), thank you for helping me write this post. :D*',id:"/home/travis/build/kbariotis/kostasbariotis.com/src/pages/data-migration-with-nodejs/index.md absPath of file >>> MarkdownRemark",timeToRead:7,frontmatter:{date:"2016-05-14T15:19:51.000Z",path:"/data-migration-with-nodejs/",tags:"Database, CI, node.js",title:"Database Migrations with Nodejs",draft:null}},{excerpt:"Sometimes we feel like still chasing the dream. Like it is still far away.  Think again. What were you dreaming of last year? Five years ago? What about when you were 15 years old. What was your goal back then?  I feel like I'm living my last year's…",html:"<p>Sometimes we feel like still chasing the dream. Like it is still far away. </p>\n<p>Think again. What were you dreaming of last year? Five years ago? What about when you were 15 years old. What was your goal back then? </p>\n<p>I feel like I'm living my last year's dream. I do. And now I dream bigger. I want to  feel it again next year. And after five years. And after thirty years.</p>\n<p>I forgot that I am already living my dream.</p>",id:"/home/travis/build/kbariotis/kostasbariotis.com/src/pages/live-the-dream/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2016-05-02T15:24:54.000Z",path:"/live-the-dream/",tags:"dev life, inspiration",title:"Live the dream",draft:null}},{excerpt:"Admin Pisoni  shares lots of great insights he learned after all these years into managing and growing teams. This article says it all. Article",html:'<p><a href="https://www.linkedin.com/in/adam-pisoni-12340b1">Admin Pisoni</a> shares lots of great insights he learned after all these years into managing and growing teams. This article says it all.</p>\n<p><a href="http://firstround.com/review/the-keys-to-scaling-yourself-as-a-technology-leader/">Article</a></p>',id:"/home/travis/build/kbariotis/kostasbariotis.com/src/pages/the-keys-to-scaling-yourself-as-a-technology-leader/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2016-03-30T09:24:53.000Z",path:"/the-keys-to-scaling-yourself-as-a-technology-leader/",tags:"Management, team",title:"The Keys to Scaling Yourself as a Technology Leader",draft:null}},{excerpt:"Units in Unit Testing is the smallest unit of code. But how small? Small enough to be tested. For that matter, Unit Tests need to be isolated and for that you need stubs. Here I will use a small function and the  Sinonjs  to try to test it. My…",html:'<p>Units in Unit Testing is the smallest unit of code. But how small? Small enough to be tested. For that matter, Unit Tests need to be isolated and for that you need stubs.</p>\n<p>Here I will use a small function and the <a href="http://sinonjs.org">Sinonjs</a> to try to test it. My function does some checks and finally an HTTP call to an external service while similar functions would hit a DB. But our intention is to test the actual function and we don\'t want to hit the external service.</p>\n<p>In case that you think: "No we should let it hit the external so we can test that too". Well no, remember, we are writing unit tests. You\'re talking about integration tests, where we test how multiple components interact with each other. Also, this is an external service and our test suite shouldn\'t test external services. This is a clean separation of concerns. It\'s not our test suite\'s responsibility to test anything else that itself.</p>\n<p>Here\'s a simple function:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> request <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'request\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> createToDoItem <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>description<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>description<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">\'description is required\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    request<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      url<span class="token punctuation">:</span> <span class="token string">\'https://todo/items/endpoint\'</span><span class="token punctuation">,</span>\n      body<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        description<span class="token punctuation">:</span> description<span class="token punctuation">,</span>\n        completed<span class="token punctuation">:</span> <span class="token boolean">false</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>err<span class="token punctuation">,</span> res<span class="token punctuation">,</span> body<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n       <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n         <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n       <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n         <span class="token function">resolve</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span>\n       <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>So the <code>createToDoItem</code> does two things. First it checks for the validity of the required parameter <code>description</code> and then contacts the external service that is responsible for storing Todo Items.</p>\n<p>Now we need to test that function as a unit, so we have to isolate it. We don\'t want to contact the external service.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">\'To Do Items\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n  <span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">\'Create Items\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n    <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">\'requires the description parameter\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>done<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n      <span class="token function">createToDoItem</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n          <span class="token function">expect</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span>be<span class="token punctuation">.</span>an<span class="token punctuation">.</span><span class="token function">instanceOf</span><span class="token punctuation">(</span>Error<span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token function">expect</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">\'description is required\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span>done<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">\'rejects on error from the remote service\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>done<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n      <span class="token keyword">var</span> stub <span class="token operator">=</span> sinon<span class="token punctuation">.</span><span class="token function">stub</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> post<span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">yields</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n      <span class="token function">createToDoItem</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n          stub<span class="token punctuation">.</span><span class="token function">restore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span>done<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">\'resolves on succesfull creation\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>done<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n      <span class="token keyword">var</span> stub <span class="token operator">=</span> sinon<span class="token punctuation">.</span><span class="token function">stub</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> post<span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">yields</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n          _id<span class="token punctuation">:</span> <span class="token string">\'ITEM_ID\'</span><span class="token punctuation">,</span>\n          description<span class="token punctuation">:</span> <span class="token string">\'Remember to write that blog post\'</span><span class="token punctuation">,</span>\n          completed<span class="token punctuation">:</span> <span class="token boolean">false</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n      <span class="token function">createToDoItem</span><span class="token punctuation">(</span><span class="token string">\'Remember to write that blog post\'</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>todo<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n          <span class="token function">expect</span><span class="token punctuation">(</span>todo<span class="token punctuation">.</span>_id<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">\'ITEM_ID\'</span><span class="token punctuation">)</span>\n          <span class="token function">expect</span><span class="token punctuation">(</span>todo<span class="token punctuation">.</span>description<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">\'Remember to write that blog post\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          stub<span class="token punctuation">.</span><span class="token function">restore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token function">expect</span><span class="token punctuation">(</span>todo<span class="token punctuation">.</span>completed<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span>be<span class="token punctuation">.</span><span class="token boolean">false</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span>done<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>I hope the code to be self-documented. At first, we call our function without a parameter so the first condition will be true and an error will be thrown. Then we stub the <code>request</code> object so it will run the callback function with an error. This will trigger the second condition and reject our promise. Inside the <code>catch</code> function, we know that the promise has been rejected. For the end, we stub the callback to return with a null error and a body that will resolve the promise and we test that inside the <code>then</code> function. 100% code coverage.</p>\n<p>This way we have completely isolated our Unit Under Test and made it blazingly fast to run since we don\'t make any actual HTTP requests. We pretty much covered the <a href="https://pragprog.com/magazines/2012-01/unit-tests-are-first">F.I.R.S.T. principles of Unit Testing</a>.</p>\n<p>Unit tests should be completely isolated.</p>\n<p>Always remember the <a href="http://blogs.agilefaqs.com/2011/02/01/inverting-the-testing-pyramid/">inverted testing pyramid</a>. Invest in Unit Testing so to avoid manual system testing. It is expensive.</p>',
id:"/home/travis/build/kbariotis/kostasbariotis.com/src/pages/isolated-unit-tests-with-sinonjs/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2016-03-05T21:02:37.000Z",path:"/isolated-unit-tests-with-sinonjs/",tags:"TDD, javascript, node.js",title:"Isolated Unit Tests with Sinonjs",draft:null}},{excerpt:"I started playing with  Golang(or just Go)  this week for the first time. Go is a compiled, statically typed language and I thought it would be a great fit for situations where Node.js, my primary go-to stack, won't be a great candidate for the job…",html:'<p>I started playing with <a href="http://golang.org">Golang(or just Go)</a> this week for the first time. Go is a compiled, statically typed language and I thought it would be a great fit for situations where Node.js, my primary go-to stack, won\'t be a great candidate for the job. For heavy processing and problems where concurrent-first solutions must be applied.</p>\n<p>The first thing I did was to check the <a href="https://tour.golang.org/welcome/1">online tour</a> on the official site. It\'s very well structured and has also some exercises to get you started. Wrapping my head around the language was very easy since it has a lot of well-known concepts like pointers and structs, similar to C.</p>\n<p>After playing a bit around I thought I would make something using my new learnings and Go. I found a <a href="https://github.com/willnorris/imageproxy">really cool project</a> and wanted to contribute to it. So I thought I will fork it and create a bootstrap application and try to import my fork. But that strange message appeared on my console:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>package github.com/kbariotis/imageproxy: code in directory /Users/Bariotis/golang/src/github.com/kbariotis/imageproxy expects import "willnorris.com/go/imageproxy"</code></pre>\n      </div>\n<p>what this basically means is that my repo had an explicit [canonical import path]<a href="https://golang.org/cmd/go/#hdr-Import_path_checking">https://golang.org/cmd/go/#hdr-Import<em>path</em>checking</a>) set that was forcing the consumer to download it from a <a href="https://github.com/willnorris/imageproxy/blob/master/imageproxy.go#L17">particular place</a> and that was the original author\'s site.</p>\n<p><a href="https://texlution.com/post/golang-canonical-import-paths/">This post</a> explains even more how this works. Since the Go command allows one to import packages from remote servers and a package may live in various places or it can be moved from one place to another, the maintainer must explicitly set the default URL that others must use to import the library, in order to avoid the <a href="https://en.wikipedia.org/wiki/Link_rot">link rot</a>.</p>\n<p>But that confused me a bit since I do this all the time with <code>npm</code>. I can fork a library and import it from my fork directly.</p>\n<p>I searched a bit around and found that the simplest thing to do (and didn\'t think of it) was to import the original repository and the Go command will clone it into my $GOPATH/src directory. From there I could change the git remotes URLs and send any changes onto my fork. Then make a PR to the original repo or change the canonical import path annotation if I wanted to use my fork directly.</p>\n<p>Keep this in mind if you\'re just starting with the Go language. Btw, <a href="https://tour.golang.org/concurrency/1">Goroutines are awesome!</a></p>',id:"/home/travis/build/kbariotis/kostasbariotis.com/src/pages/go-canonical-import-paths-github-forks/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2016-02-27T15:49:31.000Z",path:"/go-canonical-import-paths-github-forks/",tags:"Golang, Github",title:"Go canonical import paths & Github forks",draft:null}}],page:3,pagesSum:14,prevPath:"/page/2",nextPath:"/page/4"}}}});
//# sourceMappingURL=path---page-3-ff03d361ee6c5b036735.js.map