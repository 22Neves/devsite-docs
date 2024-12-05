# Requirements

Before you start developing your solution, take a look at the requirements that must be met.

| Requirement | Description |
|---|---|
| Application  | Applications are the different integrations in one or more stores. You can create an application for each solution you implement to keep everything organized and on track for easier management. Check [Your integrations](/developers/es/docs/main-apps/additional-content/your-integrations/introduction) for more information on how to create an application. |
| Credentials | Unique passwords with which we identify an integration in your account. To perform the integrations, you will need the **Client ID**. Check the [Credentials documentation](/developers/en/docss/main-apps/additional-content/your-integrations/credentials) for more information. |
|Store and POS | The stores and POS created in Mercado Pago allow you to manage the sales made in a business. To create them, access the [Mercado Pago Panel](https://www.mercadopago[FAKER][URL][DOMAIN]/stores#from-section=menu)|
| Mercado Pago's Point Smart | Point Smart is the Mercado Pago card machine that allows buyers to pay in person quickly and securely using credit or debit cards.|
| Device pre-configuration| In order for the machines to operate in **Integrated mode** and for the pre-configuration to be carried out, share with Mercado Pago the account that will be used for the integration, as well as the cash register and store configurations and the serial numbers of the devices. |
|Development kit | To start development, download the [Development kit](https://github.com/mercadolibre/point-mainapp-demo-android) provided by Mercado Pago. |
|Android Studio| OAuth is an authorization protocol that allows applications to have limited access to the private information of Mercado Pago accounts. Install the [integrated development environment](https://developer.android.com/studio) to build and debug the main apps. |
|OAuth| If you want to obtain information from the seller's account, do the [OAuth flow](/developers/en/docs/main-apps/additional-content/security/oauth/introduction). |

## Point Smart technical specifications

To ensure that the integration is successful, consider the Point Smart machine's characteristics, wether it is the A910 or the N950, and how the application will adapt to them.

![prerequisites](/main-apps/prerequisites-all.png)

| Especificación | A910 | N950 |
|---|---|---|
|Screen| 5'' IPS WXGA 720 x 1280 Pixels <br> Multi-Point Capacitive HD Touch Screen | 5.99-inch TFT full color LCD display, 1440 x 720 pixels,  with adjustable backlight, capacitive multi-touch screen and electronic signature |
|Operating system|Android 6| Android 12|
|Printer| Yes <br> 40 Lines/Sec <br> Paper roll outer diameter: 40mm | High-speed thermal printer, 80 mm/s. <br> Paper roll diameter: 40mm <br> Paper width: 58mm |
|RAM memory|1GB| 2/3/4 GB |
|Internal storage|6GB| 16/32/64GB |
|Payment methods processed|Chip & PIN <br> NFC Contactless <br> Magnetic Stripe| Chip & PIN <br>  Contactless cards <br> NFC or QR-code based wallets |
|Architecture|ARMv7| ARMv7-M security core, 192MHz |
|Android System Web View (render the WebViews on Android apps)|Package: com.android.webview <br> Version: 52.0.2743.100 |Package: com.android.webview <br> Version: 93.0.4577.62 |