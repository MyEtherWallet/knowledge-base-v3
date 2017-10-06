{
"title"       : "Manually Reveang ENS Bids (Hard)",
"sort"        : "24",
"category"    : "ENS",
"description" : "ENS"
}

---%


### Use our new tool...

*  More easily debug & generate reveal and finalize data: [https://myetherwallet.com/helpers.html](https://myetherwallet.com/helpers.html)

### Get your TX ID of your original bid. Under "input data" it should look like:

`Function: newBid(bytes32 sealedBid) MethodID: 0xce92dced[0]:69faf18dd0953d9124d7917234b0efc05c78fd0d9abfc6ffb32d512680fdbb65`

##### Get the information that will match your bid via [https://etherscan.io/address/0x6090a6e47849629b7245dfa1ca21d94cd15878ef#readContract](https://etherscan.io/address/0x6090a6e47849629b7245dfa1ca21d94cd15878ef#readContract), under shaBid:

*   First is the sha3 hash of the name _(with 0x before it)_
*   Then your address _(with 0x before it)_
*   Then the value of your bid in wei
*   Then your hash of your secret _(with 0x before it)_

You need whatever it outputs when you hit "query" to match the string in your original bid.

##### Once you have that...construct the data string:

1.  Always the same (`0x47872b42`)
2.  Hash of name you bid on, without 0x
3.  Always the same (`0000000000000000000000000000000000000000000000000000000000000000`)
4.  Value of your bid in wei...in hex
5.  The sha3 of your secret from the long string, without 0x

##### For example:

1.  `0x47872b42`
2.  [NAME YOU BID ON HASH]
3.  `0000000000000000000000000000000000000000000000000000000000000000`
4.  [VALUE HEX]
5.  [SECRET HASH]

##### Before moving forward, count the number of characters in #4 is (usually 14 or 15) and delete that many 0's from #3.

##### Next, combine that string into one long string and use that as the data field:

1.  Go to [https://www.myetherwallet.com/#send-transaction](https://www.myetherwallet.com/#send-transaction)
2.  Send to: `0x6090a6e47849629b7245dfa1ca21d94cd15878ef`
3.  Amount: `0`
4.  Data: `0x47872b42[NAME YOU BID ON HASH]0000000000000000000000000000000000000000000000000000000000000000[VALUE HEX][SECRET HASH]`
5.  Gas limit: `200000`

### Example:

*   There is a bid here for mewtopia.eth: [https://etherscan.io/tx/0x1c741eb4fe698d5429027fdd6a9d7d87638f27ae0663b43e1f06ef141270dc0f](https://etherscan.io/tx/0x1c741eb4fe698d5429027fdd6a9d7d87638f27ae0663b43e1f06ef141270dc0f)
*   It has the bidhash of `69faf18dd0953d9124d7917234b0efc05c78fd0d9abfc6ffb32d512680fdbb65`
*   I know that I bid:
    *   `mewtopia`
    *   `0.01 ETH`
    *   `exact depend exhibit`

##### Then I turn that into:

*   (`0x7cb57b5a97eabe94205c07890be4c1ad31e486a8`)
*   `0x07aa9c7e03a795d250a2ac48bd73b9c7f8adab69a549cebd97fc157a093a5a4a`
*   `10000000000000000`
*   `0x00d70f3b7e512382c3b5e27dd15df51c68c0a18528a604792ff20890eec20a31`

I check it on https://etherscan.io/address/0x6090a6e47849629b7245dfa1ca21d94cd15878ef#readContract and make sure the sealedBid output is the same as my bidhash.

##### Then I turn that into:

*   `0x47872b42`
*   `07aa9c7e03a795d250a2ac48bd73b9c7f8adab69a549cebd97fc157a093a5a4a`
*   `0000000000000000000000000000000000000000000000000000000000000000`
*   `2386f26fc10000`
*   `00d70f3b7e512382c3b5e27dd15df51c68c0a18528a604792ff20890eec20a31`

##### Then I turn that into:

*   `0x47872b42`
*   `07aa9c7e03a795d250a2ac48bd73b9c7f8adab69a549cebd97fc157a093a5a4a`
*   `00000000000000000000000000000000000000000000000000`
*   `2386f26fc10000`
*   `00d70f3b7e512382c3b5e27dd15df51c68c0a18528a604792ff20890eec20a31`

##### Then I turn that into:

*   `0x47872b4207aa9c7e03a795d250a2ac48bd73b9c7f8adab69a549cebd97fc157a093a5a4a00000000000000000000000000000000000000000000000002386f26fc1000000d70f3b7e512382c3b5e27dd15df51c68c0a18528a604792ff20890eec20a31`

And I use this string as the data field in my transaction to reveal my bid for that name.
