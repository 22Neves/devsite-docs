Mercado Pago proporciona **tarjetas de prueba** que te permitirán probar pagos sin utilizar una tarjeta real. 

Sus datos, como número, código de seguridad y fecha de caducidad, pueden ser combinados con los datos relativos al **titular de la tarjeta**, que te permitirán probar distintos escenarios de pago. Es decir, **puedes utilizar la información de cualquier tarjeta de prueba y probar resultados de pago diferentes a partir de los datos del titular**. 

A continuación, puedes ver los datos de las **tarjetas de débito y crédito de prueba**. Selecciona aquella que quieras utilizar para probar tu integración.

----[mla]----
| Tipo de tarjeta | Bandera | Número | Código de seguridad | Fecha de caducidad |
| :--- | :---: | :---: | :---: | :---: |
| Tarjeta de crédito | Mastercard | 5031 7557 3453 0604 | 123 | 11/30 |
| Tarjeta de crédito | Visa | 4509 9535 6623 3704 | 123 | 11/30 |
| Tarjeta de crédito | American Express | 3711 803032 57522 | 1234 | 11/30 |
| Tarjeta de débito | Mastercard | 5287 3383 1025 3304 | 123 | 11/30 |
| Tarjeta de débito  | Visa | 4002 7686 9439 5619 | 123 | 11/30 |

------------
----[mlb]----
| Tipo de tarjeta | Bandera | Número | Código de seguridad | Fecha de caducidad |
| :--- | :---: | :---: | :---: | :---: |
| Tarjeta de crédito | Mastercard | 5031 4332 1540 6351 | 123 | 11/30 |
| Tarjeta de crédito | Visa | 4235 6477 2802 5682 | 123 | 11/30 |
| Tarjeta de crédito | American Express | 3753 651535 56885 | 1234 | 11/30 |
| Tarjeta de débito | Elo | 5067 7667 8388 8311 | 123 | 11/30 |

------------
----[mlc]----
| Tipo de tarjeta | Bandera | Número | Código de seguridad | Fecha de caducidad |
| :--- | :---: | :---: | :---: | :---: |
| Tarjeta de crédito | Mastercard | 5416 7526 0258 2580 | 123 | 11/30 |
| Tarjeta de crédito | Visa | 4168 8188 4444 7115 | 123 | 11/30 |
| Tarjeta de crédito | American Express | 3757 781744 61804 | 1234 | 11/30 |
| Tarjeta de débito | Mastercard | 5241 0198 2664 6950 | 123 | 11/30 |
| Tarjeta de débito | Visa | 4023 6535 2391 4373 | 123 | 11/30 |

------------
----[mco]----
| Tipo de tarjeta | Bandera | Número | Código de seguridad | Fecha de caducidad |
| :--- | :---: | :---: | :---: | :---: |
| Tarjeta de crédito | Mastercard | 5254 1336 7440 3564| 123 | 11/30 |
| Tarjeta de crédito | Visa | 4013 5406 8274 6260 | 123 | 11/30 |
| Tarjeta de crédito | American Express | 3743 781877 55283 | 1234 | 11/30 |
| Tarjeta de débito | Visa | 4915 1120 5524 6507 | 123 | 11/30 |
------------
----[mlm]----
| Tipo de tarjeta | Bandera | Número | Código de seguridad | Fecha de caducidad |
| :--- | :---: | :---: | :---: | :---: |
| Tarjeta de crédito | Mastercard | 5474 9254 3267 0366 | 123 | 11/30 |
| Tarjeta de crédito | Visa | 4075 5957 1648 3764 | 123 | 11/30 |
| Tarjeta de débito | Mastercard | 5579 0534 6148 2647 | 123 | 11/30 |
| Tarjeta de débito | Visa | 4189 1412 2126 7633 | 123 | 11/30 |
------------
----[mlu]----
| Tipo de tarjeta | Bandera | Número | Código de seguridad | Fecha de caducidad |
| :--- | :---: | :---: | :---: | :---: |
| Tarjeta de crédito | Mastercard | 5031 7557 3453 0604 | 123 | 11/30 |
| Tarjeta de crédito | Visa | 4509 9535 6623 3704 | 123 | 11/30 |
| Tarjeta de débito | Visa | 4213 0163 1470 6756 | 123 | 11/30 |
------------
----[mpe]----
| Tipo de tarjeta | Bandera | Número | Código de seguridad | Fecha de caducidad |
| :--- | :---: | :---: | :---: | :---: |
| Tarjeta de crédito | Mastercard | 5031 7557 3453 0604 | 123 | 11/30 |
| Tarjeta de crédito | Visa | 4009 1753 3280 6176 | 123 | 11/30 |
| Tarjeta de crédito | American Express | 3711 803032 57522 | 1234 | 11/30 |
| Tarjeta de débito | Mastercard | 5178 7816 2220 2455 | 123 | 11/30 |

