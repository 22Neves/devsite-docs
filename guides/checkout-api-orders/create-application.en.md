# Create application

**Applications** are registered entities within Mercado Pago that act as a unique identifier for managing the authentication and authorization of your integrations. In other words, they serve as the link between your development and Mercado Pago, and they constitute the first stage in carrying out the integration.

With them, you can access the necessary credentials to interact with our APIs or specific services, as well as manage and organize your integration.

To create an **application**, follow the steps below.

1. In the upper right corner of Mercado Pago Developers, click on **Login** and enter the required information with the data for your Mercado Pago account.
2. Once you are logged in, you will have access to **Your Integrations**. There, click on **Create application**.

> WARNING
>
> Attention
>
> To protect your account and ensure compliance with operations, during the creation of an application, you will need to do an identity verification if you haven’t done so already, or a re-authentication if you have previously completed the verification process.

3. Enter a **name** to identify your application. The limit is 50 characters.
4. When asked about the **type of payment solution to integrate**, select **Online payments**, which is the type of solution corresponding to virtual stores.
5. Since you are creating an application for the ----[mlb]---- Checkout Transparente------------ ----[mla, mlm, mlu, mco, mlc, mpe]---- Checkout API ------------, in "**Are you using an e-commerce platform?**", indicate that you are **not** using an e-commerce platform, as this solution is for integration into self-developed sites.
6. Then, choose ----[mlb]---- **CheckoutTransparente**------------ ----[mla, mlm, mlu, mco, mlc, mpe]---- **CheckoutAPI** ------------  as the product you are integrating.
7. Accept the [Privacy Statement]() and the [Terms and Conditions](/developers/en/docs/resources/legal/terms-and-conditions) and click on **Create application**.

In [Your integration](/developers/panel/app), you will be able to view the list of all your created applications and access the [Application details]() for each of them.



> WARNING
>
> Important
>
> If you wish, you can edit or delete an application. In the latter case, keep in mind that your store will lose the ability to receive payments through the Mercado Pago integration associated with that application. For more information, please refer to the [Application details]().