# Otros medios de pago

Con ----[mlb]---- Checkout Transparente------------ ----[mla, mlm]---- Checkout API------------ de Mercado Pago, también es posible ofrecer pagos con **Rapipago** y/o **Pago Fácil**. 

Con estos medios de pago, los compradores podrán realizar un pago diferido en efectivo, siempre dentro del plazo establecido para su vencimiento, y deberán aguardar a que el mismo se acredite para dar por finalizada la compra.

Si deseas continuar con tu integración luego de haber [configurado tu ambiente](/developers/es/docs/checkout-api-v2/development-environment), y quieres ofrecer pagos con Rapipago y/o Pago Fácil, sigue los pasos a continuación.

> NOTE
>
> Recuerda: antes de configurar los medios de pago, elija el modo en que procesará sus transacciones. La definición del modo de procesamiento, ya sea manual o automático, se realizará en el momento de la creación de la order, a través del parámetro `processing_mode`. Para más información, accede a la sección [Modelo de integración](/developers/es/docs/checkout-api-v2/integration-model).

:::AccordionComponent{title="Añadir formulario de pago" pill="client-side"}

Para poder recibir pagos, es necesario que añadas en el _frontend_ un formulario que permita capturar los datos del pagador de manera segura. 

Si ya cuentas con un desarrollo que contempla un formulario de pago propio, asegúrate de incluir Rapipago y Pago Fácil entre las opciones de pago que deseas ofrecer, como es indicado a continuación, y avanza a la etapa de [Obtener tipos de documentos](/developers/es/docs/checkout-api-v2/payment-integration/other-payment-methods#:~:text=client%2Dside-,Obtener,-tipos%20de%20documento). 

Si no cuentas con un formulario de pago, añade el siguiente a tu proyecto, incluyendo el identificador de Pix como medio de pago a ofrecer.

| Medio de pago | `payment_method_id`|
|:---:|:---:|
| Rapipago | `rapipago` |
| Pago Fácil | `pagofacil` |

```html
<form id="form-checkout" action="/process_payment" method="post">
    <div>
      <div>
        <label for="payerFirstName">Nombre</label>
        <input id="form-checkout__payerFirstName" name="payerFirstName" type="text">
      </div>
      <div>
        <label for="payerLastName">Appelido</label>
        <input id="form-checkout__payerLastName" name="payerLastName" type="text">
      </div>
      <div>
        <label for="email">E-mail</label>
        <input id="form-checkout__email" name="email" type="text">
      </div>
      <div>
        <label for="identificationType">Tipo de documento</label>
        <select id="form-checkout__identificationType" name="identificationType" type="text"></select>
      </div>
      <div>
        <label for="identificationNumber">Número del documento</label>
        <input id="form-checkout__identificationNumber" name="identificationNumber" type="text">
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

Si ya cuentas con un desarrollo que contempla la obtención de tipos de documento, como es indicado a continuación, avanza a la etapa de [Enviar pago](/developers/es/docs/checkout-api-v2/payment-integration/other-payment-methods#:~:text=server%2Dside-,Enviar,-pago).

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

Para eso, envía un **POST** con tu :toolTipComponent[Access Token de pruebas]{content="Clave privada de pruebas de la aplicación creada en Mercado Pago, que es utilizada en el _backend_. Puedes acceder a ella a través de *Tus integraciones > Detalles de aplicación > Pruebas > Credenciales de prueba*."} y los parámetros requeridos enumerados a continuación al endpoint :TagComponent{tag="API" text="/v1/orders" href="/developers/es/reference/orders/online-payments/create/post"} y ejecutes la requisición.

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
  "payment_expiration_time": "P3D",
  "payer": {
    "email": "test@testuser.com",
    "first_name": "John",
    "last_name": "Doe",
    "identification": {
      "type": "CPF",
      "number": "99999999999"
     },
  },
  "transactions": {
    "payments": [
      {
        "amount": "200.00",
        "payment_method": {
          "id": "rapipago",
          "type": "ticket"
        }
      }
    ]
  }
}
```

| Atributo | Tipo | Descripción | Requerido/Opcional |
| --- | --- | --- | --- |
| `Authorization` | _Header_ | Hace referencia a tu clave privada, o Access Token. Utiliza el :toolTipComponent[Access Token de pruebas]{content="Clave privada de pruebas de la aplicación creada en Mercado Pago, que es utilizada en el backend. Puedes acceder a ella a través de *Tus integraciones > Detalles de aplicación > Pruebas > Credenciales de prueba*."} en ambientes de desarrollo, y el :toolTipComponent[Access Token productivo]{content="Clave privada de la aplicación creada en Mercado Pago, que es utilizada en el backend al momento de recibir pagos reales. Puedes acceder a ella a través de *Tus integraciones > Detalles de aplicación > Producción > Credenciales de producción*."} para pagos reales. | Requerido |
| `X-Idempotency-Key` | _Header_ | Llave de idempotencia. Esta llave garantiza que cada solicitud sea procesada una única vez, evitando duplicidades. Utiliza un valor exclusivo en el encabezado de tu solicitud, como un UUID V4 o _strings_ aleatorias. | Requerido |
| `processing_mode` | _Body. String_ | Modo de procesamiento de la order. Los valores posibles son: <br><br> - `automatic`: para crear y procesar la order en modo automático. <br><br> - `manual`: para crear la order y procesarla con posterioridad. <br><br> Para más información, acceda a la sección [Modelo de integración](/developers/es/docs/checkout-api-v2/integration-model). | Requerido |
| `total_amount`  | _Body. String_ | Monto total de la transacción. | Requerido |
| `payment_expiration_time` | _Body. String_ | Permite definir la **fecha de vencimiento** utilizando el formato de duración ISO 8601. Si bien puedes configurarla para que sea entre 1 y 30 días luego de la emisión del pago, recomendamos establecer una **duración de 3 días** (“`P3D`” en el ejemplo) para que no haya conflicto entre el vencimiento y la acreditación del pago, que puede demorar hasta 2 horas hábiles desde su realización. En caso de que el pago se efectúe luego de la fecha de vencimiento establecida, el valor será devuelto a la cuenta de Mercado Pago del pagador. | Opcional |
| `payer.email` | _Body. String_ | E-mail del comprador.  | Requerido |
| `payer.identification.type` | _Body. String_ | Tipo de identificación utilizada por el comprador.  | Requerido |
| `payer.identification.number` | _Body. String_ | Número de identificación utilizada por el comprador.  | Requerido |
| `transaction.payments.payment_method.id` | _Body. String_ | Identificador del método de pago. Las opciones para otros medios de pago son: <br><br> `rapipago`: para pagos con Rapipago. <br><br> `pagofacil`: para pagos con Pago Fácil. | Requerido |
| `transaction.payments.payment_method.type` | _Body. String_ | Tipo de método de pago. Para pagos con Rapipago o Pago Fácil, el valor debe ser `ticket`. | Requerido |

> SUCCESS_MESSAGE
>
> Para conocer en detalle todos los parámetros a ser enviados en esta requisición, consulta nuestra [Referencia de API](/developers/es/reference/orders/online-payments/create/post). Adicionalmente, si recibes un error al enviar el pago, puedes consultar nuestro [listado de errores](/developers/es/docs/checkout-api-v2/payment-management/integration-errors).

La respuesta devolverá el parámetro `ticket_url`, que contiene la URL con las instrucciones para que el comprador efectúe el pago, a la que deberás redirigirlo. Además, mostrará el status `action_required` hasta que el pago sea realizado. 

```json
{
  "id": "ORD01J6TC8BYRR0T4ZKY0QR39WGYE",
  "type": "online",
  "processing_mode": "automatic",
  "external_reference": "ext_ref_1234",
  "total_amount": "200.00",
  "country_code": "ARG",
  "user_id": "1245621468",
  "status": "action_required",
  "status_detail": "waiting_payment",
  "capture_mode": "automatic",
  "created_date": "2024-09-02T22:04:01.880469Z",
  "last_updated_date": "2024-09-02T22:04:04.429289Z",
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
          "id": "rapipago",
          "type": "ticket",
          "ticket_url": "https://www.mercadopago.com.ar/payments/86797024510/ticket?caller_id=1870026883&payment_method_id=rapipago&payment_id=86797024510&payment_method_reference_id=6004835002&hash=0331521a-9ddb-44a2-851c-65f77d8d394e",
          "barcode_content": "3335008800000000006004835002100020000242462010",
          "reference": "6005407530",
          "verification_code": "6005407530"
        }
      }
    ]
  }
}
```

> WARNING
> 
> En caso de haber creado la order en modo manual, recuerda que el procesamiento del pago requiere de una etapa adicional, el llamado al endpoint :TagComponent{tag="API" text="Procesar order" href="/developers/es/reference/orders/online/process-order/post"}.

:::
:::AccordionComponent{title="Cancelar pago" pill="server-side"}

[TXTSNIPPET][/guides/snippets/api-orders/cancel-payment]

:::
