# Requisitos previos

Para utilizar tanto el producto de Migración de Bóvedas, será necesario cumplir con los siguientes requisitos:

| Requisito | Descripción |
|---|---|
| Cuenta de vendedor de Mercado Pago | Para integrar con Mercado Pago, necesitas una cuenta de vendedor en Mercado Pago. Si no tienes una, [haz clic aquí](https://www.mercadopago.com.ar/hub/registration/landing) para crearla gratis. |
| Aplicación creaada en [Tus Integraciones](https://www.mercadopago.com/developers/panel/app) | Las aplicaciones son las diversas integraciones contenidas en una o varias tiendas. Puedes crear una aplicación para cada solución que implementes a fin de tener todo organizado y mantener un control que facilite la gestión. Consulta [Tus integraciones](https://www.mercadopago.com.ar/developers/es/docs/batch-payments/additional-content/your-integrations/introduction) para obtener más información sobre cómo crear una aplicación. |

## Migración de bóvedas

Si necesitas realizar el proceso de migración de una bóveda, contarás con el apoyo de un equipo de soporte de Mercado Pago. Para este proceso, el representante de soporte te compartirá las siguientes documentaciones:

### Con procesador de pagos actual

| Requisito | Descripción |
|---|---|
| AOC (Attestation of Compliance) del PSP | Necesario cuando hay un procesador de pagos que mantiene la bóveda. |

### Sin procesador de pagos actual

| Requisito | Descripción |
|---|---|
| AOC (Attestation of Compliance) | El AOC es necesario si la empresa está en conformidad con PCI (Payment Card Industry). De lo contrario, debe presentarse un [SAQ-D](https://docs-prv.pcisecuritystandards.org/SAQ%20(Assessment)/SAQ/PCI-DSS-v4-0-SAQ-D-Merchant-r1.pdf) firmado y completo. |

En caso de que el SFTP sea proporcionado por Mercado Pago y la migración siga el procedimiento estándar, será necesario proporcionar los siguientes datos:

| Requisito | Descripción |
|---|---|
| IP o Rango de IPs | Direcciones de los servidores que se conectarán al SFTP. |
| Clave pública del usuario SFTP | Clave utilizada para la autenticación. Debe ser proporcionada en formato SSH2 (ssh-rsa) y será convertida a OpenSSH. |
| Nombre del tercero | Nombre de la persona responsable del contacto. |
| E-mail de contacto del tercero | E-mail del contacto responsable. |
| Teléfono de contacto del tercero | Número de teléfono de contacto del tercero. |

A continuación, devolveremos los siguientes datos de conexión:

| Datos de conexión | Descripción |
|---|---|
| UserName | Nombre de usuario necesario para la conexión al SFTP. |
| Host | URL de conexión del servidor. |
| Clave pública de criptografia | Clave utilizada para criptografiar el archivo. |