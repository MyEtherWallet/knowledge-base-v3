{
"title"       : "Withdrawing DAO tokens",
"sort"        : "26",
"category"    : "FAQ",
"description" : "FAQ",
"date_published" : "2017-06-20T08:00:00+08:00",
"date_modified"  : "2017-06-20T08:00:00+08:00"
}

---%

### The old DAO MyEtherWallet doesn't seem to want to stay online & functioning. We're sorry.

**New instructions & where you can go to get help: [https://www.reddit.com/r/ethereum/comments/7ojy4h/there_are_still_200_million_unclaimed_funds_in/dsap0gr/](https://www.reddit.com/r/ethereum/comments/7ojy4h/there_are_still_200_million_unclaimed_funds_in/dsap0gr/)**


- Check which funds you can withdraw: [https://refunds.thedao.fund/](https://refunds.thedao.fund/)

- A general over view of what you can collect is here:
[https://medium.com/curator-multisig-phf-official-channel/dao-token-holders-come-claim-your-money-b428f186572a#.9ur5tfm26](https://medium.com/curator-multisig-phf-official-channel/dao-token-holders-come-claim-your-money-b428f186572a#.9ur5tfm26)

#### Walkthru for DAO Main withdraw

0. Have ETH in the account that has DAO tokens in it so you can collect the refund.

1. Go to https://www.myetherwallet.com/#send-transaction (the current version)

2. Make sure the ETH node in the top right corner is selected (Try out Giveth.io's donated node ;-) )

3. At the top of the screen there is a slider for gasPrice. Make sure you have selected a gasPrice that will make your tx go thru. If the CryptoKitties are still breeding like CryptoBunnies this might need to be 61 Gwei or more! If the network isnt under much load 1 Gwei or less will work, check https://ethgasstation.info/ to find the Standard gasPrice that will work immediately.

4. Access the key for the address holding your DAO tokens (this usu means selecting "Keystore / JSON File" finding your keystore file on your computer and then typing in the password) and then put this info into the boxes that pop up on the screen to approve the withdraw token contract to take your DAO tokens:

4a. TO `0xBB9bc244D798123fDe783fCc1C72d3Bb8C189413`

4b. Value: `0`!!!!!!!

4c. gasLimit: `100000`

4d. DATA: `0x095ea7b3000000000000000000000000bf4ed7b27f1d666546e30d74d50d173d20bca7540000000000000000000000000000000000000000da0da0da0da0da0da0da0da0`

4e. Click Generate Tx and then click Send Tx

5. Stay on this screen and make a second tx, but this time with:

5a. TO `0xbf4ed7b27f1d666546e30d74d50d173d20bca754`

5b. Value: `0`!!!!!!!

5c. gasLimit: `100000`

5d. DATA: `0x3ccfd60b`

5e. Click Generate Tx and then click Send Tx

Now wait for the Ethereum Blockchain to work its magic and you will have a bunch of ETH delivered to you :-) Remember that a lot of people worked hard to make this possible, the whole Ethereum network hard forked for this! Pay it forward to the people around you, if this was built on Bitcoin, you would have lost all your funds #gratitude ;-D


#### Walk thru for ExtraBalance Refund

This short explainer is to help you understand what is happening in the code, if you don't really care and just want that sweet sweet ether, dont worry about it and skip to the numbered steps.

Withdrawing from the ExtraBal Withdraw contract is a 2 step process. There were ExtraBal Tokens sent to everyone that contributed to The DAO's ExtraBalance contract, these tokens are the accounting for the ExtraBal Withdraw contract (Special thx goes to Bokky Poobah, Nick Johnson, Beltran Berrocal, and Alexey Akunhov for setting this all up). The first tx tells the ExtraBal TOKEN contract to `approve()` the ExtraBal WITHDRAW contract to take all your ExtraBal tokens , the second transaction tells the ExtraBal WITHDRAW contract to count your tokens and give you the money.

0. Have ETH in the account that can collect the refund.

1. Go to https://www.myetherwallet.com/#send-transaction (the current version)

2. Make sure the ETH node in the top right corner is selected (Try out Giveth.io's donated node ;-) )

3. At the top of the screen there is a slider for gasPrice. Make sure you have selected a gasPrice that will make your tx go thru. If the CryptoKitties are still breeding like CryptoBunnies this might need to be 61 Gwei or more! If the network isnt under much load 1 Gwei or less will work, check https://ethgasstation.info/ to find the Standard gasPrice that will work immediately.

4. Access your key (this usu means selecting "Keystore / JSON File" finding your keystore file on your computer and then typing int he password) and then put this info into the boxes that pop up on the screen to approve the withdraw token contract to take your tokens:

4a. TO `0x5c40eF6f527f4FbA68368774E6130cE6515123f2`

4b. Value: `0`!!!!!!!

4c. gasLimit: `100000`

4d. DATA: `0x095ea7b3000000000000000000000000755cdba6ae4f479f7164792b318b2a06c759833b0000000000000000000000000000000000000000000000da0da0da0da0da0da0`

4e. Click Generate Tx and then click Send Tx

5. Stay on this screen and make a second tx, but this time with:

5a. TO `0x755cdba6ae4f479f7164792b318b2a06c759833b`

5b. Value: `0`!!!!!!!

5c. gasLimit: `100000`

5d. DATA: `0x3ccfd60b`

5e. Click Generate Tx and then click Send Tx

Now wait for the Ethereum Blockchain to work its magic and you will have a bunch of ETH delivered to you :-) Remember that a lot of people worked hard to make this possible, the whole Ethereum network hard forked for this! Pay it forward to the people around you, if this was built on Bitcoin, this wouldn't have happened ;-D

##### Walk thru for ETC (don't be afraid to tip the whitehats)

0. Have ETC in the account that you are using to interact with your wallet account.

1. Go to https://www.myetherwallet.com/#send-transaction (the current version)

2. Select the ETC node in the top right corner

3. Access your key (this usually means selecting "Keystore / JSON File" finding your keystore file on your computer and then typing int he password)

4. TO `0x9f5304da62a5408416ea58a17a92611019bd5ce3`

5. Value: `0`!!!!!!!

6. gasLimit: `100000`

7. DATA: insert something that looks like this BUT IS NOT THIS DATA:

`0xf3fef3a3000000000000000000000000839395e20bbB182fa440d08F850E6c7A8f6F0780000000000000000000000000000000000000000000000000000000000000000a`

--------pause---------

I am going to use this as a chance to explain what you are doing. so this isnt just annoying but hopefully you get something fun out of it :-)

https://github.com/BitySA/whetcwithdraw/blob/master/whetcwithdraw.sol#L155

you are calling that line ^^^. The data breaks down like this:

- `0x` is in front of everything always

- `f3fef3a3` is actually the withdraw function (in bytecode)

- `000000000000000000000000839395e20bbB182fa440d08F850E6c7A8f6F0780` is the address that should receive the ETC (without 0x in front).  This can be an exchange address, but I recommend you send it to your DAO Token address and then send it to an exchange from there using MEW.

- `000000000000000000000000000000000000000000000000000000000000000a` is the donation % but in hex, so if you wanted to donate 1% the last digit would be `1`, 10% the last digit would be `a`,  15% the last digit would be `f`, and 17% the last two digits would be `11` (Crazy right!)

-------continue--------

8. Click Generate Transaction and then Sign Transaction

9. All Done



### Old Instructions (probably doesn't work anymore)

#### You need to run the older version of MyEtherWallet (v3.3.7) to access the old DAO pages:

*   [MyEtherWallet (v3.3.7)](https://github.com/kvhnuke/etherwallet/releases/tag/v3.3.7) 
*   Click on `dist-v3.3.7.zip`
*   Unzip it
*   Double-click `index.html`
*   MyEtherWallet is now running entirely on your computer

In case you are not familiar, you need to keep the entire folder in order to run the website, not just `index.html`. Don't touch or move anything around in the folder.

#### Once you've got the site up:

*  Click the **Withdraw DAO page** in the footer
*  You will see three tabs:
	*  1 for withdrawing ETH
	*  1 for withdrawing ETC
	*  1 for withdrawing your ExtraBalance
*  Click the three red buttons on the three DAO tabs to withdraw.
*  Done!

**Note: You will need minimum 0.01 ETH and 0.01 ETC in order to cover the cost of gas necessary to process the withdrawals.**

---

*Etherscan.io was kind enough to host this older version of MyEtherWallet on their site for 1.5 years. Thank you etherscan! [https://etherscan.io/myetherwallet/](https://etherscan.io/myetherwallet/)*
