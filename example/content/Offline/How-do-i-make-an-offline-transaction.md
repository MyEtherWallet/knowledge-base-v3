/*
Title: How do I Make an Offline Transaction?
Sort: 2
*/

<ol>
<li>Navigate to the<a href="https://www.myetherwallet.com/#offline-transaction" target="_blank"> "Offline Transaction" page</a> via your online computer.</li>
<li>Enter the "From Address". Please note, this is the address you are sending FROM, not TO. This generates the nonce and gas price.</li>
<li>Move to your offline computer. Enter the "TO ADDRESS" and the "AMOUNT" you wish to send.</li>
<li>Enter the "GAS PRICE" as it was displayed to you on your online computer in step #1.</li>
<li>Enter the "NONCE" as it was displayed to you on your online computer in step #1.</li>
<li>The "GAS LIMIT" has a default value of 21000. This will cover a standard transaction. If you are sending to a contract or are including additional data with your transaction, you will need to increase the gas limit. Any excess gas will be returned to you.</li>
<li>If you wish, enter some data. If you enter data, you will need to include more than the 21000 default gas limit. All data is in HEX format.</li>
<li>Select your wallet file -or- your private key and unlock your wallet.</li>
<li>Press the "GENERATE SIGNED TRANSACTION" button.</li>
<li>The data field below this button will populate with your signed transaction. Copy this and move it back to your online computer.</li>
<li>On your online computer, paste the signed transaction into the text field in step #3 and click send. This will broadcast your transaction.</li>
</ol>