{
"title"       : "Missing characters from private key.",
"sort"        : "50",
"category"    : "Private Keys & Passwords",
"description" : "Private Keys & Passwords",
"date_published" : "2017-12-12T08:00:00+08:00",
"date_modified"  : "2017-12-12T08:00:00+08:00"
}

---%


##### Credit goes to Bahk (https://github.com/domalak) for making the best helper tools ever!

## How to Use (for noobs)
- Click `"Raw"` on [https://gist.github.com/tayvano/7755e3e8d8b64581d5ff2865087b93f8](https://gist.github.com/tayvano/7755e3e8d8b64581d5ff2865087b93f8)
- Right click, select `"Save As"`
- Click `"Save"`
- Install Node.js: [https://nodejs.org/en/](https://nodejs.org/en/)
- Open the .js file you saved earlier in a text editor (NOT WORD!!!!!!!!!!) like Notepad (PC) or Text Edit (Mac)
- Change the stuff between the `' '` characters to the characters you have of your private key. Check it 5 times to be sure you got the correct characters in there:

`var basePrivateKey = 'afdfd9c3d2095ef696594f6cedcae59e72dcd697e2a7521b15781404'`

- Change the stuff between the ' ' characters to your address:

`var targetPublicAddress = '0x06A85356DCb5b307096726FB86A78c59D38e08ee';`

- Open command line / terminal
- Type `cd` into the command line and then hit the spacebar and then drag and drop the FOLDER that contains the .js file into command line window
- It should look like `/Users/tayvano/Downloads/7755e3e8d8b64581d5ff2865087b93f8-653a14e63b9ccefb5a8ddfdb14bd7066b4fd4c6f` (or something like that).
- Hit `enter`.
- Copy & paste the following into command line and hit enter:

`npm install ethereumjs-wallet ethereumjs-util`

- Wait until it installs
- Type `node` into the command line (w/o quotes: just cd) and then hit the spacebar and then drag and drop the `brute_force_end_of_private_key.js FILE` into the command line window
- Hit `enter`.

You should see the following:

```
$ node /Users/tay/Desktop/brute_force_8_char.js
 
 searching for address : 0x06A85356DCb5b307096726FB86A78c59D38e08ee 
 base private key      : afdfd9c3d2095ef696594f6cedcae59e72dcd697e2a7521b15781404 
 missing chars         : 8 
 it will be quiet now. if you don't see anything below me, it's working on finding your key. 
 If you see something below that doesn't say 'FOUND KEY!', you have an error 
```

When it's done it will show:

```
 ********************************** FOUND PRIVATE KEY: afdfd9c3d2095ef696594f6cedcae59e72dcd697e2a7521b1578140422a4f890 
 matching address 0x06A85356DCb5b307096726FB86A78c59D38e08ee 
```

- If you see anything besides that, you have an error and it's not longer searching for your key.
- If the error says, "Invalid private key", the key snippet your provided is invalid. It must be hex characters.
- If you get an "out of memory" error, have to go to work, or your computer turns off, no worries. Just run it again.
- If your command line is still open, hit the up arrow key and then enter to quickly run it again.
- On a macbook pro, it will take seconds to find 1, 2, 3, or 4 missing characters. 
- It takes ~15mins to find 6 digits. 
- It will ~3 days to find 8
 

### The code for this is here: [https://gist.github.com/tayvano/7755e3e8d8b64581d5ff2865087b93f8](https://gist.github.com/tayvano/7755e3e8d8b64581d5ff2865087b93f8) or below:

```
const util   = require('ethereumjs-util')
const Wallet = require('ethereumjs-wallet')

var possible            = 'abcdef1234567890'
var basePrivateKey      = '1cd3b30424316919712c48359829787eefa0d724a78274a506530dbb72'
var charsMissing        = 64 - basePrivateKey.length
var targetPublicAddress = ' 0xe8Ca70C909905Ebbbe6a49c34797beF31d895241'
var missingPart = '';
for (var i = 0; i < charsMissing; i++) {
  missingPart = missingPart.concat('f');
}
var maxVal = parseInt(missingPart, 16);

console.log(" \n " +
            "searching for address : " + targetPublicAddress                                               + " \n " +
            "base private key      : " + basePrivateKey                                                    + " \n " +
            "missing chars         : " + charsMissing                                                      + " \n " +
            "it will be quiet now. if you don't see anything below me, it's working on finding your key."  + " \n " +
            "If you see something below that doesn't say 'FOUND KEY!', you have an error"                  + " \n " )

function makeHexString(numb) {
  var hex = numb.toString(16);
  for (var i = 0; i < charsMissing - hex.length; i++)
    hex = '0' + hex
  return hex
}

for(var i = 0; i <= maxVal; i++){
  try{
    var endPrivateKey   = makeHexString(i)
    var privateKeyGuess = basePrivateKey + endPrivateKey
    var wallet          = Wallet.fromPrivateKey(new Buffer(privateKeyGuess, "hex"))
    var publicAddress   = util.bufferToHex(wallet.getAddress())
    // console.log(i + ": " + endPrivateKey)
    if(publicAddress.toLowerCase() == targetPublicAddress.toLowerCase()){
      console.log('\n \n \n \n ********************************** FOUND PRIVATE KEY: ' + privateKeyGuess + " \n matching address " + targetPublicAddress + " \n \n \n \n ");
      process.exit();
    }
  }catch(e){
    null;
  }

  if (i % 100000 === 0) {
    console.log('checked', i, 'keys');
  }
}
```


---

### Related

- Finding multiple missing characters in private key: https://gist.github.com/domalak/f72414b6be6bbe497416f11bfe0d224a

- Find multiple missing characters of the very end of a private key: https://myetherwallet.github.io/knowledge-base/private-keys-passwords/missing-characters-of-private-key.html

- Find 1 missing character anywhere in private key (fast): https://myetherwallet.github.io/knowledge-base/private-keys-passwords/accessing-different-address-same-private-key-ether.html
