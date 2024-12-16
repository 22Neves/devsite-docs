# Pedidos

Un pedido de pagos online puede ser creado para ser procesado de dos maneras: **Modo automático** y **Modo manual**.

## Modo automático

El Modo automático, es el modo predeterminado de la aplicación. A través de este, la transacción se completa en una sola etapa y las modificaciones son limitadas. Para crear la order en modo automático, el campo `processing_mode`, que es responsable de definir el formato de creación y procesamiento de la transacción, vá a estar como `automatic` y toda la información es enviada en una única solicitud.

Las operaciones permitidas son:    

- [**Crear y procesar order**](/developers/es/reference/order/online-payments/create/post): responsable por la creación de la order y el procesamiento de la transacción en simultáneo.
- [**Obtener order**](/developers/es/reference/order/online-payments/get-order/get): permite obtener información sobre un pedido, incluido su status en tiempo real.
- [**Capturar order**](/developers/es/reference/order/online-payments/capture/post): permite capturar el monto autorizado de una order. Esta opción solo es válida para tarjetas de crédito.
- [**Cancelar order**](/developers/es/reference/order/online-payments/cancel-order/post): responsable de la cancelación de una order ya existente, pero que aún no ha sido procesada.
- [**Reembolsar order**](/developers/es/reference/order/online-payments/refund/post): en el caso del modo automático, se puede crear reembolsos totales o parciales de un pago. La order será reembolsada totalmente si todas las transacciones son reembolsadas por completo.
    - **Reembolso total**: no se debe indicar un monto a reembolsar en el `body` de la solicitud, que debe ir vacío.
    - **Reembolso parcial**: se debe especificar la cantidad a reembolsar en el `body` de la solicitud, junto con el ID de la transacción. Todas las otras transacciones permanecerán como están y solo la transacción modificada será reembolsada.

## Modo manual

El Modo manual es donde podemos dividir el procesamiento de la transacción en etapas que pueden ser configuradas y ejecutadas de manera incremental. Permite la personalización de cada etapa del proceso de pago, adaptándose a diferentes necesidades y escenarios. Para crear la order en modo manual, es necesario asegurarse de que el campo `processing_mode`, responsable de definir el formato de creación y procesamiento de la transacción, esté como `manual`.

Las operaciones permitidas son:

- [**Crear order (con o sin transacciones)**](/developers/es/reference/order/online-payments/create/post): responsable por la creación y autorización de la order, pero sin procesamiento en simultáneo.
- [**Agregar transacción**](/developers/es/reference/order/online-payments/add-transaction/post): esta operación de adición de transacciones solo puede realizarse en modo manual y es responsable de agregar más de una transacción en un mismo _payload_.
- **[Modificar transacción](/developers/es/reference/order/online-payments/update-transaction/put) y/o [eliminar](/developers/es/reference/order/online-payments/delete-transaction/delete) transacción**: la modificación y eliminación de transacciones solo pueden realizarse en modo manual, y permiten cambiar la información de pago que ya se había agregado anteriormente a una order. Es una operación que modifica un elemento dentro de cualquier campo del parámetro `transactions`.
- [**Capturar order**](/developers/es/reference/order/online-payments/capture/post): responsable por capturar el monto autorizado de una order. Esta opción solo es válida para tarjetas de crédito.
- [**Procesar transacción**](/developers/es/reference/order/online/process-order/post): permite ejecutar las transacciones creadas y/o modificadas en modo manual.
- [**Obtener order**](/developers/es/reference/order/online-payments/get-order/get): permite obtener información sobre un pedido, incluido su status en tiempo real.
- [**Cancelar order**](/developers/es/reference/order/online-payments/cancel-order/post): responsable por la cancelación de una order ya existente, pero que aún no ha sido procesada/terminada.
- [**Reembolsar order o transacción**](/developers/es/reference/order/online-payments/refund/post): en modo manual se puede crear reembolsos totales o parciales de un pago. La order será reembolsada totalmente si todas las transacciones son reembolsadas por completo.
    - **Reembolso total**: no se debe indicar un monto a reembolsar en el `body` de la solicitud, que irá vacío.
    - **Reembolso parcial**: se debe especificar la cantidad a reembolsar en el `body` de la solicitud, junto con el ID de la transacción. Todas las otras transacciones permanecerán como están y solo la transacción modificada será reembolsada.