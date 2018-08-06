{
"title"       : "Error: Cannot send due to Insufficient funds",
"sort"        : "04",
"category"    : "Gas & Transaction Fees",
"description" : "Gas & Transaction Fees",
"date_published" : "2017-07-05T08:00:00+08:00",
"date_modified"  : "2017-09-26T08:00:00+08:00"
}

---%
<p id="ecsdtif_p1">
  If you are getting the error, <code>"Insufficient funds. Account you try to send transaction from does not have enough funds. Required XXXXXXXXXXXXXXXXXXX and got: XXXXXXXXXXXXXXXX"</code>, it means you do not have enough <b>ETH</b> in your account to cover the cost of gas.
</p>

<p id="ecsdtif_p2">
  Each transaction (including token and contract transactions) require gas and that gas is paid in ETH. You can think of this like a transaction fee.
</p>

### Solution: Send 0.01 ETH to that account in order to be able to make the transaction.

<p id="ssettaiotbatmtt_p1">
  A standard TX will be <code>21000</code> gas & a gas price of <code>0.00000002 ETH</code> so the total TX fee will be <code>0.00042 ETH</code>. With tokens, the amount of gas is typically <code>z50000 gas - 100000 gas</code>, so the total TX fee increases to <code>0.001 ETH - 0.002 ETH</code>.
</p>

<p id="ssettaiotbatmtt_p2">
  The number displayed in that error message is the amount required to cover the cost of the transaction in Wei. Take that number, divide by <code>1000000000000000000</code>. This will give you the amount of Ether you need to send to that account to make the transaction.
</p>

### More Information About Gas

<ul>
  <li id="tfoog_miag_l1">
    A standard TX will be 21000 gas & a gas price of 0.00000002 ETH so the total TX fee will be 0.00042 Ether.
  </li>
  <li id="tfoog_miag_l2">
    With tokens, the amount of gas is typically 50000 gas - 100000 gas, so the total TX fee increases to 0.001 ETH - 0.002 ETH.
  </li>
  <li id="tfoog_miag_l3">
    The amount of ETH or tokens you are sending <span style="text-decoration: underline;">does not</span> affect the amount of gas you need.
  </li>
  <li id="tfoog_miag_l4">
    <em>GAS LIMIT</em> is the maximum amount of GAS you will send with your transaction. This is in units of GAS.
  </li>
  <li id="tfoog_miag_l5">
    <em>GAS PRICE</em>, which you will not see except on the Offline page, is how much each unit of gas costs. We set it at 0.00000002 ETH.
  </li>
</ul>


### Related Reading

<ul>
  <li id="tfoog_r_l1">
    <a href="https://kb.myetherwallet.com/gas/what-is-gas-ethereum.html" target="_blank">What is Gas?</a>
  </li>
  <li id="tfoog_r_l2">
    <a href="https://ethereum.stackexchange.com/questions/3/what-is-gas-and-transaction-fee-in-ethereum" target="_blank">What is gas (StackExchange)</a>
  </li>
  <li id="tfoog_r_l3">
    <a href="https://www.cryptocompare.com/coins/guides/what-is-the-gas-in-ethereum/" target="_blank">What is gas? (CryptoCompare)</a>
  </li>
  <li id="tfoog_r_l4">
    <a href="https://www.reddit.com/r/ethereum/comments/271qdz/can_someone_explain_the_concept_of_gas_in_ethereum/" target="_blank">Can someone explain gas to me?</a>
  </li>
  <li id="tfoog_r_l5">
    <a href="https://www.reddit.com/r/ethereum/comments/3fnpr1/can_someone_possibly_explain_the_concept_of/" target="_blank">I don't understand the concept of gas.</a>
  </li>
</ul>
