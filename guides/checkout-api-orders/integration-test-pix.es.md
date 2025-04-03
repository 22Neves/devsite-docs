# Realizar compra de prueba con Pix 

Para probar tu integración con **Pix**, luego de haber [configurado tu ambiente de pruebas](/developers/es/docs/checkout-api/integration-test), deberás crear una order con valores predefinidos. Esto quiere decir que sólo será posible verificar el funcionamiento de tu integración mediante una requisición, y no simulando una compra. 

Para realizar estas pruebas, envía la siguiente solicitud al endpoint :TagComponent{tag="API" text="/v1/orders" href="/developers/es/reference/orders/online-payments/create/post"}, junto con el :toolTipComponent[_Access Token_ del usuario de pruebas]{content="Clave privada de la aplicación de pruebas creada con tu usuario de pruebas. Se utiliza en el backend para poder probar tu desarrollo. Puedes acceder a ella iniciando sesión con tu usuario de pruebas y dirigiéndote a *Tus integraciones > Detalles de aplicación > Producción > Credenciales de producción*."}. 

```curl
curl --request POST \
  --url https://api.mercadopago.com/v1/orders \
  --header 'content-type: application/json' \
  --data '{
  "type": "online",
  "external_reference": "ext_ref_1234",
  "total_amount": "200.00",
  "payer": {
    "email": "test@testuser.com",
    "first_name": "APRO"
  },
  "transactions": {
    "payments": [
      {
        "amount": "200.00",
        "payment_method": {
          "id": "pix",
          "type": "bank_transfer"
        }
      }
    ]
  }
}'
```

El valor `APRO` para el campo `payer.first_name` es el que determina que esta solicitud predefinida devuelva como respuesta una order creada y con `status action_required`, que indica que se está aguardando el pago,  tal como se muestra a continuación.

```json
{
  "id": "ORD01JP84C939T20S0P1DN382FQ6K",
  "type": "online",
  "processing_mode": "automatic",
  "external_reference": "ext_ref_1234",
  "total_amount": "200.00",
  "country_code": "BRA",
  "user_id": "123456",
  "status": "action_required",
  "status_detail": "waiting_transfer",
  "capture_mode": "automatic",
  "created_date": "2025-03-13T16:11:10.826Z",
  "last_updated_date": "2025-03-13T16:11:11.736Z",
  "integration_data": {
    "application_id": "123456789"
  },
  "transactions": {
    "payments": [
      {
        "id": "PAY01JP84C939T20S0P1DN6FCMWQC",
        "amount": "200.00",
        "reference_id": "0002gw9x2v",
        "status": "action_required",
        "status_detail": "waiting_transfer",
        "payment_method": {
          "id": "pix",
          "type": "bank_transfer",
          "ticket_url": "https://www.mercadopago.com.br/sandbox/payments/104669748043/ticket?caller_id=1985141462&hash=1eff4445-4454-4308-a6b0-d2a1651ca44f",
          "qr_code": "00020126580014br.gov.bcb.pix0136b76aa9c2-2ec4-4110-954e-ebfe34f05b615204000053039865406200.005802BR5918TESTUSER20543760926009Sao Paulo62250521mpqrinter1046697480436304B70B",
          "qr_code_base64": ""
        }
      }
    ]
  }
}
```

Por último, y para verificar que la compra de prueba se realizó correctamente, envía un **GET** al endpoint :TagComponent{tag="API" text="/v1/orders/{id}" href="/developers/es/reference/orders/online-payments/get-order/get"}, reemplazando `id` por la identificación de la order, recibida en la respuesta a su creación.

¡Listo! Una vez finalizados estos pasos, la integración de Pix como medio de pago estará completa y podrás, o bien continuar probando otros medios de pago integrados, o bien [salir a producción](/developers/es/docs/checkout-api/go-to-production).