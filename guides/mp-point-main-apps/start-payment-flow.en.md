# Start payment flow

The final stage of payment integration with Main Apps consists of initiating the payment flow through our SDKs. These are designed to provide robust and versatile tools to developers. 

To iniciate the payment flow, the **recommended option** is to implement the [Callback method](/developers/en/docs/main-apps/payments/start-payment-flow/callback-method), which allows for a straightforward integration and simple response handling through _callbacks_.

> WARNING
>
> Important
>
> If you have an old integration of Main Apps, you may have implemented a **legacy method to initiate the payment flow**, based on two additional functionalities (`buildCallbackUri` and `parseResponse`). While this method is still operational, we recommend updating your integration to the Callback method for a simplified implementation. If you need support for your old integration, please refer to the [documentation](/developers/en/docs/main-apps/payments/start-payment-flow/legacy-support).