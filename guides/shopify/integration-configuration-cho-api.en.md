----[mlb]----
# Cartões

**Mercado Pago Cartões** ([Checkout Transparente](/developers/en/docs/checkout-api/landing)) is an app that allows transparent payments with debit or credit cards, where the entire checkout process happens within the online store environment, without the need to redirect to an external page. In addition to providing greater control in the customization and integration process, it reduces cart abandonment and increases the possibility of conversion.

To integrate Mercado Pago Cartões, install the application through the [Shopify panel](/developers/en/docs/shopify/integration-configuration/checkout-cards#bookmark_install_via_shopify_admin_panel) or the [Marketplace](/developers/en/docs/shopify/integration-configuration/checkout-cards#bookmark_install_via_marketplace). After installation, you can [configure the expiration period](/developers/en/docs/shopify/integration-configuration/checkout-cards#bookmark_configure_interest-free_installments).

> WARNING
>
> Attention
>
> The integration with Mercado Pago Cartões is not compatible with the **multi currency** feature of the Shopify platform.
> <br><br>
> This new application is exclusive for card payments. To configure Pix payments, refer to the [corresponding documentation](/developers/en/docs/shopify/integration-configuration/pix). For boleto bancário payments, use [Mercado Pago Checkout Pro](/developers/en/docs/shopify/integration-configuration/checkout-pro).

------------
----[mlm, mco, mlc, mla, mpe]----
# Tarjetas

**Mercado Pago Tarjetas** ([Checkout API](/developers/en/docs/checkout-api/landing)) is an app that allows transparent payments with debit or credit cards, where the entire checkout process happens within the online store environment, without the need to redirect to an external page. In addition to providing greater control in the customization and integration process, it reduces cart abandonment and increases the possibility of conversion.

To integrate Mercado Pago Tarjetas, install the application through the [Shopify panel](/developers/en/docs/shopify/integration-configuration/checkout-cards#bookmark_install_via_shopify_admin_panel) or the [Marketplace](/developers/en/docs/shopify/integration-configuration/checkout-cards#bookmark_install_via_marketplace). After installation, you can [configure the expiration period](/developers/en/docs/shopify/integration-configuration/checkout-cards#bookmark_configure_interest-free_installments).

> WARNING
>
> Attention
>
> The integration with Mercado Pago Tarjetas is not compatible with the **multi currency** feature of the Shopify platform.

------------
## Install via Shopify panel

----[mlb]----

To install Mercado Pago Cartões through the Shopify admin panel, follow the steps below:

------------
----[mlm, mco, mlc, mla, mpe]----

To install Mercado Pago Tarjetas through the Shopify admin panel, follow the steps below:

------------

1. Go to your [Shopify store](https://accounts.shopify.com/store-login).
2. In the admin panel, click **Settings** in the bottom-left corner of the page.
3. Once there, select the **Payments** option from the menu.

----[mla, mlb, mco, mlc, mpe, mlu]----
4. Under "Payment Providers," click **Choose a provider**.

![installation cards](/images/shopify/installation-chopro-2-es-all.png)

------------
----[mlm]----
4. Under "Supported Payment Methods," click **Add payment methods**.

![installation cards](/images/shopify/installation-chopro-2-es-mlm.png)

------------

5. On the "Third-party payment providers" screen, search for the "Mercado Pago Tarjetas" application.

![installation panel 2](/images/shopify/installation-cards-panel-2-es.png)

6. After locating it, select it and click **Install**. Carefully review the information about the requested permissions and click **Install** again.

----[mlm]----
![installation cards](/images/shopify/installation-cards-2-es-mlm.png)

------------
----[mco]----
![installation cards](/images/shopify/installation-cards-2-es-mco.png)

------------
----[mlc]----
![installation cards](/images/shopify/installation-cards-2-es-mlc.png)

------------
----[mla]----
![installation cards](/images/shopify/installation-cards-2-es-mla.png)

------------

7. Click **Manage account** to access the Mercado Pago environment and begin linking your store to your account to start receiving payments.

----[mlm]----
![installation cards](/images/shopify/installation-cards-3-es-mlm.png)

------------
----[mco]----
![installation cards](/images/shopify/installation-cards-3-es-mco.png)

------------
----[mlc]----
![installation cards](/images/shopify/installation-cards-3-es-mlc.png)

------------
----[mla]----
![installation cards](/images/shopify/installation-cards-3-es-mla.png)

------------

8. In the Mercado Pago environment, click **Start linking** to begin the process.

![installation cards 4](/images/shopify/connect-account-1-es.png)

9. If you are already logged into your Mercado Pago account, skip this step. Otherwise, enter your email and password to access your account.

![installation cards 5](/images/shopify/connect-account-2-es.png)

10. Choose which Mercado Pago account you want to link to the store.

![installation cards 6](/images/shopify/connect-account-3-es.png)

11. Click **Link account** and accept the requested permissions. These permissions are essential for Mercado Pago to securely and seamlessly process payments from your store.

![installation cards 7](/images/shopify/connect-account-4-es.png)

12. The process will run automatically and may take a few seconds.

![installation cards 8](/images/shopify/connect-account-5-es.png)

> NOTE
>
> Once the store is linked to the Mercado Pago account in one application, it will not be necessary to repeat this process for other Mercado Pago applications for Shopify.

13. After linking your store to your Mercado Pago account, click **Activate app**.

----[mlm]----
![installation cards](/images/shopify/installation-cards-6-es-mlm.png)

------------
----[mco, mlc, mla]----
![installation cards](/images/shopify/installation-cards-6-es-all.png)

------------

> NOTE
>
> At this stage, you can also access your Mercado Pago account to configure the available installment options and interest rates you want to offer your customers by clicking **Configure installments and interest**.

14. Click **Go to settings** to return to the Shopify panel.

![installation cards 8](/images/shopify/connect-account-7-es.png)

15. In the store's admin panel, go to **Settings > Payments** and click **Activate** to enable Mercado Pago Tarjetas.

----[mlm]----
![installation cards](/images/shopify/installation-cards-8-es-mlm.png)

------------
----[mco]----
![installation cards](/images/shopify/installation-cards-8-es-mco.png)

------------
----[mlc]----
![installation cards](/images/shopify/installation-cards-8-es-mlc.png)

------------
----[mla]----
![installation cards](/images/shopify/installation-cards-8-es-mla.png)

------------

> RED_MESSAGE
>
> If any of the credit card brands displayed on the screen are disabled, payments with that brand will not be processed.

16. Still under **Settings > Payments**, look for "Payment capture method" and ensure that the **Automatically at checkout** field is enabled to guarantee that payments are captured when the order is placed.

![installation cards 7](/images/shopify/installation-cards-7-es.png)

17. Click **Checkout > Customer contact method** and ensure that the "Email" field is selected as the contact method customers must provide to receive order notifications. **Using email as a contact method is mandatory to process payments with Mercado Pago.**

![installation cards 8](/images/shopify/installation-cards-8-es.png)

The **Mercado Pago Tarjetas** application has been successfully installed and configured, and it is now ready to process payments from your store directly into your Mercado Pago account.

----[mlb]----
By default, the fields **"House Number"** and **"Neighborhood"** are not automatically displayed in the order delivery data form. If you need to include them, contact Shopify's support team and request the activation of these fields.

----[mlm, mco, mlc, mla, mpe]----
> RED_MESSAGE
>
> Once the Mercado Pago Tarjetas installation is complete, we recommend complementing it by installing the **Mercado Pago Antifraud Plus** application, which features **3DS 2.0 (3-D Secure)** technology to **enhance your store's security and increase payment approval rates**. For more information, refer to the documentation on [How to prevent fraud in card payments](/developers/en/docs/shopify/how-tos/antifraude-plus).

------------
----[mlb]----
> RED_MESSAGE
>
> Once the Mercado Pago Tarjetas installation is complete, we recommend complementing it by installing the **Mercado Pago Antifraud Plus** application, which features **3DS 2.0 (3-D Secure)** technology to **enhance your store's security and increase payment approval rates**. For more information, refer to the documentation on [How to prevent fraud in card payments](/developers/en/docs/shopify/how-tos/antifraude-plus).

------------

## Install via Marketplace
----[mlb]----
To install Mercado Pago Cartões through the Marketplace, follow the steps below:

1. Go to the [**Mercado Pago Cartões** application page](https://apps.shopify.com/mercado-pago-cartoes?locale=pt-BR) in the Marketplace and click **Install**. If you haven’t already, log in with your Shopify account.

------------
----[mlm]----
To install Mercado Pago Tarjetas through the Marketplace, follow the steps below:

1. Go to the [**Mercado Pago Tarjetas** application page](https://apps.shopify.com/mercado-pago-tarjetas-mx) in the Marketplace and click **Install**. If you haven’t already, log in with your Shopify account.

------------
----[mlc]----
To install Mercado Pago Tarjetas through the Marketplace, follow the steps below:

1. Go to the [**Mercado Pago Tarjetas** application page](https://apps.shopify.com/mercado-pago-tarjetas-cl) in the Marketplace and click **Install**. If you haven’t already, log in with your Shopify account.

------------
----[mpe]----
To install Mercado Pago Tarjetas through the Marketplace, follow the steps below:

1. Go to the [**Mercado Pago Tarjetas** application page](https://apps.shopify.com/mercado-pago-tarjetas-pe) in the Marketplace and click **Install**. If you haven’t already, log in with your Shopify account.

------------
----[mla]----
To install Mercado Pago Tarjetas through the Marketplace, follow the steps below:

1. Go to the [**Mercado Pago Tarjetas** application page](https://apps.shopify.com/mercado-pago-tarjetas-ar) in the Marketplace and click **Install**. If you haven’t already, log in with your Shopify account.

------------
----[mco]----
To install Mercado Pago Tarjetas through the Marketplace, follow the steps below:

1. Go to the [**Mercado Pago Tarjetas** application page](https://apps.shopify.com/mercado-pago-tarjetas-co) in the Marketplace and click **Install**. If you haven’t already, log in with your Shopify account.

------------
![installation mkplace 0](/images/shopify/installation-cards-mkplace-0-es.png)

2. Carefully review the information about the requested permissions and click **Install** again.

![installation cards 3](/images/shopify/installation-cards-2-es.png)

The Mercado Pago Tarjetas application has been successfully installed through the Marketplace. Now, follow the instructions starting from step 7 in the section [Install application via the Shopify panel](#bookmark_instalar_via_painel_da_shopify) to complete linking your store with your Mercado Pago account.

## Configure interest-free installments

After installing and activating the **Mercado Pago Tarjetas** application, configure the option to offer your customers interest-free payments in installments with any credit card. To do so, follow the steps below.

1. Log in to your [Mercado Pago account](https://www.mercadopago[FAKER][URL][DOMAIN]/home).
2. Go to the **Your Business > Costs** section and select the **Checkout** option.
3. Under "Interest-Free Installments," click **Configure installments**.
4. Enable the option **Offer interest-free installments with credit card** and then choose up to how many installments you want to offer.
5. After configuring the interest-free installment options, go to your [Shopify store](https://accounts.shopify.com/store-login).
6. In the admin panel, click **Settings** in the bottom-left corner of the page.
7. Once there, select the **Payments** option from the menu on the left side of the page.
8. Under "Mercado Pago Tarjetas," click **Manage**.

![configure installments 5](/images/shopify/configure-installments-5-es.png)

9. Then, click **More actions > Manage**.

![configure installments 6](/images/shopify/configure-installments-6-es.png)

10. Finally, click **Sync** to ensure the interest-free installment settings are updated with your store. Whenever you change the interest-free installment settings, it will be necessary to **sync** the changes with your store.

![configure installments 7](/images/shopify/configure-installments-7-es-all.png)