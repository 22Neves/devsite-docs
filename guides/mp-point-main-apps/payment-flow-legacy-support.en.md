# Start payment flow

To provide a seamless experience in your app, our SDKs facilitate the initialization of the payment flow through the `PaymentFlow` class. Additionally, it is necessary to use two essential functionalities:
 * `buildCallbackUri`: builds the URI to handle successful payments and errors, and allows you to define redirection routes after the payment.
 * `parseResponse`: processes and extracts the payment result from the generated URI and handles the transaction response.

> WARNING
>
> Important
>
> This method for initializing the payment flow is considered legacy. We recommend updating your integration to the [Callback method](/developers/en/docs/main-apps/payments/start-payment-flow/callback-method) for a simplified implementation.

Start your integration using our SDKs to initialize the payment flow through the `PaymentFlow` class like this:

[[[
```kotlin
val paymentFlow = MPManager.paymentFlow

val amount = "2.0"
val description = "Payment description"
val intentSuccess = paymentFlow.buildCallbackUri(
   callback = "mercadopago://smart_integrations/payment_result",
   methodCallback = "success",
   metadata = hashMapOf("message" to "testSuccess"),
   appID = "demo.app"
)
val intentError = paymentFlow.buildCallbackUri(
   callback = "mercadopago://smart_integrations/payment_result",
   methodCallback = "error",
   metadata = hashMapOf("message" to "testError"),
   appID = "demo.app"
)

val paymentFlowData = PaymentFlowData(
   amount = amount,
   description = description,
   intentSuccess = intentSuccess,
   intentError = intentError,
   paymentMethod = PaymentMethod.CREDIT_CARD.name,
   installments = 6
)
paymentFlow.launchPaymentFlowActivity(
   paymentFlowData = paymentFlowData,
   context = context
) { response ->
   response.doIfSuccess { message ->
       // Success management with a message
   }.doIfError { error ->
       // Error management
   }
}
```
```java
final PaymentFlow paymentFlow = MPManager.INSTANCE.getPaymentFlow();

final HashMap<String, String> successMetadata = new HashMap<>();
successMetadata.put("success", "testSuccess");

final HashMap<String, String> errorMetadata = new HashMap<>();
successMetadata.put("message", "testError");

final String amount = "2.0";
final String description = "Payment description";
final Uri intentSuccess = paymentFlow.buildCallbackUri(
   "mercadopago://smart_integrations/payment_result",
   "success",
   successMetadata,
   "demo.app"
);
final Uri intentError = paymentFlow.buildCallbackUri(
   "mercadopago://smart_integrations/payment_result",
   "error",
   errorMetadata,
   "demo.app"
);

final PaymentFlowData paymentFlowData = new PaymentFlowData(
   amount,
   description,
   intentSuccess,
   intentError,
   PaymentMethod.CREDIT_CARD.name(),
   6
);

final Function1<MPResponse<String>, Unit> callback = (final MPResponse<String> response) -> {
 if (response.getStatus() == ResponseStatus.SUCCESS) {
   // Success management with a message
 } else {
   // Error management
 }
 return Unit.INSTANCE;
};

paymentFlow.launchPaymentFlowActivity(paymentFlowData, context, callback);
```
]]]

