# Tarjetas

La integración de pagos con **tarjeta de crédito y/o débito** en ----[mlb]---- Checkout Transparente------------ ----[mla, mlm]---- Checkout API ------------ puede ser realizada de dos maneras. La **integración recomendada** se realiza por medio del **_Card Payment Brick_**, donde el Brick es el encargado de realizar la búsqueda por la información necesaria para realizar el pago. Pero, si deseas encargarte de definir cómo será buscada esta información, puedes realizar tu integración por medio de **_Core Methods_**. 

:::::TabsComponent

::::TabComponent{title="Card Payment Brick"}

En la integración por medio del _Card Payment Brick_, la biblioteca de `MercadoPago.js`, incluída en tu proyecto durante la [configuración del ambiente de desarrollo](/developers/es/docs/checkout-api/development-environment), se encarga de obtener la información requerida para la generación de un pago. Esto es, realiza una búsqueda de los tipos de documentos disponibles para el país correspondiente, así como, a medida que se introducen los datos de la tarjeta, de la información relativa al emisor y a las cuotas disponibles. 

Toda la información involucrada en el procesamiento de la transacción es almacenada en el _backend_, en conformidad con los padrones de [seguridad PCI](/developers/es/docs/security/pci). 

Con esto, la implementación del flujo es transparente para quien realiza la integración, tal como muestra el diagrama a continuación.

<pre class="mermaid">
  sequenceDiagram
      participant Navegador del comprador
      participant Front-end del integrador
      participant MercadoPago.js
      participant Back-end del integrador
      participant API Mercado Pago
      Navegador del comprador->>Front-end del integrador: 1. Pantalla del cobro<br>El Comprador accede a la pantalla de cobro.
      Front-end del integrador->>MercadoPago.js: 2. Inicialización SDK JS Mercado Pago<br> El front-end del integrador descarga e<br>inicializa la SDK JS de Mercado Pago 
      Front-end del integrador->>Navegador del comprador: 3. Formulario de pago<br>El front-end del integrador muestra el<br>formulário de pago
      Navegador del comprador->>Front-end del integrador: 4. Confirmación de pago<br>El comprador completa el formulário y<br>finaliza el pago.
      Front-end del integrador->>MercadoPago.js: 5. Creación del token<br>El front-end del integrador utiliza la SDK JS<br>para crear el token que contendrá los datos<br>de tarjeta de forma segura.
      Front-end del integrador->>Back-end del integrador: 6. Envío del token<br>El front-end del integrador envía el token de<br>tarjeta y los datos de pago a su back-end.
      Back-end del integrador->>API Mercado Pago: 7. Creación del pago<br>Desde el back-end, se llama a los servicios<br>de Mercado Pago para crear el pago.
      API Mercado Pago->>Navegador del comprador: 8. Resultado del pago<br>El front-end del integrador le muestra al<br>comprador el resultado de la operación.
      API Mercado Pago->>Back-end del integrador: 9. Actualizaciones de estado del pago<br>Mercado Pago puede enviar notificaciones<br>vía Webhook con actualizaciones del estado<br>del pago.
      Back-end del integrador->>Navegador del comprador: 10. Notificación al comprador<br>Si corresponde, se le avisa al comprador<br>sobre la actualización del pago.
</pre>

Además, el componente brinda la posibilidad de orientar al usuario con alertas de campos incompletos o posibles errores al rellenar los datos, optimizando el proceso de compra.

Para avanzar con la configuración de pagos con tarjeta de débito y/o crédito vía _Card Payment Brick_, sigue los pasos a continuación.

> NOTE
>
> Recuerda que, antes de configurar los medios de pago que deseas ofrecer, es necesario elegir el modo en el que serán procesadas las transacciones. Para más información, accede a la sección [ Modelo de integración](/developers/es/docs/checkout-api/integration-model).

:::AccordionComponent{title="Añadir formulario de pago" pill="server-side"}

Para poder recibir pagos, es necesario que añadas en el *frontend* un formulario que permita capturar los datos del pagador de manera segura y permita la criptografía de la tarjeta. Esta inclusión debe realizarse por medio del _Card Payment Brick_, que  ofrece un formulario optimizado con temas variados, e incluye los campos necesarios para pagos con tarjetas. 

