# Salir a producción

Una vez finalizado el proceso de configuración y pruebas, tu integración estará lista para ser colocada en producción. 

A continuación, mira las recomendaciones necesarias para realizar este pasaje de manera eficaz y segura, garantizando que tu integración esté preparada para recibir transaciones reales.

## Activar credenciales de producción

Las credenciales utilizadas durante la etapa de desarrollo eran credenciales de prueba. Para comenzar a recibir pagos reales, deberás **activar las credenciales de producción de tu cuenta de Mercado Pago** y reemplazarlas.

Para hacerlo, ingresa a [Tus integraciones](/developers/panel/app) y, en el menú lateral, accede a **Producción > Credenciales de producción**. Allí encontrarás tu *Public Key* y *Access Token* productivos, que deberás utilizar en lugar de los de prueba.

Para más información, consulta nuestra [documentación de Credenciales]().

## Implementar certificado SSL 

Para garantizar una integración segura que proteja los datos de cada transacción, es necesario implementar un certificado SSL (_Secure Sockets Layer_). Este certificado, junto con la utilización del protocolo HTTPS en la disponibilización de los medios de pago, asegura una conexión encriptada entre el cliente y el servidor.

Adoptar estas medidas no solo refuerza la seguridad de los datos de los usuarios, sino que también asegura el cumplimiento de las normativas y leyes específicas de cada país relacionadas con la protección de datos y la seguridad de la información. Además, contribuye significativamente a proporcionar una experiencia de compra más segura y confiable.

Aunque **la exigencia del certificado SSL no aplique durante el período de pruebas**, su implementación es obligatoria para entrar en producción.

Para más información, conoce los [Términos y Condiciones](/developers/es/docs/resources/legal/terms-and-conditions) de Mercado Pago.