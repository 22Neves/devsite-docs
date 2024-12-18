# Requisitos previos

Antes de empezar a desarrollar tu solución, consulta las condiciones que debes cumplir.

| Requisitos | Descripción |
|---|---|
| Aplicación  | Las aplicaciones son las diversas integraciones contenidas en una o varias tiendas. Puedes crear una aplicación para cada solución que implementes a fin de tener todo organizado y mantener un control que facilite la gestión. Consulta tu [Tus integraciones](/developers/es/docs/main-apps/additional-content/your-integrations/introduction) para obtener más información sobre cómo crear una aplicación. |
|Credenciales | Son contraseñas únicas con las que identificamos una integración en tu cuenta. Para realizar las integraciones, necesitarás del **Client ID**. Accede a [Credenciales](/developers/es/docs/main-apps/additional-content/your-integrations/credentials) para obtener más información. |
|Sucursal y caja | Las sucursales y cajas creadas en Mercado Pago te permiten administrar las ventas realizadas en un negocio. Para crearlas, accede al [Panel de Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/stores#from-section=menu)|
| Point Smart de Mercado Pago | Mercado Pago Point es la máquina de tarjetas de Mercado Pago que permite a los compradores realizar pagos presenciales de forma rápida y segura mediante tarjetas de crédito o débito.|
| Pre-configuración de dispositivos | Para que los lectores operen de **Modo integrado** y se haga la  pre-configuración, comparte con Mercado Pago la cuenta que se usarás para la integración, así como la configuración de cajas, tiendas y números de serie de dispositivos. |
|Kit de Desarrollo | Para empezar el desarrollo, descarga el [Kit de Desarrollo](https://github.com/mercadolibre/point-mainapp-demo-android) que ofrece Mercado Pago. |
|Android Studio | Instala el [ambiente de desarrollo Android](https://developer.android.com/studio) para construir y depurar las main apps. |
|OAuth | OAuth es un protocolo de autorización que permite que las aplicaciones tengan acceso limitado a la información privada de las cuentas de Mercado Pago. Para obtener información de la cuenta de quienes venden, haz el [flujo de OAuth](/developers/es/docs/main-apps/additional-content/security/oauth/introduction). |

## Especificaciones técnicas de Point Smart

Para garantizar que la integración sea exitosa, considera las características del lector Point Smart que posees, sea el A910 o el N950, y cómo la app se adaptará a ellas.

![prerequisites](/main-apps/prerequisites-all.png)

| Especificación | A910 | N950 |
|---|---|---|
|Pantalla| 5'' IPS WXGA 720 x 1280 Pixels <br> Multi-Point Capacitive HD Touch Screen | LCD TFT a todo color de 5,99 pulgadas, 1440 x 720 píxeles, con retroiluminación regulable, pantalla multitáctil capacitiva y firma electrónica |
|Sistema operativo|Android 6| Android 12|
|Impresora|Sí <br> 40 Líneas/Sec <br> Diámetro del rollo de papel: 40mm | Impresora térmica de alta velocidad, 80 mm/s. <br> Diámetro del rollo de papel: 40 mm <br> Ancho del papel: 58 mm |
|Memoria RAM|1GB| 2/3/4 GB |
|Almacenamiento interno|6GB| 16/32/64GB |
|Medios de pago procesados|Chip & PIN <br> NFC Contactless <br> Magnetic Stripe| Chip y PIN <br> Tarjetas sin contacto <br> Billeteras basadas en NFC o código QR|
|Arquitectura|ARMv7| ARMv7-M security core, 192MHz|
|Android System Web View (renderización de las WebViews en apps Android)|Paquete: com.android.webview <br> Versión: 52.0.2743.100 | Paquete: com.google.android.webview <br>Versión: 93.0.4577.62 |