{
"title"       : "What is Nonce?",
"sort"        : "04",
"category"    : "Transactions",
"description" : "Transactions",
"date_published" : "2017-07-05T08:00:00+08:00",
"date_modified"  : "2017-09-26T08:00:00+08:00"
}

---%


### In Ethereum, every transaction has a <code>nonce</code>. The nonce is the <code>number of transactions sent from a given address.</code>

<p id="win_p1">
  Nonce (in English, nonce - a number that can be used once) in cryptography is a one-time code selected in a random or pseudo-random manner that is used to securely transmit the main password, preventing a replay attack
</p>

### Nonce is the number assigned to transactions sent from a separate address.

<p id="win_p2">
  Each time you send a transaction, the nonce increases by <code>1</code>. There are rules about what transactions are valid transactions and the nonce is used to enforce some of these rules. Specifically:
</p>

<ul>
  <li id="win_l1">
    <b>Transactions must be in Order:</b> You cannot have a transaction with a nonce of <code>1</code> mined before one with a nonce of <code>0</code>.
  </li>
  <li id="win_l2">
    <b>No Skipping!</b> You cannot have a transaction with a nonce of <code>2</code> mined if you have not already sent transactions with a nonce of <code>1</code> and <code>0</code>.
  </li>
</ul>

### Why?

<p id="win_p3">
  This field prevents double-spends as the nonce is the order the transactions go in. In order for a double-spend to be "successful", you typically...
</p>

<ul>
  <li id="win_w_l1">
    Send a transaction to one party
  </li>
  <li id="win_w_l2">
    Wait for it to register
  </li>
  <li id="win_w_l3">
    Collect something in return from this first transaction
  </li>
  <li id="win_w_l4">
    Quickly send another transaction with a high gas price
  </li>
  <li id="win_w_l5">
    Have this second transaction mined first, therefore invalidating the first transaction.
  </li>
</ul>

<p id="win_p4">
  This is why exchanges wait for you to have a certain number of confirmations before allowing you to trade freshly-deposited funds.
</p>

### In Ethereum, the above is not possible

<p id="win_p5">
  In Ethereum, this method of "double-spending" is not possible because each transaction has a nonce included with it. Even if you attempt to do the above, it will not work as the second transaction (nonce of <code>3</code>) cannot be mined before the first transaction (nonce of <code>2</code>).
</p>
