# Reservar, capturar y cancelar fondos

Al integrar pagos con Order de modo manual, es posible procesarlos realizando una reserva de fondos y su posterior captura. Ve a continuación cómo gestionar las transacciones realizadas.

## Reserva de fondos

Una reserva de fondos ocurre cuando se realiza una compra y se reserva su monto del límite total de la tarjeta, lo que asegura que el valor se mantenga hasta la finalización del procesamiento.

Para realizar una autorización de reserva, envía un **POST** con todos los atributos necesarios detallados en nuestra [Referencia de API](/developers/es/reference/order/online-payments/create/post), incluyendo `type_config.capture_mode` definido como `manual`, al endpoint [/v1/orders](/developers/es/reference/order/online-payments/create/post).

[[[
```php
<?php
  use MercadoPago\Client\Payment\PaymentClient;


  MercadoPagoConfig::setAccessToken("YOUR_ACCESS_TOKEN");

  $client = new PaymentClient();
  $request_options = new RequestOptions();
  $request_options->setCustomHeaders(["X-Idempotency-Key: <SOME_UNIQUE_VALUE>"]);

  $payment = $client->create([
    "transaction_amount" => 100.0,
    "token" => "123456",
    "description" => "My product",
    "installments" => 1,
    "payment_method_id" => "visa",
    "payer" => [
      "email" => "my.user@example.com",
    ],
    "capture" => false
  ], $request_options);
  echo implode($payment);
?>
```
```java

MercadoPagoConfig.setAccessToken("ENV_ACCESS_TOKEN");

PaymentClient client = new PaymentClient();

PaymentCreateRequest request =
   PaymentCreateRequest.builder()
       .transactionAmount(new BigDecimal("100"))
       .token("ff8080814c11e237014c1ff593b57b4d")
       .description("Título del producto")
       .installments(1)
       .paymentMethodId("visa")
       .payer(PaymentPayerRequest.builder().email("test_user_19653727@testuser.com").build())
       .capture(false)
       .build();

client.create(request);

```
```node
import { MercadoPagoConfig, Payment } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: 'YOUR_ACCESS_TOKEN' });
const payment = new Payment(client);

const body = {
transaction_amount: 100,
token: '123456',
description: 'My product',
installments: 1,
payment_method_id: 'visa',
payer: {
email: 'my.user@example.com',
},
capture: false
};

payment.create({ body: body, requestOptions: { idempotencyKey: '<SOME_UNIQUE_VALUE>' } }).then(console.log).catch(console.log);
```
```ruby

require 'mercadopago'

sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_request = {
  transaction_amount: 100,
  token: 'ff8080814c11e237014c1ff593b57b4d',
  description: 'Título del producto',
  installments: 1,
  payment_method_id: 'visa',
  payer: {
    email: 'test_user_19653727@testuser.com'
  },
  capture: false
}

payment_response = sdk.payment.create(payment_request)
payment = payment[:response]
```
```csharp

using MercadoPago.Client.Payment;
using MercadoPago.Config;
using MercadoPago.Resource.Payment;

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var paymentRequest = new PaymentCreateRequest
{
    TransactionAmount = 100,
    Token = "ff8080814c11e237014c1ff593b57b4d",
    Description = "Título do produto",
    Installments = 1,
    PaymentMethodId = "visa",
    Payer = new PaymentPayerRequest
    {
        Email = "test_user_19653727@testuser.com",
    },
    Capture = false,
};

var client = new PaymentClient();
Payment payment = await client.CreateAsync(paymentRequest);
```
```python

import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

payment_data = {
    "transaction_amount": 100,
    "token": 'ff8080814c11e237014c1ff593b57b4d',
    "description": "Título de lo que estás pagando",
    "installments": 1,
    "payment_method_id": "visa",
    "payer": {
        "email": "test_user_19653727@testuser.com"
    },
    "capture": False
}
payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]
```
```go
accessToken := "{{ACCESS_TOKEN}}"


cfg, err := config.New(accessToken)
if err != nil {
   fmt.Println(err)
   return
}


client := payment.NewClient(cfg)


request := payment.Request{
   TransactionAmount: 100,
   Token: "ff8080814c11e237014c1ff593b57b4d",
   Description: "My product",
   Installments: 1,
   PaymentMethodID:  "visa",
      Payer: &payment.PayerRequest{
      Email: "test_user_12345@testuser.com",
      Identification: &payment.IdentificationRequest{
         Type: "CPF",
         Number: "01234567890",
      },
   },
   Capture: false,
}


resource, err := client.Create(context.Background(), request)
if err != nil {
   fmt.Println(err)
}


fmt.Println(resource)
```
```curl
curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer {{ENV_ACCESS_TOKEN}}' \
    -H 'X-Idempotency-Key: {{SOME_UNIQUE_VALUE}}' \
    'https://api.mercadopago.com/v1/orders \
    -d '
{
  "type_config": {
    "capture_mode": "manual"
  },
  "type": "online",
  "external_reference": "ext_ref_1234",
  "processing_mode": "automatic",
  "marketplace": "NONE",
  "total_amount": "200.00",
  "payer": {
    "email": "{{PAYER_EMAIL}}",
    "identification": {
      "type": "{{PAYER_DOCUMENT_TYPE}}",
      "number": "{{PAYER_DOCUMENT_NUMBER}}"
    }
  },
  "transactions": {
    "payments": [
      {
        "amount": "200.00",
        "payment_method": {
          "id": "master",
          "type": "credit_card",
          "token": "{{CREDIT_CARD_TOKEN}}",
          "installments": 1
        }
      }
    ]
  }
}'

```
]]]

