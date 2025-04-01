# Status de la order

Consulta la lista de `status` y `status_detail` que puede tomar una order.

| `status` | `status_detail` | Descripción |
|:---:|:---:|:---:|
| `created` | `created` | La order fue creada con éxito. En este momento, aún no se ha iniciado ninguna acción de procesamiento, y está en el estado inicial de espera. |
| `processed` | `accredited` | La order fue procesada con éxito y el pago fue acreditado. |
| `processed` | `partially_refunded` | La order fue procesada y una parte del valor fue reembolsada. Esto indica que, aunque la transacción se ha completado, hubo un reembolso parcial del monto pagado a favor del pagador. |
| `processing` | `in_process` | La order está en procesamiento. Esto significa que la transacción está en curso y aún no se ha completado. |
| `action_required` | `waiting_payment` | La order requiere una acción adicional del pagador y está esperando el pago. Esto significa que la transacción ha sido iniciada, pero el pago aún no se ha completado. |
| `action_required` | `waiting_capture` | La order requiere una acción adicional del vendedor y está esperando la captura del pago. Esto significa que el pago ha sido autorizado pero aún no ha sido capturado. |
| `action_required` | `waiting_transfer` | La order requiere una acción adicional del pagador y está esperando la transferencia de los valores. Esto significa que el pago ha sido iniciado, pero los valores aún no se han transferido a la cuenta del vendedor. |
| `charged_back` | `in_process` | La order ha sufrido un contracargo. Esto significa que una de las transacciones de la order ha sido impugnada y está en proceso de evaluación. |
| `charged_back` | `settled` | La order ha sufrido un contracargo. Esto significa que la transacción ha sido liquidada. Esto puede ocurrir cuando la transacción ha sido procesada y confirmada. |
| `charged_back` | `reimbursed` | La order ha sufrido un contracargo. Esto significa que la transacción ha sido reembolsada y el monto de la transacción ha sido devuelto al pagador tras el reembolso. |
| `expired` | `expired` | La order ha expirado. Esto significa que la transacción no fue completada dentro del tiempo límite y, por lo tanto, fue cancelada. |
| `failed` | `failed` | La order ha fallado. Esto significa que la transacción no fue exitosa y no será completada. |
| `refunded` | `refunded` | La order ha sido reembolsada. Esto significa que el monto de la transacción ha sido devuelto íntegramente al pagador. |