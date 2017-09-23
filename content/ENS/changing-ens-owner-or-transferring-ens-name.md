/*
Title: Changing the ENS owner or transferring an ENS Name
Sort: 8
*/

### Transferring a Domain (Best Practice)

1.  Search for your domain on [etherscan.io](https://etherscan.io/enslookup?q=yourname.eth)
2.  Copy the `Label Hash`.
1.  Go to the [Contracts](https://myetherwallet.com/#contracts) page and select `ENS - Eth Registrar (Auction) 0x6090a6e47849629b7245dfa1ca21d94cd15878ef` from the dropdown menu. 
4.  Optional but recommended: set your preferred gas price via the slider in the footer.
5.  Access and choose the `transfer` call. Paste the `LabelHash` from [http://etherscan.io/](http://etherscan.io/) into the `_hash` field.
6.  Paste the `address` of the new owner in the `newOwner` field. 
7.  Unlock your wallet and send.


### Only setting Owner

*WARNING: If you only change the owner, the deed owner can get the name back.*

1.  Search for your domain on [etherscan.io](https://etherscan.io/enslookup?q=yourname.eth)
2.  Copy the `NameHash`.
3.  Go to the [Contracts](https://myetherwallet.com/#contracts) page and select `"ENS Registry" (0x314159265dD8dbb310642f98f50C066173C1259b)` from the dropdown menu. 
4.  Optional but recommended: set your preferred gas price via the slider in the footer.
5.  Access and choose the `setOwner` call. Paste the `NameHash` (not LabelHash) from [http://etherscan.io/](http://etherscan.io/) into the `node` field.
6.  Paste the `address` of the new owner in owner. 
7.  Unlock your wallet and rock and roll.

---

*(Thanks goes to [/u/feauxley](https://www.reddit.com/r/ethereum/comments/6d01r1/changing_ens_owner_address_using_myetherwallet/))*