---
live_demo_code_action:
 - title: Prueba nuestro Brick
 - description: Construye y comprueba la experiencia visual en tiempo real. Cuando esté todo listo, descarga o copia el código generado para agregarlo a tu sitio web o compartirlo con un desarrollador.
 - link: /developers/es/live-demo/card-payment-brick
 - image: /checkout-bricks/live-demo-card-brick.png
 - linkName: Demo
 - buttonDescription: Construir tu Card Payment Brick
---

Para añadir el _Card Payment Brick_, realiza primero su **configuración e inicialización** desde el *frontend*, como muestran los ejemplos a continuación.

[[[
```javascript
const renderCardPaymentBrick = async (bricksBuilder) => {
  const settings = {
    initialization: {
      amount: 100.99, // valor total a ser pago
    },
    callbacks: {
      onReady: () => {
        /*
         Callback llamado cuando el Brick esté listo.
         Aquí pueden ocultarse loadings del site, por ejemplo.
       */
      },
      onSubmit: (formData, additionalData) => {
        // callback llamado al hacer clic en el botón de envío de datos
        return new Promise((resolve, reject) => {
          const submitData = {
            type: "online",
            total_amount: String(formData.transaction_amount), // debe ser un string con formato 00.00
            external_reference: "ext_ref_1234", // identificador del origen de la transacción
            processing_mode: "automatic",
            transactions: {
              payments: [
                {
                  amount: String(formData.transaction_amount), // debe ser un string con formato 00.00 
                  payment_method: {
                    id: formData.payment_method_id,
                    type: additionalData.paymentTypeId,
                    token: formData.token,
                    installments: formData.installments,
                  },
                },
              ],
            },
            payer: {
              email: formData.payer.email,
              identification: formData.payer.identification,
            },
          };

          fetch("/process_order", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(submitData),
          })
            .then((response) => response.json())
            .then((response) => {
              // recibir el resultado del pago
              resolve();
            })
            .catch((error) => {
              // manejo de la respuesta de error al intentar crear el pago 
              reject();
            });
        });
      },
      onError: (error) => {
        // callback llamado para todos los casos de error del Brick 
        console.error(error);
      },
    },
  };
  window.cardPaymentBrickController = await bricksBuilder.create(
    "cardPayment",
    "cardPaymentBrick_container",
    settings
  );
};
renderCardPaymentBrick(bricksBuilder);
```
``` react-jsx
const initialization = {
  amount: 100.99,
};

const onSubmit = async (formData) => {
  // callback llamado al hacer clic en el botón de envío de datos 
  return new Promise((resolve, reject) => {
    const submitData = {
        type: "online",
        total_amount: String(formData.transaction_amount), // debe ser un string con formato 00.00
        external_reference: "ext_ref_1234", // identificador del origen de la transacción. 
        processing_mode: "automatic",
        transactions: {
          payments: [
            {
              amount: String(formData.transaction_amount), // debe ser un string con formato 00.00
              payment_method: {
                id: formData.payment_method_id,
                type: "credit_card", // debe ser “credit_card” o “debit_card” ,
                token: formData.token,
                installments: formData.installments,
              },
            },
          ],
        },
        payer: {
          email: formData.payer.email,
          identification: formData.payer.identification,
        },
      };

    fetch("/process_order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submitData),
    })
      .then((response) => response.json())
      .then((response) => {
        // recibir el resultado del pago
        resolve();
      })
      .catch((error) => {
        // Manejo de la respuesta de error al intentar crear el pago 
        reject();
      });
  });
};

const onError = async (error) => {
  // callback llamado para todos los casos de error del Brick
  console.log(error);
};

const onReady = async () => {
  /*
        Callback llamado cuando el Brick esté listo.
         Aquí pueden ocultarse loadings del site, por ejemplo.
      */
};
```
]]]

El _callback_ `onSubmit` del Brick obtendrá los datos mínimos necesarios para la creación de un pago. Entre esos datos se encuentra el `CardToken`, que representa de forma segura los datos de la tarjeta. Este _token_ solo puede ser usado una vez y expira dentro de los 7 días de su creación. 

