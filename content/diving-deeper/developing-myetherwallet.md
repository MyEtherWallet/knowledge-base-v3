/*
Title: Developing MyEtherWallet v3
Sort: 50
*/

Github Repo is here: [https://github.com/kvhnuke/etherwallet](https://github.com/kvhnuke/etherwallet)

If you want to help contribute, here's what you need to know to get it up and running and compiling.

*   Both the Chrome Extension and the MyEtherWallet.com are compiling from the same codebase. This code is found in the `app` folder. Don't touch the `dist` or `chrome-extension` folders.
*   We use angular and bootstrap. We used to use jQuery and Bootstrap until it was converted in April 2016\. If you wonder why some things are set up funky, that's why.
*   The mercury branch is currently the active development branch. We then push the dist folder live to gh-pages, which then gets served to MyEtherWallet.com.
*   We use npm / gulp for compiling. There is a lot of stuff happening in the compliation.
*   Our node currently runs using the json relay found in `json_relay_node`. This is written in node.js.
*   Our node used to run on the json relay found in `json_relay_php` which was written in php.

<span>Getting Started</span>

*   Start by running `npm install`.
    *   I currently have node v4.2.6 & npm v3.7.2 so check to see if you need to update those is something isn't working.
    *   You may need to install `browserify` and `angular` globally?
*   Run `gulp`. Gulp will then watch & compile everything and then watch for changes to the HTML, JS, or CSS.
*   For distribution, run `gulp clean`.

<span>Folder Structure</span>

*   `fonts` and `images` get moved into their respective folders. This isn't watched via gulp so if you add an image or font, you need to run `gulp` again.
*   `includes` are the pieces of the pages / the pages themselves. These are pretty self explanatory and where you will make most frontend changes.
*   `layouts` are the pages themselves. These basically take all the pieces of the pages and compile into one massive page. The navigation is also found here...sort of.

    *   `index.html` is for MyEtherWallet.com.
    *   `cx-wallet.html` is the main page for the Chrome Extension.
    *   `embedded.html` is for [https://www.myetherwallet.com/embedded.html](https://www.myetherwallet.com/embedded.html).
*   You can control what shows up on MyEtherWallet.com vs the Chrome Extension by using: `@@if (site === 'cx' ) { ... }` and `@@if (site === 'mew' ) { ... }`. Check out `sendTransaction.tpl` to see it in action. The former will only compile to the Chrome Extension. The latter only to MyEtherWallet.com.

*   embedded.html is for embedding the wallet generation into third-party sites. [Read more about it and how to listen for the address generated here.](https://www.reddit.com/r/ethereum/comments/4gn37o/embeddable_myetherwallet_super_simple_wallet/)
*   The wallet decrypt directives are at `scripts/directives/walletDecryptDrtv.js`. These show up on a lot of pages.
*   The navigation is in `scripts/services/globalServices.js`. Again, we control which navigation items show up in which version of the site in this single file.
*   As of September 2016, almost all the copy in the .tpl files are only there as placeholders. It all gets replaced via angular-translate. If you want to change some copy you need to do so in `scripts/translations/en.js` folder. You should also make a note about what you changed and move it to the top of the file so that we can make sure it gets translated if necessary.
*   `styles` is all the less. It's a couple custom folders and bootstrap. I am in the process of re-factoring all the CSS, getting rid of Bootstrap, and really limiting the CSS to what we absolutely need.
