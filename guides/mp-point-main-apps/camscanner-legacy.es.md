# Método legacy para lanzar cámara

La función `initBarcodeScanner` de la clase `CameraScanner` en nuestro SDK se utiliza para invocar la funcionalidad de lectura de códigos que se encuentra en el dispositivo Point Smart. Además, debe implementarse una función adicional en la actividad que lo utiliza para manipular la respuesta de lectura.

> WARNING
>
> Importante
>
> Este método para lanzar la cámara scanner es considerado _legacy_. Recomendamos actualizar tu integración al [método Callback](/developers/es/docs/main-apps/camscanner/callback) para contar con una implementación simplificada.

Consulta cómo iniciar la lectura de códigos QR y de barras, y cómo manejar las respuestas, a continuación.


## Código de barras

Para iniciar la lectura de códigos de barras del Point Smart, comienza por utilizar la función `initBarcodeScanner` de la clase `CameraScanner`. 

Este proceso usa un llamado de cámara a través de `startActivityForResult`, de modo que el método `onActivityResult`  permita gestionar la respuesta de lectura.

Para su implementación, consulta el ejemplo a continuación.

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

## Código QR

Para iniciar la lectura de códigos QR del Point Smart, comienza por utilizar la función `initBarcodeScanner` de la clase `CameraScanner`. 

Este proceso usa un llamado de cámara a través de `startActivityForResult`, de modo que el método `onActivityResult`  permita gestionar la respuesta de lectura.

Para su implementación, consulta el ejemplo a continuación.

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

## Procesar la respuesta del escáner

Para gestionar la respuesta de una actividad de escaneo de **código QR** o de **código de barras**, usa la función `handleQrResponse` de la clase `CameraScanner` en el método `onActivityResult`. 

Esta función procesa el resultado del scanner desde la cámara, validando la respuesta e invocando el callback apropiado según el resultado. Recibe un objeto `MPResponse` con un `[CameraScannerResponse]`, representando la respuesta de lectura.

Consulta cómo procesar la respuesta.

[[[
```kotlin
override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
   super.onActivityResult(requestCode, resultCode, data)

   val cameraScanner = MPManager.cameraScanner

   cameraScanner.handleScannerResponse(this, resultCode, data) { response ->
       response.doIfSuccess { result ->
           // Manejar la respuesta exitosa
           val status = result.status
           val message = result.message
           // ... Hacer algo con la respuesta
       }.doIfError { error ->
           // Manejar el error en la respuesta
           val errorMessage = error.message
           // ... Hacer algo con el error
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
     // Manejar la respuesta exitosa
     final String result = response.getData().getMessage();
     // ... Hacer algo con la respuesta
   } else {
     // Manejar el error en la respuesta
     final Exception errorMessage = response.getError();
     // ... Hacer algo con el error
   }
   return Unit.INSTANCE;
 };

 cameraScanner.handleScannerResponse(this, resultCode, data, callback);
}
```
]]]

|Campo|Descripción|
|---|---|
|**resultCode (Int)**| Valor del `resultCode` en `onActivityResult`.|
|**resultData (Intent?)**| Valor de la fecha en `onActivityResult`.|
|**MPResponse&lt;CameraScannerResponse&gt;**| Objeto `[MPResponse]` que encapsula el estado, el error (si lo hay) y los datos en caso de éxito, que tiene un objeto `CameraScannerResponse`.|
|**status (CameraScannerStatus)**| Define el estado de la respuesta. Puede ser "Ok" (la lectura fue exitosa), **Error** (hubo un error o la lectura se canceló) o **Unknown** (hubo algún error indeterminado).|
|**message (String)**| Define el mensaje de la respuesta recibida por escaner. Si es ”Ok”, tendrá el resultado de la lectura del código.|