/*
Title: Magyar
Sort: 2
*/

### Néhány emlékeztető

*   Az **Ethereum, MyEtherWallet.com és MyEtherWallet CX, továbbá néhány, az oldal által használt JavaScript könyvtár aktív fejlesztés alatt állnak.** Az alapos tesztelés és a világszerte több tízezer sikeresen létrehozott tárca ellenére mindig fennáll az apró lehetőség arra, hogy valami váratlan esemény miatt elveszted az ETH-id. Ne fektess be annál többet, mint amit hajlandó lennél elveszítnei. Ha esetleg bármi ilyen történne, nagyon sajnáljuk, de **nem vagyunk a felősek az elvesztett Etherekért**.
*   A MyEtherWallet.com és a MyEtherWallet CX nem "web tárcák". Nem kell nálunk regisztrálnod, vagy ránk bízni az Ethereid megőrzésre. Semmilyen adat nem hagyja el a gépedet/böngésződet. Abban segítünk, hogy egyszerűen tudd az tárcáid látrehozni, lementeni és hozzájuk férni, és egyéb módon használni a blokkláncot.
*   Ha nem mented le a privát kulcsodat és a jelszót, akkor nincs lehetőség visszaszerezni a tárcádhoz a hozzáférést, sem a rajta levő összeget. Készíts róluk több példányban is biztonsági másolatot, és ne csak a gépeden legyenek!

---

### Új vagyok. Mire tudom használni ezt az oldalt?

A MyEtherWallet-tel új tárcákat lehet létrehozni, hogy saját magadnál tudd tárolni az Ethert, és nem egy exchange-nél. Ez a folyamat teljesen a te gépeden történik, nem a mi szerverünkön, így amikor létrehozol egy új tárcát **a te felelősséged biztonságosan tárolni azt**.

1.  Hozz létre egy új tárcát.
2.  Készíts róla biztonsági mentést.
3.  Ellnőrizd, hogy van hozzáférésed az új tárcához, és helyesen mentettél le minden szükséges információt.
4.  Küldj Ethert az új címedre.

---

###Hogyan tudok új tárcát készíteni?

1.  Menj a "Tárca Generálása" oldalra.
2.  Írj be egy erős jelszót. Ha úgy gondolod, esetleg elfelejtheted, akkor ments le / írd le egy biztonságos helyre, mert szükséged lesz rá később, hogy tranzakciókat küldhess.
3.  Kattints a "Tárca generálása" gombra.
4.  Az új tárcád ezzel kész van.

---

### Hogyan tudom lementeni/biztonsági másolatot készíteni a tárcáról?

A tárcádról ajánlott mindig külső biztonsági mentést tartani, több, fizikailag különböző helyen - például egy pendrive-on és/vagy papíron.

1.  Mentsd le a címet. Megtarthatod magadnak, vagy megoszthatod másokkal is, így ők is tudnak neked Ethert küldeni.
2.  Mentsd el több példányban a privát kulcsot, és ne oszd meg senkivel. Erre van ugyanis szükség, ha hozzá szeretnél férni az Etheredhez, és el szeretnéd küldeni. Három fajta privát kulcs van:

*   **Keystore Fájl (UTC / JSON · Ajánlott · Titkosított)** <span translate="x_KeystoreDesc" class="ng-scope">Ez a Keystore fájl ugyanolyan formátumú, amit a Mist használ, tehát könnyedén importálhatod a későbbiekben. Leginkább ezt a fájlt ajánlott letölteni és elmenteni.</span>
*   **JSON Fájl (titkosítatlan)** <span translate="x_JsonDesc" class="ng-scope">Ez a titkosítotatlan, JSON formátumú változata a privát kulcsodnak. Ez azt jelenti, hogy nincs szükség jelszóra az eléréséhez, viszont ha bárki megtalálja a JSON fájlt, akkor hozzáférhet a tárcádhoz és az Etheredhez a jelszó ismerete nélkül.</span>
*   **Privát Kulcs (titkosítatlan)** <span translate="x_PrivKeyDesc" class="ng-scope">Ez a titkosítatlan szöveges változata a privát kulcsodnak, ami azt jelenti, hogy az eléréséhez nem szükséges jelszó. Ha valaki megtalálta a titkosítatlan privát kulcsodat jelszó nélkül is hozzáférhet a tárcádhoz. Ezért a titkosított változat ajánlott.</span>

4.  Tedd a címed, a privát kulcsod egy változatát és a papírtárca PDF-et egy mappába. Ments ezt le a számítógépedre és egy USB pendrive-ra.
5.  Ha van nyomtatód, nyomtasd ki a papírtárcát. Ennek hiányában írd le a privát kulcsot és a címed egy darab papírra. Ezt a számítógépedtől és a pendrive-tól elkülönített, biztonságos helyen tárold.
6.  Figyel arra is, hogy olyankor is legyen másolatod a privát kulcsról/jelszóról, ha a számítógéped, a pendrive vagy a papír eltűnik, vagy elromlik. Olyan esetekkel is számolj ami akár fizikailag nagyobb területet érinthet, mint például egy tűz, vagy árvíz.


---


### Hogyan tudom biztonságosan/offline/hidegen használni a MyEtherWallet-et?

