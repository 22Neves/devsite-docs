# QR interoperable: flujo emisor

> WARNING
>
> Importante
>
> La funcionalidad de QR interoperable sólo puede ser configurada por **billeteras digitales** externas a Mercado Pago. Si no eres representante de una billetera digital, dirígete a [Configuración de integración](/developers/es/docs/qr-code/introduction) para poder configurar la opción que más se adecúe a tu modelo de negocio.

Las billeteras digitales externas a Mercado Pago tienen la posibilidad de solicitar el alta del flujo emisor de códigos QR interoperables. Es decir, solicitar a Mercado Pago que comience el proceso de pruebas necesario para que códigos QR de otras billeteras sean escaneados y pagados a través de Mercado Pago.

Para iniciar esta solicitud, quien represente a la billetera digital interesada deberá contactarse con nuestro equipo de [Soporte](https://www.mercadopago.com.ar/cx/meli-chat) y brindar la siguiente información.

## Datos de la billetera

Al ponerte en contacto con Soporte, será necesario que les proporciones los siguientes datos. 

| Dato | Descripción |
|---|---|
| Denominador | Nombre comercial de la billetera digital, como es conocida en el mercado. |
| Razón Social | Nombre oficial de la empresa a la que pertenece la billetera digital. |
| CUIT | Clave Única de Identificación Tributaria de la empresa. |
| IEP | URI de la API resolve del aceptador, que deberá ser llamada para la resolución de los códigos QR. |

## Cuestionario

Para avanzar con las pruebas y homologación, el equipo de Soporte también te solicitará las respuestas al siguiente cuestionario. 

1. ¿Qué administrador utilizan? ¿COELSA, Prisma, Link o algún otro?
2. ¿Cuál es el nombre y los IDs (de homologación y producción) que tienen registrados en el administrador?
3. ¿Qué tipos de códigos QR permiten? ¿Estáticos o dinámicos?
4. ¿Utilizan monto abierto y cerrado en los códigos QR?
5. ¿Tienen la IEP para todos los tipos de códigos QR?
6. ¿Tienen implementados flujos de reembolso total y/o parcial? Si no, ¿hay planes para tenerlos?
7. ¿Cuál es la fecha prevista para entrar en un entorno productivo?
8. ¿Están dentro del workspace QRIA? ¿Pueden compartirnos un contacto para que los busquemos ahí?
9. ¿Podrían adjuntar los QR necesarios para que Mercado Pago pueda realizar las pruebas necesarias? 
10. ¿Cuáles son los e-mail de contacto en caso de que tengamos dudas? Tengan en cuenta que estos correos podrán ser añadidos al ticket de Soporte posteriormente.


Una vez proporcionada toda la información requerida, será el mismo equipo de Soporte quien comunique la programación de las pruebas y sus resultados a la billetera solicitante.


