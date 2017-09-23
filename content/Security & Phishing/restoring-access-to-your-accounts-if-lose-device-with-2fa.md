/*
Title: How to restore access to your accounts if you lose/destroy your device w/ Google Authenticator (2FA)
Sort: 10
*/

*This is part of a series where Taylor pull's sweet comments she's made in the hopes that they can be useful, searchable, remembered, referenced, and/or aid in the creation of future knowledge base posts. These are first drafts. Please excuse the typos, unclear statements, specific references to previous discussions, and gratuitous cursing.*

---

My phone got stuck in bootloop a ways back so I am intimately familiar with this situation.

The easiest way is:

# SAVE YOUR BACKUP CODES!

When you created your 2FA sign on with most sites, including Google, they provided you with `backup codes`. These are typically 10 codes made up of random character sequences like `we44 k29d lw0d jwld nels 39ik` and so forth. Each of of these can be used once in case you do not have access to authenticator.

Store these like you do a private key. Do not save them to your computer or dropbox. Do not send them. Do not post them on reddit. Write them down or print them out and store in 2 physically different locations.

The other option, which is actually way easier especially since my phone dies from constantly getting notifications, is to **set up your 2FA on two devices whenever you enable 2FA or create a new account**. Perhaps you can make use of that old, rooted, Amazon Kindle or iPhone 5. Factory reset & ensure it's not able to connect to the WiFi & turn on airplane mode.

You can also **print out the QR code itself** that you use to add to Google Authenticator originally so that if you ever need to re-set up 2FA, you can do so. If you don't have a printer, you can typically click the "show code" or "can't read the qr code?" or something and get a text version that you can then write down. Protip: make sure you label what this QR code or text code is (e.g. "2FA for Poloniex").

### How to be Secure while being able to recover your 2FA

- Do NOT ever store your username, password, and 2FA phrase / QR code / recovery codes in the same location. This includes your password manager. Write that shit down or print it. Keep it separate. If they are together, it's not 2FA.

- Whenever you hand write something, best if you handwrite it twice in case you mix something up or accidentally write so messily you can't read it anymore. Always write it down, set up Google Authenticator from the key you *wrote down* (not the one on the screen), and then verify via the code that displays on your phone.

### That said: most 2FA is surprisingly insecure bc usability.

It isn't inherently insecure, but it was surprisingly easy to regain access to all my accounts even though I had minimal backup codes stored in a multitude of locations over a few years.

1. Are you logged into Google on another device? Can you add a recovery phone number, email address, or turn off 2FA without needing to log in again?

2. Do you already have a backup phone number or email address set up? Chances are you do because Google incessantly bugs you to set it up. If so, you can easily bypass 2FA. (Note: this **is** inherently insecure. For the best security you do NOT want to have a backup email or phone number. If you don't understand why, try to regain access to your Google account right now without 2FA. Can you do it? Now, if you get that recovery email or text, don't use it yet. Instead, go through the process again, this time saying you don't have access to 2FA, email, or phone. Holy shit, what is that? A fucking security question about your first car which you've posted about 1000 times on Facebook & Twitter and wrote your college essay on?! Nice. Get your backup codes. Remove your other recovery options. Now.)

3. Do you have the recovery codes somewhere on your computer? Google (and others) really make it hard for you to blatantly disregard their instructions. It basically says "SAVE THIS SHIT NOW, BRO". Chances are, even if you didn't remember doing it, there is a text document or screenshot somewhere with this necessary information.

4. Do you have an old phone that you had Google Authenticator on with some access?

For non-Google accounts, it's pretty easy to restore access in one way or another, either via the above methods or going through the process of bypassing 2FA with your email account. A pain, but not impossible.

You can also break out that old computer and see if you are still logged in anywhere and can disable it. Or see if there are other access methods, like SSHing in or oauth where you can set up a new account via a Facebook or Twitter account that uses the same email address as the account you already have and see if you can sneak in that way.

There are a few that you will not be able to get into. In those cases, you will need to reach out to the service itself and see what you would need to provide in order to get them to turn of 2FA for you or otherwise bypass.

I would actually strongly encourage everyone to have a beer, turn off your phone, and see what accounts you can get into without your 2FA codes. If you can get it, you need to adjust your settings to be more secure **AFTER you actually have viable, secure, offline backups of the recovery codes.**

---

### Source

- [https://www.reddit.com/r/ethtrader/comments/6vwk7p/what_happens_if_you_lose_your_phone_with_google/](https://www.reddit.com/r/ethtrader/comments/6vwk7p/what_happens_if_you_lose_your_phone_with_google/)
