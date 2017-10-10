/*
Title: ★ Las Palabras son difíciles: Definiendo términos comunes de Ethereum
Sort: 2
*/

Original Text: https://myetherwallet.groovehq.com/knowledge_base/topics/words-are-hard-defining-common-terms-in-the-ethereum-slash-crypto-space

Translation graciously provided by [faraggi](https://github.com/faraggi/words-are-hard-es/blob/master/words-are-hard-es.md)

----

# Las Palabras son difíciles: Definiendo términos comunes de Ethereum


Traducción de: "[Words are hard: Defining Common Terms in the Ethereum / Crypto Space](https://www.reddit.com/r/ethereum/comments/6kvp87/words_are_hard_defining_common_terms_in_the/)"
por [insomniasexx](reddit.com/u/insomniasexx)

### Billetera

* La interfaz / cliente / wrapper contenedor que usas para gestionar tu(s) cuenta(s).
* Ejemplo: MyEtherWallet.com, tu billetera Ledger, un contrato de billetera Multisig.

### Cuenta (Account)

* Un par de llaves públicas/privadas que "contienen" tus fondos.
* En realidad, tus fondos están contenidos en la blockchain, no en la billetera o en la cuenta.
* Tal como tu cuenta Reddit tiene un nombre de `usuario (público)` y una `clave (privada)`, tu cuenta Ethereum es igual. Para más seguridad, puedes usar un password para encriptar tu llave privada que puede resultar en un `usario (púbilco)` y una `clave (privada)` y una `clave` para `esa clave (privado + seguro)`. Ver la sección de Keystore File.

### Address ("Llave Pública")

* Usas esto para enviar fondos a una cuenta.
* Algunas veces se le refiere como "llave pública".
* Una cadena de caracteres de '0x' + 40 caracteres hexadecimales.
* En Ethereum, las address comienzan con 0x.
* Ejemplo: 0x06A85356DCb5b307096726FB86A78c59D38e08ee

### LLave Pública

* En la criptografía, hay un par de llaves: la pública y la privada.
* Puedes derivar la llave pública de la llave privada, pero no lo contrario.
* (Avanzado) En Ethereum, la dirección "actúa" como una llave pública, pero en realidad no lo és.
* (Avanzado) En Ethereum, la llave pública es derivada de la llave privada y es una cadena de 128 caracteres hexadecimales. Luego puedes tomar el hash "SHA3" (Keccak-256) de esto (64 caracteres), tomar los últimos 50 caracteres y prefijar con '0x', y obtendrás la address de 42 caracteres.

### Llave Privada

* Usa esto para enviar fondos desde una cuenta.
* La mitad secreta de tu combinación Address/llave pública.
* Una cadena de 64 caracteres hexadecimales.
* (Casi) toda cadena de 64 caracteres hexadecimales es una llave privad.
* Si escribieras tu llave privada de dos maneras diferentes, tendrás acceso a otra billetera. Nunca escribas tu llave privad a mano.
* Estos son los caracteres que necesitas para enviar desde tu cuenta. Sin ello, no puedes acceder a los fondos. A pesar de que, no necesitas guardarla bruta sin encriptar en este formato. Puedes guardar versiones mas elaboradas de ella (ej. el archivo Keystore / una frase mnemotécnica).
* Ejemplo: afdfd9c3d2095ef696594f6cedcae59e72dcd697e2a7521b1578140422a4f890

### Archivo Keystore
* Versión encriptada de tu llave privada en formato JSON (aunque no tiene extensión JSON)
* una versión elaborada de tu llave privada que está protegida por una clave que has elegido tu.
* Cuando se combina con la clave, crea la llave privada.
* Más segura que las llaves privadas ya que necesitas la clave.
* El nombre del archivo en general tiene el formato `UTC + -- + FECHA_CREADA + -- + TU_ADDRESS_SIN_0x`
* Ejemplo de nombre de archivo: `UTC--2017-07-02T20-33-09.177Z--06a85356dcb5b307096726fb86a78c59d38e08ee`
* Ejemplo de contenidos: `{"version":3,"id":"aa811d53-fe9a-44a2-bd1c-e737007b5591","address":"06a85356dcb5b307096726fb86a78c59d38e08ee","Crypto":{"ciphertext":"f5a7cc8d4b8cf93510b0d0d057f3a52ac79fd48e619e0638c4ffd978ca180248","cipherparams":{"iv":"975ab00192e2dd74170e91ca59c0b0bd"},"cipher":"aes-128-ctr","kdf":"scrypt","kdfparams":{"dklen":32,"salt":"0210f0d0b99e440dfbceb36373304638bac093a367ee7da6411cd165f7aa907a","n":1024,"r":8,"p":1},"mac":"8197a747a3855a10546a2ff939c36470daed78e393b670efa0c12fe3b23dd7e3"}}`
* (clave: `mypassword`)

### Frase Mnemotécnica:
* Otra versión elaborada de guardar tu llave privada, que es realmente utilizada para derivar multiples llaves privadas.
* Una frase (en general) de 12 o 24 palabras que permite de acceder una infinidad de cuentas.
* Usada por Ledger, TREZOR, MetaMask, Jaxx, y otros.
* Origina de la especificación BIP 39
* Las cuentas que puedes acceder con esta frase son determinadas por el `path`.
* Ejemplo de 12 palabras: `brain surround have swap horror body response double fire dumb bring hazard`
* Ejemplo de 24 palabras: `card enrich gesture connect kick topple fan body blind engine lemon swarm venue praise addict agent unaware equal bean sing govern income link leg`

### Billetera Hardware:

* En general, un device de un sólo propósito que "guarda" tus llaves privadas, asegurando que las llaves estén seguras.
* En general usan 24 palabras. Esta frase debe ser escrita (y no en tu computador) y guardada separadamente de tu billetera.
* Si pierdes tu billetera, aún puedes recuperar acceso a tus cuentas con este hardware.
* Nunca escribas la frase de recuperación en tu computador. Pierde el objetivo de la billetera hardware.

### AddressIdenticon / AddressIcon:

* La mancha de colores que corresponde a tu billetera.
* Es una manera simple y fácil de ver si tu address es la correcta.
* ![Ejemplo 1](http://i.imgur.com/lHUrIiZ.jpg)
* ![Ejemplo 2](http://i.imgur.com/FvyLewS.jpg)
* Nota: Las dos de arriba tienen sólo un caracter diferente pero son muy distintas. Magia!

### Hexadecimal:

* Usado por todas partes en Ethereum para una multitud de cosas.
* Está compuesto por los caractere y números: `0 1 2 3 4 5 6 7 8 9 A B C D E F`

### Seed

El input inicial para derivar la llave privada. Esto siempre debe ser creado de manera totalmente aleatoria, no algo que debieras hacer con la mente.
* Si eliges la seed, se le dice una "brai wallet"

### Brain Wallet

* Billetera mental en inglés
* Una cuenta creada a partir de una seed o clave o claves de tu elección.
* Los humanos no son capables de generar suficiente entropía y por lo tanto las billeteras derivadas de estas frases son inseguras.
* Los Brain Wallets pueden ser hackeadas a fuerza muy rápido por computadores rápidos.
* [Los Brain Wallets son en general mal vistos insecure.](https://www.reddit.com/r/ethereum/comments/45y8m7/brain_wallets_are_now_generally_shunned_by/)
* No uses Brain Wallets.

### Entropía

* También conocido como "aleatoriedad"
* Mientras más aleatorio algo sea, más entropía tiene y más seguro es.
* En general definido en "bits de entropía" o el número de años que tomaría hackear a fuerza bruta una llave privada con esa cantidad de entropía.
* Las llaves privadas de Ethereum son llaves de 256-bit
* Las frase de 24 palabras también son de 256 bits. Hay 2048 palabras en el diccionario. 11 bits de entropía (las palabras). `11 * 24 = 264`. La última palabra es un checksum.

#### WEI vs GWEI vs Shannon vs Ether
![http://i.imgur.com/SXpY3HU.jpg](http://i.imgur.com/SXpY3HU.jpg)

++++
++++

### TODO:

#### Difference between an exchange or hosted wallet & a wallet you control

* [MEW Knowledge Base Article on the Subject (WIP, too)](http://myetherwallet.groovehq.com/knowledge_base/topics/what-is-the-difference-between-an-exchange-eg-coinbase-kraken-gemini-poloniex-bittrex-and-myetherwallet)


#### Gas (Gas Limit vs Gas Price)
* https://myetherwallet.groovehq.com/knowledge_base/topics/what-is-gas
* [Hudson's recent post on gas](http://hudsonjameson.com/2017-06-27-accounts-transactions-gas-ethereum/)

#### Fork (Soft Fork vs Hard Fork)
* [Vitalik: Hard Forks, Soft Forks, Defaults and Coercion](http://vitalik.ca/general/2017/03/14/forks_and_markets.html)
