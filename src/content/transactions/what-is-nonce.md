{
"title"       : "What is Nonce?",
"sort"        : "04",
"category"    : "Transactions",
"description" : "Transactions",
"date_published" : "2017-07-05T08:00:00+08:00",
"date_modified"  : "2017-09-26T08:00:00+08:00"
}

---%


### In Ethereum, every transaction has a `nonce`. The nonce is the `number of transactions sent from a given address.`

Each time you send a transaction, the nonce increases by `1`. There are rules about what transactions are valid transactions and the nonce is used to enforce some of these rules. Specifically:

- **Transactions must be in Order:** You cannot have a transaction with a nonce of `1` mined before one with a nonce of `0`.

- **No Skipping!** You cannot have a transaction with a nonce of `2` mined if you have not already sent transactions with a nonce of `1` and `0`.

### Why?

This field prevents double-spends as the nonce is the order the transactions go in. In order for a double-spend to be "successful", you typically...

 * Send a transaction to one party

 * Wait for it to register

 * Collect something in return from this first transaction

 * Quickly send another transaction with a high gas price

 * Have this second transaction mined first, therefore invalidating the first transaction.

This is why exchanges wait for you to have a certain number of confirmations before allowing you to trade freshly-deposited funds.

### In Ethereum, the above is not possible

In Ethereum, this method of "double-spending" is not possible because each transaction has a nonce included with it. Even if you attempt to do the above, it will not work as the second transaction (nonce of `3`) cannot be mined before the first transaction (nonce of `2`).
