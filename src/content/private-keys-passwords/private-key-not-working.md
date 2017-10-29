{
"title"       : "Private Key Not Working",
"sort"        : "10",
"category"    : "Private Keys & Passwords",
"description" : "Private Keys & Passwords",
"date_published" : "2017-07-05T08:00:00+08:00",
"date_modified"  : "2017-09-26T08:00:00+08:00"
}

---%
Be sure there is not a space at the beginning or end of your private key. We validate based on the number of characters. If you saved another version (for example, the UTC / Keystore file) it may also be worth trying that file as well.

Please be sure that you are **carefully and accurately** typing your private key. A single wrong character will open a different wallet than is "yours".

Some wallets, like Exodus, may export a private key that begins with `0x`. If you remove these two characters from the beginning, you may be able to access your account.

For reference private key looks like this: `afdfd9c3d2095ef696594f6cedcae59e72dcd697e2a7521b1578140422a4f890`
