{
"title"       : "What is Gas?",
"sort"        : "02",
"category"    : "Gas & Transaction Fees",
"description" : "Gas & Transaction Fees",
"date_published" : "2017-07-05T08:00:00+08:00",
"date_modified"  : "2017-09-26T08:00:00+08:00"
}

---%


![](../images/tx_pool_infographic.png)

### Introduction

Ethereum is the network, also known as the blockchain. Ether (ETH) is the fuel for that network. When you send tokens, interact with a contract, send ETH, or do anything else on the blockchain, you must pay for that computation. That payment is calculated in `Gas` and gas is paid in `ETH`.

You are paying for the *computation*, regardless of whether your transaction succeeds or fails. Even if it fails, the miners must validate and execute your transaction *(compute)* and therefore you must pay for that computation just like you would pay for a successful transaction.

You can see your TX fee (`gas limit` * `gas price`) in ETH & USD when you search for your transaction on [etherscan.io](https://etherscan.io/tx/0x9f5080adb96fc251fb87387ec4a1f77506cb59e14ef1d87d3a018a0cd41a9eeb). This is not a TX  fee that MyEtherWallet, or any other service provider, receives. This fee is paid to miners for mining transactions, putting them into blocks, and securing the blockchain.


### Overview

**When you hear `gas`, the person is either talking about:**

*   Gas Limit
*   Gas Price

The total cost of a transaction (the "TX fee") is the `Gas Limit` * `Gas Price`.

Typically, if someone just says "Gas", they are talking about the "Gas Limit".

##### Analogy Time!

You can think of the `gas limit` like the amount of liters/gallons/units of gas for a car. You can think of the `gas price` as the cost of that liter/gallon/unit of gas.

- With a car, it's `$2.50 (price)` per `gallon (unit)`.
- With Ethereum, it's `20 GWEI (price)` per `gas (unit)`.

To fill up your "tank", it takes...
- `10 gallons` at `$2.50` = `$25`
- `21000 units of gas` at `20 GWEI` = `0.00042 ETH`.

Therefore, the total TX fee will be 0.00042 Ether.

Sending tokens will typically take `~50000` gas to `~100000` gas, so the total TX fee increases to `0.001 ETH - 0.002 ETH`.

[You can use our tool to calculate GWEI <-> WEI <-> USD here](https://www.myetherwallet.com/helpers.html), which can be helpful when you want to know your TX fee in ETH, rather than GWEI.


### Gas Limit

The `gas limit` is called the limit because it's the maximum amount of units of gas you are willing to spend on a transaction. This avoids situations where there is an error somewhere in the contract, and you spend 1 ETH....10 ETH....1000 ETH..... going in circles but arriving no where.

However, the units of gas necessary for a transaction are already defined by how much code is executed on the blockchain. If you do not want to spend as much on gas, lowering the gas limit won't help much. You must include enough gas to cover the computational resources you use or your transaction will fail due to an `Out of Gas` Error.

All unused gas is refunded to you at the end of a transaction. So if you go to MyEtherWallet, send 1 ETH to our donation address ( ? ), and use a gas limit of 400000 you will receive 400000 - 21000\* back.  However, if you were sending 1 ETH to a contract and your transaction to the contract fails (say, the Token Creation Period is already over), you will use the entire 400000 and receive nothing back.

\*21000 is the gas limit for standard transactions


### Gas Price

If you want to spend less on a transaction, you can do so by lowering the amount you pay per unit of gas. The price you pay for each unit increases or decreases how quickly your transaction will be mined.

**During normal times:**

*   40 GWEI Gas Price will almost always get you into the next block.
*   20 GWEI will usually get you within the next few blocks.
*   2 GWEI will usually get you within the next few minutes.

**During Token Creation Periods, these costs go crazy due to supply / demand:**

* 50 GWEI is the `max gas price` most new Token Creation Period contracts will accept. Anything above that and your TX will fail. Most is the keyword here—check with the Token Creation Period you wish to invest in *before* said Token Creation Period begins.

* 50 GWEI would be the amount you should send in that case.

* If you are trying to send *during* an Token Creation Period (but not *to* the Token Creation) you have 2 choices: wait a bit until the Token Creation Period is over, or increase the gas price over 50 GWEI.

You can adjust the gas price on MyEtherWallet in the footer via the slider. It is capped at 50 GWEI in order to prevent people tying to send to Token Creation Periods from having all their transactions fail because they don't read anything.

[⚠ Advanced Users Only Who Want To Go 50 GWEI+ can see how here](http://i.imgur.com/47zmU0R.gif)


### Will increasing the gas price get it mined faster? Does setting a low gas price mean it won't ever be mined?

The transaction fees go to the miner who mines your block. When miners mine a block, they have to decide which transactions to include. They can choose to include no transactions, or they can choose to randomly select transactions. In order to encourage miners to include transactions in blocks you want to set a "Gas Price" that is high enough to make them _want_ to include it (since it is entirely up to them).

_Most_ miners follow a very simple strategy for inclusion. They include transactions they received sorted from highest Gas Price to lowest, then include them until either the block is full or they reach one that has a Gas Price set lower than they are willing to bother with.

You want to set the Gas Price high enough so that a miner includes your transaction in a block. If you are in a hurry, you can set the Gas Price higher, so that you jump ahead of everyone in line. If you are not in a hurry, you just need to set a number high enough so that someone eventually includes your transaction.


### Why should I set a low Gas Price?

Because it's cheaper and because with the increasing price of ETH compared to USD, a transaction that used to cost half a cent, may cost a few cents. More expensive transactions, like bidding on an ENS name, can now cost a dollar or more! As a user, you should try sending non-urgent transactions with a lower gas price as the more transactions that occur at the lower gas price, the more likely miners will lower their minimums.


### Should I increase the gas limit for token sales, though?

You should put whatever the token sale holders tell you to put. If you do not know, then ask, **before the token sale**. This ensures that your transaction won't fail due to an "Out of Gas" error. Typically, a 200000 gas limit will be enough, but some require more.

**Increasing the amount to 1 500 000 or more will **not** increase the likelihood of getting in. All it will do is fill up the blocks faster and you will lose that TX fee if it doesn't go through. We have never seen a token sale that requires over a 800 000 gas limit.**


### So I should send with a hugeeeeeeeee gas price for token sales, right?

Not necessarily. The risk in increasing it is that you could still not get in, and pay the fee anyways. The gas will NOT be returned to you if you send with a too-low gas limit, too early, or too late in the Token Creation Period.

First, see if the token sale has a max gas price. If they do, use that as the gas price. Both Status and Bancor had a max gas of 50 GWEI.

If they let you send with any amount of gas price, you should decide how much you are will to invest, and how much you are willing to spend on that attempt to invest. **You must assume that you will pay the full fee and get nothing in return during Token Creation Periods.** Take the gas limit (e.g. 200000), multiply by the gas price (e.g. 50 GWEI or 0.00000005 ETH) and that is how much you will pay for your attempt to get in.

Before the BAT Token Creation Period, the average gas price was 20 GWEI (the default) for Token Creation Periods. Now it's who-the-fuck-even-knows:

* 40 GWEI * 200000 == 0.008 ETH == $5.60 USD
* 70 GWEI * 200000 == 0.014 ETH == $9.80 USD
* 100 GWEI * 200000 == 0.02 ETH == $14.00 USD

##### Absurd Gas Prices From the BAT Token Creation Period (USD prices at time of TX)

* 118 GWEI * 200000 == 0.0236 ETH == $6.13 USD
* 7590 GWEI * 200000 == 1.518 ETH == $394.68 USD
* 58000 GWEI * 200000 == 11.6 ETH == $3,016 USD

![](https://s3.amazonaws.com/groovehq/uploaded/9m3i4qusym67q6jpgyfibnlnmxslyj0hgs79waizcmsva9u5un?1496991455)

That's right. Someone paid $6000+ to send a failed transaction. Ouch, indeed.


### Where can I see what miners are accepting?

Start here: [http://ethgasstation.info/](http://ethgasstation.info/)

(At the time of this writing) Below 20 GWEI the blocks are almost all full, which means if you set lower than that you'll have to wait in line with everyone else.

A very awesome miner, miningpoolhub, accepts a 2 GWEI price, but their blocks are always full and they only account for 9% of mining which means about 1 in every 10 blocks (~150 seconds) will accept transactions with 2 GWUI gas price and when it does it is full so you may have to wait for a few of those.

[http://ethgasstation.info/calculator.php](http://ethgasstation.info/calculator.php) will let you estimate how long it will be before your transaction is accepted at a certain gas price.

### Related
*   [What is gas (StackExchange)](https://ethereum.stackexchange.com/questions/3/what-is-gas-and-transaction-fee-in-ethereum)
*   [What is gas? (CryptoCompare)](https://www.cryptocompare.com/coins/guides/what-is-the-gas-in-ethereum/)
*   [Can someone explain gas to me?](https://www.reddit.com/r/ethereum/comments/271qdz/can_someone_explain_the_concept_of_gas_in_ethereum/)
*   [I don't understand the concept of gas.
    ](https://www.reddit.com/r/ethereum/comments/3fnpr1/can_someone_possibly_explain_the_concept_of/)

### Sources
Thank you to Veen for the art, /u/MicahZoltu random slack diatribe on gas, and various redditors who have commented on gas over the years for this post. Very little of this is our original content. It is heaps of peoples comments and information, cleaned up and organized over the past year.
