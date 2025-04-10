# Configurar notificaciones de contracargos

Las notificaciones Webhooks (también conocidas como devoluciones de llamada web) son un método simple que permite a una aplicación o sistema proporcionar información en tiempo real siempre que ocurre un evento. Es una forma pasiva de recibir datos entre dos sistemas mediante una solicitud `HTTP POST`.

Una vez configuradas, estas notificaciones serán enviadas siempre que se cree un contracargo o se modifique su estado. A partir de la información recibida, será posible gestionar el contracargo.
A continuación, presentamos un paso a paso para realizar la configuración.

1. Accede a [Tus integraciones](/developers/panel/app) y selecciona la aplicación para la cual deseas activar las notificaciones de contracargos.

![Application](/images/cow/not1-select-app-es.png)

2. En el menú a la izquierda, selecciona **Webhooks > Configurar notificaciones**.

![Webhooks](/images/cow/not2-webhooks-es.png) 

3. Configura la URL HTTPS productiva que se utilizará para recibir las notificaciones.

![URL](/images/cow/not3-url-es.png) 

4. En eventos recomendados, selecciona el evento **Contracargos** para recibir notificaciones, que serán enviadas en formato `JSON` mediante un `HTTPS POST` a la URL especificada anteriormente.

![Chargebacks](/images/cow/not4-url-es.png) 

5. Por último, haz clic en **Guardar configuraciones**. Esto generará una clave secreta exclusiva para la aplicación, que permitirá validar la autenticidad de las notificaciones recibidas, garantizando que hayan sido enviadas por Mercado Pago. Para más detalles, consulta la [documentación de notificaciones de Webhooks](/developers/es/docs/your-integrations/notifications/webhooks).

**Ejemplo de notificación**:

Las notificaciones enviadas por Mercado Pago para el tema de `chargebacks` serán similares al siguiente ejemplo:

```
{
   "actions":[
      "changed_case_status",
   ],
   "api_version":"v1",
   "application_id":9007201037432480,
   "data":{
      "checkout":"PRO",
      "date_updated":"0001-01-01T00:00:00Z",
      "id":233000061680860000,
      "payment_id":81968653106,
      "product_id":"C00A2J8RF4DI8BCIMFU0",
      "site_id":"MLA",
      "transaction_intent_id":""
   },
   "date_created":"2024-07-03T19:34:28-04:00",
   "id":114411153595,
   "live_mode":true,
   "type":"topic_chargebacks_wh",
   "user_id":634060442,
   "version":1720035618
}
```

Estas notificaciones proporcionan información completa sobre el proceso iniciado por el cliente, siendo fundamentales para [gestionar el contracargo](/developers/es/docs/checkout-pro/additional-content/chargebacks/manage).