# Boleto

Con ----[mlb]---- Checkout Transparente------------ ----[mla, mlm]---- Checkout API------------ de Mercado Pago, también es posible ofrecer pagos con **boleto bancário** 

Con esto medio de pago, los compradores podrán realizar un pago diferido, siempre dentro del plazo establecido para su vencimiento, y deberán aguardar a que el mismo se acredite para dar por finalizada la compra.

Si ya [configuraste tu ambiente](/developers/es/docs/checkout-api-v2/development-environment), y quieres ofrecer pagos con boleto bancário, sigue los pasos a continuación.

> NOTE
>
> Recuerda: antes de configurar los medios de pago, elija el modo en que procesará sus transacciones. La definición del modo de procesamiento, ya sea manual o automático, se realizará en el momento de la creación de la order, a través del parámetro `processing_mode`. Para más información, accede a la sección [Modelo de integración](/developers/es/docs/checkout-api-v2/integration-model).
:::AccordionComponent{title="Añadir formulario de pago" pill="client-side"}

Para poder recibir pagos, es necesario que añadas en el _frontend_ un formulario que permita capturar los datos del pagador de manera segura. 

Si ya cuentas con un desarrollo que contempla un formulario de pago propio, asegúrate de incluir **boleto** entre las opciones de pago que deseas ofrecer, como es indicado a continuación, y avanza a la etapa de [Obtener tipos de documento](/developers/es/docs/checkout-api-v2/payment-integration/boleto#:~:text=client%2Dside-,Obtener,-tipos%20de%20documento). 

> RED_MESSAGE
>
> Para configurar pagos con boleto bancário, es obligatorio que los campos `zip_code`, `street_name`, `street_number`, `neighborhood`, `city` y `state` estén presentes en el formulario de pago y sean completados por el comprador. Si tienes realizada una configuración que no los incluya, deberás actualizarla para asegurarte que tus pagos sean procesados.
Si no cuentas con un formulario de pago, añade el siguiente a tu proyecto, incluyendo el identificador de boleto bancário como medio de pago a ofrecer.

| Medio de pago | `payment_method_id`|
|:---:|:---:|
| Boleto bancário | `bolbradesco` |

```html
 <form id="form-checkout" action="/process_payment" method="post">
   <div>
       <h1>Payer Request</h1>
     <div>
       <label for="payerFirstName">Nome</label>
       <input id="form-checkout__payerFirstName" name="payerFirstName" type="text">
     </div>
     <div>
       <label for="payerLastName">Sobrenome</label>
       <input id="form-checkout__payerLastName" name="payerLastName" type="text">
     </div>
     <div>
       <label for="email">E-mail</label>
       <input id="form-checkout__email" name="email" type="text">
     </div>
     <div>
       <label for="identificationType">Tipo de documento</label>
       <input id="form-checkout__identificationType" name="identificationType" type="text"></input>
     </div>
     <div>
       <label for="identificationNumber">Número do documento</label>
       <input id="form-checkout__identificationNumber" name="identificationNumber" type="text">
     </div>
     <div>
       <label for="zip_code"> CEP: </label>
       <input id="form-checkout__zip_code" name="zip_code" type="text">
     </div>
     <div>
       <label for="street_name"> Rua: </label>
       <input id="form-checkout__street_name" name="street_name" type="text">
     </div>
     <div>
       <label for="street_number"> Número: </label>
       <input id="form-checkout__street_number" name="street_number" type="text">
     </div>
     <div>
       <label for="neighborhood"> Bairro: </label>
       <input id="form-checkout__neighborhood" name="neighborhood" type="text">
     </div>
     <div>
       <label for="city"> Cidade: </label>
       <input id="form-checkout__city" name="city" type="text">
     </div>
     <div>
       <label for="federal_unit"> Estado: </label>
       <input id="form-checkout__federal_unit" name="federal_unit" type="text">
     </div>
   </div>
   <div>
     <div>
       <input type="hidden" name="transactionAmount" id="transactionAmount" value="100">
       <input type="hidden" name="description" id="description" value="Nome do Produto">
       <br>
       <button type="submit">Pagar</button>
     </div>
   </div>
 </form>
```

:::
:::AccordionComponent{title="Obtener tipos de documento" pill="client-side"}

Para facilitar la inserción de datos en el formulario de pago de manera correcta, es necesario obtener los posibles tipos de documento a ser aceptados. 

La función a continuación te permitirá completar automáticamente las opciones disponibles.  Para eso, basta incluir el elemento `select` con el `id: form-checkout__identificationType` que se encuentra en el formulario utilizado como ejemplo en la etapa anterior.

Si ya cuentas con un desarrollo que contempla la obtención de tipos de documento, como es indicado a continuación, avanza a la etapa de [Enviar pago](/developers/es/docs/checkout-api-v2/payment-integration/boleto#:~:text=server%2Dside-,Enviar,-pago).

Si no cuentas con esta función, añade la siguiente a tu proyecto.

```javascript
    (async function getIdentificationTypes() {
      try {
        const identificationTypes = await mp.getIdentificationTypes();
        const identificationTypeElement = document.getElementById('form-checkout__identificationType');

        createSelectOptions(identificationTypeElement, identificationTypes);
      } catch (e) {
        return console.error('Error getting identificationTypes: ', e);
      }
    })();

    function createSelectOptions(elem, options, labelsAndKeys = { label: "name", value: "id" }) {
      const { label, value } = labelsAndKeys;

      elem.options.length = 0;

      const tempOptions = document.createDocumentFragment();

      options.forEach(option => {
        const optValue = option[value];
        const optLabel = option[label];

        const opt = document.createElement('option');
        opt.value = optValue;
        opt.textContent = optLabel;

        tempOptions.appendChild(opt);
      });

      elem.appendChild(tempOptions);
    }
```

:::
:::AccordionComponent{title="Enviar pago" pill="server-side"} 

El envío del pago debe ser realizado mediante la creación de una order que contenga transacciones de pago asociadas. 

> NOTE
>
> La creación de un pago puede ocurrir de forma asíncrona en una order. En este escenario, la order queda con el estado processing y sin información. Recomendamos configurar las [notificaciones del tópico Order](/developers/es/docs/checkout-api-v2/notifications) para recibir actualizaciones sobre el cambio de estado, incluyendo los datos actualizados de la order. Alternativamente, puedes optar por enviar un **GET** al endpoint [/v1/orders/{id}](/developers/es/reference/orders/online-payments/get-order/get) para buscar esos datos actualizados.

Para eso, envía un **POST** con tu :toolTipComponent[Access Token de pruebas]{content="Clave privada de pruebas de la aplicación creada en Mercado Pago, que es utilizada en el backend. Puedes acceder a ella a través de *Tus integraciones > Detalles de aplicación > Pruebas > Credenciales de prueba*."} y los parámetros requeridos enumerados a continuación al endpoint :TagComponent{tag="API" text="/v1/orders" href="/developers/es/reference/orders/online-payments/create/post"} y ejecutes la requisición.

```curl
curl --location 'https://api.mercadopago.com/v1/orders' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer ENV_ACCESS_TOKEN' \
--header 'X-Idempotency-Key: <SOME_UNIQUE_VALUE>' \
{
  "type": "online",
  "external_reference": "ext_ref_1234",
  "processing_mode": "automatic",
  "total_amount": "200.00",
  "description": "some description",
  "payer": {
    "email": "test@testuser.com",
    "first_name": "John",
    "last_name": "Doe",
    "identification": {
      "type": "CPF",
      "number": "99999999999"
    },
    "address": [
      {
        "street_name": "Av. das Nações Unidas",
        "street_number": "3003",
        "zip_code": "06233903",
        "neighborhood": "Bonfim",
        "state": "SP",
        "city": "Osasco"
      }
    ]
  },
  "transactions": {
    "payments": [
      {
        "amount": "200.00",
        "payment_method": {
          "id": "bolbradesco",
          "type": "ticket"
        },
        "expiration_time": "P3D"
      }
    ]
  }
}
```

Consulta en la tabla a continuación las descripciones de los parámetros que son obligatorios en la solicitud y aquellos que, aunque son opcionales, tienen alguna particularidad importante que debe destacarse.

| Atributo                                          | Tipo            | Descripción                                                                                                                                                                                                                        | Requerido/Opcional |
|---------------------------------------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------|
| `Authorization`                                     | _Header_        | Hace referencia a tu clave privada, o Access Token. Utiliza el :toolTipComponent[Access Token de pruebas]{content="Clave privada de pruebas de la aplicación creada en Mercado Pago, que es utilizada en el backend. Puedes acceder a ella a través de *Tus integraciones > Detalles de aplicación > Pruebas > Credenciales de prueba*."} en ambientes de desarrollo, y el :toolTipComponent[Access Token productivo]{content="Clave privada de la aplicación creada en Mercado Pago, que es utilizada en el backend al momento de recibir pagos reales. Puedes acceder a ella a través de *Tus integraciones > Detalles de aplicación > Producción > Credenciales de producción*."} para pagos reales.                                                            | Requerido          |
| `X-Idempotency-Key`                                 | _Header_          | Llave de idempotencia. Esta llave garantiza que cada solicitud sea procesada una única vez, evitando duplicidades. Utiliza un valor exclusivo en el encabezado de tu solicitud, como un UUID V4 o _strings_ aleatorias.            | Requerido          |
| `processing_mode`                                   | _Body. String_    | Modo de procesamiento de la order. Los valores posibles son: <br><br> - `automatic`: para crear y procesar la order en modo automático. <br><br> - `manual`: para crear la order y procesarla con posterioridad. <br><br> Para más información, acceda a la sección [Modelo de integración](/developers/es/docs/checkout-api-v2/integration-model).                                          | Requerido          |
| `total_amount`                                      | _Body. String_    | Monto total de la transacción.                                                                                                                                                                                                       | Requerido             |
| `payer.email`                                       | _Body. String_    | E-mail del comprador.                                                                                                                                                                         | Requerido          |
| `payer.identification.type`                          | _Body. String_   | Tipo de identificación utilizada por el comprador.                                                                                                                                             | Requerido          |
| `payer.identification.number `                       | _Body. String_   | Número de identificación del comprador.                                                                                                                                                       | Requerido          |
| `payer.adress.street_name`      | _Body. String_   |Número de la dirección del pagador.                       | Requerido          |
| `payer.adress.street_number`                         | _Body. String_   | Número do endereço do pagador. Caso não possua um número, enviar "S/N".                                                                                                                  | Requerido          |
| `payer.adress.zip_code`                             | _Body. String_   | Código postal de la dirección del pagador.                                                                                                                                                                 | Requerido          |
| `payer.adress.neighborhood`                          | _Body. String_   | Barrio en el que se encuentra la dirección del pagador.                                                                                                                                           | Requerido          |
| `payer.adress.state`                                 | _Body. String_  | Estado en el que se encuentra la dirección del pagador. ----[mlb]---- Para Brasil, este parámetro solo **acepta dos caracteres**. Ejemplo: SP. ------------                                                                    | Requerido          |
| `payer.adress.city`                                  | _Body. String_   | Ciudad en la que se encuentra la dirección del pagador.                                                                                                                                           | Requerido          |
| `transaction.payments.payment_method.id`            | _Body. String_    | Identificador del medio de pago. En este caso, el valor deberá ser `bolbradesco`.                                                                                                                                                      | Requerido          |
| `transaction.payments.payment_method.type`          | _Body. String_    | Tipo del medio de pago. En el caso de pagos con boleto, el valor deberá ser `ticket`.                                                                                                                                  | Requerido          |
| `transactions.payments.expiration_time`                                  | _Body. String_    | Permite definir la **fecha de vencimiento** utilizando el formato de duración ISO 8601. Por defecto, **la fecha de vencimiento del boleto es de 3 días hábiles**, pero es posible cambiarla a través de este parámetro. <br><br> La fecha se puede configurar entre 1 y 30 días después de la creación del pago. Recomendamos establecer una duración de, al menos, 3 días (“P3D", como en el ejemplo) para evitar conflictos entre la fecha de vencimiento y la acreditación del pago, que puede tardar hasta 2 horas hábiles desde su realización. <br><br> En caso de que el pago se efectúe luego de la fecha de vencimiento establecida, el valor será devuelto a la cuenta de Mercado Pago del pagador.                | Opcional             |

> SUCCESS_MESSAGE
>
> Para conocer en detalle todos los parámetros a ser enviados en esta requisición, consulta nuestra [Referencia de API](/developers/es/reference/orders/online-payments/create/post). Adicionalmente, si recibes un error al enviar el pago, puedes consultar nuestro [listado de errores](/developers/es/docs/checkout-api-v2/payment-management/integration-errors).
Después de enviar la solicitud de pago, la respuesta traerá la siguiente información:

```json
{
  "id": "ORD01J6TC8BYRR0T4ZKY0QR39WGYE",
  "processing_mode": "automatic",
  "external_reference": "ext_ref_1234",
  "marketplace": "NONE",
  "total_amount": "200.00",
  "country_code": "BRA",
  "user_id": "1245621468",
  "created_date": "2024-09-02T22:04:01.880469Z",
  "last_updated_date": "2024-09-02T22:04:04.429289Z",
  "type": "online",
  "status": "action_required",
  "status_detail": "waiting_payment",
  "capture_mode": "automatic",
  "integration_data": {
    "application_id": "4599991948843755"
  },
  "transactions": {
    "payments": [
      {
        "id": "PAY01J6TC8BYRR0T4ZKY0QRTZ0E24",
        "reference_id": "22dvqmsbq8c",
        "amount": "200.00",
        "status": "action_required",
        "status_detail": "waiting_payment",
        "payment_method": {
          "id": "bolbradesco",
          "type": "ticket",
          "ticket_url": "https://www.mercadopago.com.ar/payments/86797024510/ticket?caller_id=1870026883&payment_method_id=rapipago&payment_id=86797024510&payment_method_reference_id=6004835002&hash=0331521a-9ddb-44a2-851c-65f77d8d394e",
          "barcode_content": "3335008800000000006004835002100020000242462010",
          "reference": "1234567890",
          "verification_code": "1234567890",
          "financial_institution": "bolbradesco",
          "digitable_line": "23793380296060054351030006333303799140000020000"
        }
      }
    ]
  }
}
```

Entre los parámetros devueltos, tenemos los indicados en la tabla a continuación.

| Atributo                                          | Tipo          | Descripción                                                                                                                                                                                                                |
|---------------------------------------------------|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `transaction.payments.status`                        | _String_        | Retorna el status de la transacción. En este caso, devolverá `action_required` para indicar la necesidad de una acción para completar el procesamiento, es decir, hasta que se realice el pago del boleto.                          |
| `transaction.payments.status_detail`                 | _String_        | En este caso, el `status_detail` obtenido es aguardando (`waiting_payment`) que el usuario complete el proceso de pago del boleto en su banco.                                                                                |
| `transaction.payments.payment_method.ticket_url`     | _String_        | URL que contiene las instrucciones para que el comprador realice el pago del boleto, al cual deberás redirigirlo.                                                                                                       |
| `transaction.payments.payment_barcode_content`      | _String_        | Presenta un código de barras en formato EAN-13 que debe ser utilizado para el pago del boleto bancário.                                                                                                                      |
| `transaction.payments.payment_financial_institution`  | _String_        | Institución bancaria responsable del procesamiento del boleto.                                                                                                                                                          |
| `transaction.payments.payment_digitable_line`        | _String_        | Presenta la línea digitable del código de barras, una forma de pagar el boleto bancário a través de internet o en los casos en que el código de barras está dañado.                                             |

> WARNING
> 
> En caso de haber creado la order en modo manual, recuerda que el procesamiento del pago requiere de una etapa adicional, el llamado al endpoint :TagComponent{tag="API" text="Procesar order" href="/developers/es/reference/orders/online/process-order/post"}.
:::
:::AccordionComponent{title="Cancelar pagamento" pill="server-side"}

[TXTSNIPPET][/guides/snippets/api-orders/cancel-payment]

:::