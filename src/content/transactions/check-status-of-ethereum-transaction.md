{
"title"       : "Checking or Replacing a TX After it's Been Sent",
"sort"        : "10",
"category"    : "Transactions",
"description" : "Transactions"
}

---%


### How can I check on the status of my transaction?

- [Etherscan's Pending Transactions](https://etherscan.io/txsPending)

- [Our Check TX Status](https://www.myetherwallet.com/#check-tx-status)

- Our Check TX Status Page via TX hash: https://www.myetherwallet.com/?txHash=0x04f6ab30d52a6fa2551b41aafedc531aa8ead1ed145a6f748328df1855a40e63#check-tx-status


### Can I cancel, override, overwrite, replace, or do anything once a transaction has been sent?

**99.9999999999999999% of the time the answer is NO.**

Once a transaction has been mined and is included in a block on the blockchain, it cannot be canceled or replaced.

During times of normal volume, transactions are mined within seconds and do not spend any length of time in the transaction pool. There is simply not enough time to cancel or replace or override a transaction once it has been sent.

**However....**

During times of extremely high volume (like we've seen during the Bancor and Status Token Contribution periods), transactions could be pending for hours, if not days, before being mined.

During these times it is theoretically possible to replace an existing transaction with a new transaction with a higher gas price.

The second transaction, theoretically, will be mined before the first transaction, effectively "canceling" the first transaction.

The easiest way to do this is by sending a `0 ETH` transaction to `your own address` with the same nonce and higher gas price. This will "cancel" your first transaction.

There is no guarantee this will work, nor that it will work every time. This tool is very, very new. Please use at your own risk.

---

##### Do not take this article or features on MyEtherWallet as an indication that you can cancel a transaction you accidentally sent to the wrong address, or get your ETH back once it has been sent.

##### It is **only** regarding finding, checking, and potentially replacing transactions that have been stuck in the transaction pool for very long period of time.

---

### How to Check the Status of a Transaction

1. Go to our [Check TX Status](https://www.myetherwallet.com/#check-tx-status) Page

2. Copy & paste the transaction hash into the field provided.

3. Click the `Check TX Status` button.

4. Details will appear depending on the state of the transaction. It could be...

    - **Transaction Found:** Your transaction was successfully mined and is on the blockchain. Click the link provided.
        - If you see a red ( ! ) symbol, or a "BAD INSTRUCTION" or "OUT OF GAS" error message, it means that the transaction was not successfully *sent*. You cannot cancel or replace this transaction. Instead, send a new transaction. If you received an "Out of Gas" error, you should double the gas limit you specified originally.
        - If you do not see any errors, your transaction was successfully sent. Your ETH or Tokens are where you sent them. If this balance has not been credited to your hosted wallet or exchange account ~24 hours after sending, please [contact that service](https://myetherwallet.github.io/knowledge-base/i-have-a-question-but-its-not-about-myetherwallet-dot-com-what-do-i-do). Send them the *link* to your transaction and ask them, nicely, to look into your situation.

    - **Transaction Not Found:** This transaction cannot be found in the TX Pool of the node you are connected to. However, it could be in a different TX Pool, waiting to be mined. Please use the dropdown in the upper-right to select a different ETH node (e.g. `ETH (Etherscan.io)` or `ETH (Infura.io)` or `ETH (MyEtherWallet)`) and check again.

    - **Pending Transaction Found:** Your transaction was located in the TX Pool of the node you are connected to. It is currently pending (waiting to be mined). There is a chance you can cancel or replace this transaction.



### "Replacing" vs "Canceling" Transactions

- **Canceling**: Generating a `0 ETH` transaction to `Your Own Address` with the purpose of preventing a previous transaction from "going through" / "being mined" / being included in the blockchain.

- **Replacing**: Generating a `XX  ETH` transaction to `Someone Else's Address` with the purpose of doing something (e.g. sending, revealing an ENS bid) *while simultaneously* not having a previous transaction go through.

The reason we recommend `Canceling` over  `Replacing` is that it is not guaranteed your second transaction will actually replace your first one. Your first transaction could still be mined first, invalidating your second transaction. Choosing to replace a transaction with a new one could lead to more confusion, headaches, and pending ETH, or ETH spent unnecessarily in the form of gas. This is especially true if your first transaction is mined anyways, which is possible.


#### Canceling a Transaction

**Canceling**: Generating a `0 ETH` transaction to `Your Own Address` with the purpose of preventing a previous transaction from "going through" / "being mined" / being included in the blockchain.

1. Unlock the wallet you used to send the original transaction.

2. Don't change any fields. These are already filled in for you. If you change something, it will not work as intended, bad things could happen, and you have no one to blame but yourself.

3. Click the `Send Transaction` Button.

4. A dialog will appear. Click the "Yes, I'm Sure" button to send.

5. A new `TX Hash` will appear in the green bar across the bottom. Click the link to view it and see if you were successful. If it doesn't show up immediately, stop. Breath. Count to 20. *Then* click refresh.

#### Replacing a Transaction (Advanced Users Only)

**Replacing**: Generating a `XX  ETH` transaction to `Someone Else's Address` with the purpose of doing something (e.g. sending, revealing an ENS bid) *while simultaneously* not having a previous transaction go through.

1. Unlock the wallet you used to send the original transaction.

2. **To Address:** Replace the address with whatever address you wish to send to.

3. **Amount:** Change from `0` to the amount of ETH you wish to send.

4. **Gas Limit:** If sending a standard ETH transaction, you can use `21000`. Sending tokens is ~`200000`. Otherwise, just leave as is.

5. **Gas Price:** This field is already pre-filled  with `Gas Price of Previous Transaction` + `10 GWEI`. Leave as is, unless this is super super duper urgent, then you may choose to raise it. Keep in mind, the higher the gas price, the higher the TX fee (`Gas Limit` * `Gas Price`). Be careful!

6. **Nonce:** Leave as is. If you change this, it will not replace the transaction you are hoping it will replace.

7. Click the `Send Transaction` Button.

8. A dialog will appear. Carefully review all information displayed. Click the "Yes, I'm Sure" button to send.

9. A new `TX Hash` will appear in the green bar across the bottom. Click the link to view it and see if you were successful. If it doesn't show up immediately, stop. Breath. Count to 20. *Then* click refresh.



### Final Notes

- The TX fee is is NOT paid to us—it is paid to the miners for including your transaction in a block. We are still a free, open-source service.

- The TX pool varies from node to node. This means that a TX may be pending in `ETH (Infura.io)`'s txpool, but *not* `ETH (MyEtherWallet)`'s txpool. For this reason, you should try all three nodes we offer.

- If possible, use the same computer / browser that you used to send the transaction. We are working on further mitigating internal differences between our 10 nodes and their 10 txpools. For now, using the same computer / browser will increase liklihood you connect to the same as before if you are using the `ETH (MyEtherWallet)` node.


### Related Articles

- [You can learn more about gas & gas limit vs gas price here.](https://myetherwallet.github.io/knowledge-base/what-is-gas)

- [You can learn more about nonce here](https://myetherwallet.github.io/knowledge-base/what-is-nonce)

