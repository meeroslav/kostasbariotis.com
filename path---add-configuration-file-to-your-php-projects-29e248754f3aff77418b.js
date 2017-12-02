webpackJsonp([0x5e9876b4f186],{"./node_modules/json-loader/index.js!./.cache/json/add-configuration-file-to-your-php-projects.json":function(a,n){a.exports={data:{site:{siteMetadata:{title:"Kostas Bariotis' Blog",description:"I'm Kostas Bariotis, a web developer, a proud wanderer and a passionate doer. My mission is to write clean and efficient code, to solve problems on the web and to learn something more.",siteUrl:"https://kostasbariotis.com"}},markdownRemark:{html:'<p><a href="https://github.com/vlucas/phpdotenv" target="_blank">https://github.com/vlucas/phpdotenv</a></p>\n<p>For a while now, i\'ve been using <a title="Symfony\'s YAML Component" href="http://symfony.com/doc/current/components/yaml/introduction.html" target="_blank">Symfony\'s YAML</a> to add a configuration file on my PHP projects.</p>\n<p>Today, i stumbled upon <a title="Vance Lucas" href="http://vancelucas.com/" target="_blank">Vance Lucas\'s</a> PHPDotEnv which is a great PHP package that will transfer the contents of a .env file right inside your PHP\'s $<em>ENV variable. Available through &#x3C;a title="PHP Composer" href="<a href="http://getcomposer.org">http://getcomposer.org</a>" target="</em>blank">Composer</a> too.</p>\n<p>Easiest method to add configuration files to your PHP projects ever!</p>',excerpt:"https://github.com/vlucas/phpdotenv For a while now, i've been using  Symfony's YAML  to add a configuration file on my PHP projects. Today…",frontmatter:{date:"August 31, 2014",path:"/add-configuration-file-to-your-php-projects/",tags:"php",title:"Add configuration file to your PHP Projects",draft:null}}},pathContext:{prev:{excerpt:"http://www.quora.com/Startups/Where-can-I-find-developers-willing-to-join-my-startup/answer/William-Pietri?srid=ujr & share=1 This answer is gold. I am posting it here just to remind my self about facts that i am forgetting very easily.",html:'<p><a title="William Petri\'s Answer on Quora: Where can i find developers willing to job my startup" href="http://www.quora.com/Startups/Where-can-I-find-developers-willing-to-join-my-startup/answer/William-Pietri?srid=ujr&amp;share=1" target="_blank">http://www.quora.com/Startups/Where-can-I-find-developers-willing-to-join-my-startup/answer/William-Pietri?srid=ujr&#x26;share=1</a></p>\n<p>This answer is gold. I am posting it here just to remind my self about facts that i am forgetting very easily.</p>',id:"/home/travis/build/kbariotis/kostasbariotis.com/src/pages/william-petris-answer-on-quora-where-can-i-find-developers-willing-to-join-my-startup/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2014-09-02T14:56:00.000Z",path:"/william-petris-answer-on-quora-where-can-i-find-developers-willing-to-join-my-startup/",tags:null,title:"William Petri's Answer on Quora : Where can i find developers willing to join my startup",draft:null}},next:{excerpt:"Last week an unusual bug really got me some time until i figured out. Common symptoms are Magento not creating your product's images cache without a reason or when trying to upload product's image and an error says 'Memory limit reached'. A lot of…",html:'<p>Last week an unusual bug really got me some time until i figured out.</p>\n<p>Common symptoms are Magento not creating your product\'s images cache without a reason or when trying to upload product\'s image and an error says \'Memory limit reached\'.</p>\n<p>A lot of resources on the Internet says that you have to increase your PHP\'s memory limit. But when i checked my PHP\'s configuration i noticed that memory limit was to -1, which means that a s<a title="PHP Docs : Memory Limit" href="http://php.net/manual/en/ini.core.php#ini.memory-limit" target="_blank">cript is allowed to allocate all your available memory</a>. Hmm, that\'s interesting. Hmmm, that\'s interesting.</p>\n<p>I followed the stacktrace and i found this (lib/Varien/Image/Adapter/Gd2.php):</p>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code><span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function">_isMemoryLimitReached</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n  <span class="token variable">$limit</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">&amp;</span>gt<span class="token punctuation">;</span><span class="token function">_convertToByte</span><span class="token punctuation">(</span><span class="token function">ini_get</span><span class="token punctuation">(</span><span class="token string">\'memory_limit\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token variable">$size</span> <span class="token operator">=</span> <span class="token function">getimagesize</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">&amp;</span>gt<span class="token punctuation">;</span>_fileName<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token variable">$requiredMemory</span> <span class="token operator">=</span> <span class="token variable">$size</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token variable">$size</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token function">memory_get_usage</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token variable">$requiredMemory</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span>gt<span class="token punctuation">;</span> <span class="token variable">$limit</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token punctuation">[</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span>\n\n<span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function">_convertToByte</span><span class="token punctuation">(</span><span class="token variable">$memoryValue</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">stripos</span><span class="token punctuation">(</span><span class="token variable">$memoryValue</span><span class="token punctuation">,</span> <span class="token string">\'M\'</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>int<span class="token punctuation">)</span><span class="token variable">$memoryValue</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">elseif</span> <span class="token punctuation">(</span><span class="token function">stripos</span><span class="token punctuation">(</span><span class="token variable">$memoryValue</span><span class="token punctuation">,</span> <span class="token string">\'KB\'</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>int<span class="token punctuation">)</span><span class="token variable">$memoryValue</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>int<span class="token punctuation">)</span><span class="token variable">$memoryValue</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>There you have it. The author here doesn\'t check for when memory_limit is set to -1. Instead he assumes that it will be always set to form of XXM or XXKB.</p>\n<p>So in case you have bumped into the above symptoms check out that your PHP\'s memory limit is not set to infinite.</p>',id:"/home/travis/build/kbariotis/kostasbariotis.com/src/pages/magentovarien-lib-php-memory_limit-1-bug/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2014-08-30T13:21:24.000Z",path:"/magentovarien-lib-php-memory_limit-1-bug/",tags:"magento",title:"Magento(Varien lib) & PHP memory_limit -1 bug",draft:null}}}}}});
//# sourceMappingURL=path---add-configuration-file-to-your-php-projects-29e248754f3aff77418b.js.map