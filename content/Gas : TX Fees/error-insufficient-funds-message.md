/*
Title: Cannot Send - "Insufficient funds..."
Sort: 2
*/

<p>If you are getting the error, <code>"Insufficient funds. Account you try to send transaction from does not have enough funds. Required XXXXXXXXXXXXXXXXXXX and got: XXXXXXXXXXXXXXXX"</code>, it means you do not have enough <strong>ETH</strong> in your account to cover the cost of gas.</p>
<p>Each transaction (including token and contract transactions) require gas and that gas is paid in ETH. You can think of this like a transaction fee.</p>
<h4>Solution: Send 0.01 ETH to that account in order to be able to make the transaction.</h4>
<p>A standard TX will be <code>21000</code> gas &amp; a gas price of <code>0.00000002 ETH</code> so the total TX fee will be <code>0.00042 ETH</code>. With tokens, the amount of gas is typically <code>z50000 gas - 100000 gas</code>, so the total TX fee increases to <code>0.001 ETH - 0.002 ETH</code>.</p>
<p>The number displayed in that error message is the amount required to cover the cost of the transaction in Wei. Take that number, divide by <code>1000000000000000000</code>. This will give you the amount of Ether you need to send to that account to make the transaction.</p>
<p>&nbsp;</p>
<h4>More Information About Gas</h4>
<ul>
<li>A standard TX will be 21000 gas &amp; a gas price of 0.00000002 ETH so the total TX fee will be 0.00042 Ether.</li>
<li>With tokens, the amount of gas is typically 50000 gas - 100000 gas, so the total TX fee increases to 0.001 ETH - 0.002 ETH.</li>
<li>The amount of ETH or tokens you are sending <span>does not</span> affect the amount of gas you need.</li>
<li><em>GAS LIMIT</em> is the maximum amount of GAS you will send with your transaction. This is in units of GAS.</li>
<li><em>GAS PRICE</em>, which you will not see except on the Offline page, is how much each unit of gas costs. We set it at 0.00000002 ETH.</li>
</ul>
<h4>Read Further</h4>
<ul>
<li><a href="https://ethereum.stackexchange.com/questions/3/what-is-gas-and-transaction-fee-in-ethereum" target="_blank">What is gas (StackExchange)</a></li>
<li><a href="https://www.cryptocompare.com/coins/guides/what-is-the-gas-in-ethereum/" target="_blank">What is gas? (CryptoCompare)</a></li>
<li><a href="https://www.reddit.com/r/ethereum/comments/271qdz/can_someone_explain_the_concept_of_gas_in_ethereum/">Can someone explain gas to me?</a></li>
<li><a href="https://www.reddit.com/r/ethereum/comments/3fnpr1/can_someone_possibly_explain_the_concept_of/" target="_blank">I don't understand the concept of gas.</a></li>
</ul>