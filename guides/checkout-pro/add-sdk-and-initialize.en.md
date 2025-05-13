> CLIENT_SIDE
>
> h1
>
> Add the SDK to the frontend and initialize the checkout

Once you have configured your backend, you need to configure the frontend to complete the payment experience on the client-side. For this, you can use the MercadoPago.js SDK, which allows you to capture payments directly on the frontend securely.

In this section, you will learn how to include and initialize it correctly, to finally render the Mercado Pago payment button.

> If you prefer, you can download the MercadoPago.js SDK from our [official libraries](/developers/en/docs/sdks-library/client-side/mp-js-v2).

:::::TabsComponent

::::TabComponent{title="Include the SDK with HTML/js"}
## Include the SDK with HTML/js

To include the MercadoPago.js SDK in your HTML page from a **CDN (Content Delivery Network)**, you first need to add the `<script>` tag just before the `</body>` tag in your main HTML file, as shown in the following example.

```html
<!DOCTYPE html>
<html>
<head>
  <title>My integration with Checkout Pro</title>
</head>
<body>

  <!-- Your page content -->

  <script src="https://sdk.mercadopago.com/js/v2"></script>

  <script>
    // Your JavaScript code will go here
  </script>

</body>
</html>
```

## Inicializar el checkout desde la preferencia de pago

Después de incluir el SDK en tu frontend, es momento de inicializarlo y luego iniciar el Checkout.

To continue, you must use your production `public key` credential, which can be accessed in the **Details of your application** in [Your integrations](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app), under the title **Production > Production credentials** in the menu on the left side of the screen.

> NOTE
>
> Note
>
> If you are developing for someone else, you will be able to access the credentials of applications you do not manage. See [Share credentials](/developers/en/docs/checkout-pro/additional-content/your-integrations/credentials) for more information.

You will also need to use the payment preference ID that you obtained as a response in [Create and configure a payment preference](/developers/en/docs/checkout-pro/create-payment-preference).

Next, to initialize the SDK using a CDN, you should execute this code within the `<script>` tag, replacing the value `YOUR_PUBLIC_KEY` with your key and `YOUR_PREFERENCE_ID` with the **payment preference ID**.

```Javascript
<script src="https://sdk.mercadopago.com/js/v2"></script>
<script>
  // Configure sua chave pública do Mercado Pago
  const publicKey = "YOUR_PUBLIC_KEY";
  // Configure o ID de preferência que você deve receber do seu backend
  const preferenceId = "YOUR_PREFERENCE_ID";

  // Inicializa o SDK do Mercado Pago
  const mp = new MercadoPago(publicKey);

  // Cria o botão de pagamento
  const bricksBuilder = mp.bricks();
  const renderWalletBrick = async (bricksBuilder) => {
    await bricksBuilder.create("wallet", "walletBrick_container", {
      initialization: {
        preferenceId: "<PREFERENCE_ID>",
      }
});
  };

  renderWalletBrick(bricksBuilder);
</script>
```

> CLIENT_SIDE
>
> h2
>
> Create an HTML container for the payment button

Finally, you will need to create a container in your HTML to define the location where the MercadoPago payment button will be displayed. The creation of the container is done by inserting an element in the HTML code of the page where the component will be rendered.

```html
<!-- Container para o botão de pagamento -->
<div id="walletBrick_container"></div>
```

## Render the payment button

The Mercado Pago SDK will automatically render a button within this element, which will be responsible for redirecting the buyer to a purchase form in the Mercado Pago environment, as shown in the following image.

![Button](/images/cow/wallet-render-en.png)
::::

::::TabComponent{title="Install the SDK using React"}
## Install the SDK using React

To include the MercadoPago.js SDK in the frontend of your React project, you first need to set up your React environment. To do this, make sure you have **Node.js** and **npm** installed on your system. If you don't have them, download them from the [official Node.js site](http://Node.js).

In your terminal or command line, run the following command to create a new React application:

```
npx create-react-app my-mercadopago-app
```

This will create a new directory named `my-mercadopago-app` with a basic React application structure.

### Install MercadoPago.js SDK

Install the MercadoPago.js SDK library in the `my-mercadopago-app` directory. You can do this by running the following command:

```
npm install @mercadopago/sdk-react
```

## Create a component for the payment button

Open the `src/App.js` file of your React application. Once there, modify the content of the file to integrate the Mercado Pago `wallet` component, which is responsible for displaying the Mercado Pago payment button.

You will need to replace the value `YOUR_PREFERENCE_ID` with the **payment preference identifier** that you obtained as a response in [Create and configure a payment preference](/developers/en/docs/checkout-pro/create-payment-preference).

Below, we share an example of how to complete the `src/App.js` file.

```JavaScript
import React from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';

// Initializes Mercado Pago with your public key
initMercadoPago('YOUR_PUBLIC_KEY');

const App = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <h1>Payment Button</h1>
      <p>Click the button to make the payment.</p>
      {/* Renders the payment button */}
      <div style={{ width: '300px' }}>
        <Wallet initialization={{ preferenceId: 'YOUR_PREFERENCE_ID' }} />
      </div>
    </div>
  );
};

export default App;
```

## Render the payment button

When running your React application, the Mercado Pago SDK will render the payment button that will be responsible for redirecting the buyer to a purchase form in the Mercado Pago environment, as shown in the following image.

![Button](/images/cow/wallet-render-en.png)
::::

:::::

<br>

Once you have completed the configuration of your frontend, you will need to set up [Notifications](/developers/en/docs/checkout-pro/payment-notifications) so that your integration receives real-time information about the events that occur in your integration.

<br>
<br>

:::AccordionComponent{title="Personalization"}
If you wish, you can make some changes to the texts or a visual change to the Mercado Pago payment button. For that, access the following documentation.

- [Change button texts](/developers/en/docs/checkout-pro/additional-settings/user-interface/change-button-texts): choose the different texts you can display on the payment button.
- [Change the appearance of the button](/developers/en/docs/checkout-pro/additional-settings/user-interface/change-button-appearance): customize the appearance of the payment button.
- [Auxiliary callbacks](/developers/en/docs/checkout-pro/additional-settings/user-interface/auxiliary-callbacks): add callbacks that will be executed at specific moments of the payment flow.
:::