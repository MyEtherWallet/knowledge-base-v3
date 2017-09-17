/*
Title: [ELI5] keypairs, cryptography and encryption
Sort: 2
*/

*This is part of a series where Taylor pull's sweet comments she's made in the hopes that they can be useful, searchable, remembered, referenced, and/or aid in the creation of future knowledge base posts. These are first drafts. Please excuse the typos, unclear statements, specific references to previous discussions or the user, and gratuitous cursing.*

---

The Ledger (and other hardware wallets) are essentially USB sticks but with really really really really really really hardcore software / firmware / hardware that makes it so your key cannot be accessed or moved, even if your computer is compromised. With a regular USB drive, 1337 h4x0r can do crazy shit to get the info from it via hardware alone, watching the read/writes, or simply searching for your private key, mnemonic, or keystore file on the USB drive. Ledger / TREZOR are dedicated devices built to prevent all these types of attacks. 

---

### keypairs & cryptography

The private key (or keystore file or mnemonic or hardware wallet) is basic cryptography in the end; the same cryptography that is used in all sorts of systems that have been around far longer than cryptocurrencies. 

At it's most basic, a `private key` can turn into a `public key` but a `public key` cannot turn into a `private key`. However, this public key (via fancy math and really really intense stuff) can *verify that a specific private key was used to sign the transaction*. 

Imagine this: You have a buddy in the other room who says a word. The word either has 1 syllable, 5 syllables, or 20 syllables. You cannot hear *what* he says, but you can easily verify that the word he said was short, medium, or ultra-long. So you *know* what word he said (given there were only 3 choices) even though you don't *know the actual word*. Cryptography is a bit like that, except it involves fancy graphs, extreme math, and an almost infinite number of private keys (aka "the word your buddy said").

--- 

### verifying the private key corresponds to public key / signing txs

So back to your question-ish: *If it's the private key is unlocking the wallet from elsewhere...*

It's not actually unlocking from elsewhere. There is no server; the blockchain does not know about your private key or password or address (public key) even. It's not the same as what you are used to with email and facebook and all the new-fangled jazz.

The blockchain simply checks if the transaction you want to send (e.g. `1 ETH` to `0x2a9F48....` from `0x92fbC3.....`) is valid:

- Does the `from address` have 1 ETH to send?

- Did the private key pair of that address (the public key) sign the transaction?

I could sign a transaction saying `0x92fbC3.....` wants to send `1 ETH` to `0x2a9F48....` with any key I wanted to. I could just make it up off the top of my head. But it would fail check #2, and therefore never be accepted into the blockchain, and therefore the funds (which are your funds) would never move.

The only way to move funds is to send those funds with a transaction signed by the private key that corresponds to the address you are sending from. And the amount of private keys available is so insanely large that it would take a fuckload of years to ever be able to guess someone else's private key. It's quite simple. ([More on that here if you are interested](https://myetherwallet.groovehq.com/knowledge_base/topics/couldnt-everybody-put-in-random-private-keys-look-for-a-balance-and-send-to-their-own-address))


--- 

### fancy keys, passwords & encryption

Okay bear with me one more thing. 

Private keys can be fancy: they can be keystore files (which are encrypted with a password) or mnemonic phrases (which can be encrypted with a password, are easier to read, and give you access to multiple addresses / accounts / keypairs)

When we say encrypted we mean that you must do something first, before you can use the private key to sign the transaction. Encryption works like this:

- You take `7` (your private key) and you multiply it by `10` (your password) which outputs `70`. 

- The `70` is now your encrypted key

- You can't use `70` to sign a transaction because it's gibberish

- You can take `70` and divide it by `10` in order to get `7`. But you can't figure out what `7` is unless you have that secondary piece of information (your password / `10`). `7 x 10 = 70` and `70 / 10 = 7` but if you only have 70 you have an infinite number of possibilities for the private key and password: it could be `14 x 5` or `9 x 7.777777778` and on and on. 

Again, there is no server verifying your password or private key. It's all done by your computer and all it knows is that it's either correct or incorrect by trying it: 

- if you take `70` and divide it by `8`, you get `8.75` which is not the private key for the public key you want to send from.

- if you take `70` and divide it by `0`, the world ends bc you can't divide by 0, silly.

- if you take `70` and divide it by `80000`, you get `0.000875` which is way too small to be a private key.

...and so forth and so forth. When you give it the correct password, it gets a valid private key, and then it can sign the transaction, which can then be put on the blockchain, and you successfully sent your ETH. 

---

I hope this helps somewhat. I know it's long, typo-filled, and probably confusing but come back and re-read it in a week or month and see how much more you grok. ?

---

### Source

- [https://www.reddit.com/r/MyEtherWallet/comments/6vm6xa/moron_question_why_the_wallet/dm3ntq9/](https://www.reddit.com/r/MyEtherWallet/comments/6vm6xa/moron_question_why_the_wallet/dm3ntq9/)