# Main Apps (Local integration)

If you are currently using a local integration with Redelcom, the equivalent solution offered by Mercado Pago is **Main Apps**.

The Main Apps are business management applications that can be integrated with **[Point Smart](/developers/en/docs/mp-point/landing)**, a SmartPOS payment device. These apps become the main interface, allowing the seller to use the reader to process payments integrated with Mercado Pago.

## Prerequisites

To ensure a successful migration to Main Apps, you must meet the following prerequisites:

| Prerequisite                                 | Description                                                                                                                                                                                                                              |
|-------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Mercado Pago seller account         | To integrate with Mercado Pago, you need to have a seller account. If you don’t have one yet, visit the [page](https://www.mercadopago.cl/hub/registration?from_landing=true&contextual=company&entity=pj) to create it for free.                                                                             |
| Application created in [Your integrations](/developers/panel/app)      | Applications are the different integrations contained in one or more stores. You can create an application for each solution you implement to keep everything organized and maintain control for easier management.  <br><br> To integrate **Main Apps**, it is necessary to create an application and obtain the `application_id`, which must be sent in the manifest. For more information on this process, see the Integration [Configuration section](#bookmark_integration_configuration).  <br><br> Refer to the [documentation of the Developer dashboard](/developers/en/docs/mp-point/additional-content/your-integrations/dashboard) to create your application. |
| Mercado Pago Point device        | To integrate with Mercado Pago, you need to be provided with a Point device. To obtain it, **contact your portfolio sales executive**.                                                  |
| Mercado Pago application                 | In addition to the device, it is essential to have the Mercado Pago application to log in and manage the collections made. You can download it for both [Android](https://play.google.com/store/apps/details?id=com.mercadopago.wallet&hl=pt_BR&pli=1) and [iOS](https://apps.apple.com/br/app/mercado-pago-banco-digital/id925436649) devices.                                                |

## Integration configuration

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
