<h1 id="mycore">myCore</h1>
<h2 id="1-preview">1. Preview</h2>
<p>myCore provides methods for rendering HTML and controlling events easily. Don&#39;t worry, myCore has a basic syntax that you can control after reading this guide.</p>
<h3 id="steps-to-use-mycore">Steps to Use myCore</h3>
<ol>
<li><p><strong>Create a JS file and import it into your index.html file</strong></p>
<pre><code class="lang-html"> <span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"module"</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"./resources/js/Core/core.js"</span>&gt;</span><span class="undefined"></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
<p> <em>Example:</em> In the example above, the file name is <code>core.js</code>.</p>
</li>
<li><p><strong>Import the library</strong></p>
<pre><code class="lang-javascript">     <span class="hljs-keyword">import</span> communicate <span class="hljs-keyword">from</span> <span class="hljs-string">'./Core/communication.js'</span>;
</code></pre>
<p> Now you can use it for everything you need.</p>
</li>
<li><p><strong>Create a config.js file to configure your data</strong>
 You need to return it like this:</p>
<pre><code class="lang-javascript"> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">home</span>(<span class="hljs-params"></span>) </span>{
     <span class="hljs-keyword">return</span> <span class="hljs-string">`
         &lt;h1&gt;This is Home&lt;/h1&gt;
     `</span>;
 }

 <span class="hljs-keyword">const</span> config = {
     setConfig(<span class="hljs-keyword">type</span>) {
         <span class="hljs-keyword">switch</span> (<span class="hljs-keyword">type</span>) {
             <span class="hljs-keyword">case</span> <span class="hljs-string">"home"</span>:
                 <span class="hljs-keyword">return</span> home();
             <span class="hljs-comment">// Add other configurations here</span>
             <span class="hljs-keyword">default</span>:
                 <span class="hljs-built_in">console</span>.error(<span class="hljs-string">`Type <span class="hljs-subst">${type}</span> is undefined`</span>);
         }
     }
 };

 <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> config;
</code></pre>
<ul>
<li><code>home()</code> is a function you declare to return your HTML.</li>
<li><code>&quot;home&quot;</code> is the name you want to use when you call this function to get the data returned by <code>home()</code>.</li>
</ul>
</li>
<li><p><strong>Save your &quot;home&quot; to output in core.js</strong></p>
<pre><code class="lang-javascript"> <span class="hljs-keyword">const</span> <span class="hljs-built_in">home</span> = <span class="hljs-built_in">config</span>.setConfig(<span class="hljs-string">'home'</span>);
 communicate.send(<span class="hljs-string">'output'</span>, <span class="hljs-built_in">home</span>, <span class="hljs-string">'home'</span>);
</code></pre>
</li>
<li><p><strong>Render this by using the function</strong></p>
<pre><code class="lang-javascript"> <span class="hljs-selector-tag">communicate</span><span class="hljs-selector-class">.view_render</span>(<span class="hljs-string">"body"</span>, <span class="hljs-string">'home'</span>);
</code></pre>
</li>
</ol>
<h2 id="2-syntax">2. Syntax</h2>
<ol>
<li><p><strong>Logger</strong></p>
<pre><code class="lang-javascript"> - communicate.logger(<span class="hljs-string">'type'</span>, <span class="hljs-string">'loaction'</span>, ...<span class="hljs-string">'Some thing you need log'</span>);
</code></pre>
<ul>
<li><code>type</code> is type or log</li>
<li><code>location</code> is loaction logger you call.  </li>
</ul>
</li>
<li><p><strong>Contact</strong></p>
<pre><code class="lang-javascript"> communicate.contact('<span class="hljs-keyword">type</span>');
</code></pre>
<ul>
<li><code>type</code> is type you need return this object
<em>Example</em>: If you want get output module you need <pre><code>      `communicate.contact(<span class="hljs-string">'output'</span>);`
  and <span class="hljs-keyword">this</span> <span class="hljs-keyword">return</span> output <span class="hljs-keyword">object</span>/<span class="hljs-class"><span class="hljs-keyword">class</span>/...<span class="hljs-title">other</span></span>
