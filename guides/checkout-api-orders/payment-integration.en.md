#  Configure payment methods

With ----[mlb]---- Checkout Transparente,------------ ----[mla, mlm]---- Checkout API,------------ you can choose which payment methods you want to make available in online stores.

The integration process is based on the **individual configuration of each of these payment methods within the previously established common environment**, which facilitates the integration experience while allowing for a greater level of customization.

If you want to, you can check a detailed list of all these payment methods available for integration by sending a **GET** with your :toolTipComponent[Access Token]{content="Private key of the application created in Mercado Pago, that must be used in the backend. You can access it through *Your integrations > Application details > Testing > Testing Credentials* or *Production > Production Credentials*."} to the endpoint :TagComponent{tag="API" text="/v1/payment_methods" href="/developers/en/reference/payment_methods/_payment_methods/get"} and execute the request, or if you prefer, use one of the code snippets below.

[[[
```php
<?php
  use MercadoPago\MercadoPagoConfig;

  MercadoPagoConfig::setAccessToken("ENV_ACCESS_TOKEN");

  $client = new PaymentMethodClient();
  $payment_method = $client->get();

?>
```
```node
import { MercadoPagoConfig, PaymentMethods } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: 'access_token' });
const paymentMethods = new PaymentMethods(client);

paymentMethods.get().then((result) => console.log(result))
  .catch((error) => console.log(error));
```
```java
MercadoPagoConfig.setAccessToken("ENV_ACCESS_TOKEN");

PaymentMethodClient client = new PaymentMethodClient();
client.list();

```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_methods_response = sdk.payment_methods.get()
payment_methods = payment_methods_response[:response]

```
```csharp
using MercadoPago.Client.PaymentMethod;
using MercadoPago.Config;
using MercadoPago.Resource;
using MercadoPago.Resource.PaymentMethod;

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var client = new PaymentMethodClient();
ResourcesList<PaymentMethod> paymentMethods = await client.ListAsync();

```
```python
import mercadopago
sdk = mercadopago.SDK("ACCESS_TOKEN")

payment_methods_response = sdk.payment_methods().list_all()
payment_methods = payment_methods_response["response"]
```
```curl
curl -X GET \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/payment_methods' \
```
]]]

With this information, you can now select the payment methods you want to offer and proceed with your integration.

----[mlb]----

---
future_product_avaible:
 - card_avaible: true
 - card_icon: Card
 - card_title: Cards
 - card_description: Securely receive payments with credit or debit cards through a payment form within the checkout.
 - card_button: /developers/en/docs/checkout-api-v2/payment-integration/cards
 - card_buttonDescription: How to integrate
 - card_pillText: AVAILABLE
 - card_linkAvailable: false
 - card_linkProof: 
 - card_linkProofDescription:
 - card_avaible: true
 - card_icon: QRCode
 - card_title: Pix
 - card_description: Receive instant electronic payments by offering your customers a QR code or a payment code.
 - card_button: /developers/en/docs/checkout-api-v2/payment-integration/pix
 - card_buttonDescription: How to integrate
 - card_pillText: AVAILABLE
 - card_linkAvailable: false
 - card_linkProof: 
 - card_linkProofDescription:
 - card_avaible: true
 - card_icon: Boleto
 - card_title: Boleto
 - card_description: Receive the payments that the customer makes through Boleto bancário in your account.
 - card_button: /developers/en/docs/checkout-api-v2/payment-integration/boleto
 - card_buttonDescription: How to integrate
 - card_pillText: AVAILABLE
 - card_linkAvailable: false
 - card_linkProof: 
 - card_linkProofDescription:
---

------------
----[mla]----

---
future_product_avaible:
 - card_avaible: true
 - card_icon: Card
 - card_title: Cards
 - card_description: Securely receive payments with credit or debit cards through a payment form within the checkout.
 - card_button: /developers/en/docs/checkout-api-v2/payment-integration/cards
 - card_buttonDescription: How to integrate
 - card_pillText: AVAILABLE
 - card_linkAvailable: false
 - card_linkProof: 
 - card_linkProofDescription:
 - card_avaible: true
 - card_icon: Cash
 - card_title: Other payment methods
 - card_description: Receive the deferred payments that the customer makes through Rapipago or Pago Fácil in your account.
 - card_button: /developers/en/docs/checkout-api-v2/payment-integration/other-payment-methods
 - card_buttonDescription: How to integrate
 - card_pillText: AVAILABLE
 - card_linkAvailable: false
 - card_linkProof: 
 - card_linkProofDescription:
---
------------
----[mlm]----

---
future_product_avaible:
 - card_avaible: true
 - card_icon: Card
 - card_title: Cards
 - card_description: Securely receive payments with credit or debit cards through a payment form within the checkout.
 - card_button: /developers/en/docs/checkout-api-v2/payment-integration/cards
 - card_buttonDescription: How to integrate
 - card_pillText: AVAILABLE
 - card_linkAvailable: false
 - card_linkProof: 
 - card_linkProofDescription:
 - card_avaible: true
 - card_icon: Cash
 - card_title: Other payment methods
 - card_description: Receive the deferred payments that the customer makes through OXXO, Paycash, Citibanamex, Santander or BBVA Bancomer in your account.
 - card_button: /developers/en/docs/checkout-api-v2/payment-integration/other-payment-methods
 - card_buttonDescription: How to integrate
 - card_pillText: AVAILABLE
 - card_linkAvailable: false
 - card_linkProof: 
 - card_linkProofDescription:
 - card_avaible: true
 - card_icon: BankTransfer
 - card_title: SPEI Transfers
 - card_description: Receive instant electronic payments by offering your customers the option to pay from any bank or financial institution using their CLABE.
 - card_button: /developers/es/docs/checkout-api-v2/payment-integration/spei
 - card_buttonDescription: How to integrate
 - card_pillText: AVAILABLE
 - card_linkAvailable: false
 - card_linkProof: 
 - card_linkProofDescription:
---

------------