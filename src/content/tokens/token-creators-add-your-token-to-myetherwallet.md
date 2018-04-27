{
"title"       : "Adding your Token as a Default Token",
"sort"        : "03",
"category"    : "Tokens",
"description" : "Tokens",
"date_published" : "2017-10-08T08:00:00+08:00",
"date_modified"  : "2017-10-28T08:00:00+08:00"
}

---%



#### [If you are a person experimenting with tokens, you can add a token to your local version of MyEtherWallet](https://kb.myetherwallet.com/send/adding-new-token-and-sending-custom-tokens.html)

### If you have a token that other people also have, or will have in the coming days, you can add it to our site. You will need to provide:

*   **Name** of your token
*   **Symbol** of your token
*   **Address** of your token
*   **Decimals** of your token
*   **Your official Website**
*   **Your <span style="text-decoration: underline;">direct</span> customer support email**
    *   Due to high numbers of token sale holders NOT providing support to their investors, we will remove your token if you do not help the people who made you millionaires.
*  Optionally, you may also include your blog, social media sites, chat channels, your logo, etc.

### 1. Submit your Tokens as Default Tokens

*   Go to [https://github.com/MyEtherWallet/ethereum-lists/blob/master/tokens/tokens-eth.json](https://github.com/MyEtherWallet/ethereum-lists/blob/master/tokens/tokens-eth.json)
    *   *If your token exists on a different network, [you can add them here](https://github.com/MyEtherWallet/ethereum-lists/tree/master/tokens)
*   Login or join Github
*   Click the pencil icon in upper right
*   Scroll to the letter of your token (they are in alpha order)
*   Copy an existing token starting at the `{` and ending with `},`
*   Remove any information that you copied that isn't yours
*   Add your address, decimals, name, and symbol
*   Add your website
*   Add your support email
*   Add any other additional links
*   At the bottom under "Commit changes" type "Added `YOUR_TOKEN_SYMBOL` Token to Defaults" in the title box
*   In the bigger box below that: add any additional information you'd like to let us know about
*   Click the green "Propose File change" button
*   This next page is a review of what you did
*   Click the "Create Pull Request" button.....twice
*   That's it. You successfully made a new pull request! Tell all your friends
*   We will now review it and pull it in and it will be made live on the site. We may also ask you questions if something is confusing for whatever reason

### 2. Add your token sale address & manual gas limits to ensure a smooth sale

*   Go here [https://github.com/kvhnuke/etherwallet/blob/mercury/app/scripts/customGas.js](https://github.com/kvhnuke/etherwallet/blob/mercury/app/scripts/customGas.js)
*   Find an existing entry that is over, or use our donation address (the top one)
*   Replace the information with your information:
*   Address: The address users will be sending to
*   Gas Limit: The gas limit you are recommending that ensures there will be no Out of Gas errors
*   Data: Optional. If there is a standard data field, add that string
*   Message: Optional. If people need to generate data, include a note here to remind them. You can include the block start times or date and what token sale it is for
*   At the bottom under "Commit changes" type "Manual gas limits for upcoming _____ token" in the title box
*   Any other notes you would like us to see can be included below.
*   Click the green `"Propose File change"` button
*   This next page is a review of what you did
*   Click the `"Create Pull Request"` button.....twice
*   That's it. You successfully made a new pull request! Tell all your friends
*   We will now review it and pull it in and it will be made live on the site. We may also ask you questions if something is confusing for whatever reason


### 3. Adding your Contract / ABI

We now provide users with the ability to enter the address and it auto-populate with the ABI. If you have a contract that IS NOT YOUR ERC-20 TOKEN CONTRACT that users WILL ACTUALLY BE interacting with:

*   [https://github.com/kvhnuke/etherwallet/blob/mercury/app/scripts/abiDefinitions/ethAbi.json](https://github.com/kvhnuke/etherwallet/blob/mercury/app/scripts/abiDefinitions/ethAbi.json)
*   Copy from `{` to `},`
*   Replace information with your contract name, address, and ABI.
*   At the bottom under "Commit changes" type "Added `YOUR_CONTRACT_NAME` contract ABI" in the title box
*   Any other notes you would like us to see can be included below
*   Click the green `"Propose File change"` button
*   This next page is a review of what you did
*   Click the `"Create Pull Request"` button.....twice
*   That's it. You successfully made a new pull request! Tell all your friends
*   We will now review it and pull it in and it will be made live on the site. We may also ask you questions if something is confusing for whatever reason

Thank you.
