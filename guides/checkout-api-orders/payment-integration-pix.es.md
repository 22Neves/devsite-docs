# Pix

Con ----[mlb]---- Checkout Transparente------------ ----[mla, mlm]---- Checkout API------------ de Mercado Pago, también es posible ofrecer pagos instantáneos con Pix a través de un **código QR** o un **link de pago**.

**Pix** es un medio de pago electrónico inmediato ofrecido por el Banco Central de Brasil a personas físicas y jurídicas.

> WARNING
>
> Si deseas ofrecer pagos a través de Pix, necesitas registrar las claves Pix. Si aún no hiciste, [haz clic aquí](https://www.youtube.com/watch?v=60tApKYVnkA) para obtener más información sobre cómo registrarlas.

Si ya [configuraste tu ambiente](/developers/es/docs/checkout-api/development-environment), y quieres ofrecer pagos con Pix, sigue los pasos a continuación.

> NOTE
>
> Recuerde: antes de configurar los medios de pago, elija el modo en que procesará sus transacciones. La definición del modo de procesamiento, ya sea manual o automático, se realizará en el momento de la creación de la order, a través del parámetro `processing_mode`. Para más información, acceda a la sección [Modelo de integración](/developers/es/docs/checkout-api/integration-model).

:::AccordionComponent{title="Añadir formulario de pago" pill="client-side"}

Para poder recibir pagos, es necesario que añadas en el _frontend_ un formulario que permita capturar los datos del pagador de manera segura. 

Si ya cuentas con un desarrollo que contempla un formulario de pago propio, asegúrate de incluir **Pix** entre las opciones de pago que deseas ofrecer, como es indicado a continuación, y avanza a la etapa de [Enviar pago](). 

Si no cuentas con un formulario de pago, añade el siguiente a tu proyecto, incluyendo el identificador de Pix como medio de pago a ofrecer.

| Medio de pago | `payment_method_id`|
|:---:|:---:|
| Pix | `pix` |

```html
 <form id="form-checkout" action="/process_payment" method="post">
    <div>
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
        <select id="form-checkout__identificationType" name="identificationType" type="text"></select>
      </div>
      <div>
        <label for="identificationNumber">Número do documento</label>
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

Si ya cuentas con un desarrollo que contempla la obtención de tipos de documento, como es indicado a continuación, avanza a la etapa de [Enviar pago](XXX).

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

Para eso, envía un **POST** con tu :toolTipComponent[Access Token de pruebas]{content="Clave privada de pruebas de la aplicación creada en Mercado Pago, que es utilizada en el backend. Puedes acceder a ella a través de **Tus integraciones > Detalles de aplicación > Pruebas > Credenciales de prueba**."}
 y los parámetros requeridos enumerados a continuación al endpoint :TagComponent{tag="API" text="/v1/orders" href="/developers/es/reference/order/online-payments/create/post"} y ejecutes la requisición.

```curl
curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    -H 'X-Idempotency-Key: SOME_UNIQUE_VALUE' \
    'https://api.mercadopago.com/v1/orders' \
    -d '{
  "type": "online",
  "total_amount": "1000.00",
  "payment_expiration_time": "P3Y6M4DT12H30M5S",
  "external_reference": "ext_ref_1234",
  "processing_mode": "automatic",
  "transactions": {
    "payments": [
      {
        "amount": "1000.00",
        "payment_method": {
          "id": "pix",
          "type": "bank_transfer"
        }
      }
    ]
  },
  "payer": {
    "email": "test@testuser.com"
  }
}
```

Consulte en la tabla a continuación las descripciones de los parámetros que son obligatorios en la solicitud y aquellos que, aunque son opcionales, tienen alguna particularidad importante que debe destacarse.

| Atributo                                          | Tipo            | Descripción                                                                                                                                                                                                                        | Requerido/Opcional |
|---------------------------------------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------|
| `Authorization`                                     | _Header_        | Hace referencia a tu clave privada, o Access Token. Utiliza el :toolTipComponent[Access Token de pruebas]{content="Clave privada de pruebas de la aplicación creada en Mercado Pago, que es utilizada en el backend. Puedes acceder a ella a través de **Tus integraciones > Detalles de aplicación > Pruebas > Credenciales de prueba**."}
 en ambientes de desarrollo, y el :toolTipComponent[Access Token productivo]{content="Clave privada de la aplicación creada en Mercado Pago, que es utilizada en el backend al momento de recibir pagos reales. Puedes acceder a ella a través de **Tus integraciones > Detalles de aplicación > Producción > Credenciales de producción**."} para pagos reales.                                                            | Requerido          |
| `X-Idempotency-Key`                                 | _Header_          | Llave de idempotencia. Esta llave garantiza que cada solicitud sea procesada una única vez, evitando duplicidades. Utiliza un valor exclusivo en el encabezado de tu solicitud, como un UUID V4 o _strings_ aleatorias.            | Requerido          |
| `total_amount`                                      | _Body. String_    | Monto total de la transacción.                                                                                                                                                                                                       | Opcional             |
| `payment_expiration_time`                                  | _Body. String_    | Permite definir la **fecha de vencimiento** utilizando el formato de duración ISO 8601. Por defecto, **la fecha de vencimiento del boleto es de 3 días hábiles**, pero es posible cambiarla a través de este parámetro. La fecha se puede configurar entre 1 y 30 días después de la creación del pago. Recomendamos establecer una duración de, al menos, 3 días (“P3D", como en el ejemplo) para evitar conflictos entre la fecha de vencimiento y la acreditación del pago, que puede tardar hasta 2 horas hábiles desde su realización. En caso de que el pago se efectúe luego de la fecha de vencimiento establecida, el valor será devuelto a la cuenta de Mercado Pago del pagador.                | Opcional             |
| `external_reference`                                   | _Body. String_    | Referencia externa de la order que puede ser, por ejemplo, un hashcode del Banco Central, funcionando como identificador de origen de la transacción.                                          | Requerido          |
| `processing_mode`                                   | _Body. String_    | Modo de procesamiento de la order. Los valores posibles son: <br> - `automatic`: para crear y procesar la order en modo automático.<br> - `manual`: para crear la order y procesarla con posterioridad. . <br> Para más información, acceda a la sección [Modelo de integración](/developers/es/docs/checkout-api/integration-model).                                          | Requerido          |
| `transaction.payments.payment_method.id`            | _Body. String_    | Identificador del medio de pago. En este caso, el valor deberá ser `pix`.                                                                                                                                                      | Requerido          |
| `transaction.payments.payment_method.type`          | _Body. String_    | Tipo del medio de pago. En el caso de pagos con boleto, el valor deberá ser `bank_transfer`.                                                                                                                                  | Requerido          |
| `payer.email`                                       | _Body. String_    | E-mail del comprador.                                                                                                                                                                         | Requerido          |

> SUCCESS_MESSAGE
>
> Para conocer en detalle todos los parámetros a ser enviados en esta requisición, consulta nuestra [Referencia de API](/developers/es/reference/order/online-payments/create/post). Adicionalmente, si recibes un error al enviar el pago, puedes consultar nuestro [listado de errores](/developers/es/docs/checkout-api/payment-management/integration-errors).

Después de enviar la solicitud de pago, la respuesta traerá la siguiente información:

```json
{
  "id": "ORD01HRYFWNYRE1MR1E60MW3X0T2P",
  "type": "online",
  "total_amount": "1000.00",
  "external_reference": "ext_ref_1234",
  "country_code": "BRA",
  "status": "action_required",
  "status_detail": "waiting_transfer",
  "capture_mode": "automatic",
  "transactions": {
    "payments": [
      {
        "id": "PAY01HRYFXQ53Q3JPEC48MYWMR0TE",
        "reference_id": "123456789",
        "status": "action_required",
        "status_detail": "waiting_transfer",
        "amount": "1000.00",
        "payment_method": {
          "id": "pix",
          "type": "bank_transfer",
          "ticket_url": "https://www.mercadopago.com.br/sandbox/payments/00000000000/ticket?caller_id=77777777777&hash=34cb0d7c-81d9-478c-92a5-767d0kakjja",
          "qr_code": "00020126580014br.gov.bcb.pix0136b76aa9c2-2ec4-4110-954e-ebfe34f05b61520400005303986540510.005802BR5912TESTPVBWOSBE6009Sao Paulo62240520mpqrinter715936942186304C3C0",
          "qr_code_base64": "iVBORw0KGgoAAAANSUhEUgAABWQAAAVkAQAAAAB79i"
        }
      }
    ]
  },
  "processing_mode": "automatic",
  "marketplace": "NONE"
}
```

Entre los parámetros devueltos, tenemos los indicados en la tabla a continuación.

| Atributo                                          | Tipo          | Descripción                                                                                                                                                                                                                |
|---------------------------------------------------|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `transaction.payments.status`                        | _String_        | Retorna el status de la transacción. En este caso, devolverá `action_required` para indicar la necesidad de una acción para completar el procesamiento, es decir, hasta que se realice el pago del boleto.                          |
| `transaction.payments.status_detail`                 | _String_        | En este caso, el `status_detail` obtenido es aguardando (`waiting_payment`) que el usuario complete el proceso de pago del boleto en su banco.                                                                                |
| `transaction.payments.payment_method.ticket_url`     | _String_        |URL para el Pix renderizado, con código QR, Pix Copia e Cola e instrucciones de pago. Consulta más información en [Disponibilizar el pago]().                                                                                                       |
| `transaction.payments.payment_method.qr_code`      | _String_        | Presenta un código alfanumérico a utilizar en la configuración para la opción que permitirá copiar y pegar el código de pago con Pix. Consulta más información en [Disponibilizar el pago]().                                                                                                                      |
| `transaction.payments.payment_method.qr_code_base64`  | _String_        | Representación en `Base64` de la imagen del código QR que debe ser escaneado para finalizar el pago. Presenta el valor que se utilizará en la solicitud para mostrar el código QR para el pago con Pix. Consulta más información en [Disponibilizar el pago]().                                                                                                                                                          |

> WARNING
> 
> En caso de haber creado la order en modo manual, recuerda que el procesamiento del pago requiere de una etapa adicional, el llamado al endpoint :TagComponent{tag="API" text="Procesar order" href="/developers/es/reference/order/online/process-order/post"}.

:::
:::AccordionComponent{title="Disponibilizar el pago" pill="client-side"}

Después de crear la solicitud de pago con Pix, elige la forma en que el usuario podrá realizarlo, que puede ser a través de un **link o botón de pago** o de un **código QR renderizado**.

Selecciona la opción que mejor se adapte a tu modelo de negocio y sigue los pasos descritos a continuación.

### Agregar link o botón de pago

Al optar por **agregar un link o botón para el pago con Pix**, el comprador será dirigido a una nueva ventana que contiene toda la información para realizar el pago, como el **código QR** o **Pix Copia e Cola**, y sus respectivas instrucciones.

Para ofrecer esta opción, utiliza el atributo `ticket_url`, [devuelto en la respuesta de la solicitud](), como se presenta a continuación:

```html
<a href="https://www.mercadopago.com.br/payments/123456789/ticket?caller_id=123456&hash=123e4567-e89b-12d3-a456-426655440000" target="_blank">Pagar com Pix</a>
```

### Renderizar código QR

Es posible renderizar el código QR vigente, devuelto en la respuesta de la solicitud y que debe ser utilizado solo una vez, en la propia pantalla de pago. Además, también es posible agregar una opción para copiar y pegar el código de pago, lo que permitirá realizar la transacción a través de _Internet Banking_.

Para ello, sigue los pasos a continuación.

1. Agrega el `qr_code_base64`, [devuelto en la respuesta de la solicitud](), para mostrar el código QR.

```html
<img src={`data:image/jpeg;base64,${qr_code_base64}`}/>
```

2. Luego, agrega el `qr_code`, devuelto en la respuesta de la solicitud, para presentar la opción que permitirá copiar y pegar el código.

```html
<label for="copiar">Copiar Hash:</label>
<input type="text" id="copiar" value={qr_code} readonly/>
```

Al completar estos pasos, se mostrará al comprador el código QR renderizado junto con la opción de copiar y pegar su código de pago.

:::
:::AccordionComponent{title="Cancelar pago" pill="server-side"}

[TXTSNIPPET][/guides/snippets/api-orders/cancel-payment]

:::
