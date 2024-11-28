# Iniciar câmera via callback

Esta modalide centraliza o fluxo de lançamento da câmera scanner em um único método, `launchScanner`, que junto com a utilização de callbacks para o manuseio de respostas, simplifica o processo de implementação e leitura de códigos.

Para essa implementação, você deverá diferenciar qual tipo de código deseja escanear através da classe `ScanType`, e fornecer o callback a ser chamado com o resultado da operação, como mostrado no exemplo abaixo e nas descrições dos campos a serem preenchidos.

[[[
```kotlin
val cameraScanner = MPManager.cameraScanner
/**
* iniciar câmera para escanear código QR
**/
cameraScanner.launchScanner(ScanType.CAMERA_SCANNER_QR) { response ->
   response
       .doIfSuccess { result -> // Manuseio do resultado de sucesso do scanner result.message } 

       .doIfError { error -> // Manuseio do erro resultante do scanner error.message.orEmpty() }

}

/**
* iniciar câmera para escanear código de barras
**/

cameraScanner.launchScanner(ScanType.CAMERA_SCANNER_BARCODE) { response ->
   response
       .doIfSuccess { result -> // Manuseio do resultado de sucesso do scanner result.message } 

       .doIfError { error -> // Manuseio do erro resultante do scanner error.message.orEmpty() }

}
```
```java
final CameraScanner cameraScanner = MPManager.INSTANCE.getCameraScanner();
final Function<MPResponse<CameraScannerResponse>, Unit> callback = new Function<MPResponse<CameraScannerResponse>, Unit>() {
   @Override
   public Unit apply(MPResponse<CameraScannerResponse> response) {
       if (response.getStatus() == ResponseStatus.SUCCESS) {

           // Manusear a resposta bem-sucedida
           CameraScannerResponse cameraScannerResponse = response.getData();

           String result = cameraScannerResponse.getMessage();
           // ... Fazer algo com o resultado
       } else {

           // Manusear o erro na resposta
           String errorMessage = response.getError();
           // ... Fazer algo com o erro
       }
       return Unit.INSTANCE;
   }
};

/**
* Iniciar o escâner de câmera QR ou Barra com o callback: ScanType.CAMERA_SCANNER_QR - ScanType.CAMERA_SCANNER_BARCODE
*/

cameraScanner.launchScanner(ScanType.CAMERA_SCANNER_QR, callback);
```
]]]

| Campo | Descrição | 
|---|---|
|**ScanType**| Classe que contém os tipos de código a serem lidos pela câmera. Os valores possíveis são:<br><br> - `CAMERA_SCANNER_QR`: representa a leitura de códigos QR.<br><br> - `CAMERA_SCANNER_BARCODE`: representa a leitura de códigos de barras.|
|**callback (MPResponse<CameraScannerResponse>) -> Unit**| Callback a ser invocado com o resultado da operação do escâner. Recebe um objeto `MPResponse` com um `CameraScannerResponse`.|