# Configurar URLs de retorno

A URL de retorno é o endereço para o qual o usuário é redirecionado após completar o pagamento, seja ele bem-sucedido, falho ou pendente. Esta URL deve ser uma página web que você controla, como um servidor com domínio nomeado (DNS).

Este processo é configurado através do atributo `back_urls` no backend, na preferência de pagamento associada à sua integração. Com este atributo, você poderá definir que o comprador seja redirecionado ao site web que você configurou, seja automaticamente ou através do botão "Voltar ao site", de acordo com o estado do pagamento.

Você pode configurar até três URLs de retorno diferentes, que corresponderão aos cenários de pagamento pendente, sucesso ou erro.

> NOTE
>
> Nota
>
> Em integrações mobile, recomendamos que as URLs de retorno sejam deep links. Para saber mais, veja a documentação **[Integração para aplicações móveis](/developers/pt/docs/checkout-pro/mobile-integration)**.

## Definir URL de retorno

No seu código backend, você deverá configurar a URL para a qual deseja que o Mercado Pago redirecione o usuário uma vez que ele tenha completado o processo de pagamento.

> NEUTRAL_MESSAGE
> 
> Nota
>
> Se preferir, você também pode configurar as URLs de retorno enviando um POST para a API [Criar preferência](/developers/pt/reference/preferences/_checkout_preferences/post) com o atributo `back_urls`, informando as URLs para as quais o comprador deve ser direcionado ao finalizar o pagamento.

A seguir, compartilhamos exemplos de como incluir o atributo `back_urls` de acordo com a linguagem de programação que você está utilizando, além do detalhamento de cada um dos possíveis parâmetros.

[[[
```php
<?php
$preference = new MercadoPago\Preference();
//...
$preference->back_urls = array(
    "success" => "https://www.tu-sitio/success",
    "failure" => "http://www.tu-sitio/failure",
    "pending" => "http://www.tu-sitio/pending"
);
$preference->auto_return = "approved";
// ...
?>
```
```node
var preference = {}
preference = {
  // ...
  "back_urls": {
        "success": "https://www.tu-sitio/success",
        "failure": "http://www.tu-sitio/failure",
        "pending": "http://www.tu-sitio/pending"
    },
    "auto_return": "approved",
  // ...
}
```
```java
PreferenceBackUrlsRequest backUrls =
// ...
   PreferenceBackUrlsRequest.builder()
       .success("https://www.seu-site/success")
       .pending("https://www.seu-site/pending")
       .failure("https://www.seu-site/failure")
       .build();

PreferenceRequest request = PreferenceRequest.builder().backUrls(backUrls).build();
// ...
```
```ruby
# ...
preference_data = {
  # ...
  back_urls = {
    success: 'https://www.tu-sitio/success',
    failure: 'https://www.tu-sitio/failure',
    pending: 'https://www.tu-sitio/pendings'
  },
  auto_return: 'approved'
  # ...
}
# ...
```
```csharp
var request = new PreferenceRequest
{
    // ...
    BackUrls = new PreferenceBackUrlsRequest
    {
        Success = "https://www.tu-sitio/success",
        Failure = "http://www.tu-sitio/failure",
        Pending = "http://www.tu-sitio/pendings",
    },
    AutoReturn = "approved",
};
```
```python
preference_data = {
    "back_urls": {
        "success": "https://www.tu-sitio/success",
        "failure": "https://www.tu-sitio/failure",
        "pending": "https://www.tu-sitio/pendings"
    },
    "auto_return": "approved"
}
```
]]]

| Atributo     | Descrição                                                                                                                                                                                                                                |
|--------------|-----|
| `auto_return`| Os compradores são redirecionados automaticamente ao site quando o pagamento é aprovado. O valor padrão é `approved`. **O tempo de redirecionamento será de até 40 segundos e não poderá ser personalizado**. Por padrão, também será exibido um botão de "Voltar ao site".|
| `back_urls`  | URL de retorno ao site. Os cenários possíveis são: <br>`success`: URL de retorno quando o pagamento é aprovado.<br>`pending`: URL de retorno quando o pagamento está pendente.<br>`failure`: URL de retorno quando o pagamento é rejeitado.                    |

## Resposta das URLs de retorno

As `back_urls` retornarão alguns parâmetros úteis através de uma chamada GET. A seguir, compartilhamos um exemplo de como será uma resposta e o detalhamento dos parâmetros que você poderá encontrar nela.

