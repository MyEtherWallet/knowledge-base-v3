{
"title"       : "Balances not loading or showing on MyEtherWallet",
"sort"        : "2",
"category"    : "FAQ",
"description" : "FAQ",
"date_published" : "2017-06-20T08:00:00+08:00",
"date_modified"  : "2017-06-20T08:00:00+08:00"
}

---%


This is most likely due to the fact that you are behind a firewall, you have refreshed the page a bunch of times and hit your hourly-API-limit, or our nodes are under extreme strain and are refusing to return your balance information.

Here are some things you can try to troubleshoot:

1. Hard refresh the page. On Chrome on OSX you hit `cmd`+`shift`+`r`. On a PC, I assume it is `ctrl`+`shift`+`r`.

2. Check your internet / firewall.

3. Try connecting to a different network in the top-right corner. If you are interacting with the Ethereum blockchain, you have three nodes to choose from:

  *    MyEtherWallet
  *    Etherscan.io
  *    Infura.io


Choosing one that you are not currently connected to may solve your problem.
