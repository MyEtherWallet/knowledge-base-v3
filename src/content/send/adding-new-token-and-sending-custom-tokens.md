{
"title"       : "How to Add a Custom Token to MyEtherWallet",
"sort"        : "02",
"category"    : "Sending ETH & Tokens",
"description" : "Sending ETH & Tokens",
"date_published" : "2017-07-05T08:00:00+08:00",
"date_modified"  : "2017-11-11T08:00:00+08:00"
}

---%


Adding a new token / sending custom tokens / checking balance of tokens / seeing custom token / ERC-20

Any ERC-20 token can be added to your local MEW interface by following these instructions.


### Make sure it isn't already in the list:

1. Click the Orange "Show All Tokens" Button.

2. Scroll and click the token you want to load, where it says "Click to Load". You can also use `cmd/ctrl`+`f` to search for a token on the list more quickly.

3. If you have a balance you won't have to load it again—it will automatically load in the future.


### If your token is not on the list

#### via Ethplorer.io

0.  On the ["Send Ether & Tokens"](https://www.myetherwallet.com/#send-transaction) page on MEW, click `View Balance Only (Must use one of above options to send)` and paste *your* address.
1.  In a new tab, go to [Ethplorer.io](https://ethplorer.io/) 
2.  Type in the name of the token into their search bar, or navigate to your address and click on the token's name from that page. 
3.  At the very top on this page page is the address.
4.  Below that there is a field called "decimals", which is a number between 0 and 18.
6.  Back on MEW, click the `Add Custom Token` button on the right sidebar.
7.  Paste the `Address` from the top of the Ethplorer.io page
8.  Type in what you want to call it - the name or the symbol.
9.  Paste the `Decimals` from Ethplorer.io.
10.  Click `"Save"`.

🎉 You can now send your new token and see it's balance in the sidebar!

#### via Etherscan.io

0.  On the ["Send Ether & Tokens"](https://www.myetherwallet.com/#send-transaction) page on MEW, click `View Balance Only (Must use one of above options to send)` and paste *your* address.
1.  In the sidebar, click the `https://etherscan.io` link under `Transaction History` or `How to See your Tokens`.
2.  Click the dropdown in the right-upper quadrant. It's labeled `Token Tracker`. 
3.  Click the token that you aren't seeing on MEW.
4.  Copy the string next to `Contact Address`.
6.  Back on MEW, click the `Add Custom Token` button on the right sidebar.
7.  Paste the `Contact Address`.
8.  Type in what you want to call it - the name or the symbol.
9.  Return to Etherscan.io. Look for the number (between 0 and 18) next to `Token Decimals`.
10. Enter this under `Decimals` on MEW.
10.  Click `"Save"` on MEW.

🎉 You can now send your new token and see it's balance in the sidebar!

### Removing Custom Tokens

To remove a custom token, click the little ( - ) icon next to your token. This will remove it from the interface. It is not deleting or removing the tokens themselves. They are still safely in your wallet, we promise.

### Related Reading

- [Showing & Loading Custom Tokens](https://myetherwallet.github.io/knowledge-base/tokens/showing-and-loading-tokens.html)

- [Can I store any coin in MyEtherWallet?](https://myetherwallet.github.io/knowledge-base/faq/sending-bitcoin-btc-ltc-xmr-to-myetherwallet.html)

- [I am throwing a #FOMOFest (aka a token sale, token creation period, ICO) and want to add my token to MEW for all my investors. What do I do?](https://myetherwallet.github.io/knowledge-base/tokens/token-creators-add-your-token-to-myetherwallet.html)
