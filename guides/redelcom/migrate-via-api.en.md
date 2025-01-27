# Order (API integration)

If your current integration is through the API, Mercado Pago offers the possibility to integrate in-person payments through the Order API, designed to simplify the integration of Mercado Pago's payment products.

## Prerequisites

To ensure a successful migration to the Order API, you must meet the following prerequisites:

| Prerequisite                              | Description                                                                                                                                                          |
|---------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Mercado Pago seller account     | To integrate with Mercado Pago, you need to have a seller account. If you don’t have one yet, visit the [page](https://www.mercadopago.cl/hub/registration?from_landing=true&contextual=company&entity=pj) to create it for free.      |
| Application created in [Your integrations](/developers/panel/app) | Applications are the different integrations contained in one or more stores. You can create an application for each solution you implement to keep everything organized and maintain control for easier management. Additionally, by creating an application, you will be able to obtain the necessary credentials to operate. <br> Refer to the [documentation of the Developer dashboard](/developers/en/docs/mp-point/additional-content/your-integrations/dashboard) to create your application. |
| Credentials                           | Credentials are unique keys that are provided to you at the moment you create the application through [Your integrations](/developers/panel/app). You will need a set of production credentials to receive real payments. Access [Credentials](/developers/en/docs/checkout-pro/additional-content/your-integrations/credentials) for more information. |
| Mercado Pago Point terminal        | To integrate with Mercado Pago, you need to be provided with a Point terminal. To obtain it, **contact your portfolio sales executive**. |
| Mercado Pago application             | In addition to the device, it is essential to have the Mercado Pago application to log in and manage the collections made. You can download it for both [Android](https://play.google.com/store/apps/details?id=com.mercadopago.wallet&hl=pt_BR&pli=1) and [iOS](https://apps.apple.com/br/app/mercado-pago-banco-digital/id925436649) devices. |

## Integration configuration

The Order API provides various endpoints that allow you to perform the same functionalities more efficiently:

> WARNING
> 
> Important
>
> To use these endpoints, it is necessary for your terminal to be configured in `PDV` mode. If it is set to `STANDALONE` mode, it will be understood that you want to process payments in a non-integrated manner, which will prevent the use of our API. To configure your terminal in POS mode, use the endpoint [Update terminal operation mode](/developers/en/reference/order/in-person-payments/point/change-operation-mode/patch), which allows you to change the operating mode of the terminals.

- [Get terminals](/developers/en/reference/order/in-person-payments/point/terminal/get): This endpoint allows you to obtain a list of the Point terminals associated with your Mercado Pago account. It will provide you with their respective ID and the operating mode in which they are functioning.
- [Update terminal operation mode](/developers/en/reference/order/in-person-payments/point/change-operation-mode/patch):  If the terminal you are trying to integrate is in `STANDALONE` operational mode, you will need to update it to POS mode using this endpoint. This will allow you to operate in integrated mode with our API.
- [Create order](/developers/en/reference/order/in-person-payments/point/create/post): This endpoint allows you to create an order that contains payment transactions for Mercado Pago Point. You can associate it with the desired terminal using its ID.
- [Get order by ID](/developers/en/reference/order/in-person/point/get-order/get): This allows you to retrieve all the information about an order using the ID obtained in the response to its creation.
- [Cancel order by ID](/developers/en/reference/order/in-person-payments/point/cancel-order/post): This allows you to cancel an order created for Mercado Pago Point using the reference ID obtained in the response to its creation.
- [Refund order](/developers/en/reference/order/in-person-payments/point/refund-order/post): This endpoint allows to create a refund for a payment transactions associated with an order for Mercado Pago Point.

## Print configuration

The Printing API provides a practical solution for connecting your systems and managing the printing of invoices and receipts, as well as custom prints, on the Point terminals you have configured. With this API, it is possible to guarantee a unified and efficient payment experience.

This resource allows for the printing of receipts and electronic invoices (DTE) and custom prints directly from a point of sale (POS) through the API, using the integrated printer of Smart devices. This simplifies the payment process and quickly responds to the needs of your business.

### Printing of invoices and electronic receipts

The following types of Electronic Tax Documents (DTE) in XML format are accepted:

> WARNING
> 
> Important
>
> The sent DTE must be compatible with the formats defined by the [SII](https://www.sii.cl/servicios_online/3532-formato_xml-3811.html).

| Document type                          | Description                                                                                     |
|----------------------------------------|-------------------------------------------------------------------------------------------------|
| Affected Invoice (33) and Exempt (34) | Refers to the tax document that has legal validity before the Internal Revenue Service (SII). |
| Affected Receipt (39) and Exempt (41) | Refers to the document that the customer receives when making a purchase, having accounting and tax validity. |

### Integration configuration 

To configure the integration of the prints, use the API to manage the queuing of each attempt, considering the specifications of each endpoint. 

> WARNING
>
> Important
>
> The terminal must be configured in POS (Point of Sale) mode. 

The available endpoints are:
   - [Create terminal action](/developers/en/reference/order/in-person-payments/impressions/post)
   - [Get action by ID](/developers/en/reference/order/in-person-payments/impressions/get)
   - [Cancel action by ID](/developers/en/reference/order/in-person-payments/impressions_cancel/post) 
    
Wait until the attempt reaches the terminal and the print is processed. If the print does not arrive automatically, press the "green button" to fetch the attempt manually.

### Custom tags

Custom tags allow for the personalization of the presentation of printed documents. They offer flexibility and control over the text format, enabling the creation of efficient and visually appealing prints. Below, consult the different available tags, their functions, and usage examples:

> Custom tags have a minimum limit of 100 characters and a maximum limit of 4096 characters, including the tags themselves.

| Tag        | Function                                   | Example                           |
|------------|--------------------------------------------|-----------------------------------|
| `{b}`      | Bold                                      | `{b}Bold text{/b}`               |
| `{w}`      | Large text                                | `{w}Large text{/w}`              |
| `{s}`      | Small text                                | `{s}Small text{/s}`              |
| `{br}`     | Line break                                | `{br}`                            |
| `{left}`   | Align left                                | `{left}Left-aligned text{/left}` |
| `{center}` | Center text                               | `{center}Centered text{/center}` |
| `{qr}`     | Print a QR code that represents the sent text | `{qr}Text{/qr}`                 |
| `{pdf417}` | Print the barcode of a TED                | `{pdf417}Text{/pdf417}`          |