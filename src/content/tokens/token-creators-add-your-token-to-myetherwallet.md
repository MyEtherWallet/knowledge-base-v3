{
"title"       : "Adding your Token as a Default Token",
"sort"        : "03",
"category"    : "Tokens",
"description" : "Tokens",
"date_published" : "2017-10-08T08:00:00+08:00",
"date_modified"  : "2018-04-03T08:00:00+08:00"
}

---%



#### [If you are a person experimenting with tokens, you can add a token to your local version of MyEtherWallet](https://myetherwallet.github.io/knowledge-base/send/adding-new-token-and-sending-custom-tokens.html)

### If you have a token that other people also have, or will have in the coming days, you can add it to our site. You will need to provide:

*   **Symbol** of your token
*   **Address** of your token
*   **Decimals** of your token
*   **Name** of your token
*   **ENS Address** of your token *(optional)*
*   **Your official Website**
*   **Your <span style="text-decoration: underline;">direct</span> customer support email**
    *   Due to high numbers of token sale holders NOT providing support to their investors, we will remove your token if you do not help the people who made you millionaires.
*  Optionally, you may also include your blog, social media sites, chat channels, your logo, etc.

### 1. Submit your Tokens as Default Tokens


*   Go to [https://github.com/ethereum-lists/tokens/tree/master/tokens/eth](https://github.com/ethereum-lists/tokens/tree/master/tokens/eth)
    *   *If your token exists on a different network, [you can add them here](https://github.com/ethereum-lists/tokens/tree/master/tokens)*
*   Login or join Github
*   Create a new file with the name like `<token_address>.json` in the directory named after the network your token is on
*   Populate the body with valid JSON;

````json
{
  "symbol": "",
  "address": "",
  "decimals": "",
  "name": "",
  "ens_address": "",
  "website": "",
  "logo": {
    "src": "",
    "width": "",
    "height": "",
    "ipfs_hash": ""
  },
  "support": {
    "email": "",
    "url": ""
  },
  "social": {
    "blog": "",
    "chat": "",
    "facebook": "",
    "forum": "",
    "github": "",
    "gitter": "",
    "instagram": "",
    "linkedin": "",
    "reddit": "",
    "slack": "",
    "telegram": "",
    "twitter": "",
    "youtube": ""
  }
}
````
*   At the bottom under "Commit new file" type "Added `YOUR_TOKEN_SYMBOL` Token to Defaults" in the title box
*   In the bigger box below that: add any additional information you'd like to let us know about
*   Click the green "Commit new file" button
*   This next page is a review of what you did
*   Click the "Create Pull Request" button.....twice
*   That's it. You successfully made a new pull request! Tell all your friends
*   We will now review it and pull it in and it will be made live on the site. We may also ask you questions if something is confusing for whatever reason

### 2. Add your token sale address & manual gas limits to ensure a smooth sale

*   Go here [https://github.com/kvhnuke/etherwallet/blob/mercury/app/scripts/customGas.js](https://github.com/kvhnuke/etherwallet/blob/mercury/app/scripts/customGas.js)
*   Add the following JSON object into the JSON array
```json
{
// Something descriptive about my token
to:         '',
gasLimit:   300000,
data:       '',
msg:        'x token - website https://example.org'
}
```
*   Replace the information with your information:
  *   `to` The address users will be sending to
  *   `gasLimit` The gas limit you are recommending that ensures there will be no Out of Gas errors
  *   `data` Optional. If there is a standard data field, add that string
  *   `msg` Optional. If people need to generate data, include a note here to remind them. You can include the block start times or date and what token sale it is for
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
*   Add the following JSON object into the JSON array
```json
{
"name": "",
"address": "",
"abi": ''
}
```
*   Replace information with your contract name, address, and ABI.
*   At the bottom under "Commit changes" type "Added `YOUR_CONTRACT_NAME` contract ABI" in the title box
*   Any other notes you would like us to see can be included below
*   Click the green `"Propose File change"` button
*   This next page is a review of what you did
*   Click the `"Create Pull Request"` button.....twice
*   That's it. You successfully made a new pull request! Tell all your friends
*   We will now review it and pull it in and it will be made live on the site. We may also ask you questions if something is confusing for whatever reason

Thank you.
