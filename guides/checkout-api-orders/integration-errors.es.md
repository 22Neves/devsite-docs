# Posibles errores

Consulta la lista de posibles errores devueltos por la API y cómo corregirlos.

| Tipo de Error | Status | Código | Descripción y soluciones posibles |
|:---:|:---:|:---:|:---:|
| Error de solicitud | 400 | `json_syntax_error` | Asegúrate de que la solicitud tenga una estructura JSON válida, con claves y valores adecuados. |
| Error de solicitud | 400 | `required_properties` | Algunas propiedades obligatorias están ausentes. Verifica la solicitud y asegúrate de incluir todas las propiedades requeridas según la documentación de la API. |
| Error de solicitud | 400 | `unsupported_properties` | Algunas propiedades informadas no son soportadas por la API. Revisa la solicitud y elimina o corrige las propiedades no soportadas. |
| Error de solicitud | 400 | `minimum_properties` | No se ha cumplido el número mínimo de propiedades requeridas. Agrega las propiedades necesarias para completar la solicitud. |
| Error de solicitud | 400 | `property_type` | El tipo de la propiedad informada es inválido. Asegúrate de que el valor enviado en la solicitud corresponda al tipo esperado. |
| Error de solicitud | 400 | `property_value` | El valor de la propiedad informada es inválido. Verifica el valor enviado y haz los ajustes para que corresponda a los valores permitidos. |
| Error de solicitud | 400 | `maximum_items` | Se ha excedido el número máximo de ítems permitidos. Reduce la cantidad de ítems enviados para que no sobrepase el máximo permitido. |
| Error de solicitud | 400 | `minimum_items` | No se ha cumplido el número mínimo de ítems requerido. Agrega más ítems a la solicitud para cumplir con los requisitos de la API. |
| Error de solicitud | 400 | `invalid_path_param` | Verifica si el ID proporcionado como parámetro es válido. |
| Error de solicitud | 400 | `invalid_properties` | Algunas propiedades informadas son inválidas o están mal formadas. Revisa las propiedades enviadas y verifica si están de acuerdo con las especificaciones de la API. |
| Error de solicitud | 400 | `empty_required_header` | Uno o más _headers_ obligatorios están vacíos. Verifica la solicitud y asegúrate de que todos los _headers_ requeridos están presentes y debidamente completados. |
| Error de solicitud | 400 | `order_builder_without_transactions` | No hay una transacción asociada a la order. Asegúrate de incluir al menos una transacción para la creación de la order. |
| Error de solicitud | 400 | `invalid_order_mode_for_operation` | El modo informado no es válido para esta operación. Verifica si estás utilizando el modo correcto según la operación deseada. |
| Error de solicitud | 400 | `invalid_order_type` | El tipo de la order es inválido. Verifica si el tipo utilizado es válido para la operación. |
| Error de solicitud | 400 | `invalid_transaction_id` | El ID de la transacción es inválido. Asegúrate de que el ID es correcto. |
| Error de solicitud | 400 | `exceeded_number_of_transactions` | Ocurrió un error en la solicitud. La Order acepta un máximo de una transaccion. Elimine las transacciones excedentes. |
| Error de solicitud | 400 | `invalid_email_for_sandbox` | El formato de correo electrónico no es válido para el entorno de *sandbox*, debe contener "@testuser.com". |
| Error de procesamiento | 402 | `failed` | Hubo un error en el procesamiento de alguna de las transacciones. Verifica el mensaje devuelto para más información. |
| Error de solicitud | 404 | `order_not_found` | La order no fue encontrada. Verifica si el ID informado es correcto. |
| Error de solicitud | 404 | `transaction_not_found` | La transacción no fue encontrada. Verifica si el ID informado es correcto. |
| Error de solicitud | 409 | `cannot_refund_order` | Asegúrate de que la order esté en un estado que permita la realización de un reembolso. |
| Error de solicitud | 409 | `cannot_capture_order` | Verifica si el estado de la order permite la captura y que esta haya sido creada con el campo `processing_mode` definido como `automatic`. |
| Error de solicitud | 409 | `cannot_cancel_order` | Asegúrate de que la order esté en un estado que permita su cancelación. |
| Error de solicitud | 409 | `already_queued_order_for_device` | Ya existe una order en espera para el dispositivo informado. No es posible crear una nueva order del tipo "point" mientras una anterior está pendiente de ser procesada. Espera el procesamiento de la order actual antes de intentar nuevamente. |
| Error de Idempotencia | 409 | `idempotency_key_already_used` | La clave `X-Idempotency-Key` proporcionada ya ha sido utilizada. Cada clave de idempotencia debe ser única para garantizar que la operación se realice una única vez. Utiliza una nueva clave para la próxima solicitud. |
| Error de solicitud | 409 | `operation_not_supported` | La operación solicitada no es soportada. Verifica si la operación que estás tratando de realizar es válida para el contexto actual. |
| Error de solicitud | 409 | `order_already_refunded` | La order informada ya fue reembolsada. No es posible procesar un reembolso en una order que ya tiene este estado. |
| Error de solicitud | 409 | `order_already_cancelled` | La order informada ya fue cancelada. No es posible realizar operaciones en una order que ya se encuentra cancelada. |
| Error de Idempotencia | 423 | `resource_locked` | La clave de idempotencia está temporalmente bloqueada. Espera unos instantes y trata de ejecutar la solicitud nuevamente.  |
| Error de Idempotencia | 500 | `idempotency_validation_failed` | Ocurrió un error interno en el servidor. Intenta reenviar la solicitud con una clave de idempotencia nueva y única para evitar conflictos. Si el problema persiste, comunícate con Soporte y proporciona el `x-request-id` junto a más detalles sobre la operación realizada. |
| Error de la API | 500 | `internal_error` | Ocurrió un error interno en el servidor. Por favor, intenta nuevamente más tarde. Si el problema persiste, comunícate con Soporte y proporciona el `x-request-id` junto a más detalles sobre la operación realizada. |

Para obtener más información sobre cómo enviar las solicitudes, requerimientos y validaciones necesarias, consulta nuestra :TagComponent{tag="API" text="Referencia de API" href="/developers/en/reference/orders/online-payments/create/post"}.