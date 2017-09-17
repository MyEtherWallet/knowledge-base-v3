/*
Title: Français
Sort: 2
*/

Migrated from the old help page on MyEtherWallet.com. 

---

### Quelques rappels :


*   **Ethereum, MyEtherWallet.com & MyEtherWallet CX, et certaines des bibliothèques Javascript sous-jacentes que nous employons sont en cours de développement.** Bien que nous les ayons testés intensivement et que des dizaines de milliez de portefeuilles aient été créés avec succès dans le monde entier, il existe toujours une faible possibilité qu'un incident se produise conduisant à la perte de vos ETH. N'investissez pas plus que ce que vous êtes prêt à perdre et soyez prudent. En cas d'accident, nous en serons désolés mais **nous ne sommes pas responsables d'une éventuelle perte de cet Ether**.
*   MyEtherWallet.com & MyEtherWallet CX ne sont pas des "portefeuilles web". Vous ne créez pas un compte, vous ne nous donnez pas votre Ether en dépôt. Aucune donnée ne sort de votre ordinateur ou votre navigateur. Nous vous facilitons la création, la sauvegarde et l'accès à vos informations ainsi que l'interaction avec la blockchain.
*   Si vous ne sauvegardez pas votre clef privée et votre mot de passe, il n'existe aucun moyen de regagner l'accès à votre portefeuille et aux fonds qu'il détient. Sauvegardez-les en plusieurs endroits et non uniquement sur votre ordinateur !

---

### Je suis nouveau. Que puis-je faire ?


MyEtherWallet vous donne la possibilité de générer de nouveaux portefeuilles pour stocker votre Ether par vous-même et pas sur un _exchange._ Ce processus ne s'exécute que sur votre ordinateur, pas sur nos serveurs. Quand vous générez un nouveau portefeuille, **il est donc de votre responsabilité de le sauvegarder de manière sécurisée.**

1.  Créez un nouveau portefeuille.
2.  Sauvegardez le portefeuille.
3.  Vérifiez que vous avez accès à ce nouveau portefeuille et que vous avez correctement sauvé toutes les informations nécessaires.
4.  Transférez de l'Ether vers ce nouveau portefeuille.

---

### Comment puis-je créer un nouveau portefeuille ?


1.  Allez à la page "Génération d'un portefeuille.
2.  Entrez un mot de passe fort. Si vous pensez que vous pouvez l'oublier, sauvegardez-le dans un endroit sûr. Vous aurez besoin de ce mot de passe pour envoyer des transactions.
3.  Cliquez sur "GÉNÉRER".
4.  Votre portefeuille a maintenant été généré.

---

### Comment puis-je sauvegarder mon portefeuille ?


Vous devez toujours sauvegarder votre portefeuille en plusieurs endroits physiques, comme sur une clef USB ou une feuille de papier.

1.  Sauvegardez l'adresse. Vous pouvez la garder pour vous-même ou la partager avec d'autres personnes qui, de cette manière, peuvent vous envoyer de l'Ether.
2.  Sauvegardez votre clef privée en plusieurs exemplaires. Ne la partagez avec personne. Votre clef privée est nécessaire pour accéder à votre Ether pour l'envoyer ! Il existe 3 types de clef privée :

*   **Fichier Keystore (UTC / JSON · Recommandé · Chiffré)** <span translate="x_KeystoreDesc" class="ng-scope">Ce fichier Keystore utilise le même format que celui que Mist, vous pouvez donc facilement l'importer plus tard dans ces logiciels. C'est le fichier que nous vous recommandons de télécharger et sauvegarder.</span>
*   **Fichier JSON (non-chiffré)** <span translate="x_JsonDesc" class="ng-scope">C'est la version non-chiffrée au format JSON de votre clé privée. Cela signifie que vous n'avez pas besoin de votre mot de passe pour l'utiliser mais que toute personne qui trouve ce JSON peut accéder à votre portefeuille et vos Ether sans mot de passe.</span>
*   **Clé privée (non-chiffrée)** <span translate="x_PrivKeyDesc" class="ng-scope">C'est la version textuelle non-chiffrée de votre clé privée, ce qui signifie qu'aucun mot de passe n'est nécessaire pour l'utiliser. Si quelqu'un venait à découvrir cette clé privée, il pourrrait accéder à votre portefeuille sans mot de passe. Pour cette raison, la version chiffrée de votre clé privée est recommandée.</span>

