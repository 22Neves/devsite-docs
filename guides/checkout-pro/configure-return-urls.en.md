# Configure return URLs

The return URL is the address to which the user is redirected after completing the payment, whether successful, failed, or pending. This URL should be a webpage that you control, such as a server with a named domain (DNS).

This process is configured through the `back_urls` attribute in the backend, in the payment preference associated with your integration. With this attribute, you can define that the buyer will be redirected to the website you configured, either automatically or through the "Return to site" button, depending on the payment status.

You can configure up to three different return URLs, corresponding to pending payment, success, or error scenarios.

> NOTE
>
> Note
>
> In mobile integrations, we recommend that the return URLs be deep links. To learn more, refer to the **[Integration for mobile applications](/developers/en/docs/checkout-pro/mobile-integration)** documentation.

## Define return URL

In your backend code, you need to set up the URL to which you want Mercado Pago to redirect the user once they have completed the payment process.

> NEUTRAL_MESSAGE
> 
> Note
>
> If you prefer, it is also possible to configure the return URLs by sending a POST request to the [Create Preference](/developers/en/reference/preferences/_checkout_preferences/post) API with the `back_urls` attribute specifying the URLs to which the buyer should be directed upon payment completion.

Below, we share examples of how to include the `back_urls` attribute according to the programming language you are using, along with the details of each possible parameter.

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

| Attribute     | Description                                                                                                                                                                                                                                |
|--------------|-----|
| `auto_return`| Buyers are automatically redirected to the site when the payment is approved. The default value is `approved`. **The redirection time will be up to 40 seconds and cannot be customized**. By default, a "Return to site" button will also be displayed.|
| `back_urls`  | Return URL to the site. The possible scenarios are: <br>`success`: Return URL when the payment is approved.<br>`pending`: Return URL when the payment is pending.<br>`failure`: Return URL when the payment is rejected.

## Return URLs Response

The `back_urls` will return some useful parameters through a GET request. Below, we share an example of what a response will look like and the details of the parameters you may find in it.

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

| Parameter             | Description                                                                                     |
|-----------------------|-------------------------------------------------------------------------------------------------|
| `payment_id`          | ID (identifier) of the Mercado Pago payment.                                                    |
| `status`              | Payment status. For example: `approved` for an approved payment or `pending` for a pending payment. |
| `external_reference`  | Reference that you can synchronize with your payment system.                                    |
| `merchant_order_id`   | ID (identifier) of the payment order generated in Mercado Pago.                                 |

### Response for offline payment methods

Offline payment methods are those where the buyer chooses a method that requires them to use a physical payment point to complete the purchase process. In this payment flow, Mercado Pago will generate a voucher that the user needs to make the payment at the corresponding establishment, and will redirect the user to the URL you specified in the `back_urls` attribute as `pending`.

At this point, the payment is in a pending state because the user still needs to go to a physical establishment and pay.

To provide more information to the buyer, we recommend that for `pending` payment statuses, you redirect the buyer to your website and share clear information on how to complete the payment.

Once the user goes to the corresponding establishment and makes the cash payment with the generated voucher, Mercado Pago is notified and the payment status will change. We recommend that you [configure payment notifications](/developers/en/docs/checkout-pro/payment-notifications) so that your server can process this notification and update the order status in your database.

### Choose the type of integration

Once you have completed the configurations in your backend and obtained your preference ID, you should proceed to the frontend configurations. To do this, you need to choose the type of integration that best suits your needs, whether it is for integrating a **website** or a **mobile application**.

Select the type of integration you want to perform and follow the detailed steps to complete the Checkout Pro integration.

---
future_product_avaible: 
 - card_avaible: true
 - card_icon: Card
 - card_title: Checkout Pro for Web
 - card_description: Offers payments with redirection to Mercado Pago on your website or online store.
 - card_button: /developers/en/docs/checkout-pro/web-integration/add-frontend-sdk
 - card_buttonDescription: Integrate
 - card_pillText: AVAILABLE
 - card_linkAvailable: false
 - card_linkProof:
 - card_linkProofDescription:
 - card_avaible: true
 - card_icon: Loading
 - card_title: Checkout Pro for Mobile
 - card_description: Offers payments with redirection to Mercado Pago in your mobile application.
 - card_button: /developers/en/docs/checkout-pro/mobile-integration
 - card_buttonDescription: Integrate
 - card_pillText: AVAILABLE
 - card_linkAvailable: false
 - card_linkProof:
 - card_linkProofDescription:
---