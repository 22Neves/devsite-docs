# Manage chargebacks

Upon receiving a chargeback initiation notification, use the provided data to assist in managing the process. This data will be essential for preparing and submitting the necessary documentation for the dispute.

In this stage, analyze the detailed information included in the notification to understand the specific aspects of the chargeback. Below, we present a diagram that illustrates how the document submission and receipt flow works:

## Consult chargeback

Start the process by consulting the chargeback information using the `id` or `payment_id` provided in the notification body. From the obtained details, it will be possible to evaluate if there is a need to submit documentation to continue the chargeback.

:::::TabsComponent

::::TabComponent{title="Consult chargeback by id"}

To consult more information about the chargeback, send a GET request to the endpoint [/v1/chargebacks/{id}](/developers/en/reference/chargebacks/_chargebacks_id/get), replacing the `id` field with the `id` of the chargeback brought in the notification body:

```
curl --location --globoff 'https://api.mercadopago.com/v1/chargebacks/{id}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{access_token}}'
```

Below is an example of a response to the request:

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

::::TabComponent{title="Consult chargeback by payment_id"}
To consult more information about the chargeback, execute a GET request to the endpoint [/v1/chargebacks/{id}](/developers/en/reference/chargebacks/_chargebacks_id/get), replacing the `payment_id` field with the `payment_id` of the chargeback brought in the notification body:

```
curl --location 'https://api.mercadopago.com/v1/chargebacks/search?payment_id={payment_id}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{access_token}}'
```

Below is an example of a response to the request:

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

## Submit documentation for chargeback

In the response to the query made to obtain more information about the chargeback, it will be indicated if you need to submit the necessary documentation to dispute it. You will only need to do so if the `documentation_required` field is true and the `date_documentation_deadline` field indicates a future date.

At this stage, you can submit the documentation proving that the sale is valid through the following POST request:

> RED_MESSAGE
>
> Important
>
> The files must be sent in .jpg, .png, or .pdf format and have a maximum size of up to 10MB.

```
curl -X POST  \
-F 'files[]=@/path/to/file/file1.png' \
-F 'files[]=@/path/to/file/file2.pdf' \
-H 'Authorization: Bearer {{access_token}}'
https://api.mercadopago.com/v1/chargebacks/{id}/documentation
```

If the files are successfully submitted, the API will return an `HTTP 200` code and the `documentation_status` of the chargeback will be changed to `review_pending`.

After receiving the documentation, Mercado Pago acts as a mediator in the chargeback resolution process. The analysis is initiated with the card brand, which then sends the received documentation to the card-issuing bank. Once the bank's analysis is completed, the chargeback resolution is determined and the involved parties are notified.

Wait for the Webhook notification regarding the resolution and check the chargeback again using the endpoint [Get Chargeback](/developers/en/reference/chargebacks/_chargebacks_id/get). After the resolution, the `coverage_applied` field will indicate the result and will assume one of the possible values:

| Value | Description                                                               |
|-------|---------------------------------------------------------------------------|
| true  | Indicates that the decision was in favor of the seller and the money will be refunded. |
| false | Indicates that the decision was against the seller and the money will be deducted.  |

> RED_MESSAGE
>
> Important
>
> The chargeback resolution can take up to 6 months, depending on the card brand.

## Payment status

When a chargeback is initiated, the status of the associated payment is directly impacted. Initially, the `status` is changed to `charged_back` and the `status_detail` to `in_process`. After the conclusion of the chargeback analysis, whether by the decision of the issuing bank, the determination of eligibility for coverage by Mercado Pago, or the absence of provided documentation, the `status_detail` of the payment will be updated to `settled` or `reimbursed`.

| Status           | Status detail | Description                                                                                      |
|------------------|---------------|--------------------------------------------------------------------------------------------------|
| charged_back     | `in_process`  | Chargeback received. The payment dispute is in progress, awaiting a final decision.              |
| charged_back     | `settled`     | Decision against the seller. Money withdrawn from the seller's account.                          |
| charged_back     | `reimbursed`  | Decision in favor of the seller. Money refunded to the seller's account.                         |