# Credentials

Credentials are unique access keys that we use to identify an integration in your account. They are directly linked to the application you created for that integration and will allow you to develop your project with the best Mercado Pago security measures.

## Types of credentials

Credentials are divided into two types: **production credentials** and **test credentials**. Below, we explain what they are about.

:::::TabsComponent

::::TabComponent{title="Production credentials"}
### Production credentials
**Production credentials** are a set of keys that allow you to receive real payments in stores and other applications.

When accessing production credentials, the following credential pairs will be displayed: **Public Key and Access Token**, as well as **Client ID and Client Secret**.

### Public Key and Access Token
The **Public Key** and **Access Token** credentials are used, not necessarily together, in integrations made with Mercado Pago payment solutions. They are directly linked to the application you created, so each credential pair is unique for each integration.

| Type | Description |
|---|---|
| Public Key | The application's public key is generally used in the *frontend*. It allows, for example, access to information about payment methods and encrypt card data. |
| Access Token | Application's private key that should always be used in the *backend* to generate payments. It is essential to keep this information safe on your servers. |

For more information on which credentials will be needed for your integration, see the [documentation](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/docs) of the solution being integrated.

### Client ID and Client Secret
The **Client ID** and **Client Secret** credentials are used primarily in integrations that use [OAuth](/developers/es/docs/security/oauth/introduction) as a protocol for obtaining private information from Mercado Pago accounts. In particular, they are used during the **Client Credentials** flow (_grant type_), which allows you to access a resource on your own behalf and obtain an Access Token without user interaction.

They may also be required in some older integrations with e-commerce platforms.

| Type | Description |
|---|---|
| Client ID | Unique identifier that represents your integration. |
| Client Secret | Private key used in some plugins to generate payments. It is extremely important to keep this information secure on your servers and not allow access to any user of the system or intruder. | 

::::

::::TabComponent{title="Test credentials"}
### Test credentials

Test credentials are a set of keys that are used both in the development stage, to ensure secure settings, and in the testing stage, to test the integration.

----[mla, mlc, mlu, mlm, mco, mpe]----
> NOTE
> 
> Test credentials are only available for [Checkout API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/docs/checkout-api/landing) and [Checkout Bricks](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/docs/checkout-bricks/landing) integrations.
---------------

----[mlb]----
> NOTE
> 
> Test credentials are only available for [Checkout Transparente](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/docs/checkout-api/landing) and [Checkout Bricks](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/docs/checkout-bricks/landing) integrations.
---------------

When accessing the test credentials, the **Public Key and Access Token** credential pair will be displayed.

### Public Key and Access Token

The test **Public Key** and **Access Token** credentials are used in the same way as production credentials, but will not allow any real transactions to be made. In some integrations, they will be required during the development stage to simulate transactions and verify that your integration works correctly.

| Type | Description |
|---|---|
| Public Key | The application's public key is generally used in the *frontend*. It allows, for example, access to information about payment methods and encrypt card data. |
| Access Token | Application's private key that should always be used in the *backend* to generate payments. It is essential to keep this information safe on your servers. |

> NOTE
> 
> If when creating an application you selected a Mercado Pago product that does not require test credentials, you will not be able to use them. Instead, you must use the production credentials of a [test account](/developers/es/docs/your-integrations/test/accounts) to test your integration properly.

::::

:::::

## Get credentials

Mercado Pago credentials are created from a Mercado Pago application. That is, they are directly linked to the
:toolTipComponent[application]{link="/developers/es/docs/your-integrations/application-details" linkText="Application details" content="Entity registered in Mercado Pago that acts as an identifier to manage your integrations. For more information, see the documentation on [Application details](/developers/es/docs/your-integrations/application-details)."} that you created through Your integrations.

Below, learn how to get the credentials.

1. In the upper right corner of [Mercado Pago Developers](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es), click **Log in** and fill in the required data with the information corresponding to your Mercado Pago account. Then, click on the **Your integrations** button located in the upper right corner.
2. Access your application or create one if you have not already done so.
3. You will find your credentials under the title **Testing > Test credentials** or **Production > Production credentials**, in the menu located on the left side of the screen.


