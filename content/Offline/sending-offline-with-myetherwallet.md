/*
Title: How can MyEtherWallet send "offline"?
Sort: 8
*/

First thing you need to understand is that every address already "exists". When you "create a wallet" you are not actually doing anything on the blockchain or communicating with the blockchain in any way.

Creating a wallet means you get a randomly generated private key and the address (public key) that corresponds to that private key. Then you save those two bits of information and decide to use it.

You can do this on a device that is connected to the internet..or one that is not.

Cold storage is a device that is not, and will never be, connected to the internet. This means that even if someone were to completely hack you and your computer and your phone, your key would be safe. Yay!

One common cold storage method is a simple piece of paper. Bad folks on the internet can't hack your paper. (But you should still watch out for your roommate, FYI.)

So. Your ETH is on the blockchain and for an offline or cold storage, your private key is kept offline, never introduced to an online device.

Regardless of what service you use to "store" your ETH, your ETH are lines of code on the Ethereum blockchain. Transactions add more lines of code and all these lines together determine what address has what balance.


Your private key or keystore file is simply the way you *access and prove ownership of a particular address on the blockchain.*

The part that usually confuses people is how can MyEtherWallet generate a valid wallet without being online. 

This is because the software, in this case MyEtherWallet, is able to generate a valid public key (wallet address) based on programmatic algorithms and "rules" of you will, that will work on the public "online" blockchain and simultaneously be unique, based on how the software generates it. 

Your password enables you to decrypt a keystore file, which can be used to unlock your wallet down the road.

You can generate a transaction offline using the same MyEtherWallet software in an offline environment and then broadcast that transaction code using an online device. 

This way your private key can remain secure on the offline device and be used to generate a valid transaction for the online device to broadcast.

### Further Reading
- [https://www.reddit.com/r/ethereum/comments/6n5qja/how_can_myetherwallet_create_a_private_key_while/](https://www.reddit.com/r/ethereum/comments/6n5qja/how_can_myetherwallet_create_a_private_key_while/)


### Adapted from comments by:

* [/u/chickenbreth](https://www.reddit.com/r/ethtrader/comments/6hqycv/how_can_mew_send_coins_offline/)

