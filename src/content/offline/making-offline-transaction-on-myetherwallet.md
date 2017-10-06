{
"title"       : "How to make an offline transaction",
"sort"        : "6",
"category"    : "Offline",
"description" : "Offline"
}

---%



1.  Navigate to the ["Offline Transaction" page](https://www.myetherwallet.com/#offline-transaction) via your online computer.
2.  Enter the "From Address". Please note, this is the address you are sending FROM, not TO. This generates the nonce and gas price.
3.  Move to your offline computer. Enter the "TO ADDRESS" and the "AMOUNT" you wish to send.
4.  Enter the "GAS PRICE" as it was displayed to you on your online computer in step #1.
5.  Enter the "NONCE" as it was displayed to you on your online computer in step #1.
6.  The "GAS LIMIT" has a default value of 21000\. This will cover a standard transaction. If you are sending to a contract or are including additional data with your transaction, you will need to increase the gas limit. Any excess gas will be returned to you.
7.  If you wish, enter some data. If you enter data, you will need to include more than the 21000 default gas limit. All data is in HEX format.
8.  Select your wallet file -or- your private key and unlock your wallet.
9.  Press the "GENERATE SIGNED TRANSACTION" button.
10.  The data field below this button will populate with your signed transaction. Copy this and move it back to your online computer.
11.  On your online computer, paste the signed transaction into the text field in step #3 and click send. This will broadcast your transaction.