----[mlc, mlu, mlm, mco, mpe]----
![Como acessar as credenciais através das Suas Integrações](/images/snippets/credentials-test-panel-es.jpg)

------------
----[mla, mlb]----
![Como acessar as credenciais através das Suas Integrações](/images/snippets/credentials-test-panel-pt.gif)

------------


----[mlc, mlu, mlm, mco, mpe]----
![Cómo acceder a las credenciales a través de Tus Integraciones](/images/snippets/credentials-prod-panel-es-v2.jpg)

------------
----[mla, mlb]----
![Cómo acceder a las credenciales a través de Tus Integraciones](/images/snippets/credentials-prod-panel-es-v2.gif)

------------

### Activate production credentials
To obtain production credentials, you must **activate them** by completing some information about your business. Follow the steps below:

1. Go to [Your integrations](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app) and select an application.
2. Go to the **Production credentials** section in the left side menu. You will find the **Public Key** and the **Access Token of the test user**.
3. In the **Industry** field, select from the drop-down menu the industry or category to which the business you are integrating belongs.
4. In the **Website (required)** field, complete with the URL of your business website.
5. Accept the ----[mla, mlc, mlu, mlm, mco, mpe]----[Privacy Statement](https://www.mercadopago[FAKER[URL][DOMAIN]]/privacidad)----------------[mlb]----[Privacy Statement](https://www.mercadopago.com.br/privacidade)------------ and the [Terms and Conditions](/developers/es/docs/resources/legal/terms-and-conditions). Fill in the reCAPTCHA and click on **Activate production credentials**.

When accessing production credentials, the following credential pairs will be displayed: **Public Key and Access Token**, as well as **Client ID and Client Secret**.

> NOTE
>
> Test credentials do not need to be activated. By simply creating an application, you can already use them.

## Share credentials

If you are developing for someone else or receiving help in the integration or configuration of your stores, you can securely share the credentials with another Mercado Pago account.

You can share credentials **up to a maximum of 10 times**. If you reach this limit, you must delete old permissions, without impacting already configured integrations.

In addition, if for security reasons you no longer want to share your credentials, you can cancel access.

Below, we show you how to share credentials.

1. In the upper right corner of [Mercado Pago Developers](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference), click **Log in** and enter the required data with the information corresponding to your Mercado Pago account. Then, click on the **Your integrations** button located in the upper right corner.
2. Access the application of the integration for which you need to share the credentials.
3. Go to the **Testing** or **Production** section, depending on the type of credential you want to share. Remember that to access production credentials, you must activate them. If you don't know how to activate them, go to [Activate production credentials](#activate-credenciales-de-producción).
4. Once you select the credentials, go to the *Share credentials with a developer* section and click on the **Share Credentials** button.
5. Enter the email address of the person you want to grant access to. **Remember**: it is mandatory that the email address is associated with a Mercado Pago account.

----[mla, mlb]----
![Share credentials in Your Integrations](/images/snippets/share-credentials-panel-pt.gif)

------------
----[mlc, mlu, mlm, mco, mpe]----
![Share credentials in Your Integrations](/images/snippets/share-credentials-panel-es.jpg)

------------

## Renew credentials

You can renew your **production credentials** for security reasons or any other relevant reason.

> WARNING
>
> Renewing credentials already configured in an integration will affect its operation. It is necessary that **you replace the old credentials with the ones obtained** after the renewal process to continue operating.

To renew a credential pair, follow the steps below.

1. Access your production credentials through [Your integrations](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app).
2. Select the credential pair you want to renew. These can be **Public Key** and **Access Token** or **Client ID** and **Client Secret**. Keep in mind that both credentials in the pair you choose will be renewed.
3. Click on the three dots located to the right of the credential you want to renew and select **Renew**. Click on **Renew now** to confirm the change.

----[mla, mlb]----
![Como renovar suas credenciais](/images/snippets/renew-credentials-pt.gif)

------------
----[mlc, mlu, mlm, mco, mpe]----
![Como renovar suas credenciais](/images/snippets/renew-credentials-es.png)

------------
Ready, your credentials have been renewed.