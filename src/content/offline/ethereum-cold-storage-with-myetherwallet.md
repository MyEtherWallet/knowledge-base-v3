{
"title"       : "Using MyEtherWallet For Cold Storage",
"sort"        : "04",
"category"    : "Offline",
"description" : "Offline",
"date_published" : "2017-07-05T08:00:00+08:00",
"date_modified"  : "2017-09-26T08:00:00+08:00"
}

---%


### Preface

The following assumes you are **not** using a Ledger or TREZOR hardware wallet. Due to their ease of use and security, [we recommend a hardware wallet for cold storage](https://myetherwallet.github.io/knowledge-base/hardware-wallets/hardware-wallet-recommendations.html).

To save / backup your Ledger or TREZOR device, simply write down the 24-word phrase on the card they provide and keep it very, very safe. Never put this key on an online device or type it in to MyEtherWallet.com.


### An amazing guide: Tails + KeePass + USB + MEW

[https://steemit.com/cryptocurrency/@tomshwom/tomshwom-s-advanced-crypto-security-guide-part-3-creating-a-secure-wallet](https://steemit.com/cryptocurrency/@tomshwom/tomshwom-s-advanced-crypto-security-guide-part-3-creating-a-secure-wallet
)


You can run MyEtherWallet.com on your computer and this computer can be a cold-storage or offline computer. This means it is a computer that is not connected to the internet and _will never be connected to the internet again._ You can generate a wallet completely offline & send Ether or Tokens from the "Send Offline" page.

### How To

* Go to [https://github.com/kvhnuke/etherwallet/releases/latest](https://github.com/kvhnuke/etherwallet/releases/latest).
* Click on `etherwallet-vX.X.X.X.zip`.
* Move zip to an airgapped computer.
* Unzip it and double-click `index.html`. This should open MyEtherWallet in your browser.
    * _Note: do not move files around in this folder. You need the entire folder for it to work correctly._
* Enter a strong but easy to remember password. Do not forget it.
    * _This encrypts (protects) your private key. It does not generate your private key. This password alone will **not** be enough to access your Ether._
* Click the `"Generate Wallet"` button.
* Download your `Keystore / UTC file` & save this file to a USB drive.
    * _This is the encrypted version of your private key. You need the password to access it. It is safer than your unencrypted private key but you must have your password to access it in the future._
* Read the warning. If you understand it, click the `"I understand. Continue"` button.
* Print your paper wallet backup and/or _carefully_ hand-write the `private key` on a piece of paper.
    * _If you are writing it, it is recommend you write it 2 or 3 times. This decreases the chance your messy handwriting will prevent you from accessing your wallet later._
* Copy & paste your address into a text document somewhere. Get it to your primary, online computer.
    * _Use the QR code or a different USB drive. It is best if you do not hand-write it_
    * _Search your address on [https://etherscan.io/](https://etherscan.io/). Bookmark this page. This is how you will view your balance at any time_
* Send a small amount of Ether (0.0001 ETH) from an exchange or another wallet to your new offline wallet.
* On your offline device, unlock your wallet from the Keystore / UTC file on your USB drive or via the private key that you printed out.  Ensure it unlocks the wallet you are sent to and matches the bookmark you have.
    * _Do not simply leave your new wallet open. Pretend you are coming back a year later to access your riches. Can you do it?_
* Send a small amount of Ether (0.00001 ETH) from this new wallet to another address.
    * _Perhaps our donation address? We are a free, open-source service. There are no fees, no ads, no tracking, no cookies, no selling your data._
* Ensure you have recorded all necessary bits of information and the addresses match at all times. If they don't, you mis-wrote something somewhere. That means it's time to start from the beginning in order to make sure you never lose access to your funds.

Doing all of this is tedious, but it ensures you (1) have complete access to your funds (2) the address you sent to is correct and matches the private key you have saved and (3) you can rest easily for years to come, knowing you will be able to access your ETH later.

---

### Safe Storage of Backups

It is recommended that you store backups of both forms of your key (the keystore file version and paper wallet version) in physically separate, offline environments.

This prevents loss of the private key & password due to: dead hard drive, lost USB drive, wet piece of paper, etc. Keep in mind that physical loss can affect an entire area (e.g. fire, flood).


### We cannot recover your key

MyEtherWallet is not a web wallet and cannot recover your private key or password, access your account, move funds, recover funds, nor cancel/reverse transactions.

We are a client-side interface that allows you to interact with the Ethereum blockchain. Please secure & back up your key like the millions of dollars it could some day be worth.


### Related Reading

* [What is the difference between private key & Keystore / UTC file?](https://myetherwallet.github.io/knowledge-base/private-keys-passwords/difference-beween-private-key-and-keystore-file.html)

* [Protecting yourself and your funds](https://myetherwallet.github.io/knowledge-base/security/securing-your-ethereum.html)
