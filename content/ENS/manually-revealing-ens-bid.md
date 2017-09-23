/*
Title: Manually revealing your ENS bid
Sort: 12
*/

### Get Your Bid TX Hash

First, look up your address on [etherscan.io](https://etherscan.io) in order to find the transaction in which you placed your bid. 

**Look for:**

*   An outgoing transaction (orange)
*   To [ENS-Registrar](https://etherscan.io/address/0x6090a6e47849629b7245dfa1ca21d94cd15878ef)
*   With an ETH value >= 0.01 ETH _(not one that says "0 Ether")_
*   Was sent 2-4 days ago _(if you are just revealing your bid now)_
*   That, when you click on the TX hash, has "Function: newBid(bytes32 sealedBid)" under "Input Data"

Once you find this, copy and paste the value in the "Input Data" into a text document & remove the "MethodId:" and "[0]:" so that it looks like this: `0xce92dced69faf18dd0953d9124d7917234b0efc05c78fd0d9abfc6ffb32d512680fdbb65`.


### Generate Reveal Information & Ensure it Matches Bid TX Hash

1. Now, go to [https://www.myetherwallet.com/helpers.html](https://www.myetherwallet.com/helpers.html)

2. Scroll to the "ENS" section, depending on what you saved, enter the following:

    *   The address you bid from
    *   ENS Name you Bid On _(no '.eth' at the end!)_, or the namehash from your long string under "Hashed ENS Name (Label Hash)"
    *   The amount you bid
    *   Your Secret, or the sha3 secret from your long string under "Your Secret (Hashed)"

3. When you do this, the following four fields will populate with long data. You want compare the string you copied earlier ( `0xce92dced69faf18dd0953d9124d7917234b0efc05c78fd0d9abfc6ffb32d512680fdbb65`) to the string shown under **"New Bid Data"**. These two should match.

4. Pro-Tip: Copy the finalize data from the Helpers page & save it somewhere. This will allow you to easily finalize the transaction in a few days.

5. Copy the "Reveal Data" string.

### Send Transaction to Reveal

1. In a new tab, go to [https://www.myetherwallet.com/#send-transaction](https://www.myetherwallet.com/#send-transaction) and unlock the wallet for the address that you placed the bid on. This address should also be the same address entered on the https://www.myetherwallet.com/helpers.html.

2. Enter the following information into the fields:

    *   To: 0x6090a6e47849629b7245dfa1ca21d94cd15878ef
    *   Amount: 0 ETH
    *   Gas Limit: 200000
    *   Data: From the "Reveal Data" field on [https://www.myetherwallet.com/helpers.html](https://www.myetherwallet.com/helpers.html)

3. Generate and sign your transaction.

4. Click your TX hash after you send it. Ensure there are no errors (you may have to refresh after about a minute.)

5. Then, in a new tab, go to [https://etherscan.io/enslookup?q=yourname.eth](https://etherscan.io/enslookup?q=yourname.eth) and type in the name you bid on. Ensure that you see a very recent transaction from your address with "Unseal Bid" next to it.

