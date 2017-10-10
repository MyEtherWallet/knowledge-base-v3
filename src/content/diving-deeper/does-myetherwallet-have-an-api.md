{
"title"       : "Does MyEtherWallet have an API?",
"sort"        : "20",
"category"    : "Diving Deeper",
"description" : "Diving Deeper"
}

---%


We do, it's just not widely promoted as we go down sometimes and have some outstanding items we would like to clean up (like being 100% consistent with Etherscan and Infura).

Here are the API docs for MEW, Etherscan, and Infura (the three main providers of public nodes):

- [http://www.myetherapi.com/](http://www.myetherapi.com/)
- [https://infura.io/#how-to](https://infura.io/#how-to)
- [https://etherscan.io/apis](https://etherscan.io/apis)

Our backend infrastructure is on AWS and you can actually do it yourself and run your own public or private node via these instructions: [https://github.com/MyEtherWallet/docker-geth-lb](https://github.com/MyEtherWallet/docker-geth-lb)

Or you could pay a small fee and use [QuikNode](https://quiknode.io/) which makes it even easier.

For both of these options you could also connect to your new node via the "Add Custom Node" option in the network selector in the top-right corner. [Further details on how to connect to your own node can be found here.](https://myetherwallet.github.io/knowledge-base/how-can-i-connect-to-a-custom-node)

Or API directly to it (see the docs in the above APIs.)

FWIW, the calls we make are JSON-RPC, not REST but I'm not versed enough to know if that makes a difference?
