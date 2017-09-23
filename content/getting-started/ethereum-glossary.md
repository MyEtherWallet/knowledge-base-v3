/*
Title: Defining Common Terms in the Ethereum / Crypto Space
Sort: 18
Category: Getting Started
Description:
*/

[You can also read in Spanish]( https://myetherwallet.groovehq.com/knowledge_base/topics/las-palabras-son-dificiles-definiendo-terminos-comunes-de-ethereum ), thanks to [faraggi](https://github.com/faraggi/words-are-hard-es/blob/master/words-are-hard-es.md)

---

Words are Hard sometimes.

This is a list of terms you might encounter when using the MyEtherWallet interface.

### Wallet

- The interface / client / wrapper / holder that you use to manage your account(s).

- Example: MyEtherWallet.com, your Ledger Hardware Wallet, a Multisig Wallet Contract.

### Account

- A public & private keypair that "holds" your funds.

- Your funds are actually stored on the blockchain, not in the wallet or account.

- Just like your Reddit account has a`username (public)` and `password (private)`, so does your Ethereum account. For additional security, you can use a password to encrypt your private key which would result in a `username (public)` and `password (private)` and `password for that password (private + more secure)`. See the `Keystore File` section.

### Address *("Public Key")*

- You use this to send funds **to** an account.

- Sometimes referred to as the "public key"

- A string made up of `0x` + `40 hexadecimal characters`.

- In Ethereum, the address begins with `0x`.

- Example: `0x06A85356DCb5b307096726FB86A78c59D38e08ee`

### Public Key

- In cryptography, you have a keypair: the public and private key.

- You can derive a public key from a private key, but cannot derive a private key from a public key.

- (Advanced) In Ethereum, the address "acts" like the public key, but it's not actually the public key.

- (Advanced) In Ethereum, the public key is derived from the private key and is 128 hex characters. You then take the `"SHA3" (Keccak-256)` hash of this (64 characters), take the last 40 characters, and prefix  with `0x`, give you your 42-character address.

### Private Key

- You use this to send funds **from** an account.

- The secret half of your Address / public key.

- A string of 64 hexadecimal characters.

- ([Almost](https://crypto.stackexchange.com/questions/30269/are-all-possible-ec-private-keys-valid)) every string of 64 hexadecimal characters is a private key.

- If you hand-type a private key differently today than yesterday, you will access a different wallet. Never hand type your private key.

- This is the string you need to send from your account. Without it you cannot access your funds. Although, you don't need to save this raw, unencrypted private key in this format. You can saving the fancy versions of it (e.g. the Keystore File / Mnemonic Phrase).

- Example: `afdfd9c3d2095ef696594f6cedcae59e72dcd697e2a7521b1578140422a4f890`

### Keystore File

- Encrypted version of your private key in JSON format (though it does not have a JSON extension)

- A fancy version of your private key that is protected by a password of your choosing.

- When combined with the password, it has the private key.

- Safer than a private key because you need the password.

- File name usually is in the format `UTC` + `--` + `DATE_CREATED` + `--` + `YOUR_ADDRESS_WITHOUT_THE_OX`

- Example of File Nae: `UTC--2017-07-02T20-33-09.177Z--06a85356dcb5b307096726fb86a78c59d38e08ee`
- Example of Contents: `{"version":3,"id":"aa811d53-fe9a-44a2-bd1c-e737007b5591","address":"06a85356dcb5b307096726fb86a78c59d38e08ee","Crypto":{"ciphertext":"f5a7cc8d4b8cf93510b0d0d057f3a52ac79fd48e619e0638c4ffd978ca180248","cipherparams":{"iv":"975ab00192e2dd74170e91ca59c0b0bd"},"cipher":"aes-128-ctr","kdf":"scrypt","kdfparams":{"dklen":32,"salt":"0210f0d0b99e440dfbceb36373304638bac093a367ee7da6411cd165f7aa907a","n":1024,"r":8,"p":1},"mac":"8197a747a3855a10546a2ff939c36470daed78e393b670efa0c12fe3b23dd7e3"}}`

- (pw: `mypassword`)

### Mnemonic Phrase

- Another fancy version of your private key, that is actually used to derive multiple private keys.

- A (typically) 12 or 24 word phrase that allows you to access infinite number of accounts.

- Used by Ledger, TREZOR, MetaMask, Jaxx, and others.

- Originates from [BIP 39 Spec](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki).

- The accounts you can access with this phrase are determined by the "path".

- Example 12-words: `brain surround have swap horror body response double fire dumb bring hazard`

- Example 24-words: `card enrich gesture connect kick topple fan body blind engine lemon swarm venue praise addict agent unaware equal bean sing govern income link leg`

### Hardware Wallet:

- Typically, a single-purpose device that "holds" your private key(s), ensuring your private keys are safe.

- Typically, they use a 24-word phrase. This phrase you should write down (not on your computer) and store separately from your hardware wallet.

- If you lose your hardware wallet, you can still gain access to your accounts & funds via the word-phrase you wrote down.

- Never type the word-phrase on your computer. It defeats the purpose of your hardware wallet.

### AddressIdenticon / AddressIcon:

- The colorful blob of colors that corresponds to your address.

- It is an easy way to see if your address is correct.

- [Example 1](http://i.imgur.com/lHUrIiZ.jpg)

- [Example 2](http://i.imgur.com/FvyLewS.jpg)

- *Note: the above addresses are a single character different but have remarkably different icons & colors. Magic!*

### Hexadecimal

- Used all over Ethereum for a variety of things, a hexadecimal string is comprised of the numbers `0 1 2 3 4 5 6 7 8 9` and `A B C D E F`

### Seed

- The input given to derive a private key. This should always be generated in a truly random way, not something you make up with your measly human brain.

- If you chose the seed, it is known as a `brain wallet`


### Brain Wallet

- An account generated from a seed or password or passphrase of your choosing.

- Humans are not capable of generating enough entropy and therefore the wallets derived from these phrases are insecure.

- Brain wallets can be brute forced by super fast computers.

- [Brain wallet are insecure.](https://www.reddit.com/r/ethereum/comments/45y8m7/brain_wallets_are_now_generally_shunned_by/)

- Don't use brain wallets.


### Entropy

- Also known as "randomness".

- The more random something is, the more entropy it has, and the more secure it is.

- Usually defined in "bits of entropy" or the number of years it would take to brute-force a ________ (e.g. private key) derived with that much entropy.

- Ethereum private keys are 256-bit keys

- 24-Word mnemonic phrases are also 256 bits of entropy. 2048 words in the dictionary. 11 bits of entropy (the words). `11 * 24 = 264`. The last word is a checksum.

### Derive / Derivation

- [WIP]

### Encryption

- [WIP]

### Encrypted vs Unencrypted Keys

- [WIP]



---

All feedback, rewrites, clarification, typo-fixing, and requests for additions are more than welcome. ?
