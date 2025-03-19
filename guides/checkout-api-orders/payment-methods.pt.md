# Configurar meios de pagamento

Com o  ----[mlb]---- Checkout Transparente------------ ----[mla, mlm, mlu, mco, mlc, mpe]---- Checkout API ------------, você pode escolher quais meios de pagamento deseja disponibilizar nas lojas online.

O processo de integração se baseia na configuração individual desses meios de pagamento dentro do ambiente comum previamente estabelecido, o que facilita a experiência de integração, e permite um maior nível de personalização.

![diagram-configure-payment-methods](/images/api-orders/diagram-configure-payment-methods-pt.png) 

Se desejar, é possível obter uma lista detalhada com todos os meios de pagamento disponíveis para integração enviando um **GET** com seu *Access Token* ao endpoint [/v1/payment_methods](/developers/pt/reference/payment_methods/_payment_methods/get) e executando a requisição ou, se preferir, faça a requisição utilizando os SDKs abaixo.

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

Com essas informações, você já pode escolher quais métodos de pagamento deseja oferecer e continuar com sua integração.

----[mlb]----

---
future_product_avaible:
 - card_avaible: true
 - card_icon: Card
 - card_title: Cartão
 - card_description: Receba pagamentos com cartões de crédito ou débito (virtual Caixa) de forma segura através de um formulário de pagamento dentro do checkout.
 - card_button: /developers/pt/docs/checkout-api-orders/xxx
 - card_buttonDescription: Saiba mais
 - card_pillText: DISPONÍVEL
 - card_linkAvailable: false
 - card_linkProof: 
 - card_linkProofDescription:
 - card_avaible: true
 - card_icon: Pay
 - card_title: Pix
 - card_description: Receba pagamentos eletrônicos instantâneos, oferecendo aos seus clientes a possibilidade de pagar a partir de um código QR ou um código de pagamento.
 - card_button: /developers/pt/docs/checkout-api-orders/xxx
 - card_buttonDescription: Saiba mais
 - card_pillText: DISPONÍVEL
 - card_linkAvailable: false
 - card_linkProof: 
 - card_linkProofDescription:
 - card_avaible: true
 - card_icon: Pay
 - card_title: Boleto bancário
 - card_description: Receba em sua conta os pagamentos que o cliente realizar através de um boleto bancário.
 - card_button: /developers/pt/docs/checkout-api-orders/xxx
 - card_buttonDescription: Saiba mais
 - card_pillText: DISPONÍVEL
 - card_linkAvailable: false
 - card_linkProof: 
 - card_linkProofDescription:
 - card_avaible: false
 - card_icon: Pay
 - card_title: Conta Mercado Pago
 - card_description: Ofereça aos compradores a possibilidade de utilizar qualquer um dos meios de pagamento armazenados em sua conta do Mercado Pago.
 - card_button:
 - card_buttonDescription:
 - card_pillText: EM BREVE
 - card_linkAvailable: false
 - card_linkProof: 
 - card_linkProofDescription:
 - card_avaible: false
 - card_icon: Pay
 - card_title: Parcelamento sem cartão
 - card_description: Ofereça aos clientes a opção de pagar em parcelas sem precisar de um cartão: o Mercado Pago absorve o financiamento e o vendedor recebe o valor total em sua conta.
 - card_button:
 - card_buttonDescription:
 - card_pillText: EM BREVE
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
 - card_title: Cartão
 - card_description: Receba pagamentos com cartões de crédito ou débito (virtual Caixa) de forma segura através de um formulário de pagamento dentro do checkout.
 - card_button: /developers/pt/docs/checkout-api-orders/xxx
 - card_buttonDescription: Saiba mais
 - card_pillText: DISPONÍVEL
 - card_linkAvailable: false
 - card_linkProof: 
 - card_linkProofDescription:
 - card_avaible: true
 - card_icon: Pay
 - card_title: Outros meios de pagamento
 - card_description: RReceba em sua conta os pagamentos que o cliente realizar em dinheiro através do Rapipago ou Pago Fácil.
 - card_button: /developers/pt/docs/checkout-api-orders/xxx
 - card_buttonDescription: Saiba mais
 - card_pillText: DISPONÍVEL
 - card_linkAvailable: false
 - card_linkProof: 
 - card_linkProofDescription:
 - card_avaible: false
 - card_icon: Pay
 - card_title: Conta Mercado Pago
 - card_description: Ofereça aos compradores a possibilidade de utilizar qualquer um dos meios de pagamento armazenados em sua conta do Mercado Pago.
 - card_button:
 - card_buttonDescription:
 - card_pillText: EM BREVE
 - card_linkAvailable: false
 - card_linkProof: 
 - card_linkProofDescription:
 - card_avaible: false
 - card_icon: Pay
 - card_title: Financiación sin tarjeta
 - card_description: Ofereça aos clientes a opção de pagar em parcelas sem precisar de um cartão: o Mercado Pago absorve o financiamento e o vendedor recebe o valor total em sua conta.
 - card_button:
 - card_buttonDescription:
 - card_pillText: EM BREVE
 - card_linkAvailable: false
 - card_linkProof: 
 - card_linkProofDescription:
------------
----[mlm]----

---
future_product_avaible:
 - card_avaible: true
 - card_icon: Card
 - card_title: Cartão
 - card_description: Receba pagamentos com cartões de crédito ou débito (virtual Caixa) de forma segura através de um formulário de pagamento dentro do checkout.
 - card_button: /developers/pt/docs/checkout-api-orders/xxx
 - card_buttonDescription: Saiba mais
 - card_pillText: DISPONÍVEL
 - card_linkAvailable: false
 - card_linkProof: 
 - card_linkProofDescription:
 - card_avaible: true
 - card_icon: Pay
 - card_title: Outros meios de pagamento
 - card_description: Receba em sua conta os pagamentos que o cliente realizar em dinheiro através do OXXO, Paycash, Citibanamex, Santander ou BBVA Bancomer.
 - card_button: /developers/pt/docs/checkout-api-orders/xxx
 - card_buttonDescription: Saiba mais
 - card_pillText: DISPONÍVEL
 - card_linkAvailable: false
 - card_linkProof: 
 - card_linkProofDescription:
 - card_avaible: true
 - card_icon: Pay
 - card_title: Transferencia SPEI
 - card_description: Receba pagamentos eletrônicos instantâneos oferecendo aos seus clientes a possibilidade de pagar de qualquer banco ou instituição financeira utilizando a sua CLABE.
 - card_button: /developers/pt/docs/checkout-api-orders/xxx
 - card_buttonDescription: Saiba mais
 - card_pillText: DISPONÍVEL
 - card_linkAvailable: false
 - card_linkProof: 
 - card_linkProofDescription:
 - card_avaible: false
 - card_icon: Pay
 - card_title: Conta Mercado Pago
 - card_description: Ofereça aos compradores a possibilidade de utilizar qualquer um dos meios de pagamento armazenados em sua conta do Mercado Pago.
 - card_button:
 - card_buttonDescription:
 - card_pillText: EM BREVE
 - card_linkAvailable: false
 - card_linkProof: 
 - card_linkProofDescription:
 - card_avaible: false
 - card_icon: Pay
 - card_title: Compra ahora, paga después
 - card_description: Ofereça aos clientes a opção de pagar em parcelas sem precisar de um cartão: o Mercado Pago absorve o financiamento e o vendedor recebe o valor total em sua conta.
 - card_button:
 - card_buttonDescription:
 - card_pillText: EM BREVE
 - card_linkAvailable: false
 - card_linkProof: 
 - card_linkProofDescription:
---

------------