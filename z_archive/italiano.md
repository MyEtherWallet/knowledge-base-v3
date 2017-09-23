/*
Title: Italiano
Sort: 2
*/

### Qualche promemoria
*   **Ethereum, MyEtherWallet.com & MyEtherWallet CX, e alcune delle librerie Javascript che utilizziamo sono in continuo sviluppo.** Anche se abbiamo testato approfonditamente e persone di tutto il mondo hanno correttamente creato decine di migliaia di portafogli, c'è sempre la remota possibilità che accada qualcosa di imprevisto che provochi la perdita dei tuoi ETH. Ti preghiamo di non investire più di quello che sei disposto a perdere, e di fare attenzione. Se dovesse capitare qualcosa, ci dispiace, ma **non siamo responsabili per gli ether perduti**.
*   MyEtherWallet.com & MyEtherWallet CX non sono "portafogli web". Non stai creando un account né ci stai dando i tuoi ether da custodire. Tutti i dati non lasciano mai il tuo computer/il tuo browser. Quello che facciamo è renderti facile creare, salvare, e accedere alle tue informazioni e interagire con la _blockchain_.
*   Se non salvi la tua chiave privata e la password, non c'è modo di recuperare l'accesso al tuo portafoglio o ai fondi che contiene. Salvali in molti luoghi fisici diversi e non solo sul tuo computer!

---

#### Sono nuovo. Cosa faccio?
MyEtherWallet ti dà la possibilità di generare nuovi portafogli in modo da poter conservare i tuoi ether da solo, invece di usare una piattaforma di scambio. Questo processo avviene interamente sul tuo computer, non sui nostri server. Quindi, quando generi un nuovo portafoglio, **sei responsabile del suo salvataggio in maniera sicura**.

1.  Crea un nuovo portafoglio.
2.  Fai un backup del portafoglio.
3.  Verifica di avere accesso a questo nuovo portafoglio e di avere salvato correttamente tutte le informazioni necessarie.
4.  Trasferisci degli ether in questo nuovo portafoglio.

---

#### Come creo un nuovo portafoglio?
1.  Vai alla pagina "Genera portafoglio".
2.  Inserisci una password robusta. Se pensi di poterla dimenticare, salvala in un posto sicuro. Avrai bisogno di questa password per inviare transazioni.
3.  Fai clic su "GENERA PORTAFOGLIO".
4.  Il tuo portafoglio è stato appena generato.

---

#### Come salvo o faccio il backup del mio portafoglio?

Dovresti sempre fare dei backup esterni in diversi luoghi fisici - come su una penna USB e/o su un pezzo di carta.

1.  Salva l'indirizzo. Puoi tenerlo per te o condividerlo. In questo modo gli altri possono inviarti degli ether.
2.  Salva delle versioni della chiave privata. Non condividerla con nessuno. La tua chiave privata è necessaria quando vuoi accedere ai tuoi ether per trasferirli! Ci sono 3 tipi di chiave privata:

*   **File Keystore (UTC / JSON · Consigliato · Crittografato)** <span translate="x_KeystoreDesc" class="ng-scope">Questo file Keystore è compatibile con il formato usato da Mist, in modo da poterlo facilmente importare in futuro. È il file consigliato da scaricare e conservare.</span>
*   **File JSON (non crittografato)** <span translate="x_JsonDesc" class="ng-scope">Questa è la tua chiave privata in formato JSON non crittografato. Significa che non hai bisogno della password, ma chiunque trovi questo file JSON potrà avere accesso al tuo portafoglio e ai tuoi ether senza password.</span>
*   **Chiave privata (non crittografata)** <span translate="x_PrivKeyDesc" class="ng-scope">Questa è la versione testuale non crittografata della tua chiave privata, il che significa che non serve una password. Se qualcuno trovasse la tua chiave privata non crittografata potrebbe avere accesso al tuo portafoglio senza una password. Per questa ragione di solito si consigliano le versioni crittografate.</span>

