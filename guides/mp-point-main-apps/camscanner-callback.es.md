# Lanzar cámara por callback

Esta modalidad centraliza el flujo de lanzamiento de la cámara scanner en un sólo método, `launchScanner`, que junto con la utilización de callbacks para el manejo de respuestas, simplifica el proceso de implementación y lectura de códigos. 

Para esta implementación, deberás diferenciar qué tipo de código deseas escanear mediante la clase `ScanType`, y proporcionar el callback a ser invocado con el resultado de la operación, tal como se muestra en el ejemplo a continuación y en las descripciones de los campos a completar.

[[[
```kotlin
val cameraScanner = MPManager.cameraScanner
/**
* launch camera for scanner code QR
**/
cameraScanner.launchScanner(ScanType.CAMERA_SCANNER_QR) { response ->
   response
       .doIfSuccess { result -> // Manejo del resultado success del scanner result.message } 

       .doIfError { error -> // Manejo del error que resulte del scanner error.message.orEmpty() }

}

/**
* launch camera for scanner Bar code
**/

cameraScanner.launchScanner(ScanType.CAMERA_SCANNER_BARCODE) { response ->
   response
       .doIfSuccess { result -> // Manejo del resultado success del scanner result.message } 

       .doIfError { error -> // Manejo del error que resulte del scanner error.message.orEmpty() }

}
```
```java
final CameraScanner cameraScanner = MPManager.INSTANCE.getCameraScanner();
final Function<MPResponse<CameraScannerResponse>, Unit> callback = new Function<MPResponse<CameraScannerResponse>, Unit>() {
   @Override
   public Unit apply(MPResponse<CameraScannerResponse> response) {
       if (response.getStatus() == ResponseStatus.SUCCESS) {

           // Manejar la respuesta exitosa
           CameraScannerResponse cameraScannerResponse = response.getData();

           String result = cameraScannerResponse.getMessage();
           // ... Hacer algo con el resultado
       } else {

           // Manejar el error en la respuesta
           String errorMessage = response.getError();
           // ... Hacer algo con el error
       }
       return Unit.INSTANCE;
   }
};

/**
* Lanzar el escáner de cámara QR o Barra con el callback: ScanType.CAMERA_SCANNER_QR - ScanType.CAMERA_SCANNER_BARCODE
*/

cameraScanner.launchScanner(ScanType.CAMERA_SCANNER_QR, callback);
```
]]]

| Campo | Descripción | 
|---|---|
|**ScanType**| Clase que contiene los tipos de código a ser leídos por la cámara. Los valores posibles son:<br><br> - `CAMERA_SCANNER_QR`: representa la lectura de códigos QR.<br><br> - `CAMERA_SCANNER_BARCODE`: representa la lectura de códigos de barras.|
|**callback (MPResponse<CameraScannerResponse>) -> Unit**| Callback a ser invocado con el resultado de la operación del escáner. Recibe un objeto `MPResponse` con un `CameraScannerResponse`.|
