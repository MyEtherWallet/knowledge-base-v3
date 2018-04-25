{
"title"       : "How To Make An Offline Transaction",
"sort"        : "06",
"category"    : "Offline",
"description" : "Offline",
"date_published" : "2017-07-05T08:00:00+08:00",
"date_modified"  : "2018-01-05T08:00:00+08:00"
}

---%

If you are [using MyEtherWallet offline and locally](https://myetherwallet.github.io/knowledge-base/offline/running-myetherwallet-locally.html), it is not possible to send transactions from the offline computer. To send or broadcast a transaction an internet connection is required. To do this, you should use a **second** computer, that does have an internet connection. This has the advantage that your private key never leaves the offline computer and malware won't be able to steal your private key.

### 1. Getting the gas price & nonce
Start off by going to the ["Offline Transaction" page](https://www.myetherwallet.com/#offline-transaction) on your **online** computer and fill in your address. Please note that this is the address you want to send FROM, not TO. This will generate the gas price and nonce for the transaction. You can read more about gas [here](https://myetherwallet.github.io/knowledge-base/gas/what-is-gas-ethereum.html) and about what a nonce is [here](https://myetherwallet.github.io/knowledge-base/transactions/what-is-nonce.html).

### 2. Filling in the transaction information
Next, go to your offline computer, open MyEtherWallet and go to the "Offline Transaction" page again. Fill in the TO address and the amount you want to send. Optionally, you can select a token to send from the list. Fill in the gas price and nonce you got from step 1. If you fill in an incorrect nonce, the transaction will fail!

If you just want to send a transaction to another address (not a contract) leave the gas limit at 21,000. Increasing the gas limit will **not** get your transaction verified faster, as you can read [here](https://myetherwallet.github.io/knowledge-base/gas/what-is-gas-ethereum.html). If you are sending a transaction to a contract or including any additional data you have to use more gas. Any excess gas will be returned to you. If you want to include data with your transaction, also fill that in now. Unless you are specifically told to include data, you will likely not need it.

### 3. Signing the transaction
The next step is to sign the transaction. This is the part that requires your private key. To do this, you have to unlock your wallet on the offline computer. On the "Offline Transaction" page, scroll down and access your wallet. A Generate Transaction button should appear. Make sure that all transaction information is correct and press the button. You should now see the raw transaction and the signed transaction.

### 4. Sending the transaction
Finally, copy the signed transaction to your **online** computer. After signing a transaction, it is not possible to change any information of that transaction anymore, so it is safe to copy it to another computer.  Click the "Send Transaction" button and your transaction should be broadcast.
