# Network Tokens 

Las marcas de tarjeta ofrecen el servicio de Network Tokens, que reemplaza el número real de la tarjeta por un token (llamado DPAN) en compras en línea. Este token funciona como una tarjeta común con 16 dígitos y fecha de vencimiento, pero sin exponer los datos reales del cliente.

Además de brindar mayor seguridad, el uso de Network Tokens puede aumentar la tasa de autorización en las compras y permitir la actualización automática de los datos cuando la tarjeta expira o es reemplazada.

----[mlb, mlc, mla]----
> NOTE
>
> El servicio de Network Token está disponible solo para las marcas Visa y Mastercard.

------------
----[mlm]----
> NOTE
>
> El servicio de Network Token está disponible solo para la marca Mastercard (con limitaciones de BINs).

------------
----[mpe]----
> NOTE
>
> El servicio de Network Token está disponible solo para la marca Visa.

------------

## Crear _card token_

El proceso para crear un pago con Network Token sigue los mismos principios del flujo tradicional de pago con tarjetas. En lugar de los datos reales de la tarjeta, se deben proporcionar el número y la validez del Network Token para generar el `card_token`.

Además, es obligatorio incluir el objeto _tokenization_ en la solicitud, que contiene los datos específicos proporcionados por la marca para autenticar la tokenización.

A continuación, se muestra un ejemplo de cómo crear el _card token_:

```curl
curl --location 'https://api.mercadopago.com/v1/card_tokens?public_key={{public_key}}' \
--header 'Content-Type: application/json' \
--data '{ 
  "card_number":"5031433215406351",
  "expiration_month": 11,
  "expiration_year": 2025,
  "security_code": "123",
  "cardholder": {
    "identification": {
      "number":"12345678910",
      "type":"CPF"
    },
    "name":"Juan Doe"
  },
    "tokenization": {
        "par": "111111XX11XXXXX1X1XXX11X1X1XX",
        "data": "XXX8xXXXXxxXXXxxXxxXXXXXXX==",
        "token_requestor_id": "XXXXXXXXXXXXXX"
        "data_type": "UCAF"
    }
}
```

La siguiente tabla describe cada parámetro y sus posibles valores:

| **Parámetro**                          | **Tipo**  | **Valores**                 | **Descripción**                                                                                                                                | **Obligatoriedad**                             |
|----------------------------------------|-----------|-----------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------|
| `card_number`                          | string    | Numérico                    | Número del token de red (DPAN) proporcionado por la marca. Sustituye el número real de la tarjeta para garantizar mayor seguridad en las transacciones. | Obligatorio                                   |
| `expiration_month`                     | int       | M                           | Mes de vencimiento de la tarjeta generada, que representa la tarjeta original en transacciones digitales. Use valores sin agregar el número 0.  | Obligatorio                                   |
| `expiration_year`                      | int       | YYYY                        | Año de vencimiento del token de red.                                                                                                           | Obligatorio                                   |
| `security_code`                        | string    | 3 o 4 dígitos               | Código de seguridad (CVV). Opcional en el uso de Network Tokens.                                                                              | Opcional al usar Network Tokens.              |
| `card.cardholder.identification.number`| string    | Numérico                    | Documento de identificación del titular de la tarjeta (por ejemplo, Número de CPF, CNPJ, CI o DNI).                                           | Obligatorio                                   |
| `card.cardholder.identification.type`  | string    | CPF, CNPJ, CI o DNI.        | Tipo de documento informado (ej.: CPF, DNI, CI).                                                                                              | Obligatorio                                   |
| `card.cardholder.identification.name`  | string    | Solo letras                 | Nombre completo del titular de la tarjeta.                                                                                                    | Obligatorio                                   |
| `tokenization.data`                    | string    | String base64 (criptograma) | Criptograma de uso único generado por la marca de la tarjeta para cada transacción.                                                           | Obligatorio                                   |
| `tokenization.par`                     | string    | Alfanumérico                | Identificador único de una tarjeta (Primary Account Reference).                                                                               | Obligatorio                                   |
| `tokenization.token_requestor_id`      | string    | Alfanumérico (por marca)    | Identificador del vendedor que solicitó el _token_. El valor varía según la marca utilizada, y un mismo vendedor puede tener TRIDs diferentes para cada marca. | Obligatorio                                   |
| `tokenization.data_type`               | string    | El contenido de `data` sigue el formato UCAF | Indica el formato del campo `tokenization.data`, según los estándares definidos por las marcas. Actualmente, solo se acepta el formato "UCAF". | Obligatorio                                   |

