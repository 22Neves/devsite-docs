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

Para inicializar la biblioteca de Mercado Pago, deberás utilizar tus *credenciales*, claves únicas con las que identificamos una integración en tu cuenta. Están directamente vinculadas a la aplicación que creaste para esa integración, y te permitirán desarrollar tu proyecto contando con las mejores medidas de seguridad de Mercado Pago. 

En esta etapa, deberás utilizar tu *Public Key de pruebas*, a la que podrás acceder ingresando a los [Detalles de tu aplicación](/developers/es/docs/your-integrations/application-details) en [Tus integraciones](/developers/panel/app), bajo el título **Pruebas > Credenciales de prueba** en el menú ubicado a la izquierda de la pantalla.

![mercado-pago-library](/images/api-orders/development-environment-publickey-es.png) 

> Si estás desarrollando para otra persona, podrás acceder a las credenciales de las aplicaciones que no administras. Consulta Compartir credenciales para más información.

Una vez hayas localizado la *Public Key*, cópiala e inclúyela en el _frontend_ para poder acceder a los datos necesarios para interactuar con nuestros servicios, así como cifrar aquellos datos sensibles involucrados en los pagos que vayas a recibir.

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