------------

Luego, elige qué escenario de pago probar, y completa los campos del **titular de la tarjeta** (Nombre y apellido, Tipo y número de documento) según lo indica la tabla a continuación.

----[mla]----

| Estado de pago | Nombre y apellido del titular | Documento de identidad |
| --- | --- | --- |
| Pago aprobado | `APRO` | (DNI) 12345678 |
| Rechazado por error general | `OTHE` | (DNI) 12345678 |
| Pendiente de pago | `CONT` | - | 
| Rechazado con validación para autorizar | `CALL` | - |
| Rechazado por importe insuficiente | `FUND` | - |
| Rechazado por código de seguridad inválido | `SECU` | - |
| Rechazado debido a un problema de fecha de vencimiento | `EXPI` | - |
| Rechazado debido a un error de formulario | `FORM` | - |
| Rechazado por falta de card_number | `CARD` | - |
| Rechazado por cuotas invalidas | `INST` | - |
| Rechazado por pago duplicado | `DUPL` | - |
| Rechazado por tarjeta deshabilitada | `LOCK` | - |
| Rechazado por tipo de tarjeta no permitida | `CTNA` | - |
| Rechazado debido a intentos excedidos del pin de la tarjeta | `ATTE` | - |
| Rechazado por estar en lista negra | `BLAC` | - |
| No soportado | `UNSU` | - |
| Usado para aplicar regla de montos | `TEST` | - |

------------
----[mlb]----
 
| Estado de pago | Nombre y apellido del titular | Documento de identidad |
| --- | --- | --- |
| Pago aprobado | `APRO` | (CPF) 12345678909 |
| Rechazado por error general | `OTHE` | (CPF) 12345678909 |
| Pendiente de pago | `CONT` | - | 
| Rechazado con validación para autorizar | `CALL` | - |
| Rechazado por importe insuficiente | `FUND` | - |
| Rechazado por código de seguridad inválido | `SECU` | - |
| Rechazado debido a un problema de fecha de vencimiento | `EXPI` | - |
| Rechazado debido a un error de formulario | `FORM` | - |
| Rechazado por falta de card_number | `CARD` | - |
| Rechazado por cuotas invalidas | `INST` | - |
| Rechazado por pago duplicado | `DUPL` | - |
| Rechazado por tarjeta deshabilitada | `LOCK` | - |
| Rechazado por tipo de tarjeta no permitida | `CTNA` | - |
| Rechazado debido a intentos excedidos del pin de la tarjeta | `ATTE` | - |
| Rechazado por estar en lista negra | `BLAC` | - |
| No soportado | `UNSU` | - |
| Usado para aplicar regla de montos | `TEST` | - |

------------
----[mlc]----

| Estado de pago | Nombre y apellido del titular |Documento de identidad |
| --- | --- | --- |
| Pago aprobado | `APRO` | (otro) 123456789 |
| Rechazado por error general | `OTHE` | (otro) 123456789 |
| Pendiente de pago | `CONT` | - | 
| Rechazado con validación para autorizar | `CALL` | - |
| Rechazado por importe insuficiente | `FUND` | - |
| Rechazado por código de seguridad inválido | `SECU` | - |
| Rechazado debido a un problema de fecha de vencimiento | `EXPI` | - |
| Rechazado debido a un error de formulario | `FORM` | - |
| Rechazado por falta de card_number | `CARD` | - |
| Rechazado por cuotas invalidas | `INST` | - |
| Rechazado por pago duplicado | `DUPL` | - |
| Rechazado por tarjeta deshabilitada | `LOCK` | - |
| Rechazado por tipo de tarjeta no permitida | `CTNA` | - |
| Rechazado debido a intentos excedidos del pin de la tarjeta | `ATTE` | - |
| Rechazado por estar en lista negra | `BLAC` | - |
| No soportado | `UNSU` | - |
| Usado para aplicar regla de montos | `TEST` | - |
------------
----[mco]----