Además de la información mínima, recomendamos incluir detalles adicionales o que puedan facilitar el reconocimiento de la compra por parte del comprador, y aumentar así la tasa de aprobación de pagos. Consulta nuestra [Referencia de API](/developers/es/reference/order/online-payments/create/post) para conocer en detalle todos los parámetros a ser enviados al crear un pago, incluyendo aquellos que puedan mejorar tu aprobación, y verifica cuáles quieres incluir en esta etapa. 

Luego, agrega los campos relevantes para el objeto enviado, que son retornados en la respuesta del _callback_.

> WARNING
>
> Siempre que el usuario salga de la pantalla donde se exhibe el Brick, es necesario destruir la instancia actual con el comando `window.cardPaymentBrickController.unmount()`. Al volver a ingresar, una nueva instancia deberá ser generada.

Finalmente, realiza el **renderizado** del Brick utilizando alguno de los ejemplos a continuación.

[[[
```html
<div id="cardPaymentBrick_container"></div> // El id debe corresponder al valor enviado dentro del método create() en la etapa anterior
```
``` react-jsx
import { CardPayment } from '@mercadopago/sdk-react';

<CardPayment
   initialization={initialization}
   onSubmit={onSubmit}
   onReady={onReady}
   onError={onError}
/>
```
]]]


Como resultado, la renderización del Brick se verá similar a la imagen debajo.

----[mlm]----
![cardform](checkout-bricks/card-form-mlm-es.png)

------------
----[mla, mlb]----
![cardform](checkout-bricks/card-form-es.png)

------------ 

Para avanzar a la etapa de envío del pago, será necesario que tu _backend_ pueda recibir la información del formulario creado, junto con el _token_ resultante de la criptografía de la tarjeta. Para eso, recomendamos disponibilizar un endpoint */Process_order* que acoja los datos recolectados por el Brick después de realizar la acción _submit_.

----[mlb]----
> NOTE
>
> Para configurar las cuotas exhibidas en el _frontend_, consulta la sección [Configurar cuotas](/developers/es/docs/checkout-bricks/card-payment-brick/advanced-features/configure-installments) del _Card Payment Brick_. En caso de querer configurar cuotas sin intereses, accede a la [documentación de Soporte](/developers/pt/support/oferecer-parcelas-sem-acrescimo-para-compradores_454).

------------
----[mla]----
> NOTE
>
> Para configurar las cuotas exhibidas en el _frontend_, consulta la sección [Configurar cuotas](/developers/es/docs/checkout-bricks/card-payment-brick/advanced-features/configure-installments) del _Card Payment Brick_. En caso de querer configurar cuotas sin intereses, accede a la [documentación de Soporte](/developers/es/support/cuotas-sin-interes_3299).

------------
----[mlm]----
> NOTE
>
> Para configurar los meses exhibidas en el _frontend_, consulta la sección [Configurar meses](/developers/es/docs/checkout-bricks/card-payment-brick/advanced-features/configure-installments) del _Card Payment Brick_. En caso de querer configurar meses sin intereses, accede a la [documentación de Soporte](/developers/es/support/mensualidades-sin-intereses_2255).

------------

:::
:::AccordionComponent{title="Enviar pago" pill="server-side"}

El envío del pago debe ser realizado mediante la creación de una order que contenga transacciones de pago asociadas. 

La definición del modo de procesamiento se realizará al momento de crear la order, mediante el parámetro `processing_mode`. Su valor deberá ser `automatic`, para procesamientos automáticos, o `manual`, para procesar la order manualmente.

Para eso, envía un **POST** con tu :toolTipComponent[Access Token de pruebas]{content="Clave privada de pruebas de la aplicación creada en Mercado Pago, que es utilizada en el backend. Puedes acceder a ella a través de **Tus integraciones > Detalles de aplicación > Pruebas > Credenciales de prueba**."} y los parámetros requeridos al endpoint :TagComponent{tag="API" text="/v1/orders" href="/developers/es/reference/order/online-payments/create/post"} y ejecuta la requisición.

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

Consulta en la tabla a continuación las descripciones de los parámetros que son obligatorios en la solicitud y aquellos que, aunque son opcionales, tienen alguna particularidad importante que debe destacarse.

