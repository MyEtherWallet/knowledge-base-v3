{
"title"       : "Brute-Forcing Secret Word Phrases",
"sort"        : "16",
"category"    : "ENS",
"description" : "ENS",
"date_published" : "2017-07-05T08:00:00+08:00",
"date_modified"  : "2017-09-26T08:00:00+08:00"
}

---%


*The following is from /u/eth-o-licious2 on reddit:
 [https://www.reddit.com/r/ethereum/comments/6j8ih6/ens_troubleshooting_if_you_use_mew_and_forgot/](https://www.reddit.com/r/ethereum/comments/6j8ih6/ens_troubleshooting_if_you_use_mew_and_forgot/)*

----

Recently I was trying to reveal one of my bids and realized that somehow I failed to copy down my three word secret from MyEtherWallet, probably because the Status Token Contribution Period was forcing me to re-attempt bids and I lost track of this one.

At any rate, my specific situation was that I was using MyEtherWallet, I knew how much I bid and my account, and I just needed the `three word secret phrase`.

The domain being bid on, the account, the amount, and the three word secret are all used to produce an output that is stored on the blockchain in order to verify the bid when it's later revealed.

**So what I did was write a python script to brute force through all of the possible three word combinations in order to find what I needed. You can find the code for that [here](https://pastebin.com/Z4gRicGY).**

I'm posting this in case anyone else is finding themselves in the same situation, this might help prevent loss of your bid amount.

What you need to know is the account you bid from and the amount, this will not work without that information. If you have that then go to [section 1 of this troubleshooting page](https://myetherwallet.github.io/knowledge-base/ens/ens-debugging-a-bad-instruction-reveal.html) and follow the instructions in order to get the `New Bid Data` string which is the combination of the `MethodId:" and "[0]:` from your bid transaction.

Once you have that all you need to do is replace the information that the four variables at the top of the python script are currently set to. The variable names correspond with the fields under the ENS Debugger on the [MEW Helpers Page](https://www.myetherwallet.com/helpers.html).

Putting in the address you bid from, ENS name you bid on, amount you bid, and your three word secret into that page will display the `New Bid Data` output that needs to match what you get from your bid transaction. The python script will run through all the possible three word combinations until it finds the New Bid Data output that matches what's on your bid transaction (which you put into the python script). Once the script has finished you can test the result by filling out the MEW Helpers Page.

Some assumptions I made:

* MEW generates the three words from the same mnemonic list of 2048 terms that Trezor uses

*  The three word secret won't use repeat words.

If you use it be aware that it can take 8 - 10 hours or so to run through the entire thing because there are billions of possible combinations.

Also, be aware that I'm not a professional programmer, not even close, I'm sure this code is awful in many ways, but all I know is that it worked for me. I cannot guarantee that it will work for you however so proceed at your own risk.

In order to run it you'll need to have python installed, specifically version 3.4.

You'll also need hashlib, if you are using Windows then you can get it by running this in a command prompt:

` $ pip install hashlib`

In addition you'll need pysha3:

` $ pip install pysha3`

The reason for `pysha3` is that it has the specific `Keccak-256 algorithm` that Ethereum uses which is different from the `SHA-3/Keccak algorithm` that comes with `hashlib on python >= 3.6`.

Hope that helps!

EDIT: I noticed a small issue and fixed the script/entered it into a new pastebin. The word "true" on the mnemonic list was put in as "TRUE" on the script because I manipulated the list in Excel to get the quotes and commas before pasting, and Excel automatically converts the word "true" to all caps. I'm pretty sure that would change the output of the hash function and prevent the script from finding the three word secret if it happened to contain the word "true." It's been fixed.

EDIT 2: One thing to note for anyone who also doesn't remember what they bid -- if you at least know which account it was and can narrow it down to which transaction it was for the bid then you can see the exact amount you bid -- at least assuming you didn't use the bid mask feature.
