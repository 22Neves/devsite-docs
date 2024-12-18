# Pagos con tarjeta

La integración de pagos con tarjeta se realiza a través de _CardForm_. En este modo de integración, **MercadoPago.js** se encarga de los flujos necesarios para obtener la información requerida para la generación de un pago. Al inicializarlo, se realiza una búsqueda para recabar los tipos de documentos disponibles para el país correspondiente.

A medida que se introducen los datos de la tarjeta, se realiza una búsqueda automática de la información del emisor y las cuotas disponibles para ese método de pago. Con esto, la implementación del flujo es transparente para quien realiza la integración.

Consulta el siguiente diagrama que ilustra el proceso de pago con tarjeta utilizando _CardForm_.

![API-integration-flowchart](/images/api/api-integration-flowchart-cardform-2-es.png)

## Cifrar tarjeta - SDK JS

La primera etapa del proceso de integración de pagos con tarjeta es la captura de los datos de la tarjeta. Esta captura se realiza a través de la inclusión de la biblioteca `MercadoPago.js` en tu proyecto, la configuración de credenciales, y la inclusión del formulario de pago para su posterior inicialización. Utiliza el siguiente código para importar la biblioteca antes de añadir el formulario de pago.

```html
<body>
  <script src="https://sdk.mercadopago.com/js/v2"></script>
</body>
```
```bash

npm install @mercadopago/sdk-js

```

### Configurar credenciales

Las credenciales son claves únicas con las que identificamos una integración en tu cuenta. Se utilizan para capturar pagos en tiendas online y otras aplicaciones de forma segura.

Esta es la primera etapa de una estructura de código completa que se debe seguir para integrar correctamente pagos con tarjeta. 

```html
<script>
  const mp = new MercadoPago("YOUR_PUBLIC_KEY");
</script>
```
```javascript
import { loadMercadoPago } from "@mercadopago/sdk-js";

await loadMercadoPago();
const mp = new window.MercadoPago("YOUR_PUBLIC_KEY");

```

### Añadir formulario de pago

La captura de los datos de la tarjeta se realiza a través del _CardForm_ de la biblioteca `MercadoPago.js`. Nuestro _CardForm_ se conectará a tu formulario de pago HTML, facilitando la obtención y validación de todos los datos necesarios para procesar el pago.

Para añadir el formulario de pago, inserta el siguiente HTML directamente en el proyecto. 

```html
  <style>
    #form-checkout {
      display: flex;
      flex-direction: column;
      max-width: 600px;
    }

    .container {
      height: 18px;
      display: inline-block;
      border: 1px solid rgb(118, 118, 118);
      border-radius: 2px;
      padding: 1px 2px;
    }
  </style>
  <form id="form-checkout">
    <div id="form-checkout__cardNumber" class="container"></div>
    <div id="form-checkout__expirationDate" class="container"></div>
    <div id="form-checkout__securityCode" class="container"></div>
    <input type="text" id="form-checkout__cardholderName" />
    <select id="form-checkout__issuer"></select>
    <select id="form-checkout__installments"></select>
    <select id="form-checkout__identificationType"></select>
    <input type="text" id="form-checkout__identificationNumber" />
    <input type="email" id="form-checkout__cardholderEmail" />

    <button type="submit" id="form-checkout__submit">Pagar</button>
    <progress value="0" class="progress-bar">Cargando...</progress>
  </form>
```

### Inicializar formulario de pago

Después de añadir el formulario de pago, es necesario inicializarlo. Esta etapa consiste en relacionar el ID de cada campo del formulario con los atributos correspondientes. La biblioteca se encargará de rellenar, obtener y validar todos los datos necesarios en la confirmación del pago.  

> NOTE
>
> Importante
>
> Al enviar el formulario, se genera un token que representa de manera segura los datos de la tarjeta, también llamado **cardtoken**. Es posible acceder a él mediante la función `cardForm.getCardFormData()`, como se muestra a continuación en el callback `onSubmit`. Además, este token también se almacena en un campo oculto dentro del formulario, donde se puede encontrar con la nomenclatura `MPHiddenInputToken`. Ten en cuenta que puede ser utilizado **solo una vez** y caduca en un plazo de **7 días**.

