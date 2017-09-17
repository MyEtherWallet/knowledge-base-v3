/*
Title: General Information
Sort: 2
*/

<p>Github Repo is here:&nbsp;<a href="https://github.com/kvhnuke/etherwallet">https://github.com/kvhnuke/etherwallet</a></p>
<p>If you want to help contribute, here's what you need to know to get it up and running and compiling.</p>
<ul>
<li>Both the Chrome Extension and the MyEtherWallet.com are compiling from the same codebase. This code is found in the&nbsp;<code>app</code>&nbsp;folder. Don't touch the&nbsp;<code>dist</code>&nbsp;or&nbsp;<code>chrome-extension</code>&nbsp;folders.</li>
<li>We use angular and bootstrap. We used to use jQuery and Bootstrap until it was converted in April 2016. If you wonder why some things are set up funky, that's why.</li>
<li>The mercury branch is currently the active development branch. We then push the dist folder live to gh-pages, which then gets served to MyEtherWallet.com.</li>
<li>We use npm / gulp for compiling. There is a lot of stuff happening in the compliation.</li>
<li>Our node currently runs using the json relay found in&nbsp;<code>json_relay_node</code>. This is written in node.js.</li>
<li>Our node used to run on the json relay found in&nbsp;<code>json_relay_php</code>&nbsp;which was written in php.</li>
</ul>
<p><span>Getting Started</span></p>
<ul>
<li>Start by running&nbsp;<code>npm install</code>.
<ul>
<li>I currently have node v4.2.6 &amp; npm v3.7.2 so check to see if you need to update those is something isn't working.</li>
<li>You may need to install&nbsp;<code>browserify</code>&nbsp;and&nbsp;<code>angular</code>&nbsp;globally?</li>
</ul>
</li>
<li>Run&nbsp;<code>gulp</code>. Gulp will then watch &amp; compile everything and then watch for changes to the HTML, JS, or CSS.</li>
<li>For distribution, run&nbsp;<code>gulp clean</code>.</li>
</ul>
<p><span>Folder Structure</span></p>
<ul>
<li><code>fonts</code>&nbsp;and&nbsp;<code>images</code>&nbsp;get moved into their respective folders. This isn't watched via gulp so if you add an image or font, you need to run&nbsp;<code>gulp</code>&nbsp;again.</li>
<li><code>includes</code>&nbsp;are the pieces of the pages / the pages themselves. These are pretty self explanatory and where you will make most frontend changes.</li>
<li>
<p><code>layouts</code>&nbsp;are the pages themselves. These basically take all the pieces of the pages and compile into one massive page. The navigation is also found here...sort of.</p>
<ul>
<li><code>index.html</code>&nbsp;is for MyEtherWallet.com.</li>
<li><code>cx-wallet.html</code>&nbsp;is the main page for the Chrome Extension.</li>
<li><code>embedded.html</code>&nbsp;is for&nbsp;<a href="https://www.myetherwallet.com/embedded.html">https://www.myetherwallet.com/embedded.html</a>.</li>
</ul>
</li>
<li>
<p>You can control what shows up on MyEtherWallet.com vs the Chrome Extension by using:&nbsp;<code>@@if (site === 'cx' ) { ... }</code>&nbsp;and&nbsp;<code>@@if (site === 'mew' ) { ... }</code>. Check out&nbsp;<code>sendTransaction.tpl</code>&nbsp;to see it in action. The former will only compile to the Chrome Extension. The latter only to MyEtherWallet.com.</p>
</li>
<li>embedded.html is for embedding the wallet generation into third-party sites.&nbsp;<a href="https://www.reddit.com/r/ethereum/comments/4gn37o/embeddable_myetherwallet_super_simple_wallet/">Read more about it and how to listen for the address generated here.</a></li>
<li>The wallet decrypt directives are at&nbsp;<code>scripts/directives/walletDecryptDrtv.js</code>. These show up on a lot of pages.</li>
<li>The navigation is in&nbsp;<code>scripts/services/globalServices.js</code>. Again, we control which navigation items show up in which version of the site in this single file.</li>
<li>As of September 2016, almost all the copy in the .tpl files are only there as placeholders. It all gets replaced via angular-translate. If you want to change some copy you need to do so in&nbsp;<code>scripts/translations/en.js</code>&nbsp;folder. You should also make a note about what you changed and move it to the top of the file so that we can make sure it gets translated if necessary.</li>
<li><code>styles</code>&nbsp;is all the less. It's a couple custom folders and bootstrap. I am in the process of re-factoring all the CSS, getting rid of Bootstrap, and really limiting the CSS to what we absolutely need.</li>
</ul>