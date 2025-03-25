# Configurar ambiente de desarrollo

Para comenzar a integrar las soluciones de cobro de Mercado Pago, es necesario preparar tu ambiente de desarrollo con una serie de configuraciones básicas que te permitirán acceder a las funcionalidades de Mercado Pago desde el _frontend_ de manera segura.

> CLIENT_SIDE
>
> h2
>
> Incluir la biblioteca MercadoPago.js

Utiliza nuestras bibliotecas oficiales para interactuar con Mercado Pago desde tu _frontend_ y capturar los datos de los pagos realizados de forma segura.

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
> Inicializar biblioteca de Mercado Pago

Para inicializar la biblioteca de Mercado Pago, deberás utilizar tus :toolTipComponent[credenciales]{content="Claves de acceso únicas con las que identificamos una integración en tu cuenta, vinculadas a tu aplicación. Para más información, accede a la [documentación de Credenciales](/developers/es/docs/checkout-api/resources/credentials)."}, claves únicas con las que identificamos una integración en tu cuenta. Están directamente vinculadas a la [aplicación]{content="Entidad registrada en Mercado Pago que actúa como un identificador para gestionar tus integraciones. Para más información,  accede a la documentación de [Detalles de aplicación](/developers/es/docs/your-integrations/application-details)."} que creaste para esa integración, y te permitirán desarrollar tu proyecto contando con las mejores medidas de seguridad de Mercado Pago. 

En esta etapa, deberás utilizar tu [_Public Key_ de pruebas]{content="Clave pública de pruebas, que es utilizada en el frontend para acceder a información y cifrar datos, sea en la etapa de desarrollo o en la de pruebas. Puedes acceder a ella a través de **Tus integraciones > Detalles de aplicación > Pruebas > Credenciales de prueba**."}, a la que podrás acceder ingresando a los [Detalles de tu aplicación](/developers/es/docs/your-integrations/application-details) en [Tus integraciones](/developers/panel/app), bajo el título **Pruebas > Credenciales de prueba** en el menú ubicado a la izquierda de la pantalla.

![mercado-pago-library](/images/api-orders/development-environment-publickey-es.png) 

> NEUTRAL_MESSAGE
>
> Si estás desarrollando para otra persona, podrás acceder a las credenciales de las aplicaciones que no administras. Consulta Compartir credenciales para más información.

Una vez hayas localizado la [_Public Key_]{content="Clave pública de pruebas, que es utilizada en el frontend para acceder a información y cifrar datos, sea en la etapa de desarrollo o en la de pruebas. Puedes acceder a ella a través de **Tus integraciones > Detalles de aplicación > Pruebas > Credenciales de prueba**."}, cópiala e inclúyela en el _frontend_ para poder acceder a los datos necesarios para interactuar con nuestros servicios, así como cifrar aquellos datos sensibles involucrados en los pagos que vayas a recibir.

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

Con estas configuraciones, tu ambiente de desarrollo ya está listo para avanzar con las configuraciones específicas de tu integración. 