----[mlm]----
```javascript
const cardForm = mp.cardForm({
    amount: "100.5",
    iframe: true,
    form: {
        id: "form-checkout",
        cardNumber: {
            id: "form-checkout__cardNumber",
            placeholder: "Número de la tarjeta",
        },
        expirationDate: {
            id: "form-checkout__expirationDate",
            placeholder: "MM/AA",
        },
        securityCode: {
            id: "form-checkout__securityCode",
            placeholder: "Código de seguridad",
        },
        cardholderName: {
            id: "form-checkout__cardholderName",
            placeholder: "Titular de la tarjeta",
        },
        issuer: {
            id: "form-checkout__issuer",
            placeholder: "Banco emisor",
        },
        installments: {
            id: "form-checkout__installments",
            placeholder: "Cuotas",
        },
        identificationType: {
            id: "form-checkout__identificationType",
            placeholder: "Tipo de documento",
        },
        identificationNumber: {
            id: "form-checkout__identificationNumber",
            placeholder: "Número do documento",
        },
        cardholderEmail: {
            id: "form-checkout__cardholderEmail",
            placeholder: "Correo electrónico",
        },
    },
    callbacks: {
        onFormMounted: error => {
            if (error) return console.warn("Form Mounted handling error: ", error);
            console.log("Form mounted");
        },
        onSubmit: event => {
            event.preventDefault();

            const {
                paymentMethodId: payment_method_id,
                issuerId: issuer_id,
                cardholderEmail: email,
                amount,
                token,
                installments,
                identificationNumber,
                identificationType,
            } = cardForm.getCardFormData();

            fetch("/process_order", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    total_amount: amount, // debe ser una string con el formato ..0.00
                    description: description,
                    payer: {
                        email,
                        identification: {
                            type: identificationType,
                            number: identificationNumber
                        }
                    },
                    transactions: [
                        {
                            amount, // debe ser una string con el formato ..0.00
                            payment_method: {
                                token,
                                id: payment_method_id,
                                type: type, // debe ser “credit_card” o “debit_card”,
                                installments: Number(installments)
                            }
                        }
                    ]
                }),
            });
        },
        onFetching: (resource) => {
            console.log("Fetching resource: ", resource);

            // Animate progress bar
            const progressBar = document.querySelector(".progress-bar");
            progressBar.removeAttribute("value");

            return () => {
                progressBar.setAttribute("value", "0");
            };
        }
    },
});
```
------------
----[mlb, mla]----
```javascript
const cardForm = mp.cardForm({
    amount: "100.5",
    iframe: true,
    form: {
        id: "form-checkout",
        cardNumber: {
            id: "form-checkout__cardNumber",
            placeholder: "Número do cartão",
        },
        expirationDate: {
            id: "form-checkout__expirationDate",
            placeholder: "MM/AA",
        },
        securityCode: {
            id: "form-checkout__securityCode",
            placeholder: "Código de segurança",
        },
        cardholderName: {
            id: "form-checkout__cardholderName",
            placeholder: "Titular do cartão",
        },
        issuer: {
            id: "form-checkout__issuer",
            placeholder: "Banco emissor",
        },
        installments: {
            id: "form-checkout__installments",
            placeholder: "Parcelas",
        },
        identificationType: {
            id: "form-checkout__identificationType",
            placeholder: "Tipo de documento",
        },
        identificationNumber: {
            id: "form-checkout__identificationNumber",
            placeholder: "Número do documento",
        },
        cardholderEmail: {
            id: "form-checkout__cardholderEmail",
            placeholder: "E-mail",
        },
    },
    callbacks: {
        onFormMounted: error => {
            if (error) return console.warn("Form Mounted handling error: ", error);
            console.log("Form mounted");
        },
        onSubmit: event => {
            event.preventDefault();

            const {
                paymentMethodId: payment_method_id,
                issuerId: issuer_id,
                cardholderEmail: email,
                amount,
                token,
                installments,
                identificationNumber,
                identificationType,
            } = cardForm.getCardFormData();

            fetch("/process_order", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    total_amount: amount, // deve ser uma string com o formato ..0.00
                    description: description,
                    payer: {
                        email,
                        identification: {
                            type: identificationType,
                            number: identificationNumber
                        }
                    },
                    transactions: [
                        {
                            amount, // deve ser uma string com o formato ..0.00
                            payment_method: {
                                token,
                                id: payment_method_id,
                                type: type, // deve ser “credit_card” ou “debit_card”,
                                installments: Number(installments)
                            }
                        }
                    ]
                }),
            });
        },
        onFetching: (resource) => {
            console.log("Fetching resource: ", resource);

            // Animate progress bar
            const progressBar = document.querySelector(".progress-bar");
            progressBar.removeAttribute("value");

            return () => {
                progressBar.setAttribute("value", "0");
            };
        }
    },
});
```
------------

## Crear pago

