# Realizar una compra de prueba con Transferencias SPEI

Para probar tu integración con **Transferencias SPEI**, luego de haber [configurado tu ambiente de pruebas](/developers/es/docs/checkout-api/integration-test), deberás crear una order. Esto quiere decir que sólo será posible verificar el funcionamiento de tu integración mediante una requisición, y no simulando una compra. 

Para realizar estas pruebas, envía la siguiente solicitud al endpoint :TagComponent{tag="API" text="/v1/orders" href="/developers/es/reference/orders/online-payments/create/post"}, junto con el :toolTipComponent[_Access Token_ del usuario de prueba]{content="Clave privada de la aplicación de pruebas creada con tu usuario de pruebas. Se utiliza en el backend para poder probar tu desarrollo. Puedes acceder a ella iniciando sesión con tu usuario de pruebas y dirigiéndote a **Tus integraciones > Detalles de aplicación > Producción > Credenciales de producción**."}. 

```curl 
curl --request POST \
  --url https://api.mercadopago.com/v1/orders \
  --header 'content-type: application/json' \
  --data '{
  "type": "online",
  "external_reference": "ext_ref_1234",
  "processing_mode": "automatic",
  "marketplace": "NONE",
  "total_amount": "200.00",
  "payer": {
    "first_name": <PAYER_NAME>,
    "email": <PAYER_EMAIL>
  },
  "transactions": {
    "payments": [
      {
        "amount": "200.00",
        "payment_method": {
          "id": "clabe",
          "type": "bank_transfer"
        }
      }
    ]
  }
}
'
```

La respuesta deberá devolver el estado `action_required`, que indica que se está aguardando el pago,  tal como se muestra a continuación.


```json
{
  "id": "ORD01JPQVD4ED4QSPT1N787C8PYQT",
  "processing_mode": "automatic",
  "external_reference": "ext_ref_1234",
  "marketplace": "NONE",
  "site_id": "MLM",
  "user_id": "1735143232",
  "product_id": "CIFI5HEOD60B64QAI5O0",
  "capture_mode": "automatic",
  "currency": "MXN",
  "type": "online",
  "status": "action_required",
  "status_detail": "waiting_transfer",
  "total_amount": "200.00",
  "created_date": "2025-03-19T18:42:12.557054278Z",
  "last_updated_date": "2025-03-19T18:42:13.645123166Z",
  "integration_data": {
    "application_id": "4863578097401450"
  },
  "payer": {
    "email": "payer@testuser.com",
    "first_name": "Payer Name"
  },
  "transactions": {
    "payments": [
      {
        "id": "PAY01JPQVD4ED4QSPT1N7895PA160",
        "date_of_expiration": "2025-03-26T18:42:12.838+00:00",
        "status": "action_required",
        "status_detail": "waiting_transfer",
        "amount": "200.00",
        "payment_method": {
          "id": "clabe",
          "type": "bank_transfer",
          "ticket_url": "https://www.mercadopago.com.mx/payments/105292425055/ticket?caller_id=1872745950&hash=0db37f93-34e2-45cd-acd6-c8a8950b0512",
          "reference": "646010349353743569"
        },
        "reference": {
          "id": "0002inkmnw",
          "source": "transaction_intent",
          "metadata": {
            "from_id": "01JPQVD4H5NT6DZDV5BQX7YB3G",
            "to_id": "01JPQVD4H5QA5XCTFVBHD17GHE"
          }
        }
      }
    ]
  }
}
```

Por último, y para verificar que la compra de prueba se realizó correctamente, envía un **GET** al endpoint :TagComponent{tag="API" text="/v1/orders/{id}" href="/developers/es/reference/orders/online-payments/get-order/get"}, reemplazando `id` por la identificación de la order, recibida en la respuesta a su creación.

¡Listo! Una vez finalizados estos pasos, la integración de Transferencias SPEI como medio de pago estará completa y podrás, o bien continuar probando otros medios de pago integrados, o bien [salir a producción](/developers/es/docs/checkout-api/go-to-production).