La respuesta indicará que el pago se encuentra autorizado y pendiente de captura.

[[[
```json
{
  "id": ORDER_ID,
  ...
  "status": "action_required",
  "status_detail": "waiting_capture",
  ...
   "type_config": {
    "capture_mode": "manual"
  },
  ...
 "transactions": {
    "payments": [
      {
        "id": TRANSACTION_ID,
        "status": "action_required",
        "status_detail": "waiting_capture"
      }
    ]
  }
}

```
]]]


También es posible que el `status` retorne como `rejected` o `pending`. En estos casos, deberás prestar atención a las notificaciones para saber cuál es el estado final del pago.

> WARNING
>
> Importante
>
> El cliente no podrá utilizar los valores autorizados hasta que se capturen, por lo que recomendamos realizar esta captura lo antes posible.
 

## Captura de pago autorizado

La finalización de un pago sucede después de la captura del pago previamente autorizado, lo que significa que se puede debitar de la tarjeta el importe reservado para la compra.

Por ahora, tenemos sólo una posibilidad de **captura posterior**, donde se captura el monto total del pago reservado.

> WARNING
>
> Importante
>
> El tiempo límite para realizar la captura del pago autorizado es de ----[mla, mlm, mlc]----7 días------------ ----[mlb]---- 5 días------------ desde su creación. Si no la capturas hasta ese momento, será cancelado. Además, debes guardar el ID del pago para poder finalizar el proceso.

Para realizar la captura del monto total de una reserva, es necesario enviar una solicitud al endpoint [/v1/orders/{order_id}/capture](/developers/es/reference/order/online-payments/capture/post), reemplazando `{order_id}` por el ID de la order cuya captura total deseas realizar. 

## Cancelación de reserva

La cancelación de una reserva se produce cuando, por algún motivo, no se aprueba el pago de una compra y se debe devolver el valor de la reserva al límite de la tarjeta del cliente, o cuando un comprador desiste de la compra. 

Para cancelar una reserva, debes enviar una solicitud al endpoint [/v1/orders/{order_id}/cancel](/developers/es/reference/order/online-payments/cancel-order/post). Asegúrate de reemplazar `{order_id}` por el ID de la order cuya reserva deseas cancelar. 



