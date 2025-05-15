# Pagos rápidos con Mercado Pago

----[mlb]---- Checkout Transparente ------------ ----[mla, mlm]---- Checkout API ------------ de Mercado Pago ahora ofrece **Pagos rápidos con Mercado Pago**. Con esta solución, es posible brindar a los compradores una experiencia que agiliza el proceso de pago utilizando los datos guardados en nuestro ecosistema.

Con la autorización del comprador, facilitaremos los métodos de pago disponibles en Mercado Pago o Mercado Libre para ofrecerlos directamente en el checkout de la tienda, creando una experiencia más rápida, segura y sin fricciones para el comprador.

----[mlb]----  
![Experience from the frontend](/images/api-orders/supertoken-exp-2-mlb.png)
------------

----[mla]---- 

![Experience from the frontend](/images/api-orders/supertoken-exp-2-mla.png)
------------

----[mlm]---- 

![Experience from the frontend](/images/api-orders/supertoken-exp-2-mlm.png)
------------

> RED_MESSAGE
>
> Actualmente, es posible ofrecer esta modalidad de pago mediante integraciones web mobile y nativas. **No es posible hacerlo a través de integraciones web desktop**.

## Compatibilidad de la solución
Pagos rápidos con Mercado Pago utiliza una tecnología para _browsers_ llamada _Payment Request API_, que es soportada en circunstancias que dependen del tipo de integración. Mira a continuación los detalles.

:::::TabsComponent

::::TabComponent{title="Integración web mobile"}

### Navegadores compatibles
Para que el comprador autorice el uso de los medios de pago disponibles en su cuenta de Mercado Pago deberá ser redirigido. Esto puede ser hecho con los siguientes **navegadores compatibles**: 
* Google Chrome  
* Chrome Mobile  
* Microsoft Edge  
* Samsung Internet  

> WARNING
>
>  Si el usuario no utiliza un navegador compatible, esta modalidad de pago no será presentada y podrá seguir con el flujo de compra normalmente. 

