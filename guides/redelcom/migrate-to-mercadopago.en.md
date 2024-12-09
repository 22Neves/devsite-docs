# # Como migrar ao ecossistema Mercado Pago

If you are already using the integration with Redelcom to process payments, it is important to be aware that this solution will soon be **discontinued**. Therefore, **migrating to Mercado Pago will be mandatory** for you to continue processing payments securely and efficiently.

**Mercado Pago** offers equivalent solutions for each of the Redelcom integrations, incorporating the highest standards of quality and security.

The update process is easy and depends on the type of integration you currently have with Redelcom. Consult the table below to learn about Mercado Pago's equivalent solutions and the corresponding integration process for each:

| Type of Redelcom integration      | Equivalent integration type from Mercado Pago |
|-----------------------------------|------------------------------------------------|
| Integração local                  | [Main Apps](#)                                      |
| Integração via API                | [API Order](#)                                      |

## Main Apps (Local integration)

If you are currently using a local integration with Redelcom, the equivalent solution offered by Mercado Pago is **Main Apps**.

The Main Apps are business management applications that can be integrated with **[Point Smart](/developers/en/docs/mp-point/landing)**, a SmartPOS payment device. These apps become the main interface, allowing the seller to use the reader to process payments integrated with Mercado Pago.

### Prerequisites

To ensure a successful migration to Main Apps, you must meet the following prerequisites:

| Prerequisite                                 | Description                                                                                                                                                                                                                              |
|-------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Mercado Pago seller account         | To integrate with Mercado Pago, you need to have a seller account. If you don’t have one yet, visit the [page](https://www.mercadopago.cl/hub/registration?from_landing=true&contextual=company&entity=pj) to create it for free.                                                                             |
| Application created in [Your integrations](/developers/panel/app)      | Applications are the different integrations contained in one or more stores. You can create an application for each solution you implement to keep everything organized and maintain control for easier management.  <br><br> To integrate **Main Apps**, it is necessary to create an application and obtain the `application_id`, which must be sent in the manifest. For more information on this process, see the Integration [Configuration section](#).  <br><br> Refer to the [documentation of the Developer dashboard](/developers/en/docs/mp-point/additional-content/your-integrations/dashboard) to create your application. |
| Mercado Pago Point device        | To integrate with Mercado Pago, you need to be provided with a Point device. To obtain it, **contact your portfolio sales executive**.                                                  |
| Mercado Pago application                 | In addition to the device, it is essential to have the Mercado Pago application to log in and manage the collections made. You can download it for both [Android](https://play.google.com/store/apps/details?id=com.mercadopago.wallet&hl=pt_BR&pli=1) and [iOS](https://apps.apple.com/br/app/mercado-pago-banco-digital/id925436649) devices.                                                |

### Integration configuration

Before starting your integration with Main Apps, it is necessary to send your `application_id` in the Android Manifest. 

To do this, first obtain your `application_id` by accessing [Your integrations](/developers/panel/app) and selecting your application. You will find it in the **Application details** section under the name "Application Number." 

Then, copy and paste that number into the AndroidManifest.xml file, following the format `value='application_id + L'`, as shown in the example below.

```manifest
<meta-data
name='com.mercadolibre.android.sdk.CLIENT_ID'
value='XXXXXXXXXXXXXXXXL'>
</meta-data>
```

If you are also going to implement the OAuth flow to securely obtain information about the seller's account, you should add the following lines:

```manifest
<meta-data
name='com.mercadolibre.android.sdk.OAUTH_ENABLED'
value='true'>
</meta-data>
```

Once you have completed this preliminary step, continue with the integration of Main Apps following the [documentation](/developers/en/docs/main-apps/landing).

## Order (API integration)

If your current integration is through the API, Mercado Pago offers the possibility to integrate in-person payments through the Order API, designed to simplify the integration of Mercado Pago's payment products.

### Prerequisites

To ensure a successful migration to the Order API, you must meet the following prerequisites:

| Prerequisite                              | Description                                                                                                                                                          |
|---------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Mercado Pago seller account     | To integrate with Mercado Pago, you need to have a seller account. If you don’t have one yet, visit the [page](https://www.mercadopago.cl/hub/registration?from_landing=true&contextual=company&entity=pj) to create it for free.      |
| Application created in [Your integrations](/developers/panel/app) | Applications are the different integrations contained in one or more stores. You can create an application for each solution you implement to keep everything organized and maintain control for easier management. Additionally, by creating an application, you will be able to obtain the necessary credentials to operate. <br> Refer to the [documentation of the Developer dashboard](/developers/en/docs/mp-point/additional-content/your-integrations/dashboard) to create your application. |
| Credentials                           | Credentials are unique keys that are provided to you at the moment you create the application through [Your integrations](/developers/panel/app). You will need a set of test credentials to test the integration and a set of production credentials to receive real payments. Access [Credentials](/developers/en/docs/checkout-pro/additional-content/your-integrations/credentials) for more information. |
| Mercado Pago Point terminal        | To integrate with Mercado Pago, you need to be provided with a Point terminal. To obtain it, **contact your portfolio sales executive**. |
| Mercado Pago application             | In addition to the device, it is essential to have the Mercado Pago application to log in and manage the collections made. You can download it for both [Android](https://play.google.com/store/apps/details?id=com.mercadopago.wallet&hl=pt_BR&pli=1) and [iOS](https://apps.apple.com/br/app/mercado-pago-banco-digital/id925436649) devices. |

### Integration configuration

The Order API provides various endpoints that allow you to perform the same functionalities more efficiently:

> WARNING
> 
> Important
>
> To use these endpoints, it is necessary for your terminal to be configured in `PDV` mode. If it is set to `STANDALONE` mode, it will be understood that you want to process payments in a non-integrated manner, which will prevent the use of our API. To configure your terminal in POS mode, use the endpoint [Change operating mode](/developers/en/reference/order/in-person/point/change-operation-mode/patch), which allows you to change the operating mode of the terminals.

- [Get terminals](/developers/en/reference/order/in-person-payments/point/terminal/get): This endpoint allows you to obtain a list of the available Point terminals associated with your Mercado Pago account. It will provide you with their respective ID and the operating mode in which they are functioning.
- [Update terminal operation mode](/developers/en/reference/order/in-person-payments/point/change-operation-mode/patch):  If the terminal you are trying to integrate is in `STANDALONE` or `SELF_SERVICE` operational mode, you will need to update it to POS mode using this endpoint. This will allow you to operate in integrated mode with our API.
- [Create order](/developers/en/reference/order/in-person/point/create/post): This endpoint allows you to create an order that contains payment transactions for Mercado Pago Point. You can associate it with the desired terminal using its ID.
- [Get order by ID](/developers/pt/reference/order/in-person/point/get-order/get): This allows you to retrieve all the information about an order using the ID obtained in the response to its creation.
- [Cancel order by ID](/developers/en/reference/order/in-person/point/cancel-order/post): This allows you to cancel an order created for Mercado Pago Point using the reference ID obtained in the response to its creation.