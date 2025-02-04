# Interoperable QR code: issuer flow

> WARNING
>
> Important
>
> The interoperable QR functionality can only be configured by external **digital wallets**. If you are not a representative of a digital wallet, go to [Integration configuration](/developers/en/docs/qr-code/introduction) to configure the option that best suits your business model.

External digital wallets to Mercado Pago have the opportunity to request the registration of the issuer flow for interoperable QR codes. This means requesting Mercado Pago to begin the necessary testing process for QR codes from other wallets to be scanned and paid through Mercado Pago.

To initiate this request, the representative of the interested digital wallet must contact our [Support team](/developers/en/support/center/tickets#from=/mp_wcs_v2/needmorehelp&to=receive_technical_support_for_integrations) and provide the following information.

## Wallet information

When contacting Support, you will need to provide the following information.

| Field | Description |
|---|---|
| Denomination | Commercial name of the digital wallet, as it is known in the market. |
| Legal Name | Official name of the company to which the digital wallet belongs. |
| CUIT | Unique Tax Identification Key of the company. |
| IEP | URI of the resolve API of the acceptor, which must be called to resolve the QR codes. |

## Questionnaire

To proceed with testing and approval, the Support team will also ask you to answer the following questionnaire.

1. Which administrator do you use? COELSA, Prisma, Link, or another?
2. What is the name and the IDs (for testing and production) registered with the administrator?
3. What types of QR codes do you allow? Static or dynamic?
4. Do you use open and closed amounts in the QR codes?
5. Do you have the IEP for all types of QR codes?
6. Do you have implemented full and/or partial refund processes? If not, are there plans to have them?
7. What is the expected date to enter a production environment?
8. Are you within the QRIA workspace? Can you share a contact so we can reach out to them there?
9. Could you attach the necessary QR codes for Mercado Pago to carry out the necessary tests?
10. What are the contact emails in case we have questions? Please note that these emails may be added to the Support ticket later.

Once all the requested information is provided, the Support team will communicate the schedule of the tests and their results to the requesting wallet.