{
"title"       : "Using a Ledger Wallet With an Android Device",
"sort"        : "16",
"category"    : "Hardware Wallets",
"description" : "Hardware Wallets",
"date_published" : "2015-12-29T08:00:00+08:00",
"date_modified"  : "2017-12-29T08:00:00+08:00"
}

---%


### Requirements
In order to use a Ledger Wallet with your Android phone, you need to have a modern phone or tablet, supporting USB-OTG (USB On-The-Go) as well as a USB-OTG adapter to go with it. If you don't have a OTG adapter yet, you can pick one up on [Amazon](https://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=usb+otg+adapter) for just a few bucks. The adapter will allow you to plug the Ledger Wallet into your device.

If you are not sure if your device supports USB-OTG, the easiest way to check it is by using an app like [USB OTG Checker](https://play.google.com/store/apps/details?id=com.faitaujapon.otg).

### Setting up your device
Before you connect your Ledger Wallet to your device, you first have to install an application made by Ledger. You can find the application [here](https://github.com/LedgerHQ/android-u2f-bridge/releases). Simply open the URL on your device and click on the file `android-u2f-bridge-x.x.apk`. Once you downloaded the file, open it on your device and you should be asked to install it. Once installed, tap `Done`, as it is not possible to open the app.

Now, connect your Ledger Wallet and open the Ethereum. Make sure both `Contract Data` and `Browser Support` are **ON**. Open your browser and go to MyEtherWallet. On the Send Ether & Tokens page, select the Ledger Wallet option and tap on `Connect to Ledger Wallet`.

![](../images/hardware-wallets/ledger-hardware-wallet-using-with-android-01.png)

You should see a popup, asking if you want to allow the Ledger application you just installed to access the Ledger Wallet. Tap on `OK` and you should be able to see your addresses on MyEtherWallet.
