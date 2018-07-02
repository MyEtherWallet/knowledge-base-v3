{
"title" : "Securely Store & Guard Your Private Key (by /u/drewshaver)",
"sort" : "08",
"category" : "Security & Phishing",
"description" : "Security & Phishing",
"date_published" : "2017-07-05T08:00:00+08:00",
"date_modified" : "2017-09-26T08:00:00+08:00"
}

---%

<div id="ssagypk_link">
<a href='https://www.reddit.com/r/CryptoCurrency/comments/6vo0tw/a_guide_for_newbies_on_how_to_properly_and/' target='_blank'><em>Source: /u/drewshaver</em> </a></div>

---

<h3 id="ssagypk_preface"> Preface</h3>

<p id="ssagypk_preface_p">
  This guide assumes that you just received a Trezor and Cryptosteel in the mail. Which hardware wallet you chose is not integral to the guide -- any hardware wallet will do. The cryptosteel is not necessary to follow the guide, but protects against fire, flood, and decay, and so comes highly recommended.*
</p>

<h3 id="ssagypk_onwards"> Onwards</h3>

<p id="ssagypk_onwards_p">
  This is awesome that you already ordered a [hardware wallet](https://kb.myetherwallet.com/hardware-wallets/hardware-wallet-recommendations.html)! Of course, you have to recognize the serious responsibility that comes from holding your own private key. If you lose it, make a mistake, forget your passphrase, etc, no one can save you, truly you are in control of your own destiny :)
</p>

<h3 id="ssagypk_terminology"> Terminology -- Mnemonic</h3>
<p id="ssagypk_terminology_p1">
  This will be a list of 12-24 english words, taken from a master list of 2048 possible words, and is also often referred to as your private key or seed phrase.
</p>
<p id="ssagypk_terminology_p2">
  These words are what you store in the cryptosteel. Every word is unique given the first 4 letters, e.g., these and thesaurus cannot both be words because they both start with 'thes'. So you'll notice the cryptosteel only has space for 4 letters on each word. It is incredibly important that you keep your mnemonic safe from prying eyes. **NEVER store it digitally -- in a text file, in an encrypted file, in a picture, just don't do it.** That will violate the security model of the Trezor (which is that your mnemonic only gets stored on the Trezor and is never exposed to a potentially compromised machine, all general purpose computing devices are potentially infected).
</p>

<h3 id="ssagypk_beforegetstarted"> Before you Get Started</h3>
<ul>
  <li id="ssagypk_beforegetstarted_l1">Before moving significant funds around, always start with a test transaction of a small amount to make sure you got everything right.</li>
  <li id="ssagypk_beforegetstarted_l2">Also, it is very important that you are able to recover your Trezor from the mnemonic. What you should do, to start, is transfer a small amount of BTC, like .005. Then, complete the process of storing your mnemonic in your cryptosteel (transferring the words from paper to the steel). Then, wipe your Trezor, and follow instructions to recover Trezor from mnemonic, using your cryptosteel as a reference (don't use any other backup—use the backup you will be using in the future in case you actually lose / destroy / need to reset your TREZOR.</li>
</ul>
<p id="ssagypk_beforegetstarted_p">
  Now, if you load up your wallet and have access to the test amount of BTC, great! You can now lose or otherwise destroy your Trezor and rest assured that you can recover from the cryptosteel.
</p>

<h3 id="ssagypk_importance"> Importance of guarding and securing your mnemonic</h3>

<ul>
  <li id="ssagypk_importance_l1">Anyone that views and remembers mnemonic can take all your crypto.</li>
  <li id="ssagypk_importance_l2">Never ever store this anywhere digitally, except for loading it into the Trezor.</li>
  <li id="ssagypk_importance_l3">If you lose your mnemonic AND your hardware wallet breaks, or becomes otherwise unusable, your crypto are all lost forever.</li>
</ul>
<p id="ssagypk_importance_p">
  Obviously, this would be quite devastating -- and this is why the Trezor and cryptosteel are so important. The Trezor protects your private key from hackers, in case your computer is infected with malware. And the cryptosteel protects the mnemonic from fire, flood, etc.
</p>

<h3 id="ssagypk_password"> Passwords</h3>
<p id="ssagypk_password_p1">
  One big decision you will have to make is whether to use a passphrase or not. The point of a passphrase is to protect your mnemonic -- if you have a strong passphrase and someone gains access to your mnemonic, it is of no value to them. The passphrase is like an extra word tacked on to the end of your mnemonic, though it is free form like a password, and you should never write it down. If you do use one, make sure it has upper case, lower case, numbers , and symbols, should be at least 10 characters, ideally longer. There are pros and cons to both using a passphrase vs not using a passphrase.
</p>
<p id="ssagypk_password_p2">
  Without a passphrase, there is nothing to forget. You are protected from yourself and it is easier to manage things like inheritance. But you are not protected from a thief finding your mnemonic.
</p>
<p id="ssagypk_password_p3">
  With a passphrase, a thief needs to steal your mnemonic and install a keylogger on your machine, which is a much more difficult attack to execute. BUT, if you forget your passphrase, your crypto is lost forever, there is no way to recover. You could potentially write it down, and store it, somewhere geographically separate from where you keep the mnemonic.
</p>
<p id="ssagypk_password_p4">
  Last thing I'll say.. no one knows what the future holds but a bear market is likely on the horizon, and could last for years (2014 and first half of 2015 was the last long bear market). So, pick an amount you plan to invest, and make buys strategically over time (1-3yrs). This way, if the market dips hard after your first couple buys, you are actually happy cause that means you are going to buy a bunch of cheap coins. And if the market goes up, then you're starting off with returns, so also happy.
</p>
<p id="ssagypk_password_p5">
  I'd recommend keeping at least 15-40% of your blockfolio in Bitcoin, depending on your tolerance for risk and horizon for needing to spend the funds. Think of it like bonds vs stocks in a traditional portfolio. Also, try out the app 'blockfolio' for your phone to track your net asset value.
</p>
<p id="ssagypk_password_p6">
  Good luck, lemme know if you have any questions!
</p>

---

- <div id="ssagypk_footer_link"></div>
