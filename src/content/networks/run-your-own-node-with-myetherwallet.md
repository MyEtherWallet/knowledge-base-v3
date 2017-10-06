{
"title"       : "Running MyEtherWallet w/ your own, personal node",
"sort"        : "8",
"category"    : "Networks",
"description" : "Networks"
}

---%


You can use MyEtherWallet to connect to your own node. This decouples the frontend and features that you love about MEW from our backend infrastructure. This means more nodes send more transactions and is closer to the decentralized nature of Ethereum. It also means that you fully control the entire process and don't rely on us.

### Warning

When connecting to your own node, please do not have any accounts in that node. Meaning: do not do things like `geth account add` or store your private keys in the geth keystore folder.

You will be using MEW to sign and then broadcast the TXs via your node. You will not using your node to sign and send. [If you do not heed this warning, bad things *could* happen if another setting gets changed. Here's one.](https://www.reddit.com/r/ethereum/comments/3itz1f/insecurely_configured_geth_with_no_firewall_and/). Better safe than sorry.


### Specifics to Connect To Your Local Node

##### [First, download and run MEW locally.](https://myetherwallet.groovehq.com/knowledge_base/topics/how-do-i-run-myetherwallet-dot-com-offline-slash-locally)

* You must run MyEtherWallet locally. This is due to the fact that our SSL website won't connect to your non-SSL local node.

#####  Run geth or parity with correct flags

  *   Geth: `geth --syncmode=light  --rpc --rpccorsdomain "null" --keystore "dont_put_secret_files_here_ever"`

  *   Parity: `parity --rpccorsdomain "null" --keys-path "dont_put_secret_files_here_ever"`

##### Connect to your node

*  Open `index.html` from the MEW release you downloaded in your browser.

* In upper right corner there is a node switcher. Here is where you can select which node / chain you are connected to.

*  Click it & choose `Add Custom Node`

*   Enter a `name` for your node

*   URL: `http://127.0.0.1`

*   Port: `8545`

*   Select the chain. This is for some frontend features, like default tokens and ENS addresses and more. See above for more details.

* Click "Save & Use Custom Node"

* This should immediately connect or an error message will display.

* Go to https://www.myetherwallet.com/#view-wallet-info and unlock via "View with Address Only"

* Verify balances are loading correctly.



### Hosted Node

* Make sure your node is SSL

#####  Run geth or parity with correct flags

* Geth: `geth --datadir eth-mainnet --syncmode=light --rpcaddr "localhost" --rpc  --rpccorsdomain="https://www.myetherwallet.com/" --unlock 1 console`

##### Connect to your Node Hosted Somewhere

* Go to `https://www.myetherwallet.com/` or your local `index.html` in the MEW folder

* In upper right corner there is a node switcher. Here is where you can select which node / chain you are connected to.

*  Click it & choose `Add Custom Node`

*   Enter a `name` for your node

*   Enter the `URL`

*   Enter the `port`

*   Select the chain. This is for some frontend features, like default tokens and ENS addresses and more.

    *   ETH: Shows default ETH tokens, EIP-155=true, chainid=1, uses etherscan.io for links to addresses and txs.

    *   ETC: Shows default ETC tokens (none...yet?), EIP-155=false, chainid=false, uses gastracker.io for links to addresses and txs.

    *   Ropsten / Kovan / Rinkeby: Shows default testnet tokens, EIP-155=true, chainid=3/?/?, uses testnet.etherscan.io for links to addresses and txs.

    *   Custom: Allows you to select whether EIP-155 is true or false, and provide a chainid if it's true.

* Click "Save & Use Custom Node"

* This should immediately connect or an error message will display.

* If no errors, go to https://www.myetherwallet.com/#view-wallet-info and unlock via "View with Address Only"

* Verify balances are loading correctly.


### Requirements

The URL must have an SSL certificate (aka be https://). You can get a free SSL certificate via [LetsEncrypt](https://letsencrypt.org/) very quickly.

If you node is local, it's much easier to simply also run MyEtherWallet locally. [Download the latest version of MyEtherWallet here](https://github.com/kvhnuke/etherwallet/releases/latest).


If you wish to run MEW locally + hardware wallet, you will need to have a self-signed certificate in order to connect to your hardware wallet via U2F. Browsers that support U2F require that these calls take place over SSL. This is not something we have control of.

- [One way to do this is detailed here](https://github.com/benjaminion/eth-parity-qnap/wiki/Connecting-to-MyEtherWallet)

### Whoa, back up. How do I even run a node?

[WIP]

#### Parity

* https://github.com/paritytech/parity/wiki/Getting-Synced

* https://github.com/paritytech/parity/releases

#### Geth
