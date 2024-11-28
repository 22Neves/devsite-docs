# Printing

It is possible to use the thermal printer of the Point Smart devices to print bitmap images ----[mlc]----, DTE,------------ or custom images based on patterns called Custom Tags.

> NOTE
>
> Note
>
> If you want to print with an external printer, you will need to pair it with your device using Bluetooth functionality. Go to [Printing with an external printer](/developers/en/docs/main-apps/bluetooth/print-external-printer) for more information.

## Print Bitmap

To print bitmap images with the Point Smart printer, use the **print** function of the `BitmapPrinter` class. Access is provided through the `MPManager` object, as shown in the example below:

[[[
```kotlin
val bitmapPrinter = MPManager.bitmapPrinter

val imageToPrint: Bitmap = bitmap // Obtener la imagen bitmap que se imprimirá

bitmapPrinter.print(imageToPrint) { response ->
   response.doIfSuccess { printResult ->
       // Gerenciar a impressão bem-sucedida
   }.doIfError { error ->
       // anage error in the printing operation
```
```java
final BitmapPrinter bitmapPrinter = MPManager.INSTANCE.getBitmapPrinter();

final Bitmap imageToPrint = bitmap // Obtener la imagen bitmap que se imprimirá

final Function1<MPResponse<String>, Unit> callback = (final MPResponse<String> response) -> {
 if (response.getStatus() == ResponseStatus.SUCCESS) {
   // Gerenciar a impressão bem-sucedida
 } else {
   // anage error in the printing operation
 }
 return Unit.INSTANCE;
};

bitmapPrinter.print(imageToPrint, callback);
```
]]]

|Field|Description|
|---|---|
|**dataToPrint (Bitmap)**| The bitmap image that will be printed.|
|**callback ((MPResponse&lt;String&gt;) -> Unit)**| Request response feature that provides the result of the printing operation. The `[MPResponse]` includes the status, the error (if any), and the details in case of success, which contain a String representing the ID or status of the printing.|

----[mla, mlm, mlb]----
## Print Custom Tag

The `print` function of the `BitmapPrinter` class in our SDK can also be used to create custom prints. This is done based on a pattern called a Custom Tag, which consists of sending a string with different control tags for subsequent interpretation by our system, resulting in a physical receipt.

Below is an example of how this functionality can be implemented:

[[[
```kotlin
val bitmapPrinter = MPManager.bitmapPrinter

val customTagToPrint: String = "{br}{b}Hello world{/b}{br}-----------------{br}{br}{s}this is a test text{/s}" 

/*

Optional parameter that allows printing the name of the payment method used.

*/

val paymentMethodName: String? = null

/*

Optional parameter that allows printing the pdf417 barcode (the stain). Default value: null

*/

val printPdf417InReceipt: Boolean? = null

bitmapPrinter.print(customTagToPrint, paymentMethodName, printPdf417InReceipt) { response ->
   response.doIfSuccess { printResult ->
       // Handle the successful print

   }.doIfError { error ->
       // Handle the error in the print operation
```
```java
final BitmapPrinter bitmapPrinter = MPManager.INSTANCE.getBitmapPrinter();

final String customTagToPrint = "{br}{b}Hello world{/b}{br}-----------------{br}{br}{s}this is a test text{/s}"

/*

Optional parameter that allows printing the name of the payment method.

*/

@Nullable
final String paymentMethodName;

/*

Optional parameter that allows printing the pdf417 barcode (the stain).

*/
@Nullable
final Boolean printPdf417InReceipt;

final Function1<MPResponse<String>, Unit> callback = (final MPResponse<String> response) -> {
 if (response.getStatus() == ResponseStatus.SUCCESS) {
   // Handle the successful print
 } else {
   // Handle the error in the print operation

 }
 return Unit.INSTANCE;
};

bitmapPrinter.print(customTagToPrint, paymentMethodName, printPdf417InReceipt, callback);
```
]]]

------------ 

----[mlc]----

## Print Custom Tag and DTE

The `print` function of the `BitmapPrinter` class in our SDK can also be used to create custom prints or DTEs.

In the first case, the print is done based on a pattern called Custom Tag, which consists of sending a string with different control tags for subsequent interpretation by our system, resulting in a physical receipt.

In the case of the DTE, the print is done by sending a transaction `.xml` as a parameter.

You can see below how to implement prints of Custom Tags and DTEs.

[[[
```kotlin
val bitmapPrinter = MPManager.bitmapPrinter

/*

If you need to print a DTE, replace the custom tag string with the xml

*/

val customTagToPrint: String = "{br}{b}Hello world{/b}{br}-----------------{br}{br}{s}this is a test text{/s}" 

/*

Optional parameter that allows printing the name of the payment method used in case you want to print an electronic receipt (DTE type 39,41). Default value: null.

*/

val paymentMethodName: String? = null

/*

Optional parameter that allows printing the pdf417 barcode (the stain) in case you want to print an electronic receipt (DTE type 39,41). Default value: null.

*/

val printPdf417InReceipt: Boolean? = null

bitmapPrinter.print(customTagToPrint, paymentMethodName, printPdf417InReceipt) { response ->
   response.doIfSuccess { printResult ->
       // Handle the successful print

   }.doIfError { error ->
       // Handle the error in the print operation
```
```java
final BitmapPrinter bitmapPrinter = MPManager.INSTANCE.getBitmapPrinter();

/*

If you need to print a DTE, replace the custom tag string with the xml

*/
final String customTagToPrint = "{br}{b}Hello world{/b}{br}-----------------{br}{br}{s}this is a test text{/s}"

/*

Optional parameter that allows printing the name of the payment method in case you want to print an electronic receipt (DTE type 39,41). Default value: null.

*/

@Nullable
final String paymentMethodName;

/*

Optional parameter that allows printing the pdf417 barcode (the stain) in case you want to print an electronic receipt (DTE type 39,41). Default value: null.

*/
@Nullable
final Boolean printPdf417InReceipt;

final Function1<MPResponse<String>, Unit> callback = (final MPResponse<String> response) -> {
 if (response.getStatus() == ResponseStatus.SUCCESS) {
   // Handle the successful print
 } else {
   // Handle the error in the print operation

 }
 return Unit.INSTANCE;
};

bitmapPrinter.print(customTagToPrint, paymentMethodName, printPdf417InReceipt, callback);
```
]]]

------------ 