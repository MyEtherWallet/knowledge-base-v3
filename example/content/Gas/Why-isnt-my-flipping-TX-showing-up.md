/*
Title: Why Isn't My TX Showing Up!!!
Sort: 2
*/

> *"You know what...I know what Ethereum will be perfect for! Okay everyone, you have 10 seconds to collectively send us all your ETH in 3...2...1...GO!"*


![](https://s3.amazonaws.com/groovehq/uploaded/2mn0bune17r6qlh8s44yj5e6l68g6bl83s5zfm08mwsis5q1z4?1498542636)

---

So your transaction isn't showing up on the blockchain. :( I've been there. It sucks. I'm sorry.

### Let's start at the basics. Here is how blockchains work:
* First, you decide you want to send a TX.
* You go to your service. Say, MyEtherWallet.com.
* It generates the SIGNED TX.
* You press that SEND BUTTON.
* The browser with the MyEtherWallet.com code takes your SIGNED TX and sends it to our fat pile of servers
* The server gets your TX and
* (1) Makes sure you aren't a crazy Russian trying to DDOS us and then
* (2) Shoots your SIGNED TX off to the node
* When you see that green message that says "your TX has been broadcast", that is a success message from the node telling you that your TX was broadcast
* It means exactly that: IT HAS BROADCAST YOUR TX

### But guess what? The party isn't over yet. This does NOT mean you have sent your ETH.
* Broadcasting means is that our node BROADCAST your TX to ALL THE OTHER NODES
* Now your TX is the in TX POOL
* With ALL the other TXs just like it. It's a fucking pool party of SIGNED TXs.
* All the nodes share all these TXs with each other
* FROM EVERYWHERE
* Like Shapeshift, and Bittrex, and mining reward payouts, and people using their own clients, like Mist, Parity, or geth.
* All the miners are sitting around looking at this pool party
* And they pick TXs from this pool
* They say "I want this one and this one and this one"
* Different miners pick based on different things. Some say "I only want TXs with a gas price over 40 GWEI"
* And they put that in the block.
* Others will take anything they can get. That's not scandalous. That's generous. They make it so you can send TXs cheaper on normal days.
* When the block is full, it's full. No more can fit.
* That block, made of all the TXs they picked out of the pool, goes into the chain
* *OMG SO THAT"S WHY IT"S CALLED A BLOCKCHAIN!*
* Then your TX is is officially "sent" and you can see it on etherscan.io and stuff


### It can STILL fail here - even if it's on the chain - due to a OUT OF GAS error or BAD INSTRUCTION error.
* (but that's not what's happening right now)
* During normal times, the TX POOL only has a few TXs in it
* BUT, during times like these crazy ICOs, the TX pool is OVERFLOWING with all the TXs.
* It is a really, really, really fat pool party.
* And the blocks cannot fit unlimited TXs
* *(This is the core issue that BTC has been trying to deal with...forever.)*
* *(This is what the bickering is about.)*
* *(THIS IS WHAT IS HAPPENING EVERY DAY ON BITCOIN!)*
* Ethereum is more scalable.
* Which means the block sized isn't fixed. It changes when it notices that the blocks are full
* The blocksize is limited by the amount of gas. You send a TX, it uses 21000 - 300000 gas.
* There is a max block size, too. Last year it was ~3.5M gas. Today it's like 4.5M gas. Basically, it evolves over time.
* The problem is, it can't change from level 1 to level 100 in one second.
* And, of course, the miners *like* full blocks because it means higher transaction fees. (surprise!) And you can't blame them because you're majorly pissed off that you can't fulfill your own greed and get into this ico tornado right now.
* This is why we saw people send with $6,000 USD transaction fees during the BAT token sale
* And $10k USD during BANCOR
* So if you sent a TX and it's not showing up, it's because out of this fat pool party overflowing with TXs....your TX was not attractive enough to get into the cool kids club.
* Sorry, you never made it onto the blockchain.
* And therefore you can't see it on Etherscan.
* And therefore your ETH are still where they started. They never left your account. 


### Are you sure this is how it works? 
* Pretty sure. But if you don't believe me, *please* run your own full node, like Mist, Parity, or Geth. They are all really, really excellent and better than MEW! And you'll learn so much, just like we have while building this crazy network of servers and load balancers and nodes and APIs.
* **This is what we do to try to get as many transactions on chain:**
* In order to prevent our servers from exploding and ensuring they keep functioning, we cannot keep all transactions from all times in the TX pool forever
* The default settings for geth and parity (the clients) keep X,XXX number of transactions for 3 hours
* We take it one step further by upping the number of transactions to XX,XXXX for 6 hours
* We also save all transactions to disk in case one of the nodes crashes. If it does, we rebroadcast the transaction if it still is (1) a valid transactions and (2) hasn't been mined yet
* Your transaction can be overwritten if a valid transaction with higher gas price / limit with the same nonce is added to the TX Pool.
* It can also be lost if all nodes receive your transaction but it gets dropped from a bunch of other nodes. Most nodes have the default settings (remember the X,XXX txs @ 3 hours?) 
* When we rebroadcast, the receiving nodes only receive it if they haven't already received it. So even though a node could have a one-night stand with your TX, if it eventually drops it, it won't pick it back up again.

### So how do I make sure that my transaction gets mined?
* Click the button at the right time. 
* Use 50 GWEI gas (or more if you are not participating in an ICO).
* Tell the miners to help enable a more dynamic max block size
* Tell token sale holders to NOT make you click the button at the right time
* Ask token sale holders what they are doing to give more people the opportunity to participate 
* Force token sale holders to serve you and empower you to get in on their token sale. 
* You are giving them MILLIONS dollars. Think about that. MILLIONS AND MILLIONS.
* Ask questions and to make sure you want to invest.
* Spread the knowledge and start discussions. Don't FUD or FOMO it. Just have normal...thoughtful...considerate conversations. 
* Do your due diligence.
* Ask about the risks. Read the white paper. Study the team. Why is does this team need this many millions? What have they done to deserve your money and trust? What do you get out of it from them? Because these are not securities; you are not getting a % of their company. What is their business plan like? Do they have a plan? Anything? Proof of Concept? 
* Be smart. Invest wisely. Question more. And encourage others to do the same. 


### But most of all....Just get lucky.

[![Get lucky.](http://img.youtube.com/vi/5NV6Rdv1a3I/0.jpg)](http://www.youtube.com/watch?v= 5NV6Rdv1a3I)



Hope this clarifies things a bit. Have a great day!
