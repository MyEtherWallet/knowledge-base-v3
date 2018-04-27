{
"title"       : "ErrCode: Unable to locate corresponding Transfer event log",
"sort"        : "06",
"category"    : "Tokens",
"description" : "Tokens",
"date_published" : "2018-01-25T08:00:00+08:00",
"date_modified"  : "2018-01-25T08:00:00+08:00"
}

---%



## Why does this keep happening?!

This error appears on [etherscan.io](https://etherscan.io) when a sender tries to transfer out more tokens than they have.

#### Generally this is due to a few possible events:

*   When adding a [custom token](https://kb.myetherwallet.com/send/adding-new-token-and-sending-custom-tokens.html):
    *   You specified the incorrect token contract address (resulting in an attempt to send a token that you have none of).
    *   You specified the incorrect token decimal (resulting in an attempt to send 50,000,000 of a token, as opposed to 5,000 of it).
*   When sending a default token:
    *   You specified an amount to send higher than you actually own.

#### How can I stop this from happening?

*   Remove and [re-add the custom token](https://kb.myetherwallet.com/send/adding-new-token-and-sending-custom-tokens.html).
    *   Be sure to specify the correct decimals and token contract address this time (look up the name of the token on [ethplorer](https://ethplorer.io)).
*   Make sure that you are attempting to send either the same amount of tokens that you have, or less.