```curl
GET /test?collection_id=106400160592&collection_status=rejected&payment_id=106400160592&status=rejected&external_reference=qweqweqwe&payment_type=credit_card&merchant_order_id=29900492508&preference_id=724484980-ecb2c41d-ee0e-4cf4-9950-8ef2f07d3d82&site_id=MLC&processing_mode=aggregator&merchant_account_id=null HTTP/1.1
Host: yourwebsite.com
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
Accept-Encoding: gzip, deflate, br, zstd
Accept-Language: es-419,es;q=0.9
Connection: keep-alive
Referer: https://www.mercadopago.com/checkout/v1/payment/redirect/505f641c-cf04-4407-a7ad-8ca471419ee5/congrats/rejected/?preference-id=724484980-ecb2c41d-ee0e-4cf4-9950-8ef2f07d3d82&router-request-id=0edb64e3-d853-447a-bb95-4f810cbed7f7&p=f2e3a023dd16ac953e65c4ace82bb3ab
Sec-Ch-Ua: "Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"
Sec-Ch-Ua-Mobile: ?0
Sec-Ch-Ua-Platform: "macOS"
Sec-Fetch-Dest: document
Sec-Fetch-Mode: navigate
Sec-Fetch-Site: cross-site
Sec-Fetch-User: ?1
Upgrade-Insecure-Requests: 1
```

| Parâmetro             | Descrição                                                                                     |
|-----------------------|------------------------------------------------------------------------------------------------|
| `payment_id`          | ID (identificador) do pagamento do Mercado Pago.                                               |
| `status`              | Status do pagamento. Por exemplo: `approved` para um pagamento aprovado ou `pending` para um pagamento pendente. |
| `external_reference`  | Referência que você pode sincronizar com seu sistema de pagamentos.                            |
| `merchant_order_id`   | ID (identificador) da ordem de pagamento gerada no Mercado Pago.                               |

### Resposta para meios de pagamento offline

Os meios de pagamento offline são aqueles em que o usuário comprador escolhe um método que exige a utilização de um ponto de pagamento físico para concluir a compra. Nesse fluxo de pagamento, o Mercado Pago gerará um comprovante que o usuário precisará apresentar para realizar o pagamento no estabelecimento correspondente, e redirecionará o usuário para a URL especificada no atributo `back_urls` como `pending`.

Nesse estágio, o pagamento está em estado pendente porque o usuário ainda precisa ir a um estabelecimento físico para efetuar o pagamento.

Para fornecer mais informações ao comprador, recomendamos que, para os estados de pagamento `pending`, você redirecione o comprador para o seu site e compartilhe informações claras sobre como concluir o pagamento.

Depois que o usuário for ao estabelecimento correspondente e realizar o pagamento em dinheiro com o comprovante gerado, o Mercado Pago será notificado e o pagamento mudará de estado. Recomendamos que [configure as notificações de pagamento](/developers/pt/docs/checkout-pro/payment-notifications) para que seu servidor possa processar essa notificação e atualizar o estado do pedido em sua base de dados.

### Escolher o tipo de integração

Uma vez que você tenha concluído as configurações no seu backend e obtido o ID da sua preferência, deverá prosseguir para as configurações do frontend. Para isso, é necessário escolher o tipo de integração que melhor se adapte às suas necessidades, seja para integrar um **site** ou um **aplicativo móvel**.

Selecione o tipo de integração que deseja realizar e siga os passos detalhados para completar a integração do Checkout Pro.

---
future_product_avaible: 
 - card_avaible: true
 - card_icon: Card
 - card_title: Checkout Pro para Web
 - card_description: Oferece cobranças com redirecionamento para o Mercado Pago no seu site ou loja online.
 - card_button:  /developers/pt/docs/checkout-pro/web-integration/add-frontend-sdk
 - card_buttonDescription: Integrar
 - card_pillText: DISPONÍVEL
 - card_linkAvailable: false
 - card_linkProof:
 - card_linkProofDescription:
 - card_avaible: true
 - card_icon: Loading
 - card_title: Checkout Pro para Mobile
 - card_description: Oferece cobranças com redirecionamento para o Mercado Pago no seu aplicativo para dispositivos móveis.
 - card_button: /developers/pt/docs/checkout-pro/mobile-integration
 - card_buttonDescription: Integrar
 - card_pillText: DISPONÍVEL
 - card_linkAvailable: false
 - card_linkProof:
 - card_linkProofDescription:
---