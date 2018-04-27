{
"title"       : "Private Key opens a different account / two addresses",
"sort"        : "08",
"category"    : "Private Keys & Passwords",
"description" : "Private Keys & Passwords",
"date_published" : "2017-07-05T08:00:00+08:00",
"date_modified"  : "2017-09-26T08:00:00+08:00"
}

---%



*Mismatched Private Key / Address*


Please be sure that you are **carefully and accurately **typing your private key. A single wrong character will open a different wallet than "yours".

For reference private key looks like this: `afdfd9c3d2095ef696594f6cedcae59e72dcd697e2a7521b1578140422a4f890`

Be sure that you are using the same option and same key / file as when you first unlocked your wallet. Essentially, you need to do the same thing each time you open your wallet.

If you saved another version (for example. the UTC / Keystore file) it may also be worth testing that, as well.

You had to unlock your wallet in order to obtain your address from MyEtherWallet. Therefore, it is nearly impossible to not have saved this file and unlocked it correctly. Think back and repeat the exact steps you made when you unlocked it. Which private key type did you use to access that address?

If you think you may have mistyped a private key, here is a snippet that will help you check each letter for a mis-type. Keep in mind, this assumes you mistyped a single character. If you mistyped more than one, it will take exponentially longer.

Scroll to the bottom of https://www.myetherwallet.com/helpers.html, enter your private key and address and see if that resolves to anything.

---

### Related

- Finding multiple missing characters in private key: https://gist.github.com/domalak/f72414b6be6bbe497416f11bfe0d224a

- Find multiple missing characters of the very end of a private key: https://kb.myetherwallet.com/private-keys-passwords/missing-characters-of-private-key.html

- Find 1 missing character anywhere in private key (fast):

```
    const hdkey = require('ethereumjs-wallet/hdkey');
    const util = require('ethereumjs-util');
    const Wallet = require('ethereumjs-wallet');

    var characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    var basePrivateKey = 'THE_KEY_YOU_THINK_YOU_TYPED';
    var targetPublicAddress = 'THE_PUBLIC_WALLET_ADDRESS_WHICH_CONTAINS_YOUR_ETHER';

    for(var keyPosition = 0; keyPosition < basePrivateKey.length; keyPosition++){
      for(var character = 0; character < characters.length; character++){
        try{
          var privateKeyGuess = setCharAt(basePrivateKey, keyPosition, characters[character]);
          var wallet = Wallet.fromPrivateKey(new Buffer(privateKeyGuess, "hex"));
          var publicAddress = util.bufferToHex(wallet.getAddress());
          if(publicAddress.toLowerCase() == targetPublicAddress.toLowerCase()){
            console.log('*** FOUND PRIVATE KEY: ' + privateKeyGuess);
            process.exit();
          }
        }catch(e){
          // Invalid character
        }
      }
    }

    function setCharAt(str,index,chr) {
        if(index > str.length-1) return str;
        return str.substr(0,index) + chr + str.substr(index+1);
    }
```

If you end up rewriting the above for a different use-case, please email us to let us know. We can add it to our site so that it can help people who may not have your skills in the future. We will also reward you with stickers!