| Atributo | Tipo | Descripción | Requerido/Opcional |
|---|---|---|---|
| `Authorization` | _Header_ | Hace referencia a tu clave privada, o Access Token. Utiliza el :toolTipComponent[Access Token de pruebas]{content="Clave privada de pruebas de la aplicación creada en Mercado Pago, que es utilizada en el backend. Puedes acceder a ella a través de **Tus integraciones > Detalles de aplicación > Pruebas > Credenciales de prueba**."} en ambientes de desarrollo, y el :toolTipComponent[Access Token productivo]{content="Clave privada de la aplicación creada en Mercado Pago, que es utilizada en el backend al momento de recibir pagos reales. Puedes acceder a ella a través de **Tus integraciones > Detalles de aplicación > Producción > Credenciales de producción**."} para pagos reales. | Requerido |
| `X-Idempotency-Key` | _Header_ | Llave de idempotencia. Esta llave garantiza que cada solicitud sea procesada una única vez, evitando duplicidades. Utiliza un valor exclusivo en el encabezado de tu solicitud, como un UUID V4 o *strings* aleatorias. | Requerido |
| `processing_mode` | _Body. String_ | Modo de procesamiento de la order. Los valores posibles son: <br><br>`automatic`, para crear y procesar la order en modo automático. <br><br>`manual`, para crear la order y procesarla con posterioridad. <br><br> Para más información, accede a [Modelo de integración](/developers/es/docs/checkout-api/integration-model)| Requerido |
| `total_amount` | _Body. String_ | Monto total de la transacción. | Requerido |
| `transaction.payments.payment_method.id` | _Body. String_ | Identificador del método de pago. En este caso, es la **bandera de cada tarjeta**. Puedes consultar la lista completa de identificadores disponibles enviando una requisición al endpoint [Obtener medios de pago](/developers/es/reference/payment_methods/_payment_methods/get). | Requerido |
| `transaction.payments.payment_method.type` | _Body. String_ | Tipo de método de pago. Para pagos con tarjetas de crédito, debe ser `credit_card`, y para pagos con tarjeta de débito, debe ser `debit_card`. | Requerido. |

> SUCCESS_MESSAGE
>
> Para conocer en detalle todos los parámetros a ser enviados en esta requisición, consulta nuestra [Referencia de API](/developers/es/reference/order/online-payments/create/post). Adicionalmente, si recibes un error al enviar el pago, puedes consultar nuestro [listado de errores](/developers/es/docs/checkout-api/payment-management/integration-errors).

En caso de éxito, la respuesta se verá como el ejemplo a continuación.

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

> WARNING
>
> En caso de haber creado la order en modo manual, recuerda que el procesamiento del pago requiere de una etapa adicional, el llamado a :TagComponent{tag="API" text="Procesar order" href="/developers/es/reference/order/online/process-order/post"}. Adicionalmente, podrás realizar una reserva y captura de valores. Dirígete a la sección [Reservar, capturar y cancelar fondos](/developers/es/docs/checkout-api/payment-management/reserve-capture-cancel) para más información.

Una vez creada la order y el pago, puedes consultar los estados posibles dirigiéndote a las secciones [Estado de la order](/developers/es/docs/checkout-api/payment-management/status/order-status) y [Estado de la transacción](/developers/es/docs/checkout-api/payment-management/status/transaction-status), respectivamente.

:::

::::
::::TabComponent{title="Core Methods"}

En la integración vía _Core Methods_, el responsable de la integración se encarga de definir cómo se buscará la información necesaria para completar el pago, incluyendo cuándo buscar información sobre el tipo de documento, además de aquella relativa a la tarjeta (emisor y cuotas). De esta forma, tiene total flexibilidad para construir la experiencia del flujo de pago, a diferencia de la integración a través del _Card Payment Brick_, donde la búsqueda de la información se realiza de forma automática.

Consulta el diagrama que ilustra el proceso de pago con tarjeta a través de los _Core Methods_.