| Estado de pago | Nombre y apellido del titular | Documento de identidad |
| --- | --- | --- |
| Pago aprobado | `APRO` | 123456789 |
| Rechazado por error general | `OTHE` | 123456789 |
| Pendiente de pago | `CONT` | - | 
| Rechazado con validación para autorizar | `CALL` | - |
| Rechazado por importe insuficiente | `FUND` | - |
| Rechazado por código de seguridad inválido | `SECU` | - |
| Rechazado debido a un problema de fecha de vencimiento | `EXPI` | - |
| Rechazado debido a un error de formulario | `FORM` | - |
| Rechazado por falta de card_number | `CARD` | - |
| Rechazado por cuotas invalidas | `INST` | - |
| Rechazado por pago duplicado | `DUPL` | - |
| Rechazado por tarjeta deshabilitada | `LOCK` | - |
| Rechazado por tipo de tarjeta no permitida | `CTNA` | - |
| Rechazado debido a intentos excedidos del pin de la tarjeta | `ATTE` | - |
| Rechazado por estar en lista negra | `BLAC` | - |
| No soportado | `UNSU` | - |
| Usado para aplicar regla de montos | `TEST` | - |

------------
----[mlm]----
 
| Nombre y apellido del titular | Estado de pago |
| --- | --- |
| `APRO` | Pago aprobado |
| `OTHE` | Rechazado por error general |
| `CONT` | Pendiente de pago |
| `CALL` | Rechazado con validación para autorizar |
| `FUND` | Rechazado por importe insuficiente |
| `SECU` | Rechazado por código de seguridad inválido |
| `EXPI` | Rechazado debido a un problema de fecha de vencimiento |
| `FORM` | Rechazado debido a un error de formulario |
| `CARD` | Rechazado por falta de card_number |
| `INST` | Rechazado por cuotas invalidas |
| `DUPL` | Rechazado por pago duplicado |
| `LOCK` | Rechazado por tarjeta deshabilitada |
| `CTNA` | Rechazado por tipo de tarjeta no permitida |
| `ATTE` | Rechazado debido a intentos excedidos del pin de la tarjeta |
| `BLAC` | Rechazado por estar en lista negra |
| `UNSU` | No soportado |
| `TEST` | Usado para aplicar regla de montos |
------------
----[mlu]----
 
| Estado de pago | Nombre y apellido del titular |Documento de identidad |
| --- | --- | --- |
| Pago aprobado | `APRO` | (CI) 12345678 <br> (otro) 123456789 |
| Rechazado por error general | `OTHE` | (CI) 12345678 <br> (otro) 123456789 |
| Pendiente de pago | `CONT` | - | 
| Rechazado con validación para autorizar | `CALL` | - |
| Rechazado por importe insuficiente | `FUND` | - |
| Rechazado por código de seguridad inválido | `SECU` | - |
| Rechazado debido a un problema de fecha de vencimiento | `EXPI` | - |
| Rechazado debido a un error de formulario | `FORM` | - |
| Rechazado por falta de card_number | `CARD` | - |
| Rechazado por cuotas invalidas | `INST` | - |
| Rechazado por pago duplicado | `DUPL` | - |
| Rechazado por tarjeta deshabilitada | `LOCK` | - |
| Rechazado por tipo de tarjeta no permitida | `CTNA` | - |
| Rechazado debido a intentos excedidos del pin de la tarjeta | `ATTE` | - |
| Rechazado por estar en lista negra | `BLAC` | - |
| No soportado | `UNSU` | - |
| Usado para aplicar regla de montos | `TEST` | - |

------------
----[mpe]----
 
| Estado de pago |  Nombre y apellido del titular | Documento de identidad |
| --- | --- | --- |
| Pago aprobado | `APRO` | 123456789 |
| Rechazado por error general | `OTHE` | 123456789 |
| Pendiente de pago | `CONT` | - | 
| Rechazado con validación para autorizar | `CALL` | - |
| Rechazado por importe insuficiente | `FUND` | - |
| Rechazado por código de seguridad inválido | `SECU` | - |
| Rechazado debido a un problema de fecha de vencimiento | `EXPI` | - |
| Rechazado debido a un error de formulario | `FORM` | - |
| Rechazado por falta de card_number | `CARD` | - |
| Rechazado por cuotas invalidas | `INST` | - |
| Rechazado por pago duplicado | `DUPL` | - |
| Rechazado por tarjeta deshabilitada | `LOCK` | - |
| Rechazado por tipo de tarjeta no permitida | `CTNA` | - |
| Rechazado debido a intentos excedidos del pin de la tarjeta | `ATTE` | - |
| Rechazado por estar en lista negra | `BLAC` | - |
| No soportado | `UNSU` | - |
| Usado para aplicar regla de montos | `TEST` | - |

------------

Una vez que hayas completado todos los campos correctamente, haz clic en el botón para procesar el pago, y aguarda el resultado.