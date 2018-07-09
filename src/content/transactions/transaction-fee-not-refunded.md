{
"title"       : "Transaction Failed - TX Fee not Refunded",
"sort"        : "08",
"category"    : "Transactions",
"description" : "Transactions",
"date_published" : "2017-07-05T08:00:00+08:00",
"date_modified"  : "2017-09-26T08:00:00+08:00"
}

---%


<em id="tftfnr_em">
  "Why didn't I get my transaction fee (TX Fee) back even though my transaction failed?"
</em>

<b id="tftfnr_b">
  Ethereum is the network—the blockchain. Ether (ETH) is the fuel for that network. When you send tokens, interact with a contract, send ETH, or do anything else on the blockchain, you must pay for that computation. That payment is calculated in <code>Gas</code> and gas is paid in <code>ETH</code>.
</b>

<p id="tftfnr_p1">
  You are paying for the <em>computation</em>, regardless of whether your transaction succeeds or fails. Even if it fails, the miners must validate and execute your transaction <em>(compute)</em> and therefore you must pay for that computation just like you would pay for a successful transaction.
</p>

<p id="tftfnr_p2">
  You can see your TX fee (<code>gas limit</code> * <code>gas price</code>) in ETH & USD when you search for your transaction on <a href="https://etherscan.io/tx/0x9f5080adb96fc251fb87387ec4a1f77506cb59e14ef1d87d3a018a0cd41a9eeb" target="_blank">etherscan.io</a>.
</p>

<p id="tftfnr_p3">
  This is <b>not</b> a TX  fee that MyEtherWallet, or any other service provider, receives. This fee is paid to miners for mining transactions, putting them into blocks, and securing the blockchain.
</p>
