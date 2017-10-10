{
"title"       : "Best ways to mitigate missing out on that hot ICO",
"sort"        : "18",
"category"    : "Best Of",
"description" : "Best Of"
}

---%



*This is part of a series where Taylor pull's sweet comments she's made or found over the years in the hopes that they can be useful, searchable, remembered, referenced, and/or aid in the creation of future knowledge base posts. Many are unpolished & contain typos, specific references to previous discussions or the user, and gratuitous cursing.*

---

We actually considered that but then like....well...it's a lot of work but only benefits a few and encourages greed instead of encouraging a helpful, beneficial ecosystem that works and grows together. Time is our limited resource, not funds. Funds just help you get through the bad times.

There are a few posts I made after GNT and before MLN that contain good advice but heres the most excessively planned way:

- Create a new wallet and back that shit up in triplicate in physically different locations. (Your house could set on fire and now you don't have any of your backups).

- Throw whatever ETH you want to invest in the next ICO in that account

- Send a test transaction or two from the offline tab to your original account to familiarize yourself.

### 24 hours before the ICO

- Go to the offline page: https://www.myetherwallet.com/#offline-transaction

- Generate the info from *your* address. Your address is the address you are sending FROM.

- Fill in the ICO's address.

- Fill in the amount of ETH you want to invest.

- Raise the gas price if you think it'll help. 40000000000 but you're going to pay about a dollar if it falls.

- Set the gas limit to 400000. This more than covers any contract you will be sending to.

- Nonce is at the top of the page.

- Make sure whatever amount you have in your account is an ETH or 2 more than the amount your sending. This gives you a lot of room for mis-calculating gas limit * gas price. So if you want to invest 50 ETH, have 52 ETH in your account.

- Unlock your wallet, get the signed transaction. DO NOT SEND IT.

- Save this signed TX to a text document on your computer.

- As long as you don't send any transactions from that account before the ICO, you will be fine. The nonce counts the number of transactions. If you try to send two transactions with the same nonce, only one with go through. This is why making a dedicated account is helpful.

- Do the same *again* EXCEPT increase the nonce by 1. So if your nonce is 0 for the first TX, then the second TX will be 1. If the nonce is 32, the second nonce will be 33.

Now you have 2 TXs. You can send the first one *or* the first and the second one. You cannot send *only* the second one.

### At 1 hour before ICO time, open

1. https://www.myetherwallet.com/#offline-transaction

2. https://etherscan.io/pushTx

3. your text document with your 2 signed transactions.

4. the investment instructions for the ICO (the thing that has the address and gas limit and any data)

5. make sure you have your private key to sign a new transaction, just in case

6. join the ICO's slack or find the reddit thread about the ICO, just in case

### At ICO time

- Copy the first signed transaction into the box at the bottom of https://www.myetherwallet.com/#offline-transaction AND the box on etherscan.io.

- **Do NOT send from both places!!**

- When the ICO starts, press send on **one of the pages.** Wait. Click the TX hash. Refresh the page. If after ~60 seconds it's not showing up on etherscan, go to the other page and click send.

- At this point, it should go through. If the node failed or something random happened, you've now attempted to send from two locations.

- If your transaction fails on the blockchain (out of gas, bad jump) then get your second signed tx from your document and send it from one of those pages. Hopefully the bad jump was because you sent too early and your second one will go through.

- If both fail due to out of gas or something, stop and breath.

- Refresh the MyEtherWallet offline page, then click the reddit OR slack. Read and see if anyone else is having issues and anyone has proposed solutions. Take a deep breath. Absolute worst case, you have 3 minutes left *minimum*, which is *more* than enough time since you are prepared.

- If anyone is slack or reddit is like "you have to include this data that no one told us about!" then you are golden. You know how to solve this. If nothing productive is happening, give it another go anyways.

-  Click to the the ICO instructions tab and the offline tab again

- Generate your info using YOUR address at the top of the page. Copy and paste the ICO address. Don't increase the gas price if you did before. Increase it if you didn't. Use the gas limit that the ICO recommends. Enter any data that you need to. Generate and sign the transaction. Double check that you are connected to an ETH node on MyEtherWallet. Copy the signed transaction to your clipboard. Send the transaction via MEW. If nothing happens or your browser window decides it's just going to crash right as you press send or your toddler decides to close the window, calmly go back to etherscan.io/pushTx and paste the signed transaction and try to broadcast it again.


### Let's break it down

- We've used a super high gas price AND gas limit to be absolutely excessively safe, even if it means we spend a bit more ETH

- We've prepared the signed transactions in a calm environment BEFORE the ICO starts so you can double check your work

- We've used two separate websites and nodes in order to attempt to send in case one goes down

- We have a backup TX with a nonce+1 in case you send too early

- We've prepared for the worst, just in case both transactions fail, which gives you one last shot of generating a transaction on the fly based on feedback around reddit / slack

- We've used a new account so you won't (1) accidentally fuck up your nonces and (2) if you accidentally send 2 transactions for 50 ETH when you only wanted to invest 50 ETH, you didn't actually spend 100 ETH as there wasn't 100 ETH in your account.

If at this point you still aren't able to get in, then there is a higher power telling you that you shouldn't invest in this shitstorm. Turn off your computer and go outside and thank the gods they protected you.

My biggest recommendation though: send more fucking transactions. I send like 10 TXs a day. I can do it in my sleep. But I was scared for the longest time, which caused me to make mistakes. Get comfortable sending by *sending*. Create a couple accounts and send 0.5 ETH to each of them. Then send 0.01 ETH back and forth every single day. Do things wrong. See the errors. Fix the errors. Do things right. Get comfortable.

### Source

- [https://www.reddit.com/r/ethtrader/comments/68vf2i/things_i_would_do_for_you_if_you_were_about_to/dh2cy9t/](https://www.reddit.com/r/ethtrader/comments/68vf2i/things_i_would_do_for_you_if_you_were_about_to/dh2cy9t/)
