# Launch Camera via Callback

This mode centralizes the flow of launching the scanner camera in a single method, `launchScanner`, which, along with the use of callbacks for handling responses, simplifies the implementation and reading of codes.

For this implementation, you will need to differentiate which type of code you want to scan using the `ScanType` class, and provide the callback to be invoked with the result of the operation, as shown in the example below and in the descriptions of the fields to be completed.

[[[
```kotlin
val cameraScanner = MPManager.cameraScanner
/**
* launch camera for QR scanner code
**/
cameraScanner.launchScanner(ScanType.CAMERA_SCANNER_QR) { response ->
   response
       .doIfSuccess { result -> // Handling the successful scanner result result.message }

       .doIfError { error -> // Handling the error resulting from the scanner error.message.orEmpty() }

}

/**
* launch camera for Barcode scanner
**/

cameraScanner.launchScanner(ScanType.CAMERA_SCANNER_BARCODE) { response ->
   response
       .doIfSuccess { result -> // Handling the successful scanner result result.message }

       .doIfError { error -> // Handling the error resulting from the scanner error.message.orEmpty() }

}
```
```java
final CameraScanner cameraScanner = MPManager.INSTANCE.getCameraScanner();
final Function<MPResponse<CameraScannerResponse>, Unit> callback = new Function<MPResponse<CameraScannerResponse>, Unit>() {
   @Override
   public Unit apply(MPResponse<CameraScannerResponse> response) {
       if (response.getStatus() == ResponseStatus.SUCCESS) {

           // Handle the successful response
           CameraScannerResponse cameraScannerResponse = response.getData();

           String result = cameraScannerResponse.getMessage();
           // ... Do something with the result
       } else {

           // Handle the error in the response
           String errorMessage = response.getError();
           // ... Do something with the error
       }
       return Unit.INSTANCE;
   }
};

/**
* Launch the camera scanner for QR or Barcode with the callback: ScanType.CAMERA_SCANNER_QR - ScanType.CAMERA_SCANNER_BARCODE
*/

cameraScanner.launchScanner(ScanType.CAMERA_SCANNER_QR, callback);
```
]]]

| Field | Description | 
|---|---|
|**ScanType**| Class that contains the types of codes to be read by the camera. Possible values are:<br><br> - `CAMERA_SCANNER_QR`: represents the reading of QR codes.<br><br> - `CAMERA_SCANNER_BARCODE`: represents the reading of barcodes.|
|**callback (MPResponse<CameraScannerResponse>) -> Unit**| Callback to be invoked with the result of the scanner operation. Receives an `MPResponse` object with a `CameraScannerResponse`.|