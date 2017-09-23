/*
[ELIExpert] How are Ethereum addresses generated?
Sort: 2
*/

*This is part of a series where Taylor pull's sweet comments she's made or found over the years in the hopes that they can be useful, searchable, remembered, referenced, and/or aid in the creation of future knowledge base posts. Many are unpolished & contain typos, specific references to previous discussions or the user, and gratuitous cursing.*

---

Recently this article came to my attention that is way more in depth and technical than my more accessible version below. It also walks you through how to generate one on your own. I highly recommend it: 
https://kobl.one/blog/create-full-ethereum-keypair-and-address/

---

#### From the [Yellow Paper](http://gavwood.com/paper.pdf)

[![http://i.stack.imgur.com/RkcBe.jpg]

#### There are three main steps to get from private -> address:

1. Create a random private key (64 (hex) characters / 256 bits / 32 bytes)

2. Derive the public key from this private key (128 (hex) characters / 512 bits / 64 bytes)

3. Derive the address from this public key. (40 (hex) characters / 160 bits / 20 bytes)

Even though a lot of people call the address the public key, it's actually not the case in Ethereum. There is a separate public key that acts as a middleman that you won't ever see, unless you go poking around a pre-sale wallet JSON file.

#### 1. Generating private key

The private key is 64 hexadecimal characters. Every single string of 64 hex are, hypothetically, an Ethereum private key *(see link at top for why this isn't totally accurate)* that will access an account. If you plan on generating a new account, you should be sure these are seeded with a proper RNG. Once you have that string..

#### 2. Private Key -> Public Key

This is hard and beyond me. There is something with Elliptic Curve Digital Signature Algorithm (ECDSA) and stuff. But in the end you end up with a public key that is 64 bytes.

#### 3. Public key -> Address

1. Start with the public key (128 characters / 64 bytes)

2. Take the Keccak-256 hash of the public key. You should now have a string that is 64 characters / 32 bytes. *(note: SHA3-256 eventually became the standard, but Ethereum uses Keccak)*

3. Take the last 40 characters / 20 bytes of this public key (Keccak-256). Or, in other words, drop the first 24 characters / 12 bytes. These 40 characters / 20 bytes are the address. When prefixed with 0x it becomes 42 characters long.

#### Definitions

**Address:** An Ethereum address represents an account. For EOA, the address is derived as the last 20 bytes of the public key controlling the account, e.g., `cd2a3d9f938e13cd947ec05abc7fe734df8dd826. This is a hexadecimal format (base 16 notation), which is often indicated explicitly by appending 0x to the address. Web3.js and console functions accept addresses with or without this prefix but for transparency we encourage their use. Since each byte of the address is represented by 2 hex characters, a prefixed address is 42 characters long. Several apps and APIs are also meant to implement the new checksum-enabled address scheme introduced in the Mist Ethereum wallet as of version 0.5.0. - [Homestead Docs](http://ethdocs.org/en/latest/glossary.html)

**Private Key:** A randomly selected positive integer (represented as
a byte array of length 32 in big-endian form) in the range `[1, secp256k1n − 1]`. - [Yellow Paper](http://gavwood.com/paper.pdf)

  [1]: 

---

####### Source

- [https://ethereum.stackexchange.com/questions/3542/how-are-ethereum-addresses-generated/3619#3619](https://ethereum.stackexchange.com/questions/3542/how-are-ethereum-addresses-generated/3619#3619)