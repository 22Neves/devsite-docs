# Salir a producción

Una vez finalizado el proceso de configuración y pruebas, tu integración estará lista para recibir pagos reales en producción.

A continuación, mira las recomendaciones necesarias para realizar este pasaje de manera eficaz y segura, garantizando que tu integración esté preparada para recibir transacciones reales.

## Usar credenciales de producción

Para salir a producción, deberás **reemplazar las credenciales de prueba por las credenciales de producción de tu aplicación de Mercado Pago** en tu integración.

Para hacerlo, ingresa a [Tus integraciones](/developers/panel/app) y, el menú lateral, accede a **Producción > Credenciales de producción**. Allí encontrarás tu `public_key`  y `access_token` productivos, que deberás utilizar en lugar de los de la cuenta de prueba.

Para más información, consulta nuestra documentación de [Credenciales](/developers/es/docs/checkout-pro/resources/credentials).

## Certificado SSL
[TXTSNIPPET][/guides/snippets/ssl-certificate/ssl-certificate]

## Medir la calidad de tu integración

Una vez que hayas terminado de configurar tu integración, recomendamos que realices una **medición de calidad**, que es un proceso de certificación de tu integración, con el que podrás asegurar que tu desarrollo cuente con los requisitos de calidad necesarios para asegurar una mejor experiencia, así como una mayor tasa de aprobación de pagos. 

Para conocer más, ve a la documentación [Cómo medir la calidad de tu integración](/developers/es/docs/checkout-pro/how-tos/integration-quality).