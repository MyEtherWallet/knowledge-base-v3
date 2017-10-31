{
"title"       : "[MEW -> Ledger]  Moving from a MyEtherWallet key to Ledger Hardware Wallet",
"sort"        : "2",
"category"    : "Migrating to/from MyEtherWallet",
"description" : "Migrating to/from MyEtherWallet",
"date_published" : "2017-10-08T08:00:00+08:00",
"date_modified"  : "2017-10-28T08:00:00+08:00"
}

---%


The Ledger Nano S is one of the best and easiest cryptocurrency hardware wallets out there, it is available for purchase [here](https://www.ledgerwallet.com/r/fa4b?path=/products/). It supports a wide range of cryptocurrencies, but this guide is specifically made for using it with Ethereum and ERC-20 tokens using MyEtherWallet.

###  Initial set-up
<img src="../../images/ledger-migration/welcome.jpg" style="width: 50%; height: 50%">


Navigating on the Ledger Nano S works by pressing either of the two buttons at the top of the device. Press both buttons at the same time to begin the configuration of the device.

<img src="../../images/ledger-migration/configure-as-new-device.jpg" style="width: 50%; height: 50%">

The first thing your Nano S will ask you is if you want to set it up as new device. We will press the right button to confirm the action, if you ever want to restore your Nano S (more on this below!), you will have to select the left button and it will start the restoration process by asking for your recovery words.

<img src="../../images/ledger-migration/choose-pin.jpg" style="width: 50%; height: 50%">

The Nano S will then ask you to set up a pin. This is an important step, as you will have to enter it every time you want to access your Nano S. The minimum amount of numbers needed is 4, and the maximum is 8. You can always change this pin after you are done setting up your Nano S. After entering it will ask you to enter your pin once again, to confirm it is correct. It's worth stating that if you enter the wrong pin number 3 times in a row, it will automatically reset your Nano S.

<img src="../../images/ledger-migration/write-down-recovery.jpg" style="width: 50%; height: 50%">

Next, the Nano S will give you 24 random words that you will have to write down on the provided card in the box. These are the recovery words, also known as seed, that you will have to use when you want to restore your Nano S in case it fails or you accidentally reset the Nano S. Once you've written down all of the words it will ask you to confirm your recovery phrase, in order to make sure that you've written them down correctly.

**Do not write down these recovery words on your computer, as it will be just as unsafe as using a normal private key. Always write it down physically using a pen, on a piece of paper only you have access to. Also do not take a photo of your piece of paper.**

<img src="../../images/ledger-migration/device-ready.jpg" style="width: 50%; height: 50%">

Now your Ledger Nano S is all set-up and ready to be used!

###  Enabling your Ledger Nano S to work with MyEtherWallet

In order to make your Nano S work with MyEtherWallet, we will need to enable browser support. We are also going to enable contract data while we're at it, so we can have the ability to create token transfers as well.

<img src="../../images/ledger-migration/ethereum-app.jpg" style="width: 50%; height: 50%">

First of all, open up the Ethereum app by navigating to it, and pressing both buttons at the same time to open it. Then press the right button to select "Settings", after that press both buttons to open it up.

<img src="../../images/ledger-migration/ethereum-settings.jpg" style="width: 50%; height: 50%">

Now press both buttons at the same time again to open up "Contract Data", then press the right button to select "Yes", and then press both buttons again to proceed.

<img src="../../images/ledger-migration/ethereum-contract-data.jpg" style="width: 50%; height: 50%">

We will do the same thing with "Browser Support". Select "Browser Support", press both buttons at the same time to open it op, press the right button to select "Yes", then press both buttons again to confirm.

<img src="../../images/ledger-migration/yes.jpg" style="width: 50%; height: 50%">


Now we are done configuring the Nano S to work with MyEtherWallet. You can press the right button to select "Back" and press both buttons at the same time to go back to the Ethereum app. If you do this once again you will go back to the main menu with all the apps.

### Using the Ledger Nano S with MyEtherWallet

It's time to access our Nano S using MyEtherWallet! In order to do so, go to [MyEtherWallet.com](https://www.myetherwallet.com/), enter the "Send Ether & Tokens" tab, and click the "Ledger Wallet" option.

<img src="../../images/ledger-migration/screenshots/ledger-screen.png" >

You will be presented with this screen. Plug in your Nano S, and open up the Ethereum app. Once you've done that, click the big blue "Connect to Ledger Wallet" button, to be able to access the Ethereum wallets on your Nano S.

<img src="../../images/ledger-migration/screenshots/ledger-addresses.png" >

You will see a long list of different Ethereum addresses. All of these addresses are safely stored on your Nano S, and you can use them all. You can select any of these addresses to access it.

<img src="../../images/ledger-migration/screenshots/ledger-accessed.png" >

Once you select one of the addresses the interface looks just the same as if you were to enter your private key to access it, it's no different. Your Nano S is ready to be used!

### Transferring funds from your private key to the Nano S

Sending ETH or tokens to your Nano S works the same as sending to any other address. Simply pick one of the addresses of the list when you access your Nano S, copy the Ethereum address, and send your ETH/tokens from your private key to the address. After you've done that, and the transaction is completed, you can access your Nano S again, and you will be able to see your funds, safely stored on your Nano S!

### Restoring your Nano S

Ledger made a clear and easy to follow guide on how to restore your Nano S [here](https://ledger.groovehq.com/knowledge_base/topics/how-to-import-slash-recover-a-backup-on-a-nano-s).

### Troubleshooting

Ledger has an extensive knowledge base that you can find [here](https://ledger.zendesk.com/hc/en-us/categories/115000813085-TROUBLESHOOTING), as well as MyEtherWallet's [here](https://myetherwallet.github.io/knowledge-base/). There is a big chance that it's already listed on one of them. If not, feel free to contact either [Ledger](https://ledger.zendesk.com/hc/en-us/requests/new) or [MyEtherWallet](mailto:support@myetherwallet.com).
