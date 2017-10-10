/*
Title: English
Sort: 2
*/

Migrated from the old help page on MyEtherWallet.com. 

---

### Some reminders

*   **Ethereum, MyEtherWallet.com & MyEtherWallet CX, and some of the underlying Javascript libraries we use are under active development.** While we have thoroughly tested & tens of thousands of wallets have been successfully created by people all over the globe, there is always the remote possibility that something unexpected happens that causes your ETH to be lost. Please do not invest more than you are willing to lose, and please be careful. If something were to happen, we are sorry, but **we are not responsible for the lost Ether**.
*   MyEtherWallet.com & MyEtherWallet CX are not "web wallets". You do not create an account or give us your Ether to hold onto. All data never leaves your computer/your browser. We make it easy for you to create, save, and access your information and interact with the blockchain.
*   If you do not save your private key & password, there is no way to recover access to your wallet or the funds it holds. Back them up in multiple physical locations – not just on your computer!

---

### I'm new. What do I do?

MyEtherWallet gives you the ability to generate new wallets so you can store your Ether yourself, not on an exchange. This process happens entirely on your computer, not our servers. Therefore, when you generate a new wallet, **you are responsible for safely backing it up**.

1.  Create a new wallet.
2.  Back the wallet up.
3.  Verify you have access to this new wallet and have correctly saved all necessary information.
4.  Transfer Ether to this new wallet.

---

### How do I create a new wallet?

1.  Go to the "Generate Wallet" page.
2.  Enter a strong password. If you think you may forget it, save it somewhere safe. You will need this password to send transactions.
3.  Click "GENERATE".
4.  Your wallet has now been generated.

---

### How do I save/backup my wallet?

You should always back up your wallet externally and in multiple physical locations - like on a USB drive and/or a piece of paper.

1.  Save the address. You can keep it to yourself or share it with others. That way, others can transfer ether to you.
2.  Save versions of the private key. Do not share it with anyone else. Your private key is necessary when you want to access your Ether to send it! There are 3 types of private keys

*   **Keystore File (UTC / JSON · Recommended · Encrypted)** <span translate="x_KeystoreDesc" class="ng-scope">This Keystore file matches the format used by Mist so you can easily import it in the future. It is the recommended file to download and back up.</span>
*   **JSON File (unencrypted)** <span translate="x_JsonDesc" class="ng-scope">This is the unencrypted, JSON format of your private key. This means you do not need the password but anyone who finds your JSON can access your wallet & Ether without the password.</span>
*   **Private Key (unencrypted)** <span translate="x_PrivKeyDesc" class="ng-scope">This is the unencrypted text version of your private key, meaning no password is necessary. If someone were to find your unencrypted private key, they could access your wallet without a password. For this reason, encrypted versions are typically recommended.</span>

4.  Place your address, versions of the private key, and the PDF version of your paper wallet in a folder. Save this on your computer and a USB drive.
5.  Print the wallet if you have a printer. Otherwise, write down your private key and address on a piece of paper. Store this as a secure location, separate from your computer and the USB drive.
6.  Keep in mind, you must prevent loss of the keys and password due to loss or failure of you hard drive failure, or USB drive, or piece of paper. You also must keep in mind physical loss / damage of an entire area (think fire or flood).

---

### How do I safely / offline / cold storage with MyEtherWallet?

