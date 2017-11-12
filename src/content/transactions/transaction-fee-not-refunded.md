{
"title"       : "Transaction Failed - TX Fee not Refunded",
"sort"        : "08",
"category"    : "Transactions",
"description" : "Transactions",
"date_published" : "2017-07-05T08:00:00+08:00",
"date_modified"  : "2017-09-26T08:00:00+08:00"
}

---%


*"Why didn't I get my transaction fee (TX Fee) back even though my transaction failed?"*

**Ethereum is the network—the blockchain. Ether (ETH) is the fuel for that network. When you send tokens, interact with a contract, send ETH, or do anything else on the blockchain, you must pay for that computation. That payment is calculated in `Gas` and gas is paid in `ETH`.**

You are paying for the *computation*, regardless of whether your transaction succeeds or fails. Even if it fails, the miners must validate and execute your transaction *(compute)* and therefore you must pay for that computation just like you would pay for a successful transaction.

You can see your TX fee (`gas limit` * `gas price`) in ETH & USD when you search for your transaction on [etherscan.io](https://etherscan.io/tx/0x9f5080adb96fc251fb87387ec4a1f77506cb59e14ef1d87d3a018a0cd41a9eeb).

This is **not** a TX  fee that MyEtherWallet, or any other service provider, receives. This fee is paid to miners for mining transactions, putting them into blocks, and securing the blockchain.