### Protocolo HTTPS para entornos web
La API responsable de crear la interfaz entre el navegador donde se realiza la compra y las aplicaciones de Mercado Pago solo funciona en dominios con protocolo HTTPS. Si no cuentas con uno, puedes usar [herramientas de terceros](https://github.com/localtunnel/localtunnel) para obtenerlo.

::::
::::TabComponent{title="Integración nativa"}

### Sistema operativo compatible
El proceso de redirección del comprador para que autorice el uso de los medios de pago disponibles en su cuenta de Mercado Pago debe realizarse mediante **Custom Tabs**, que permiten la apertura de páginas web en un navegador nativo incorporado en la aplicación. Por esto, el único sistema operativo compatible es **Android**.

> WARNING
>
>  En caso de que el sistema operativo del usuario no sea compatible, esta modalidad de pago no será presentada y podrá continuar con el flujo de compra normalmente. 

Si necesitas implementar Custom Tabs en tu proyecto comienza por instalar la siguiente dependencia en el archivo `build.gradle`.

```Android
dependencies {
    ...
    implementation "androidx.browser:browser:1.4.0"
}
```

Luego instancia las Custom Tabs siguiendo los ejemplos a continuación, que puedes colocar al abrir una actividad o al ejecutar una acción en ella.

[[[
```Java

String url = "URL-CHECKOUT";
CustomTabsIntent intent = new CustomTabsIntent.Builder()
       .build();
intent.launchUrl(MainActivity.this, Uri.parse(url));

```
```Kotlin

val url = "URL-CHECKOUT"
    val intent = CustomTabsIntent.Builder()
        .build()
    intent.launchUrl(this@MainActivity, Uri.parse(url))
```
]]]

### Protocolo HTTPS para entornos web
La API responsable de crear la interfaz entre el navegador donde se realiza la compra y las aplicaciones de Mercado Pago solo funciona en dominios con protocolo HTTPS. Si no cuentas con uno, puedes usar [herramientas de terceros](https://github.com/localtunnel/localtunnel) para obtenerlo.

::::
:::::

Si ya has [configurado tu ambiente de desarrollo](/developers/es/docs/checkout-api-v2/development-environment), puedes continuar con tu integración siguiendo las etapas descritas a continuación. 

## Etapas de integración
La integración de Pagos Rápidos con Mercado Pago tiene implementaciones server-side y client-side. El diagrama a continuación describe las principales llamadas del flujo de integración.

<pre class="mermaid">
    sequenceDiagram
        participant Comprador
        participant Sitio del vendedor
        participant SDK JS
        participant Mercado Pago APIs
        participant App Mercado Pago / Mercado Libre
        participant Order API

        Comprador->>Sitio del vendedor: 1. Accede a la página de checkout
        Sitio del vendedor->>SDK JS: 2. Inicializa
        SDK JS-->>Sitio del vendedor: 3. Retorna el módulo MercadoPago
        Sitio del vendedor->>SDK JS: 4. Inicializa la clase Authentication
        SDK JS->>Mercado Pago APIs: 5. Verifica compatibilidad del navegador y del sistema
        SDK JS->>Comprador: 6. Inicia el flujo de autenticación
        SDK JS->>Comprador: 7. Llama al método show

        Comprador->>SDK JS: 8. Carga el módulo de consentimiento
        Comprador->>SDK JS: 9. Consiente el uso compartido de datos

        SDK JS->>App Mercado Pago / Mercado Libre: 10. Usuario tiene instalada la app
        App Mercado Pago / Mercado Libre->>App Mercado Pago / Mercado Libre: 11. Autoriza el usuario (huella/rostro)
        App Mercado Pago / Mercado Libre->>SDK JS: 12. Retorna la clave de autenticación
        SDK JS->>Sitio del vendedor: 13. Retorna la clave de autenticación

        Sitio del vendedor->>SDK JS: 14. Solicita los medios de pago
        SDK JS->>Mercado Pago APIs: 15. Solicita los medios de pago
        Mercado Pago APIs-->>SDK JS: 16. Retorna los medios de pago
        SDK JS-->>Sitio del vendedor: 17. Retorna los medios de pago
        Sitio del vendedor->>Comprador: 18. Muestra los medios de pago

        Comprador->>Sitio del vendedor: 19. Selecciona el medio de pago
        Sitio del vendedor->>Order API: 20. Procesa el pedido de pago
        Order API-->>Sitio del vendedor: 21. Retorna la información de la transacción
</pre>

Sigue los pasos a continuación para realizar esta integración correctamente.

:::AccordionComponent{title="1. Inicializar el flujo" pill="client-side"}

Recomendamos iniciar el flujo en la pantalla de selcción de medios de pago o de selección de tarjetas por parte del comprador, incorporando la siguiente función en tu proyecto y cuidando de incluir el e-mail del comprador y el monto del pago en los campos  `<AMOUNT>` e `<EMAIL>`, respectivamente.

```JavaScript
async function initializeAuthenticator(amount, payerEmail) {

  try {
    // Starts the authentication flow using the payer's email and amount
    const authenticator = await mp.authenticator(amount, payerEmail);
    return authenticator;
  } catch (error) {
    console.log("Error cause:", error?.errorCode);
  }
}

// Calling the function
const authenticator = await initializeAuthenticator("<AMOUNT>", "<EMAIL>");

```
Esto permitirá validar si el sistema del usuario es apto para realizar la autenticación con Mercado Pago o Mercado Libre, y así inicializar la clase `Authenticator`. 

En caso de que el usuario esté impedido de continuar con el flujo, recibirás un error. Consulta nuestra nuestro [listado de posibles errores](/developers/es/docs/checkout-api-v2/payment-integration/fast-payments#:~:text=4.%20Procesar%20pago-,Posibles,-errores) para conocer los detalles.


:::
:::AccordionComponent{title="2. Obtener token de autenticación de cuenta" pill="client-side"}

Una vez inicializada la clase `Authenticator` es necesario hacer una solicitud para obtener el _token_ de autorización. Este _token_ es requerido para acceder a los medios de pago disponibles en la cuenta de Mercado Pago del comprador.

Mediante el método `.show` es posible elegir cómo quieres que se obtenga ese _token_: mediante la apertura de un modal de confirmación, u omiténdolo. Elige la opción que prefieras y utiliza el código asignado en cada caso como referencia.

#### Obtener token mediante modal de confirmación

Al llamar al método `.show` tal como muestra el bloque de código a continuación, se producirá la apertura de un _bottom sheet_ solicitando la confirmación del usuario. Cuando esto suceda, será redireccionado a la aplicación de Mercado Pago o Mercado Libre. Allí podrá autorizar el pago de forma segura, utilizando métodos como la lectura de huellas dactilares o el reconocimiento facial, dependiendo de lo que su dispositivo soporte.

```JavaScript
async function getAuthorizationToken() {

  try {
    const token = await authenticator.show();
    return token;
  } catch (error) {
    console.error("Error while obtaining the token:", error?.errorCode);
  }
}

// Calling the function and receiving the authorization token
const authorizationToken = await getAuthorizationToken();

```

  ----[mlb]----  
  ![Example bottom sheet](/images/api-orders/supertoken-bottomsheet-mlb.png)
  ------------

  ----[mla]---- 

  ![Example bottom sheet](/images/api-orders/supertoken-bottomsheet-mla.png)
  ------------

  ----[mlm]---- 

  ![Example bottom sheet](/images/api-orders/supertoken-bottomsheet-mlm.png)
  ------------


#### Obtener token omitiendo el modal de confirmación

El método `.show` también puede recibir opcionalmente el valor booleano `true`, que permite omitir el modal de confirmación y que el usuario sea redirigido automáticamente a la aplicación. Cuando este parámetro está activado, se recomienda usar el método `authenticator.getApplication()` para identificar a qué aplicación podrá ser redirigido el usuario, Mercado Libre o Mercado Pago, lo que permite personalizar y mejorar su experiencia.

```JavaScript
async function getAuthorizationToken() {

  try {
    const token = await authenticator.show({ hideRedirectionConfirmation: true });
    return token;
  } catch (error) {
    console.error("Error while obtaining the token:", error?.errorCode);
  }
}

// Calling the function and receiving the authorization token
const authorizationToken = await getAuthorizationToken();

```

> NOTE
>
> Si recibes un error durante esta etapa, puedes consultar nuestro [listado de posibles errores](/developers/es/docs/checkout-api-v2/payment-integration/fast-payments#:~:text=4.%20Procesar%20pago-,Posibles,-errores).

----[mlb]----  
![Experiencia de autenticación](/images/api-orders/supertoken-exp-2-mlb.png)
------------

----[mla]---- 

![Experiencia de autenticación](/images/api-orders/supertoken-exp-2-mla.png)
------------

----[mlm]---- 

![Experiencia de autenticación](/images/api-orders/supertoken-exp-2-mlm.png)
------------

:::
:::AccordionComponent{title="3. Obtener medios de pago del comprador" pill="client-side"}

Después de la autorización del comprador, la aplicación de Mercado Pago se cerrará y se volverá al sitio inicial del checkout, esta vez con la opción de realizar el pago con sus medios guardados. 

Para obtener estos medios de pago disponibles en la cuenta del comprador en tu sistema, luego de la obtención del _token_ en el paso anterior, debes ejecutar la siguiente función.

```JavaScript
async function getAccountPaymentMethods(authorizationToken) {
  try {
    const userPaymentMethods = await mp.getAccountPaymentMethods(authorizationToken);
    return userPaymentMethods;
  } catch (error) {
    console.error("Error while fetching payment methods", error);
  }
}

// Calling the function
const userPaymentMethods = await getAccountPaymentMethods(authorizationToken);

```

A continuación, puedes ver un ejemplo de la estructura de la respuesta del objeto `userPaymentMethods`, que devuelve los medios de pago disponibles en la cuenta del comprador. 

```json
{
    "data": [
        {
            "id": "elo",
            "token": "STPRAPI01JP831Y0WCFTE0QTDBTV974NY",
            "name": "Elo",
            "type": "credit_card",
            "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/elo.gif",
            "security_code_settings": {
                "length": "number",
                "mode": "string"
            },
            "card": {
                "card_number": {
                    "last_four_digits": "3203",
                    "bin": "65050708",
                    "length": 16
                }
            },
            "issuer": {
                "name": "Elo",
                "id": 687,
                "default": true,
                "bank": {
                    "country": "BRA",
                    "name": "Elo card"
                }
            },
            "installments": [
                {
                    "total_amount": "1200",
                    "installment_amount": "1200",
                    "installment_rate_collector": [
                        "MERCADOPAGO"
                    ],
                    "installments": 1,
                    "max_allowed_amount": 60000,
                    "min_allowed_amount": 0.5,
                    "installment_rate": 0
                },
                {
                    "total_amount": "1297.68",
                    "installment_amount": "648.84",
                    "installment_rate_collector": [
                        "MERCADOPAGO"
                    ],
                    "installments": 2,
                    "max_allowed_amount": 60000,
                    "min_allowed_amount": 10,
                    "installment_rate": 8.14
                },
                {
                    "total_amount": "1316.76",
                    "installment_amount": "438.92",
                    "installment_rate_collector": [
                        "MERCADOPAGO"
                    ],
                    "installments": 3,
                    "max_allowed_amount": 60000,
                    "min_allowed_amount": 15,
                    "installment_rate": 9.73
                }
            ]
        },
        {
            "id": "master",
            "token": "STPRAPI01JP831Y0WCFTE0QTDC0779QH7",
            "name": "Mastercard",
            "type": "credit_card",
            "thumbnail": "https://http2.mlstatic.com/storage/logos-api-admin/e2-xl.png",
            "security_code_settings": {
                "length": "number",
                "mode": "string"
            },
            "card": {
                "card_number": {
                    "last_four_digits": "2969",
                    "bin": "54699707",
                    "length": 16
                }
            },
            "issuer": {
                "name": "Mastercard",
                "id": 24,
                "default": true,
                "bank": {
                    "country": "BRA",
                    "name": "CREDITO"
                }
            },
            "installments": [
                {
                    "total_amount": "1200",
                    "installment_amount": "1200",
                    "installment_rate_collector": [
                        "MERCADOPAGO"
                    ],
                    "installments": 1,
                    "max_allowed_amount": 60000,
                    "min_allowed_amount": 0.5,
                    "installment_rate": 0
                },
                {
                    "total_amount": "1297.68",
                    "installment_amount": "648.84",
                    "installment_rate_collector": [
                        "MERCADOPAGO"
                    ],
                    "installments": 2,
                    "max_allowed_amount": 60000,
                    "min_allowed_amount": 10,
                    "installment_rate": 8.14
                }
            ]
        },
        {
            "id": "visa",
            "token": "STPRAPI01JP831Y0WCFTE0QTDBX9HQXB5",
            "name": "Visa",
            "type": "credit_card",
            "thumbnail": "https://http2.mlstatic.com/storage/logos-api-admin/d589be70--xl.png",
            "security_code_settings": {
                "length": "number",
                "mode": "string"
            },
            "card": {
                "card_number": {
                    "last_four_digits": "9867",
                    "bin": "47059815",
                    "length": 16
                }
            },
            "issuer": {
                "name": "Visa",
                "id": 25,
                "default": true,
                "bank": {
                    "country": "BRA",
                    "name": "ITAU UNIBANCO HOLDING S.A."
                }
            },
            "installments": [
                {
                    "total_amount": "1200",
                    "installment_amount": "1200",
                    "installment_rate_collector": [
                        "MERCADOPAGO"
                    ],
                    "installments": 1,
                    "max_allowed_amount": 60000,
                    "min_allowed_amount": 0.5,
                    "installment_rate": 0
                }
            ]
        },
        {
            "id": "account_money",
            "token": "STPRAPI01JP831Y0WCFTE0QTDBT34DR5Q",
            "name": "Dinero en cuenta Mercado Pago",
            "type": "account_money",
            "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/2007.gif",
            "issuer": {
                "name": "Dinero en cuenta MercadoPago\"",
                "id": 2007,
                "default": false
            }
        }
    ]
}
```

> NOTE
>
> Es importante que estas llamadas estén envueltas en un bloque _try-catch_ para que posibles errores sean procesados adecuadamente. Si llegaras a recibir uno, puedes consultar nuestro [listado de posibles errores](/developers/es/docs/checkout-api-v2/payment-integration/fast-payments#:~:text=4.%20Procesar%20pago-,Posibles,-errores).

Para que el comprador visualice estas opciones de pago en tu checkout y seleccione la que prefiera, debes renderizarlas en una pantalla. Ve a continuación un ejemplo de cómo exhibirlas. 

----[mlb]----  
![Ejemplo del frontend de la tienda con los medios de pago disponibles](/images/api-orders/supertoken-payment-methods-mlb.png)
------------

----[mla]---- 

![Ejemplo del frontend de la tienda con los medios de pago disponibles](/images/api-orders/supertoken-payment-methods-mla.png)
------------

----[mlm]---- 

![Ejemplo del frontend de la tienda con los medios de pago disponibles](/images/api-orders/supertoken-payment-methods-mlm.png)
------------

Por último, asegúrate de disponibilizar en tu backend un endpoint que reciba los datos del pago una vez que el comprador realice su confirmación de compra.

:::
:::AccordionComponent{title="4. Procesar pago" pill="server-side"}

Después de que el usuario seleccione con qué medio de pago desea realizar la compra, debes enviar un **POST** con tu :toolTipComponent[Access Token]{content="Clave privada de la aplicación creada en Mercado Pago, que es utilizada en el _backend_. Puedes acceder a ella a través de *Tus integraciones > Detalles de aplicación > Pruebas > Credenciales de prueba* o *Producción > Credenciales de producción*."} al endpoint :TagComponent{tag="API" text="/v1/orders" href="/developers/es/reference/orders/online-payments/create/post"} para procesar el pago, utilizando los datos de los medios de pago del comprador obtenidos anteriormente a través del nodo `payment_method`.

[[[
```curl
curl --request POST \
  --url https://api.mercadopago.com/v1/orders \
  --header 'authorization: {{YOUR_ACCESS_TOKEN}} \
  --header 'content-type: application/json' \
  --header 'x-idempotency-key: {{V4_UUID_OR_RANDOM_STRING}} \
  --data '{
  "processing_mode": "automatic",
  "external_reference": "ext_ref_1234",
  "description": "order description",
  "marketplace": "NONE",
  "marketplace_fee": "1.00",
  "total_amount": "100.00",
  "expiration_time": "P3Y6M4DT12H30M5S",
  "type": "online",
  "payer": {
    "email": "{{MLA_PAYER_EMAIL}}",
    "first_name": "first name",
    "last_name": "last name",
    "phone": {
      "area_code": "55",
      "number": "1112345678"
    }
  },
  "transactions": {
    "payments": [
      {
        "amount": "100.00",
        "payment_method": {
          "id": "{{PAYMENT_METHOD_ID}}",
          "type": "{{PAYMENT_METHOD_TYPE}}",
          "token": "{{PAYMENT_METHOD_HASH}}",
          "installments": 1, // Required only when applicable
        }
      }
    ]
  },
  "items": [
    {
      "title": "title",
      "description": "description",
      "unit_price": "10.00",
      "external_code": "ABC",
      "category_id": "category",
      "picture_url": "https://www.mercadopago.com/img",
      "quantity": 1
    }
  ]
}'
```
```node
async function createOrder() {
  try {
    const response = await fetch("https://api.mercadopago.com/v1/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Idempotency-Key": "{{V4_UUID_OR_RANDOM_STRING}}",
        Authorization: "Bearer {{YOUR_ACCESS_TOKEN}}",
      },
      body: JSON.stringify({
        type: "online",
        external_reference: "{{EXTERNAL_REFERENCE}}",
        total_amount: "200.00",
        payer: {
          email: "{{PAYER_EMAIL}}",
        },
        transactions: {
          Inclpayments: [
            {
              amount: "200.00",
              payment_method: {
                id: "{{PAYMENT_METHOD_ID}}",
                type: "{{PAYMENT_METHOD_TYPE}}",
                token: "{{PAYMENT_METHOD_TOKEN}}",
                installments: 1, // Required only when applicable
              },
            },
          ],
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

createOrder();
```
]]]

En caso de éxito, la respuesta a esta solicitud se verá como el ejemplo a continuación. 

```json
{
  "id": "ORD01JSQ9E9VESGKF543MRBMR9YKH",
  "type": "online",
  "processing_mode": "automatic",
  "external_reference": "ext_ref_1234",
  "description": "order description",
  "marketplace": "NONE",
  "marketplace_fee": "1.00",
  "total_amount": "100.00",
  "total_paid_amount": "100.00",
  "expiration_time": "P3Y6M4DT12H30M5S",
  "country_code": "ARG",
  "user_id": "791690672",
  "status": "processed",
  "status_detail": "accredited",
  "capture_mode": "automatic_async",
  "created_date": "2025-04-25T20:15:21.966Z",
  "last_updated_date": "2025-04-25T20:15:23.277Z",
  "integration_data": {
    "application_id": "8275829243271683"
  },
  "transactions": {
    "payments": [
      {
        "id": "PAY01JSQ9E9VESGKF543MRCB217H4",
        "amount": "100.00",
        "paid_amount": "100.00",
        "reference_id": "00032idm6r",
        "status": "processed",
        "status_detail": "accredited",
        "payment_method": {
          "id": "master",
          "type": "credit_card",
          "token": "STPRAPI01JSQ9E8H7ZRK4Q0KN4AE8MB7P",
          "statement_descriptor": "somedescription"
        }
      }
    ]
  },
  "items": [
    {
      "category_id": "category",
      "title": "title",
      "description": "description",
      "unit_price": "10.00",
      "picture_url": "https://www.mercadopago.com/img",
      "external_code": "ABC",
      "quantity": 1
    }
  ]
}
```

> SUCCESS_MESSAGE
>
> Para conocer en detalle todos los parámetros a ser enviados en esta solicitud, consulta nuestra [Referencia de API](/developers/es/reference/orders/online-payments/create/post). Adicionalmente, si recibes un error al enviar el pago, puedes consultar nuestro [listado de errores](/developers/es/docs/checkout-api-v2/payment-management/integration-errors).

Con un resultado de pago exitoso, recuerda redirigir al usuario a una pantalla de confirmación, informando que el pago ha sido completado.

:::
:::AccordionComponent{title="Posibles errores"}

A continuación, puedes ver dos listados de posibles errores que pueden suceder durante la integración. En primer lugar, encontrarás aquellos de la subclase `Authenticator`, y luego aquellos vinculados a la API utilizada para las validaciones.

### Errores de la subclase Authenticator

A continuación, encontrarás una lista de **posibles errores que la subclase `Authenticator` puede devolver** a través de `error?.errorCode`.

| Error | Descripción |
|:---:|:---:|
| `NOT_INITIALIZED` | La clase Mercado Pago aún no ha sido inicializada. |
| `ALREADY_SHOWING` | El proceso de autenticación ya está en marcha. |
| `NOT_SUPPORTED_SITE_ID` | El siteId proporcionado no es soportado. |
| `INVALID_EMAIL_ADDRESS` | La dirección de correo electrónico proporcionada es inválida. |
| `INVALID_AMOUNT_VALUE` | El valor del monto proporcionado es inválido. |
| `PAYMENT_REQUEST_ERROR` | Ocurrió un error con la API PaymentRequest. |
| `PAYMENT_REQUEST_NOT_SUPPORTED` | La API PaymentRequest no es soportada en el entorno actual. |
| `AUTHENTICATION_FLOW_NOT_SUPPORTED` | El flujo de autenticación no es soportado por el usuario solicitante. |
| `NO_APPLICATIONS_DETECTED` | No se detectó ninguna aplicación compatible para la autenticación. |
| `APPLICATION_CHECK_ERROR` | Error al verificar las aplicaciones necesarias para la autenticación. |
| `API_REQUEST_FAILED` | Falló la solicitud a la API. |
| `UNKNOWN_ERROR` | Error desconocido. |
| `BOTTOMSHEET_LOADING_FAILED` | El modal de confirmación no puede ser renderizado al usuario. |
| `NO_BOTTOMSHEET_CONFIRMATION` | El usuario solicitó la cancelación del flujo en el modal de confirmación. |
| `UNREACHABLE_APPLICATION` | La API de PaymentRequest rechazó la solicitud por falla al localizar la aplicación. |
| `SECURITY_BLOCKED` | La API de PaymentRequest rechazó la solicitud por cuestiones de seguridad. |

### Errores de la API para obtener medios de pago

Al establecer la comunicación con la API encargada de las **validaciones necesarias para obtener los medios de pago a través del _token_**, es la propiedad `error?.details` aquella que te permite acceder a los errores.

```JavaScript
  try {
    // ...
  } catch (error) {
     const { message, errorCode, details } = error;
     console.error({ message, errorCode, details });
  }
}
```

Mira a continuación un listado de posibles errores devueltos por la API.

| Error | Descripción |
|:---:|:---:|
| `INVALID_AMOUNT` | El amount enviado no tiene un formato válido. |
| `INTERNAL_ERROR` | Se ha producido un error interno del servidor. Vuelve a intentarlo más tarde. Si el problema persiste, ponte en contacto con el servicio de Soporte, facilita el `x-request-id` y más detalles sobre la operación realizada. |
| `PAYMENT_METHOD_NOT_FOUND` | El token no fue encontrado. |
| `ACCOUNT_DATA_UNEXPECTED_ERROR` | Se ha producido un error interno del servidor. Vuelve a intentarlo más tarde. Si el problema persiste, ponte en contacto con el servicio de Soporte, facilita el `x-request-id` y más detalles sobre la operación realizada. |
| `ACCOUNT_DATA_INVALID_DATA`| Algunas de las propiedades introducidas no son compatibles con la API. Revisa la solicitud y elimina o corrige las propiedades no admitidas. |
| `ACCOUNT_DATA_INVALID_DATA` | El solicitante no es el propietario del recurso solicitado. |
:::