<pre class="mermaid">
  sequenceDiagram
      participant Cliente as Navegador del cliente
      participant Frontend as Front-end del vendedor
      participant MPjs as MercadoPago.js
      participant Backend as Back-end del vendedor
      participant API as API Mercado Pago

      Cliente->>Frontend: 1. Ingresar al sitio de pago
      Frontend->>MPjs: 1.2 new MercadoPago(PUBLIC_KEY)
      Frontend->>MPjs: 1.3 getIdentificationTypes()
      MPjs->>Frontend: 1.4 identificationTypes
      Frontend->>Cliente: 1.5 Mostrar formulario de pago

      Cliente->>Frontend: 2.1 Ingresar los primeros 6 dígitos de la tarjeta
      Frontend->>MPjs: 2.2 getPaymentMethods(OPTIONS)
      MPjs->>Frontend: 2.3 paymentMethods
      Frontend->>MPjs: 2.4 getIssuers(OPTIONS)
      MPjs->>Frontend: 2.5 issuers
      Frontend->>Cliente: 2.6 Mostrar los emisores disponibles
      Frontend->>MPjs: 2.6 getInstallments(OPTIONS)
      MPjs->>Frontend: 2.7 installments
      Frontend->>Cliente: 2.8 Mostrar medio de pago y cuotas disponibles

      Cliente->>Frontend: 3.1 Enviar el formulario completo
      Frontend->>MPjs: 3.2 createCardToken(OPTIONS)
      MPjs->>Frontend: 3.3 cardToken
      Frontend->>Backend: 3.4 POST/payment
      Backend->>API: 3.5 POST/v1/payments
      API->>Backend: 3.6 Estado del pago
      Backend->>Frontend: 3.7 Estado del pago
      Frontend->>Cliente: 3.8 Mostrar resultado
</pre>

:::AccordionComponent{title="Añadir formulario de pago" pill="client-side"}

La captura de los datos de la tarjeta (número de tarjeta, código de seguridad y fecha de expiración) se realiza a través de un formulario de pago que permite obtener y validar la información necesaria para procesar el pago.

Para obtener estos datos y procesar los pagos, inserta el siguiente `HTML` directamente en tu proyecto.

----[mla, mlb]----
[[[
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
  <form id="form-checkout" action="/process_payment" method="POST">
    <div id="form-checkout__cardNumber" class="container"></div>
    <div id="form-checkout__expirationDate" class="container"></div>
    <div id="form-checkout__securityCode" class="container"></div>
    <input type="text" id="form-checkout__cardholderName" placeholder="Titular de la tarjeta" />
    <select id="form-checkout__issuer" name="issuer">
      <option value="" disabled selected>Banco emisor</option>
    </select>
    <select id="form-checkout__installments" name="installments">
      <option value="" disabled selected>Cuotas</option>
    </select>
    <select id="form-checkout__identificationType" name="identificationType">
      <option value="" disabled selected>Tipo de documento</option>
    </select>
    <input type="text" id="form-checkout__identificationNumber" name="identificationNumber" placeholder="Número do documento" />
    <input type="email" id="form-checkout__email" name="email" placeholder="E-mail" />

    <input id="token" name="token" type="hidden">
    <input id="paymentMethodId" name="paymentMethodId" type="hidden">
    <input id="transactionAmount" name="transactionAmount" type="hidden" value="100">
    <input id="description" name="description" type="hidden" value="Nome do Produto">

    <button type="submit" id="form-checkout__submit">Pagar</button>
  </form>
```
]]]

------------
----[mlm]----
[[[
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
  <form id="form-checkout" action="/process_payment" method="POST">
    <div id="form-checkout__cardNumber" class="container"></div>
    <div id="form-checkout__expirationDate" class="container"></div>
    <div id="form-checkout__securityCode" class="container"></div>
    <input type="text" id="form-checkout__cardholderName" placeholder="Titular de la tarjeta" />
    <select id="form-checkout__issuer" name="issuer">
      <option value="" disabled selected>Banco emisor</option>
    </select>
    <select id="form-checkout__installments" name="installments">
      <option value="" disabled selected>Cuotas</option>
    </select>
    <input type="email" id="form-checkout__email" name="email" placeholder="E-mail" />

    <input id="token" name="token" type="hidden">
    <input id="paymentMethodId" name="paymentMethodId" type="hidden">
    <input id="transactionAmount" name="transactionAmount" type="hidden" value="100">
    <input id="description" name="description" type="hidden" value="Nome do Produto">

    <button type="submit" id="form-checkout__submit">Pagar</button>
  </form>
```
]]]

