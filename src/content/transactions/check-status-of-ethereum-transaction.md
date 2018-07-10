{
"title"       : "Checking or Replacing a TX After it's Been Sent",
"sort"        : "10",
"category"    : "Transactions",
"description" : "Transactions",
"date_published" : "2017-10-08T08:00:00+08:00",
"date_modified"  : "2017-10-28T08:00:00+08:00"
}

---%


### How can I check on the status of my transaction?

<ul>
  <li id="hcicotsomt_l1">
    <a href="https://etherscan.io/txsPending" target="_blank">Etherscan's Pending Transactions</a>
  </li>
  <li id="hcicotsomt_l2">
    <a href="https://www.myetherwallet.com/#check-tx-status" target="_blank">Our Check TX Status</a>
  </li>
  <li id="hcicotsomt_l3">
    <p>
      Our Check TX Status Page via TX hash:
      <a href="https://www.myetherwallet.com/?txHash=0x04f6ab30d52a6fa2551b41aafedc531aa8ead1ed145a6f748328df1855a40e63#check-tx-status" target="_blank">
      https://www.myetherwallet.com/?txHash=0x04f6ab30d52a6fa2551b41aafedc531aa8ead1ed145a6f748328df1855a40e63#check-tx-status
      </a>
    </p>
  </li>
</ul>  

### Can I cancel, override, overwrite, replace, or do anything once a transaction has been sent?

<b id="cioorodaoathbs_b1">
  99.9999999999999999% of the time the answer is NO.
</b>

<p id="cioorodaoathbs_p1">
  Once a transaction has been mined and is included in a block on the blockchain, it cannot be canceled or replaced.
</p>

<p id="cioorodaoathbs_p2">
  During times of normal volume, transactions are mined within seconds and do not spend any length of time in the transaction pool. There is simply not enough time to cancel or replace or override a transaction once it has been sent.
</p>

