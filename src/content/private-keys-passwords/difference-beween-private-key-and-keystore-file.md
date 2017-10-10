{
"title"       : "Differences between a private key & keystore file",
"sort"        : "12",
"category"    : "Private Keys & Passwords",
"description" : "Private Keys & Passwords"
}

---%


_What are the different private key formats that I can save?_

The ETH is stored on the blockchain, your private key or Keystore File or whatever piece of information you have proves ownership of that ETH, which allows you to move it.

At the end of the day, you are always signing with your private key.

However, for additional functionality (like protecting it with a password) there are formats & ways of storing your private key:


### Keystore File (UTC / JSON)
    *   This is encrypted by the password you chose.
    *   This is the recommended version to save. 
    *   This Keystore file matches the format used by Mist so you can easily import it in the future. 
    *   Make sure to have multiple backups.

### Private Key (unencrypted)
    *   This is the unencrypted text version of your private key, meaning no password is necessary. 
    *   If someone were to find your unencrypted private key, they could access your wallet without a password. 
    *   For this reason, encrypted versions are typically recommended. 
    *   However, you should print the paper wallet or save this in an **offline** environment (like a piece of paper or USB drive). This ensures a lost password does not result in lost ETH, and acts as another backup.

### Mnemonic Phrases
    *   Typically these come in 12-word or 24-words. 
    *   They can derive multiple addreses - meaning your phrase actually is able to create multiple accounts, addresses, and private keys. 
    *   Ledger, TREZOR, MetaMask, and Jaxx create these for you. 
    *   MyEtherWallet does not currently derive mnemonic phrases, but may in the future.

### Ledger or TREZOR Hardware Wallets
    *   [Learn More Here](https://myetherwallet.github.io/knowledge-base/hardware-wallet-recommends)

### JSON File (unencrypted) -- deprecated
    *   This is the unencrypted, JSON format of your private key. 
    *   It gives you a file, just in case you prefer a file over a string of characters
    *   This means you do not need the password but anyone who finds your JSON can access your wallet & Ether without the password.

### Parity Phrase -- deprecated
    *   [Learn More Here](https://myetherwallet.github.io/knowledge-base/parity-phrases-no-longer-supported)