------------

:::
:::AccordionComponent{title="Inicializar campos de tarjeta" pill="client-side"}

Después de añadir el formulario de pago, es necesario inicializar los campos de la tarjeta (número de tarjeta, fecha de expiración y código de seguridad) que deberán completarse al iniciar el flujo de pagos.

Una vez finalizada la inicialización de los campos, los &lt;div&gt; contendrán los iframes con los inputs donde se insertarán los datos PCI.

[[[
```javascript

    const cardNumberElement = mp.fields.create('cardNumber', {
      placeholder: "Número de la tarjeta"
    }).mount('form-checkout__cardNumber');
    const expirationDateElement = mp.fields.create('expirationDate', {
      placeholder: "MM/YY",
    }).mount('form-checkout__expirationDate');
    const securityCodeElement = mp.fields.create('securityCode', {
      placeholder: "Código de seguridad"
    }).mount('form-checkout__securityCode');
```
]]]

:::
:::AccordionComponent{title="Obtener tipos de documento" pill="client-side"}

Después de configurar la credencial, añadir el formulario de pago y inicializar los campos de tarjeta, es necesario obtener los tipos de documentos que se utilizarán para rellenar el formulario de pago.

Al incluir el elemento del tipo `select` con el id: `form-checkout__identificationType`  que se encuentra en el formulario, será posible completar automáticamente las opciones disponibles al llamar la siguiente función.

[[[
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
]]]

:::
:::AccordionComponent{title="Obtener métodos de pago de la tarjeta" pill="client-side"}

En esta etapa se validan los datos de los compradores cuando rellenan los campos necesarios para realizar el pago. Para poder identificar el método de pago utilizado por el comprador, introduce el siguiente código directamente en tu proyecto. 

[[[
```javascript

    const paymentMethodElement = document.getElementById('paymentMethodId');
    const issuerElement = document.getElementById('form-checkout__issuer');
    const installmentsElement = document.getElementById('form-checkout__installments');

    const issuerPlaceholder = "Banco emisor";
    const installmentsPlaceholder = "Cuotas";

    let currentBin;
    cardNumberElement.on('binChange', async (data) => {
      const { bin } = data;
      try {
        if (!bin && paymentMethodElement.value) {
          clearSelectsAndSetPlaceholders();
          paymentMethodElement.value = "";
        }

        if (bin && bin !== currentBin) {
          const { results } = await mp.getPaymentMethods({ bin });
          const paymentMethod = results[0];

          paymentMethodElement.value = paymentMethod.id;
          updatePCIFieldsSettings(paymentMethod);
          updateIssuer(paymentMethod, bin);
          updateInstallments(paymentMethod, bin);
        }

        currentBin = bin;
      } catch (e) {
        console.error('error getting payment methods: ', e)
      }
    });

    function clearSelectsAndSetPlaceholders() {
      clearHTMLSelectChildrenFrom(issuerElement);
      createSelectElementPlaceholder(issuerElement, issuerPlaceholder);

      clearHTMLSelectChildrenFrom(installmentsElement);
      createSelectElementPlaceholder(installmentsElement, installmentsPlaceholder);
    }

    function clearHTMLSelectChildrenFrom(element) {
      const currOptions = [...element.children];
      currOptions.forEach(child => child.remove());
    }

    function createSelectElementPlaceholder(element, placeholder) {
      const optionElement = document.createElement('option');
      optionElement.textContent = placeholder;
      optionElement.setAttribute('selected', "");
      optionElement.setAttribute('disabled', "");

      element.appendChild(optionElement);
    }

    // Este paso mejora las validaciones de cardNumber y securityCode
    function updatePCIFieldsSettings(paymentMethod) {
      const { settings } = paymentMethod;

      const cardNumberSettings = settings[0].card_number;
      cardNumberElement.update({
        settings: cardNumberSettings
      });

      const securityCodeSettings = settings[0].security_code;
      securityCodeElement.update({
        settings: securityCodeSettings
      });
    }
```
]]]
:::
:::AccordionComponent{title="Obtener banco emisor" pill="client-side"}

