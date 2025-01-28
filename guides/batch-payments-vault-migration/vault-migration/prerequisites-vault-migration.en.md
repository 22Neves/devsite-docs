# Prerequisites

To use both the Vault Migration product and the Batch Payments product, the following requirements must be met:

| Requirement | Description |
|---|---|
| Mercado Pago Seller Account | To integrate with Mercado Pago, you need a seller account on Mercado Pago. If you do not have one, [click here](https://www.mercadopago.com.ar/hub/registration/landing) to create it for free. |
| Application created in [Your Integrations](https://www.mercadopago.com/developers/panel/app) | Applications are the various integrations contained in one or several stores. You can create one application for each solution you implement in order to keep everything organized and maintain control that facilitates management. Check [Your Integrations](https://www.mercadopago.com.ar/developers/es/docs/batch-payments/additional-content/your-integrations/introduction) for more information on how to create an application. |

## Vault migration

If the process of migrating a vault is necessary, the following will be required:

### With current payment processor

| Requirement | Description |
|---|---|
| AOC (Attestation of Compliance) from the PSP | Necessary when there is a payment processor that maintains the vault. |

### Without current payment processor

| Requirement | Description |
|---|---|
| AOC (Attestation of Compliance) | The AOC is necessary if the company is PCI (Payment Card Industry) compliant. Otherwise, a completed and signed [SAQ-D](https://docs-prv.pcisecuritystandards.org/SAQ%20(Assessment)/SAQ/PCI-DSS-v4-0-SAQ-D-Merchant-r1.pdf) must be submitted. |

In the case that the SFTP is provided by Mercado Pago and the migration follows the standard procedure, the following data must be provided:

| Requirement | Description |
|---|---|
| IP or Range of IPs | Addresses of the servers that will connect to the SFTP. |
| Public Key of the SFTP User | Key used for authentication. It must be provided in SSH2 format (ssh-rsa) and will be converted to OpenSSH. |
| Third Party Name | Name of the person responsible for the contact. |
| Third Party Contact Email | Email of the responsible contact. |
| Third Party Contact Phone | Phone number of the third party contact. |

Next, we will return the following connection data:

| Connection Data | Description |
|---|---|
| UserName | Username required for the SFTP connection. |
| Host | Server connection URL. |
| Public Encryption Key | Key used to encrypt the file. |