/*
Title: Accessing & Sending MUSICOIN via MyEtherWallet
Sort: 4
*/

We temporarily removed the MUSIC node as we had some issues with hardware wallets and lack of EIP-155 support.

You can still add it as custom by following the below instructions.

### Warnings

We advise you to be careful when interacting with TREZOR, Ledger, or any other hardware wallet.

We also advise you to ensure you are using addreses on the MUSICOIN chain that is different than your ETH or EXP addresses.

Any transactions sent on the MUSICOIN chain can be replayed on a different chain.

### How-to

1. Select custom at the very bottom of the network dropdown in top right
2. NAME: MUSICOIN
3. URL: https://mewapi.musicoin.tw or https://mcdnode.trustfarm.io/api
4. PORT: (leave it blank)
5. Select "CUSTOM"
6. Leave EIP-155 unchecked.
7. Click "Save & Use Custom Node" button.

You should see a purple bar at the bottom telling you are successfully connected. If the bar is red, remove the node by clicking the little ( X ) icon next to the MUISCOIN name in the network dropdown and try the other URL (above)

