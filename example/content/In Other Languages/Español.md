/*
Title: Español
Sort: 2
*/

Migrated from the old help page on MyEtherWallet.com. 

---

Migrated from the old help page on MyEtherWallet.com. 

---

### Algunos recordatorios

*   **Ethereum, MyEtherWallet.com y MyEtherWallet CX, así como algunas de las librerías JavaScript que utilizamos están en desarrollo activo.** Aunque hemos testeado ampliamente y decenas de miles de carteras han sido creadas exitosamente por personas en todo el planeta, siempre existe la remota posibilidad de que ocurra algo inesperado que haga que se pierdan tus ETH. Por favor no inviertas más de lo que estés dispuesto a perder y, por favor, sé cuidadoso. Si algo ocurriera, lo lamentamos, pero **no somos responsables del Ether perdido**.
*   MyEtherWallet.com y MyEtherWallet CX no son "carteras web". No estás creando una cuenta ni nos estás entregando tus Ether para que los guardemos. Toda tu información nunca abandona tu equipo o tu navegador. Te facilitamos que puedas crear, guardar y acceder a tu información e interactuar con la blockchain.
*   Si no guardas tu clave privada y contraseña, no hay modo alguno de recuperar el acceso a tu cartera o a los fondos que ésta contiene. ¡Haz copias de seguridad en múltiples ubicaciones físicas, no solamente en tu equipo!
---

### Soy nuevo. ¿Qué hago?

MyEtherWallet te permite generar nuevas carteras para poder almacenar tu Ether por tu cuenta en lugar de en una casa de cambio. Este proceso tiene lugar por completo en tu equipo, no en nuestros servidores. Por lo tanto, cuando generes una nueva cartera, **eres responsable de hacer una copia de seguridad**.

1.  Crear una nueva cartera.
2.  Hacer una copia de seguridad de la cartera.
3.  Comprobar que tienes acceso a esta nueva cartera y has guardado correctamente toda la información necesaria.
4.  Transferir Ether a la nueva cartera.
---

### ¿Cómo creo una nueva cartera?

1.  Ir a la página "Generar cartera".
2.  Introducir una contraseña fuerte. Si crees que puedes olvidarla, guárdala en un lugar seguro. Necesitarás esta contraseña para enviar transacciones.
3.  Haz clic en "GENERAR".
4.  Ahora se ha generado tu cartera.
---

### ¿Cómo guardo/respaldo mi cartera?

Deberías siempre respaldar tu cartera externamente y en varias ubicaciones físicas (como una unidad USB o en una hoja de papel).

1.  Guardar la dirección. Puedes mantenerla en privado o compartirla con otras personas. De ese modo, otras personas te podrán enviar ether.
2.  Guarda las versiones de tu clave privada. No la compartas con nadie. ¡Tu clave privada es necesaria cuando quieras tener acceso a tu ether para enviarlo! Hay tres tipos de claves privadas:

*   **Archivo Keystore (UTC / JSON · Recomendado · Encriptado)** <span translate="x_KeystoreDesc" class="ng-scope">Este archivo Keystore/JSON concuerda con el formato usado por Mist para una fácil importación en el futuro. Es el archivo recomendado para descargar y guardar como copia de seguridad.</span>
*   **Archivo JSON (sin encriptar)** <span translate="x_JsonDesc" class="ng-scope">Esta es tu clave privada sin encriptar en formato JSON. Esto significa que no necesitas una contraseña, pero cualquiera que encuentre tu archivo JSON puede acceder a tu cartera y ether sin necesitar ninguna contraseña.</span>
*   **Clave Privada (sin encriptar)** <span translate="x_PrivKeyDesc" class="ng-scope">Esta es la versión en texto sin encriptar de tu clave privada, lo cual quiere decir que no hace falta contraseña. Si alguien encontrase tu clave privada sin encriptar, podrían acceder a tu cartera sin necesitar contraseña. Por esta razón, normalmente se recomiendan las versiones encriptadas.</span>

