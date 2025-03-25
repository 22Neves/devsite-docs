# Configure development environment

To start your integration with Mercado Pago's payment solutions, it is necessary to prepare your development environment with a series of basic configurations that will allow you to access Mercado Pago's functionalities from the frontend securely.

> CLIENT_SIDE
>
> h2
>
> Include the MercadoPago.js Library

Use our official libraries to access Mercado Pago's functionalities from your frontend and securely capture the payment data.

[[[
```html
<body>
  <script src="https://sdk.mercadopago.com/js/v2"></script>
</body>
```
```node
npm install @mercadopago/sdk-js

```
]]]

> CLIENT_SIDE
>
> h2
>
> Initialize Mercado Pago Library

To initialize the Mercado Pago library, you will need to use your :toolTipComponent[credentials]{content="Unique access keys used to identify an integration in your account, linked to your application. For more information, access the [Credentials documentation](/developers/en/docs/checkout-api/more-resources/credentials)."}, unique keys that identify an integration in your account. They are directly linked to the [application]{content="Entity registered in Mercado Pago that acts as an identifier for managing your integrations. For more information, access the [Application details documentation](/developers/en/docs/checkout-api/more-resources/application-details)."} you created for that integration and will allow you to develop your project with the best security measures from Mercado Pago.

At this stage, you should use your [test Public Key]{content="Testing public key, used in the frontend to access information and encrypt data, whether in the development stage or the testing stage. You can access it through **Your integrations > Application details > Testing > Testing credentials**."}, which you can access by going to the [application details](/developers/en/docs/checkout-api/more-resources/application-details) in [Your integrations](/developers/panel/app), under the title **Tests > Test credentials** in the menu located on the left side of the screen.

----[mlb]----
![mercado-pago-library](/images/api-orders/development-environment-publickey-pt.png) 

------------ 
----[mla, mlm, mlu, mco, mlc, mpe]----
![mercado-pago-library](/images/api-orders/development-environment-publickey-es.png) 

------------

> NEUTRAL_MESSAGE
>
> If you are developing for someone else, you will be able to access the credentials of the applications you do not manage. Refer to Share Credentials for more information.

Once you have located the [Public Key]{content="Testing public key, used in the frontend to access information and encrypt data, whether in the development stage or the testing stage. You can access it through **Your integrations > Application details > Testing > Testing credentials**."}, copy it and include it in the frontend. include your in the frontend. By doing this, you will be able to access the necessary data for each payment method, as well as encrypt payer and card data.

[[[
```html 
<script>
  const mp = new MercadoPago("YOUR_PUBLIC_KEY");
</script>

```
```javascript
import { loadMercadoPago } from "@mercadopago/sdk-js";

await loadMercadoPago();
const mp = new window.MercadoPago("YOUR_PUBLIC_KEY");

```
]]]

With these configurations, your development environment is already ready to continue with the setup of each of the payment methods you want to offer in the online store.