Al rellenar el formulario de pago, es posible identificar el banco emisor de la tarjeta, evitando conflictos de procesamiento de datos entre los diferentes emisores. Además, a partir de esta identificación se exhiben las opciones de pago en cuotas.

El banco emisor se obtiene a través del parámetro `issuer_id`. Para obtenerlo, utiliza el Javascript que se indica a continuación.

[[[
```javascript

    async function updateIssuer(paymentMethod, bin) {
      const { additional_info_needed, issuer } = paymentMethod;
      let issuerOptions = [issuer];

      if (additional_info_needed.includes('issuer_id')) {
        issuerOptions = await getIssuers(paymentMethod, bin);
      }

      createSelectOptions(issuerElement, issuerOptions);
    }

    async function getIssuers(paymentMethod, bin) {
      try {
        const { id: paymentMethodId } = paymentMethod;
        return await mp.getIssuers({ paymentMethodId, bin });
      } catch (e) {
        console.error('error getting issuers: ', e)
      }
    };
```
]]]

:::
:::AccordionComponent{title="Obtener cantidad de pagos" pill="client-side"}

Uno de los campos obligatorios que componen el formulario de pago es la----[mla]---- **cantidad de cuotas**------------ ----[mlm]----**cantidad de meses**------------. Para activarlo y mostrar las cuotas disponibles a la hora de efectuar el pago, utiliza la siguiente función. 

[[[
```javascript

    async function updateInstallments(paymentMethod, bin) {
      try {
        const installments = await mp.getInstallments({
          amount: document.getElementById('transactionAmount').value,
          bin,
          paymentTypeId: 'credit_card'
        });
        const installmentOptions = installments[0].payer_costs;
        const installmentOptionsKeys = { label: 'recommended_message', value: 'installments' };
        createSelectOptions(installmentsElement, installmentOptions, installmentOptionsKeys);
      } catch (error) {
        console.error('error getting installments: ', e)
      }
    }
```
]]]

----[mlb]----
> NOTE
>
> En caso de querer configurar cuotas sin intereses, accede a la [documentación de Soporte](/developers/pt/support/oferecer-parcelas-sem-acrescimo-para-compradores_454).

------------
----[mla]----
> NOTE
>
> En caso de querer configurar cuotas sin intereses, accede a la [documentación de Soporte](/developers/es/support/cuotas-sin-interes_3299).

------------
----[mlm]----
> NOTE
>
> En caso de querer configurar meses sin intereses, accede a la [documentación de Soporte](/developers/es/support/mensualidades-sin-intereses_2255).

------------

:::
:::AccordionComponent{title="Crear token de la tarjeta" pill="client-side"}

El _token_ de la tarjeta se crea a partir de la información de la misma, lo que aumenta la seguridad durante el flujo de pago. Además, después de que el _token_ se utiliza en una compra determinada, este es descartado y se debe crear uno nuevo para futuras compras. Para crear el _token_ de la tarjeta, utiliza la siguiente función.

> NOTE
>
> Importante
>
> El método `createCardToken` devuelve un _token_ con la representación segura de los datos de la tarjeta. Es necesario tomar el ID del _token_ de la respuesta y guardarlo en una input oculto denominado`token` para enviar posteriormente el formulario a los servidores. Además, ten en cuenta que el **_token_ tiene una validez de 7 días** y solo se **puede usar una vez**.

[[[
```javascript

    const formElement = document.getElementById('form-checkout');
    formElement.addEventListener('submit', createCardToken);

    async function createCardToken(event) {
      try {
        const tokenElement = document.getElementById('token');
        if (!tokenElement.value) {
          event.preventDefault();
          const token = await mp.fields.createCardToken({
            cardholderName: document.getElementById('form-checkout__cardholderName').value,
            identificationType: document.getElementById('form-checkout__identificationType').value,
            identificationNumber: document.getElementById('form-checkout__identificationNumber').value,
          });
          tokenElement.value = token.id;
          formElement.requestSubmit();
        }
      } catch (e) {
        console.error('error creating card token: ', e)
      }
    }
```
]]]

:::

:::AccordionComponent{title="Enviar pago" pill="server-side"}

El envío del pago debe ser realizado mediante la creación de una order que contenga transacciones de pago asociadas. 