4.  Pon tu dirección, las versiones de la clave privada y la versión PDF de tu cartera en papel en una carpeta. Guárdala en tu equipo y en una unidad USB.
5.  Imprime la cartera si dispones de impresora. En caso contrario, escribe tu clave privada y tu dirección en una hoja de papel. Almacénalas en un lugar seguro y separado de tu equipo y de la unidad USB.
6.  Recuerda, debes evitar la pérdida de las claves y la contraseña frente a una pérdida o fallo en tu unidad de disco duro, unidad USB u hoja de papel. Debes tener en cuenta también la posibilidad de pérdida o daño en una zona amplia (piensa en un incendio o una inundación).
---

### ¿Cómo almaceno con seguridad/sin conexión/en frío con MyEtherWallet?

1.  Ve a nuestro github: [https://github.com/kvhnuke/etherwallet/releases/latest](https://github.com/kvhnuke/etherwallet/releases/latest).
2.  Haz clic en `dist-vX.X.X.X.zip` en la parte inferior.
3.  Mueve el ZIP a un equipo aislado de internet (airgapped).
4.  Descomprímelo y haz doble clic en `index.html`.
5.  Genera una cartera con una contraseña fuerte.
6.  Guarda la dirección. Guarda versiones de la clave privaa. Guarda la contraseña si crees que es posible que no la recuerdes siempre en el futuro..
7.  Almacena los papeles / USBs en múltiples ubicaciones separadas físicamente.
8.  Ve a la página "Ver Información de las Carteras" y teclea to clave privada / contraseña para asegurarte de que son correctos y puedes acceder a tu cartera. Comprueba que la dirección que has escrito coincide.

Recuerda, debes evitar la pérdida de las claves y la contraseña frente a una pérdida o fallo en tu unidad de disco duro, unidad USB u hoja de papel. Debes tener en cuenta también la posibilidad de pérdida o daño en una zona amplia (piensa en un incendio o una inundación).


---

### ¿Cómo verifico que tengo acceso a mi nueva cartera?

**Antes de enviar ether a tu nueva cartera,** deberías asegurarte de que tienes acceso a ésta.

1.  Ve a la página "Ver Información de las Carteras".
2.  Selecciona tu archivo de cartera -o- tu clave privada y desloquea tu cartera.
3.  Si la cartera está cifrada aparecerá automáticamente una caja de texto. Introduce la contraseña.
4.  Haz clic en el botón "Desbloquear cartera".
5.  Debería mostrarse la información de tu cartera. Puedes encontrar la dirección de tu cuenta al lado de un icono circular de colores. Este icono es una representación visual de tu dirección. Asegúrate de que esta dirección coincide con la dirección que has guardado en tu archivo de texto y con la que está en tu cartera de papel.
6.  Si planeas guardar una cantidad elevada de ether, te recomendamos que primero envíes una cantidad pequeña de ether desde tu nueva cartera antes de ingresar una cantidad elevada. Envía 0.001 ether a tu nueva cartera, accede a tu cartera, envía los 0.001 ether desde tu cartera a otra dirección y asegúrate de que todo funciona bien.

---

### ¿Cómo envío ether de una cartera a otra?

Si planeas mover una gran cantidad de ether, deberías probar primero a enviar una pequeña cantidad a tu cartera para asegurarte de que todo funciona según lo esperado.

1.  Ve a la página "Enviar Ether y Tokens".
2.  Selecciona tu archivo de cartera -o- tu clave privada y desbloquea tu cartera.
3.  Si la cartera está cifrada aparecerá automáticamente una caja de texto. Introduce la contraseña.
4.  Haz clic en el botón "Desbloquear cartera".
5.  Introduce la dirección a la que deseas enviar ether en el campo "Dirección de destino:".
6.  Introduce la cantidad que deseas enviar. También puedes hacer clic en "Enviar todo el saldo" si quieres enviar todo el saldo de la cartera.
7.  Haz clic en "Generar transacción".
8.  Aparecerán dos campos más. Esto es tu navegador generando la transacción.
9.  Haz clic en el botón azul "Enviar transacción" que está inmediatamente debajo.
10.  Aparecerá un cuadro emergente. Verifica que la cantidad y la dirección a la que estás enviando son correctos. Entonces, haz clic en el botón "Sí, estoy seguro. Hacer la transacción.".
11.  Se enviará la transacción y se mostrará el ID de transacción. Puedes hacer clic en el ID de transacción para verla en la cadena de bloques.

---

### ¿Cómo ejecuto MyEtherWallet.com sin conexión/localmente?

Puedes ejecutar MyEtherWallet.com en tu equipo en lugar de desde los servidores de GitHub. Puedes generar una cartera totalmente sin conexión y enviar transacciones desde la página "Transacción sin conexión".

1.  Ve a nuestro github: [https://github.com/kvhnuke/etherwallet/releases/latest](https://github.com/kvhnuke/etherwallet/releases/latest).
2.  Haz clic en `dist-vX.X.X.X.zip` en la parte inferior.
3.  Mueve el ZIP a un equipo aislado de internet (airgapped).
4.  Descomprímelo y haz doble clic en `index.html`.
5.  MyEtherWallet.com is now running entirely on your computer.

Por si no tienes costumbre, es necesario guardar la carpeta completa para ejecutar la página web, no solamente `index.html`. No modifiques ni muevas nada dentro de la carpeta. Si estás guardando una copia del repositorio MyEtherWallet para el futuro, recomendamos guardar únicamente el fichero ZIP para poder estar seguro de que el contenido permanezca intacto.

Debido a que estamos constantemente actualizando MyEtherWallet.com, recomendamos que actualices periódicamente tu versión guardada del repositorio.

---

### ¿Cómo envío tokens y añado tokens personalizados?

[Ethplorer.io](https://ethplorer.io/) is a great way to explore tokens and find the decimals of a token.

1.  Navigate to the "Enviar ether y tokens" page.
2.  Desbloquea tu cartera.
3.  Enter the address you would like to send to in the "To Address:" field.
4.  Enter the amount you would like to send.
5.  Select which token you would like to send.
6.  If you do not see the token listed:

1.  Click "Custom".
2.  Enter the address, name, and decimals of the token. These are provided by the developers of the token and are also needed when you "Add a Watch Token" to Mist.
3.  Click "Save".
4.  You can now send that token as well as see it's balance in the sidebar.

8.  Click "Generate Transaction".
9.  A couple more fields will appear. This is your browser generating the transaction.
10.  Click the blue "Send Transaction" button below that.
11.  A pop-up will appear. Verify that the amount and the address you are sending to are correct. Then click "Yes, I am sure! Make transaction." button.
12.  The transaction will be submitted. The TX Hash will display. You can click that TX Hash to see it on the blockchain.

---

### ¿Qué ocurre si vuestro sitio web deja de funcionar?

MyEtherWallet no es una cartera web. No tienes un login y nunca se graba nada en nuestros servidores. You don't have a login and nothing ever gets saved to our servers. Simplemente es una interfaz que te permite interactuar con la cadena de bloques.

Si MyEtherWallet.com desapareciera, tendrías que encontrar otra manera de poder hacer lo que haces con nosotros (como por ejemplo obtener geth o Ethereum Wallet / Mist). Pero no necesitarías retirar tus ether de MyEtherWallet porque no están en MyEtherWallet. Están en la cartera que hayas generado a través de nuestro sitio.

Puedes importar tu clave privada sin cifrar y tus archivos en formato Geth/Mist (cifrados) directamente en geth / Ethereum Wallet / Mist con mucha facilidad actualmente. Ver más abajo la pregunta #12.

Además, la probabilidad de que cerremos MyEtherWallet es casi nula. No nos cuesta prácticamente nada mantenerlo ya que no almacenamos ninguna información. Si borramos el dominio, continúa estando disponible y siempre lo estará en [https://github.com/kvhnuke/etherwallet](https://github.com/kvhnuke/etherwallet/tree/gh-pages). Puedes descargar desde ahí el archivo ZIP y ejecutarlo localmente.