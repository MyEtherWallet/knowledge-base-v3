/*
Title: Can I turn on 2FA for MyEtherWallet?
Sort: 7
*/

### No. And if you landed on a site telling you that you could, they are lying to you and trying to steal your private keys.

[2FA / MFA](https://en.wikipedia.org/wiki/Multi-factor_authentication) is something that works for server-side applications in order to add an additional layer of security on top of the username / password.

In the case of MyEtherWallet*.com*, a client-side application, you store your key.  That key is the core piece of information that allows access to your account and, while *you* can encrypt it with a password, there is no server that can verify or track a 2FA login / [OTP](https://en.wikipedia.org/wiki/One-time_password) when you are using MyEtherWallet. If someone gets your private key (keystore file, mnemonic, passwords), they have complete access to your funds. There is no stopping transactions, canceling transactions, or resetting passwords.

Basically, it's an authentication primitive, not a cryptographic one.

### In order to implement it, we would need to store your key and protect it on our servers, which is not something we want to do.

If this is functionality that you do want, feel free to use any exchange / hosted wallet like Coinbase, Kraken, Poloniex, Bittrex, Bitfinex, Gemini, and so forth. Just be aware of the risk of letting someone hold your keys for you.

More information: https://github.com/kvhnuke/etherwallet/issues/292