| Field | Description | Required/ Optional |
|---|---|
|**amount (String)**| Amount used to initiate the payment flow.| Required |
|**description (String)**| Description used to initiate the payment flow.| Optional |
|**intentSuccess (Uri)**| URI used to launch a deeplink that redirects to the success screen. For proper functioning, it is necessary to use the additional functionality `buildCallbackUri`. For more information, see [Build a URI to open the payment flow](/developers/en/docs/main-apps/payments/start-payment-flow#bookmark_build_a_uri_to_open_the_payment_flow). | Required |
|**intentError (Uri)**| URI used to launch a deeplink that redirects to the error screen. For proper functioning, it is necessary to use the additional functionality `buildCallbackUri`. For more information, see [Build a URI to open the payment flow](/developers/en/docs/main-apps/payments/start-payment-flow#bookmark_build_a_uri_to_open_the_payment_flow). | Required |
|**paymentMethod (String)**| Payment method to perform the operation. | Optional |
|**installments (Integer)**| Number of installments used to initiate the payment flow. It is **available only for Brazil**. | Optional |
|**printOnTerminal (Boolean)**| Flag that allows automatic printing on the device. By default, it is set to `true`. | Optional |
|**launchPaymentFlowActivity**| This method initiates the payment flow using the SmartPOS app. |
|**paymentFlowData (PaymentFlowData)**| Data model required to open the flow. |
|**context (Context)**| Context from where the flow will be initiated. |
|**callback (MPResponse&lt;String&gt; -> Unit)**| Provides the result of opening the payment flow. |

## Build a URI to open the payment flow

The feature `buildCallbackUri` is designed to build a valid URI that allows you to open a specific activity, based on the deeplink strategy. To access, use the `PaymentFlow` instance through the `MPManager` object.

> WARNING
>
> Attention
>
> Correctly set up your deeplink in your `AndroidManifest` so that the corresponding activity leads to the request.

Check how to implement this feature:

[[[
```kotlin
val paymentFlow = MPManager.paymentFlow

val uriResult = paymentFlow.buildCallbackUri(
   callback = "tuHost://tuApp/result",
   methodCallback = "error",
   metadata = hashMapOf("message" to "result"),
   appID = "demo.app"
)
```
```java
final PaymentFlow paymentFlow = MPManager.INSTANCE.getPaymentFlow();

final HashMap<String, String> resultMetadata = new HashMap<>();
resultMetadata.put("message", "result");

final Uri uriResult = paymentFlow.buildCallbackUri(
   "tuHost://tuApp/result",
   "error",
   resultMetadata,
   "demo.app"
);
```
]]]

|Field|Description|
|---|---|
|**callback (String)**| The value of the URI to request the deeplink. E.g.: `yourHost://tuApp/test`.|
|**methodCallback (String)**| Identifies if the URI is for a success, error or another custom response. |
|**metadata (HashMap&lt;String, String&gt;)**| Optional field to send information to the response screen, in case it’s necessary to show additional details, like the name of the customer or the summary of the products that were purchased.|
|**appID (String)**| Identifier of the main app. We use the package name. E.g.: `com.yourcompany.yourapp`.|
|**Uri**| the URI defined with the information provided.|

## Get the payment response

The feature `parseResponse` of the `PaymentFlow` class is used to receive the result of the payment flow, which is delivered as the `PaymentResponse` object. This object contains the following information:
    - **Payment method used;**
    - **Payment reference;**
    - **Creation date;**
    - **Payment amount;**
    - **Serial number of the POS machine;**
    - **Card brand;**
    - **Number of installments;**
    - **Last four digits of the card;**
    - **Any errors associated with the transaction.**

Check how to implement this feature:

[[[
```kotlin
intent.data?.let { data ->
   val response = paymentFlow.parseResponse(data)
   if (response.paymentReference.isNotEmpty()) {
       // Payment management with success case
   } else {
       // Payment management with an error
   }
}
```
```java
final PaymentFlow paymentFlow = MPManager.INSTANCE.getPaymentFlow();

final Uri resultUri = getIntent().getData();
final PaymentResponse response = paymentFlow.parseResponse(resultUri);

if (!response.getPaymentReference().isEmpty()) {
 // Payment management with success case
} else {
 // Payment management with an error
}
```
]]]

|Field|Description|
|---|---|
|**response (Uri)**| The response received by the [SmartPOS](/developers/en/docs/mp-point/landing). To find it, use `intent.data` of the Activity in charge of opening the deeplink set within the `buildCallbackUri` feature.|
|**PaymentResponse**| Object that contains transaction details. If the response is null, it brings a `PaymentResponse` object with a `paymentStatusError`.|
|**paymentMethod**| Payment method used to complete the transaction. E.g.: credit card, debit card, QR code, payment link. |
|**paymentReference**| Unique transaction identifying number.|
|**paymentCreationDate**| Creation date of the transaction.|
|**paymentAmount**| Payment amount.|
|**paymentSnDevice**| Serial number of the POS machine with which the transaction was done.|
|**paymentBrandName**| User name registered in the POS machine.|
|**paymentInstallments**| Number of installments that a person selected when completing the payment. |
|**paymentLastFourDigits**| Last four digits of the card used for the payment.|
|**paymentStatusError**| Field to register transaction problems or errors.|

> WARNING
>
> Attention
>
> Make sure that the response of the payment flow is valid and contains the necessary information.