1.  Go to [https://github.com/kvhnuke/etherwallet/releases/latest](https://github.com/kvhnuke/etherwallet/releases/latest).
2.  Click on `dist-vX.X.X.X.zip`.
3.  Move zip to an airgapped computer.
4.  Unzip it and double-click `index.html`.
5.  Generate a wallet with a strong password.
6.  Save the address. Save versions of the private key. Save the password if you might not remember it forever.
7.  Store these papers / USBs in multiple physically separate locations.
8.  Go to the "View Wallet Info" page and type in your private key / password to ensure they are correct and access your wallet. Check that the address you wrote down is the same.

Keep in mind, you must prevent loss of the keys and password due to loss or failure of you hard drive failure, or USB drive, or piece of paper. You also must keep in mind physical loss / damage of an entire area (think fire or flood).

---

### How do I verify I have access to my new wallet?

**Before you send any Ether to your new wallet**, you should ensure you have access to it.

1.  Navigate to the "View Wallet Info" page.
2.  Select your wallet file -or- your private key and unlock your wallet.
3.  If the wallet is encrypted, a text box will automatically appear. Enter the password.
4.  Click the "Unlock Wallet" button.
5.  Your wallet information should show up. Find your account address, next to a colorful, circular icon. This icon visually represents your address. Be certain that the address is the address you have saved to your text document and is on your paper wallet.
6.  If you are planning on holding a large amount of ether, we recommend that send a small amount of ether from new wallet before depositing a large amount. Send 0.001 ether to your new wallet, access that wallet, send that 0.001 ether to another address, and ensure everything works smoothly.

---

### How do I send Ether from one wallet to another?

If you plan to move a large amount of ether, you should test sending a small amount to your wallet first to ensure everything goes as planned.

1.  Navigate to the "Send Ether & Tokens" page.
2.  Select your wallet file -or- your private key and unlock your wallet.
3.  If the wallet is encrypted, a text box will automatically appear. Enter the password.
4.  Click the "Unlock Wallet" button.
5.  Enter the address you would like to send to in the "To Address:" field.
6.  Enter the amount you would like to send. You can also click the "Send Entire Balance" link if you would like the transfer the entire balance.
7.  Click "Generate Transaction".
8.  A couple more fields will appear. This is your browser generating the transaction.
9.  Click the blue "Send Transaction" button below that.
10.  A pop-up will appear. Verify that the amount and the address you are sending to are correct. Then click "Yes, I am sure! Make transaction." button.
11.  The transaction will be submitted. The TX Hash will display. You can click that TX Hash to see it on the blockchain.

---

### How do I run MyEtherWallet.com offline/locally?

You can run MyEtherWallet.com on your computer instead of from the GitHub servers. You can generate a wallet completely offline and send transactions from the "Offline Transaction" page.

1.  Go to [https://github.com/kvhnuke/etherwallet/releases/latest](https://github.com/kvhnuke/etherwallet/releases/latest).
2.  Click on `dist-vX.X.X.X.zip`.
3.  Move zip to an airgapped computer.
4.  Unzip it and double-click `index.html`.
5.  MyEtherWallet.com is now running entirely on your computer.

In case you are not familiar, you need to keep the entire folder in order to run the website, not just `index.html`. Don't touch or move anything around in the folder. If you are storing a backup of the MyEtherWallet repo for the future, we recommend just storing the ZIP so you can be sure the folder contents stay intact.

As we are constantly updating MyEtherWallet.com, we recommend you periodically update your saved version of the repo.

---

### I cannot connect to my custom node. What do I do?

*   Verify the URL you entered is correct.
*   Verify the port you entered is correct.
*   Verify that if you are connecting to an http:// node you are running MyEtherWallet locally (NOT over https://).
*   Verify geth is running with `geth --rpc --rpccorsdomain "null" --keystore "dont_put_secret_files_here_ever"` or parity is running with `parity --rpccorsdomain "*" --keys-path "dont_put_secret_files_here_ever"`
*   Verify your node is actually up and running.
*   Try removing the node and adding it again.

---

### How do I send tokens & add custom tokens?

[Ethplorer.io](https://ethplorer.io/) is a great way to explore tokens and find the decimals of a token.

1.  Navigate to the "Send Ether & Tokens" page.
2.  Unlock your wallet.
3.  Enter the address you would like to send to in the "To Address:" field.
4.  Enter the amount you would like to send.
5.  Select which token you would like to send.
6.  If you do not see the token listed

1.  Click "Custom".
2.  Enter the address, name, and decimals of the token. These are provided by the developers of the token and are also needed when you "Add a Watch Token" to Mist.
3.  Click "Save".
4.  You can now send that token as well as see it's balance in the sidebar.

8.  Click "Generate Transaction".
9.  A couple more fields will appear. This is your browser generating the transaction.
10.  Click the blue "Send Transaction" button below that.
11.  A pop-up will appear. Verify that the amount and the address you are sending to are correct. Then click "Yes, I am sure! Make transaction." button.
12.  The transaction will be submitted. The TX Hash will display. You can click that TX Hash to see it on the blockchain.

---

### What happens if your site goes down?

MyEtherWallet is not a web wallet. You don't have a login and nothing ever gets saved to our servers. It is simply an interface that allows you interact with the blockchain.

If MyEtherWallet.com goes down, you would have to find another way (like geth or Ethereum Wallet / Mist) to do what we are doing. But you wouldn't have to "get" your Ether out of MyEtherWallet because it's not in MyEtherWallet. It's in whatever wallet your generated via our site.

You can import your unencrypted private key and your Geth/Mist Format (encrypted) files directly into geth / Ethereum Wallet / Mist very easily now. See question #12 below.

In addition, the likelihood of us taking MyEtherWallet down is slim to none. It costs us almost nothing to maintain as we aren't storing any information. If we do take the domain down, it still is, and always will be, publicly available at [https://github.com/kvhnuke/etherwallet](https://github.com/kvhnuke/etherwallet/tree/gh-pages). You can download the ZIP there and run it locally.

---

### Is the "Send Ether & Tokens" page offline?

No. It needs the internet in order to get the current gas price, nonce of your account, and broadcast the transaction (aka "send"). However, it only sends the signed transaction. Your private key safely stays with you. We also now provide an "Offline Transaction" page so that you can ensure your private keys are on an offline/airgapped computer at all times.

---

### How do I make an offline transaction?

1.  Navigate to the "Offline Transaction" page via your online computer.
2.  Enter the "From Address". Please note, this is the address you are sending FROM, not TO. This generates the nonce and gas price.
3.  Move to your offline computer. Enter the "TO ADDRESS" and the "AMOUNT" you wish to send.
4.  Enter the "GAS PRICE" as it was displayed to you on your online computer in step #1.
5.  Enter the "NONCE" as it was displayed to you on your online computer in step #1.
6.  The "GAS LIMIT" has a default value of 21000\. This will cover a standard transaction. If you are sending to a contract or are including additional data with your transaction, you will need to increase the gas limit. Any excess gas will be returned to you.
7.  If you wish, enter some data. If you enter data, you will need to include more than the 21000 default gas limit. All data is in HEX format.
8.  Select your wallet file -or- your private key and unlock your wallet.
9.  Press the "GENERATE SIGNED TRANSACTION" button.
10.  The data field below this button will populate with your signed transaction. Copy this and move it back to your online computer.
11.  On your online computer, paste the signed transaction into the text field in step #3 and click send. This will broadcast your transaction.

---

### How do I import a wallet created with MyEtherWallet into geth / Ethereum Wallet / Mist?

Using an Geth/Mist JSON file from MyEtherWallet v2+....

1.  Go to the "View Wallet Info" page.
2.  Unlock your wallet using your **encrypted** private key or JSON file.
3.  Find the "Download JSON file - Geth/Mist Format (encrypted)" section. Press the "Download" button below that. You now have your keystore file.
4.  Open the Ethereum Wallet application.
5.  In the menu bar, go "Accounts" -> "Backup" -> "Accounts"
6.  This will open your keystore folder. Copy the file you just downloaded (`UTC--2016-04-14......../`) into that keystore folder.
7.  Your account should show up immediately under "Accounts."

Using your unencrypted private key...

1.  If you do not already have your unencrypted private key, navigate to the "View Wallet Details" page.
2.  Select your wallet file -or- enter/paste your private key to unlock your wallet.
3.  Copy Your Private Key (unencrypted).
4.  If you are on a Mac

*   Open Text Edit and paste this private key.
*   Go to the menu bar and click "Format" -> "Make Plain Text".
*   Save this file to your `desktop/` as `nothing_special_delete_me.txt`. Make sure it says "UTF-8" and "If no extension is provided use .txt" in the save dialog.
*   Open terminal and run the following command: `geth account import ~/Desktop/nothing_special_delete_me.txt`
*   This will prompt you to make a new password. This is the password you will use in geth / Ethereum Wallet / Mist whenever you send a transaction, so don't forget it.
*   After successful import, delete `nothing_special_delete_me.txt`
*   The next time you open the Ethereum Wallet application, your account will be listed under "Accounts".

6.  If you are on a PC

*   Open Notepad & paste the private key
*   Save the file as `nothing_special_delete_me.txt` at `C:`
*   Run the command, `geth account import C:\nothing_special_delete_me.txt`
*   This will prompt you to make a new password. This is the password you will use in geth / Ethereum Wallet / Mist whenever you send a transaction, so don't forget it.
*   After successful import, delete `nothing_special_delete_me.txt`
*   The next time you open the Ethereum Wallet application, your account will be listed under "Accounts".

---

### What does "Insufficient funds. Account you try to send transaction from does not have enough funds. Required XXXXXXXXXXXXXXXXXXX and got: XXXXXXXXXXXXXXXX." Mean?

This means you do not have enough Ether in your account to cover the cost of gas. Each transaction (including token and contract transactions) require gas and that gas is paid in Ether. The number displayed is the amount required to cover the cost of the transaction in Wei. Take that number, divide by `1000000000000000000`, and subtract the amount of Ether you were trying to send (if you were attempting to send Ether). This will give you the amount of Ether you need to send to that account to make the transaction.

---

### Some sites randomize (seed) the private key generation via mouse movements. MyEtherWallet.com doesn't do this. Is the random number generation for MyEtherWallet safe?

While the mouse moving thing is clever and we understand why people like it, the reality is window.crypto ensures more entropy than your mouse movements. The mouse movements aren't unsafe, it's just that we (and tons of other crypto experiments) believe in window.crypto. In addition, MyEtherWallet.com can be used on touch devices. Here's a [conversation between an angry redditor and Vitalik Buterin regarding mouse movements v. window.crypto](https://www.reddit.com/r/ethereum/comments/2bilqg/note_there_is_a_paranoid_highsecurity_way_to/cj5sgrm) and here is the [the window.crypto w3 spec](https://dvcs.w3.org/hg/webcrypto-api/raw-file/tip/spec/Overview.html#dfn-GlobalCrypto).

---

### Why hasn't the account I just created show up in the blockchain explorer? (ie: etherchain, etherscan)

Accounts will only show up in a blockchain explorer once the account has activity on it—for example, once you have transferred some Ether to it.

---

### How do I check the balance of my account?

You can use a blockchain explorer like [etherscan.io](http://etherscan.io/). Paste your address into the search bar and it will pull up your address and transaction history. For example, here's what our [donation account](http://etherscan.io/address/0x7cb57b5a97eabe94205c07890be4c1ad31e486a8) looks like on etherscan.io

---

### Why isn't my balance showing up when I unlock my wallet?

This is most likely due to the fact that you are behind a firewall. The API that we use to get the balance and convert said balance is often blocked by firewalls for whatever reason. You will still be able to send transactions, you just need to use a different method to see said balance, like etherscan.io
---

### Where is my geth wallet file?

*   Mac: `~/Library/Ethereum/keystore`
*   Linux: `~/.ethereum/keystore`
*   Windows: `%APPDATA%/Ethereum/keystore`

---

### Where is my Mist wallet file?

Mist files are typically found in the file locations above, but it's much easier to open Mist, select "Accounts" in the top bar, select "Backup", and select "Accounts". This will open the folder where your files are stored.

---

### Where is my pre-sale wallet file?

Wherever you saved it. ;) It also was emailed to you, so check there. Look for the file called `"ethereum_wallet_backup.json"` and select that file. This wallet file will be encrypted with a password that you created during the purchase of the pre-sale.

---

### Couldn't everybody put in random private keys, look for a balance, and send to their own address?

Short version: yes, but finding an account with a balance would take longer than the universe...so...no.

Long ELI5 Version: So Ethereum is based on [Public Key Cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography), specifically [Elliptic curve cryptography](https://eprint.iacr.org/2013/734.pdf) which is very widely used, not just in Ethereum. Most servers are protected via ECC. Bitcoin uses the same, as well as SSH and TLS and a lot of other stuff. The Ethereum keys specifically are 256-bit keys, which are stronger than 128-bit and 192-bit, which are also widely used and still considered secure by experts.

In this you have a private key and a public key. The private key can derive the public key, but the public key cannot be turned back into the private key. The fact that the internet and the world’s secrets are using this cryptography means that if there is a way to go from public key to private key, your lost ether is the least of everyone’s problems.

Now, that said, YES if someone else has your private key then they can indeed send ether from your account. Just like if someone has your password to your email, they can read and send your email, or the password to your bank account, they could make transfers. You could download the Keystore version of your private key which is the private key that is encrypted with a password. This is like having a password that is also protected by another password.

And YES, in theory you could just type in a string of 64 hexadecimal characters until you got one that matched. In fact, smart people could write a program to very quickly check random private keys. This is known as "brute-forcing" or "mining" private keys. People have thought about this long and hard. With a few very high end servers, they may be able to check 1M+ keys / second. However, even checking that many per second would not yield access to make the cost of running those servers even close to worthwhile - it is more likely you, and your great-grandchildren, will die before getting a match.

If you know anything about Bitcoin, [this will put it in perspective:](http://bitcoin.stackexchange.com/questions/32331/two-people-with-same-public-address-how-will-people-network-know-how-to-deliver) *To illustrate how unlikely this is: suppose every satoshi of every bitcoin ever to be generated was sent to its own unique private keys. The probability that among those keys there could be two that would correspond to the same address is roughly one in 100 quintillion.

[If you want something a bit more technical:](http://security.stackexchange.com/questions/25375/why-not-use-larger-cipher-keys/25392#25392) *These numbers have nothing to do with the technology of the devices; they are the maximums that thermodynamics will allow. And they strongly imply that brute-force attacks against 256-bit keys will be infeasible until computers are built from something other than matter and occupy something other than space.

Of course, this all assumes that keys are generated in a truly random way & with sufficient entropy. The keys generated here meet that criteria, as do Jaxx and Mist/geth. The Ethereum wallets are all pretty good. Keys generated by brainwallets do not, as a person's brain is not capable of creating a truly random seed. There have been a number of other issues regarding lack of entropy or seeds not being generated in a truly random way in Bitcoin-land, but that's a separate issue that can wait for another day.


---

### Security

If one of your first questions is "Why should I trust these people?", that is a good thing. Hopefully the following will help ease your fears.

*   We've been up and running since August 2015\. If you search for ["myetherwallet" on reddit](https://www.reddit.com/search?q=myetherwallet), you can see numerous people who use us with great success.
*   We aren't going to take your money or steal your private key(s). There is no malicious code on this site. In fact the "GENERATE WALLET" pages are completely client-side. That means that all the code is executed on **your computer** and it is never saved and transmitted anywhere.
*   Check the URL -- This site is being served through GitHub and you can see the source code here: [https://github.com/kvhnuke/etherwallet/tree/gh-pages](https://github.com/kvhnuke/etherwallet/tree/gh-pages) to [https://www.myetherwallet.com](https://www.myetherwallet.com).
*   For generating wallets, you can download the [source code and run it locally](https://github.com/kvhnuke/etherwallet/releases/latest). See #5 above.
*   Generate a test wallet and check and see what network activity is happening. The easiest way for you to do this is to right click on the page and click "inspect element". Go to the "Network" tab. Generate a test wallet. You will see there is no network activity. You may see something happening that looks like data:image/gif and data:image/png. Those are the QR codes being generated...on your computer...by your computer. No bytes were transferred.
*   If you do not feel comfortable using this tool, then by all means, do not use it. We created this tool as a helpful way for people to generate wallets and make transactions without needing to dive into command line or run a full node. Again, feel free to reach out if you have concerns and we will respond as quickly as possible. Thanks!

---

### More Helpful Answers to Frequent Questions

*   [Starter guide: (almost) all the links you'll need to start understanding ethereum.](https://www.reddit.com/r/ethereum/comments/3vxvlx/starter_guide_almost_all_the_links_youll_need_to/)
*   [Step-by-step Wallet Advice by /u/gattacibus](https://www.reddit.com/r/ethtrader/comments/41lftl/need_wallet_advice/cz3cs4i)
*   [/r/ethereum: Tips for Recovering Your Presale Password, Especially for Those Not Good w/ Computers](https://www.reddit.com/r/ethereum/comments/46887p/tips_for_recovering_your_presale_password/)
*   [forum.ethereum.org: I forgot my Pre-Sale Wallet Password / My PW Isn't Working](https://forum.ethereum.org/discussion/3045/request-post-password-instructions-that-were-given-for-the-presale-last-year)
*   [/r/ethereum: I forgot my Pre-Sale Wallet Password / My PW Isn't Working](https://www.reddit.com/r/ethereum/comments/3g6aw0/i_lost_my_password_to_my_presale_wallet_admit_it/)