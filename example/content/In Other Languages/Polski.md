/*
Title: Polski
Sort: 2
*/

#### W ramach uściślenia

*   **Ethereum, MyEtherWallet.com i MyEtherWallet CX, jak również niektóre bazowe biblioteki Javascript, których używamy, są wciąż aktywnie rozwijane.** Pomimo tego, że dokładnie testujemy nasze oprogramowanie, pomimo że dziesiątki tysięcy portfeli zostało z powodzeniem wygenerowane przez użytkowników na całym świecie, zawsze istnieje pewne znikome prawdopodobieństwo, że nastąpi coś nieoczekiwanego, co spowoduje utratę Twoich środków. Nie inwestuj więc więcej niż jesteś gotów stracić i bądź ostrożny. Gdyby coś takiego się wydarzyło, będzie nam przykro, ale **nie weźmiemy za to odpowiedzialności**.
*   MyEtherWallet.com i MyEtherWallet CX nie są "portfelami internetowymi". Nie tworzysz kont internetowych i nie przekazujesz nam Twoich środków na przechowanie. W żadnym momencie Twoje klucze prywatne nie opuszczają Twojej przeglądarki/komputera. My jedynie ułatwiamy Ci tworzenie, zapisywanie, dostęp do twoich danych i interakcję z siecią Ethereum.
*   Jeśli utracisz swój klucz prywatny lub zapomnisz hasło, nie będzie możliwości odzyskania dostępu do Twojego portfela oraz środków tam zgromadzonych. Wykonaj kopie bezpieczeństwa i przechowuj je w wielu fizycznie niezależnych miejscach, nie tylko na Twoim komputerze!

---

#### Jestem zielony. Od czego mam zacząć?

MyEtherWallet daje Ci możliwość generowania nowych portfeli abyś mógł przechowywać własne środki samodzielnie, nie na portalu wymiany walut. Ten proces odbywa się w całości na Twoim komputerze, nie na naszych serwerach. Z tego powodu, gdy generujesz nowy portfel, **to Ty jesteś odpowiedzialny za jego bezpieczne przechowywanie**.

1.  Wygeneruj nowy portfel.
2.  Wykonaj kopię bezpieczeństwa.
3.  Zweryfikuj, że masz dostęp do właśnie stworzonego portfela oraz że prawidłowo zachowałeś wszystkie niezbędne informacje.
4.  Prześlij środki do nowo utworzonego portfela.

---

#### Jak mam utworzyć nowy portfel?

1.  Przejdź na zakładkę "Wygeneruj Portfel".
2.  Wpisz silne hasło. Jeśli uważasz, że mógłbyś je zapomnieć, zapisz je w jakimś bezpiecznym miejscu. Będziesz potrzebować tego hasła aby wysyłać transakcje.
3.  Kliknij "GENERUJ".
4.  Twój nowy portfel został właśnie wygenerowany.

---

#### Jak mam zapisać/wykonać kopię mojego portfela?

Zawsze powinieneś wykonać zewnętrzną kopię bezpieczeństwa w wielu fizycznie niezależnych lokalizacjach - na przykład na nośniku USB i/lub kartce papieru.

1.  Zapisz swój adres. Możesz zachować go dla siebie lub udostępnić go innym. Inne osoby znając ten adres mogą Ci na niego wysyłać środki.
2.  Zachowaj klucz prywatny w przynajmniej jednym formacie. Nie udostępniaj go nikomu. Klucz prywatny będzie Ci potrzebny, jeśli będziesz chciał uzyskać dostęp do Twojego portfela i wysyłać z niego środki! Istnieją 3 formaty zapisu kluczy prywatnych:

