{
"title"       : "Adding your Token as a Default Token",
"sort"        : "6",
"category"    : "Tokens",
"description" : "Tokens"
}

---%



### [If you are a person experimenting with tokens, you can add a token to your local version of MyEtherWallet](https://myetherwallet.groovehq.com/knowledge_base/topics/how-do-i-send-tokens-and-add-custom-tokens)

### 1. If you have a token that other people also have, or will have in the coming days, you can add it to our site. You will need:

*   **Name** or **Symbol** of your token
*   **Address** of your token
*   **Decimals**
*   **Your official Website and/or**** Slack / Reddit / Forum / Chat / Whatever **
*   **Your <span style="text-decoration: underline;">direct</span> customer support email**
    *   Due to high numbers of token sale holders NOT providing support to their investors, we will remove your token if you do not help the people who made you millionaires.

### 2. Submit your Tokens as Default Tokens

*   Go to [https://github.com/kvhnuke/etherwallet/blob/mercury/app/scripts/tokens/ethTokens.json](https://github.com/kvhnuke/etherwallet/blob/mercury/app/scripts/tokens/ethTokens.json)
*   Login or join Github.
*   Click the pencil icon in upper right.
*   Scroll to the letter of your token (they are in alpha order)
*   Copy an existing token starting at the { and ending with },
*   Replace that information with your address, decimals, and symbol
*   At the bottom under "Commit changes" type "Added _____ Token to Defaults" in the title box
*   In the bigger box below that: add the links to your website, slack community, reddit, chat, whatever will help people if they have trouble and your support email address
*   Click the green "Propose File change" button.
*   This next page is a review of what you did.
*   Click the "Create Pull Request" button.....twice.
*   That's it. You successfully made a new pull request! Tell all your friends.
*   We will now review it and pull it in and it will be made live on the site. We may also ask you questions if something is confusing for whatever reason.

### 3. Add your token sale address & manual gas limits to ensure a smooth sale

*   Go here [https://github.com/kvhnuke/etherwallet/blob/mercury/app/scripts/customGas.js](https://github.com/kvhnuke/etherwallet/blob/mercury/app/scripts/customGas.js)
*   Find an existing entry that is over, or use our donation address (the top one)
*   Replace the information with your information:
*   Address: The address users will be sending to
*   Gas Limit: The gas limit you are recommending that ensures there will be no Out of Gas errors.
*   Data: Optional. If there is a standard data field, add that string.
*   Message: Optional. If people need to generate data, include a note here to remind them. You can include the block start times or date and what token sale it is for.
*   At the bottom under "Commit changes" type "Manual gas limits for upcoming _____ token" in the title box.
*   Any other notes you would like us to see can be included below.
*   Click the green "Propose File change" button.
*   This next page is a review of what you did.
*   Click the "Create Pull Request" button.....twice.
*   That's it. You successfully made a new pull request! Tell all your friends.
*   We will now review it and pull it in and it will be made live on the site. We may also ask you questions if something is confusing for whatever reason.


### 4. Adding your Contract / ABI

We now provide users with the ability to enter the address and it auto-populate with the ABI. If you have a contract (beyond the standard token contract) that users will be interacting with:

*   [https://github.com/kvhnuke/etherwallet/blob/mercury/app/scripts/abiDefinitions/ethAbi.json](https://github.com/kvhnuke/etherwallet/blob/mercury/app/scripts/abiDefinitions/ethAbi.json)
*   Copy from { to },
*   Replace information with your contract name, address, and ABI.
*   At the bottom under "Commit changes" type "Added _____ contract ABI" in the title box.
*   Any other notes you would like us to see can be included below.
*   Click the green "Propose File change" button.
*   This next page is a review of what you did.
*   Click the "Create Pull Request" button.....twice.
*   That's it. You successfully made a new pull request! Tell all your friends.
*   We will now review it and pull it in and it will be made live on the site. We may also ask you questions if something is confusing for whatever reason.

Thank you.
