{
"title"       : "Balances not loading or showing on MyEtherWallet",
"sort"        : "02",
"category"    : "FAQ",
"description" : "FAQ",
"date_published" : "2017-06-20T08:00:00+08:00",
"date_modified"  : "2017-11-11T08:00:00+08:00"
}

---%


This is most likely due to the fact that you are behind a firewall, you have refreshed the page a bunch of times and hit your hourly-API-limit, or our nodes are under extreme strain and are refusing to return your balance information.

The easiest way to check your balance is actually not by unlocking your wallet. You only need your address in order to see your balance. It is not recommended that you enter your private key anywhere if you just want to check on the balance or see incoming / outgoing transactions. Instead...

#### ETH

[https://etherscan.io/](https://etherscan.io/). Paste your address into the search bar and it will pull up your address and transaction history.

#### Tokens

[https://ethplorer.io/](https://ethplorer.io/) allows you to easily see token balances and transfers.

You can also see all tokens on https://etherscan.io/ now. Your balances are in the dropdown in the header section thingy. Your transfers can be viewed on the ["Token Transfers"](https://etherscan.io/address/0x7cb57b5a97eabe94205c07890be4c1ad31e486a8#tokentxns) tab.

#### ETC

[https://gastracker.io/](https://gastracker.io/). Paste your address into the search bar and it will pull up your address and transaction history.



### If you need to send some tokens and they aren't loading, here are some things you can try to troubleshoot:

1. Hard refresh the page. On Chrome on OSX you hit `cmd`+`shift`+`r`. On a PC, I assume it is `ctrl`+`shift`+`r`.

2. Check your internet / firewall.

3. Try connecting to a different network in the top-right corner. Choosing one that you are not currently connected to may solve your problem. If you are interacting with the Ethereum blockchain, you have four nodes to choose from:

  *    MyEtherWallet
  *    Etherscan.io
  *    Infura.io
  *    Giveth.io



