/*
Title: Why don't you make me move my mouse to generate a seed?
Sort: 2
*/

<p class="lead text-center">Some sites generate entropy ("seed") the private key via mouse movements. Since MyEtherWallet.com doesn't do this, does it mean my private key isn't truly random? Is this safe?</p>
<p class="text-center"><img src="https://s3.amazonaws.com/groovehq/uploaded/3ixnwrg3w8ko1uki8tu5tg4mjpurb4sn2xgfr1lx21w8rnfdzi?1494563756" alt="" /></p>
<p>While the mouse shaking thing is clever and we understand why people enjoy it (?), the reality is the Crypto API ensures more entropy than your mouse movements. The mouse movements aren't unsafe, it's just that we (and tons of other crypto experiments) believe in letting a variety of really crazy random data from your browser, operating system, and more generate the entropy.</p>
<p>We're relying on really really smart groups of people to build and maintain how our keys are generated. There are glorious amount of specs (and even specs about testing those specs). They are going to do a better job than us and ensuring entropy.</p>
<h5>Further Reading</h5>
<ul>
<li><a href="https://www.reddit.com/r/ethereum/comments/5psp13/ethereum_account_generation_on_airgapped_computer/" target="_blank">Here's a really long comment about how window.crypto generates entropy.</a></li>
<li>Here's a <a href="https://www.reddit.com/r/ethereum/comments/2bilqg/note_there_is_a_paranoid_highsecurity_way_to/cj5sgrm" target="_blank">conversation between an angry redditor and Vitalik regarding mouse movements v. window.crypto</a></li>
<li><a href="https://dvcs.w3.org/hg/webcrypto-api/raw-file/tip/spec/Overview.html#dfn-GlobalCrypto" target="_blank">The window.crypto spec itself</a></li>
</ul>