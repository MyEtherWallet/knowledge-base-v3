/*
Title: Norsk Bokmål
Sort: 2
*/

#### Noen påminnelser

*   **Ethereum, MyEtherWallet.com & MyEtherWallet CX, og noen av de underliggende Javascript-bibliotekene vi benytter er under aktiv utvikling.** Selv om vi har testet grundig, og titusenvis av lommebøker har blitt opprettet uten feil av folk over hele kloden, så er det alltid en liten mulighet for at noe uventet kan skje som kan medføre at dine ETH kan tapes. Vennligst ikke invester mer enn du er villig til å tape, and vær så snill å være forsiktig. Hvis noe skulle skje, er vi lei oss for det, men **vi er ikke ansvarlige for eventuelt tapte etere**.
*   MyEtherWallet.com & MyEtherWallet CX er ikke "web wallets" (internettlommebøker). Du oppretter ikke en konto eller gir oss dine ethere for oppbevaring hos oss. Alle data forblir på din PC / i din nettleser. Vi gjør det enkelt for deg å opprette, lagre og få tilgang til din informasjon og samhogle med blokkjeden.
*   Hvis du ikke lagrer din private nøkkel & passord, finnes det ingen måte å gjenopprette din lommebok på, eller midlene den inneholder. Sikkerhetskopier dem på flere fysiske lokasjoner – ikke bare på datamaskinen din!

---

#### Jeg er nybegynner. Hva skal jeg gjøre?

MyEtherWallet gir deg muligheten til å opprette nye lommebøker slik at du kan lagre etherne dine selv, i stedet for på en børs (hvor du kan kjøpe ether). Denne prosessen skjer helt og holdent på din datamaskin, ikke på våre servere. Derfor, når du oppretter en ny lommebok, **er du ansvarlig for å sikkerhetskopiere den på en forsvarlig måte**.

1.  Opprett en ny lommebok.
2.  Sikkerhetskopier lommebok.
3.  Verifiser at du har tilgang til denne nye lommeboken (f.eks. ved å overføre et ørlite beløp til og fra den nye lommeboken), og at all nødvendig informasjon er lagret og korrekt.
4.  Overfør ether til den nye lommeboken.

---

#### Hvordan oppretter jeg en ny lommebok?

1.  Gå til "Send Ether & Tokens"-siden.
2.  Oppgi et sterkt passord. Hvis du ikke tror du klarer å huske det, skriv det opp på et sikkert sted. Du kommer til å trenge dette passordet for å sende transaksjoner.
3.  Klikk "OPPRETT".
4.  Din lommebok har nå blitt opprettet.

---

#### Hvordan lagrer/sikkerhetskopierer jeg lommeboken min?

Du bør alltid sikkerhetskopiere lommeboken din eksternt og på flere fysiske lokasjoner - som f.eks. på en USB-disk og/eller på et papirark.

1.  Lagre adressen. Du kan holde den for deg selv eller dele den med andre. På den måten kan andre overføre ether til deg.
2.  Lagre versjoner av den private nøkkelen. Ikke del den med noen andre. Din private nøkkel er nødvendig hvis du vil ha tilgang til (og sende) etheren din! Det er 3 typer private nøkler:

*   **Keystore-fil (UTC / JSON · Anbefalt · Kryptert)** <span translate="x_KeystoreDesc" class="ng-scope">Denne Keystore-filen samsvarer med formatet som brukes av Mist, så du enkelt kan importere den i fremtiden. Det er den anbefalte filen å laste ned og sikkerhetskopiere.</span>
*   **JSON-fil (ukryptert)** <span translate="x_JsonDesc" class="ng-scope">Dette er det ukrypterte JSON-formatet av din private nøkkel. Dette betyr at du ikke trenger noe passord, men også at den som finner din JSON kan få tilgang til lommeboken din og etherne dine uten passord.</span>
*   **Privat nøkkel (ukryptert)** <span translate="x_PrivKeyDesc" class="ng-scope">Dette er den ukrypterte tekstversjonen av den private nøkkelen din, noe som betyr at det ikke er nødvendig med noe passord. Hvis noen skulle få tak i den ukrypterte private nøkkelen din, ville de få tilgang til lommeboken din uten å bruke passord. Derfor er krypterte nøkler vanligvis å anbefale.</span>

