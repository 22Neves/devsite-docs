# Configure chargeback notifications

Webhook notifications (also known as web callbacks) are a simple method that allows an application or system to provide real-time information whenever an event occurs. It is a passive way of receiving data between two systems through an `HTTP POST` request.

Once configured, these notifications will be sent whenever a chargeback is created or its status is modified. From the received information, it will be possible to manage the chargeback.

Below, we present a step-by-step guide to perform the configuration.

1. Access [Your integrations](/developers/panel/app) and select the application for which you want to activate chargeback notifications.

![Application](/images/cow/not1-select-app-es.png)

2. In the left menu, select **Webhooks > Configure Notifications**.

![Webhooks](/images/cow/not2-webhooks-es.png) 

3. Configure the productive HTTPS URL that will be used to receive notifications.

![URL](/images/cow/not3-url-es.png) 

4. In recommended events, select the **Chargebacks** event to receive notifications, which will be sent in `JSON` format via an `HTTPS POST` to the specified URL.

![Chargebacks](/images/cow/not4-url-es.png) 

5. Finally, click **Save Settings**. This will generate a unique secret key for the application, which will allow you to validate the authenticity of the received notifications, ensuring that they have been sent by Mercado Pago. For more details, refer to the [Webhook Notifications Documentation](/developers/en/docs/your-integrations/notifications/webhooks).

**Notification example**:

The notifications sent by Mercado Pago for the `chargebacks` topic will be similar to the following example:

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

These notifications provide complete information about the process initiated by the customer, being essential to [manage the chargeback](/developers/en/docs/checkout-pro/additional-content/chargebacks/manage).