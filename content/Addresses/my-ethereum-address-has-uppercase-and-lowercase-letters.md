/*
Title: Ethereum address has uppercase and lowercase letters
Sort: 2
*/

"What does it mean if my address has uppercase and lowercase letters?"
There are two versions of Ethereum addresses: one that contains uppercase letters and one that does not:

`0x7cb57b5a97eabe94205c07890be4c1ad31e486a8`

`0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8`

The one that is all lowercase is "not checksummed" meaning that you could mis-type a letter/number and it send it off and it would be lost forever. If you use the checksum'd version and mis-type it, it will tell you that it's an invalid address. 

For this reason, we warn you when you address is not checksummed. You can still send to it without issue but if you should double-check the address before doing so, *especially* if you hand-typed it. 

If you are sending to one of your own wallets, you can save the checksummed address via the "View Wallet Info" page and copying the address displayed there. 

Both addresses are exactly the same, except for the uppercase vs lowercase letters. Capitalization simply means the address has a checksum. Both will work exactly the same and have your funds. 