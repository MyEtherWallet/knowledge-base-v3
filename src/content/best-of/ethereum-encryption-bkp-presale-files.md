{
"title"       : "On Components of the Ethereum Pre-Sale File & Encryption",
"sort"        : "06",
"category"    : "Best Of",
"description" : "Best Of",
"date_published" : "2017-07-05T08:00:00+08:00",
"date_modified"  : "2017-09-26T08:00:00+08:00"
}

---%


*This is part of a series where Taylor pulls sweet comments she has made or found over the years in the hopes that they can be useful, searchable, remembered, referenced, and/or aid in the creation of future knowledge base posts. Many are unpolished & contain typos, specific references to previous discussions or the user, and gratuitous cursing.*

---

> Is the "bkp" component of a presale json file a SHA3 hash of the wallet password?

---

No. Your bkp is not the SHA3 of your password.

It's really quite simple. In the beginning, god said genwallet and...

1. [genwallet says](https://github.com/tagawa/website/blob/master/pyethtool/pyethtool.py#L129):
    - `genwallet(opts['seed'],pw,email)`

2. You say "here's my email and pw"

3. [seed says "give me super random number"](https://github.com/tagawa/website/blob/master/pyethtool/pyethtool.py#L55):
    - `seed = random_key().decode('hex') # uses pybitcointools' 3-source random generator`

4. [so now you need to get your `encseed`](https://github.com/tagawa/website/blob/master/pyethtool/pyethtool.py#L56):
    - `encseed = aes.encryptData(pbkdf2(pw),seed)`

5. [so we head over to mr. aes and say whats up](https://github.com/tagawa/website/blob/master/pyethtool/aes.py#L590-L611):
    - `def encryptData(key, data, mode=AESModeOfOperation.modeOfOperation["CBC"], iv=None):`
    - `........`
    - `........`

6. **and now you have your encseed.**

7. [then you get the `ethpriv](https://github.com/tagawa/website/blob/master/pyethtool/pyethtool.py#L57):
    - `ethpriv = sha3(seed)`

8. [and your `address`](https://github.com/tagawa/website/blob/master/pyethtool/pyethtool.py#L59):
    - `    ethaddr = sha3(privtopub(ethpriv)[1:])[12:].encode('hex')`

9. [and finally your bkp](https://github.com/tagawa/website/blob/master/pyethtool/pyethtool.py#L61):
    - `bkp = sha3(seed + '\x02').encode('hex')`

10. **So your bkp is the sha3 of your seed plus essentially the number "2" (number "1" was used for your btcpriv to differentiate it from your ethpriv) encoded in hex**.

11. The bkp is a backup obviously. But its not a backup of your password. Its a backup of your seed.

`print "Your seed is:", getseed(b['withwallet'],w['bkp'],b['ethaddr'])`

leads to...

    def recover_bkp_pw(bkp,pw):
    return getseed(bkp['withpw'],pw,bkp['ethaddr'])
    ....
    "withpw": aes.encryptData(pbkdf2(pw),seed).encode('hex'),

or...

    def recover_bkp_wallet(bkp,wallet):
    return getseed(bkp['withwallet'],wallet['bkp'],bkp['ethaddr'])
    ...
    "withwallet": aes.encryptData(pbkdf2(wallet['bkp']),seed).encode('hex'),


Get it now?

----

> no

> how does all this stuff tie together & is there a way to bruteforce a presale file with hashcat if you've forgotten the password and you've already tried walletrecoveryservices.com?

---

Haha. I know how it all fits together but I don't *really* understand it. It's all encryption and really complex math and stuff like that.

**ELI5: encryption**

In the most basic sense: you take 2 pieces of information, hash something, combine them, do something else, take the first X bytes, and you've got yourself a keyset. To decrypt it, you do the opposite.

It's sort of like this:

- 80/2 = 40

From 40 you can't get back to 80/2. It could be any number of combinations, like 160/4 or 200/5.

However, if you know the second number is `2`, you also know the first number is `80`. It's the only possible one. *(if we're using positive integers...shhh...this is an ELI5).* In the same sense....

- your seed + your password  + (COMPLICATED MATH) = your encrypted seed

- encrypted seed + password + (OPPOSITE COMPLICATED MATH) = your seed.

**Encryption in your presale file**

The "seed" in the presale file is essentially your private key. It's actually the sha3[1] of your seed: `ethpriv = sha3(seed)`). If you get your seed, you can get your private key easily w/o any add'l information.

How would one crack the `encseed` to get the `seed`? The getseed function from pyethtools is:

`def getseed(encseed,pw,ethaddr):`

`seed = aes.decryptData(pbkdf2(pw),encseed.decode('hex'))`

`ethpriv = sha3(seed)`

`if eth_privtoaddr(ethpriv) != ethaddr: raise Exception("ethaddr does not match!")`

`return seed`

First step is: `aes.decryptData(pbkdf2(pw),encseed.decode('hex'))`. This will return a seed no matter what you give it. It doesn't know what is "right" or "wrong". What makes a private key "the correct private key" is that it accesses the address that you want to access. So we must then take a few add'l steps in order to know whether this is the seed you are looking for.

- get the seed

- derive the private key from that seed

- derive the address from that private key

- check to see if that address is the address that holds your presale ETH.


**pdkdf2 makes things takes longer**

The one tiny little bit of this code that makes it complicated is right here: `pbkdf2(pw)`.

From wikipedia:

>PBKDF2 applies a pseudorandom function, such as a cryptographic hash, cipher, or hash-based message authentication code (HMAC), to the input password or passphrase along with a salt value and repeats the process many times to produce a derived key, which can then be used as a cryptographic key in subsequent operations. **The added computational work makes password cracking much more difficult, and is known as key stretching.**

The bolded part is what you need to know. Instead of just going

- password -> hashed password

It goes

- password -> (MATH * 10000000) -> hashed password.

Thus, when going backwards, you must include the (MATH * 10000000) which adds valuable time to each test your run. Instead of a single test taking .00000001 second, it may take .0001 second or 1 second.

**To get to your question**

If you provide a system with your presale file (or just the encseed and the address that you want that seed to "unlock") then you can bruteforce your wallet. Upgrading to a system with some serious GPU will be an improvement over, say, a 2012 Macbook Pro.

How much time it takes is dependent on:

- the amount of inputs you feed it (how many passwords you want it to try)

- your hardware

- the efficiency of the code itself.

- number of PBKDF2 rounds used in presale files

[ethcracker](https://github.com/lexansoft/ethcracker/blob/master/src/crypto/cracker.go), is written in Go and it supports a bunch of different wallet types. It also allows you to feed it components of your password. Botha are awesome features.

[pyethrecover](https://github.com/ryepdx/pyethrecover) is written in python and just strips out all the unnecessaries from pyethtool (what I've been referencing in this thread).

[hashcat](https://hashcat.net/hashcat/) is another tool but not specifically for Ethereum or presale files so you are going to have to set it up to do this. As described above, the password is only one of the steps that you need to take. You must first derive the seed, then derive the private key, and then see if that private key derives the correct address. hashcat is better if you have a list of salted passwords from a hack.


#### Recommendations

I would recommend going with pyethrecover or ethcracker. I would grab a [list of 100k passwords from somewhere](https://github.com/danielmiessler/SecLists/tree/master/Passwords) and give it that to pyethrecover and see how long it takes. Then do the same with ethcracker (with ethcracker, this pw list would be your one component and you wouldn't use that functionality). Whichever one is fastest, use that. If ethcracker is slower when providing it with multiple components, generate all the possible passwords from components first and then feed it that list.

I would also prioritize your password guesses into maybe 10 or so groups. For example: if you are 90% certain that it ends with 01, do that set first. If you threw it "mydeaddogsnickname" just because it's a teeny tiny possibility, do that last. The number of passwords you are attempting to brute force is going to make the biggest difference in speed at this point.

Don't be scared to reach out to the developers of those programs via Github. I know /u/ryepdx is super smart and has developed a lot of stuff for Ethereum and used to be around reddit all the time. He may have some cool insights for you or be able to assist. Donations inspire developers to be more helpful, FYI.

Best of luck. And if you end up testing both pyethrecover and ethcracker, make sure to post your findings on their repos or on reddit or something. Sharing information about what you've learned improves everyone's experience.

---

[1] One thing to keep in mind is that `sha3` isn't really what we think of as sha3 today. [Here's more info](http://ethereum.stackexchange.com/questions/550/which-cryptographic-hash-function-does-ethereum-use)

> Ethereum uses KECCAK-256. It should be noted that it does not follow the FIPS-202 based standard (a.k.a SHA-3), which was finalized in August 2015.

Basically, presale happened before sha3 spec was finalized.....so eth's sha3 is not what people currently think of as sha3. Whatever. Just know that if you are using ETH programs for cracking keys, you don't need to worry about it. If you are trying to write your own program from raw libraries, make sure you are using KECCAK-256.

---


### Source

- [reddit](https://www.reddit.com/r/ethereum/comments/5ees2q/is_the_bkp_component_of_a_presale_json_file_a/)

- [stackexchange](http://ethereum.stackexchange.com/questions/10204/what-is-the-bkp-component-in-a-presale-json-file)

