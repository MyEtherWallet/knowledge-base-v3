/*
Title: I forgot how much I bid.  What do I do?
Sort: 2
*/

<h5>First, look up your address on <a href="https://etherscan.io" target="_blank">etherscan.io</a>&nbsp;in order to find the transaction in which you placed your bid.&nbsp;</h5>
<p><strong>Look for:</strong></p>
<ul>
<li>An outgoing transaction (orange)</li>
<li>To <a href="https://etherscan.io/address/0x6090a6e47849629b7245dfa1ca21d94cd15878ef">ENS-Registrar</a></li>
<li>With an ETH value &gt; 0.01 ETH <em>(not one that says "0 Ether")</em></li>
<li>Was sent 2-4 days ago <em>(if you are just revealing your bid now)</em></li>
<li>That, when you click on the TX hash, has "Function: newBid(bytes32 sealedBid)" under "Input Data"</li>
</ul>
<p>Once you find this, copy and paste the value in the "Input Data" into a text document &amp; remove the "MethodId:" and "[0]:" so that it looks like this: <code>0xce92dced69faf18dd0953d9124d7917234b0efc05c78fd0d9abfc6ffb32d512680fdbb65</code>.</p>
<h5>Now, go to <a href="https://www.myetherwallet.com/helpers.html">https://www.myetherwallet.com/helpers.html</a></h5>
<p>Scroll to the "ENS" section, depending on what you saved, enter the following:</p>
<ul>
<li>The address you bid from</li>
<li>ENS Name you Bid On <em>(no '.eth' at the end!)</em>, or the namehash from your long string under "Hashed ENS Name (Label Hash)"</li>
<li>The amount you think you bid</li>
<li>Your Secret, or the sha3 secret from your long string under "Your Secret (Hashed)"</li>
</ul>
<p>When you do this, the following four fields will populate with long data. You want compare the string you copied earlier (<code>0xce92dced69faf18dd0953d9124d7917234b0efc05c78fd0d9abfc6ffb32d512680fdbb65</code>) to the string shown under <strong>"New Bid Data"</strong>.</p>
<h5>Change the amount you bid until the strings match.</h5>
<p>Copy the "Reveal Data" string and go to <a href="https://www.myetherwallet.com/#send-transaction">https://www.myetherwallet.com/#send-transaction</a> and unlock the wallet for the address that you placed the bid on. This address should also be the same address entered on the https://www.myetherwallet.com/helpers.html.</p>
<h5>Enter the following information into the fields:</h5>
<ul>
<li>To: 0x6090a6e47849629b7245dfa1ca21d94cd15878ef</li>
<li>Amount: 0 ETH</li>
<li>Gas Limit: 200000</li>
<li>Data: From the "Reveal Data" field on <a href="https://www.myetherwallet.com/helpers.html">https://www.myetherwallet.com/helpers.html</a></li>
</ul>
<h5>Generate and sign your transaction.</h5>
<p>Click your TX hash after you send it. Ensure there are no errors (you may have to refresh a few times.)</p>
<p>Then, in a new tab, go to <a href="https://etherscan.io/enslookup?q=yourname.eth">https://etherscan.io/enslookup?q=yourname.eth</a> and type in the name you bid on. Ensure that you see a very recent transaction from your address with "Unseal Bid" next to it.</p>
<h5>If you win the auction, come back to finalize it in a couple days. Congrats!</h5>