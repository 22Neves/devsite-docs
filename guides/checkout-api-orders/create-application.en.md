# Create application

**Applications** are registered entities within Mercado Pago that act as a unique identifier for managing the authentication and authorization of your integrations. In other words, they serve as the link between your development and Mercado Pago, and they constitute the first stage in carrying out the integration.

With them, you can access the necessary :toolTipComponent[credentials]{content="Unique access keys used to identify an integration in your account, linked to your application. For more information, access the [Credentials documentation](/developers/en/docs/checkout-api/more-resources/credentials)."} to interact with our APIs or specific services, as well as manage and organize your integration.

To create an **application**, follow the steps below.

1. In the upper right corner of Mercado Pago Developers, click on **Login** and enter the required information with the data for your Mercado Pago account.
2. Once you are logged in, go to **Your Integrations**. There, click on **Create application**.

> WARNING
>
> Attention
>
> To protect your account and ensure compliance with operations, during the creation of an application, you will need to do an identity verification if you haven’t done so already, or a re-authentication if you have previously completed the verification process.

----[mlb]----
![create-application-1](/images/api-orders/create-application-1-pt.png)

------------ 
----[mla, mlm, mlu, mco, mlc, mpe]----
![create-application-1](/images/api-orders/create-application-1-es.png)

------------ 

3. Enter a **name** to identify your application. The limit is up to 50 alphanumeric characters.
4. When asked about the **type of payment solution to integrate**, select **Online payments**, which is the type of solution corresponding to virtual stores.
5. Since you are creating an application for the ----[mlb]---- Checkout Transparente------------ ----[mla, mlm, mlu, mco, mlc, mpe]---- Checkout API ------------, in "**Are you using an e-commerce platform?**", indicate that you are **not** using an [e-commerce platform](/developers/en/docs#platform-list), as this solution is for integration into self-developed sites.
6. Then, choose ----[mlb]---- **CheckoutTransparente**------------ ----[mla, mlm, mlu, mco, mlc, mpe]---- **CheckoutAPI** ------------  as the product you are integrating.
7. In "Integration model", select the integration model that aligns with your business model.
8. Accept the ----[mlb]---- [Privacy Statement](https://www.mercadopago.com.br/privacidade) ------------ ----[mla, mlm, mlu, mco, mlc, mpe]---- [Privacy Statement](https://www.mercadopago.com/privacidad) ------------ and the [Terms and Conditions](/developers/en/docs/resources/legal/terms-and-conditions) and click on **Create application**.

----[mlb]----
![create-application-2](/images/api-orders/create-application-2-pt.png)

------------ 
----[mla, mlm, mlu, mco, mlc, mpe]----
![create-application-2](/images/api-orders/create-application-2-es.png)

------------ 

In [Your integration](/developers/panel/app), you will be able to view the list of all your created applications and access the [application details](/developers/en/docs/checkout-api/more-resources/application-details) for each of them.

> NOTE
>
> If you wish, you can edit or delete an application. In the latter case, keep in mind that your store will lose the ability to receive payments through the Mercado Pago integration associated with that application. For more information, please refer to the [Application details](/developers/en/docs/checkout-api/more-resources/application-details).