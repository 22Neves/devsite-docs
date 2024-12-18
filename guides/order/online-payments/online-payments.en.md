# Online payments

Mercado Pago offers a variety of collection solutions for those who sell through websites and online stores, adapted to different sales and integration needs. 

Now, you can start implementing these solutions using Order API, our unified API. See below the main differences with the Payments API:

| Functionality | Payments API | Order API |
| --- | --- |--- |
| Mode | Automatic | Automatic and manual. |
| Operations | Payments | Online payments and In-store payments (Mercado Pago's Point).|
| Multiple transactions | ❌| ✅ |
| Sending metadata | ✅ | ❌ |
| Sending Notification URL | Allows in the payload. | Does not allow in the payload and must be configured in [Your integrations > Application details](/developers/en/docs/order/additional-content/your-integrations/application-details). |
| Validations with complete error responses | Validates one error at a time. | Returns a list of all errors. |
| Return of PII data | Returns in some scenarios (e.g., approved). | Does not return in any scenario. |

Learn what options are currently available to integrate online payments using the Order API.

----[mlb]----

---
future_product_avaible:
 - card_avaible: true
 - card_icon: Card
 - card_title: Checkout Transparente
 - card_description: Allows the entire checkout process, from filling in user information to completing the payment, to take place in a single environment without the need to redirect to an external page outside your store.
 - card_button: /developers/en/docs/order/online-payments/prerequisites
 - card_buttonDescription: Learn more
 - card_pillText: AVAILABLE
 - card_linkAvailable: false
 - card_linkProof:
 - card_linkProofDescription:
 - card_linkAvailable: true
---

------------
----[mla, mlm]----
---
future_product_avaible:
 - card_avaible: true
 - card_icon: Card
 - card_title: Checkout API
 - card_description: Allows the entire checkout process, from filling in user information to completing the payment, to take place in a single environment without the need to redirect to an external page outside your store.
 - card_button: /developers/en/docs/order/online-payments/prerequisites
 - card_buttonDescription: Learn more
 - card_pillText: AVAILABLE
 - card_linkAvailable: false
 - card_linkProof:
 - card_linkProofDescription:
 - card_linkAvailable: true
---

------------