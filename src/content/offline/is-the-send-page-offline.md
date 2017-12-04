{
"title"       : "Is the 'Send Ether & Tokens' page offline?",
"sort"        : "04",
"category"    : "Offline",
"description" : "Offline",
"date_published" : "2017-07-05T08:00:00+08:00",
"date_modified"  : "2017-11-11T09:07:00+08:00"
}

---%


No, it needs the internet in order to get the current gas price, nonce of your account, and broadcast the transaction (aka "send"). However, it only sends the signed transaction. Your private key safely stays with you. We also now provide an "Offline Transaction" page so that you can ensure your private keys are on an offline/airgapped computer at all times.
