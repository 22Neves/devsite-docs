# Callback Method

The callback method is a simple way to initialize the payment flow with Main Apps. It uses the new `launchPaymentFlow` method in the `PaymentFlow` class and allows for response handling through callbacks, making implementation and subsequent management easier.

Start your integration using our SDKs to initialize the payment flow through the `PaymentFlow` class as follows:

[[[
```kotlin
val paymentFlow = MPManager.paymentFlow

val paymentFlowRequestData = PaymentFlowRequestData(

   amount = 10.0,

   description = "test description",

   paymentMethod = PaymentMethod.CREDIT_CARD.name,

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

   6, // optional field if launching the payment in installments. 

   false // optional field if launching the payment without printing in terminal

);



final Function1<MPResponse<PaymentResponse>, Unit> callback = (final MPResponse<PaymentResponse> response) -> {

 if (response.getStatus() == ResponseStatus.SUCCESS) {

   // Success handling using a message

 } else {

   // Error handling 

 }

 return Unit.INSTANCE;

};

paymentFlow.launchPaymentFlow(paymentFlowData, callback);
```
]]]

| Field | Description |
|---|---|
|**paymentFlowData (PaymentFlowData)**| Data model required to open the flow.|
|**callback (MPResponse<PaymentResponse> -> Unit)**| The callback will be invoked with the result of the payment operation. It receives an `MPResponse` object with a `PaymentResponse`.|
|**amount (String)**| Amount used to initiate the payment flow.|
|**description (String)**| Optional. Description used to initiate the payment flow.|
|**paymentMethod (String)**| Optional. Payment method to perform the operation. |
|**installments (Integer)**| Optional. Number of installments used to initiate the payment flow. It is **only available for Brazil**. |
|**printOnTerminal (Boolean)**| Optional. Flag that allows automatic printing on the device. By default, it is set to `true`.  |

When the payment operation is processed, you will receive an `MPResponse` object with a `PaymentResponse` that will contain all the relevant information, as shown in the descriptions below.

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


| Field | Description |
|---|---|
|**paymentMethod**| Payment method used to perform the transaction. |
|**paymentReference**| Number that serves as a unique identifier for the transaction. |
|**paymentCreationDate**| Creation date of the transaction. |
|**Paymentamount**| Amount used to initiate the payment flow.|
|**paymentSnDevice**| Serial number of the device where the transaction was made.|
|**paymentBrandName**| Value of the franchise used to make the payment. |
|**paymentInstallments:**| Number of installments/months that the customer chose when making the payment. |
|**paymentLastFourDigits**| Last four digits of the customer's card used for the payment. |
|**paymentStatusError**| Field for tracking problems and errors related to the transaction. |