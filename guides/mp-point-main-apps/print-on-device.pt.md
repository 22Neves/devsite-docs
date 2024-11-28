# Impressões

É possível utilizar a impressora térmica dos dispositivos Point Smart para realizar impressões de imagens em bitmap ----[mlc]----, DTE,------------ ou imagens personalizadas a partir de padrões chamados Custom Tags.

> NOTE
>
> Nota
>
> Se você deseja realizar impressões com uma impressora externa, deverá emparelhá-la com seu dispositivo utilizando a funcionalidade Bluetooth. Acesse [Imprimir com uma impressora externa](/developers/pt/docs/main-apps/bluetooth/print-external-printer) para mais informações. 

## Imprimir Bitmap

Para imprimir imagens em bitmap com a impressora da Point Smart, use a **função print** da classe `BitmapPrinter`. O acesso ocorre por meio do objeto `MPManager`, como no exemplo a seguir:

[[[
```kotlin
val bitmapPrinter = MPManager.bitmapPrinter

val imageToPrint: Bitmap = bitmap // Obter a imagem bitmap que será impressa

bitmapPrinter.print(imageToPrint) { response ->
   response.doIfSuccess { printResult ->
       // Manejar la impresión exitosa
   }.doIfError { error ->
       // Manejar el error en la operación de impresión
```
```java
final BitmapPrinter bitmapPrinter = MPManager.INSTANCE.getBitmapPrinter();

final Bitmap imageToPrint = bitmap // Obtener la imagen Bitmap que se imprimirá

final Function1<MPResponse<String>, Unit> callback = (final MPResponse<String> response) -> {
 if (response.getStatus() == ResponseStatus.SUCCESS) {
   // Manejar la impresión exitosa
 } else {
   // Manejar el error en la operación de impresión
 }
 return Unit.INSTANCE;
};

bitmapPrinter.print(imageToPrint, callback);
```
]]]

|Campo|Descrição|
|---|---|
|**dataToPrint (Bitmap)**| A imagem bitmap que será impressa.|
|**callback ((MPResponse&lt;String&gt;) -> Unit)**| Função de devolução da chamada que proporciona o resultado da operação de impressão. O `[MPResponse]` encapsula o estado, o erro (se houver) e os dados em caso de sucesso, que contêm um String representando o ID ou estado da impressão.|

----[mla, mlm , mlb]----
## Imprimir Custom Tag

A função `print` da classe `BitmapPrinter` em nosso SDK também pode ser utilizada para criar impressões personalizadas. Isso é realizado a partir de um padrão, chamado Custom Tag, que consiste em enviar uma string com diferentes tags de controle para sua posterior interpretação por nosso sistema, resultando em um comprovante físico.

A seguir, é mostrado um exemplo de como essa funcionalidade pode ser implementada:

[[[
```kotlin
val bitmapPrinter = MPManager.bitmapPrinter

val customTagToPrint: String = "{br}{b}Olá mundo{/b}{br}-----------------{br}{br}{s}este é um texto de  teste{/s}" 

/*

Parâmetro opcional que permite imprimir o nome do método de pagamento usado.

*/

val paymentMethodName: String? = null

/*

Parâmetro opcional que permite imprimir o código de barras pdf417 (a mancha). Valor padrão: null

*/

val printPdf417InBoleta: Boolean? = null

bitmapPrinter.print(customTagToPrint, paymentMethodName, printPdf417InBoleta) { response ->
   response.doIfSuccess { printResult ->
       // Manter a impressão bem-sucedida

   }.doIfError { error ->
       // Tratar o erro na operação de impressão
```
```java
final BitmapPrinter bitmapPrinter = MPManager.INSTANCE.getBitmapPrinter();

final String customTagToPrint = "{br}{b}Olá mundo{/b}{br}-----------------{br}{br}{s}este é um texto de teste{/s}"

/*

Parâmetro opcional que permite imprimir o nome do método de pagamento.

*/

@Nullable
final String paymentMethodName;

/*

Parâmetro opcional que permite imprimir o código de barras pdf417 (a mancha).

*/
@Nullable
final Boolean printPdf417InBoleta;

final Function1<MPResponse<String>, Unit> callback = (final MPResponse<String> response) -> {
 if (response.getStatus() == ResponseStatus.SUCCESS) {
   // Manter a impressão bem-sucedida
 } else {
   // Tratar o erro na operação de impressão

 }
 return Unit.INSTANCE;
};

bitmapPrinter.print(customTagToPrint, paymentMethodName, printPdf417InBoleta, callback);
```
]]] 

------------ 

----[mlc]----

## Imprimir Custom Tag e DTE

A função `print` da classe `BitmapPrinter` em nosso SDK também pode ser utilizada para criar impressões personalizadas ou DTEs.

No primeiro caso, a impressão é realizada a partir de um padrão chamado Custom Tag, que consiste em enviar uma string com diferentes tags de controle para sua posterior interpretação por nosso sistema, resultando em um comprovante físico.

No caso do DTE, a impressão é feita enviando como parâmetro um `.xml` da transação.

Você pode ver a seguir como implementar impressões de Custom Tags e DTEs.

[[[
```kotlin
val bitmapPrinter = MPManager.bitmapPrinter

/*

Se você precisa imprimir um DTE, troque a string custom tag pelo xml.

*/

val customTagToPrint: String = "{br}{b}Olá mundo{/b}{br}-----------------{br}{br}{s}este é um texto de teste{/s}"

/*

Parâmetro opcional que permite imprimir o nome do método de pagamento usado em caso de querer fazer a impressão de um recibo eletrônico (DTE tipo 39,41). Valor padrão: null.

*/

val paymentMethodName: String? = null

/*

Parâmetro opcional que permite imprimir o código de barras pdf417 (a mancha) em caso de querer fazer a impressão de um recibo eletrônico (DTE tipo 39,41). Valor padrão: null.

*/

val printPdf417InBoleta: Boolean? = null

bitmapPrinter.print(customTagToPrint, paymentMethodName, printPdf417InBoleta) { response ->
   response.doIfSuccess { printResult ->
       // Manter a impressão bem-sucedida

   }.doIfError { error ->
       // Tratar o erro na operação de impressão
```
```java
final BitmapPrinter bitmapPrinter = MPManager.INSTANCE.getBitmapPrinter();
/*

Se você precisa imprimir um DTE, troque a string custom tag pelo xml.

*/
final String customTagToPrint = "{br}{b}Olá mundo{/b}{br}-----------------{br}{br}{s}este é um texto de teste{/s}"

/*

Parâmetro opcional que permite imprimir o nome do método de pagamento em caso de querer fazer a impressão de um recibo eletrônico (DTE tipo 39,41). Valor padrão: null.

*/

@Nullable
final String paymentMethodName;

/*

Parâmetro opcional que permite imprimir o código de barras pdf417 (a mancha) em caso de querer fazer a impressão de um recibo eletrônico (DTE tipo 39,41). Valor padrão: null.

*/
@Nullable
final Boolean printPdf417InBoleta;

final Function1<MPResponse<String>, Unit> callback = (final MPResponse<String> response) -> {
 if (response.getStatus() == ResponseStatus.SUCCESS) {
   // Manter a impressão bem-sucedida
 } else {
   // Tratar o erro na operação de impressão

 }
 return Unit.INSTANCE;
};

bitmapPrinter.print(customTagToPrint, paymentMethodName, printPdf417InBoleta, callback);
```

------------ 