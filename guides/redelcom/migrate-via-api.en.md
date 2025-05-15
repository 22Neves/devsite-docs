# Order (API integration)

If your current integration is through the API, Mercado Pago offers the possibility to integrate in-person payments through the Order API, designed to simplify the integration of Mercado Pago's payment products.

## Prerequisites

To ensure a successful migration to the Order API, you must meet the following prerequisites:

| Prerequisite                              | Description                                                                                                                                                          |
|---------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Mercado Pago seller account     | To integrate with Mercado Pago, you need to have a seller account. If you don’t have one yet, visit the [page](https://www.mercadopago.cl/hub/registration?from_landing=true&contextual=company&entity=pj) to create it for free.      |
| Application created in [Your integrations](/developers/panel/app) | Applications are the different integrations contained in one or more stores. You can create an application for each solution you implement to keep everything organized and maintain control for easier management. Additionally, by creating an application, you will be able to obtain the necessary credentials to operate. <br> Refer to the [documentation of the Developer dashboard](/developers/en/docs/mp-point/additional-content/your-integrations/dashboard) to create your application. |
| Credentials                           | Credentials are unique keys that are provided to you at the moment you create the application through [Your integrations](/developers/panel/app). You will need a set of production credentials to receive real payments. Access [Credentials](/developers/en/docs/your-integrations/credentials) for more information. |
| Mercado Pago Point terminal        | To integrate with Mercado Pago, you need to be provided with a Point terminal. To obtain it, **contact your portfolio sales executive**. |
| Mercado Pago application             | In addition to the device, it is essential to have the Mercado Pago application to log in and manage the collections made. You can download it for both [Android](https://play.google.com/store/apps/details?id=com.mercadopago.wallet&hl=pt_BR&pli=1) and [iOS](https://apps.apple.com/br/app/mercado-pago-banco-digital/id925436649) devices. |

## Integration configuration

The Order API provides various endpoints that allow you to perform the same functionalities more efficiently:

> RED_MESSAGE
> 
> Important
>
> To use these endpoints, it is necessary for your terminal to be configured in `PDV` mode. If it is set to `STANDALONE` mode, it will be understood that you want to process payments in a non-integrated manner, which will prevent the use of our API. To configure your terminal in POS mode, use the endpoint [Update terminal operation mode](/developers/en/reference/order/in-person-payments/point/change-operation-mode/patch), which allows you to change the operating mode of the terminals.

- [Get terminals](/developers/en/reference/order/in-person-payments/point/terminal/get): This endpoint allows you to obtain a list of the Point terminals associated with your Mercado Pago account. It will provide you with their respective ID and the operating mode in which they are functioning.
- [Update terminal operation mode](/developers/en/reference/order/in-person-payments/point/change-operation-mode/patch):  If the terminal you are trying to integrate is in `STANDALONE` operational mode, you will need to update it to POS mode using this endpoint. This will allow you to operate in integrated mode with our API.
- [Create order](/developers/en/reference/order/in-person-payments/point/create/post): This endpoint allows you to create an order that contains payment transactions for Mercado Pago Point. You can associate it with the desired terminal using its ID.
- [Get order by ID](/developers/en/reference/order/in-person/point/get-order/get): This allows you to retrieve all the information about an order using the ID obtained in the response to its creation.
- [Cancel order by ID](/developers/en/reference/order/in-person-payments/point/cancel-order/post): This allows you to cancel an order created for Mercado Pago Point using the reference ID obtained in the response to its creation.
- [Refund order](/developers/en/reference/order/in-person-payments/point/refund-order/post): This endpoint allows to create a refund for payment transactions associated with an order for Mercado Pago Point.

## Print configuration

The Printings API offers a practical solution to integrate your systems and manage printings on configured Point terminals. This resource allows the printing of receipts, electronic tax documents (DTE), images, and customized printings directly from a point of sale (POS), using the integrated printer of Smart devices. This simplifies the billing process and quickly responds to the needs of your business.

### Printing of invoices and electronic receipts

The following types of Documentos Tributarios Electrónicos (DTE) in XML format are accepted:

> RED_MESSAGE
> 
> The sent DTE must be compatible with the formats defined by the [SII](https://www.sii.cl/servicios_online/3532-formato_xml-3811.html).

| Document type                          | Description                                                                                     |
|----------------------------------------|-------------------------------------------------------------------------------------------------|
| Affected Invoice (33) and Exempt (34) | Refers to the tax document that has legal validity before the Servicio de Impuestos Interno (SII). |
| Affected Receipt (39) and Exempt (41) | Refers to the document that the customer receives when making a purchase, having accounting and tax validity. |

### Print configuration

Use the endpoints below to manage the print queue, taking into account the specifications of each endpoint. Ensure that the terminal is configured in POS (Point of Sale) mode.

> RED_MESSAGE
>
> For image printing, keep in mind that the accepted formats are PNG or JPEG, with Base64 encoding and a maximum size of 1MB. Images that exceed this limit will be automatically resized to fit the width of the paper roll.  

The available endpoints are:
   - [Create terminal action](/developers/en/reference/impressions_dte/post): Allows the creation of a new printing action for Mercado Pago Point, either images or [custom printings](/developers/en/docs/redelcom/how-tos/migrate-to-mercadopago/api-integration#configuracindeimpresiones#bookmark_custom_tags). If successful, the response will return a 201 status code.
   - [Get action by ID](/developers/en/reference/impressions_dte/get): Allows retrieving all information of an action created for a Point terminal using the ID obtained in the response upon its creation. Querying the printing action provides a practical tool to verify the action sent by the API, especially in case of printing failures on the terminal.
   - [Cancel action by ID](/developers/en/reference/impressions_dte_cancel/post): Allows you to cancel an action created for Mercado Pago Point and its transactions using the reference ID obtained in the response to its creation. Only an action in "created" status can be canceled. In case of success, the request will return a response with status 200.
    
Wait until the printing intent reaches the terminal and the print is processed. If the print does not arrive automatically, press the **Update** button to fetch the intent manually.

### Custom tags

Custom tags allow you to adjust the format and appearance of printed documents, ensuring greater control over the style and structure of the text. They must be used when sending a **POST** to the [Create terminal action](/developers/en/reference/impressions_dte/post) endpoint, through the `subtype` attribute, which must be set as `custom`. When `subtype` is defined as `custom`, the `content` attribute must include the formatted string using the supported tags.

Below, check out the different available tags, their functions, and examples of usage:

> NOTE
>
> Custom tags have a minimum limit of 100 characters and a maximum of 4096 characters, including the tags themselves.

| Tags   | Function                                     | Example                          |
|------------|---------------------------------------------|----------------------------------|
| `{b}`      | Bold text                                   | `{b}Bold text{/b}`               |
| `{w}`      | Large text                                  | `{w}Large text{/w}`              |
| `{s}`      | Small text                                  | `{s}Small text{/s}`              |
| `{br}`     | Line break                                  | `{br}`                           |
| `{left}`   | Align to the left                           | `{left}Left-aligned text{/left}` |
| `{center}` | Center text                                 | `{center}Centered text{/center}` |
| `{qr}`     | Print a QR representing the sent text       | `{qr}Text{/qr}`                  |
| `{pdf417}` | Print the smudge of a TED                   | `{pdf417}Text{/pdf417}`          |

**Example:**

```
{
  "type": "print",
  "config": {
    "point": {
      "terminal_id": "{{device.id}}",
      "subtype": "custom"
    }
  },
  "external_reference": "8a42e06e45d5",
  "content": "{br}--------------------------------{br}{center}{w} DELIVERY RECEIPT{/w}{br}{br}{s} Order No:12345{/s}{br}{s} Store: Test Store{/s}{br}--------------------------------{br}{s}***DISPATCHED ITEM(S)***{/s}{br}{s}SKU / ITEM                       QUANTITY   {/s}{br}{s}----------------------------------------------{/s}{br}{s}4065432630504 / FOOTBALL WUCL LGE EHV240424   1{br}{s}DELIVER ON: 06/06/2024{/s}{br}{s}ADDRESS: METROPOLITANA  {/s}{br}{s}RECEIVER: John{/s}{br}{s}delivery to client in the morning{/s}{br}--------------------------------{br}"
}
```