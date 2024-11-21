# Pagamentos online

O Mercado Pago oferece diversas soluções de cobrança para quem vende em sites e lojas online, adaptadas às diferentes necessidades de vendas e integração. 

Agora é possível começar a implementar essas soluções usando Order API, nossa API unificada. Veja abaixo as principais diferenças com a API de Pagamentos:

| Funcionalidade  |  API de Pagamentos  | API de Order |
| --- | --- |--- |
| Modo  | Automático  | Automático e manual |
| Operações  | Pagamentos  | Pagamentos online e [Pagamentos presenciais](/developers/pt/docs/order/in-store-payments/introduction) (QR e Point).|
| Múltiplas transações  | Não possui | Possui |
| Envio de metadados  | Permite  | Não permite |
| Envio de Notification Url  | Permite no _payload_.  | Não permite no _payload_ e deve ser configurado em [Suas integrações > Detalhes da aplicação](/developers/pt/docs/order/additional-content/your-integrations/application-details). |
| Validações com respostas de erros completas  | Valida um erro por vez.  | Retorna uma lista com todos os erros. |
| Retorno de dados PII | Retorna em alguns cenários (ex: aprovado.).  | Não retorna em nenhum cenário. |

Saiba quais opções estão disponíveis atualmente para integrar pagamentos online usando a API de Order.

----[mlb]----

---
future_product_avaible:
 - card_avaible: true
 - card_icon: Card
 - card_title: Checkout Transparente
 - card_description: Permite que todo o processo de finalização de compra, desde o preenchimento de dados do usuário até a realização do pagamento aconteça em um único ambiente, sem a necessidade de redirecionamento para uma página externa à sua loja.
 - card_button: /developers/pt/docs/order/online-payments/prerequisites
 - card_buttonDescription: Saiba mais
 - card_pillText: DISPONÍVEL
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
 - card_description: Permite que todo o processo de finalização de compra, desde o preenchimento de dados do usuário até a realização do pagamento aconteça em um único ambiente, sem a necessidade de redirecionamento para uma página externa à sua loja.
 - card_button: /developers/pt/docs/order/online-payments/prerequisites
 - card_buttonDescription: Saiba mais
 - card_pillText: DISPONÍVEL
 - card_linkAvailable: false
 - card_linkProof:
 - card_linkProofDescription:
 - card_linkAvailable: true
---

------------
