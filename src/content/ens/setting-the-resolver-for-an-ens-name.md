{
"title"       : "Setting the resolver for an ENS name",
"sort"        : "06",
"category"    : "ENS",
"description" : "ENS",
"date_published" : "2017-05-05T08:00:00+08:00",
"date_modified"  : "2017-05-05T08:00:00+08:00"
}

---%


### Set the Resolver for your Name

1. Go to the contracts tab.
2. Choose ENS - Registry: 0x314159265dD8dbb310642f98f50C066173C1259b. Click `"Access"`.
3. Select `setResolver`.
4. Find you name on Etherscan.io and copy the namehash.
5. Enter the namehash of your name under `node (bytes32)`.
6. Enter the Public Resolver Address under `resolver (address)`: `0x5FfC014343cd971B7eb70732021E26C35B744cc4`
7. Unlock the owner's account.
8, Click WRITE.
9. Generate and send this transaction – leave "Amount to Send" as 0
10. [TX should look like this.](https://etherscan.io/tx/0x60eec50b492375bce25684f806599873b7f682e1ba504c8bed7cc90c33368118)


### Set the Address That your Name will Resolve To
1. Go to the contracts tab.
2. Choose ENS-Public Resolver: 0x5FfC014343cd971B7eb70732021E26C35B744cc4. Click "Access".
3. Select `setAddr`.
4. Find you name on Etherscan.io and copy the namehash.
5. Enter the Namehash of your name under "node (bytes32)".node (bytes32):
6. Enter the Address you would like to resolve to under `addr (address)`
7. Unlock the owner's account.
8. Click `WRITE`.
9. Generate and send this transaction – leave "Amount to Send" as 0
10. [TX should look like this.](https://etherscan.io/tx/0xe4b8cbbb9c30a9066e4d430e347e07442ccc99b927ed73280792aee718ecbd30)
