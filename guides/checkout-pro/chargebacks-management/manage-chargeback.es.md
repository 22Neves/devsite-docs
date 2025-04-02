# Gestionar contracargos

Al recibir una notificación de inicio de contracargo, utilice los datos proporcionados para ayudar en la gestión del proceso. Estos datos serán fundamentales para preparar y enviar la documentación necesaria para la disputa.

En esta etapa, analice la información detallada incluida en la notificación para comprender los aspectos específicos del contracargo. A continuación, presentamos un diagrama que ilustra cómo funciona el flujo de envío y recepción de la documentación:

![Chargebacks](/images/cow/chargebacks-flow.png) 

## Consultar contracargo

Inicie el proceso consultando la información del contracargo utilizando el `id` o el `payment_id` proporcionados en el cuerpo de la notificación. A partir de los detalles obtenidos, será posible evaluar si hay necesidad de enviar la documentación para dar continuidad al contracargo.

:::::TabsComponent

::::TabComponent{title="Consultar contracargo a través del id"}

Para consultar más información sobre el contracargo, envíe un GET al endpoint [/v1/chargebacks/{id}](/developers/es/reference/chargebacks/_chargebacks_id/get), sustituyendo el campo `id` por el `id` del contracargo proporcionado en el `body` de la notificación:

```
curl --location --globoff 'https://api.mercadopago.com/v1/chargebacks/{id}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{access_token}}'
```

A continuación, un ejemplo de respuesta a la solicitud:

```
{
    "id": "234000062890459000",
    "payments": [
        86439942806
    ],
    "currency": "ARS",
    "amount": 1000.50,
    "reason": "general",
    "coverage_applied": null,
    "coverage_elegible": true,
    "documentation_required": false,
    "documentation_status": "not_supplied",
    "documentation": [],
    "date_documentation_deadline": null,
    "date_created": null,
    "date_last_updated": "2024-10-17T12:48:24.000-04:00",
    "live_mode": true
}
```
::::

::::TabComponent{title="Consultar contracargo a través del payment_id"}
Para consultar más información sobre el contracargo, ejecute un GET al endpoint [/v1/chargebacks/{id}](/developers/es/reference/chargebacks/_chargebacks_id/get), sustituyendo el campo `payment_id` por el `payment_id` del contracargo proporcionado en el cuerpo de la notificación:

```
curl --location 'https://api.mercadopago.com/v1/chargebacks/search?payment_id={payment_id}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{access_token}}'
```

A continuación, un ejemplo de respuesta a la solicitud:

```
{
    "paging": {
        "offset": 0,
        "limit": 25,
        "total": 1
    },
    "results": [
        {
            "id": "234000062890459000",
            "payments": [
                86439942806
            ],
            "currency": "ARS",
            "amount": 1000.5,
            "reason": "general",
            "coverage_applied": null,
            "coverage_elegible": true,
            "documentation_required": false,
            "documentation_status": "not_supplied",
            "documentation": [],
            "date_documentation_deadline": null,
            "date_created": null,
            "date_last_updated": "2024-10-17T12:48:24.000-04:00",
            "live_mode": true
        }
    ]
}
```
::::

:::::

## Enviar documentación para contracargo

En la respuesta a la consulta realizada para obtener más información sobre el contracargo, se indicará si debe enviar la documentación necesaria para contestarlo. Solo necesitará hacerlo si el campo `documentation_required` es true y el campo `date_documentation_deadline` indica una fecha futura.

En esta etapa, podrá enviar la documentación que demuestre que la venta es válida a través del siguiente POST:

> RED_MESSAGE
>
> Importante
>
> Los archivos deben enviarse en formato .jpg, .png o .pdf y tener un tamaño máximo de hasta 10MB.

```
curl -X POST  \
-F 'files[]=@/path/to/file/file1.png' \
-F 'files[]=@/path/to/file/file2.pdf' \
-H 'Authorization: Bearer {{access_token}}'
https://api.mercadopago.com/v1/chargebacks/{id}/documentation
```

Si los archivos se envían con éxito, la API devolverá un código `HTTP 200` y el `documentation_status` del contracargo se cambiará a `review_pending`.

Después de recibir la documentación, Mercado Pago actúa como mediador en el proceso de resolución del contracargo. El análisis se inicia junto a la marca de la tarjeta, que luego envía la documentación recibida al banco emisor de la tarjeta. Una vez que el análisis del banco se completa, se determina la resolución del contracargo y se notifica a las partes involucradas.

Espere la notificación Webhook referente a la resolución y verifique nuevamente el contracargo utilizando el endpoint [Obtener contracargo](/developers/es/reference/chargebacks/_chargebacks_id/get). Después de la resolución, el campo `coverage_applied` indicará el resultado y asumirá uno de los valores posibles:

| Valor | Descripción                                                                |
|-------|----------------------------------------------------------------------------|
| `true`  | Indica que la decisión fue a favor del vendedor y el dinero será devuelto. |
| `false` | Indica que la decisión fue en contra del vendedor y el dinero será descontado. |

> RED_MESSAGE
>
> Importante
>
> La resolución del contracargo puede tardar hasta 6 meses, dependiendo de la marca de la tarjeta.

## Estado de pago

Cuando se inicia un contracargo, el estado del pago asociado se ve directamente afectado. Inicialmente, el `status` se cambia a `charged_back` y el `status_detail` a `in_process`. Después de la conclusión del análisis del contracargo, ya sea por la decisión del banco emisor, la determinación de la elegibilidad para cobertura por parte de Mercado Pago o la ausencia de documentación proporcionada, el `status_detail` del pago se actualizará a `settled` o `reimbursed`.

| Status           | Status detail  | Descripción                                                                                      |
|------------------|----------------|--------------------------------------------------------------------------------------------------|
| `charged_back`     | `in_process`   | Contracargo recibido. La disputa del pago está en progreso, esperando una decisión final.        |
| `charged_back`     | `settled`      | Decisión en contra del vendedor. Dinero retirado de la cuenta del vendedor.                      |
| `charged_back`     | `reimbursed`   | Decisión favorable al vendedor. Dinero reembolsado a la cuenta del vendedor.                     |