4.  Plasser adressen din, versjoner av den private nøkkelen, og PDF-versjonen av papirlommeboken i en folder. Lagre denne på datamaskinen din og en USB-disk.
5.  Skriv ut lommeboken hvis du har en skriver. Hvis ikke, skriv ned adressen og den private nøkkelen din på et papirark. Lagre dette på et sikkert sted, separat fra datamaskinen og USB-disken.
6.  Husk at du må unngå tap av nøklene og passordet pga. tap av, eller feil på, harddisk, USB-disk eller paperlommebok. Du må også ta i betraktning at det kan oppstå fysisk tap/skade på et helt område (tenk på brann eller flom).

---

#### Hvordan kan jeg lagre ether sikkert / offline / "kaldt" med MyEtherWallet?

1.  Gå til vår github: [https://github.com/kvhnuke/etherwallet/releases/latest](https://github.com/kvhnuke/etherwallet/releases/latest).
2.  Klikk `dist-vX.X.X.X.zip`.
3.  Flytt zip-fila til en frakoblet datamaskin.
4.  Pakk ut zip-fila (unzip) og dobbeltklikk `index.html`.
5.  Opprett en lommebok med et sterkt passord.
6.  Lagre adressen. Lagre versjoner av den private nøkkelen. Lagre passordet hvis du ikke tror du klarer å huske det for alltid.
7.  Lagre disse papirene / USB-ene på flere fysisk separate steder.
8.  Gå til "Vis lommebok-info"-siden og oppgi (lim inn) din private nøkkel / passord for å sikre at de er korrekte og gir deg tilgang til lommeboken din. Sjekk at adressen du skrev ned er den samme.

Husk at du må unngå tap av nøklene og passordet pga. tap av, eller feil på, harddisk, USB-disk eller paperlommebok. Du må også ta i betraktning at det kan oppstå fysisk tap/skade på et helt område (tenk på brann eller flom).

---

#### Hvordan verifiserer jeg at jeg har tilgang til den nye lommeboken min?

**Før du sender ether til din nye lommebok**, bør du forsikre deg om at du har tilgang til den.

1.  Naviger til "Vis lommebok-info"-siden.
2.  Velg lommebok-filen din, eller din private nøkkel, og lås opp lommeboken din.
3.  Hvis lommeboken er kryptert, vil det automatisk dukke opp en tekstboks. Oppgi passordet.
4.  Klikk "Lås opp lommebok"-knappen.
5.  Informasjon om lommeboken din skal nå dukke opp. Finn konto-adressen din ved siden av et fargerikt, sirkulært ikon. Dette ikonet er en unik, visuell representasjon av din adresse. Vær sikker på at adressen er den samme adressen som du har lagret i tekstdokumentet og papirlommeboken.
6.  Hvis du planlegger å lagre et stort ether-beløp, anbefaler vi at du sender et lite beløp til- og fra den nye lommeboken før du deponerer et stort beløp. Send 0,001 ether til din nye lommebok, åpne lommeboken, send de 0,001 eterne (-minus gas-kostnad) til en annen adresse, og forikre deg om at alt fungerer som det skal.

---

#### Hvordan sender jeg ether fra en lommebok til en annen?

Hvis du planlegger å flytte et stort ether-beløp, bør du testsende et lite beløp først for å forsikre deg om at alt går som planlagt.

1.  Naviger til "Send Ether & Tokens"-siden.
2.  Velg lommebok-filen din, eller din private nøkkel, og lås opp lommeboken din.
3.  Hvis lommeboken er kryptert, vil det automatisk dukke opp en tekstboks hvor du må oppgi passordet ditt.
4.  Klikk på "Lås opp lommebok"-knappen.
5.  Oppgi adressen som du ønsker å sende til i "Til adresse:"-feltet.
6.  Oppgi beløpet som du ønsker å sende. Du kan også klikke på "Send hele saldoen"-lenken hvis du ønsker å overføre hele saldoen.
7.  Klikk "Generer transaksjon".
8.  En del felter vil dukke opp. Dette er nettleseren din som genererer transaksjonen.
9.  Klikk den blå "Send transaksjon"-knappen nedenfor dette.
10.  En pop-up vil dukke opp. Verifiser at beløp og adresse du sender til er korrekt. Klikk så "Ja, jeg er sikker! Gjennomfør transaksjonen."-knappen.
11.  Transaksjonen vil bli sendt inn. Transaksjons-ID-en (TX-ID) vil vises. Du kan klikke på TX Hash for å se den på blokkjeden.

---

#### Hvordan kan jeg bruke MyEtherWallet.com offline/lokalt?

Du kan bruke MyEtherWallet.com på datamaskinen din i stedet for fra GitHub-serverne. Du kan opprette en lommebok fullstendig frakoblet fra internett, og sende transaksjoner fra "Send offline"-siden.

1.  Gå til vår github: [https://github.com/kvhnuke/etherwallet/releases/latest](https://github.com/kvhnuke/etherwallet/releases/latest).
2.  Klikk `dist-vX.X.X.X.zip`.
3.  Flytt zip-fila til en frakoblet datamaskin.
4.  Pakk ut zip-fila (unzip) og dobbeltklikk `index.html`.
5.  MyEtherWallet.com kjører nå utelukkende på din datamaskin.

I tilfelle du ikke er så vant med dette: du må beholde hele mappen for å kunne kjøre nettsiden, ikke bare `index.html`. Ikke rør eller flytt rundt på noe i mappen. Hvis du lagrer en backup av MyEtherWallet-repoet for framtiden, anbefaler vi å kun lagre zip-fila så du kan være sikker på at innholdet i mappen forblir intakt.

Siden vi oppdaterer MyEtherWallet.com hele tiden, anbefaler vi at du oppdaterer din lagrede versjon av repoet jevnlig.

---

### I cannot connect to my custom node. What do I do?

*   Verify the URL you entered is correct.
*   Verify the port you entered is correct.
*   Verify that if you are connecting to an http:// node you are running MyEtherWallet locally (NOT over https://).
*   Verify geth is running with `geth --rpc --rpccorsdomain "null" --keystore "dont_put_secret_files_here_ever"` or parity is running with `parity --rpccorsdomain "*" --keys-path "dont_put_secret_files_here_ever"`
*   Verify your node is actually up and running.
*   Try removing the node and adding it again.

---

#### Hvordan sender jeg token & legger til flere typer token?

[Ethplorer.io](https://ethplorer.io/) er en flott måte å utforske token på, og for å finne informasjon om antall desimaler for en token.

1.  Naviger til "Send Ether & Tokens"-siden.
2.  Lås opp lommeboken din.
3.  Oppgi adressen som du vil sende til i "Til adresse:"-feltet.
4.  Oppgi beløpet som du vil sende.
5.  Velg hvilken type token du vil sende .
6.  Hvis du ikke ser token-typen på listen:

1.  Klikk "Tilpasning".
2.  Oppgi adressen, navnet, og antall desimaler for token-et. Disse er oppgitt fra utviklerne av token-et og er også nødvendige når du skal "Add a Watch Token" i Mist.
3.  Klikk "Lagre".
4.  Du kan nå sende denne typen token, samt se saldoen for aktuell token i sidefeltet.

8.  Klikk "Generer transaksjon".
9.  Noen flere felter vil dukke opp. Dette er nettleseren din som genererer transaksjonen.
10.  Klikk den blå "Send transaksjon"-knappen nedenfor dette.
11.  En pop-up vil dukke opp. Verifiser at beløp og adresse du sender til er korrekt. Klikk så "Ja, jeg er sikker! Gjennomfør transaksjonen."-knappen.
12.  Transaksjonen vil bli sendt inn. Transaksjons-ID-en (TX-ID) vil vises. Du kan klikke på TX Hash for å se den på blokkjeden.

---

#### Hva skjer hvis nettsiden går ned?

MyEtherWallet er ikke en nett-lommebok (web wallet). Du har ingen innlogging og ingenting blir noensinne lagret på våre servere. Det er ganske enkelt et grensesnitt som tillater deg å samhandle med blokkjeden.

Hvis MyEtherWallet.com går ned, må du finne en annen måte (som f.eks. geth eller Ethereum Wallet / Mist) å gjøre det på. Men du vil ikke trenge å "hente" eteren din ut av MyEtherWallet, fordi den ikke befinner seg i MyEtherWallet. Den befinner seg i den lommeboka/kontoen som du opprettet ved hjelp av nettsiden vår.

Du kan nå svært enkelt importere din ukrypterte private nøkkel og dine Geth/Mist-format (krypterte) filer direkte inn i geth / Ethereum Wallet / Mist. Se spørsmål #12 nedenfor.

I tillegg er sannsynligheten for at vi tar ned MyEtherWallet svært liten. Det koster oss nesten ingenting å opprettholde den siden vi ikke lagrer noen informasjon. Hvis vi tar ned domenet, er det fortsatt, og vil alltid være, offentlig tilgjengelig på [https://github.com/kvhnuke/etherwallet](https://github.com/kvhnuke/etherwallet/tree/gh-pages). Du kan laste ned zip-fila der og kjøre den lokalt.

---

#### Er "Send Ether & Tokens"-siden offline?

Nei. Den trenger internett for å kunne skaffe den aktuelle gas-prisen, "nonce" for kontoen din, og for å kunne kringkaste transaksjonen (aka "send"). Imidlertid sender den kun den signerte transaksjonen. Din private nøkkel forblir i sikkerhet hos deg. Vi tilbyr nå også en "Offline transaction"-side slik at du kan forsikre deg om at dine private nøkler til enhver tid kun befinner seg på en offline/frakoblet datamaskin.

---

#### Hvordan lager jeg en frakoblet/offline transaksjon?

1.  Naviger til "Send Offline"-siden via din internettilknyttede datamaskin.
2.  Oppgi "Fra-adressen". Vennligst merk at dette er adressen du sender FRA, ikke TIL. Dette genererer "nonce" og "gas-pris".
3.  Gå til den internettfrakoblede datamaskinen. Oppgi "TIL-ADRESSEN" og "BELØPET" du vil sende.
4.  Oppgi "GAS-PRISEN" slik den ble vist deg på den tilkoblede datamaskinen i steg #1.
5.  Oppgi "NONCE" slik den ble vist deg på den tilkoblede datamaskinen i steg #1.
6.  "GAS-GRENSE" har en standardverdi på 21000\. Dette vil dekke en standardtransaksjon. Hvis du sender til en kontrakt eller inkluderer ekstra data i transaksjonen din, må du øke gas-grensen. Eventuelt overskytende gas blir returnert til deg (fra-kontoen).
7.  Oppgi noe data hvis du vil. Hvis du oppgir data, må du inkludere mer enn det som er standard gas-grense (21000). Alle data er i HEX-format.
8.  Velg lommebokfilen din, eller din private nøkkel, og lås opp lommeboken din.
9.  Trykk på "GENERER SIGNERT TRANSAKSJON"-knappen.
10.  Datafeltet under denne knappen vil fylles med din signerte transaksjon. Kopier denne og flytt den tilbake til din tilkoblede datamaskin.
11.  Lim inn den signerte transaksjonen i tekstfeltet i steg #3 på den tilkoblede maskinen og klikk "Send Ether & Tokens". Dette vil kringkaste transaksjonen din.

---

#### Hvordan kan jeg importere en lommebok opprettet med MyEtherWallet til geth / Ethereum Wallet / Mist?

Ved å bruke en Geth/Mist JSON-fil fra MyEtherWallet v2+....

1.  Gå til "Vis lommebok-info"-siden.
2.  Lås opp lommeboken din ved hjelp av din **krypterte** private nøkkel eller JSON-fil.
3.  Finn "Last ned JSON-fil - Geth/Mist-format (kryptert)"-seksjonen. Trykk "Last ned"-knappen nedenfor. Du har nå fått keystore-filen til lommeboken din.
4.  Åpne "Ethereum Wallet"-programmet.
5.  I menyfeltet, gå til "Accounts" -> "Backup" -> "Accounts"
6.  Dette vil åpne keystore-mappen på harddisken din. Kopier filen du nettopp lastet ned (`UTC--2016-04-14......../`) inn i denne keystore-mappen.
7.  Kontoen din skal nå umiddelbart dukke opp under "Accounts."

Ved å bruke din ukrypterte private nøkkel...

1.  Hvis du ikke allerede har den ukrypterte private nøkkelen din, naviger til "Vis lommebok-info"-siden.
2.  Velg lommebok-filen din, eller oppgi/lim inn din private nøkkel, for å låse opp lommeboken.
3.  Kopier den (ukrypterte) private nøkkelen.
4.  Hvis du er på en Mac:

*   Åpne Text Edit og lim inn denne private nøkkelen.
*   Gå til menylinjen og klikk "Format" -> "Make Plain Text".
*   Lagre denne fila på skrivebordet ditt som `ikke_noe_spesielt_slett_meg.txt`. Pass på at det står "UTF-8" og "If no extension is provided use .txt" i lagringsdialogen.
*   Åpne terminalen og kjør følgende kommando: `geth account import ~/Desktop/nothing_special_delete_me.txt`
*   Du vil bli bedt om å lage et nytt passord. Dette er passordet du vil bruke i geth / Ethereum Wallet / Mist hver gang du skal sende en transaksjon, så ikke glem det.
*   Etter at du har lykkes med å importere kontoen, slett `ikke_noe_spesielt_slett_meg.txt`
*   Neste gangen du åpner "Ethereum Wallet"-programmet, vil kontoen din være listet under "Accounts".

6.  Hvis du er på en PC:

*   Åpne Notisblokk/Notepad & lim inn den private nøkkelen
*   Lagre fila som `ikke_noe_spesielt_slett_meg.txt` på `C:`
*   Kjør ledetekst (Windowstast + "cmd")-kommandoen, `geth account import C:\ikke_noe_spesielt_slett_meg.txt`
*   Du vil bli bedt om å lage et nytt passord. Dette er passordet du vil bruke i geth / Ethereum Wallet / Mist hver gang du skal sende en transaksjon, så ikke glem det.
*   Etter at du har lykkes med å importere kontoen, slett `ikke_noe_spesielt_slett_meg.txt`
*   Neste gangen du åpner "Ethereum Wallet"-programmet, vil kontoen din være listet under "Accounts".

---

#### Hva betyr "Utilstrekkelige midler. Kontoen du prøver å sende transaksjon fra har ikke nok midler. Påkrevd XXXXXXXXXXXXXXXXXXX og fått: XXXXXXXXXXXXXXXX." ?

Dette betyr at du ikke har nok Ether på kontoen din til å dekke gas-kostnaden. Hver transaksjon (inkludert token- og kontrakt-transaksjoner) krever gas, og gas betales med Ether. Tallet som vises er beløpet som kreves for å dekke transaksjonskostnaden i Wei (1 ETH = 10^18 Wei). Ta dette tallet, del det på `1000000000000000000`, og trekk fra Ether-beløpet som du prøvde å sende (hvis du prøvde å sende Ether). Dette vil gi deg Ether-beløpet som du mangler på (trenger å sende til) denne kontoen for å gjennomføre transaksjonen.

---

#### Noen nettsider randomiserer genereringen av den private nøkkelen via musebevegelser. MyEtherWallet.com gjør ikke dette. Er metoden som MyEtherWallet bruker til å generere tilfeldige tall sikker?

Selv om musebevegelses-metoden er smart og vi skjønner hvorfor folk liker den, så er realiteten at window.crypto sikrer mer entropi (tilfeldighet) enn musebevegelser. Musebevegelses-metoden er ikke usikker, men det er bare det at vi (og mange andre kryptoeksperter) har tro på window.crypto. I tillegg kan MyEtherWallet.com også benyttes på fingerstyrte enheter. Her er en [konversasjon mellom en sint redditor og Vitalik Buterin angående musebevegelser versus window.crypto](https://www.reddit.com/r/ethereum/comments/2bilqg/note_there_is_a_paranoid_highsecurity_way_to/cj5sgrm) og her er [window.crypto w3 spesifikasjonen](https://dvcs.w3.org/hg/webcrypto-api/raw-file/tip/spec/Overview.html#dfn-GlobalCrypto).

---

#### Hvorfor har ikke kontoen jeg nettopp opprettet dukket opp i blokkjede-utforskeren? (ie: etherchain, etherscan)

Kontoer vil kun dukke opp i en blokkjede-utforsker når kontoen har hatt aktivitet—for eksempel, når du har overført Ether til den.

---

#### Hvordan kan jeg sjekke saldoen på kontoen min?

Du kan bruke en blokkjede-utforsker som [etherscan.io](http://etherscan.io/). Lim inn adressen i søkefeltet og den vil finne fram adressen og transaksjonshistorikken. For eksempel, her ser du hvordan vår [donasjonskonto](http://etherscan.io/address/0x7cb57b5a97eabe94205c07890be4c1ad31e486a8) ser ut på etherscan.io

---

#### Hvorfor vises ikke saldoen min når jeg låser opp lommeboken min?

Dette er mest sannsynlig fordi du er bak en brannmur. API-en vi bruker for å innhente saldoen blokkeres ofte av brannmurer av ymse årsaker. Du vil fortsatt være i stand til å sende transaksjoner, du må bare bruke en annen metode for å se nevnte saldo, som etherscan.io

---

#### Hvor er min geth lommebok-fil

*   Mac: `~/Library/Ethereum/keystore`
*   Linux: `~/.ethereum/keystore`
*   Windows: `%APPDATA%/Ethereum/keystore`

---

#### Hvor er min Mist lommebok-fil?

Mist-filer lagres typisk i lokasjonene ovenfor, men det er mye enklere å åpne Mist, velge "Accounts" i topp-menylinjen, velge "Backup", og velge "Accounts". Dette vil åpne mappen hvor filene dine er lagret.

---

#### Hvor er pre-sale lommebok-filen?

Der du lagret den. ;) Den ble også sendt deg på e-post, så sjekk der. Se etter fila som heter `"ethereum_wallet_backup.json"` og velg den fila. Denne fila vil være kryptert med et passord som du opprettet under "pre-sale"-kjøpet.

---

#### Kan ikke hvem som helst legge inn tilfeldige private nøkler, sjekke saldoen, og sende Ether til sin egen adresse?

Kortversjonen: ja, men å finne en konto som inneholder Ether ville tatt lengre tid enn universets levealder...så...nei.

Lang ELI5-versjon: Ethereum er basert på [Offentlig nøkkel-kryptografi](https://en.wikipedia.org/wiki/Public-key_cryptography), og mer spesifikt [Elliptic curve cryptography](https://eprint.iacr.org/2013/734.pdf), som er svært utbredt, ikke bare i Ethereum. De fleste servere er beskyttet via ECC. Bitcoin bruker den samme, likeså SSH og TLS og mange flere. Ethereum-nøklene er 256-bit nøkler, som er sterkere enn 128-bit og 192-bit, som også er mye brukt og fortsatt betraktes som sikre av ekspertene.

I denne har du en privat nøkkel og en offentlig nøkkel. Den private nøkkelen kan utlede den offentlige nøkkelen, men den offentlige nøkkelen kan ikke brukes for å finne den private nøkkelen. Det faktum at internett og verdens hemmeligheter bruker denne kryptografien betyr at hvis det blir funnet en måte å gå fra offentlige til private nøkler på, så vil dine tapte Ether være det minste av alles problemer.

Når det er sagt, JA, hvis noen andre har din private nøkkel, så kan de såvisst sende ether fra din konto. Akkurat som hvis noen har passordet til e-posten din, så kan de lese og sende din e-post, eller passordet til bankkontoen din, så kan de overføre penger. Du kunne laste ned keystore-versjonen av den private nøkkelen din, som er den private nøkkelen som er kryptert med et passord. Dette blir som å ha et passord som er beskyttet av et annet passord.

og JA, i teorien kunne du bare taste inn en streng med 64 hexadesimaltegn helt dil du fant en som passet. Faktisk kunne smarte folk skrive et program som svært hurtig kunne sjekke tilfeldige private nøkler. Dette kalles "brute-forcing" eller "mining" private nøkler. Folk har tenkt lenge og hardt på dette. Med noen få svært gode servere, kunne de kanskje klare å sjekke >1M nøkler/sekund. Likevel, selv når så mange sjekkes per sekund, ville det ikke gi tilgang midler som ville gjøre det i nærheten av å være lønnsomt å kjøre disse serverne. - Det er mer sannsynlig at du, eller dine oldebarn, vil dø før du får en match.

Hvis du vet noe om Bitcoin, [dette vil sette det i perspektiv:](http://bitcoin.stackexchange.com/questions/32331/two-people-with-same-public-address-how-will-people-network-know-how-to-deliver) *For å illustrere hvor usannsynlig det er: anta at alle satoshi av alle bitcoin som noensinne blir generert ble sendt til hver sin egen unike private nøkkel. Sannsynligheten for at det blant disse nøklene kunne være to som ville korrespondere med samme adresse er ca 1 til 10^20.

[Hvis du ønsker en mer teknisk forklaring:](http://security.stackexchange.com/questions/25375/why-not-use-larger-cipher-keys/25392#25392) *Disse tallene har ikke noe å gjøre med teknologien til enhetene; de er det maksimale som termodynamikken vil tillate. Og de impliserer sterkt at "brute-force"-angrep mot 256-bit nøkler vil være uoppnåelig fram til datamaskiner lages av noe annet enn materie og befinner seg i noe annet enn rom.

Selvsagt betinger alt dette at nøkler blir generert på en virkelig tilfeldig måte & med tilstrekkelig entropi. Nøklene som genereres her tilfredsstiller dette kriteriet, det samme gjør Jaxx og Mist/geth. Alle Ethereum-lommebøker er OK. Nøkler som genereres av "brainwallets" er ikke like gode, siden en persons hjerne ikke er i stand til å lage en virkelig tilfeldig "seed". Det har vært noen andre tilfeller av manglende entropi eller "seeds" som ikke er generert på en virkelig tilfeldig måte i Bitcoin-land, men det er en historie som kan vente til en annen dag.

---

#### Datasikkerhet

Hvis en av dine første spørsmål er "Hvorfor skulle jeg stole på disse folkene?", så er det en god ting. Forhåpentligvis vil følgende bidra til å lette på frykten din.

*   Vi har vært oppe-og-gå siden august 2015\. Hvis du søker etter ["myetherwallet" på reddit](https://www.reddit.com/search?q=myetherwallet), så kan du se mange folk som bruker oss med stor suksess.
*   Vi kommer ikke til å ta pengene dine eller stjele dine private nøkler. Det er ingen ondsinnet kode på denne siden. Faktisk er "Send Ether & Tokens"-siden fullstendig klient-drevet. Det betyr at all koden blir kjørt på **din datamaskin** og det blir aldri lagret eller overført noe sted.
*   Sjekk nettsideadressen (URL) -- Denne siden blir drevet gjennom GitHub og du kan se kildekoden her: [https://github.com/kvhnuke/etherwallet/tree/gh-pages](https://github.com/kvhnuke/etherwallet/tree/gh-pages) til domenet: [https://www.myetherwallet.com](https://www.myetherwallet.com).
*   For å generere lommebøker, kan du laste ned [kildekoden](https://github.com/kvhnuke/etherwallet/releases/latest). Se #5 ovenfor.
*   Kjør en test og sjekk hvilken nettverksaktivitet som skjer. Den enkleste måten som du kan gjøre dette på er å høyreklikke på siden og klikke "inspiser element". Gå til "Nettverk"-flippen. Generer en test-lommebok. Du vil se at det ikke er noen nettverksaktivitet. Du vil se at noe som ser ut som data:image/gif og data:image/png skjer. Disse er QR-kodene som blir generert...på din datamaskin...av din datamaskin. Ingen bytes ble overført.
*   Hvis du ikke er komfortabel med å bruke dette verktøyet, så for all del, ikke bruk det. Vi laget dette verktøyet som et hjelpemiddel for folk som vil opprette lommebøker og utføre transaksjoner uten å måtte dykke ned i kommandolinjeoperasjoner eller kjøre en full node. Igjen, ta gjerne kontakt hvis du har bekymringer og vi vil gi tilbakemelding så snart som mulig. Takk!