*   **Plik Keystore (UTC / JSON · Zalecany · Szyfrowany)** <span translate="x_KeystoreDesc" class="ng-scope">Ten plik Keystore odpowiada formatowi stosowanemu przez Mist, więc może być w prosty sposób zaimportowany w przyszłości. Jest to zalecana forma pliku do pobrania i przechowywania jako kopii zapasowej.</span>
*   **Plik JSON (nieszyfrowany)** <span translate="x_JsonDesc" class="ng-scope">Nieszyfrowany klucz prywatny, plik w formacie JSON. Nie wymaga podania hasła, ale każdy kto zdobędzie ten plik uzyska również pełny dostęp do Twojego portfela i zgromadzonych na nim środków.</span>
*   **Klucz Prywatny (nieszyfrowany)** <span translate="x_PrivKeyDesc" class="ng-scope">Nieszyfrowana, tekstowa wersja Twojego klucza prywatnego, nie wymaga hasła. Jeżeli ktoś zdobędzie nieszyfrowany klucz, będzie mógł uzyskać pełen dostęp do Twojego portfela bez podania hasła. Z tego powodu zaleca się używanie jego szyfrowanej wersji.</span>

4.  Umieść adres portfela, klucz prywatny i PDF z papierową wersją portfela w jednym folderze. Zapisz ten folder na komputerze i na nośniku USB.
5.  Wydrukuj portfel jeżeli posiadasz drukarkę. Jeżeli nie, zapisz klucz prywatny i adres na kartce papieru. Umieść go w bezpiecznym miejscu oddzielnie od komputera i nośnika USB.
6.  Pamiętaj, że musisz się zabezpieczyć przed utratą kluczy i hasła z powodu zagubienia, uszkodzenia lub zniszczenia dysku twardego, nośnika USB lub kartki z zapisanymi danymi. Przewiduj również możliwość wystąpienia katastrof obejmujących większe obszary (pożar, powódź).

---

#### Jak mogę utworzyć portfel w 100% odizolowany od sieci globalnej (Cold Wallet) wykorzystując MyEtherWallet?

