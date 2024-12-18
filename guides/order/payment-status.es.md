# Status de la transacción

Consulta la lista de `status` y `status_detail` que puede tomar una transacción.

| `status` | `status_detail` | Descripción |
|:---:|:---:|:---:|
| `created` | `created` | La transacción fue creada con éxito, pero aún no ha sido procesada. Este es el estado inicial de una transacción después de su creación. |
| `processed` | `accredited` | La transacción fue procesada con éxito y el monto ha sido efectivamente acreditado. |
| `processed` | `partially_refunded` | La transacción fue procesada con éxito y una parte del monto fue reembolsada. Esto indica que, aunque la transacción se ha completado, hubo una devolución parcial del monto pagado a favor del pagador. |
| `processing` | `in_process` | La transacción está en procesamiento. Esto significa que la transacción está en curso y aún no se ha completado. |
| `processing` | `pending_review_manual` | La transacción está en curso. Este estado indica que está esperando una revisión manual. Esto generalmente ocurre cuando la orden necesita una evaluación adicional antes de continuar. |
| `action_required` | `check_on_terminal` | Estado **exclusivo para pagos presenciales**. La transacción requiere una acción adicional en la terminal. Es necesario realizar una verificación o confirmación en la terminal donde se realizó el pago para verificar su estado. |
| `action_required` | `waiting_payment` | La transacción requiere una acción adicional y está esperando el pago. Esto significa que la transacción ha sido iniciada, pero el pago aún no se ha completado. |
| `action_required` | `waiting_capture` | La transacción requiere una acción adicional y está esperando la captura del pago. Esto significa que el pago ha sido autorizado, pero aún no ha sido capturado. |
| `action_required` | `waiting_transfer` | La transacción requiere una acción adicional y está esperando la transferencia de los fondos. Esto significa que el pago ha sido iniciado, pero los fondos aún no se han transferido a la cuenta del vendedor. |
| `at_terminal` | `at_terminal` | Estado **exclusivo para pagos presenciales**. La transacción está en la terminal. Esto significa que está siendo verificada en la terminal de pago. |
| `cancelled` | `cancelled_transaction` | La transacción ha sido cancelada y no se completará. |
| `cancelled` | `cancelled_by_api` | Estado **exclusivo para pagos presenciales**. La transacción ha sido cancelada vía API y no se completará. |
| `cancelled` | `cancelled_in_terminal` | Estado **exclusivo para pagos presenciales**. La transacción ha sido cancelada en la terminal y no se completará. |
| `charged_back` | `in_process` | La transacción ha sufrido un contracargo. Esto significa que ha sido impugnada y el monto está siendo revertido. |
| `charged_back` | `settled` | La transacción ha sufrido un contracargo. Esto significa que ha sido impugnada y el monto fue acreditado al vendedor. |
| `charged_back` | `reimbursed` | La transacción ha sufrido un contracargo. Esto significa que ha sido impugnada y el monto fue reembolsado al comprador. |
| `expired` | `expired` | La transacción ha expirado. Esto significa que no se completó dentro del tiempo límite y, por lo tanto, fue terminada. |
| `refunded` | `refunded` | La orden ha sido reembolsada. Esto significa que el monto de la transacción ha sido devuelto íntegramente al pagador. |
| `failed` | `bad_filled_card_data` | La transacción falló debido a datos de la tarjeta completados incorrectamente. Esto puede incluir información como el número de la tarjeta, CVV, fecha de vencimiento, entre otros. |
| `failed` | `invalid_card_token` | La transacción falló. Esto significa que la transacción falló debido a un token de tarjeta inválido. |
| `failed` | `high_risk` | La transacción falló debido a un alto riesgo detectado. Esto puede ocurrir cuando el sistema de detección de fraudes identifica un posible riesgo en la transacción. |
| `failed` | `rejected_by_issuer` | La transacción falló debido a un rechazo por parte del emisor de la tarjeta. |
| `failed` | `required_call_for_authorize` | La transacción falló porque se requiere una llamada para autorización. Esto puede ocurrir cuando el emisor de la tarjeta exige una verificación adicional antes de aprobar la transacción. |
| `failed` | `max_attempts_exceeded` | La transacción falló debido a que se excedió el número máximo de intentos. Esto puede ocurrir cuando el número de intentos de pago supera el límite permitido por el sistema. |
| `failed` | `card_disabled` | La transacción falló debido a que la tarjeta está desactivada. Esto puede ocurrir cuando la tarjeta ha sido bloqueada o desactivada por el emisor. |
| `failed` | `insufficient_amount` | La transacción falló debido a un monto insuficiente. Esto puede ocurrir cuando el saldo disponible no es suficiente para cubrir el monto de la transacción. |
| `failed` | `amount_limit_exceeded` | La transacción falló debido a que se excedió el límite de monto. Esto puede ocurrir cuando el monto de la transacción supera el límite permitido por el emisor de la tarjeta o por el sistema. |
| `failed` | `processing_error` | La transacción falló debido a un error de procesamiento. Esto puede ocurrir cuando hay un problema técnico o un error en el sistema que impide la finalización de la transacción. Si el problema persiste, comunícate con soporte, y proporciona el `x-request-id` junto con los detalles sobre la operación realizada. |
| `failed` | `invalid_installments` | La transacción falló debido a cuotas inválidas. Esto puede ocurrir cuando el número de cuotas seleccionadas no es aceptado por el emisor de la tarjeta o por el sistema. |
| `failed` | `pending_challenge` | La transacción falló debido a un desafío pendiente. Esto puede ocurrir cuando la transacción requiere una verificación adicional, como una autenticación 3DS, que no se ha completado. |
| `failed` | `3ds_challenge_expired` | La transacción falló debido a la expiración del desafío 3DS. Esto puede ocurrir cuando el tiempo para completar la autenticación 3DS ha expirado. |
| `failed` | `pending_challenge` | La transacción falló debido a la falla en el desafío 3DS. Esto puede ocurrir cuando la autenticación 3DS no tiene éxito. |