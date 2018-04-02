{
"title"       : "What's the deal with the Keystore/JSON file? Why can't I change my password?",
"sort"        : "09",
"category"    : "Security & Phishing",
"description" : "Security & Phishing",
"date_published" : "2018-04-02T08:00:00+08:00",
"date_modified"  : "2018-04-02T08:00:00+08:00"
}

---%

Let's take a look at what a Keystore/JSON file is, first. The Keystore/JSON file holds an encrypted version of your private key, which is simply your private key encoded into a cool, secret string of characters. Take, for example, the word 'apple'. If you encrypted this word with a 4-character difference down the alphabet, it would look something like 'dssoh'. At face value, you'd have no idea what 'dssoh' meant. However, if you gave someone this word and told them the way you encrypted it, they could then decode it back to the world 'apple'! This is a very simplified version of how encryption works, but it gets the point across.

When you enter your password upon generation of your wallet, it takes your password and uses it to encrypt your Private Key into a Keystore/JSON file. The result is a file that looks a lot like gibberish if you open it, (which there is no reason to do, do not open your UTC file!). It simply holds your encrypted private key within it. This is why you have to use your chosen password to unlock your wallet via this method. You cannot change your password without generating an entirely new Keystore/JSON file, and thus a new encrypted key.

It’s important to note that the strength of your password is directly related to the integrity of your Keystore/JSON file. If you choose a weak password and a hacker gets ahold of your encrypted key, they can bruteforce it (try over and over) until they discover what password you used. Pick a strong password for a strong encryption!

*-Stephen #MEWForce*
