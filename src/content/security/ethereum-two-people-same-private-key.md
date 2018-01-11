{
"title"       : "Ensuring MyEtherWallet doesn't give different people the same private key",
"sort"        : "12",
"category"    : "Security & Phishing",
"description" : "Security & Phishing",
"date_published" : "2017-07-05T08:00:00+08:00",
"date_modified"  : "2017-09-26T08:00:00+08:00"
}

---%


"How does it ensure that it doesn't give different people the same key?"

https://ethereum.stackexchange.com/questions/4299/account-uniqueness-guaranteed

---

The wallet private key is not given, it is randomly generated, then the public key (and thus address) is derived from it. Potentially someone else could randomly generate the same private key, but the chances of that happening are unbelievably tiny - I'm not sure how many millions of years of trying it'd take, but it's a lot.

---

The answer to your first question is is one of my favorite parts about Eth (and cryptocurrency in general).

Nobody assigns you the address. The blockchain doesn't assign you the address. You get to just pick it yourself.

You pick the private key, which is a number in between 0 and 1461501637330902918203684832716283019655932542976.

Go ahead, just pick one. Don't tell anyone! There, that's your private key. That number gives you access to all the funds in that account.

If you happened to pick one that someone else is using, you now have access to all of their funds. If someone else happens to pick the one that you just picked, now they have access to all of your funds. That's why it's important that the one you picked is really really random and that you never let anyone see it.

It's that simple. Pick a number, that's your account. Cross your fingers that nobody else picks it!

The mind blowing part is that this is actually secure. That number up there is so large that if you truly did a good job picking your number randomly, then the odds that anyone else picks it is infintesimal. (1/that number).

Don't believe me? Go ahead, there are billions of dollars worth of value in the blockchain. You should set up a computer program to generate tons of these numbers and check each one to see whether they have any money in them. It's all yours if you can find one!

Disclaimer: NEVER actually pick your private key out of your own brain. It turns out humans are really bad at picking random numbers, even when we think we're good at it. Use a secure random number generator like the one in MEW or Ledger or Trezor.

---

Because there are 2^160 possible bitcoin addresses exist.

That's 1,461,501,637,330,902,918,203,684,832,716,283,019,655,932,542,976.

The wallet can generate a private key - public address pair randomly for you without having to tell the network which one you'll be using because there are so many possibilities that you can just pick one. And once someone sends funds to your address the network (wallet) simply just checks if the format of your address is acceptable or not.

It is theoretically possible to generate an address that's already being used but the chances of that happening is just unimaginable.

There are approximately 7.5 x 1018 grains of sand on Earth.

That's

7500000000000000000

compared to

1461501637330902918203684832716283019655932542976

That number is so unfathomably big that even if you were to generate one address for each grain of sand on Earth every second, and do it for as long as old the galaxy is ~13.21 billion years, you'd still be nowhere near likely to have found even a single duplicate.

But what makes it impossible to find and bruteforce any specific address is that it would costs more energy than the Sun has.

---

Here is a bit of helpful perspective on that number: the estimated age of the universe is about 4.32 x 1017 seconds. The number of possible addresses is on the order of 1049 .

In order to use up half of the possible addresses in 4.32 x 1017 seconds, you would need to make approx 1.6 x 1031 addresses per second. That's 16 nonillion addresses. Per second. For the entire life of the universe so far. That's to use up half of the addresses.

Even if the blockchain is in active, vigorous use for the next ten thousand years, the chances of a duplicate private key are stochastically zero.

---

### Related

- [Couldn't everybody put in random private keys, look for a balance, and send to their own address?](https://myetherwallet.github.io/knowledge-base/faq/couldnt-everybody-put-in-a-random-key-and-send-to-own-address.html)


### Sources
- [adapted from this reddit thread](https://www.reddit.com/r/ethereum/comments/6fr2lx/updated_its_time_to_get_real_stop_relying_on/diki8iz/)

- [a video about keys](http://decypher.tv/series/ethereum-development/video/2)
