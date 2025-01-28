# Cobros en batch con clientes y tarjetas

## Requisitos

Para realizar cobros a través del flujo batch, es necesario:

| Requisito | Descripción |
|---|---|
| Cuenta de mercado Pago | Para realizar una integración con Mercado Pago, necesitas tener una cuenta de vendedor. Así, podrás acceder a los recursos de las APIs necesarias. Si aún no la tienes, accede a [sitio oficial de Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration?from_landing=true&contextual=company&entity=pj) para crearla gratuitamente. |
| Aplicación creada en [Tus Integraciones](https://www.mercadopago.com/developers/panel/app) | Las aplicaciones son las diferentes integraciones contenidas en una o varias tiendas. Puedes crear una aplicación para cada solución que implementes, con el fin de mantener todo organizado y tener un control que facilite la gestión. Además, al crear una aplicación, podrás obtener las credenciales necesarias para operar. Para crear tu aplicación, consulta la documentación del [Panel del desarrollador](/developers/es/docs/your-integrations/dashboard). |
| IP o rango de IPs de los servidores que se conectarán al SFTP | Las IP(s) o el rango de IPs que tendrán permiso para conectarse al SFTP deben ser definidos e informados. |
| Clave pública asociada al usuario que se conectará al SFTP | La clave pública del usuario responsable de la conexión al SFTP debe ser proporcionada para autenticación. |
| Razón Social | Razón social de la empresa o entidad que está realizando la integración. |
| Tax ID (CUIT) | Número de identificación fiscal (CUIT) de la empresa o entidad. |
| País | El país donde la empresa o entidad está registrada. |
| Nombre del contacto de la tercera parte | Nombre completo del responsable o contacto principal de la tercera parte. |
| E-mail de contacto de la tercera parte | Dirección de correo electrónico para comunicación con la tercera parte. |
| Teléfono de contacto de la tercera parte | Número de teléfono para contacto directo con la tercera parte. |
| Correo electrónico del propietario de Mercado Pago | Dirección de correo electrónico del propietario de la cuenta Mercado Libre/Mercado Pago (Meli). |

> WARNING
> 
> Importante
> 
> Se debe usar la misma cuenta y la misma aplicación con la que se generaron las vinculaciones.

A continuación, junto con el SFTP, devolveremos los siguientes datos de conexión. La misma se establecerá mediante la clave privada asociada a la clave pública compartida:

| Datos de conexión | Descripción |
|---|---|
| UserName | Nombre de usuario necesario para la conexión al SFTP. |
| Host | URL de conexión del servidor. |

> NOTE
> 
> Nota
> 
> La carga de archivos está disponible 24 horas al día, 7 días a la semana. Una vez cargados, el período de procesamiento de los archivos varía de 1 a 5 días hábiles. Una vez generado el archivo, el mismo permanecerá disponible únicamente por 7 días.