## Crear pago

La creación del pago con _Network Token_ sigue el mismo flujo de una transacción con tarjeta convencional, ya sea única o recurrente.

Para esto, es necesario enviar el **_token_ de la tarjeta** generado en el paso anterior junto con los **datos del pago**.

A continuación, se muestra un ejemplo de la solicitud:

```curl
curl -X POST \
   -H 'accept: application/json' \
   -H 'content-type: application/json' \
   -H 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
   -H 'X-Idempotency-Key: SOME_UNIQUE_VALUE' \
   'https://api.mercadopago.com/v1/payments' \
   -d '{
    "payer": {
        "email": "test@gmail.com"
    },
    "additional_info": {
        "items": [
            {
                "quantity": 1,
                "category_id": 1234,
                "title": "My item",
                "unit_price": 10
            }
        ]
    },
    "payment_method_id": "master",
    "marketplace": "NONE",
    "installments": 1,
    "transaction_amount": 10,
    "description": "Test",
    "token": "8c054cca66ff2f0ba9d4e7724c21106f",
    "capture": false,
    "binary_mode": false
}
```

> NOTE
>
> Las _responses_ y _status_ de una transacción procesada con Network Tokens siguen los mismos estándares de una transacción convencional con tarjeta en ----[mlb]---- Checkout Transparente------------ ----[mla, mlm, mlu, mco, mlc, mpe]---- Checkout API ------------. Para más detalles, consulta los [status de las transacciones](/developers/es/docs/checkout-api/response-handling/collection-results).

## Probar integración

La prueba de integración con Network Tokens consiste en crear un pago de prueba utilizando datos predefinidos.

Para realizar el pago con Network Tokens, es necesario utilizar tarjetas de prueba, generando datos aleatorios en la tokenización. El objetivo es validar si el pago se procesa correctamente, garantizando el funcionamiento esperado de la integración.

Al simular diferentes resultados de pago, ingresa el estado deseado en el campo `card_holder_name`. Para saber cómo completar correctamente este campo, consulta la [documentación de tarjetas de prueba](/developers/es/docs/checkout-api/integration-test/test-cards).

Como las pruebas se realizan con respuestas simuladas, los datos en el bloque de `tokenization` no necesitan ser reales, pero deben respetar los formatos esperados por la API. 

A continuación, se muestran los requisitos para cada campo:

| **Campo**            | **Descripción**                               | **Ejemplo**                     | **Límite de caracteres**        |
|-----------------------|-----------------------------------------------|----------------------------------|----------------------------------|
| `par`                | Identificador de la tarjeta (simulado)        | 1111XX22XX33                    | Hasta 29 caracteres             |
| `data`               | Datos cifrados (simulados)                    | XXX8xXXXXxxXXX==                | Hasta 100 caracteres            |
| `token_requestor_id` | Identifica al vendedor que generó el token     | 12345678901                     | Entre 11 y 15 caracteres        |
| `data_type`          | Tipo de dato enviado                          | UCAF                            | Exactamente 4 caracteres         |

A continuación, un ejemplo:

```json
 "tokenization": {
        "par": "111111XX11XXXXX1X1XXX11X1X1XX",
        "data": "XXX8xXXXXxxXXXxxXxxXXXXXXX==",
        "token_requestor_id": "XXXXXXXXXXXXXX"
        "data_type": "UCAF"
    }
```