4.  Metti il tuo indirizzo, le versioni della chiave privata, e la versione PDF del tuo portafoglio cartaceo in una cartella. Salvala sul tuo computer e su una penna USB.
5.  Stampa il portafoglio se hai una stampante. In alternativa, trascrivi la tua chiave privata e l'indirizzo su un pezzo di carta. Conserva questo foglio in un posto sicuro, separato dal tuo computer e dalla penna USB.
6.  Ricorda, devi evitare la perdita delle chiavi e della password in caso di smarrimento o malfunzionamento del tuo hard disk, penna USB, o pezzo di carta. Devi anche considerare la perdita fisica o il danneggiamento di una intera area (pensa a incendi o inondazioni).

---

#### Come implemento un portafoglio offline in maniera sicura con MyEtherWallet?

1.  Vai su [https://github.com/kvhnuke/etherwallet/releases/latest](https://github.com/kvhnuke/etherwallet/releases/latest).
2.  Fai clic su `dist-vX.X.X.X.zip`.
3.  Sposta il file zip su un computer _air-gapped_.
4.  Decomprimilo e fai doppio clic su `index.html`.
5.  Genera un portafoglio con una password robusta.
6.  Salva l'indirizzo. Salva delle versioni della chiave privata. Salva la password se potresti non ricordarla per sempre.
7.  Conserva questi fogli / penne USB in diversi luoghi fisici separati.
8.  Vai alla pagina "Informazioni portafoglio" e digita la tua chiave privata / password per assicurarti che siano corrette e per accedere al portafoglio. Controlla che l'indirizzo che hai trascritto sia lo stesso.

Ricorda, devi evitare la perdita delle chiavi e della password in caso di smarrimento o malfunzionamento del tuo hard disk, penna USB, o pezzo di carta. Devi anche considerare la perdita fisica o il danneggiamento di una intera area (pensa a incendi o inondazioni).

---

#### Come verifico di aver accesso al mio nuovo portafoglio?

**Prima di inviare degli ether al tuo nuovo portafoglio**, dovresti assicurarti di poterci accedere.

1.  Vai alla pagina "Informazioni portafoglio".
2.  Seleziona il file del tuo portafoglio -oppure- la tua chiave privata e sblocca il portafoglio.
3.  Se il portafoglio è crittografato, comparirà automaticamente una casella di testo. Inserisci la password.
4.  Fai clic sul pulsante "Sblocca".
5.  Dovrebbero comparire le informazioni sul tuo portafoglio. Individua l'indirizzo del tuo conto, accanto all'icona rotonda e colorata. Questa icona rappresenta visivamente il tuo indirizzo. Assicurati che l'indirizzo sia quello che hai salvato nel tuo file di testo e che sia presente sul tuo portafoglio cartaceo.
6.  Se stai pensando di conservare una grande quantità di ether, ti consigliamo di provare a inviare una piccola somma di ether dal nuovo portafoglio prima di depositarci un grosso importo. Invia 0,001 ether al nuovo portafoglio, accedici, e invia quegli 0,001 ether a un altro indirizzo, e assicurati che tutto funzioni agevolmente.

---

#### Come invio degli ether da un portafoglio a un altro?

Se stai pensando di spostare una grande quantità di ether, dovresti prima provare ad inviare una piccola somma al tuo portafoglio per assicurarti che tutto vada come previsto.

1.  Vai alla pagina "Invia ether e token".
2.  Seleziona il file del tuo portafoglio -oppure- la tua chiave privata e sblocca il portafoglio.
3.  Se il portafoglio è crittografato, comparirà automaticamente una casella di testo. Inserisci la password.
4.  Fai clic sul pulsante "Sblocca".
5.  Inserisci l'indirizzo al quale vuoi inviare nel campo "Indirizzo destinatario:".
6.  Inserisci l'importo che vuoi inviare. Puoi anche fare clic sul link "Invia l'intero saldo" se desideri trasferire l'intero saldo.
7.  Fai clic su "Genera transazione".
8.  Compariranno un paio di ulteriori campi. È perché il tuo browser ha generato la transazione.
9.  Fai clic sul pulsante azzurro "Invia transazione" in basso.
10.  Comparirà un pop-up. Verifica che l'importo e l'indirizzo a cui stai inviando siano corretti. Quindi fai clic sul pulsante "Sì, sono sicuro! Esegui la transazione.".
11.  La transazione verrà inviata. Verrà mostrato l'ID della transazione (_TX Hash_). Puoi fare clic sul TX Hash per vederla sulla _blockchain_.

---

#### Come faccio ad eseguire MyEtherWallet.com offline/in locale?

Puoi eseguire MyEtherWallet.com sul tuo computer invece che dai server di GitHub. Puoi generare un portafoglio completamente offline e inviare transazioni dalla pagina "Invia Offline".

1.  Vai su [https://github.com/kvhnuke/etherwallet/releases/latest](https://github.com/kvhnuke/etherwallet/releases/latest).
2.  Fai clic su `dist-vX.X.X.X.zip`.
3.  Sposta il file zip su un computer _air-gapped_.
4.  Decomprimilo e fai doppio clic su `index.html`.
5.  MyEtherWallet.com è ora in esecuzione completamente sul tuo computer.

In caso tu non abbia molta confidenza, ti serve l'intera cartella per poter eseguire il sito web, non solo `index.html`. Non toccare né spostare nulla del contenuto della cartella. Se stai conservando un backup del repository MyEtherWallet per il futuro, ti consigliamo di conservare soltanto il file ZIP in modo da assicurarti che i contenuti della cartella rimangano intatti.

Dal momento che stiamo costantemente aggiornando MyEtherWallet.com, ti consigliamo di aggiornare periodicamente la tua versione locale del repository.

---

#### Come invio token e come aggiungo token personalizzati?


[Ethplorer.io](https://ethplorer.io/) è un ottimo modo di esplorare i token e trovarne i decimali.

1.  Vai alla pagina "Invia ether e token".
2.  Sblocca il portafoglio.
3.  Inserisci l'indirizzo al quale vuoi inviare nel campo "Indirizzo destinatario:".
4.  Inserisci l'importo che vuoi inviare.
5.  Seleziona il token che vuoi inviare.
6.  Se non vedi il token nell'elenco:

1.  Fai clic su "Altro".
2.  Inserisci l'indirizzo, il nome, e i decimali del token. Questi valori sono forniti dagli sviluppatori del token e sono necessari anche quando aggiungi il token in Mist per osservarlo.
3.  Fai clic su "Salva".
4.  Ora puoi inviare il token e anche vederne il saldo nella barra laterale.

8.  Fai clic su "Genera transazione".
9.  Compariranno un paio di ulteriori campi. È perché il tuo browser ha generato la transazione.
10.  Fai clic sul pulsante azzurro "Invia transazione" in basso.
11.  Comparirà un pop-up. Verifica che l'importo e l'indirizzo a cui stai inviando siano corretti. Quindi fai clic sul pulsante "Sì, sono sicuro! Esegui la transazione.".
12.  La transazione verrà inviata. Verrà mostrato l'ID della transazione (_TX Hash_). Puoi fare clic sul TX Hash per vederla sulla _blockchain_.

---

#### Che succede se il vostro sito va giù?

MyEtherWallet non è un portafoglio web. Non hai un login e niente viene mai salvato nei nostri server. È semplicemente un'interfaccia che ti consente di interagire con la _blockchain_.

Se MyEtherWallet.com va giù, dovrai trovare un altro modo (come geth o Ethereum Wallet / Mist) per fare quello che facciamo noi. Ma non dovrai "tirare fuori" i tuoi ether da MyEtherWallet perché non si trovano in MyEtherWallet. Sono in qualunque portafoglio tu abbia generato tramite il nostro sito.

Ora puoi importare direttamente e molto facilmente in geth / Ethereum Wallet / Mist la tua chiave privata non crittografata e i tuoi file in formato Geth/Mist (crittografati). Vedi la domanda n. 12 qui sotto.

Inoltre, la probabilità che tiriamo giù MyEtherWallet è prossima allo zero. Non ci costa praticamente nulla mantenerlo dal momento che non stiamo memorizzando alcuna informazione. Se anche disattivassimo il dominio, è ancora, e sarà sempre, disponibile pubblicamente su [https://github.com/kvhnuke/etherwallet](https://github.com/kvhnuke/etherwallet/tree/gh-pages). Puoi scaricare lo ZIP da lì ed eseguirlo in locale.

---

#### La pagina "Invia ether e token" è offline?

No. Ha bisogno di Internet per poter ottenere il prezzo corrente del gas, il _nonce_ del tuo conto, e per trasmettere la transazione (cioè per inviarla). Tuttavia, si limita ad inviare la transazione firmata. La tua chiave privata rimane al sicuro con te. Ora abbiamo inserito anche una pagina "Invia offline" così che ti possa assicurare che le tue chiavi private rimangano sempre su un computer offline/_air-gapped_.

---

#### Come creo una transazione offline?

1.  Vai alla pagina "Invia offline" con il tuo computer online.
2.  Inserisci l'"Indirizzo mittente". Ti preghiamo di notare che questo è l'indirizzo MITTENTE, non l'indirizzo DESTINATARIO. Da questo indirizzo si genera il _nonce_ e il prezzo del gas.
3.  Spostati sul tuo computer offline. Inserisci l'"INDIRIZZO DESTINATARIO" e l'"IMPORTO" che desideri inviare.
4.  Inserisci il "PREZZO GAS" così come visualizzato sul tuo computer online nel passo n. 1.
5.  Inserisci il "NONCE" così come visualizzato sul tuo computer online nel passo n. 1.
6.  Il "LIMITE GAS" ha un valore predefinito di 21000\. Questo valore è sufficiente per una transazione standard. Se desideri inviare ad un contratto o se includi nella transazione dati aggiuntivi avrai bisogno di aumentare il limite gas. Eventuale gas in eccesso ti sarà restituito.
7.  Se lo desideri, inserisci dei dati. Se lo fai, dovrai aumentare il limite gas a un valore superiore al limite predefinito di 21000\. Tutti i dati sono in formato HEX.
8.  Seleziona il file del tuo portafoglio -oppure- la tua chiave privata e sblocca il portafoglio.
9.  Premi il pulsante "GENERA TRANSAZIONE".
10.  I campi sotto il pulsante saranno riempiti con la transazione firmata. Copiala e ritorna al tuo computer online.
11.  Sul tuo computer online, incolla la transazione firmata nel campo di testo nel passo n. 3 e fai clic su "Invia transazione". In questo modo la transazione verrà trasmessa.

---

#### Come faccio a importare un portafoglio creato con MyEtherWallet in geth / Ethereum Wallet / Mist?

Con un file JSON Geth/Mist generato da MyEtherWallet v2+....

1.  Vai alla pagina "Informazioni portafoglio".
2.  Sblocca il portafoglio usando la tua chiave privata **crittografata** o il file JSON.
3.  Individua la sezione "File Keystore/JSON (Consigliato · Crittografato · Formato Mist/Geth)". Premi il pulsante "Download" al di sotto. Ora hai il file keystore.
4.  Apri l'applicazione Ethereum Wallet.
5.  Nella barra dei menu, vai su "Accounts" -> "Backup" -> "Accounts"
6.  Si aprirà la tua cartella keystore. Copia il file che hai appena scaricato (`UTC--2016-04-14........`) dentro questa cartella.
7.  Il tuo conto dovrebbe comparire immediatamente sotto "Accounts."

Con una chiave privata non crittografata...

1.  Se non hai già la chiave private non crittografata, vai alla pagina "Informazioni portafoglio".
2.  Seleziona il file del tuo portafoglio -oppure- inserisci/incolla la tua chiave privata per sbloccare il portafoglio.
3.  Copia la tua chiave privata (non crittografata).
4.  Se sei su un Mac:

*   Apri TextEdit e incolla la chiave privata.
*   Vai sulla barra dei menu e fai clic su "Formato" -> "Converti in formato Solo testo".
*   Salva questo file sulla tua `Scrivania` come `niente_di_speciale_cancellami.txt`. Assicurati che siano selezionati "UTF-8" e "Se non è indicata nessuna estensione, usa .”txt”" nella finestra di salvataggio.
*   Apri il terminale ed esegui il seguente comando: `geth account import ~/Desktop/niente_di_speciale_cancellami.txt`
*   Ti verrà chiesto di creare una nuova password. È la password che userai in geth / Ethereum Wallet / Mist ogni volta che invierai una transazione, quindi non dimenticarla.
*   A importazione conclusa positivamente, cancella `niente_di_speciale_cancellami.txt`
*   Alla prossima apertura dell'applicazione Ethereum Wallet, il tuo conto sarà mostrato sotto "Accounts".

6.  Se sei su un PC:

*   Apri Blocco note e incolla la chiave privata
*   Salva il file come `niente_di_speciale_cancellami.txt` in `C:\`
*   Esegui il comando `geth account import C:\niente_di_speciale_cancellami.txt`
*   Ti verrà chiesto di creare una nuova password. È la password che userai in geth / Ethereum Wallet / Mist ogni volta che invierai una transazione, quindi non dimenticarla.
*   A importazione conclusa positivamente, cancella `niente_di_speciale_cancellami.txt`
*   Alla prossima apertura dell'applicazione Ethereum Wallet, il tuo conto sarà mostrato sotto "Accounts".

---

#### Cosa significa "Fondi insufficienti. L'account dal quale stai provando ad inviare la transazione non ha abbastanza fondi. Richiesti XXXXXXXXXXXXXXXXXXX ma presenti: XXXXXXXXXXXXXXXX."?

Significa che non hai abbastanza ether nel tuo conto per coprire il costo del gas. Tutte le transazioni (comprese quelle che riguardano token e contratti) richiedono gas, e il gas si paga in ether. Il numero indicato è l'importo richiesto per coprire il costo della transazione in wei. Prendi quel numero, dividilo per `1000000000000000000`, e sottrai la quantità di ether che stavi provando ad inviare (se stavi provando ad inviare ether). Il risultato è la somma in ether che devi inviare a quel conto per poter eseguire la transazione.

---

#### Certi siti inizializzano il generatore di numeri casuali per la generazione della chiave privata tramite i movimenti del mouse. MyEtherWallet.com non lo fa. La generazione di numeri casuali di MyEtherWallet è sicura?

Sebbene usare i movimenti del mouse sia ingegnoso, e comprendiamo perché piaccia, la realtà è che window.crypto assicura maggiore entropia rispetto ai tuoi movimenti del mouse. Non che i movimenti del mouse siano insicuri, è solo che noi (e un sacco di altri critto-esperimenti) crediamo in window.crypto. Oltretutto, MyEtherWallet.com può essere utilizzato su dispositivi touch. Qui c'è una [conversazione fra un utente di reddit arrabbiato e Vitalik Buterin su movimenti del mouse contro window.crypto](https://www.reddit.com/r/ethereum/comments/2bilqg/note_there_is_a_paranoid_highsecurity_way_to/cj5sgrm) e qui c'è [la specifica del w3 di window.crypto](https://dvcs.w3.org/hg/webcrypto-api/raw-file/tip/spec/Overview.html#dfn-GlobalCrypto).

---

#### Perché il conto che ho appena creato non risulta nello strumento per esplorare la _blockchain_? (es: etherchain, etherscan)

I conti vengono mostrati in quegli strumenti solamente dopo che c'è stata un'attività sul conto in questione—ad esempio, dopo che ci hai trasferito degli ether.

---

#### Come faccio a controllare il saldo del mio conto?

Puoi usare uno strumento per l'esplorazione della _blockchain_ come [etherscan.io](http://etherscan.io/). Incolla il tuo indirizzo nella barra di ricerca e vedrai il tuo indirizzo e lo storico delle transazioni. Ad esempio, questo è come si presenta il nostro [conto donazioni](http://etherscan.io/address/0x7cb57b5a97eabe94205c07890be4c1ad31e486a8) su etherscan.io

---

#### Perché non viene mostrato il saldo quando sblocco il mio portafoglio?

Probabilmente perché sei dietro a un firewall. Le API che utilizziamo per ottenere il saldo e convertirlo sono spesso bloccate dai firewall per qualche ragione. Sarai ancora in grado di inviare transazioni, dovrai solo usare un metodo diverso per vedere il tuo saldo, come etherscan.io

---

#### Dov'è il mio file portafoglio di geth?

*   Mac: `~/Library/Ethereum/keystore`
*   Linux: `~/.ethereum/keystore`
*   Windows: `%APPDATA%/Ethereum/keystore`

---

#### Dov'è il mio file portafoglio di Mist?

I file di Mist si trovano di solito nelle posizioni qui sopra, ma è molto più facile aprire Mist, selezionare "Accounts" nella barra dei menu, selezionare "Backup", e selezionare "Accounts". Si aprirà la cartella in cui sono memorizzati i tuoi file.

---

#### Dov'è il mio file portafoglio della prevendita?

Dove l'hai salvato. ;) Ti è anche stato spedito in mail, quindi controllala. Cerca un file chiamato `"ethereum_wallet_backup.json"` e selezionalo. Questo portafoglio sarà crittografato con la password che hai creato durante l'acquisto della prevendita.

---

#### Non basta inserire chiavi private casuali, cercare un saldo, e poi inviarselo al proprio indirizzo?

Versione corta: sì, ma trovare un conto con un saldo richiederebbe più tempo dell'età dell'universo... quindi no.

Versione lunga in termini semplici: Ethereum si basa sulla [Crittografia a chiave pubblica](https://it.wikipedia.org/wiki/Crittografia_a_chiave_pubblica), nello specifico [Crittografia a curva ellittica](https://eprint.iacr.org/2013/734.pdf) (ECC) che è ampiamente utilizzata, non solo in Ethereum. La maggior parte dei server sono protetti tramite ECC. Anche Bitcoin la usa, oltre a SSH e TLS e a un sacco di altra roba. Le chiavi di Ethereum nello specifico sono di 256 bit, che sono più robuste di 128 bit e 192 bit, che sono anch'esse ampiamente utilizzate e sono tuttora considerate sicure dagli esperti.

In tutto ciò tu hai una chiave privata e una chiave pubblica. Dalla chiave privata si può derivare la chiave pubblica, ma dalla chiave pubblica non si può risalire alla chiave privata. Il fatto che Internet e i segreti del mondo usino questa crittografia significa che se ci fosse un modo per ottenere una chiave privata da una chiave pubblica, i tuoi ether persi sarebbero l'ultimo dei problemi.

Ora, detto ciò, SÌ se qualcun altro ha la tua chiave privata allora può effettivamente inviare ether dal tuo conto. Proprio come se qualcuno ha la password della tua mail può leggere e spedire la tua mail, o se ha la password del tuo conto bancario potrebbe fare dei trasferimenti. Potresti scaricare la versione Keystore della tua chiave privata che è la chiave privata crittografata con una password. È come avere una password che è a sua volta protetta da un'altra password.

E SÌ, in teoria potresti semplicemente digitare stringhe di 64 caratteri esadecimali fino a trovarne una che corrisponda. Infatti, persone intelligenti potrebbero scrivere un programma per controllare molto rapidamente chiavi private casuali. Questo procedimento è conosciuto come _"attacco a forza bruta"_ o _"mining"_ delle chiavi private. Ci hanno pensato molto e a lungo. Con qualche server di altissimo livello potrebbero essere in grado di controllare più di 1 milione di chiavi al secondo. Però nemmeno controllarne così tante al secondo porterebbe all'accesso in una maniera tale da rendere il costo dell'utilizzo di quei server vagamente vicino all'essere proficuo - è più probabile che tu, e i tuoi pronipoti, moriate prima di trovare una corrispondenza.

Se sai qualcosa di Bitcoin, [questo ti darà un'idea:](http://bitcoin.stackexchange.com/questions/32331/two-people-with-same-public-address-how-will-people-network-know-how-to-deliver) _"Per illustrare quanto ciò sia improbabile: supponi che ogni satoshi di ogni bitcoin che sarà mai generato sia inviato a una sua chiave privata unica. La probabilità che fra queste chiavi ce ne possano essere due che corrispondano allo stesso indirizzo è circa di uno in 100 trilioni"_.

[Se preferisci qualcosa di un po' più tecnico:](http://security.stackexchange.com/questions/25375/why-not-use-larger-cipher-keys/25392#25392) _"Questi numeri non hanno niente a che fare con la tecnologia dei dispositivi; sono i massimi che la termodinamica consente. E implicano fortemente che gli attacchi a forza bruta contro le chiavi a 256 bit saranno impraticabili almeno fino a quando i computer non saranno costruiti con qualcosa di diverso dalla materia e non occuperanno qualcosa di diverso dallo spazio."_

Certo, tutto ciò assume che le chiavi siano generate in una maniera veramente casuale e con sufficiente entropia. Le chiavi generate qui soddisfano questi criteri, come anche Jaxx e Mist/geth. I portafogli Ethereum sono tutti piuttosto buoni. Le chiavi generate dai _brainwallet_ non lo sono, dal momento che il cervello di una persona non è capace di creare un seme veramente casuale. Ci sono stati un numero di altri problemi relativi alla mancanza di entropia o a semi non generati in maniera veramente casuale nel mondo di Bitcoin, ma quella è un'altra questione di cui non parleremo oggi.

---

#### Sicurezza

Se una delle prime domande che ti poni è "Perché dovrei fidarmi di questa gente?", è una cosa buona. Quanto segue dovrebbe aiutarti a calmare i tuoi timori.

*   Siamo attivi da agosto 2015\. Se cerchi ["myetherwallet" su reddit](https://www.reddit.com/search?q=myetherwallet), puoi vedere che molte persone ci utilizzano con grande successo.
*   Non prenderemo i tuoi soldi né ruberemo le tue chiavi private. Non c'è codice malevolo su questo sito. Infatti le pagine "Genera portafoglio" sono completamente lato client. Ciò significa che tutto il codice è eseguito sul **tuo computer** e non viene mai salvato e trasmesso da nessuna parte.
*   Controlla l'URL -- Questo sito viene servito attraverso GitHub e puoi vederne il codice sorgente qui: [https://github.com/kvhnuke/etherwallet/tree/gh-pages](https://github.com/kvhnuke/etherwallet/tree/gh-pages) su [https://www.myetherwallet.com](https://www.myetherwallet.com).
*   Per la generazione dei portafogli, puoi scaricare il [codice sorgente](https://github.com/kvhnuke/etherwallet/releases/latest) ed eseguirlo in locale. Vedi la domanda 5 qui sopra.
*   Genera un portafoglio di prova e controlla che attività di rete sono in corso. Il modo più facile e fare clic destro sulla pagina e scegliere "Analizza elemento". Vai sulla scheda "Rete". Genera un portafoglio di prova. Vedrai che non c'è attività di rete. Potresti vedere accadere qualcosa che assomiglia a data:image/gif e data:image/png. Sono i QR code che vengono generati...sul tuo computer...dal tuo computer. Non sono stati trasferiti byte.
*   Se non ti senti a tuo agio a usare questo strumento, allora certo, non usarlo. Abbiamo creato questo strumento per aiutare la gente a generare portafogli ed eseguire transazioni senza bisogno di usare la riga di comando o far girare un nodo completo. Di nuovo, sentiti libero di contattarci se hai dubbi e ti risponderemo appena possibile. Grazie!
