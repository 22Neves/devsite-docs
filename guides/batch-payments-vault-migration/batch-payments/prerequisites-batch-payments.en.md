# Batch Payments with customers and cards

## Requirements

To perform charges through the batch flow, the following is necessary:

| Requirement | Description |
|---|---|
| Mercado Pago Account | To integrate with Mercado Pago, you need to have a seller account. This way, you will be able to access the resources of the necessary APIs. If you do not have one yet, visit the [official Mercado Pago site](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration?from_landing=true&contextual=company&entity=pj) to create it for free. |
| Application created in [Your Integrations](https://www.mercadopago.com/developers/panel/app) | Applications are the different integrations contained within one or several stores. You can create one application for each solution you implement, in order to keep everything organized and have control that facilitates management. Additionally, by creating an application, you will be able to obtain the necessary credentials to operate. To create your application, refer to the documentation in the [Developer Panel](/developers/en/docs/your-integrations/dashboard). |
| IP or range of IPs of the servers that will connect to the SFTP | The IP(s) or range of IPs that will have permission to connect to the SFTP must be defined and provided. |
| Public key associated with the user who will connect to the SFTP | The public key of the user responsible for the connection to the SFTP must be provided for authentication. |
| Business Name | The business name of the company or entity performing the integration. |
| Tax ID (CNPJ) | Tax identification number (CNPJ) of the company or entity. |
| Country | The country where the company or entity is registered. |
| Name of the third-party contact | Full name of the responsible or main contact person of the third party. |
| Email of the third-party contact | Email address for communication with the third party. |
| Phone number of the third-party contact | Phone number for direct contact with the third party. |
| Email of the Mercado Pago owner | Email address of the owner of the Mercado Livre/Mercado Pago (Meli) account. |

> WARNING
> 
> Important
> 
> You must use the same account and the same application with which the linkages were generated.

Next, along with the SFTP, we will return the following connection data:

| Connection Data | Description |
|---|---|
| UserName | Username required for the SFTP connection. |
| Host | Connection URL of the server. |

> NOTE
> 
> Note
> 
> File uploads are available 24 hours a day, 7 days a week. The processing period varies from 1 to 5 business days.