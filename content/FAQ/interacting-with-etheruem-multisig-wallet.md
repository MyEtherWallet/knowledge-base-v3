/*
Title: How do I interact with a Multisig Contract?
Sort: 20
*/

Go to the [Contract tab](https://www.myetherwallet.com/#contracts).

There should be a Mist Multisig Contract ABI in the dropdown. If not, you can manually use the ABI at the bottom of this page.

1.  First, enter YOUR Contract Address in the `Contract Address` field at the top.
2.  Second, you want to **EXECUTE**.
    1.  Select `execute`from the dropdown.
    2.  Enter the address you want to send to in the `_to`field.
    3.  Enter the amount you want to send in the `_value`field.
    4.  Leave the `data` field empty.
    5.  _It is recommended that you test with a small amount first!_
    6.  Unlock the owners address and click `WRITE` button.
    7.  A pop up will appear. Leave `Amount to Send` as `0`.
    8.  Click the `Generate Transaction` button & confirm & send.
3.  Click the Transaction ID that outputs with the success message. Copy this ID.
4.  If it's a multisig with TWO owners, you will need to refresh that page and choose **CONFIRM** this time.
    1.  In step 3, you opened the TX ID from the `EXECUTE`call. You should have a page like this open: [https://etherscan.io/tx/0x0c643a1ae66637217f24791df05071c7849941a1231cf9fa2a0daf145da833e3](https://etherscan.io/tx/0x0c643a1ae66637217f24791df05071c7849941a1231cf9fa2a0daf145da833e3)
    2.  Click the `Event Logs`tab.
    3.  On the above link ([https://etherscan.io/tx/0x47e4cc87...#eventlog](https://etherscan.io/tx/0x47e4cc8748e296d9b5d85ebd9bd705177bb1940517b084a2efcca11feeb2391d#eventlog) - not YOUR link), the `_h` field would be `9228aeaf3ed560274899483646ea4ce9b322bccffac60cac2d035d08752617f4`
    4.  Look at the above link and see where it says `9228a....`. Look at your link and see what YOUR `_h` is. Copy it.
    5.  Go back to MyEtherWallet where you have the CONFIRM open and paste that hash into the `_h` field.
    6.  Click the `"WRITE"` button again and unlock the second owner's account.
    7.  Generate & send the transaction.
5.  Make sure everything went as intended.
6.  IF your multisig is a 3 of 5 multisig, you will repeat the confirm process for each owner until it reaches the necessary approvals. Luckily, the `_h`value is the same for each of them.
7.  See another approval for my previous example here: [https://etherscan.io/tx/0x47e4cc8748e296d9b5d85ebd9bd705177bb1940517b084a2efcca11feeb2391d#eventlog](https://etherscan.io/tx/0x47e4cc8748e296d9b5d85ebd9bd705177bb1940517b084a2efcca11feeb2391d#eventlog)
8.  You can then repeat this process whenever you want to send ETH.

#### Mist / Ethereum Wallet's Multisig Contract ABI

`[{"constant":false,"inputs":[{"name":"_owner","type":"address"}],"name":"removeOwner","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"}],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"m_numOwners","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"m_lastDay","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"resetSpentToday","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"m_spentToday","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"}],"name":"addOwner","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"m_required","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_h","type":"bytes32"}],"name":"confirm","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_newLimit","type":"uint256"}],"name":"setDailyLimit","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"execute","outputs":[{"name":"_r","type":"bytes32"}],"type":"function"},{"constant":false,"inputs":[{"name":"_operation","type":"bytes32"}],"name":"revoke","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_newRequired","type":"uint256"}],"name":"changeRequirement","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"_operation","type":"bytes32"},{"name":"_owner","type":"address"}],"name":"hasConfirmed","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"}],"name":"kill","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"}],"name":"changeOwner","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"m_dailyLimit","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"inputs":[{"name":"_owners","type":"address[]"},{"name":"_required","type":"uint256"},{"name":"_daylimit","type":"uint256"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"operation","type":"bytes32"}],"name":"Confirmation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"operation","type":"bytes32"}],"name":"Revoke","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldOwner","type":"address"},{"indexed":false,"name":"newOwner","type":"address"}],"name":"OwnerChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newOwner","type":"address"}],"name":"OwnerAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldOwner","type":"address"}],"name":"OwnerRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newRequirement","type":"uint256"}],"name":"RequirementChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"to","type":"address"},{"indexed":false,"name":"data","type":"bytes"}],"name":"SingleTransact","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"operation","type":"bytes32"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"to","type":"address"},{"indexed":false,"name":"data","type":"bytes"}],"name":"MultiTransact","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"operation","type":"bytes32"},{"indexed":false,"name":"initiator","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"to","type":"address"},{"indexed":false,"name":"data","type":"bytes"}],"name":"ConfirmationNeeded","type":"event"}]`

*You can also copy the above from here: [https://www.reddit.com/r/ethereum/comments/5nev1a/help_needed_how_to_find_multisig_contract_wallet/](https://www.reddit.com/r/ethereum/comments/5nev1a/help_needed_how_to_find_multisig_contract_wallet/)*