La definición del modo de procesamiento se realizará al momento de crear la order, mediante el parámetro `processing_mode`. Su valor deberá ser `automatic`, para procesamientos automáticos, o `manual`, para procesar la order manualmente.

Para eso, envía un **POST** con tu :toolTipComponent[Access Token de pruebas]{content="Clave privada de pruebas de la aplicación creada en Mercado Pago, que es utilizada en el backend. Puedes acceder a ella a través de **Tus integraciones > Detalles de aplicación > Pruebas > Credenciales de prueba**."} y los parámetros requeridos al endpoint :TagComponent{tag="API" text="/v1/orders" href="/developers/es/reference/order/online-payments/create/post"} y ejecuta la requisición.

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

Consulta en la tabla a continuación las descripciones de los parámetros que son obligatorios en la solicitud y aquellos que, aunque son opcionales, tienen alguna particularidad importante que debe destacarse.

| Atributo | Tipo | Descripción | Requerido/Opcional |
|---|---|---|---|
| `Authorization` | _Header_ | Hace referencia a tu clave privada, o Access Token. Utiliza el :toolTipComponent[Access Token de pruebas]{content="Clave privada de pruebas de la aplicación creada en Mercado Pago, que es utilizada en el backend. Puedes acceder a ella a través de **Tus integraciones > Detalles de aplicación > Pruebas > Credenciales de prueba**."} en ambientes de desarrollo, y el :toolTipComponent[Access Token productivo]{content="Clave privada de la aplicación creada en Mercado Pago, que es utilizada en el backend al momento de recibir pagos reales. Puedes acceder a ella a través de **Tus integraciones > Detalles de aplicación > Producción > Credenciales de producción**."} para pagos reales. | Requerido |
| `X-Idempotency-Key` | _Header_ | Llave de idempotencia. Esta llave garantiza que cada solicitud sea procesada una única vez, evitando duplicidades. Utiliza un valor exclusivo en el encabezado de tu solicitud, como un UUID V4 o *strings* aleatorias. | Requerido |
| `processing_mode` | _Body. String_ | Modo de procesamiento de la order. Los valores posibles son: <br><br> `automatic`, para crear y procesar la order en modo automático. <br><br> `manual`, para crear la order y procesarla con posterioridad. <br><br> Para más información, accede a [Modelo de integración](/developers/es/docs/checkout-api/integration-model)| Requerido |
| `total_amount` | _Body. String_ | Monto total de la transacción. | Requerido |
| `transaction.payments.payment_method.id` | _Body. String_ | Identificador del método de pago. En este caso, es la **bandera de cada tarjeta**. Puedes consultar la lista completa de identificadores disponibles enviando una requisición al endpoint [Obtener medios de pago](/developers/es/reference/payment_methods/_payment_methods/get). | Requerido |
| `transaction.payments.payment_method.type` | _Body. String_ | Tipo de método de pago. Para pagos con tarjetas de crédito, debe ser `credit_card`, y para pagos con tarjeta de débito, debe ser `debit_card`. | Requerido. |

> SUCCESS_MESSAGE
>
> Para conocer en detalle todos los parámetros a ser enviados en esta requisición, consulta nuestra [Referencia de API](/developers/es/reference/order/online-payments/create/post). Adicionalmente, si recibes un error al enviar el pago, puedes consultar nuestro [listado de errores](/developers/es/docs/checkout-api/payment-management/integration-errors).

En caso de éxito, la respuesta se verá como el ejemplo a continuación.

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

> WARNING
>
> En caso de haber creado la order en modo manual, recuerda que el procesamiento del pago requiere de una etapa adicional, el llamado a :TagComponent{tag="API" text="Procesar order" href="/developers/es/reference/order/online/process-order/post"}. Adicionalmente, podrás realizar una reserva y captura de valores. Dirígete a la sección [Reservar, capturar y cancelar fondos](/developers/es/docs/checkout-api/payment-management/reserve-capture-cancel) para más información.

Una vez creada la order y el pago, puedes consultar los estados posibles dirigiéndote a las secciones [Estado de la order](/developers/es/docs/checkout-api/payment-management/status/order-status) y [Estado de la transacción](/developers/es/docs/checkout-api/payment-management/status/transaction-status), respectivamente.

:::

::::

:::::