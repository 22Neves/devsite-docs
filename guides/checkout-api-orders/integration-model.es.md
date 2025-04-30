# Modelo de integración

----[mlb]---- Checkout Transparente------------ ----[mla, mlm]---- Checkout API ------------ ahora procesa pagos con **Orders**. Se trata de una API diseñada para simplificar su desarrollo con Mercado Pago: con una única integración, podrá acceder a diversas soluciones de pago.

Además, la API hace que el código de integración sea más intuitivo y proporciona mensajes de error más detallados, facilitando el proceso de desarrollo.

## Diferencias en el procesamiento

Anteriormente, los pagos a través de ----[mlb]---- Checkout Transparente------------ ----[mla, mlm]---- Checkout API ------------ eran procesados exclusivamente por la **API de Pagos**. Ahora, también es posible procesarlos mediante Orders, que ofrece una alternativa eficiente y sencilla para la integración.

Ve a continuación las principales diferencias entre las dos opciones.

| Funcionalidad  |  API de Pagamentos  | API de Orders |
| --- | --- |--- |
| Procesamiento del pago	  | Automático (cree y procese su transacción). | [Automático y manual](/developers/es/docs/checkout-api-v2/integration-model#bookmark_modos_de_procesamiento_de_orders) (eligiendo cuándo procesar la transacción). |
| Transacciones | Una transacción por solicitud.	 | Múltiples transacciones por solicitud. |
| Operaciones  | [Pagos online](/developers/es/docs#online-payments).	 | [Pagos online](/developers/es/docs#online-payments) y [Pagos presenciales](/developers/es/docs#inperson-payments) (Point de Mercado Pago).|
| Notificaciones  | Configuración avanzada por `notification_url`.	 | Configuración más simple a partir de la sección de [Notificaciones](/developers/es/docs/checkout-api-v2/notifications) en [Tus integraciones](/developers/panel/app). |
| Validación de errores | Retorna un error a la vez. | Retorna una lista con todos los errores en la solicitud. |

## Modos de procesamiento de Orders

Una order de pagos online puede ser creada para ser procesada de dos modos: **Modo automático** y **Modo manual**.

La definición del modo de procesamiento se realizará al momento de crear la order, mediante el parámetro `processing_mode`. Su valor deberá ser `automatic`, para procesamientos automáticos, o `manual`, para procesar la order manualmente.

::::TabsComponent

:::TabComponent{title="Modo automático"}
El **modo automático** es el modo predeterminado de la aplicación. A través de este, la transacción se completa en una sola etapa y las modificaciones son limitadas. Para crear la order en modo automático, el campo `processing_mode`, que es responsable de definir el formato de creación y procesamiento de la transacción, vá a estar como `automatic` y toda la información es enviada en una única solicitud.

Las operaciones permitidas son:    

- [**Crear y procesar order**](/developers/es/reference/orders/online-payments/create/post): responsable por la creación de la order y el procesamiento de la transacción en simultáneo.
- [**Obtener order**](/developers/es/reference/orders/online-payments/get-order/get): permite obtener información sobre un pedido, incluido su status en tiempo real.
- [**Capturar order**](/developers/es/reference/orders/online-payments/capture/post): permite capturar el monto autorizado de una order. Esta opción solo es válida para tarjetas de crédito.
- [**Cancelar order**](/developers/es/reference/orders/online-payments/cancel-order/post): responsable de la cancelación de una order ya existente, pero que aún no ha sido procesada.
- [**Reembolsar order**](/developers/es/reference/orders/online-payments/refund/post): en el caso del modo automático, se puede crear reembolsos totales o parciales de un pago. La order será reembolsada totalmente si todas las transacciones son reembolsadas por completo.
    - **Reembolso total**: no se debe indicar un monto a reembolsar en el `body` de la solicitud, que debe ir vacío.
    - **Reembolso parcial**: se debe especificar la cantidad a reembolsar en el `body` de la solicitud, junto con el ID de la transacción. Todas las otras transacciones permanecerán como están y solo la transacción modificada será reembolsada.

:::
:::TabComponent{title="Modo manual"}
El **modo manual** es donde podemos dividir el procesamiento de la transacción en etapas que pueden ser configuradas y ejecutadas de manera incremental. Permite la personalización de cada etapa del proceso de pago, adaptándose a diferentes necesidades y escenarios. Para crear la order en modo manual, es necesario asegurarse de que el campo `processing_mode`, responsable de definir el formato de creación y procesamiento de la transacción, esté como `manual`.

Las operaciones permitidas son:

- [**Crear order (con o sin transacciones)**](/developers/es/reference/orders/online-payments/create/post): responsable por la creación y autorización de la order, pero sin procesamiento en simultáneo.
- [**Agregar transacción**](/developers/es/reference/orders/online-payments/add-transaction/post): esta operación de adición de transacciones solo puede realizarse en modo manual y es responsable de agregar más de una transacción en un mismo _payload_.
- **[Modificar transacción](/developers/es/reference/orders/online-payments/update-transaction/put) y/o [eliminar transacción](/developers/es/reference/orders/online-payments/delete-transaction/delete)**: la modificación y eliminación de transacciones solo pueden realizarse en modo manual, y permiten cambiar la información de pago que ya se había agregado anteriormente a una order. Es una operación que modifica un elemento dentro de cualquier campo del parámetro `transactions`.
- [**Capturar order**](/developers/es/reference/orders/online-payments/capture/post): responsable por capturar el monto autorizado de una order. Esta opción solo es válida para tarjetas de crédito.
- [**Procesar transacción**](/developers/es/reference/orders/online/process-order/post): permite ejecutar las transacciones creadas y/o modificadas en modo manual.
- [**Obtener order**](/developers/es/reference/orders/online-payments/get-order/get): permite obtener información sobre un pedido, incluido su status en tiempo real.
- [**Cancelar order**](/developers/es/reference/orders/online-payments/cancel-order/post): responsable por la cancelación de una order ya existente, pero que aún no ha sido procesada/terminada.
- [**Reembolsar order o transacción**](/developers/es/reference/orders/online-payments/refund/post): en modo manual se puede crear reembolsos totales o parciales de un pago. La order será reembolsada totalmente si todas las transacciones son reembolsadas por completo.
    - **Reembolso total**: no se debe indicar un monto a reembolsar en el `body` de la solicitud, que irá vacío.
    - **Reembolso parcial**: se debe especificar la cantidad a reembolsar en el `body` de la solicitud, junto con el ID de la transacción. Todas las otras transacciones permanecerán como están y solo la transacción modificada será reembolsada.

:::

::::

---
product_landing_how_integrate:
 - button_description: Empezar a integrar
 - button_link: /developers/es/docs/checkout-api-v2/create-application
---