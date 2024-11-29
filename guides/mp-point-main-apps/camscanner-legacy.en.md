# Legacy Method for launching the camera

The `initBarcodeScanner` function of the `CameraScanner` class in our SDK is used to invoke the code reading functionality found in the Point Smart device. In addition, an extra function must be implemented in the activity that uses it to handle the reading response.

> WARNING
>
> Important
>
> This method to launch the camera scanner is considered legacy. We recommend updating your integration to the [Callback method](/developers/en/docs/main-apps/camscanner/callback) for a simplified implementation.

Check how to initiate the reading of QR codes and barcodes, and how to handle the responses below.


## Barcodes

To start reading barcodes codes with the Point Smart, begin by using the `initBarcodeScanner` function of the `CameraScanner` class.

This process makes a camera call through `startActivityForResult`, so the `onActivityResult` method allows you to manage the reading response.

For its implementation, see the example below.

[[[
```kotlin
val cameraScanner = MPManager.cameraScanner
cameraScanner.initBarcodeScanner(this@YourActivity)
```
```java
final CameraScanner cameraScanner = MPManager.INSTANCE.getCameraScanner();
cameraScanner.initBarcodeScanner(this);
```
]]]

## QR code

To start reading QR codes with the Point Smart, begin by using the `initBarcodeScanner` function of the `CameraScanner` class.

This process makes a camera call through `startActivityForResult`, so the `onActivityResult` method allows you to manage the reading response.

For its implementation, see the example below.

[[[
```kotlin
val cameraScanner = MPManager.cameraScanner
cameraScanner.initQRCodeScanner(this@YourActivity)
```
```java
final CameraScanner cameraScanner = MPManager.INSTANCE.getCameraScanner();
cameraScanner.initQRCodeScanner(this);
```
]]]

## Process scanner response

To manage the response of a **QR code** or **barcode** scanning activity, use the `handleQrResponse` feature of the `CameraScanner` class from the `onActivityResult` method. 

This function processes the scanner result from the camera, validating the response and invoking the appropriate callback based on the result. It receives an `MPResponse` object with a `[CameraScannerResponse]`, representing the reading response.

This method simplifies the process of handling the responses from the QR code or barcode scanner in the `onActivityResult` method, processing the scanner result from the camera, validating the response, and invoking the appropriate callback based on the result.

Check how that takes place below.

[[[
```kotlin
override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
   super.onActivityResult(requestCode, resultCode, data)

   val cameraScanner = MPManager.cameraScanner

   cameraScanner.handleScannerResponse(this, resultCode, data) { response ->
       response.doIfSuccess { result ->
           // Manage successful response
           val status = result.status
           val message = result.message
           // ... Do something with the response
       }.doIfError { error ->
           // Manage the error in the response
           val errorMessage = error.message
           // ... Do something with the error
        }
    }
}
```
```java
@Override
protected void onActivityResult(final int requestCode, final int resultCode, final Intent data) {
 super.onActivityResult(requestCode, resultCode, data);

 final CameraScanner cameraScanner = MPManager.INSTANCE.getCameraScanner();
 final Function1<MPResponse<CameraScannerResponse>, Unit> callback = (final MPResponse<CameraScannerResponse> response) -> {

   if (response.getStatus() == ResponseStatus.SUCCESS) {
     final CameraScannerResponse cameraScannerResponse = response.getData();
     // Manage successful response
     final String result = response.getData().getMessage();
     // ... Do something with the response
   } else {
     // Manage the error in the response
     final Exception errorMessage = response.getError();
     // ... Do something with the error
   }
   return Unit.INSTANCE;
 };

 cameraScanner.handleScannerResponse(this, resultCode, data, callback);
}
```
]]]

|Field|Description|
|---|---|
|**resultCode (Int)**| Value of the `resultCode` in `onActivityResult`.|
|**resultData (Intent?)**| Date result in `onActivityResult`.|
|**MPResponse&lt;CameraScannerResponse&gt;**| Object [MPResponse] that includes the status, the error (if any), and the details in case of success, which contain an `CameraScannerResponse` object.|
|**status (CameraScannerStatus)**| Defines the status of the response. It can be "Ok" (it read it successfully), **Error** (something went wrong and it was cancelled) or **Unknown** (something went wrong).|
|**message (String)**| Defines the response message received by the scanner. If it’s  ”Ok”, it will have the result of the reading of the code.|