1.  Wejdź na nasze konto github: [https://github.com/kvhnuke/etherwallet/releases/latest](https://github.com/kvhnuke/etherwallet/releases/latest).
2.  Pobierz `dist-vX.X.X.X.zip`.
3.  Przenieś paczkę zip na odizolowany system.
4.  Rozpakuj paczkę i kliknij 2-krotnie `index.html`.
5.  Wygeneruj portfel przy użyciu silnego hasła.
6.  Zapisz adres. Zapisz klucz prywatny. Zapisz hasło jeżeli nie jesteś w stanie go zapamiętać po wsze czasy.
7.  Zapisz kopie zapasowe w formie papierowej lub na nośniku USB w wielu fizycznie odseparowanych lokalizacjach.
8.  Przejdź na zakładkę "Wyświetl informacje o portfelu" wprowadź klucz prywatny / hasło aby upewnić się, że są poprawne i odczytaj swój portfel. Sprawdź czy adres, który zapisałeś zgadza się z wyświetlonym.

Pamiętaj, że musisz się zabezpieczyć przed utratą kluczy i hasła z powodu zagubienia, uszkodzenia lub zniszczenia dysku twardego, nośnika USB lub kartki z zapisanymi danymi. Przewiduj również możliwość wystąpienia katastrof obejmujących większe obszary (pożar, powódź).

---

#### Jak zweryfikować czy mam dostęp do portfela?

**Zanim wyślesz jakieś środki do Twojego nowego portfela** powinieneś się upewnić, że masz do niego dostęp.

1.  Przejdź na zakładkę "Wyświetl informacje o portfelu".
2.  Wybierz Twój plik portfela -lub- klucz prywatny i odblokuj portfel.
3.  Jeżeli portfel jest szyfrowany automatycznie wyświetli się okienko tekstowe. Wpisz w nim hasło.
4.  Kliknij przycisk "Odblokuj Portfel".
5.  Informacje o Twoim portfelu powinny się wyświetlić. Odszukaj adres Twojego portfela obok okrągłej kolorowej ikonki. Ta ikona to wizualna reprezentacja adresu Twojego portfela. Upewnij się, że adres odpowiada adresowi zapisanemu w dokumencie tekstowym i na portfelu papierowym.
6.  Jeśli planujesz trzymać w portfelu jakieś większe sumy, zalecamy w pierwszej kolejności wykonanie kilku testowych transakcji o mniejszej wartości. Prześlij do Twojego nowego portfela 0.001 ether, wejdź do portfela, prześlij te 0.001 ether na inny adres i upewnij się, że wszystko przebiegło jak należy.

---

#### Jak wysłać Ether z jednego portfela na inny?

Jeżeli planujesz przesłać większą sumę środków, najpierw powinieneś wysłać mniejszą kwotę, aby upewnić się, że wszystko przebiegło zgodnie z planem.

1.  Przejdź na zakładkę "Wyślij Ether".
2.  Wybierz Twój plik portfela -lub- wpisz klucz prywatny i odblokuj portfel.
3.  Jeżeli portfel jest szyfrowany, automatycznie wyświetli się okienko tekstowe. Wpisz w nim hasło.
4.  Kliknij przycisk "Odblokuj Portfel".
5.  Wpisz adres, na który chcesz przesłać środki w pole "Do adresu:".
6.  Wpisz kwotę do wysyłania. Możesz też kliknąć "Wyślij wszystkie dostępne środki", jeśli chcesz przesłać całą dostępną kwotę.
7.  Kliknij "Wygeneruj i Podpisz Transakcję".
8.  Pojawi się kilka kolejnych pól. Są to dane transakcji wygenerowane przez Twoją przeglądarkę.
9.  Kliknij niebieski przycisk "Wyślij Transakcję" na dole strony.
10.  Pojawi się okienko z potwierdzeniem. Zweryfikuj czy kwota i adres, na który wysyłasz są prawidłowe. Następnie kliknij "Tak, jestem pewien! Zatwierdź Transakcję.".
11.  Transakcja zostanie wysłana i zostanie wyświetlony TX Hash. Możesz kliknąć TX Hash, aby zobaczyć tą transakcję w eksploratorze bloków.

---

#### Jak uruchomić MyEtherWallet offline/lokalnie?

Możesz uruchomić MyEtherWallet lokalnie ze swojego komputera zamiast z serwerów GitHub'a. Możesz wygenerować portfel całkowicie offline'owo i wysyłać transakcje z zakładki "Wyślij offline".

1.  Wejdź na nasze konto github: [https://github.com/kvhnuke/etherwallet/releases/latest](https://github.com/kvhnuke/etherwallet/releases/latest).
2.  Pobierz `dist-vX.X.X.X.zip`.
3.  Przenieś paczkę zip na odizolowany system.
4.  Rozpakuj paczkę i kliknij 2-krotnie `index.html`.
5.  MyEtherWallet działa teraz w całości na Twoim komputerze.

W razie gdybyś nie wiedział, musisz zachować cały folder, aby strona działała prawidłowo, nie tylko `index.html`. Nie ruszaj i nie przenoś nic innego w folderze. Jeżeli zachowujesz kopie repozytorium MyEtherWallet na przyszłość, zalecamy przechowywać je w formie spakowanego pliku ZIP, aby mieć pewność, że jego zawartość się nie zmieniła.

Ponieważ ciągle aktualizujemy MyEtherWallet, zalecamy co jakiś czas aktualizować zapisaną wersję repozytorium.

---

#### Jak się wysyła Tokeny i jak tworzyć własne Tokeny?

[Ethplorer.io](https://ethplorer.io/) jest świetnym miejscem na przeglądanie tokenów oraz sprawdzenia ich ilości miejsc po przecinku.

1.  Przejdź na zakładkę "Wyślij Ether i Tokeny".
2.  Odblokuj portfel.
3.  Wpisz adres, na który chcesz je przesłać w pole "Do Adresu:".
4.  Wpisz wartość jaką chcesz wysłać.
5.  Wybierz typ tokena, który chcesz wysłać.
6.  Jeśli nie widzisz danego tokena:

1.  Kliknij "Inny".
2.  Wpisz adres, symbol i ilość miejsc po przecinku tokena. Wartości te są podawane przez twórców tokena, są również potrzebne podczas dodawania tokena do obserwowanych w aplikacji Mist.
3.  Kliknij "Zapisz".
4.  Możesz teraz wysyłać ten token, jak również odczytać stan konta dla tokenu w kolumnie obok.

8.  Kliknij "Generuj Transakcję".
9.  Pojawi się kilka kolejnych pól z danymi transakcji wygenerowanymi przez Twoją przeglądarkę.
10.  Kliknij niebieski przycisk "Wyślij Transakcję", który znajduje się niżej.
11.  Wyskoczy okienko. Zweryfikuj czy kwota i adres na który wysyłasz są prawidłowe. Następnie kliknij "Tak, jestem pewien! Zatwierdź transakcję.".
12.  Transakcja zostanie zatwierdzona. TX Hash zostanie wyświetlone. Możesz kliknąć TX Hash aby zobaczyć status transakcji w eksploratorze.

---

#### Co się stanie, jeżeli wasza strona zniknie z sieci?

MyEtherWallet nie jest usługą portfela internetowego. Nie posiadasz loginu i nic nie jest zapisywane na naszych serwerach. To tylko interfejs, który pozwala korzystać z sieci Ethereum.

Jeżeli MyEtherWallet.com zostanie wyłączona, musiałbyś znaleźć inny sposób (jak Ethereum Wallet / Mist) na korzystanie z sieci Ethereum. Nie musiałbyś jednak wypłacić swoich środków z MyEtherWallet, ponieważ one nie znajdują się na MyEtherWallet, a na portfelach, które zostały wygenerowane za pomocą naszej strony.

Możesz w każdej chwili, w bardzo prosty sposób, zaimportować swoje nieszyfrowane klucze prywatne lub szyfrowane pliki w formacie Geth/Mist wprost do geth / Ethereum Wallet / Mist. Zobacz pytanie 12 poniżej.

W dodatku prawdopodobieństwo zamknięcia przez nas strony MyEtherWallet.com jest bliskie zeru. Koszty utrzymania strony są prawie żadne, ponieważ nie przechowujmy żadnych informacji. Jeśli nawet strona zostanie zamknięta, jest ona również i zawsze będzie publicznie dostępna na [https://github.com/kvhnuke/etherwallet](https://github.com/kvhnuke/etherwallet/tree/gh-pages). Możesz ściągnąć paczkę ZIP i uruchomić MyEtherWallet lokalnie na własnym komputerze.

---

#### Czy zakładka "Wyślij Ether" działa offline?

Nie. Potrzebuje dostępu do internetu w celu pobrania aktualnej ceny paliwa, wyróżnika dla konta, oraz rozgłoszenia transakcji (wysłania). Jednakże wysyłana jest jedynie podpisana transakcja, nic więcej. Twój klucz prywatny w żadnym momencie nie opuszcza Twojego komputera. Teraz zapewniamy również funkcję "Wyślij Offline", która umożliwia przechowywanie kluczy prywatnych na komputerze, który fizycznie jest odizolowany od sieci zewnętrznej.

---

#### Jak wykonać transakcję offline (Cold Wallet)?

1.  Przejdź na zakładkę "Wyślij Offline" na komputerze z dostępem do internetu.
2.  Uzupełnij pole "Od Adresu". Zauważ, że jest to adres, z którego wypłacasz środki, nie adres, na który mają trafić. W ten sposób generowany jest wyróżnik i cena paliwa.
3.  Przejdź na komputer bez dostępu do internetu. Uzupełnij pole "Do Adresu" i kwotę do wysłania.
4.  Wpisz cenę paliwa jaka została wyświetlona na komputerze z internetem w kroku pierwszym.
5.  Wpisz wyróżnik jaki został wyświetlony na komputerze z internetem w kroku pierwszym.
6.  "Limit Paliwa" ma domyślną wartość 21000\. To pokryje koszty standardowej transakcji. Jeżeli będziesz wysyłać transakcję do kontraktu lub będziesz załączać jakieś dane do transakcji, musisz zwiększyć tą wartość. Nadpłata paliwa zostanie zwrócona.
7.  Jeśli chcesz możesz załączyć dane do transakcji. Musisz wtedy jednak zapewnić więcej niż domyślne 21000 limitu paliwa. Dane wpisujemy w formacie HEX.
8.  Wybierz Twój plik portfela -lub- klucz prywatny i odblokuj portfel.
9.  Kliknij przycisk "Wygeneruj Transakcję".
10.  W polu poniżej pojawią się dane podpisanej transakcji. Skopiuj jego zawartość na komputer z dostępem do internetu.
11.  Na komputerze z internetem wklej podpisaną transakcję w pole tekstowe w kroku 3 i kliknij "Wyślij Transakcję". To spowoduje rozgłoszenie transakcji.

---

#### Jak zaimportować portfel utworzony w MyEtherWallet do geth / Ethereum Wallet / Mist?

Używając pliku Keystore Geth/Mist z MyEtherWallet v2+....

1.  Wejdź na zakładkę "Wyświetl informacje o portfelu".
2.  Odblokuj portfel używając Twojego klucza prywatnego lub pliku portfela.
3.  Znajdź sekcję "Plik Keystore/JSON (Zalecany · Szyfrowany · Format Mist/Geth)". Kliknij przycisk "Pobierz" pod spodem. W ten sposób uzyskałeś plik Keystore.
4.  Uruchom aplikację Ethereum Wallet.
5.  W menu programu wejdź w: "Accounts" -> "Backup" -> "Accounts"
6.  Otworzy się folder z plikami ustawień. Skopiuj pobrany przed chwilą plik portfela (`UTC--2016-04-14......../`) do folderu keystore.
7.  Twój portfel powinien się od razu pojawić na zakładce "Accounts."

Używając nieszyfrowanego klucza prywatnego...

1.  Jeżeli jeszcze nie posiadasz nieszyfrowanego klucza prywatnego, wejdź na zakładkę "Wyświetl informacje o portfelu".
2.  Wybierz swój plik portfela i odblokuj portfel.
3.  Skopiuj "Klucz Prywatny (nieszyfrowany)".
4.  Jeśli pracujesz na Mac'u:

*   Otwórz Text Edit i wklej do niego skopiowany klucz prywatny.
*   Wejdź do paska menu i kliknij "Format" -> "Make Plain Text".
*   Zapisz ten plik na `desktop/` jako `nic_specjalnego_usun_mnie.txt`. Podczas zapisywania ustaw "UTF-8" i "If no extension is provided use .txt".
*   Otwórz terminal systemowy i uruchom następującą komendę: `geth account import ~/Desktop/nic_specjalnego_usun_mnie.txt`
*   Zostaniesz zapytany o hasło. To będzie hasło portfela w geth / Ethereum Wallet / Mist, które należy podać przy każdej transakcji, nie zapomnij tego hasła.
*   Po zaimportowaniu portfela, usuń `nic_specjalnego_usun_mnie.txt`
*   Po ponownym uruchomieniu aplikacji Ethereum Wallet Twój portfel pojawi się na zakładce "Accounts".

6.  Jeśli pracujesz na PC'cie:

*   Otwórz Notatnik i wklej klucz prywatny
*   Zapisz plik notatnika jako `nic_specjalnego_usun_mnie.txt` na `C:\`
*   Uruchom wiersz poleceń i wykonaj komendę: `geth account import C:\nic_specjalnego_usun_mnie.txt`
*   Zostaniesz zapytany o hasło. To będzie hasło portfela w geth / Ethereum Wallet / Mist, które należy podać przy każdej transakcji, nie zapomnij tego hasła.
*   Po zaimportowaniu portfela, usuń `nic_specjalnego_usun_mnie.txt`
*   Po ponownym uruchomieniu aplikacji Ethereum Wallet Twój portfel pojawi się na zakładce "Accounts".

---

#### What does "Insufficient funds. Account you try to send transaction from does not have enough funds. Required XXXXXXXXXXXXXXXXXXX and got: XXXXXXXXXXXXXXXX." Mean?

Oznacza to, że nie posiadasz wystarczającej ilości Ether na koncie, aby pokryć koszty paliwa. Każda transakcja (przesyłanie tokenów lub interakcja z kontraktem) wymaga paliwa, które jest opłacane w Ether'ach. Wyświetlona wartość jest ilością potrzebną na pokrycie kosztów transakcji w Wei'ach. Podziel tą liczbę przez `1000000000000000000` i odejmij wartość Ether, którą chciałeś wysłać (jeśli wysyłałeś Ether). Otrzymasz wartość, jaką musisz przesłać na swoje konto, aby wykonać transakcję.

---

#### Niektóre strony wykorzystują ruchy myszką przy generowaniu klucza prywatnego. MyEtherWallet tego nie robi. Czy generator liczb losowych w MyEtherWallet jest bezpieczny?

Chociaż generowanie liczb losowych przy udziale ruchów myszki jest sprytnie pomyślane i rozumiemy dlaczego ludzie to lubią, to jednak rzeczywistość jest taka, że window.crypto zapewnia większą entropię niż ruchy myszką. Generowanie z ruchów myszki nie jest niebezpieczne, ale my (oraz znaczna liczba innych ekspertów kryptografii) wierzymy w window.crypto. W dodatku MyEtherWallet może być używane na urządzeniach dotykowych. Tutaj można przeczytać [rozmowę rozeźlonego reddit'ora i Vitalik'a Buterin'a odnośnie ruchów myszki kontra window.crypto](https://www.reddit.com/r/ethereum/comments/2bilqg/note_there_is_a_paranoid_highsecurity_way_to/cj5sgrm) a tutaj jest [specyfikacja window.crypto w3](https://dvcs.w3.org/hg/webcrypto-api/raw-file/tip/spec/Overview.html#dfn-GlobalCrypto).

---

#### Dlaczego portfel, który właśnie wygenerowałem nie pokazuje się w eksploratorze bloków? (np. etherchain, etherscan)

Adres pojawi się w eksploratorze bloków dopiero jak adres portfela będzie uczestniczył w jakichś transakcjach, np. jak wyślesz do niego jakieś środki.

---

#### Jak sprawdzić stan mojego konta?

Możesz użyć eksploratora bloków jak [etherscan.io](http://etherscan.io/). Wklej swój adres w wyszukiwarkę na stronie eksploratora, pokaże ona stan Twojego konta oraz historię transakcji. Tak na przykład wygląda nasze [konto donacji](http://etherscan.io/address/0x7cb57b5a97eabe94205c07890be4c1ad31e486a8) na etherscan.io.

---

#### Dlaczeg stan mojego konta nie pojawia się, kiedy odblokowuje mój portfel?

Najprawdopodobniej przyczyną tego jest firewall. API, które używamy do odczytu stanu konta oraz jego konwersji jest często blokowane przez firewall z różnych przyczyn. Wciąż możesz wysyłać transakcje, jednak stan konta musisz sprawdzać w inny sposób, np. na [etherscan.io](http://etherscan.io/)

---

#### Gdzie jest plik mojego portfela w geth?

*   Mac: `~/Library/Ethereum/keystore`
*   Linux: `~/.ethereum/keystore`
*   Windows: `%APPDATA%/Ethereum/keystore`

---

#### Gdzie jest plik mojego portfela w Mist?

Pliki programu Mist można znaleźć zazwyczaj w lokalizacjach wymienionych w pkt. 18, ale prościej jest uruchomić Mist, wybrać "Accounts" w górnym pasku, następnie "Backup" i "Accounts". Otworzy się folder, w którym znajdują się wspomniane pliki.

---

#### Gdzie jest mój plik portfela przed-sprzedaży?

Tam gdzie go zapisałeś ;). Był też wysłany mailem, sprawdź również tam. Szukaj pliku `"ethereum_wallet_backup.json"`. Portfel ten będzie zaszyfrowany hasłem jakie podałeś podczas procesu kupna na przed-sprzedaży.

---

#### Czy nie jest tak, że każdy może losowo sprawdzać różne klucze prywatne, a jak znajdzie taki ze środkami możę przelać je na swoje konto?

Krótka odpowiedź: Tak. Jednak znalezienie któregokolwiek ze środkami zajęłoby więcej czasu niż wszechświat istnieje... więc... nie.

Długa wersja (dla przedszkolaka): Ethereum bazuje na [Kryptografii Klucza Publicznego (ECC)](https://pl.wikipedia.org/wiki/Kryptografia_klucza_publicznego), a dokładnie na [Kryptografii Krzywych Eliptycznych](https://eprint.iacr.org/2013/734.pdf) które są bardzo szeroko stosowane, nie tylko w Ethereum. Większość serwerów jest chroniona przez ECC. Kolejne przykłady to Bitcoin, SSH, TLS i wiele innych. Klucze w Ethereum to dokładnie odmiana 256-bitowa, która jest silniejsza niż 128-bitowa i 192-bitowa, które również są wciąż szeroko stosowane oraz uznawane przez ekspertów za bezpieczne.

W tego typu zabezpieczeniu mamy 2 klucze: klucz prywatny i klucz publiczny. Z klucza prywatnego możemy szybko otrzymać klucz publiczny, ale otrzymanie klucza prywatnego z klucza publicznego jest niemożliwe. Biorąc pod uwagę, że cały internet i wszystkie sekrety świata używają tej metody kryptograficznej oznacza, że gdyby istniał sposób na otrzymanie klucza prywatnego z publicznego, to utrata Twoich środków z konta Ethereum byłaby najmniejszym zmartwieniem w świecie.

Idąc dalej, TAK jeżeli ktoś miałby Twój klucz prywatny mógłby z łatwością wypłacić środki z Twojego konta. Tak samo, jak by ktoś miał hasło do Twojego konta pocztowego, mógłby czytać Twoje maile, lub gdyby miał hasło bankowe, mógłby wypłacać z niego pieniądze. Możesz ściągnąć plik Keystore Twojego portfela, który jest kluczem prywatnym zaszyfrowanym hasłem. To jest tak jak by mieć hasło, które jest chronione innym hasłem.

Więc TAK, teoretycznie można by po prostu wpisywać 64 znaki w kodzie szesnastkowym do momentu trafienia na taki, który nie jest pusty. Co więcej zdolni ludzie mogą napisać program, który będzie bardzo szybko, automatycznie sprawdzał kolejne losowe kombinacje kluczy. Taka metoda nazywa się "brute-forcing" lub "mining". Różni ludzie zastanawiali się nad jej zastosowaniem długo i intensywnie. Z pomocą kilku wysokiej klasy serwerów mogliby być w stanie sprawdzać ponad 1 milion kluczy na sekundę. Jednak nawet wtedy koszt utrzymania pracy tych serwerów byłby wiele razy wyższy niż potencjalne zyski ze znalezienia jakichkolwiek środków. Bardziej prawdopodobne byłoby, że pierwsze trafienie nastąpi dopiero po śmierci Twojej i Twoich prawnuków.

Jeśli wiesz coś na temat Bitcoina, [to może dać Ci perspektywę:](http://bitcoin.stackexchange.com/questions/32331/two-people-with-same-public-address-how-will-people-network-know-how-to-deliver) *Aby zilustrować jak mało prawdopodobne to jest: załóżmy, że każdy satoshi (najmniejsza część Bitcoina, 0.00000001 BTC), każdego Bitcoina jaki kiedykolwiek będzie istnieć (21 milionów), został wysłany na swój własny unikalny klucz prywatny. Prawdopodobieństwo, że spośród wszystkich tych kluczy 2 odpowiadałyby tym samym adresom jest jak 1 do 100 kwintylionów.

[Jeżeli byś chciał coś bardziej technicznego:](http://security.stackexchange.com/questions/25375/why-not-use-larger-cipher-keys/25392#25392) *Te liczby nie mają nic wspólnego z technologią na jakiej opiera się urządzenie. Są maksimami na jakie pozwala termodynamika, co silnie sugeruje, że skuteczne ataki brute-force przeciwko 256-bitowym kluczom będą nieosiągalne, dopóki komputery nie będą zbudowane z czegoś innego niż materia i będą zajmować trochę więcej niż wszechświat.

Oczywiście to wszystko ma miejsce przy założeniu, że klucze są generowane w prawdziwie losowy sposób i z wystarczającą entropią. Klucze tu wygenerowane spełniają te kryteria, tak samo jak klucze w Jaxx i Mist/geth. Portfele Ethereum są w większości całkiem niezłe. Z drugiej strony np. klucze wygenerowane przez ludzki umysł nie spełniają tych kryteriów, jako że ludzki umysł nie jest w stanie wygenerować prawdziwie losowego źródła. W otoczeniu Bitcoina w przeszłości pojawiło się kilka problemów związanych z brakiem odpowiedniej entropii lub brakiem pełnej losowości, ale to całkiem inny temat, być może na inny dzień.

---

#### Bezpieczeństwo

Jeśli pierwszym pytaniem jakie Ci się nasuwa jest "Dlaczego miałbym zaufać tym gościom?", to prawidłowy odruch. Być może to pozwoli Ci załagodzić obawy:

*   Działamy od sierpnia 2015\. Jeśli wyszukasz ["myetherwallet" na reddit](https://www.reddit.com/search?q=myetherwallet), możesz znaleźć wielu ludzi, którzy używają naszego kodu bez najmniejszych problemów.
*   Nie ukradniemy Twoich pieniędzy ani Twoich kluczy prywatnych. Ta strona nie zawiera złośliwego kodu. W zasadzie, zakładka "Generuj Portfel" działa w pełni po stronie klienckiej. Oznacza to, że cały kod jest uruchamiany wyłącznie na **Twoim komputerze**, a jego rezultat nigdzie nie jest zapisywany ani nigdzie przesyłany.
*   Sprawdź adres URL -- Ta strona jest serwowana przez GitHub. Kod źródłowy jest dostępny pod: [https://github.com/kvhnuke/etherwallet/tree/gh-pages](https://github.com/kvhnuke/etherwallet/tree/gh-pages). Strona jest dostępna pod domenami: [https://www.myetherwallet.com](https://www.myetherwallet.com).
*   Do generowania portfeli możesz pobrać [kod źródłowy](https://github.com/kvhnuke/etherwallet/releases/latest). Zobacz punkt 5 powyżej.
*   Wykonaj test i sprawdź jakie połączenia sieciowe są aktywowane. Najprostszą metodą jest kliknięcie prawym przyciskiem myszy na stronie i "Zbadaj". Przejdź na zakładkę "Network". Wygeneruj testowy portfel. Zobaczysz, że nie są aktywowane żadne połączenia. Możesz zobaczyć coś wyglądającego jak data:image/gif i data:image/png. To są kody QR generowane... na Twoim komputerze... przez Twój komputer. Żadne dane nie były transferowane.
*   Jeśli nie czujesz się komfortowo używając tego oprogramowania, bez względu na wszystko, nie używaj go. Stworzyliśmy te narzędzia jako pomoc w generowaniu nowych portfeli i wykonywaniu transakcji bez potrzeby zagłębiania się w linię poleceń lub prowadzenia pełnego węzła. Jeszcze raz, nie krępuj się z nami skontaktować jeżeli masz jakieś wątpliwości. Postaramy się odpowiedzieć tak szybko jak to możliwe. Dzięki!
