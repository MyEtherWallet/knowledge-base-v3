{
"title"       : "Transaction Failed - Out of Gas",
"sort"        : "06",
"category"    : "Transactions",
"description" : "Transactions",
"date_published" : "2017-07-05T08:00:00+08:00",
"date_modified"  : "2017-09-26T08:00:00+08:00"
}

---%

<p id="tfoog_p1">
  Each transaction (including token and contract transactions) require gas and that gas is paid in Ether. You can think of this like a transaction fee. The more computational effort a transaction takes, the more gas you need.
</p>

<p id="tfoog_p2">
  MyEtherWallet estimates how much gas you will need - but sometimes it doesn't get it right.
</p>

<b id="tfoog_b">
  Solution: Try manually increasing the "Gas Limit". First, try doubling the amount of gas that MyEtherWallet estimates, and sending again.
</b>

<p id="tfoog_p3">
  Any excess gas will be returned to you, so you could even triple or quadruple it.
</p>

<p id="tfoog_p4">
  We are always trying to improve how we estimate gas as contracts become more complex. However, sometimes we still get it wrong. We apologize for the inconvenience.
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

### Related

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
