/*
Title: Starting an Auction without Bidding
Sort: 14
Category: ENS
*/

You can open an auction without bidding. It's not the simplest thing in the world, but it's not the worst. It looks harder than it is:

*  Go to [https://www.myetherwallet.com/helpers.html](https://www.myetherwallet.com/helpers.html)
*  Find `NS Debugger & Data Grabber`
*  Type the name (without .eth) under `ENS Name you Bid on`
*  Copy the data provided under `Start Auction Data`
*  In a new tab, go to [https://www.myetherwallet.com/#send-transaction](https://www.myetherwallet.com/#send-transaction) and unlock the wallet you wish to start the auction with
*  Enter the following information into the fields:
    *  To: `0x6090a6e47849629b7245dfa1ca21d94cd15878ef`
    *  Amount: `0 ETH`
    *  Gas Limit: `00000`
    *  Data: From the `Start Auction Data` field on [https://www.myetherwallet.com/helpers.html](https://www.myetherwallet.com/helpers.html)
    *  Send your transaction
*  Go to etherscan.io and type the name-you-bid-on.eth in the search bar. It should take you a page similar to [https://etherscan.io/enslookup?q=yourname.eth](https://etherscan.io/enslookup?q=yourname.eth)
*  Look under `Related Txns` for the start auction call you just made.
*  Note: Depending on the gas price you use, it may not show up immediately


Please let us know if we can improve the above guide in any way. Obviously, coding a UI that allowed you to do this would be best, but we need to work with the limited time we have right now.

Best of luck!



---

---

---

Internal Note
Keep in sync with: *ENS - Start Auction w/o Bidding*
