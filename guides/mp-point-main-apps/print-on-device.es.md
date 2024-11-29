# Impresiones

Es posibile utilizar la impresora térmica de los dispositivos Point Smart para realizar impresiones de imágenes en bitmap----[mlc]----, DTE,------------ o imágenes personalizadas a partir de patrones llamados Custom Tags.

> NOTE
>
> Nota
>
> Si deseas realizar impresiones con una impresora externa, deberás emparejarla a tu dispositivo utilizando la funcionalidad Bluetooth. Dirígete a [Imprimir con una impresora externa](/developers/es/docs/main-apps/bluetooth/print-external-printer) para más información.

## Imprimir Bitmap
Para imprimir imágenes en bitmap con la impresora de Point Smart, utiliza la **función print** de la clase `BitmapPrinter`. El acceso se da a través del objeto `MPManager`, como en el ejemplo a continuación:

[[[
```kotlin
val bitmapPrinter = MPManager.bitmapPrinter

val imageToPrint: Bitmap = bitmap // Obtener la imagen bitmap para imprimir

bitmapPrinter.print(imageToPrint) { response ->
   response.doIfSuccess { printResult ->
       // Manejar la impresión exitosa
   }.doIfError { error ->
       // Manejar el error en la operación
```
```java
final BitmapPrinter bitmapPrinter = MPManager.INSTANCE.getBitmapPrinter();

final Bitmap imageToPrint = bitmap // Obtener la imagen bitmap para imprimir

final Function1<MPResponse<String>, Unit> callback = (final MPResponse<String> response) -> {
 if (response.getStatus() == ResponseStatus.SUCCESS) {
   // Manejar la impresión exitosa
 } else {
   // Manejar el error en la operación
 }
 return Unit.INSTANCE;
};

bitmapPrinter.print(imageToPrint, callback);
```
]]]

|Campo|Descripción|
|---|---|
|**dataToPrint (Bitmap)**| La imagen bitmap que se imprimirá.|
|**callback ((MPResponse&lt;String&gt;) -> Unit)**| Función de devolución del llamado que ofrece la operación de impresión. El `[MPResponse]` encapsula el estado, el error (si lo hay) y los datos en caso de éxito, que tiene un **String** representando el ID o estado de la impresión.|

----[mla, mlm, mlb]----
## Imprimir Custom Tag

La función `print` de la clase `BitmapPrinter` en nuestro SDK también puede ser utilizada para crear impresiones personalizadas. Esto se realiza a partir de un patrón, llamado Custom Tag, que consiste en enviar un string con diferentes tags de control para su posterior interpretación por nuestro sistema, lo que arroja como resultado un comprobante físico. 

A continuación se muestra un ejemplo de cómo se puede implementar esta funcionalidad:

[[[
```kotlin
val bitmapPrinter = MPManager.bitmapPrinter

val customTagToPrint: String = "{br}{br}{s}este es un texto de  prueba{/s}" 

val paymentMethodName: String? = null // Parámetro opcional que permite imprimir el nombre del método de pago usado

val printPdf417InBoleta: Boolean? = null // Parámetro opcional que permite imprimir el código de barra pdf417(la mancha). Valor por defecto: null

bitmapPrinter.print(customTagToPrint, paymentMethodName, printPdf417InBoleta) { response ->
   response.doIfSuccess { printResult ->
       // Manejar la impresión exitosa

   }.doIfError { error ->
       // Manejar el error en la operación de impresión
```
```java
final BitmapPrinter bitmapPrinter = MPManager.INSTANCE.getBitmapPrinter();

final String customTagToPrint = "{br}{br}{s}este es un texto de prueba{/s}"

@Nullable
final String paymentMethodName //Parámetro opcional que permite imprimir el nombre del método de pago.

@Nullable
final Boolean printPdf417InBoleta // Parámetro opcional que permite imprimir el codigo de barra pdf417(la mancha).


final Function1<MPResponse<String>, Unit> callback = (final MPResponse<String> response) -> {
 if (response.getStatus() == ResponseStatus.SUCCESS) {
   // Manejar la impresión exitosa
 } else {
   // Manejar el error en la operación de impresión

 }
 return Unit.INSTANCE;
};

bitmapPrinter.print(customTagToPrint, paymentMethodName, printPdf417InBoleta, callback);
```
]]]

------------ 

----[mlc]----

## Imprimir Custom Tag y DTE

La función `print` de la clase `BitmapPrinter` en nuestro SDK también puede ser utilizada para crear impresiones personalizadas o DTEs. 

En el primer caso, la impresión realiza a partir de un patrón, llamado Custom Tag, que consiste en enviar un string con diferentes tags de control para su posterior interpretación por nuestro sistema, lo que arroja como resultado un comprobante físico. 

En el caso del DTE, la impresión se realiza enviando como parámetro un `.xml` de la transacción.

Puedes ver a continuación cómo implementar impresiones de Custom Tags y DTEs.

[[[
```kotlin
val bitmapPrinter = MPManager.bitmapPrinter

val customTagToPrint: String = "{br}{br}{s}este es un texto de  prueba{/s}"  // Si necesitas imprimir un DTE cambia el string custom tag por el xml

val paymentMethodName: String? = null // Parámetro opcional que permite imprimir el nombre del método de pago usado en caso de querer hacer la impresión de una boleta electrónica (DTE tipo 39,41). Valor por default: null.

val printPdf417InBoleta: Boolean? = null // Parámetro opcional que permite imprimir el código de barra pdf417(la mancha) en caso de querer hacer la impresión de una boleta electrónica (DTE tipo 39,41). Valor por default: null.

bitmapPrinter.print(customTagToPrint, paymentMethodName, printPdf417InBoleta) { response ->
   response.doIfSuccess { printResult ->
       // Manejar la impresión exitosa

   }.doIfError { error ->
       // Manejar el error en la operación de impresión
```
```java
final BitmapPrinter bitmapPrinter = MPManager.INSTANCE.getBitmapPrinter();

final String customTagToPrint = "{br}{b}este es un texto de prueba{/s}" //Si necesitas imprimir un DTE cambia el string custom tag por el xml

@Nullable
final String paymentMethodName // Parámetro opcional que permite imprimir el nombre del método de pago en caso de querer hacer la impresión de una boleta electrónica (DTE tipo 39,41). Valor por default: null.

@Nullable
final Boolean printPdf417InBoleta // Parámetro opcional que permite imprimir el codigo de barra pdf417(la mancha) en caso de querer hacer la impresión de una boleta electrónica (DTE tipo 39,41). Valor por default: null.

final Function1<MPResponse<String>, Unit> callback = (final MPResponse<String> response) -> {
 if (response.getStatus() == ResponseStatus.SUCCESS) {
   // Manejar la impresión exitosa
 } else {
   // Manejar el error en la operación de impresión

 }
 return Unit.INSTANCE;
};

bitmapPrinter.print(customTagToPrint, paymentMethodName, printPdf417InBoleta, callback);
```
]]]

------------ 