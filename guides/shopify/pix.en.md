# Pix

**Mercado Pago Pix** facilitates financial transactions using QR codes or the Pix Copia e Cola functionality, allowing customers to make payments instantly at any time. Additionally, this service ensures immediate approval of transactions and offers the lowest fee when receiving payments.

To integrate Mercado Pago Pix, install the application through the [Shopify panel](/developers/en/docs/shopify/integration-configuration/pix#installviashopifyadminpanel) or the [Marketplace](/developers/en/docs/shopify/integration-configuration/pix#bookmark_install_via_marketplace). After installation, you can [configure the expiration period](/developers/en/docs/shopify/integration-configuration/pix#bookmark_configure_expiration_period).

> WARNING
>
> Importante
>
> To enable Pix payments, it's necessary to verify if the Pix keys have been created in your Mercado Pago account. If you haven't created them yet, we recommend watching the [video tutorial](https://www.youtube.com/watch?v=60tApKYVnkA) for a step-by-step guide.

## Install via Shopify admin panel

To install Mercado Pago Pix through the Shopify admin panel, follow the steps below:

1. Log in to your [Shopify store](https://accounts.shopify.com/store-login).
2. In the store's admin panel, click on **Settings** in the bottom-left corner of the page.

![Configurations](/images/shopify/pix-configurations-es.png) 

3. Once there, select the **Payments** option from the menu on the left side of the page.
4. Under **Accepted payment methods**, click on **Add payment method**.

![Add payment method](/images/shopify/pix-add-payment-method-es.png) 

5. Select the **Search by provider** tab and search for the application "Mercado Pago Pix". When you find it, select it.

![Add](/images/shopify/pix-app-search-es.png) 

6. Click on **Install**.

![Install](/images/shopify/pix-install-es.png) 

7. Carefully read the information about the requested permissions and click on **Install** again.

![Permissions](/images/shopify/pix-permissions-es.png) 

8. Click on **Manage account** to access the Mercado Pago environment and start the process of linking your store to your account to enable payments.

![installation chopro 6](/images/shopify/installation-pix-0-es.png)

9. Once inside the Mercado Pago environment, click on **Start linking** to begin the process.

![installation chopro 7](/images/shopify/connect-account-1-es.png)

10. If you are already logged into your Mercado Pago account, skip this step. Otherwise, enter your email and password to log in to your account.

![installation chopro 8](/images/shopify/connect-account-2-es.png)

11. Choose which Mercado Pago account you want to link to the store.

![installation chopro 9](/images/shopify/connect-account-3-es.png)

12. Click on **Link account** and accept the requested permissions. These permissions are essential for Mercado Pago to securely and seamlessly process payments from your store.

![installation chopro 10](/images/shopify/connect-account-4-es.png)

13. The process will run automatically and might take a few seconds.

![installation chopro 11](/images/shopify/connect-account-5-es.png)

> NOTE
>
> Once the store is linked to the Mercado Pago account in one application, it will not be necessary to repeat this process for other Mercado Pago applications for Shopify.

14. After linking your store to your Mercado Pago account, it is necessary to register a Pix key in your Mercado Pago account. Click on **Register Pix key** to register it.

15. After registering the Pix key, click on **Activate app**.

16. Click on **Go to settings** to return to the Shopify panel.

17. In the store's admin panel, go to **Settings > Payments** and click on **Activate** to enable Mercado Pago Pix.

The **Mercado Pago Pix** application has been successfully installed and configured, and it is now ready to process payments from your store directly into your Mercado Pago account.

## Configure expiration period

After installing the Mercado Pago Pix app, follow the steps below to configure the expiration period for Pix payments.

1. In the store's admin panel, go to **Settings > Payments**.
2. Locate the **Mercado Pago Pix** app and select the corresponding option.
3. On the next screen, click **More actions > Manage**.

![More actions](/images/shopify/pix-more-actions-es-1.png)

4. In the **"Expiration period for Pix payments"** field, select the desired option.

![Expiration date](/images/shopify/pix-expiration-date-es-1.png)

5. Click **Save**.

![Save expiration date](/images/shopify/pix-save-expiration-date-es-1.png)

Done! The expiration period has been set.