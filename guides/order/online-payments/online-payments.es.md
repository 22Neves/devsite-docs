# Pagos online

Mercado Pago ofrece una variedad de soluciones de cobro para quienes venden a través de sitios web y tiendas en línea, adaptadas a las diferentes necesidades venta e integración. 

Ahora, puedes comenzar a implementar estas soluciones utilizando Order API, nuestra API unificada. Mira a continuación las principales diferencias con la API de Pagos:


| Funcionalidad | API de Pagos | API de Order |
| --- | --- |--- |
| Modo | Automático | Automático y manual |
| Operaciones | Pagos | Pagos online y [Pagos presenciales](/developers/es/docs/order/in-store-payments/introduction) (QR y Point)|
| Múltiples transacciones | No tiene | Tiene |
| Envío de metadatos | Permite | No permite |
| Envío de Notification URL | Permite en el _payload_ | No permite en el _payload_ y debe ser configurada en [Tus integraciones > Detalles de la aplicación](/developers/es/docs/order/additional-content/your-integrations/application-details). |
| Validaciones con respuestas de errores completas | Valida un error a la vez. | Retorna una lista con todos los errores. |
| Retorno de datos PII | Retorna en algunos escenarios (ej: aprobado). | No retorna en ningún escenario. |


Conoce cuáles son las opciones disponibles actualmente para integrar pagos online utilizando Order API.


----[mlb]----

---
future_product_avaible:
 - card_avaible: true
 - card_icon: Card
 - card_title: Checkout Transparente
 - card_description: Permite que todo el proceso de finalización de compra, desde el llenado de los datos del usuario hasta la realización del pago, ocurra en un único entorno, sin la necesidad de redirigir a una página externa a la tienda.
 - card_button: /developers/es/docs/order/online-payments/prerequisites
 - card_buttonDescription: Saber más
 - card_pillText: DISPONIBLE
 - card_linkAvailable: false
 - card_linkProof:
 - card_linkProofDescription:
 - card_linkAvailable: true
---

------------
----[mla, mlm]----
---
future_product_avaible:
 - card_avaible: true
 - card_icon: Card
 - card_title: Checkout API
 - card_description: Permite que todo el proceso de finalización de compra, desde el llenado de los datos del usuario hasta la realización del pago, ocurra en un único entorno, sin la necesidad de redirigir a una página externa a la tienda.
 - card_button: /developers/es/docs/order/online-payments/prerequisites
 - card_buttonDescription: Saber más
 - card_pillText: DISPONIBLE
 - card_linkAvailable: false
 - card_linkProof:
 - card_linkProofDescription:
 - card_linkAvailable: true
---

------------