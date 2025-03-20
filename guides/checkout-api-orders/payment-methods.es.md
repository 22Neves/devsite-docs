# Configurar medios de pago

Con ----[mlb]---- Checkout Transparente------------ ----[mla, mlm, mlu, mco, mlc, mpe]---- Checkout API ------------,, puedes elegir qué medios de pago deseas disponibilizar en tiendas online.

El proceso de integración, luego de la inclusión e inicialización de la biblioteca MercadoPago.js, se basa en la configuración individual de los medios de pago que deseas ofrecer, lo que facilita la experiencia de integración, al mismo tiempo que permite un mayor nivel de personalización. 

![diagram-configure-payment-methods](/images/api-orders/diagram-configure-payment-methods-es.png) 

Si lo deseas, puedes consultar una lista detallada de todos estos medios de pago disponibles para integración. Envía un **GET** con tu *Access Token* al endpoint [/v1/payment_methods](/developers/es/reference/payment_methods/_payment_methods/get) o, si lo prefieres, haz la solicitud utilizando uno de nuestros SDKs.

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

Con esta información, ya puedes elegir qué medios de pago deseas ofrecer y continuar con tu integración.

----[mlb]----

---
future_product_avaible:
 - card_avaible: true
 - card_icon: Card
 - card_title: Tarjeta
 - card_description: Recibe pagos con tarjetas de crédito o débito de manera segura a través de un formulario de pago dentro del checkout.
 - card_button: /developers/es/docs/checkout-api-orders/xxx
 - card_buttonDescription: Saber más
 - card_pillText: DISPONIBLE
 - card_linkAvailable: false
 - card_linkProof: 
 - card_linkProofDescription:
 - card_avaible: true
 - card_icon: Pay
 - card_title: Pix
 - card_description: Recibe pagos electrónicos instantáneos ofreciendo a tus clientes un código QR o un código de pago.
 - card_button: /developers/es/docs/checkout-api-orders/xxx
 - card_buttonDescription: Saber más
 - card_pillText: DISPONIBLE
 - card_linkAvailable: false
 - card_linkProof: 
 - card_linkProofDescription:
 - card_avaible: true
 - card_icon: Pay
 - card_title: Boleto bancário
 - card_description: Recibe en tu cuenta los pagos que el cliente realiza a través de boleto bancário.
 - card_button: /developers/es/docs/checkout-api-orders/xxx
 - card_buttonDescription: Saber más
 - card_pillText: DISPONIBLE
 - card_linkAvailable: false
 - card_linkProof: 
 - card_linkProofDescription:
 - card_avaible: false
 - card_icon: Pay
 - card_title: Cuenta Mercado Pago
 - card_description: Ofrece a los pagadores la posibilidad de utilizar cualquiera de los medios de pago guardados en su cuenta. 
 - card_button:
 - card_buttonDescription:
 - card_pillText: MUY PRONTO
 - card_linkAvailable: false
 - card_linkProof: 
 - card_linkProofDescription:
 - card_avaible: false
 - card_icon: Pay
 - card_title: Linha de Crédito
 - card_description: Brinda a los clientes la opción de pagar en veces sin contar con una tarjeta: Mercado Pago absorbe la financiación y el vendedor recibe la totalidad del dinero en su cuenta.
 - card_button:
 - card_buttonDescription:
 - card_pillText: MUY PRONTO
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
 - card_title: Tarjeta
 - card_description: Recibe pagos con tarjetas de crédito o débito de manera segura a través de un formulario de pago dentro del checkout.
 - card_button: /developers/es/docs/checkout-api-orders/xxx
 - card_buttonDescription: Saber más
 - card_pillText: DISPONIBLE
 - card_linkAvailable: false
 - card_linkProof: 
 - card_linkProofDescription:
 - card_avaible: true
 - card_icon: Pay
 - card_title: Otros medios de pago
 - card_description: Recibe en tu cuenta los pagos que el cliente realiza en diferido a través de Rapipago o Pago Fácil.
 - card_button: /developers/es/docs/checkout-api-orders/xxx
 - card_buttonDescription: Saber más
 - card_pillText: DISPONIBLE
 - card_linkAvailable: false
 - card_linkProof: 
 - card_linkProofDescription:
 - card_avaible: false
 - card_icon: Pay
 - card_title: Cuenta Mercado Pago
 - card_description: Ofrece a los pagadores la posibilidad de utilizar cualquiera de los medios de pago guardados en su cuenta de Mercado Pago.
 - card_button:
 - card_buttonDescription:
 - card_pillText: MUY PRONTO
 - card_linkAvailable: false
 - card_linkProof: 
 - card_linkProofDescription:
 - card_avaible: false
 - card_icon: Pay
 - card_title: Cuotas sin tarjeta
 - card_description: Brinda a los clientes la opción de pagar en cuotas sin contar con una tarjeta: Mercado Pago absorbe la financiación y el vendedor recibe la totalidad del dinero en su cuenta.
 - card_button:
 - card_buttonDescription:
 - card_pillText: MUY PRONTO
 - card_linkAvailable: false
 - card_linkProof: 
 - card_linkProofDescription:
------------
----[mlm]----

---
future_product_avaible:
 - card_avaible: true
 - card_icon: Card
 - card_title: Tarjeta
 - card_description: Recibe pagos con tarjetas de crédito o débito de manera segura a través de un formulario de pago dentro del checkout.
 - card_button: /developers/es/docs/checkout-api-orders/xxx
 - card_buttonDescription: Saber más
 - card_pillText: DISPONIBLE
 - card_linkAvailable: false
 - card_linkProof: 
 - card_linkProofDescription:
 - card_avaible: true
 - card_icon: Pay
 - card_title: Otros medios de pago
 - card_description: Recibe en tu cuenta los pagos que el cliente realiza en diferido a través de OXXO, Paycash, Citibanamex, Santander o BBVA Bancomer.
 - card_button: /developers/es/docs/checkout-api-orders/xxx
 - card_buttonDescription: Saber más
 - card_pillText: DISPONIBLE
 - card_linkAvailable: false
 - card_linkProof: 
 - card_linkProofDescription:
 - card_avaible: true
 - card_icon: Pay
 - card_title: Transferencia SPEI
 - card_description: Recibe pagos electrónicos instantáneos ofreciendo a tus clientes la posibilidad de pagar desde cualquier banco o institución financiera utilizando su CLABE.
 - card_button: /developers/es/docs/checkout-api-orders/xxx
 - card_buttonDescription: Saber más
 - card_pillText: DISPONÍVEL
 - card_linkAvailable: false
 - card_linkProof: 
 - card_linkProofDescription:
 - card_avaible: false
 - card_icon: Pay
 - card_title: Cuenta Mercado Pago
 - card_description: Ofrece a los pagadores la posibilidad de utilizar cualquiera de los medios de pago guardados en su cuenta 
 - card_button:
 - card_buttonDescription:
 - card_pillText: MUY PRONTO
 - card_linkAvailable: false
 - card_linkProof: 
 - card_linkProofDescription:
 - card_avaible: false
 - card_icon: Pay
 - card_title: Meses sin Tarjeta
 - card_description: Brinda a los clientes la opción de pagar en veces sin contar con una tarjeta: Mercado Pago absorbe la financiación y el vendedor recibe la totalidad del dinero en su cuenta.
 - card_button:
 - card_buttonDescription:
 - card_pillText: MUY PRONTO
 - card_linkAvailable: false
 - card_linkProof: 
 - card_linkProofDescription:
---

------------