</code></pre></li>
</ul>
</li>
<li><p><strong>send</strong></p>
<pre><code class="lang-javascript">     communication.<span class="hljs-built_in">send</span>(<span class="hljs-string">'accusive'</span>, data, <span class="hljs-string">'key'</span>)<span class="hljs-comment">;</span>
</code></pre>
<ul>
<li><code>accusive</code> is where data you need seed this.  </li>
<li><code>data</code> is every think.  </li>
<li><code>key</code> is name of key you want accusive get this.<br>  <em>Example</em>: <code>communication.send(&#39;output&#39;, &quot;&lt;h1&gt;Home&lt;/&gt;&quot;, &#39;home&#39;);</code><pre><code>      Now <span class="hljs-keyword">in</span> output, you have <span class="hljs-built_in">data</span> <span class="hljs-keyword">with</span> key: home <span class="hljs-literal">and</span> <span class="hljs-built_in">data</span> is <span class="hljs-string">`&lt;h1&gt;Home&lt;/&gt;`</span>
</code></pre></li>
</ul>
</li>
<li><p><strong>view-render</strong></p>
<pre><code class="lang-javascript"> - communicate.<span class="hljs-built_in">view</span>-render(location, '<span class="hljs-built_in">key</span>');
</code></pre>
<ul>
<li><code>location</code> is where you can innerHTML
  +<code>location</code> will use <code>document.querySelecter(&#39;location&#39;);</code></li>
<li>Now let try render &#39;home&#39; in to body:
  <code>communicate.view_render(&#39;body&#39;, &#39;home&#39;);</code></li>
</ul>
</li>
<li><p><strong>declare_action</strong></p>
<pre><code class="lang-javascript"> -<span class="ruby"> communicate.declare_action(<span class="hljs-string">'name-action'</span>, <span class="hljs-string">'logic'</span>);</span>
</code></pre>
<ul>
<li><code>name-action</code> is name you want call this</li>
<li><p><code>logic</code> is a function have a action you want do this when action called
<em>Example</em>: </p>
<pre><code class="lang-javascript">  communicate.declare_action(<span class="hljs-string">'viewHome'</span>, <span class="hljs-function"><span class="hljs-params">()</span>=&gt;</span>{
      alter(<span class="hljs-string">'Home Page'</span>);
  });
</code></pre>
</li>
<li>If you want use this action let read next syntax</li>
</ul>
</li>
<li><p><strong>action</strong></p>
<pre><code class="lang-javascript"> - communicate.<span class="hljs-keyword">action</span>(<span class="hljs-keyword">default</span>);
</code></pre>
<ul>
<li><code>default</code> is boolen type, chose true if you want user default name(handle) to call function you declare or you can set this in avrible and call avrible name
<em>Example</em>: <code>communicate.action(true);</code><pre><code>  now <span class="hljs-keyword">in</span> <span class="hljs-keyword">local</span>, you have <span class="hljs-string">`handle.viewHome()`</span> <span class="hljs-keyword">function</span>
</code></pre>  you can use this in config file witch event like onclick,...</li>
</ul>
</li>
<li><p><strong>set_data_localStore</strong></p>
<pre><code class="lang-javascript">     communication.set_data_localStore(key, status);
     <span class="hljs-regexp">/*-----------*/</span>
     communication.set_data_localStore(<span class="hljs-string">'Read'</span>, <span class="hljs-keyword">true</span>);
     <span class="hljs-regexp">//</span> store_data = {Read : <span class="hljs-keyword">true</span>};
</code></pre>
<ul>
<li><code>key</code> is name key data you want declare and set into local storage.</li>
<li><code>status</code> is boolen type  or other this may be save you status or data.
<em>Example</em>: <code>communication.set_data_localStore(&#39;Read&#39;, true);</code></li>
<li>Now in local storage, you have data_storage object with key Read and value is true</li>
</ul>
</li>
<li><p><strong>get_data_storage</strong></p>
<pre><code class="lang-javascript">     <span class="hljs-selector-tag">communication</span><span class="hljs-selector-class">.get_data_storage</span>(key);
     <span class="hljs-comment">/*------*/</span>
     <span class="hljs-selector-tag">communication</span><span class="hljs-selector-class">.get_data_storage</span>(<span class="hljs-string">'Read'</span>); <span class="hljs-comment">// true</span>
     <span class="hljs-selector-tag">communication</span><span class="hljs-selector-class">.get_data_storage</span>(<span class="hljs-string">'something'</span>); <span class="hljs-comment">// false</span>
</code></pre>
<ul>
<li><code>key</code> is name of key you declare befor</li>
<li>If you call key your don&#39;t declare befor, this key will be declare with false value and return</li>
</ul>
</li>
<li><p><strong>request_data</strong></p>
<pre><code class="lang-javascript">     <span class="hljs-selector-tag">communicate</span><span class="hljs-selector-class">.request_data</span>(<span class="hljs-selector-tag">accusative</span>, <span class="hljs-selector-tag">type_dataReques</span>);
</code></pre>
<ul>
<li><code>accusative</code> is where you need get data (output, store).</li>
<li><code>type_dataReques</code> is type of data you save , it is name key.</li>
</ul>
</li>
<li><p><strong>unlogger</strong></p>
<pre><code class="lang-javascript">    communicate.unlogger(<span class="hljs-class"><span class="hljs-keyword">type</span>, <span class="hljs-title">location</span>, <span class="hljs-title">isLock</span>)</span>;
    <span class="hljs-comment">/*--------*/</span>
    communicate.unlogger(<span class="hljs-symbol">'lo</span>g', <span class="hljs-symbol">'outpu</span>t', <span class="hljs-literal">true</span>);
    <span class="hljs-comment">//--&gt; this will be lock all console have type log from output</span>

    communicate.unlogger(<span class="hljs-symbol">'lo</span>g', <span class="hljs-symbol">'outpu</span>t', <span class="hljs-literal">false</span>);
    <span class="hljs-comment">//--&gt; this will be unlock all console have type log from output</span>

    communicate.unlogger(<span class="hljs-symbol">'al</span>l', <span class="hljs-symbol">'al</span>l', <span class="hljs-literal">true</span>);
    <span class="hljs-comment">//--&gt;This will be lock all logger from Core</span>
</code></pre>
<ul>
<li><code>type</code> is type you want return in console</li>
<li><code>location</code> is where you want block or unblock</li>
</ul>
</li>
</ol>