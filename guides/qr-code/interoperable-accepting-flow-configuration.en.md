# Configure environment

Follow the steps below to configure the environment that will allow you to operate with Mercado Pago QR codes in acceptor flow.

## 1. Create business account and application in Mercado Pago

To start the configuration process, it is necessary to have a business account in Mercado Pago, which will allow you to create an application in [Mercado Pago Developers](https://www.mercadopago.com.ar/developers/en).

To create your business account, visit our [registration page](https://www.mercadopago.com.ar/hub/registration/landing) and fill out the requested information with the details of the digital wallet you represent.

Then, go to [Mercado Pago Developers](https://www.mercadopago.com.ar/developers/en), access [Your Integrations](/developers/panel/app) in the upper right corner of the screen, and log in with the business account corresponding to the wallet.

![Home Mercado Pago Developers](/images/qr/developers-your-integrations-es.png)

On the next screen, click on the **Create Application** button.

![Create Application](/images/dashboard/dashboard-es.png)

This will redirect you to the Basic Settings screen, where you need to fill out the requested information as indicated below:
 * **Application Name**: choose a name for the application, associated with the wallet for which you are creating it. You have a limit of 50 characters.
 * As a **payment solution** to integrate, select **In-person payments**.
 * When selecting the **product to integrate**, choose **QR Code**.
 * **It is not** necessary to select the **integration model**.

![Application for QR Code](/images/qr/application-qr-es.png)

Finally, check the box to authorize the use of your personal data according to the [Privacy Statement](https://www.mercadopago.com.ar/privacidad) and certify that your account uses Mercado Pago tools in accordance with the [Terms and Conditions](/developers/en/docs/resources/legal/terms-and-conditions), as well as the **I am not a robot** checkbox, and click **Create Application**.

This will automatically generate a card in [Your Integrations](/developers/panel/app) with the name and number of the application, allowing you to access its details when necessary.


## 2. Request registration and incorporation of the wallet

To continue with the configuration of the interoperable QR, it is necessary for the digital wallet to request registration and its incorporation into Mercado Pago.

To do this, you must send a request to our [Support team](/developers/en/support/center/tickets#from=/mp_wcs_v2/needmorehelp&to=receive_technical_support_for_integrations) providing the following information.

| Field | Description |
|---|---|
| `identifier` | Commercial name of the digital wallet, as it is known in the market. |
| `application_id` | This is the identifier of the application created for the digital wallet. You can find it as **Application Number** within [Application Details](https://www.mercadopago.com.ar/developers/panel/app). |
| `user_business_id` | Identifier of the user who created the application for the digital wallet. You can find it as **User ID** within [Application Details](https://www.mercadopago.com.ar/developers/panel/app). |

With this information, our Support team will manage the incorporation of the wallet and will subsequently confirm its registration.

## 3. Obtain Credentials

To use Mercado Pago APIs, it is necessary to obtain credentials through the [OAuth](/developers/en/docs/qr-code/additional-content/security/oauth/introduction) flow. This way, you can create an Access Token that will allow you to securely access the resources of the application created.

To obtain it, follow the steps below.
1. Within [Your Integrations](https://www.mercadopago.com.ar/developers/panel/app), select the application created for the digital wallet.
2. In the menu displayed on the left side of the screen, select the **Production Credentials** option.
3. Locate the [Client ID and Client Secret](/developers/en/docs/qr-code/additional-content/your-integrations/credentials#:~:text=solution%20being%20integrated.-,Client%20ID%20and%20Client%20Secret,-The%20Client%20ID), which you will use to generate the Access Token via the OAuth flow, as shown in the following image.

![Client ID and Client Secret](/images/qr/interoperable-credentials-es.png)

> WARNING
>
> Important
>
> **Do not** use the Public Key and Access Token credentials shown in the Panel, as they do not correspond to integrations that use the OAuth protocol.

4. Send a **POST** request to the endpoint [/oauth/token](/developers/en/reference/oauth/_oauth_token/post) with the required parameters described below to generate your Access Token.

```curl
curl --location 'https://api.mercadopago.com/oauth/token' \
--header 'Content-Type: application/json' \
--data '{
 "client_id": "{CLIENT_ID}",
 "client_secret": "{CLIENT_SECRET}",
 "grant_type": "client_credentials"
 }'
````

| Field | Description |
|---|---|
| `client_id` | Copy and paste the value assigned to the Client ID in the **Credentials** section within "Your Integrations." |
| `client_secret` | Copy and paste the value assigned to the Client Secret in the **Credentials** section within "Your Integrations." |
| `grant_type` | The OAuth protocol allows obtaining an Access Token through different [access flows (grant types)](/developers/en/docs/qr-code/additional-content/security/oauth/introduction#accessflowsgranttypes). In this case, you must fill the field with the value `client_credentials`, which allows you to obtain it to access your own resources. More information about this flow can be found in [Get Access Token](/developers/en/docs/qr-code/additional-content/security/oauth/creation#bookmark_client_credentials).  |

In the response to your request, you will receive, among other parameters, your **Access Token**, which you should use in the calls to Mercado Pago APIs once you have the registration of the wallet granted by our Support team.

 ```json
 {
   "access_token": "{ACCESS_TOKEN}",
   "token_type": "Bearer",
   "expires_in": 21600,
   "scope": "offline_access read write",
   "user_id": {USER_ID},
   "live_mode": true
 }
 ```

> WARNING
>
> Important
>
> The Access Token generated through the Client Credentials flow will expire in **6 hours (21600 seconds)** after being created. Renew it before expiration by sending a new request to the endpoint [/oauth/token](/developers/en/reference/oauth/_oauth_token/post) to avoid failures in your transactions.

## 4. Configure Webhook Notifications (exclusive for credit card payments)

When configuring the interoperability of Mercado Pago QR Codes, it is also possible to set up [Webhook notifications](/developers/en/docs/qr-code/additional-content/your-integrations/notifications/webhooks) for credit cards payments.

> WARNING
>
> Important
>
> The configuration of notifications for credit card interoperability will only be possible if the incorporation of the digital wallet into the Mercado Pago system has already been completed. If you have not yet received confirmation from our Support team, you must wait.

To do this, follow the steps below.
1. Access [Your Integrations](https://www.mercadopago.com.ar/developers/panel/app) and select the application created for the digital wallet.
2. In the menu displayed on the left side of the screen, select the option **Notifications > Webhooks**.
3. In the **Production Mode** tab, provide the URL that will be used to receive notifications.
4. In **Events**, choose the option **Payments (credit card interoperability)**.

![Webhook Configuration](/images/dashboard/webhooks-es.png)

5. Click on **Save** and confirm it on the next screen.