4.  Placez votre adresse, les exemplaires de la clef privée et la version PDF de votre portefeuille papier dans un dossier. Sauvegardez-le sur votre ordinateur et une clef USB.
5.  Imprimez votre portefeuille si vous avez une imprimante. Sinon, écrivez votre clef privée et votre adresse usr une feuille de papier. Rangez-la dans un endroit sûr, à part de votre ordinateur et de la clef USB.
6.  Gardez à l'esprit qu'il faut vous préserver de la perte de la clef et du mot de passe en cas de perte de votre disque dur, de votre clef oui de la feuille de papier. Vous devez également vous prémunir contre les catastrophes impactant toute une zone géographique (comme un incendie ou une inondation).

---

### Comment puis-je gérer en toute sécurité un stockage hors ligne avec MyEtherWallet?

1.  Allez sur notre Github : [https://github.com/kvhnuke/etherwallet/releases/latest](https://github.com/kvhnuke/etherwallet/releases/latest).
2.  Cliquez sur `dist-vX.X.X.X.zip`
3.  Transportez le zip sur un ordinateur hors ligne.
4.  Dézippez-le et double-cliquez sur `index.html`.
5.  Générez un portefeuille avec un mot de passe fort.
6.  Sauvegardez l'adresse. Sauvegardez les exemplaires de la clef privée. Sauvegardez le mot de passe si vous ne voulez pas devoir vous en souvenir toujours.
7.  Rangez ces papier et/ou ces clefs USB en des endroits physiquement distants.
8.  Allez à la page "Visualisation d'un portefeuille" et entrez votre clef privée et votre mot de passe pour vous assurer de leur validité et pour accéder à votre portefeuille. Vérifiez que l'adresse que vous avez écrite est la même.

Gardez à l'esprit qu'il faut vous préserver de la perte de la clef et du mot de passe en cas de perte de votre disque dur, de votre clef oui de la feuille de papier. Vous devez également vous prémunir contre les catastrophes impactant toute une zone géographique (comme un incendie ou une inondation).

---

### Comment puis-je vérifier que j'ai accès à mon nouveau portefeuille ?

**Avant d'envoyer de l'Ether à votre portefeuille**, vous devez vous assurer que vous y avez accès.

1.  Naviguez vers la page "Visualisation d'un portefeuille".
2.  Sélectionnez le fichier de votre portefeuille -ou- votre clef privée et déverrouillez votre portefeuille.
3.  Si le portefeuille est chiffré, une zone texte apparaîtra automatiquement. Entrez le mot de passe.
4.  Cliquez sur le bouton "Déverrouiller votre portefeuille".
5.  Les informations sur votre portefeuille doivent apparaître. Trouvez l'adresse de votre compte près d'une icône circulaire et colorée. Celle-ci représente visuellement votre adresse. Assurez-vous que cette adresse est celle que vous avez sauvegardée dans votre document texte et qu'elle se trouve sur votre portefeuille papier.
6.  Si vous désirez détenir une grande quantité d'Ether, nous recommandons de commencer par envoyer une petite somme depuis le nouveau portefeuille avant d'y déposer une somme importante. Envoyez 0,001 Ether vers le nouveau portefeuille, accédez-y puis envoyez ces 0,001 Ether vers une autre adresse, et vérifiez que tout a fonctionné sans encombre.

---

### Comment puis-je envoyer de l'Ether d'un portefeuille vers un autre ?

Si vous désirez transférer une grande quantité d'Ether, vous devez d'abord essayer d'en envoyer d'abord un petit montant vers votre portefeuille pour vous assurer que tout fonctionne comme prévu.

1.  Naviguez vers la page "Envoyer des Ether et des Tokens".
2.  Sélectionnez le fichier de votre portefeuille -ou- votre clef privée et déverrouillez votre portefeuille.
3.  Si le portefeuille est chiffré, une zone texte apparaîtra automatiquement. Entrez le mot de passe.
4.  Cliquez sur le bouton "Déverrouiller votre portefeuille".
5.  Entrez l'adresse du destinataire dans le champ "Adresse de destination".
6.  Entrez le montant que vous voulez envoyer. Vous pouvez également cliquer sur "Envoyer le solde total" si vous voulez envoyer tout le contenu.
7.  Cliquez sur "Générer la transaction".
8.  Quelques champs supplémentaires apparaîtront. Votre navigateur est en train de générer la transaction.
9.  Cliquez sur le bouton bleu "Envoyer la transaction" en dessous.
10.  Une fenêtre pop-up apparaîtra. Vérifiez que le montant et que l'adresse de destination sont corrects. Puis cliquez sur "Oui, j'en suis sûr ! Effectuer la transaction.
11.  La transaction sera soumise. Son identifiant sera affiché. Vous pouvez cliquer sur l'identifiant pour la voir sur la blockchain.

---

### Comment puis-je lancer MyEtherWallet.com hors ligne/localement ?


Vous pouvez lancer MyEtherWallet.com sur votre ordinateur au lieu de passer par les serveurs GitHub. Vous pouvez générer un portefeuille en restant totalement hors ligne et envoyer des transactions depuis la page "Transaction hors ligne".

1.  Allez sur notre Github : [https://github.com/kvhnuke/etherwallet/releases/latest](https://github.com/kvhnuke/etherwallet/releases/latest).
2.  Cliquez sur `dist-vX.X.X.X.zip`
3.  Transportez le zip sur un ordinateur hors ligne.
4.  Dézippez-le et double-cliquez sur `index.html`.
5.  MyEtherWallet.com tourne maintenant complètement sur votre ordinateur.

Au cas où cela ne vous soit pas familier, vous devez conserver l'intégralité du dossier pour faire tourner le site web et non uniquement `index.html`. Ne touchez à rien, ne déplacez rien dans le dossier. Si vous stockez une sauvegarde du repo MyEtherWallet pour l'avenir, nous vous recommandons ne ne stocker que le ZIP afin d'être sûr que le contenu du dossier restera intact.

Comme nous améliorons constamment MyEtherWallet.com, nous vous recommandons de mettre régulièrement à jour votre version sauvegardée.

---

### I cannot connect to my custom node. What do I do?


*   Verify the URL you entered is correct.
*   Verify the port you entered is correct.
*   Verify that if you are connecting to an http:// node you are running MyEtherWallet locally (NOT over https://).
*   Verify geth is running with `geth --rpc --rpccorsdomain "null" --keystore "dont_put_secret_files_here_ever"` or parity is running with `parity --rpccorsdomain "*" --keys-path "dont_put_secret_files_here_ever"`
*   Verify your node is actually up and running.
*   Try removing the node and adding it again.

---

### Comment puis-je envoyer des tokens et ajouter des tokens spécifiques ?


[Ethplorer.io](https://ethplorer.io/) est un excellent moyen d'explorer les tokens et de trouver les décimales d'un token.

1.  Naviguez vers la page "Envoi de tokens".
2.  Déverrouillez votre portefeuille.
3.  Entre l'adresse à laquelle vous désirez faire l'envoi dans le champ "Adresse de destination".
4.  Entrez le montant que vous désirez envoyer.
5.  Sélectionnez le token que vous désirez envoyer.
6.  Si celui-ci n'est pas listé :

1.  Cliquez sur "Spécifique".
2.  Entrez l'adresse, le nom et les décimales du token. Ces informations sont fournies par les développeurs du token et sont également nécessaires quand vous faites "Add a Watch Token" dans Mist.
3.  Cliquez sur "Sauver".
4.  Vous pouvez maintenant envoyer ces tokens ainsi qu'en voir le solde dans la zone sur le côté.

8.  Cliquez sur "Générer la transaction".
9.  Quelques champs supplémentaires vont apparaître : votre navigateur est en train de générer la transaction.
10.  Cliquez sur le bouton bleu "Envoyer la transation" au dessous.
11.  Une fenêtre pop-up va apparaître. Vérifiez que le montant et que l'adresse de destination sont corrects puis cliquez sur le bouton "Oui, j'en suis sûr ! Effectuer la transaction."
12.  La transaction est alors soumise et l'identifiant de transaction est affiché. Vous pouvez cliquer dessus pour le voir sur la blockchain.


---

### Que se passe-t-il si votre site tombe ?


MyEtherWallet n'est pas un portefeuille sur le web. Vous n'avez pas de login et rien n'est jamais stocké sur nos serveurs. Ce n'est qu'une interface qui vous permet d'interagir avec la blockchain.

Si MyEtherWallet.com tombe, vous devrez trouver un autre moyen (comme geth ou Ethereum Wallet / Mist) pour faire la même chose. Mais vous n'aurez pas à "récupérer" votre Ether depuis MyEtherWallet parce qu'il ne se trouve pas dans MyEtherWallet. Il est chez vous, dans le portefeuille que vous avez généré par notre site.

Vous pouvez maintenant importer facilement votre clef privée non chiffrée et vos fichiers (chiffrés) au format Geth/Mist, directement dans geth / Ethereum Wallet / Mist. Voir question #12 ci-dessous.

De plus, la probabilité que nous laissions tomber MyEtherWallet approche zéro. Il ne nous coûte presque rien de le maintenir comme nous n'y stockons aucune information. Si le domaine venait à être perdu, le logiciel sera toujours disponible publiquement sur [https://github.com/kvhnuke/etherwallet](https://github.com/kvhnuke/etherwallet/tree/gh-pages). Vous pourrez y télécharger le ZIP et le faire tourner localement.

---

### La page "Envoyer des Ether et des Tokens" est-elle hors ligne ?


Non. Elle a besoin de l'internet pour obtenir le prix actuel du gaz, le nonce de votre compte et pour émettre la transaction (c'est-à-dire "envoyer"). Cependant, elle n'envoie que la transaction signée. Votre clef privée reste en sécurité chez vous. Nous fournissons maintenant aussi une page "Transaction hors ligne" pour vous permettre de conserver en permanence vos clefs privées sur une machine hors ligne.

---

### Comment puis-je faire une transaction hors ligne ?


1.  Allez à la page "Transaction hors ligne" avec votre ordinateur en ligne.
2.  Entrez l'"Adresse d'émission". Attention, c'est l'adresse _d'où_ vous envoyez et non celle _vers_ laquelle vous envoyez. Ceci va générer ke nonce et le prix du gaz.
3.  Allez sur votre ordinateur hors ligne. Entrez l'"Adresse de destination" et le "Montant" que vous désirez envoyer.
4.  Entrez le "Prix du gaz" tel qu'il vous a été affiché sur l'ordinateur en ligne à la première étape.
5.  Entrez le "Nonce" tel qu'il vous a été affiché sur l'ordinateur en ligne à la première étape.
6.  La "Limite en gaz" a une valeur de 21000 par défaut. Ceci couvre les frais d'une transaction standard. Si vous envoyez à un contrat ou si vous embarquez des données supplémentaires avec votre transaction vous devrez augmenter la limite de gaz. Tout gaz non consommé vous sera retourné.
7.  Si vous le désirez, entrez des données. Dans ce cas, vous devrez inclure plus que la limite de 21000 par défaut? Toutes les données sont au format hexadécimal.
8.  Sélectionnez le fichier de votre portefeuille -ou- votre clef privée et déverrouillez votre portefeuille.
9.  Cliquez sur le bouton "Générer la transaction signée".
10.  Le champ de données sous ce bouton se remplit avec votre transaction signée. Copiez-la et revenez avec elle sur votre ordinateur en ligne.
11.  Sur votre ordinateur en ligne, collez la transaction signée dans le champ texte et cliquez sur "Envoyez l'Ether". Ceci émettra votre transaction.

---

### Comment puis-je importer un portefeuille créé par MyEtherWallet dans geth / Ethereum Wallet / Mist ?


Avec un fichier Geth/Mist JSON de MyEtherWallet v2+....

1.  Allez à la page "Visualisation d'un portefeuille".
2.  Déverrouillez votre portefeuille avec votre clef privée **chiffrée** ou votre fichier JSON.
3.  Allez à la section "Téléchargez le fichier JSON file - Format Geth/Mist (chiffé)". Cliquez sur le bouton "Télécharger" en dessous. Vous avez maintenant votre fichier _keystore._
4.  Ouvrez l'application Ethereum Wallet.
5.  Dans la barre de menu, allez sur "Accounts" -> "Backup" -> "Accounts"
6.  Ceci ouvre votre dossier de keystores. Copiez-y le fichier que vous venez de télécharger (`UTC--2016-04-14......../`) dans ce dossier.
7.  Votre compte doit apparaître immédiatement sous "Accounts."

Avec votre clef privée non chiffrée...

1.  Si vous n'avez pas déjà votre clef privée non chiffrée, allez à la page "Visualisation d'un portefeuille".
2.  Sélectionnez le fichier de votre portefeuille -ou- entrez/collez votre clef privée pour déverrouiller votre portefeuille.
3.  Copiez votre clef privée (non chiffrée).
4.  Si vous êtes sur un Mac :

*   Ouvez Text Edit et collez cette clef privée.
*   Dans la barre de menu, cliquez sur "Format" -> "Make Plain Text".
*   Sauvegardez ce fichier vers votre `Desktop/` en tant que `nothing_special_delete_me.txt`. Assurez-vous qu'il précise "UTF-8" et "If no extension is provided use .txt" dans le dialogue de sauvegarde.
*   Ouvrez un terminal et lancez la commande suivante : `geth account import ~/Desktop/nothing_special_delete_me.txt`
*   Ceci vous invitera à choisir un nouveau mot de passe. C'est celui que vous utiliserez dans geth / Ethereum Wallet / Mist à chaque vois que vos enverrez une transaction, donc ne l'oubliez pas.
*   Après que l'import a réussi, supprimez `nothing_special_delete_me.txt`
*   La prochaine fois que vous ouvrirez l'application Ethereum Wallet, votre compte sera listé sous "Accounts".

6.  Si vous êtes sur un PC :

*   Ouvrez Notepad et collez-y la clef privée
*   Sauvegardez le fichier en tant que `nothing_special_delete_me.txt` sur `C:`
*   Lancez la commande `geth account import C:\nothing_special_delete_me.txt`
*   Ceci vous invitera à choisir un nouveau mot de passe. C'est celui que vous utiliserz dans geth / Ethereum Wallet / Mist à chaque foiq que vous enverrez une transaction donc ne l'oubliez pas.
*   Après que l'import a réussi, supprimez `nothing_special_delete_me.txt`
*   La prochaine fois que vous ouvrirez l'application Ethereum Wallet, votre compte sera listé sous "Accounts".


---

### Que signifie « Fonds insuffisants. Le compte d'où vous essayez d'envoyer une transaction ne possède pas assez de fonds. Requis : XXXXXXXXXXXXXXXXXXX, reçu : XXXXXXXXXXXXXXXXXXX. » ?


Cela signifie que vous n'avez pas assez d'Ether sur votre compte pour couvrir les coûts en gaz. Chaque transaction (y compris pour les tokens et les contrats) demandent du gaz, et ce gaz est payé en Ether. Le nombre affiché est le montant requis pour couvrir le coût de la transaction en Wei. Prenez ce nombre, divisez-le par `1000000000000000000` et soustrayez la somme en Ether que vous essayiez d'envoyer (si vous tentiez d'envoyer de l'Ether). Cela vous donnera le montant en Ether dont vous avez besoin pour que le compte effectue la transaction.


---

### Certains sites randomisent (initialisent) la génération de clef privée par les mouvements de la sours. Ce n'est pas le cas de MyEtherWallet.com. La génération de nombres aléatoires de MyEtherWallet est-elle sûre ?


Bien que l'interception des mouvement de la souris soit jugée attractive par beaucoup, et que nous en comprenions les raisons, la réalité est que window.crypto assure plus d'entropie que les mouvements de votre souris. L'utilisation de ces mouvements est sûre mais nous (ainsi que de nombreux projets crypto) avons de bonnes raisons de croire en window.crypto. De plus, MyEtherWallet.com peut être utilisé sur des périphériques tactiles. Voici une [conversation entre un redditor rageur et Vitalik Buterin sur les mouvements de souris et window.crypto](https://www.reddit.com/r/ethereum/comments/2bilqg/note_there_is_a_paranoid_highsecurity_way_to/cj5sgrm) et voici [les spécifications w3 de window.crypto](https://dvcs.w3.org/hg/webcrypto-api/raw-file/tip/spec/Overview.html#dfn-GlobalCrypto).


---

### Pourquoi le compte que je viens de créer n'apparaît-il pas dans l'explorateur de blockchain ? (i.e. : etherchain, etherscan)


Les comptes n'apparaissent dans un explorateur de blockchain qu'après une activité y ait eu lieu comme, par exemple, quand on y a transféré de l'Ether.


---

### Comment puis-je vérifier le solde de mon compte ?


Vous pouvez utiliser un explorateur de blockchain comme [etherscan.io](http://etherscan.io/). Collez votre adresse dans la barre de recherche et cela récupérera votre solde et l'historique de vos transactions. Par exemple, voici ce que montre notre [compte de donations](http://etherscan.io/address/0x7cb57b5a97eabe94205c07890be4c1ad31e486a8) sur etherscan.io


---

### Pourquoi mon solde n'apparaît-il pas quand je déverrouille mon portefeuille ?


C'est probablement dû au fait que vous vous trouvez derrière un firewall. L'API que nous utilisons pour obtenir le solde et converir celui-ci est souvent bloquée par des firewalls pour des raisons diverses. Vous êtes toujours capable d'envoyer des transactions mais il vous faut employer une autre méthode pour voir le solde, comme etherscan.io


---

### Où est le fichier de mon portefeuille geth ?


*   Mac: `~/Library/Ethereum/keystore`
*   Linux: `~/.ethereum/keystore`
*   Windows: `%APPDATA%/Ethereum/keystore`


---

### Où est le fichier de mon portefeuille Mist ?


Les fichiers Mist se trouvent généralement aux endroits ci-dessus mais il est beaucoup plus facile d'ouvrir Mist, de sélectionner "Accounts" dans la barre du haut, puis "Backup" et "Accounts". Cela ouvre le dossier où vos fichiers sont stockés.


---

### Où est le fichier de mon portefeuille de _pre-sale_ (pré-vente) ?


Là où vous l'avez mis. ;) Il vous a aussi été envoyé donc allez vérifier vos mails. Cherchez le fichier appelé `"ethereum_wallet_backup.json"` et choisissez ce fichier. Il est chiffré avec un mot de passe que vous avez créé pendant l'achat au moment de la pré-vente.


---

### N'importe qui ne peut-il pas prendre une clef privée au hasard, chercher un solde et l'envoyer à sa propre adresse ?


Version courte : oui, mais trouver un compte avec un solde prendrait plus longtemps que la durée de l'univers... donc... non.

Version longue : Ethereum est basé sur la [cryptographie à clef publique](https://en.wikipedia.org/wiki/Public-key_cryptography), plus précisément la [cryptographie des courbes elliptiques (ECC)](https://eprint.iacr.org/2013/734.pdf) qui est très couramment employée, pas uniquement dans Ethereum. La plupart des serveurs sont protégés par les ECC. Bitcoin les emploie ainsi que SSH, TLS et bien d'autres protocoles. Dans le cas spécifique d'Ethereum, les clefs font 256 bits et sont plus fortes que celles en 128 et 192 bits, encore très employées et toujours considérées comme sûres par les experts.

Vous avez une clef privée et une clef publique. La clef privée peut servir à dériver la clef publique mais l'inverse est impossible. Le fait que l'internet et le monde entier utilise ce système cryptographique signifie que, s'il existait un moyen de dériver la clef privée de la clef publique, le risque que courrait votre Ether serait le moindre des problèmes de tout le monde.

Cela dit, OUI : si quelqu'un possède votre clef privée, il peut envoyer de l'Ether depuis votre compte, de même que si une personne a le mot de passe de votre email, elle peut lire des mails ou en envoyer, ou si c'est le mot de passe de votre compte en banque, elle peut faire des virements. Vous pouvez télécharger la versoin KEystore de votre clef privée qui est la clef privée chiffrée avec un mot de passe. Cela ressemble à avoir un mot de passe protégé par un autre mot de passe.

Et OUI, en théorie, on peut taper une chaîne de 64 caractères hexadécimaux jusqu'à en trouver un qui correspond. Il est d'ailleurs possible d'écrire un programme qui vérifie très rapidement des clefs privée aléatoires. C'est ce que l'on appelle utiliser la "brute force" ou miner des clefs privées. Beaucoup de monde y a pensé très fort et très longtemps. Quelques serveurs haut de gamme peuvent vérifier plus de 1 million de clefs par seconde. Pourtant, même ce chiffre ne donnerait pas accès à un compte suffisamment approvisionné pour en valoir la chandelle ; il est bien plus probable que vous, vos enfant et vos petits-enfants mourront avant d'obtenir une correspondance.

Si vous connaissez un peu Bitcoin, [ceci remettra les choses en perspective :](http://bitcoin.stackexchange.com/questions/32331/two-people-with-same-public-address-how-will-people-network-know-how-to-deliver) *Pour illustrer l'improbabilité de tout ceci : supposons quqe chaque satoshi de chaque bitcoin qui sera jamais produit soit affecté à sa propre clef privée distincte. La probabilité que, parmi ces clefs, s'en trouvent deux qui correspondent à la même adresse serait d'environ 1 sur 100 quintillons.

[Si vous voulez un argumentaire un peu plus technique :](http://security.stackexchange.com/questions/25375/why-not-use-larger-cipher-keys/25392#25392) *Ces nombres n'ont rien à voir avec la technologie des systèmes ; ce sont les maximums autorisés par la thermodynamique. Et ils impliquent clairement qu'une attaque par brute force contre des clefs de 256 bits restera impossible jusqu'à ce que l'on construise des ordinateurs avec autre chose que de la matière et qu'ils occupent autre chose que l'espace.

Cela suppose bien entendu que les clefs sont générées d'une manière totalement aléatoire avec suffisamment d'entropie. C'est le cas des clefs générées ici, tout comme celles de Jaxx et de Mist/geth. Les portefeuilles Ethereum sont tous assez bons de ce point de vue. Les clefs générées par des cerveaux humains ne le sont pas, car ces derniers ne sont pas capables de partir d'un nombre parfaitement aléatoire. Il y a eu des cas d'autres problèmes d'entropie insuffisante ou de nombres imparfaitement aléatoires dans le monde de Bitcoin mais il s'agit là d'un tout autre problème qui peut attendre un peu.


---

### Sécurité


Si l'une des premières questions que vous vous posez est "Pourquoi devrais-je faire confiance à ces gens ?", c'est une bonne démarche. Nous espérons que ce qui suit va dissiper vos craintes.

*   Nous avons commencé en août 2015\. Si vous recherchez ["myetherwallet" sur reddit](https://www.reddit.com/search?q=myetherwallet), vous pouvez voir qu'un nombre considérable de personnes nous utilisent sans problème.
*   Nous n'allons pas prendre votre argent ou voler vos clefs privées. Il n'y a pas de code malveillant sur ce site. En fait, les pages "Génération d'un portefeuille" sont totalement côté client. Cela signifie que tout le code s'éxécute sur **votre ordinateur** et n'est jamais sauvé et/ou transmis où que ce soit.
*   Vérifiez l'URL -- Ce site est servi par Github et vous pouvez en voir le code source ici : [https://github.com/kvhnuke/etherwallet/tree/gh-pages](https://github.com/kvhnuke/etherwallet/tree/gh-pages) aux [https://www.myetherwallet.com](https://www.myetherwallet.com).
*   Pour générer les portefeuilles, vous pouvez télécharger le [code source](https://github.com/kvhnuke/etherwallet/releases/latest). Voir #5 ci-dessus.
*   Lancez un test et vérifiez le type d'activité réseau. La manière la plus simple consiste en un clic droit sur la page, puis "Inspecter". Allez à l'onglet "Network". Générez un portefeuille de test. Vous verrez qu'il n'y a pas d'activité réseau. Vous pourrez voir quelque chose se produire ressemblant à data:image/gif et data:image/png. Ce sont les QR codes en cours de génération... sur votre ordinateur. Aucun octet n'a été transféré.
*   Si cet outil ne vous plaît pas, alors ne l'utilisez surtout pas. Nous l'avons créé pour qu'il aide les gens à générer des portefeuilles et à effectuer des transactions sans avoir besoin de plonger dans les lignes de commandes ni faire tourner un nœud complet. À nouveau, n'hésitez pas à nous faire part de vos doutes et nous répondrons aussi rapidement que possible. Merci !

