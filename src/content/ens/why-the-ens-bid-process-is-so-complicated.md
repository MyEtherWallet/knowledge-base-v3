{
"title"       : "Why the ENS bid process is so complicated",
"sort"        : "18",
"category"    : "ENS",
"description" : "ENS"
}

---%


*This is part of a series where Taylor pull's sweet comments she's made or found over the years in the hopes that they can be useful, searchable, remembered, referenced, and/or aid in the creation of future knowledge base posts. Many are unpolished & contain typos, specific references to previous discussions, and gratuitous cursing. We're sorry.*

---

### Bidding

When you make a bid you are doing a bunch of things and the contract is doing a bunch of things in order to:

1. Start the auction
2. Place your bid
3. Make sure no one else can see *what you bid on* or *how much you bid*. This ensures...
4. ...no one can tell *how many* or *for how much* the bids are for a certain name.

In order to do this on the blockchain, in a decentralized form, the bids and the name you are bidding on must be a secret. Everything on the blockchain is *public*. This is the key part that everyone seems to be misunderstanding:

##### this is a decentralized *blind* auction platform built on a decentralized *public* blockchain!!1!

![](https://media.giphy.com/media/KI9oNS4JBemyI/giphy.gif)

##### How the hell do you keep things a secret when anyone can see anything at any time...but then still do things with the not-secret underlying bits of information...while keeping them a secret?

Well folks, the easiest way is to hash it!

*  Open this: [https://emn178.github.io/online-tools/sha3_512.html](https://emn178.github.io/online-tools/sha3_512.html).
*  Type in `mustbemoney`. You get a hash. Simple.
*  Now if you post `7a17fb39e97afde5df29ca79a6a9d6d52eb485fee7049e8696f14a3c79bd0008d75c9974bb06e1f5886eae41222a32267fe3fb2354f2e2ecc7fa9d3c4f00ecd6` on the blockchain, its very hard for me to figure out that you bid on `mustbemoney`.

Unless of course, *I* type in mustbemoney. Because, then I get the same exact hash.

If you were to bid on mustbemoney, and I were to bid on mustbemoney, anyone could tell that we BOTH bid on mustbemoney.

Same for the *amount of the bid*. If I bid 1 ETH and you bid 1 ETH and they are hashed, it wouldn't take long for an interface, like etherscan.io, to automatically show the actual value instead of the hash.

In order to actually prevent this information from being decrypted manually and to ensure it is kept a secret, the auction mechanism does this rather clever thing. It takes:

1. The name you are bidding on.

2. The amount that you bid.

3. A secret phrase.

4. Your address (the one you sent from).

It then hashes the name and the amount individually. *Then* it combines the entire string and hashes that as well. This piece of information is what is sent with your bid, as seen in the "input data" on any bid transaction link: [https://etherscan.io/tx/0x1c741eb4fe698d5429027fdd6a9d7d87638f27ae0663b43e1f06ef141270dc0f](https://etherscan.io/tx/0x1c741eb4fe698d5429027fdd6a9d7d87638f27ae0663b43e1f06ef141270dc0f)

Now no one, including the contract itself, actually knows what you bid on or how much you bid or anything. Obviously, if we want to ever assign a domain to someone, that information is kind of necessary. Which is were the **reveal** step comes in.

### Revealing

How did we both arrive at the same hash before? We both entered `mustbemoney` and used the same mechanism to create the hash. The reveal process does the same thing.

During the reveal, you send those same bits of information *separately* so that the contract can line up `what you bid`, `who bid` and `for how much you bid`.

In fact, everyone now knows and can verify that you bid 1 ETH on mustbemoney. Both you and I and even a contract on the blockchain can verify that indeed: `1` + `mustbemoney` + `secretphrase` = [`69faf18dd0953d9124d7917234b0efc05c78fd0d9abfc6ffb32d512680fdbb65`]


Still with me? The reveal process is revealing what you bid previously so that the auction itself can determine who won the auction. Without it, well, it would just be a bunch of random shit on a blockchain that had no real meaning.

In order to reveal, you are likely going to use an interface. It's going to ask you to enter your name and the amount and the secret phrase. On MEW, you can type these things in individually or you can copy and paste a string that it gives you when you start an auction. Then you press a button and it sends it off to the blockchain and the contract attempts to match it up to your bid and compare it to other bids.

-

### So why are people having so much trouble with the reveal?

1. They forget which address they bid with and try to reveal from a different address. Even though *you* know that you own address 1 and address 2, the contract, nor anyone else anywhere, does not know that.

2. They forget that the disguise bid is not the actual bid amount. The value of ETH that an account sends has no real bearing on the amount of the bid that is hashed. But people forget this and assume that since they sent 1 ETH, they bid 1 ETH. Those two pieces of information are completely separate entities.

3. They forget what name they bid on. Yup. I wish I was joking, but there's a post around here with a user who did exactly that.

The above are all actually the same problem in different forms. If they don't save *all* the information that they used to bid, they cannot say that `1` + `mustbemoney` + `secretphrase` = [`longhashthing`]. I, nor the contract, no anyone else, can tell that your bid was placed for mustbemoney *or* for 1 ETH. Even if you get 1 or 2 pieces of information correct, it doesn't matter. The bid has 1 hashed string. If you put in 1 wrong piece of information, it will create a different hashed string.

4. Revealing itself can fail due to a variety of reasons. If you sent from the wrong address. If you entered the wrong information. If there was no enough gas. If the miners decided to not include the TX in the block for whatever reason. If you reveal too early. If you reveal too late. Etc.


### How do you not fuck it up?

1. Practice makes perfect. Do it with a little amount on a random name and see how it goes.

2. Save everything. Take a screenshot. Copy and paste stuff into a text document. Email it to yourself. It's not a private key. It shouldn't be posted on reddit, but if it *is* posted on reddit the worst that happens is someone knows what you bid and outbids you.

3. Check things and save those things to. Save your TX hash for your bid, the start of the auction, etc. so that you can reference it later if needed. Make sure there are no errors anywhere. Make sure you have backups of your private keys.

4. Reach out for help. Nick Johnson is pulling an insom and has got his notifiers on for key words and lives on pretty much every channel ever trying to help people resolve their issues. I'm doing my best to keep up with the flow of notifications across all the channels. If you use MEW, please subject line `ENS BID ISSUE` as those emails will go to *my* inbox instead of the support inbox with all the other things we're dealing with.

5. You can also join slack channels or gitter or anywhere else where *other community members* can offer their help in case the one person you are trying to reach out to is not available at that second.

6. Make a note of when the reveal period starts and come back as soon as you can when that period starts to attempt to reveal. That way if something goes wrong, you have as much time as possible to try to solve it. Please, help us help you.

---

##### Originally posted on reddit:

- [https://www.reddit.com/r/ethereum/comments/6b0yak/ens_bids_vanishing/dhjfp75/](https://www.reddit.com/r/ethereum/comments/6b0yak/ens_bids_vanishing/dhjfp75/)

