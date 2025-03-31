> CLIENT_SIDE
>
> h1
>
> Agregar el SDK al frontend e inicializar el checkout 

Una vez que hayas configurado tu backend, es necesario que configures el frontend para completar la experiencia de cobro del lado del cliente. Para esto, puedes utilizar el SDK MercadoPago.js, que permite capturar pagos directamente en el frontend de manera segura. 

En esta sección, verás cómo incluirlo e inicializarlo correctamente, para finalmente renderizar el botón de pago de Mercado Pago.

> Si lo prefieres, puedes descargar el SDKs MercadoPago.js en nuestras [bibliotecas oficiales](/developers/es/docs/sdks-library/client-side/mp-js-v2).

:::::TabsComponent

::::TabComponent{title="Incluir el SDK con HTML/js"}
## Incluir el SDK con HTML/js

Para incluir el SDK MercadoPago.js en tu página HTML desde un **CDN (Content Delivery Network)**, primero deberás agregar la etiqueta `<script>` justo antes de la etiqueta `</body>` en tu archivo HTML principal, tal como te mostramos en el siguiente ejemplo.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Mi Integración con Checkout Pro</title>
</head>
<body>

  <!-- Contenido de tu página -->

  <script src="https://sdk.mercadopago.com/js/v2"></script>

  <script>
    // Tu código JavaScript irá aquí
  </script>

</body>
</html>
```

## Inicializar el checkout desde la preferencia de pago

Después de incluir el SDK en tu frontend, es momento de inicializarlo y luego iniciar el Checkout.

Para continuar, deberás utilizar tu credencial `public key` de producción, a la que podrás acceder ingresando a los **Detalles de tu aplicación** en [Tus integraciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app), bajo el título **Producción > Credenciales de producción** en el menú ubicado a la izquierda de la pantalla.

> NOTE
>
> Nota
>
> Si estás desarrollando para otra persona, podrás acceder a las credenciales de las aplicaciones que no administras. Consulta [Compartir credenciales](/developers/es/docs/checkout-pro/additional-content/your-integrations/credentials) para más información.

También necesitarás utilizar el identificador de la preferencia de pago que obtuviste como respuesta en [Crear y configurar una preferencia de pago](/developers/es/docs/checkout-pro/create-payment-preference).

A continuación, para inicializar el SDK utilizando un CDN, deberás ejecutar este código dentro de la etiqueta `<script>`, reemplazando el valor `YOUR_PUBLIC_KEY`por tu clave y `YOUR_PREFERENCE_ID` por el **identificador de la preferencia de pago**.

```js
<script src="https://sdk.mercadopago.com/js/v2"></script>
<script>
  // Configura tu clave pública de Mercado Pago
  const publicKey = 'YOUR_PUBLIC_KEY';  
  // Configura el ID de preferencia que deberías recibir de tu backend
  const preferenceId = 'YOUR_PREFERENCE_ID';
  
  // Inicializa el SDK de Mercado Pago
  const mp = new MercadoPago(publicKey);
  
  // Crea el botón de pago
  const checkout = mp.checkout({
    preference: {
      id: preferenceId
    },
    render: {
      container: '#wallet_container', // Usa el ID de tu div existente
      label: 'Pagar con Mercado Pago'
    }
  });
</script>
```

> CLIENT_SIDE
>
> h2
>
> Crear un contenedor HTML para el botón de pago

Por último, necesitarás crear un contenedor en tu HTML para definir la ubicación en la cual se mostrará el botón de pago de MercadoPago. La creación del contenedor se realiza insertando un elemento en el código HTML de la página en la que se representará el componente. 

```html
<!-- Contenedor para el botón de pago -->
<div id="wallet_container"></div>
```

## Renderizar el botón de pago

El SDK de Mercado Pago renderizará automáticamente un botón dentro de este elemento, que será responsable de redirigir al comprador hacia un formulario de compra en el ambiente de Mercado Pago, tal como se muestra en la siguiente imagen.

![Button](/images/cow/wallet-render-es.png)
::::

::::TabComponent{title="Instalar el SDK utilizando React"}
## Instalar el SDK utilizando react

Para incluir el SDK MercadoPago.js en el frontend de tu proyecto React, primero deberás configurar tu entorno de React. Para eso, asegúrate de tener **Node.js** y **npm** instalados en tu sistema. Si no los tienen, descárgalos desde el [sitio oficial de Node.js](http://Node.js).

En tu terminal o línea de comandos, ejecuta el siguiente comando para crear una nueva aplicación de React:

```
npx create-react-app my-mercadopago-app
```

Esto creará un nuevo directorio llamado `my-mercadopago-app` con una estructura básica de aplicación React.

### Instalar SDK MercadoPago.js

Instala la biblioteca SDK MercadoPago.js en el directorio `my-mercadopago-app`. Puedes hacerlo ejecutando el siguiente comando:

```
npm install @mercadopago/sdk-react
```

## Crear un componente para el botón de pago

Abre el archivo `src/App.js` de tu aplicación React. Una vez allí, modifica el contenido del archivo para integrar el componente `wallet` de Mercado Pago, que es el encargado de mostrar el botón de pago de Mercado Pago.

Necesitarás reemplazar el valor `YOUR_PREFERENCE_ID` utilizando el **identificador de la preferencia de pago** que obtuviste como respuesta en [Crear y configurar una preferencia de pago](/developers/es/docs/checkout-pro/create-payment-preference).

A continuación, te compartimos un ejemplo de cómo completar el archivo `src/App.js`.

```js
import React from 'react';
import { Wallet } from '@mercadopago/sdk-react';

const App = () => {
  return (
    <div>
      <h1>MercadoPago Checkout</h1>
      <Wallet initialization={{ preferenceId: 'YOUR_PREFERENCE_ID' }} />
    </div>
  );
};

export default App;
```

## Renderizar el botón de pago

Al ejecutar tu aplicación en React, el SDK de Mercado Pago renderizará el botón de pago que será responsable de redirigir al comprador hacia un formulario de compra en el ambiente de Mercado Pago, tal como se muestra en la siguiente imagen.

![Button](/images/cow/wallet-render-es.png)
::::

:::::

<br>

Una vez que hayas finalizado la configuración de tu frontend, deberás configurar las [Notificaciones](/developers/es/docs/checkout-pro/payment-notifications) para que tu integración reciba información en tiempo real sobre los eventos que ocurren con Mercado Pago.

<br>
<br>

:::AccordionComponent{title="Personalización"}
Si deseas, puedes hacer algunos cambios en los textos o un cambio visual en el botón de pago de Mercado Pago. Para eso, accede a las siguientes documentaciones.

- [Cambiar textos de los botones](/developers/es/docs/checkout-pro/additional-settings/user-interface/change-button-texts): elige los diferentes textos que puedes mostrar en el botón de pago.
- [Cambiar la apariencia del botón](/developers/es/docs/checkout-pro/additional-settings/user-interface/change-button-appearance): personaliza el aspecto del botón de pago.
- [Cambiar estilo de color](/developers/es/docs/checkout-pro/additional-settings/user-interface/color-style): elige una de las opciones de color disponibles para el botón de pago.
- [_Callbacks_ auxiliares](/developers/es/docs/checkout-pro/additional-settings/user-interface/auxiliary-callbacks): agrega _callbacks_ que se ejecutarán en momentos específicos del flujo de pago.
:::