Para continuar con el proceso de integración de pagos con tarjeta, es necesario que el backend reciba la información del formulario con el token generado y los datos completos.

En el ejemplo de la sección previa, enviamos todos los datos necesarios para la generación del pago al endpoint `process_payment` del backend.

Con toda la información recopilada en el backend, envía un **POST** con los atributos requeridos al endpoint [/v1/orders](/developers/es/reference/order/online-payments/create/post) y ejecuta la solicitud para procesar el pago.

> WARNING
>
> Importante
>
> Deberás enviar obligatoriamente el atributo `X-Idempotency-Key` para asegurar la ejecución y reejecución de las solicitudes sin el riesgo de realizar la misma acción más de una vez por error. Para hacerlo, actualiza [nuestra biblioteca de SDKs](/developers/es/docs/sdks-library/landing), o bien genera un UUID V4 y envíalo en los _header_ de tus solicitudes.

```curl
curl -X POST \
    'https://api.mercadopago.com/v1/orders'\
    -H 'Content-Type: application/json' \
       -H 'X-Idempotency-Key: {{SOME_UNIQUE_VALUE}}' \
       -H 'Authorization: Bearer {{YOUR_ACCESS_TOKEN}}' \
    -d '{
    "type": "online",
    "processing_mode": "automatic",
    "total_amount": "200.00",
    "external_reference": "ext_ref_1234",
    "payer": {
        "email": "{{EMAIL}}"
    },
    "transactions": {
        "payments": [
            {
                "amount": "200.00",
                "payment_method": {
                    "id": "master",
                    "type": "credit_card",
                    "token": "1223123",
                    "installments": 1
                }
            }
        ]
    }
}'
```

La respuesta para una solicitud exitosa será:

```json
{
    "id": "01JAQD7X1BXGY2Q59VYKRV90W8",
    "type": "online",
    "processing_mode": "automatic",
    "external_reference": "ext_ref_1234",
    "total_amount": "200.00",
    "country_code": "BRA",
    "status": "processed",
    "status_detail": "accredited",
    "capture_mode": "automatic",
    "created_date": "2024-10-21T11:26:19.17922368Z",
    "last_updated_date": "2024-10-21T11:26:20.923603158Z",
    "integration_data": {
        "application_id": "874202490252970"
    },
    "payer": {
        "email": "{{EMAIL}}"
    },
    "transactions": {
        "payments": [
            {
                "id": "pay_01JAQD7X1BXGY2Q59VYP036JDN",
                "amount": "200.00",
                "reference_id": "0001hyhhbz",
                "status": "processed",
                "status_detail": "accredited",
                "payment_method": {
                    "id": "master",
                    "type": "credit_card",
                    "token": "e607133fe7acf46ff35cd5f7810f7eb2",
                    "installments": 1
                }
            }
        ]
    }
}
```

La respuesta para casos donde la transacción falló será:

```json
{
  "errors": [
    {
      "code": "failed",
      "message": "The following transactions failed",
      "details": [
        "pay_01JE71J4APB80344T8QMSZK48V: rejected_by_issuer"
      ]
    }
  ],
  "data": {
    "id": "01JE71J4APB80344T8QHV6W42A",
    "type": "online",
    "processing_mode": "automatic",
    "external_reference": "ext_ref_1234",
    "capture_mode": "automatic",
    "total_amount": "200.00",
    "country_code": "BRA",
    "status": "failed",
    "status_detail": "failed",
    "created_date": "2024-12-03T19:57:07.798976826Z",
    "last_updated_date": "2024-12-03T19:57:10.276894389Z",
    "integration_data": {
      "application_id": "130106526144588"
    },
    "payer": {
      "email": "test_user_9835778@testuser.com"
    },
    "transactions": {
      "payments": [
        {
          "id": "pay_01JE71J4APB80344T8QMSZK48V",
          "amount": "200.00",
          "status": "failed",
          "status_detail": "rejected_by_issuer",
          "reference_id": "22dvqmsfohy",
          "payment_method": {
            "id": "master",
            "type": "credit_card",
            "token": "756bf5ae9e03b14a47c7afd8e77ab7f8",
            "installments": 1
          },
        }
      ]
    }
  }
}
```

> WARNING
>
> Atención
>
> Consulta la lista completa de estados de un pago y de la order creada en la sección [Status](/developers/es/docs/order/status-errors/payment-status) <br>
> <br>
> Para mantenerte al día con las actualizaciones, debes configurar tu sistema para recibir notificaciones de order y sus actualizaciones de estado. Consulta [Notificaciones](/developers/es/docs/order/online-payments/notifications) para obtener más detalles.