1.  Menj a github oldalunkra: [https://github.com/kvhnuke/etherwallet/releases/latest](https://github.com/kvhnuke/etherwallet/releases/latest).
2.  Kattints a `dist-vX.X.X.X.zip`.
3.  Másold a letöltött zip fájlt egy airgap-elt számítógépre.
4.  Csomagold ki, és indítsd el az "index.html" fájlt.
5.  Generálj egy tárcát egy erős jelszóval.
6.  Mentsd le a címet, és a privát kulcs különféle verzióit. Mentsd le a jelszót is, ha esetleg nem emlékeznél rá örökre.
7.  Ezeket a paírokat / pendriveoket egymástól fizikailag különböző helyeken tárold.
8.  Menj a "Tárca adatainak megtekintése" oldalra, majd írd be a privát kulcsot/jelszót, hogy le tudd ellenőrizni, hogy minden helyes. Győződj meg róla, hogy a címet is helyesen írtad le.

Figyel arra is, hogy olyankor is legyen másolatod a privát kulcsról/jelszóról, ha a számítógéped, a pendrive vagy a papír eltűnik, vagy elromlik. Olyan esetekkel is számolj ami akár fizikailag nagyobb területet érinthet, mint például egy tűz, vagy árvíz.


---


###Hogyan tudom ellenőrizni, hogy hozzáférek a tárcához?How do I verify I have access to my new wallet?

**Mielőtt bármennyi Ethert küldesz az új tárcádba**, mindenképp ellenőrizd le, hogy később hozzá tudsz majd férni.

1.  Menj a "Tárca adatainak megtekintése" oldalra.
2.  Válaszd ki a tárca fájlt -vagy- a privát kulcsot, és nyisd ki a tárcádat. Select your wallet file -or- your private key and unlock your wallet.
3.  Ha a tárca titkosított, automatikusan megjelenik egy szövegdoboz. Ide írd be a jelszót.
4.  Kattints a "Tárca feloldása" gombra.
5.  Ezután megjelennek a tárcádhoz kapcsolódó információk. A címedet a színes, kör alakú ikon mellett fogod megtalálni. Ez az ikon a címed képi reprezentációja. Bizonyosodj meg róla, hogy ez a cím megegyezik az általad lementett címmel, és azzal ami a papír tárcán is szerepel.
6.  Ha egy nagyobb összeget szeretnél a tárolni, akkor azt javasoljuk, hogy előtte próbálj meg egy kisebb összeget küldeni az új tárcából. Ehhez küldj az új címedre 0.001 Etheret, nyisd ki a tárcát, és küldd tovább ezt a 0.001 Ethert egy másik címre. Így biztos lehetsz benne, hogy minden jól működik.


---


### Hogyan tudok Ethert küldeni az egyik tárcámból egy másikba?

Ha egy nagyobb összeget szeretnél küldeni, előtte mindig próbáld ki a küldést egy kisebb összeggel. Így biztos lehetsz benne, hogy minden jól fog működni.

1.  Menj az "Ether & Tokenek küldése" oldalra.
2.  Válaszd ki a tárca fájlt -vagy- a privát kulcsot, és nyisd ki a tárcádat.
3.  Ha a tárca titkosított, automatikusan megjelenik egy szövegdoboz. Ide írd be a jelszót.
4.  Kattints a "Tárca feloldása" gombra.
5.  Írd be a címet ahova küldeni szeretnél az "Erre a címre" mezőbe.
6.  Írd be az összeget, amennyit küldeni szeretnél. Ha a teljes egyenleget át szeretnéd küldeni, akkor használhatod a "Teljes egyenleg küldése" gombot is.
7.  Kattints a "Tranzakció generálása" gombra.
8.  Meg fog jelenni még néhány mező. Ezeket a böngésződ tölti ki, miközben legenerálja a tranzakciót.
9.  Kattints az ezek alatt levő kék "Tranzakció küldése" gombra.
10.  Felugrik egy pop-up, ahol le tudod ellenőrizni a címet és az összeget. Ha minden jó, kattints az "Igen, biztos vagyok benne! Tranzakció indítása." gombra.
11.  A tranzakció el lesz küldve, és megjelenik egy TX Hash. Erre a TX Hash-re kattintva megnézheted a tranzakciót a blokkláncon.


---


### Hogyan lehet a MyEtherWallet-et offline/lokálisan használni?

Futtahatod a MyEtherWallet.com-ot a saját számítógépeden is, a GitHub szerverei nélkül. Így lehetőséged van teljesen offline generálni tárcákat, vagy Ethert küldeni az "Offline tranzakció" oldalról.

1.  Menj a github oldalunkra: [https://github.com/kvhnuke/etherwallet/releases/latest](https://github.com/kvhnuke/etherwallet/releases/latest).
2.  Kattints a `dist-vX.X.X.X.zip`.
3.  Másold a letöltött zip fájlt egy airgap-elt számítógépre.
4.  Csomagold ki, és indítsd el az "index.html" fájlt.
5.  A MyEtherWallet.com most teljesen a te számítógépedről fut.

Ha esetleg nem csináltál volna még ilyet: a teljes mappára szükséged van az oldal futtatásához, nem elég csak az "index.html" fájl. A mappában ne piszkálj / mozgass el semmit. Ha biztonsági másolatot szeretnél a MyEtherWallet repo-ról későbbre, akkor az eredeti zip fájl tárolását javasoljuk, így biztos lehetsz benne hogy a tartalma érintetlen marad.

Mivel folyamatosan frissítjük a MyEtherWallet.com-ot, ezért javasoljuk, hogy időközönként frissítsd a lementett repo-t is.
