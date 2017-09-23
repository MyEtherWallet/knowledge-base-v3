/*
Title: Debugging a [BAD INSTRUCTION] Reveal
Sort: 4
Category: ENS
*/

### 1\. Make sure you actually placed a bid:

*   Look up your address on [etherscan.io](https://etherscan.io) in order to find the transaction in which you placed your bid.
*   It will be an outgoing transaction (orange)
*   To [ENS-Registrar](https://etherscan.io/address/0x6090a6e47849629b7245dfa1ca21d94cd15878ef)
*   With an ETH value >= 0.01 ETH _(not one that says "0 Ether")_
*   Was sent 2-4 days ago _(if you are just revealing your bid now)_
*   That, when you click on the TX hash, has "Function: newBid(bytes32 sealedBid)" under "Input Data"
*   If you also opened the auction, this transaction should be around the same time, but not before, the time you started the auction. You can find the start auction TX by typing in your name on [https://etherscan.io/enslookup?q=yourname.eth](https://etherscan.io/enslookup?q=yourname.eth) and clicking on the bottom-most TX hash.

Once you find this, copy and paste the value in the "Input Data" into a text document & remove the "MethodId:" and "[0]:" so that it looks like this: `0xce92dced69faf18dd0953d9124d7917234b0efc05c78fd0d9abfc6ffb32d512680fdbb65`.

### 2\. Check to see if the information you saved matches the information you sent with your bid.

*   Go to [https://www.myetherwallet.com/helpers.html](https://www.myetherwallet.com/helpers.html)
*   Scroll to the "ENS" section and enter the following:
*   The address you bid from
*   ENS Name you Bid On _(no '.eth' at the end!)_, or the namehash from your long string under "Hashed ENS Name (Label Hash)"
*   The amount you bid
*   Your Secret, or the sha3 secret from your long string under "Your Secret (Hashed)"

When you do this, the following four fields will populate with long data. You want compare the string you copied earlier ( `0xce92dced69faf18dd0953d9124d7917234b0efc05c78fd0d9abfc6ffb32d512680fdbb65`) to the string shown under **"New Bid Data"**.

### 3\. Try alternate values.

*   Try entering 0.01, 0.1, 1 and any other values you have bid on other auctions under "Amount you Bid (ETH)".
*   Check the amount that you sent with your bid (the amount shown that you sent in your transaction from step 1)
*   Look through your transaction history or any information you have saved for other auctions, and try using those values at the amount you bid.
*   Check again to make sure that you for sure sent from the address you entered.
*   Try changing secrets to other secrets for other auctions. Did you change the secret instead of using the pre-filled one? Try entering common words and phrases you may have used.

### 4\. Once you match the string successfully, you can reveal your bid manually using this exact information.

Copy the "Reveal Data" string and go to [https://www.myetherwallet.com/#send-transaction](https://www.myetherwallet.com/#send-transaction) and unlock the wallet for the address that you placed the bid on. This address should also be the same address entered on the https://www.myetherwallet.com/helpers.html.

Enter the following information into the fields:

*   To: 0x6090a6e47849629b7245dfa1ca21d94cd15878ef
*   Amount: 0 ETH
*   Gas Limit: 200000
*   Data: From the "Reveal Data" field on [https://www.myetherwallet.com/helpers.html](https://www.myetherwallet.com/helpers.html)

### 5\. Generate and sign your transaction.

Click your TX hash after you send it. Ensure there are no errors (you may have to refresh a few times.)

Then, in a new tab, go to [https://etherscan.io/enslookup?q=yourname.eth](https://etherscan.io/enslookup?q=yourname.eth) and type in the name you bid on. Ensure that you see a very recent transaction from your address with "Unseal Bid" next to it.

##### You should probably also save the finalize data. This will allow you to easily finalize the transaction in a few days.


##### If you forgot to save your secret key, [read this](https://myetherwallet.groovehq.com/knowledge_base/topics/brute-forcing-secret-word-phrases)
