# Gestión de contracargos

Un contracargo (o _chargeback_) ocurre cuando un cliente impugna un cargo realizado en su tarjeta de crédito o débito, solicitando al banco la devolución del importe pagado. Si la solicitud de contracargo se considera válida después de la debida evaluación, el cargo se anula, los fondos se retiran del vendedor y se devuelven al cliente.

En Mercado Pago, la gestión de contracargos se realiza en dos pasos principales, que garantizan tanto el análisis como la resolución de las disputas entre la tienda y el cliente. Son los siguientes:

1. **Notificación de contracargos**:
Configura las notificaciones de contracargos para recibir alertas siempre que un cliente inicie una disputa. Para más detalles, consulta la documentación [Configurar notificaciones de contracargos](/developers/es/docs/checkout-pro/additional-content/chargebacks/notifications).

2. **Procesamiento de contracargos**:
Después de la notificación, si se solicita, será necesario reunir la información y enviar la documentación a través de la API de Mercado Pago. Para más información, consulta la documentación [Gestionar contracargos](/developers/es/docs/checkout-pro/additional-content/chargebacks/manage).

> RED_MESSAGE
>
> Durante el período de resolución del contracargo, el importe en disputa permanece retenido en la cuenta del vendedor hasta que se complete el proceso.

A continuación, presentamos algunos de los motivos más comunes de ocurrencias de contracargos y cómo prevenirlos:

| Motivo | Descripción | Cómo prevenir |
|-|-|-|
| Fraude legítimo | Los fraudes legítimos constituyen gran parte de los contracargos. En estos casos, el cliente puede abrir una disputa con el proveedor de la tarjeta con el objetivo de anular transacciones en sus cuentas debido a actividades fraudulentas. | Asegúrate de enviar la información completa al crear un pago para que el sistema de prevención de fraudes pueda bloquear transacciones de alto riesgo. Para más información, consulta la [documentación sobre Datos de industria](/developers/es/docs/checkout-pro/additional-settings/industry-data). También recomendamos que configures y actives las notificaciones Webhooks para el tema de alerta de fraude y reciba avisos de comportamientos irregulares. Para más información, accede a la [documentación de Webhooks](/developers/es/docs/your-integrations/notifications/webhooks). Si recibes una alerta de fraude, recomendamos [cancelar la compra](/developers/es/docs/checkout-pro/additional-settings/refunds-and-cancellations) y devolver el dinero al comprador para evitar el contracargo. |
| No reconocimiento del cargo por el cliente | El cliente no reconoce la transacción porque no recuerda haber realizado una determinada compra o porque el nombre de la tienda no está claro en el extracto. | Envía correos electrónicos detallados de confirmación de compra que incluyan el comprobante de pago y utiliza un nombre claro y reconocible que se muestre en el extracto del cliente. Para saber cómo configurar el nombre del establecimiento que se mostrará en la factura del comprador, consulta la documentación [Configurar descripción de factura](/developers/es/docs/checkout-pro/additional-settings/preferences/invoice-description). |
| Problemas de entrega | El cliente puede optar por solicitar contracargos en caso de artículos no entregados o entregados con retraso, antes de buscar más información con la tienda. | Ofrece información de seguimiento y comunicación proactiva sobre el estado del pedido. |
| Errores de cobro | Errores como cargos duplicados o suscripciones no canceladas correctamente. | Mantén un sistema de cobro preciso y ofrece un soporte accesible y eficiente al cliente. |