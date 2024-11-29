# Método callback

El método callback es un modo sencillo para inicializar el flujo de pago con Main Apps. Utiliza el nuevo método `launchPaymentFlow` en la clase `PaymentFlow` y permite el manejo de respuestas a través de callbacks, lo que facilita su implementación y la gestión posterior. 

Comienza tu integración utilizando nuestros SDKs para inicializar el flujo de pago a través de la clase `PaymentFlow` de la siguiente manera:

[[[
```kotlin
val paymentFlow = MPManager.paymentFlow

val paymentFlowRequestData = PaymentFlowRequestData(

   amount = 10.0,

   description = "test description",

   paymentMethod = PaymentMethod.CREDIT_CARD.name,

   installments = 6, // campo opcional si lanza el pago con cuotas 

   printOnTerminal = false // campo opcional si lanza el pago sin impresión en la terminal

)

paymentFlow.launchPaymentFlow(

   paymentFlowRequestData = paymentFlowRequestData

) { response ->

   response.doIfSuccess { result ->

       // manejo de éxito utilizando un mensaje

   }.doIfError { error ->

       // manejo del error

   }

}
```
```java
final PaymentFlow paymentFlow = MPManager.INSTANCE.getPaymentFlow();

final String amount = "2.0";

final String description = "Payment description";

final PaymentFlowData paymentFlowData = new PaymentFlowData(

   amount,

   description,

   PaymentMethod.CREDIT_CARD.name(),

   6, // campo opcional si lanza el pago con cuotas 

   false // campo opcional si lanza el pago sin impresión en la terminal

);



final Function1<MPResponse<PaymentResponse>, Unit> callback = (final MPResponse<PaymentResponse> response) -> {

 if (response.getStatus() == ResponseStatus.SUCCESS) {

   // manejo de éxito utilizando un mensaje

 } else {

   // manejo del error

 }

 return Unit.INSTANCE;

};

paymentFlow.launchPaymentFlow(paymentFlowData, callback);
```
]]]

| Campo | Descripción |
|---|---|
|**paymentFlowData (PaymentFlowData)**| Modelo de datos necesario para la apertura del flujo.|
|**callback (MPResponse<PaymentResponse> -> Unit)**| El callback será invocado con el resultado de la operación del pago. Recibe un objeto `MPResponse` con un `PaymentResponse`.|
|**amount (String)**| Monto usado para iniciar el flujo de pago.|
|**description (String)**| Opcional. Descripción usada para iniciar el flujo de pago.|
|**paymentMethod (String)**| Opcional. Medio de pago para realizar la operación. |
|**installments (Integer)**| Opcional. Número de cuotas usado para iniciar el flujo de pago. Está **disponible solo para Brasil**. |
|**printOnTerminal (Booleano)**| Opcional. Flag que permite imprimir de forma automática  en el dispositivo. Por defecto está en `true`.  |

Al ser procesada la operación del pago, recibirás un objeto `MPResponse` con un `PaymentResponse` que contendrá toda la información relativa al mismo, como mostramos en las descripciones a continuación.

[[[
```kotlin
val paymentResponse = PaymentResponse(
    paymentType = "paymentType",
    paymentReference = "paymentReference",
    paymentCreationDate = "paymentCreationDate",
    paymentAmount = 123,
    paymentSnDevice = "paymentSnDevice",
    paymentInstallments = "paymentInstallments",
    paymentBrandName = "paymentBrandName",
    paymentLastFourDigits = "paymentLastFourDigits",
    statusError = ""
)
```
```java
PaymentResponse paymentResponse = new PaymentResponse(
            "paymentType",
            "paymentReference",
            "paymentCreationDate",
            123,
            "paymentSnDevice",
            "paymentInstallments",
            "paymentBrandName",
            "paymentLastFourDigits",
            "statusError"
        );
```
]]]


| Campo | Descripción |
|---|---|
|**paymentMethod**| Medio de pago para realizar la transacción. |
|**paymentReference**|  Número que sirve como identificador único de la transacción. |
|**paymentCreationDate**|  Fecha de creación de la transacción. |
|**Paymentamount**| Monto usado para iniciar el flujo de pago.|
|**paymentSnDevice**| Número de serie del dispositivo en el que se realizó la transacción.|
|**paymentBrandName**| Valor de la franquicia con que se realizó el pago. |
|**paymentInstallments:**| Número de cuotas/meses que el cliente eligió al realizar el pago. |
|**paymentLastFourDigits**| Últimos cuatro dígitos de la tarjeta del cliente que realizó el pago. |
|**paymentStatusError**| Campo para registrar problemas y errores de la transacción. |