<b id="cioorodaoathbs_b2">However....</b>
<p id="cioorodaoathbs_p3">
  During times of extremely high volume (like we've seen during the Bancor and Status Token Contribution periods), transactions could be pending for hours, if not days, before being mined.
</p>
<p id="cioorodaoathbs_p4">
  During these times it is theoretically possible to replace an existing transaction with a new transaction with a higher gas price.
</p>
<p id="cioorodaoathbs_p5">
  The second transaction, theoretically, will be mined before the first transaction, effectively "canceling" the first transaction.
</p>
<p id="cioorodaoathbs_p6">
  The easiest way to do this is by sending a `0 ETH` transaction to `your own address` with the same nonce and higher gas price. This will "cancel" your first transaction.
</p>
<p id="cioorodaoathbs_p7">
  There is no guarantee this will work, nor that it will work every time. This tool is very, very new. Please use at your own risk.
</p>

---

##### Do not take this article or features on MyEtherWallet as an indication that you can cancel a transaction you accidentally sent to the wrong address, or get your ETH back once it has been sent.

##### It is <b>only</b> regarding finding, checking, and potentially replacing transactions that have been stuck in the transaction pool for very long period of time.

---

### How to Check the Status of a Transaction

<ol>
  <li id="htctsoat_l1">
    Go to our <a href="https://www.myetherwallet.com/#check-tx-status" target="_blank">Check TX Status</a> Page
  </li>
  <li id="htctsoat_l2">
    Copy & paste the transaction hash into the field provided.
  </li>
  <li id="htctsoat_l3">
    Click the <code>Check TX Status</code> button.
  </li>
  <li>
    <p id="htctsoat_l4_p">
      Details will appear depending on the state of the transaction. It could be...
    </p>
    <ul>
      <li>
        <p id="htctsoat_l4_p_l1_p">
          <b>Transaction Found:</b> Your transaction was successfully mined and is on the blockchain. Click the link provided.
        </p>
        <ul>
          <li id="htctsoat_l4_l1_l1">
            If you see a red ( ! ) symbol, or a "BAD INSTRUCTION" or "OUT OF GAS" error message, it means that the transaction was not successfully <em>sent</em>. You cannot cancel or replace this transaction. Instead, send a new transaction. If you received an "Out of Gas" error, you should double the gas limit you specified originally.
          </li>
          <li id="htctsoat_l4_l1_l2">
            If you do not see any errors, your transaction was successfully sent. Your ETH or Tokens are where you sent them. If this balance has not been credited to your hosted wallet or exchange account ~24 hours after sending, please
            <a href="https://kb.myetherwallet.com/i-have-a-question-but-its-not-about-myetherwallet-dot-com-what-do-i-do" target="_blank">contact that service</a>. Send them the <em>link</em> to your transaction and ask them, nicely, to look into your situation.
          </li>
        </ul>
      </li>
      <li id="htctsoat_l4_p_l2">
        <b>Transaction Not Found:</b> This transaction cannot be found in the TX Pool of the node you are connected to. However, it could be in a different TX Pool, waiting to be mined. Please use the dropdown in the upper-right to select a different ETH node (e.g. <code>ETH (Etherscan.io)</code> or <code>ETH (Infura.io)</code> or <code>ETH (MyEtherWallet)</code>) and check again.
      </li>
      <li id="htctsoat_l4_p_l3">
        <b>Pending Transaction Found:</b> Your transaction was located in the TX Pool of the node you are connected to. It is currently pending (waiting to be mined). There is a chance you can cancel or replace this transaction.
      </li>
    </ul>
  </li>
</ol>


### "Replacing" vs "Canceling" Transactions

<ul>
  <li id="rvct_l1">
    <b>Canceling</b>: Generating a <code>0 ETH</code> transaction to <code>Your Own Address</code> with the purpose of preventing a previous transaction from "going through" / "being mined" / being included in the blockchain.
  </li>
  <li id="rvct_l2">
    <b>Replacing</b>: Generating a <code>XX  ETH</code> transaction to <code>Someone Else's Address</code> with the purpose of doing something (e.g. sending, revealing an ENS bid) <em>while simultaneously</em> not having a previous transaction go through.
  </li>
</ul>

<p id="rvct_p">
  The reason we recommend <code>Canceling</code> over  <code>Replacing</code> is that it is not guaranteed your second transaction will actually replace your first one. Your first transaction could still be mined first, invalidating your second transaction. Choosing to replace a transaction with a new one could lead to more confusion, headaches, and pending ETH, or ETH spent unnecessarily in the form of gas. This is especially true if your first transaction is mined anyways, which is possible.
</p>


#### Canceling a Transaction

<p id="cat_p">
  <b>Canceling</b> means generating a <code>0 ETH</code> transaction to <code>Your Own Address</code> with the purpose of preventing a previous transaction from "going through" / "being mined" / "being included in the blockchain" / "being stuck"
</p>

<ol>
  <li id="cat_l1">
    Go to <a href="https://www.myetherwallet.com/#check-tx-status" target="_blank">https://www.myetherwallet.com/#check-tx-status</a>
  </li>
  <li>
    <p id="cat_l2_p">Paste your TX hash.</p>
    <ul>
      <li id="cat_l2_l1">If it says pending, you can cancel it</li>
      <li id="cat_l2_l2">If it says not found, click the button again, waiting a few seconds between each click. This will poll different nodes. If that doesn't work, change the network in the top-right corner to Etherscan, Infura, MyEtherWallet, and Giveth and check for the TX hash each time you switch.</li>
      <li id="cat_l2_l3">If it says found, you cannot cancel it.</li>
    </ul>
  </li>
  <li id="cat_l3">
    If it says pending, unlock the wallet you used to send the original transaction.
  </li>
  <li id="cat_l4">
    Don't change any fields. These are already filled in for you. If you change something, it will not work as intended, bad things could happen, and you have no one to blame but yourself.
  </li>
  <li id="cat_l5">
    Click the <code>Send Transaction</code> Button.
  </li>
  <li id="cat_l6">
    A dialog will appear. Click the "Yes, I'm Sure" button to send.
  </li>
  <li id="cat_l7">
    A new <code>TX Hash</code> will appear in the green bar across the bottom. Click the link to view it and see if you were successful. If it doesn't show up immediately, stop. Breath. Count to 20. <em>Then</em> click refresh.
  </li>
</ol>


#### Replacing a Transaction (Advanced Users Only)

<p id="ratauo_p1">
  <b>Replacing</b>: Generating a <code>XX  ETH</code> transaction to <code>Someone Else's Address</code> with the purpose of doing something (e.g. sending, revealing an ENS bid) <em>while simultaneously</em> not having a previous transaction go through.
</p>

<ol>
  <li id="ratauo_l1">
    Unlock the wallet you used to send the original transaction.
  </li>
  <li id="ratauo_l2">
    <b>To Address:</b> Replace the address with whatever address you wish to send to.
  </li>
  <li id="ratauo_l3">
    <b>Amount:</b> Change from <code>0</code> to the amount of ETH you wish to send.
  </li>
  <li id="ratauo_l4">
    <b>Gas Limit:</b> If sending a standard ETH transaction, you can use <code>21000</code>. Sending tokens is ~<code>200000</code>. Otherwise, just leave as is.
  </li>
  <li id="ratauo_l5">
    <b>Gas Price:</b> This field is already pre-filled  with <code>Gas Price of Previous Transaction</code> + <code>10 GWEI</code>. Leave as is, unless this is super super duper urgent, then you may choose to raise it. Keep in mind, the higher the gas price, the higher the TX fee (<code>Gas Limit</code> * <code>Gas Price</code>). Be careful!
  </li>
  <li id="ratauo_l6">
    <b>Nonce:</b> Leave as is. If you change this, it will not replace the transaction you are hoping it will replace.
  </li>
  <li id="ratauo_l7">
    Click the <code>Send Transaction</code> Button.
  </li>
  <li id="ratauo_l8">
    A dialog will appear. Carefully review all information displayed. Click the "Yes, I'm Sure" button to send.
  </li>
  <li id="ratauo_l9">
    A new <code>TX Hash</code> will appear in the green bar across the bottom. Click the link to view it and see if you were successful. If it doesn't show up immediately, stop. Breath. Count to 20. <em>Then</em> click refresh.
  </li>
</ol>

### Final Notes

<ul>
  <li id="fn_l1">
    The TX fee is is NOT paid to us—it is paid to the miners for including your transaction in a block. We are still a free, open-source service.
  </li>
  <li id="fn_l2">
    The TX pool varies from node to node. This means that a TX may be pending in <code>ETH (Infura.io)</code>'s txpool, but <em>not</em> <code>ETH (MyEtherWallet)</code>'s txpool. For this reason, you should try all three nodes we offer.
  </li>
  <li id="fn_l3">
    If possible, use the same computer / browser that you used to send the transaction. We are working on further mitigating internal differences between our 10 nodes and their 10 txpools. For now, using the same computer / browser will increase liklihood you connect to the same as before if you are using the <code>ETH (MyEtherWallet)</code> node.
  </li>
</ul>

### Related Articles

<ul>
  <li id="ra_l1">
    <a href="https://kb.myetherwallet.com/gas/what-is-gas-ethereum.html" target="_blank">
      You can learn more about gas & gas limit vs gas price here.
    </a>
  </li>
  <li id="ra_l2">
    <a href="https://kb.myetherwallet.com/transactions/what-is-nonce.html" target="_blank">
      You can learn more about nonce here
    </a>
  </li>
</ul>
