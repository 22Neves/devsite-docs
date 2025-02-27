# Glossário

Veja a descrição de cada campo presente no relatório na tabela abaixo.

----[mla]----

| Nome da coluna do relatório | O que significa | Tipo de dado <br> (longitude máxima) |
|---|---|---|
| Código de referência (`EXTERNAL_REFERENCE`) |  ID que ajuda a identificar a origem da operação. Por exemplo, pode ser a venda através do ID do pedido ou do envio (se for uma compra de carrinho) ou o próprio ID fornecido pelo vendedor no caso de uma integração externa.<br><br> Lembre-se que é possível que este campo esteja vazio para alguns casos, como pagamento de boletos ou envio de dinheiro, entre outros. <br>  | String <br> (255) |
| ID da operação no Mercado Pago (`SOURCE_ID`) | ID da transação no Mercado Pago (por exemplo, o pagamento de uma venda). Este campo pode conter valores alfanuméricos. | String <br> (100) |
| Código da conta do vendedor (`USER_ID`) | Código da conta do vendedor. (Cust ID). | String <br> (19) |
| Meio de pagamento (`PAYMENT_METHOD`) | Confira os [meios de pagamento disponíveis](/developers/pt/docs/sales-processing/payment-methods) de acordo com o país no qual você opera com o Mercado Pago. | String <br> (50) |
| Tipo de meio de pagamento (`PAYMENT_METHOD_TYPE`) | Tipo de meio de pagamento. Pode ser:<br><br>*credit_card*: cartão de crédito.<br>*debit_card*: cartão de débito.<br>*bank_transfer*: transferência.<br>*atm*: caixa eletrônico.<br>*ticket*: à vista<br>*account_money*: dinheiro em conta.<br>*prepaid_card*: cartão pré-pago.<br> | String <br> (200) |
| País de origem da conta do Mercado Pago (`SITE`) | MLA: Argentina| String <br> (200) |
| Tipo de operação (`TRANSACTION_TYPE`) | Tipo de operação. Pode ser:<br><br> Pagamento aprovado (SETTLEMENT): pagamento aprovado.<br> Devolução de dinheiro (REFUND): pagamento totalmente devolvido ou devolução parcial.<br>Contestação (CHARGEBACK)  o comprador fez uma contestação (desconhece o pagamento) no seu cartão de crédito.<br>Contestação (DISPUTE): o comprador iniciou uma reclamação por esse pagamento.<br>Transferência (WITHDRAWAL): retirada para a conta bancária.<br> Cancelamento da transferência (WITHDRAWAL_CANCEL): retirada para a conta bancária que foi cancelada.<br>Saque (PAYOUT) saque em dinheiro ou transferência por PIX de saldo disponível no Mercado Pago. <br> | String <br> (200) |
| Valor da compra (`TRANSACTION_AMOUNT`) | Valor bruto da transação. | Numeric <br> (17) |
| Moeda (`TRANSACTION_CURRENCY`) | Moeda:<br><br>MXN (Peso mexicano)<br>CLP (Peso Chileno)<br>ARS (Peso Argentino)<br>BRL (Real Brasileiro)<br>EN (Sol Peruano)<br>COP (Peso Colombiano)<br>UYU (Peso Uruguayo)<br>VES (Bolivar Venezolano)<br> | String <br> (10) |
| Valor recebido por compras com split de pagamento (`SELLER_AMOUNT`) | Valor recebido por compras com split. | Numeric <br> (17) |
| Data de origem (`TRANSACTION_DATE`) | Data de criação da transação. | DateTime <br> (yyyy-MM-dd'T'HH:mm:ssZ) |
| Tarifas IVA (`FEE_AMOUNT`) | É a somatória das tarifas de processamento, shipping, financiamento e boleto, se foi assumido pelo vendedor. Incluir IVA. | Numeric <br> (17) |
| Valor líquido da operação que impactou no dinheiro (`SETTLEMENT_NET_AMOUNT`) | Valor líquido da transação que impactou o dinheiro em conta. Foram descontadas todas as comissões envolvidas da valor da compra (`TRANSACTION_AMOUNT`). | Numeric <br> (17) |
| Moeda da liquidação (`SETTLEMENT_CURRENCY`) | Moeda:<br><br> MXN (Peso mexicano)<br>CLP (Peso Chileno)<br>ARS (Peso Argentino)<br>BRL (Real Brasileiro)<br>PEN (Sol Peruano)<br>COP (Peso Colombiano)<br>UYU (Peso Uruguayo)<br>VES (Bolivar Venezolano)<br> | String <br> (10) |
| Data de aprovação (`SETTLEMENT_DATE`) | Data de aprovação da transação. | DateTime <br> (yyyy-MM-dd'T'HH:mm:ssZ) |
| Valor líquido da operação (`REAL_AMOUNT`) | Valor líquido da transação, se é um settlement, os valores para estornos, reclamações ou devoluções são descontados. | Numeric <br> (17) |
| Cupom de desconto (`COUPON_AMOUNT`) | Valor do cupom de desconto. **Apenas o valor bruto** (`TRANSACTION_AMOUNT`) **é descontado se fornecido pelo vendedor**. | Numeric <br> (17) |
| Dados adicionais (`METADATA`) | Dados extras, como por exemplo, o ID dos reembolsos parciais ou dados fornecidos pelo vendedor no caso de integrações externas. | String <br> (JSON) |
| Tarifa do Mercado Livre + IVA (`MKP_FEE_AMOUNT`) | Tarifa do Mercado Livre. Incluir IVA. | Numeric <br> (17) |
| Tarifa por oferecer parcelas sem acréscimo (`FINANCING_FEE_AMOUNT`) | Custo de oferecer parcelamento quando o custo dessa comissão for assumido pelo seller. | Numeric <br> (17) |
| Frete (`SHIPPING_FEE_AMOUNT`) | Custo de envio. | Numeric <br> (17) |
| Impostos cobrados por retenções de IIBB (`TAXES_AMOUNT`) |  Impostos cobrados por retenção de Receita Bruta na fonte, IVA, Lucros; e impostos sobre Créditos e Débitos, entre outros. [Saiba mais sobre retenções e impostos.](https://vendedores.mercadolibre.com.ar/nota/retenciones-y-percepciones-sobre-tus-ventas-lo-que-debes-saber/) | Numeric <br> (17) |
| Parcelas (`INSTALLMENTS`) | Número de parcelas em que a transação foi realizada. | Numeric <br> (2) |
| Detalhes dos impostos (`TAX_DETAIL`) | Descrição do imposto retido por transação `TAXES_AMOUNT`. Você pode considerar os seguintes valores conforme a jurisdição: <br><br> cordoba<br>corrientes<br>mendoza<br>la_pampa<br>santa_fe<br>tucuman<br>entre_rios<br>catamarca<br>neuquen<br>santiago_del_estero<br>rio_negro<br>jujuy <br> | String <br> (50) |
| ID do caixa (`POS_ID`) | ID do caixa, se o pagamento é feito através de um comércio físico. | String <br> (50) |
| Nome do caixa (`POS_NAME`) | Nome do caixa para o pagamento realizado em um comércio físico. | String <br> (200) |
| ID do caixa, definido pelo usuário (`EXTERNAL_POS_ID`) | ID do caixa definido pelo usuário para o pagamento realizado em um comércio físico. | String <br> (100) |
| ID da loja (`STORE_ID`) | ID da loja se o pagamento é feito em um comércio físico. | String <br> (50) |
| Nome da loja  (`STORE_NAME`) | Nome da loja para o pagamento feito em um comércio físico. | String <br> (200) |
| ID da loja, definido pelo usuário (`EXTERNAL_STORE_ID`) | ID da loja definido pelo usuário para o pagamento feito em um comércio físico. | String <br> (100) |
| ID do pedido (`ORDER_ID`) | Ordem de compra. | Numeric <br> (19) |
| ID do envio (`SHIPPING_ID`) | Identificador de envio. | Numeric <br> (19) |
| Forma de envio (`SHIPMENT_MODE`) | Modalidade de envio. | String <br> (10) |
| ID do pacote (`PACK_ID`) | Identificador do pacote no carrinho. | Numeric <br> (19) |
| Impostos desagregados (`TAXES_DISAGGREGATED`) | Detalhamento dos impostos no formato JSON. | String <br> (255) |
| Número de série da maquininha (S/N) (`POI_ID`) | ID da maquininha se o pagamento é feito em uma loja física. | String <br> (50) |
| Carteira digital (`POI_WALLET_NAME`) | Nome da carteira digital de onde um pagamento virtual saiu. Permite identificar a origem de uma transação quando você cobra com um [código QR interoperável](https://vendedores.mercadolibre.com.ar/nota/cobra-a-otras-billeteras-con-tu-qr-de-mercado-pago). | String <br> (200) |
| Banco de origem (`POI_BANK_NAME`) | Nome da instituição bancária de onde um pagamento virtual saiu. Permite identificar a origem de uma transação quando você cobra com um [código QR interoperável](https://vendedores.mercadolibre.com.ar/nota/cobra-a-otras-billeteras-con-tu-qr-de-mercado-pago). | String <br> (200) |
| Descrição (`DESCRIPTION`) | Ajuda a identificar transações ou operações registradas em um período de tempo.<br> Quando se tratar de pagamento parcelado, a linha será identificada como "INSTALLMENT". | String <br> (50) |
| Data de liberação do dinheiro (`MONEY_RELEASE_DATE`) | Data de previsão da liberação do pagamento de cada parcela ou da parcela única. | DateTime <br> (yyyy-MM-dd'T'HH:mm:ssZ) |
| Cartão do seu comprador (`CARD_INITIAL_NUMBER`) | Corresponde aos primeiros dígitos do cartão de crédito ou débito utilizado para fazer a compra. | Numeric <br> (6) |
| Etiquetas da transação (`OPERATION_TAGS`) | São etiquetas para categorizar e/ou segmentar diferentes aspectos da transação, como por exemplo, os canais usados para fazer um pagamento. Eles são identificados como: <br><br>  - Pagamento via WhatsApp (WHATSAPP_PAY) Esta etiqueta indica que o pagamento foi feito via WhatsApp. | String <br> (JSON) | 
| Nome do pagador (`PAYER_NAME`) | Nome de quem faz o pagamento. | String <br> (255) |
| Tipo de ID do pagador (`PAYER_ID_TYPE`) | Tipo de identificação de quem faz um pagamento ou doação. | String <br> (200) |
| ID do pagador (`PAYER_ID_NUMBER`) | Número de identificação de quem faz um pagamento ou doação. |String <br> (100) |
| Canal de venda (`BUSINESS_UNIT`) | Corresponde ao canal pelo qual uma venda foi gerada. Os canais são Mercado Pago, Mercado Livre, Mercado Shops e Delivery. | String <br> (255) |
| Plataforma de pagamento (`SUB_UNIT`) | Permite identificar o meio de pagamento usado para cobrar por uma venda com o Mercado Pago. | String <br> (255) |
| Código do produto SKU (`PRODUCT_SKU`) | Código SKU, com o qual você poderá identificar seus produtos vendidos. | String <br> (200) |
| Detalhe da venda (`SALE_DETAIL`) | Esta coluna apresenta informações detalhadas sobre os produtos vendidos, facilitando a reconciliação e o controle das suas vendas. Cada entrada nesta coluna mostra o primeiro elemento da venda, seguido do agrupamento dos demais produtos. É importante observar que, devido ao espaço, apenas os primeiros 100 caracteres do nome do produto serão mostrados. | String <br> (500) |

------------
----[mlb]----

| Nome da coluna do relatório | O que significa | Tipo de dado <br> (longitude máxima) |
|---|---|---|
| Código de referência (`EXTERNAL_REFERENCE`) |  ID que ajuda a identificar a origem da operação. Por exemplo, pode ser a venda através do ID do pedido ou do envio (se for uma compra de carrinho) ou o próprio ID fornecido pelo vendedor no caso de uma integração externa.<br><br> Lembre-se que é possível que este campo esteja vazio para alguns casos, como pagamento de boletos ou envio de dinheiro, entre outros. <br>  | String <br> (255) |
| ID da operação no Mercado Pago (`SOURCE_ID`) | ID da transação no Mercado Pago (por exemplo, o pagamento de uma venda). Este campo pode conter valores alfanuméricos. | String <br> (100) |
| Código da conta do vendedor (`USER_ID`) | Código da conta do vendedor. (Cust ID). | String <br> (19) |
| Meio de pagamento (`PAYMENT_METHOD`) | Confira os [meios de pagamento disponíveis](/developers/pt/docs/sales-processing/payment-methods) de acordo com o país no qual você opera com o Mercado Pago. | String <br> (50) |
| Tipo de meio de pagamento (`PAYMENT_METHOD_TYPE`) | Tipo de meio de pagamento. Pode ser:<br><br>*credit_card*: cartão de crédito.<br>*debit_card*: cartão de débito.<br>*bank_transfer*: transferência.<br>*atm*: caixa eletrônico.<br>*ticket*: à vista<br>*account_money*: dinheiro em conta.<br>*PIX*:transferência.<br>*prepaid_card*: cartão pré-pago.<br> | String <br> (200) |
| País de origem da conta do Mercado Pago (`SITE`) | MLB: Brasil | String <br> (200) |
| Tipo de operação (`TRANSACTION_TYPE`) | Tipo de operação. Pode ser:<br><br> Pagamento aprovado (SETTLEMENT): pagamento aprovado.<br>Contestação (CHARGEBACK)  o comprador fez uma contestação (desconhece o pagamento) no seu cartão de crédito.<br>Contestação (DISPUTE): o comprador iniciou uma reclamação por esse pagamento.<br>Transferência (WITHDRAWAL): retirada para a conta bancária.<br> Cancelamento da transferência (WITHDRAWAL_CANCEL): retirada para a conta bancária que foi cancelada.<br>Saque (PAYOUT) saque em dinheiro ou transferência por PIX de saldo disponível no Mercado Pago.<br> Trava de recebível (TRAVA_DE_RECEBIVEL): trava de recebível. <br> | String <br> (200) |
| Valor da compra (`TRANSACTION_AMOUNT`) | Valor bruto da transação. | Numeric <br> (17) |
| Moeda (`TRANSACTION_CURRENCY`) | Moeda:<br><br>MXN (Peso mexicano)<br>CLP (Peso Chileno)<br>ARS (Peso Argentino)<br>BRL (Real Brasileiro)<br>EN (Sol Peruano)<br>COP (Peso Colombiano)<br>UYU (Peso Uruguayo)<br>VES (Bolivar Venezolano)<br> | String <br> (10) |
| Valor recebido por compras com split de pagamento (`SELLER_AMOUNT`) | Valor recebido por compras com split. | Numeric <br> (17) |
| Data de origem (`TRANSACTION_DATE`) | Data de criação da transação. | DateTime <br> (yyyy-MM-dd'T'HH:mm:ssZ) |
| Tarifas (`FEE_AMOUNT`) | É a somatória das tarifas de processamento, shipping, financiamento e boleto, se foi assumido pelo vendedor. | Numeric <br> (17) |
| Valor líquido da operação que impactou no dinheiro (`SETTLEMENT_NET_AMOUNT`) | Valor líquido da transação que impactou o dinheiro em conta. Foram descontadas todas as comissões envolvidas da valor da compra (`TRANSACTION_AMOUNT`). | Numeric <br> (17) |
| Moeda da liquidação (`SETTLEMENT_CURRENCY`) | Moeda:<br><br> MXN (Peso mexicano)<br>CLP (Peso Chileno)<br>ARS (Peso Argentino)<br>BRL (Real Brasileiro)<br>PEN (Sol Peruano)<br>COP (Peso Colombiano)<br>UYU (Peso Uruguayo)<br>VES (Bolivar Venezolano)<br> | String <br> (10) |
| Data de aprovação (`SETTLEMENT_DATE`) | Data de aprovação da transação. | DateTime <br> (yyyy-MM-dd'T'HH:mm:ssZ) |
| Valor líquido da operação (`REAL_AMOUNT`) | Valor líquido da transação, se é um settlement, os valores para estornos, reclamações ou devoluções são descontados. | Numeric <br> (17) |
| Cupom de desconto (`COUPON_AMOUNT`) | Valor do cupom de desconto. **Apenas o valor bruto** (`TRANSACTION_AMOUNT`) **é descontado se fornecido pelo vendedor**. | Numeric <br> (17) |
| Dados adicionais (`METADATA`) | Dados extras, como por exemplo, o ID dos reembolsos parciais ou dados fornecidos pelo vendedor no caso de integrações externas. Quando "Fee discount" aparecer, entende-se como a redução na tarifa de venda pela participação em uma campanha comercial. | String <br> (JSON)  |
| Tarifa do Mercado Livre (`MKP_FEE_AMOUNT`) | Tarifa do Mercado Livre. | Numeric <br> (17) |
| Tarifa por oferecer parcelas sem acréscimo (`FINANCING_FEE_AMOUNT`) | Custo de oferecer parcelamento quando o custo dessa comissão for assumido pelo seller. | Numeric <br> (17) |
| Frete (`SHIPPING_FEE_AMOUNT`) | Custo de envio. | Numeric <br> (17) |
| Impostos cobrados por retenções (`TAXES_AMOUNT`) | Impostos cobrados. | Numeric <br> (17) |
| Parcelas (`INSTALLMENTS`) | Número de parcelas em que a transação foi realizada. | Numeric <br> (2) |
| Detalhes dos impostos (`TAX_DETAIL`) | Descrição do imposto retido por transação `TAXES_AMOUNT`.| String <br> (50) |
| ID do caixa (`POS_ID`) | ID do caixa, se o pagamento é feito através de um comércio físico. | String <br> (50) |
| Nome do caixa (`POS_NAME`) | Nome do caixa para o pagamento realizado em um comércio físico. | String <br> (200) |
| ID do caixa, definido pelo usuário (`EXTERNAL_POS_ID`) | ID do caixa definido pelo usuário para o pagamento realizado em um comércio físico. | String <br> (100) |
| ID da loja (`STORE_ID`) | ID da loja se o pagamento é feito em um comércio físico. | String <br> (50) |
| Nome da loja  (`STORE_NAME`) | Nome da loja para o pagamento feito em um comércio físico. | String <br> (200) |
| ID da loja, definido pelo usuário (`EXTERNAL_STORE_ID`) | ID da loja definido pelo usuário para o pagamento feito em um comércio físico. | String <br> (100) |
| ID do pedido (`ORDER_ID`) | Ordem de compra. | Numeric <br> (19) |
| ID do envio (`SHIPPING_ID`) | Identificador de envio. | Numeric <br> (19) |
| Forma de envio (`SHIPMENT_MODE`) | Modalidade de envio. | String <br> (10) |
| ID do pacote (`PACK_ID`) | Identificador do pacote no carrinho. | Numeric <br> (19) |
| Impostos desagregados (`TAXES_DISAGGREGATED`) | Detalhamento dos impostos no formato JSON. | String <br> (255) |
| Número de série da maquininha (S/N) (`POI_ID`) | ID da maquininha se o pagamento é feito em uma loja física. | String <br> (50) |
| Carteira digital (`POI_WALLET_NAME`) | Nome da carteira digital de onde um pagamento virtual saiu. Permite identificar a origem de uma transação quando você cobra com um código QR do Mercado Pago. | String <br> (200) |
| Banco de origem (`POI_BANK_NAME`) | Nome da instituição bancária de onde um pagamento virtual saiu. Permite identificar a origem de uma transação quando você cobra com um código QR do Mercado Pago. | String <br> (200) |
| Descrição (`DESCRIPTION`) | Ajuda a identificar transações ou operações registradas em um período de tempo.<br> Quando se tratar de pagamento parcelado, a linha será identificada como "INSTALLMENT". | String <br> (50) |
| Data de liberação do dinheiro (`MONEY_RELEASE_DATE`) | Data de previsão da liberação do pagamento de cada parcela ou da parcela única. | DateTime <br> (yyyy-MM-dd'T'HH:mm:ssZ) |
| Cartão do seu comprador (`CARD_INITIAL_NUMBER`) | Corresponde aos primeiros dígitos do cartão de crédito ou débito utilizado para fazer a compra. | Numeric <br> (6) |
| Etiquetas da transação (`OPERATION_TAGS`) | São etiquetas para categorizar e/ou segmentar diferentes aspectos da transação, como por exemplo, os canais usados para fazer um pagamento. Eles são identificados como: <br><br>  - Pagamento via WhatsApp (WHATSAPP_PAY) Esta etiqueta indica que o pagamento foi feito via WhatsApp <br> -   Pix Saque (CASHOUT): Esta etiqueta indica que a transação corresponde a um Pix Saque <br> -   Pix Troco (EXTRACASHOUT): Esta etiqueta indica que a transação corresponde a um Pix Troco <br> -   Pix (PIX): Esta etiqueta indica que a transação corresponde a um pagamento via Pix. | String <br> (JSON) | 
| Número da parcela (`INSTALLMENT_NUMBER`*) | Indica o número da parcela que será paga, do total de parcelas contratadas. Essa informação aparece quando o cliente solicita o parcelamento da compra.<br><br> Por exemplo: 2 / 5 indica o pagamento da segunda parcela, de um total das 5 parcelas contratadas.<br> Quando o pagamento é liberado em uma única parcela essa coluna não estará preenchida. | Numeric <br> (17) |
| Valor liquido da parcela (`INSTALLMENT_NET_AMOUNT`*) | Mostra o valor líquido da parcela que será paga.<br> Essa informação aparece quando o cliente escolhe pagar o valor total da compra em parcelas mensais. | Numeric <br> (17) | 
| Canal de venda (`BUSINESS_UNIT`) | Corresponde ao canal pelo qual uma venda foi gerada. Os canais são Mercado Pago, Mercado Livre, Mercado Shops e Delivery. | String <br> (255) |
| Plataforma de pagamento (`SUB_UNIT`) | Permite identificar o meio de pagamento usado para cobrar por uma venda com o Mercado Pago. | String <br> (255) |
| Código do produto SKU (`PRODUCT_SKU`) | Código SKU, com o qual você poderá identificar seus produtos vendidos. | String <br> (200) |
| Detalhe da venda (`SALE_DETAIL`) | Esta coluna apresenta informações detalhadas sobre os produtos vendidos, facilitando a reconciliação e o controle das suas vendas. Cada entrada nesta coluna mostra o primeiro elemento da venda, seguido do agrupamento dos demais produtos. É importante observar que, devido ao espaço, apenas os primeiros 100 caracteres do nome do produto serão mostrados. | String <br> (500) |

------------
----[mlu]----

| Nome da coluna do relatório | O que significa | Tipo de dado <br> (longitude máxima) |
|---|---|---|
| Código de referência (`EXTERNAL_REFERENCE`) |  ID que ajuda a identificar a origem da operação. Por exemplo, pode ser a venda através do ID do pedido ou do envio (se for uma compra de carrinho) ou o próprio ID fornecido pelo vendedor no caso de uma integração externa.<br><br> Lembre-se que é possível que este campo esteja vazio para alguns casos, como pagamento de boletos ou envio de dinheiro, entre outros. <br>  | String <br> (255) |
| ID da operação no Mercado Pago (`SOURCE_ID`) | ID da transação no Mercado Pago (por exemplo, o pagamento de uma venda). Este campo pode conter valores alfanuméricos. | String <br> (100) |
| Código da conta do vendedor (`USER_ID`) | Código da conta do vendedor. (Cust ID). | String <br> (19) |
| Meio de pagamento (`PAYMENT_METHOD`) | Confira os [meios de pagamento disponíveis](/developers/pt/docs/sales-processing/payment-methods) de acordo com o país no qual você opera com o Mercado Pago. | String <br> (50) |
| Tipo de meio de pagamento (`PAYMENT_METHOD_TYPE`) | Tipo de meio de pagamento. Pode ser:<br><br>*credit_card*: cartão de crédito.<br>*debit_card*: cartão de débito.<br>*bank_transfer*: transferência.<br>*atm*: caixa eletrônico.<br>*ticket*: à vista<br>*account_money*: dinheiro em conta.<br>*prepaid_card*: cartão pré-pago.<br>  | String <br> (200) |
| País de origem da conta do Mercado Pago (`SITE`) | MLU: Uruguay | String <br> (200) |
| Tipo de operação (`TRANSACTION_TYPE`) | Tipo de operação. Pode ser:<br><br> Pagamento aprovado (SETTLEMENT): pagamento aprovado.<br> Devolução de dinheiro (REFUND): pagamento totalmente devolvido ou devolução parcial.<br>Contestação (CHARGEBACK)  o comprador fez uma contestação (desconhece o pagamento) no seu cartão de crédito.<br>Contestação (DISPUTE): o comprador iniciou uma reclamação por esse pagamento.<br>Transferência (WITHDRAWAL): retirada para a conta bancária.<br> Cancelamento da transferência (WITHDRAWAL_CANCEL): retirada para a conta bancária que foi cancelada.<br>Saque (PAYOUT) saque em dinheiro ou transferência por PIX de saldo disponível no Mercado Pago. | String <br> (200) |
| Valor da compra (`TRANSACTION_AMOUNT`) | Valor bruto da transação. | Numeric <br> (17) |
| Moeda (`TRANSACTION_CURRENCY`) | Moeda:<br><br>MXN (Peso mexicano)<br>CLP (Peso Chileno)<br>ARS (Peso Argentino)<br>BRL (Real Brasileiro)<br>EN (Sol Peruano)<br>COP (Peso Colombiano)<br>UYU (Peso Uruguayo)<br>VES (Bolivar Venezolano)<br> | String <br> (10) |
| Valor recebido por compras com split de pagamento (`SELLER_AMOUNT`) | Valor recebido por compras com split. | Numeric <br> (17) |
| Data de origem (`TRANSACTION_DATE`) | Data de criação da transação. | DateTime <br> (yyyy-MM-dd'T'HH:mm:ssZ) |
| Tarifas + IVA (`FEE_AMOUNT`) | É a somatória das tarifas de processamento, shipping, financiamento e boleto, se foi assumido pelo vendedor. Incluir IVA. | Numeric <br> (17) |
| Valor líquido da operação que impactou no dinheiro (`SETTLEMENT_NET_AMOUNT`) | Valor líquido da transação que impactou o dinheiro em conta. Foram descontadas todas as comissões envolvidas da valor da compra (`TRANSACTION_AMOUNT`). | Numeric <br> (17) |
| Moeda da liquidação (`SETTLEMENT_CURRENCY`) | Moeda:<br><br> MXN (Peso mexicano)<br>CLP (Peso Chileno)<br>ARS (Peso Argentino)<br>BRL (Real Brasileiro)<br>PEN (Sol Peruano)<br>COP (Peso Colombiano)<br>UYU (Peso Uruguayo)<br>VES (Bolivar Venezolano)<br> | String <br> (10) |
| Data de aprovação (`SETTLEMENT_DATE`) | Data de aprovação da transação. | DateTime <br> (yyyy-MM-dd'T'HH:mm:ssZ) |
| Valor líquido da operação (`REAL_AMOUNT`) | Valor líquido da transação, se é um settlement, os valores para estornos, reclamações ou devoluções são descontados. | Numeric <br> (17) |
| Cupom de desconto (`COUPON_AMOUNT`) | Valor do cupom de desconto. **Apenas o valor bruto** (`TRANSACTION_AMOUNT`) **é descontado se fornecido pelo vendedor**. | Numeric <br> (17) |
| Dados adicionais (`METADATA`) | Dados extras, como por exemplo, o ID dos reembolsos parciais ou dados fornecidos pelo vendedor no caso de integrações externas. | String <br> (JSON)  |
| Tarifa do Mercado Livre + IVA (`MKP_FEE_AMOUNT`) | Tarifa do Mercado Livre. Incluir IVA. | Numeric <br> (17) |
| Tarifa por oferecer parcelas sem acréscimo (`FINANCING_FEE_AMOUNT`) | Custo de oferecer parcelamento quando o custo dessa comissão for assumido pelo seller. | Numeric <br> (17) |
| Frete (`SHIPPING_FEE_AMOUNT`) | Custo de envio. | Numeric <br> (17) |
| Impostos cobrados por retenções de IIBB (`TAXES_AMOUNT`) | Impostos cobrados por retenção de IVA. | Numeric <br> (17) |
| Parcelas (`INSTALLMENTS`) | Número de parcelas em que a transação foi realizada. | Numeric <br> (2) |
| `TAX_AMOUNT_TELCO`  | É o valor do imposto sobre as empresas de telecomunicações que é deduzido do valor bruto. | Numeric <br> (17) | 
| Detalhes dos impostos (`TAX_DETAIL`) | Descrição do imposto retido por transação `TAXES_AMOUNT`. | String <br> (50) |
| ID do caixa (`POS_ID`) | ID do caixa, se o pagamento é feito através de um comércio físico. | String <br> (50) |
| Nome do caixa (`POS_NAME`) | Nome do caixa para o pagamento realizado em um comércio físico. | String <br> (200) |
| ID do caixa, definido pelo usuário (`EXTERNAL_POS_ID`) | ID do caixa definido pelo usuário para o pagamento realizado em um comércio físico. | String <br> (100) |
| ID da loja (`STORE_ID`) | ID da loja se o pagamento é feito em um comércio físico. | String <br> (50) |
| Nome da loja  (`STORE_NAME`) | Nome da loja para o pagamento feito em um comércio físico. | String <br> (200) |
| ID da loja, definido pelo usuário (`EXTERNAL_STORE_ID`) | ID da loja definido pelo usuário para o pagamento feito em um comércio físico. | String <br> (100) |
| ID do pedido (`ORDER_ID`) | Ordem de compra. | Numeric <br> (19) |
| ID do envio (`SHIPPING_ID`) | Identificador de envio. | Numeric <br> (19) |
| Forma de envio (`SHIPMENT_MODE`) | Modalidade de envio. | String <br> (10) |
| ID do pacote (`PACK_ID`) | Identificador do pacote no carrinho. | Numeric <br> (19) |
| Impostos desagregados (`TAXES_DISAGGREGATED`) | Detalhamento dos impostos no formato JSON. | String <br> (255) |
| Número de série da maquininha (S/N) (`POI_ID`) | ID da maquininha se o pagamento é feito em uma loja física. | String <br> (50) |
| Carteira digital (`POI_WALLET_NAME`) | Nome da carteira digital de onde um pagamento virtual saiu. Permite identificar a origem de uma transação quando você cobra com um código QR do Mercado Pago. | String <br> (200) |
| Banco de origem (`POI_BANK_NAME`) | Nome da instituição bancária de onde um pagamento virtual saiu. Permite identificar a origem de uma transação quando você cobra com um código QR do Mercado Pago. | String <br> (200) |
| Descrição (`DESCRIPTION`) | Ajuda a identificar transações ou operações registradas em um período de tempo.<br> Quando se tratar de pagamento parcelado, a linha será identificada como "INSTALLMENT". | String <br> (50) |
| Data de liberação do dinheiro (`MONEY_RELEASE_DATE`) | Data de previsão da liberação do pagamento de cada parcela ou da parcela única. | DateTime <br> (yyyy-MM-dd'T'HH:mm:ssZ) |
| Cartão do seu comprador (`CARD_INITIAL_NUMBER`) | Corresponde aos primeiros dígitos do cartão de crédito ou débito utilizado para fazer a compra. | Numeric <br> (6) |
| Etiquetas da transação (`OPERATION_TAGS`) | São etiquetas para categorizar e/ou segmentar diferentes aspectos da transação, como por exemplo, os canais usados para fazer um pagamento. Eles são identificados como: <br><br>  - Pagamento via WhatsApp (WHATSAPP_PAY): esta etiqueta indica que o pagamento foi feito via WhatsApp. | String <br> (JSON) | 
| Canal de venda (`BUSINESS_UNIT`) | Corresponde ao canal pelo qual uma venda foi gerada. Os canais são Mercado Pago, Mercado Livre, Mercado Shops e Delivery. | String <br> (255) |
| Plataforma de pagamento (`SUB_UNIT`) | Permite identificar o meio de pagamento usado para cobrar por uma venda com o Mercado Pago. | String <br> (255) |
| Código do produto SKU (`PRODUCT_SKU`) | Código SKU, com o qual você poderá identificar seus produtos vendidos. | String <br> (200) |
| Detalhe da venda (`SALE_DETAIL`) | Esta coluna apresenta informações detalhadas sobre os produtos vendidos, facilitando a reconciliação e o controle das suas vendas. Cada entrada nesta coluna mostra o primeiro elemento da venda, seguido do agrupamento dos demais produtos. É importante observar que, devido ao espaço, apenas os primeiros 100 caracteres do nome do produto serão mostrados. | String <br> (500) |

------------
----[mco]----

| Nome da coluna do relatório | O que significa | Tipo de dado <br> (longitude máxima) |
|---|---|---|
| Código de referência (`EXTERNAL_REFERENCE`) |  ID que ajuda a identificar a origem da operação. Por exemplo, pode ser a venda através do ID do pedido ou do envio (se for uma compra de carrinho) ou o próprio ID fornecido pelo vendedor no caso de uma integração externa.<br><br> Lembre-se que é possível que este campo esteja vazio para alguns casos, como pagamento de boletos ou envio de dinheiro, entre outros. <br>  | String <br> (255) |
| ID da operação no Mercado Pago (`SOURCE_ID`) | ID da transação no Mercado Pago (por exemplo, o pagamento de uma venda). Este campo pode conter valores alfanuméricos. | String <br> (100) |
| Código da conta do vendedor (`USER_ID`) | Código da conta do vendedor. (Cust ID). | String <br> (19) |
| Meio de pagamento (`PAYMENT_METHOD`) | Confira os [meios de pagamento disponíveis](/developers/pt/docs/sales-processing/payment-methods) de acordo com o país no qual você opera com o Mercado Pago. | String <br> (50) |
| Tipo de meio de pagamento (`PAYMENT_METHOD_TYPE`) | Tipo de meio de pagamento. Pode ser:<br><br>*credit_card*: cartão de crédito.<br>*debit_card*: cartão de débito.<br>*bank_transfer*: transferência.<br>*atm*: caixa eletrônico.<br>*ticket*: à vista<br>*account_money*: dinheiro em conta.<br>*prepaid_card*: cartão pré-pago.<br> | String <br> (200) |
| País de origem da conta do Mercado Pago (`SITE`) | MCO: Colombia | String <br> (200) |
| Tipo de operação (`TRANSACTION_TYPE`) | Tipo de operação. Pode ser:<br><br> Pagamento aprovado (SETTLEMENT): pagamento aprovado.<br> Devolução de dinheiro (REFUND): pagamento totalmente devolvido ou devolução parcial.<br>Contestação (CHARGEBACK)  o comprador fez uma contestação (desconhece o pagamento) no seu cartão de crédito.<br>Contestação (DISPUTE): o comprador iniciou uma reclamação por esse pagamento.<br>Transferência (WITHDRAWAL): retirada para a conta bancária.<br> Cancelamento da transferência (WITHDRAWAL_CANCEL): retirada para a conta bancária que foi cancelada.<br>Saque (PAYOUT) saque em dinheiro ou transferência por PIX de saldo disponível no Mercado Pago. | String <br> (200) |
| Valor da compra (`TRANSACTION_AMOUNT`) | Valor bruto da transação. | Numeric <br> (17) |
| Moeda (`TRANSACTION_CURRENCY`) | Moeda:<br><br>MXN (Peso mexicano)<br>CLP (Peso Chileno)<br>ARS (Peso Argentino)<br>BRL (Real Brasileiro)<br>EN (Sol Peruano)<br>COP (Peso Colombiano)<br>UYU (Peso Uruguayo)<br>VES (Bolivar Venezolano)<br> | String <br> (10) |
| Valor recebido por compras com split de pagamento (`SELLER_AMOUNT`) | Valor recebido por compras com split. | Numeric <br> (17) |
| Data de origem (`TRANSACTION_DATE`) | Data de criação da transação. | DateTime <br> (yyyy-MM-dd'T'HH:mm:ssZ) |
| Tarifas + IVA (`FEE_AMOUNT`) | É a somatória das tarifas de processamento, shipping, financiamento e boleto, se foi assumido pelo vendedor. Incluir IVA. | Numeric <br> (17) |
| Valor líquido da operação que impactou no dinheiro (`SETTLEMENT_NET_AMOUNT`) | Valor líquido da transação que impactou o dinheiro em conta. Foram descontadas todas as comissões envolvidas da valor da compra (`TRANSACTION_AMOUNT`). | Numeric <br> (17) |
| Moeda da liquidação (`SETTLEMENT_CURRENCY`) | Moeda:<br><br> MXN (Peso mexicano)<br>CLP (Peso Chileno)<br>ARS (Peso Argentino)<br>BRL (Real Brasileiro)<br>PEN (Sol Peruano)<br>COP (Peso Colombiano)<br>UYU (Peso Uruguayo)<br>VES (Bolivar Venezolano)<br> | String <br> (10) |
| Data de aprovação (`SETTLEMENT_DATE`) | Data de aprovação da transação. | DateTime <br> (yyyy-MM-dd'T'HH:mm:ssZ) |
| Valor líquido da operação (`REAL_AMOUNT`) | Valor líquido da transação, se é um settlement, os valores para estornos, reclamações ou devoluções são descontados. | Numeric <br> (17) |
| Cupom de desconto (`COUPON_AMOUNT`) | Valor do cupom de desconto. **Apenas o valor bruto** (`TRANSACTION_AMOUNT`) **é descontado se fornecido pelo vendedor**. | Numeric <br> (17) |
| Dados adicionais (`METADATA`) | Dados extras, como por exemplo, o ID dos reembolsos parciais ou dados fornecidos pelo vendedor no caso de integrações externas. | String <br> (JSON)  |
| Tarifa do Mercado Livre + IVA (`MKP_FEE_AMOUNT`) | Tarifa do Mercado Livre. Incluir IVA. | Numeric <br> (17) |
| Tarifa por oferecer parcelas sem acréscimo (`FINANCING_FEE_AMOUNT`) | Custo de oferecer parcelamento quando o custo dessa comissão for assumido pelo seller. | Numeric <br> (17) |
| Frete (`SHIPPING_FEE_AMOUNT`) | Custo de envio. | Numeric <br> (17) |
| Impostos cobrados por retenções de IIBB (`TAXES_AMOUNT`) | Impostos cobrados por retenção de IVA, ICA e fonte. | Numeric <br> (17) |
| Parcelas (`INSTALLMENTS`) | Número de parcelas em que a transação foi realizada. | Numeric <br> (2) |
| `TAX_AMOUNT_TELCO`  | Descrição do imposto retido por operação no `TAXES_AMOUNT`. O valor pode ser:<br><br> fuente<br>iva<br>ica<br><br>  | Numeric <br> (17) | 
| Detalhes dos impostos (`TAX_DETAIL`) | Descrição do imposto retido por transação `TAXES_AMOUNT`. | String <br> (50) |
| ID do caixa (`POS_ID`) | ID do caixa, se o pagamento é feito através de um comércio físico. | String <br> (50) |
| Nome do caixa (`POS_NAME`) | Nome do caixa para o pagamento realizado em um comércio físico. | String <br> (200) |
| ID do caixa, definido pelo usuário (`EXTERNAL_POS_ID`) | ID do caixa definido pelo usuário para o pagamento realizado em um comércio físico. | String <br> (100) |
| ID da loja (`STORE_ID`) | ID da loja se o pagamento é feito em um comércio físico. | String <br> (50) |
| Nome da loja  (`STORE_NAME`) | Nome da loja para o pagamento feito em um comércio físico. | String <br> (200) |
| ID da loja, definido pelo usuário (`EXTERNAL_STORE_ID`) | ID da loja definido pelo usuário para o pagamento feito em um comércio físico. | String <br> (100) |
| ID do pedido (`ORDER_ID`) | Ordem de compra. | Numeric <br> (19) |
| ID do envio (`SHIPPING_ID`) | Identificador de envio. | Numeric <br> (19) |
| Forma de envio (`SHIPMENT_MODE`) | Modalidade de envio. | String <br> (10) |
| ID do pacote (`PACK_ID`) | Identificador do pacote no carrinho. | Numeric <br> (19) |
| Impostos desagregados (`TAXES_DISAGGREGATED`) | Detalhamento dos impostos no formato JSON. | String <br> (255) |
| Número de série da maquininha (S/N) (`POI_ID`) | ID da maquininha se o pagamento é feito em uma loja física. | String <br> (50) |
| Carteira digital (`POI_WALLET_NAME`) | Nome da carteira digital de onde um pagamento virtual saiu. Permite identificar a origem de uma transação quando você cobra com um código QR do Mercado Pago. | String <br> (200) |
| Banco de origem (`POI_BANK_NAME`) | Nome da instituição bancária de onde um pagamento virtual saiu. Permite identificar a origem de uma transação quando você cobra com um código QR do Mercado Pago. | String <br> (200) |
| Descrição (`DESCRIPTION`) | Ajuda a identificar transações ou operações registradas em um período de tempo.<br> Quando se tratar de pagamento parcelado, a linha será identificada como "INSTALLMENT". | String <br> (50) |
| Data de liberação do dinheiro (`MONEY_RELEASE_DATE`) | Data de previsão da liberação do pagamento de cada parcela ou da parcela única. | DateTime <br> (yyyy-MM-dd'T'HH:mm:ssZ) |
| Cartão do seu comprador (`CARD_INITIAL_NUMBER`) | Corresponde aos primeiros dígitos do cartão de crédito ou débito utilizado para fazer a compra. | Numeric <br> (6) |
| Etiquetas da transação (`OPERATION_TAGS`) | São etiquetas para categorizar e/ou segmentar diferentes aspectos da transação, como por exemplo, os canais usados para fazer um pagamento. Eles são identificados como: <br><br>  - Pagamento via WhatsApp (WHATSAPP_PAY): esta etiqueta indica que o pagamento foi feito via WhatsApp. | String <br> (JSON) | 
| Canal de venda (`BUSINESS_UNIT`) | Corresponde ao canal pelo qual uma venda foi gerada. Os canais são Mercado Pago, Mercado Livre, Mercado Shops e Delivery. | String <br> (255) |
| Plataforma de pagamento (`SUB_UNIT`) | Permite identificar o meio de pagamento usado para cobrar por uma venda com o Mercado Pago. | String <br> (255) |
| Código do produto SKU (`PRODUCT_SKU`) | Código SKU, com o qual você poderá identificar seus produtos vendidos. | String <br> (200) |
| Detalhe da venda (`SALE_DETAIL`) | Esta coluna apresenta informações detalhadas sobre os produtos vendidos, facilitando a reconciliação e o controle das suas vendas. Cada entrada nesta coluna mostra o primeiro elemento da venda, seguido do agrupamento dos demais produtos. É importante observar que, devido ao espaço, apenas os primeiros 100 caracteres do nome do produto serão mostrados. | String <br> (500) |

------------
----[mlm]----

| Nome da coluna do relatório | O que significa | Tipo de dado <br> (longitude máxima) |
|---|---|---|
| Código de referência (`EXTERNAL_REFERENCE`) |  ID que ajuda a identificar a origem da operação. Por exemplo, pode ser a venda através do ID do pedido ou do envio (se for uma compra de carrinho) ou o próprio ID fornecido pelo vendedor no caso de uma integração externa. <br><br> Lembre-se que é possível que este campo esteja vazio para alguns casos, como pagamento de boletos ou envio de dinheiro, entre outros. <br>  | String <br> (255) |
| ID da operação no Mercado Pago (`SOURCE_ID`) | ID da transação no Mercado Pago (por exemplo, o pagamento de uma venda). Este campo pode conter valores alfanuméricos. | String <br> (100) |
| Código da conta do vendedor (`USER_ID`) | Código da conta do vendedor. (Cust ID). | String <br> (19) |
| Meio de pagamento (`PAYMENT_METHOD`) | Confira os [meios de pagamento disponíveis](/developers/pt/docs/sales-processing/payment-methods) de acordo com o país no qual você opera com o Mercado Pago. | String <br> (50) |
| Tipo de meio de pagamento (`PAYMENT_METHOD_TYPE`) | Tipo de meio de pagamento. Pode ser:<br><br>*credit_card*: cartão de crédito.<br>*debit_card*: cartão de débito.<br>*bank_transfer*: transferência.<br>*atm*: caixa eletrônico.<br>*ticket*: à vista<br>*account_money*: dinheiro em conta.<br>*prepaid_card*: cartão pré-pago.<br>  | String <br> (200) |
| País de origem da conta do Mercado Pago (`SITE`) |  MLM: México | String <br> (200) |
| Tipo de operação (`TRANSACTION_TYPE`) | Tipo de operação. Pode ser:<br><br> Pagamento aprovado (SETTLEMENT): pagamento aprovado.<br> Devolução de dinheiro (REFUND): pagamento totalmente devolvido ou devolução parcial. <br> Contestação (CHARGEBACK): o comprador fez uma contestação (desconhece o pagamento) no seu cartão de crédito.<br> Contestação (DISPUTE): o comprador iniciou uma reclamação por esse pagamento. <br> Transferência (WITHDRAWAL): retirada para a conta bancária. <br> Cancelamento da transferência (WITHDRAWAL_CANCEL): retirada para a conta bancária que foi cancelada .<br> Saque (PAYOUT) saque em dinheiro ou transferência por PIX de saldo disponível no Mercado Pago. | String <br> (200) |
| Valor da compra (`TRANSACTION_AMOUNT`) | Valor bruto da transação. | Numeric <br> (17) |
| Moeda (`TRANSACTION_CURRENCY`) | Moeda:<br><br>MXN (Peso mexicano)<br>CLP (Peso Chileno)<br>ARS (Peso Argentino)<br>BRL (Real Brasileiro)<br>EN (Sol Peruano)<br>COP (Peso Colombiano)<br>UYU (Peso Uruguayo)<br>VES (Bolivar Venezolano)<br> | String <br> (10) |
| Valor recebido por compras com split de pagamento (`SELLER_AMOUNT`) | Valor recebido por compras com split. | Numeric <br> (17) |
| Data de origem (`TRANSACTION_DATE`) | Data de criação da transação. | DateTime <br> (yyyy-MM-dd'T'HH:mm:ssZ) |
| Tarifas + IVA (`FEE_AMOUNT`) | É a somatória das tarifas de processamento, shipping, financiamento e boleto, se foi assumido pelo vendedor.Incluir IVA. | Numeric <br> (17) |
| Valor líquido da operação que impactou no dinheiro (`SETTLEMENT_NET_AMOUNT`) | Valor líquido da transação que impactou o dinheiro em conta. Foram descontadas todas as comissões envolvidas da valor da compra (`TRANSACTION_AMOUNT`). | Numeric <br> (17) |
| Moeda da liquidação (`SETTLEMENT_CURRENCY`) | Moeda:<br><br> MXN (Peso mexicano)<br>CLP (Peso Chileno)<br>ARS (Peso Argentino)<br>BRL (Real Brasileiro)<br>PEN (Sol Peruano)<br>COP (Peso Colombiano)<br>UYU (Peso Uruguayo)<br>VES (Bolivar Venezolano)<br> | String <br> (10) |
| Data de aprovação (`SETTLEMENT_DATE`) | Data de aprovação da transação. | DateTime <br> (yyyy-MM-dd'T'HH:mm:ssZ) |
| Valor líquido da operação (`REAL_AMOUNT`) | Valor líquido da transação, se é um settlement, os valores para estornos, reclamações ou devoluções são descontados. | Numeric <br> (17) |
| Cupom de desconto (`COUPON_AMOUNT`) | Valor do cupom de desconto. **Apenas o valor bruto** (`TRANSACTION_AMOUNT`) **é descontado se fornecido pelo vendedor**. | Numeric <br> (17) |
| Dados adicionais (`METADATA`) | Dados extras, como por exemplo, o ID dos reembolsos parciais ou dados fornecidos pelo vendedor no caso de integrações externas. | String <br> (JSON)  |
| Tarifa do Mercado Livre + IVA (`MKP_FEE_AMOUNT`) | Tarifa do Mercado Livre. Incluir IVA. | Numeric <br> (17) |
| Tarifa por oferecer parcelas sem acréscimo (`FINANCING_FEE_AMOUNT`) | Custo de oferecer parcelamento quando o custo dessa comissão for assumido pelo seller. | Numeric <br> (17) |
| Frete (`SHIPPING_FEE_AMOUNT`) | Custo de envio. | Numeric <br> (17) |
| Impostos cobrados por retenções de IIBB (`TAXES_AMOUNT`) | Impostos cobrados. | Numeric <br> (17) |
| Parcelas (`INSTALLMENTS`) | Número de parcelas em que a transação foi realizada. | Numeric <br> (2) |
| Detalhes dos impostos (`TAX_DETAIL`) | Descrição do imposto retido por transação `TAXES_AMOUNT`. | String <br> (50) |
| ID do caixa (`POS_ID`) | ID do caixa, se o pagamento é feito através de um comércio físico. | String <br> (50) |
| Nome do caixa (`POS_NAME`) | Nome do caixa para o pagamento realizado em um comércio físico. | String <br> (200) |
| ID do caixa, definido pelo usuário (`EXTERNAL_POS_ID`) | ID do caixa definido pelo usuário para o pagamento realizado em um comércio físico. | String <br> (100) |
| ID da loja (`STORE_ID`) | ID da loja se o pagamento é feito em um comércio físico. | String <br> (50) |
| Nome da loja  (`STORE_NAME`) | Nome da loja para o pagamento feito em um comércio físico. | String <br> (200) |
| ID da loja, definido pelo usuário (`EXTERNAL_STORE_ID`) | ID da loja definido pelo usuário para o pagamento feito em um comércio físico. | String <br> (100) |
| ID do pedido (`ORDER_ID`) | Ordem de compra. | Numeric <br> (19) |
| ID do envio (`SHIPPING_ID`) | Identificador de envio. | Numeric <br> (19) |
| Forma de envio (`SHIPMENT_MODE`) | Modalidade de envio. | String <br> (10) |
| ID do pacote (`PACK_ID`) | Identificador do pacote no carrinho. | Numeric <br> (19) |
| Impostos desagregados (`TAXES_DISAGGREGATED`) | Detalhamento dos impostos no formato JSON. | String <br> (255) |
| Número de série da maquininha (S/N) (`POI_ID`) | ID da maquininha se o pagamento é feito em uma loja física. | String <br> (50) |
| Carteira digital (`POI_WALLET_NAME`) | Nome da carteira digital de onde um pagamento virtual saiu. Permite identificar a origem de uma transação quando você cobra com um código QR do Mercado Pago. | String <br> (200) |
| Banco de origem (`POI_BANK_NAME`) | Nome da instituição bancária de onde um pagamento virtual saiu. Permite identificar a origem de uma transação quando você cobra com um código QR do Mercado Pago. | String <br> (200) |
| Descrição (`DESCRIPTION`) | Ajuda a identificar transações ou operações registradas em um período de tempo.<br> Quando se tratar de pagamento parcelado, a linha será identificada como "INSTALLMENT". | String <br> (50) |
| Data de liberação do dinheiro (`MONEY_RELEASE_DATE`) | Data de previsão da liberação do pagamento de cada parcela ou da parcela única. | DateTime <br> (yyyy-MM-dd'T'HH:mm:ssZ) |
| Cartão do seu comprador (`CARD_INITIAL_NUMBER`) | Corresponde aos primeiros dígitos do cartão de crédito ou débito utilizado para fazer a compra. | Numeric <br> (6) |
| Etiquetas da transação (`OPERATION_TAGS`) | São etiquetas para categorizar e/ou segmentar diferentes aspectos da transação, como por exemplo, os canais usados para fazer um pagamento. Eles são identificados como: <br><br>  - Pagamento via WhatsApp (WHATSAPP_PAY) Esta etiqueta indica que o pagamento foi feito via WhatsApp. | String <br> (JSON) | 
| Canal de venda (`BUSINESS_UNIT`) | Corresponde ao canal pelo qual uma venda foi gerada. Os canais são Mercado Pago, Mercado Livre, Mercado Shops e Delivery. | String <br> (255) |
| Plataforma de pagamento (`SUB_UNIT`) | Permite identificar o meio de pagamento usado para cobrar por uma venda com o Mercado Pago. | String <br> (255) |
| Código do produto SKU (`PRODUCT_SKU`) | Código SKU, com o qual você poderá identificar seus produtos vendidos. | String <br> (200) |
| Detalhe da venda (`SALE_DETAIL`) | Esta coluna apresenta informações detalhadas sobre os produtos vendidos, facilitando a reconciliação e o controle das suas vendas. Cada entrada nesta coluna mostra o primeiro elemento da venda, seguido do agrupamento dos demais produtos. É importante observar que, devido ao espaço, apenas os primeiros 100 caracteres do nome do produto serão mostrados. | String <br> (500) |

------------
----[mlc]----

| Nome da coluna do relatório | O que significa | Tipo de dado <br> (longitude máxima) |
|---|---|---|
| Código de referência (`EXTERNAL_REFERENCE`) |  ID que ajuda a identificar a origem da operação. Por exemplo, pode ser a venda através do ID do pedido ou do envio (se for uma compra de carrinho) ou o próprio ID fornecido pelo vendedor no caso de uma integração externa. <br><br> Lembre-se que é possível que este campo esteja vazio para alguns casos, como pagamento de boletos ou envio de dinheiro, entre outros. <br>  | String <br> (255) |
| ID da operação no Mercado Pago (`SOURCE_ID`) | ID da transação no Mercado Pago (por exemplo, o pagamento de uma venda). Este campo pode conter valores alfanuméricos. | String <br> (100) |
| Código da conta do vendedor (`USER_ID`) | Código da conta do vendedor. (Cust ID). | String <br> (19) |
| Meio de pagamento (`PAYMENT_METHOD`) | Confira os [meios de pagamento disponíveis](/developers/pt/docs/sales-processing/payment-methods) de acordo com o país no qual você opera com o Mercado Pago. | String <br> (50) |
| Tipo de meio de pagamento (`PAYMENT_METHOD_TYPE`) | Tipo de meio de pagamento. Pode ser:<br><br>*credit_card*: cartão de crédito.<br>*debit_card*: cartão de débito.<br>*bank_transfer*: transferência.<br>*atm*: caixa eletrônico.<br>*ticket*: à vista<br>*account_money*: dinheiro em conta.<br>*prepaid_card*: cartão pré-pago.<br>  | String <br> (200) |
| País de origem da conta do Mercado Pago (`SITE`) | MLC: Chile  | String <br> (200) |
| Tipo de operação (`TRANSACTION_TYPE`) | Tipo de operação. Pode ser:<br><br> Pagamento aprovado (SETTLEMENT): pagamento aprovado.<br> Devolução de dinheiro (REFUND): pagamento totalmente devolvido ou devolução parcial.<br> Contestação (CHARGEBACK): o comprador fez uma contestação (desconhece o pagamento) no seu cartão de crédito.<br> Contestação (DISPUTE): o comprador iniciou uma reclamação por esse pagamento. <br> Transferência (WITHDRAWAL): retirada para a conta bancária. <br> Cancelamento da transferência (WITHDRAWAL_CANCEL): retirada para a conta bancária que foi cancelada .<br> Saque (PAYOUT) saque em dinheiro ou transferência por PIX de saldo disponível no Mercado Pago. | String <br> (200) |
| Valor da compra (`TRANSACTION_AMOUNT`) | Valor bruto da transação. | Numeric <br> (17) |
| Moeda (`TRANSACTION_CURRENCY`) | Moeda:<br><br>MXN (Peso mexicano)<br>CLP (Peso Chileno)<br>ARS (Peso Argentino)<br>BRL (Real Brasileiro)<br>EN (Sol Peruano)<br>COP (Peso Colombiano)<br>UYU (Peso Uruguayo)<br>VES (Bolivar Venezolano)<br> | String <br> (10) |
| Valor recebido por compras com split de pagamento (`SELLER_AMOUNT`) | Valor recebido por compras com split. | Numeric <br> (17) |
| Data de origem (`TRANSACTION_DATE`) | Data de criação da transação. | DateTime <br> (yyyy-MM-dd'T'HH:mm:ssZ) |
| Tarifas + IVA (`FEE_AMOUNT`) | É a somatória das tarifas de processamento, shipping, financiamento e boleto, se foi assumido pelo vendedor.Incluir IVA. | Numeric <br> (17) |
| Valor líquido da operação que impactou no dinheiro (`SETTLEMENT_NET_AMOUNT`) | Valor líquido da transação que impactou o dinheiro em conta. Foram descontadas todas as comissões envolvidas da valor da compra (`TRANSACTION_AMOUNT`). | Numeric <br> (17) |
| Moeda da liquidação (`SETTLEMENT_CURRENCY`) | Moeda:<br><br> MXN (Peso mexicano)<br>CLP (Peso Chileno)<br>ARS (Peso Argentino)<br>BRL (Real Brasileiro)<br>PEN (Sol Peruano)<br>COP (Peso Colombiano)<br>UYU (Peso Uruguayo)<br>VES (Bolivar Venezolano)<br> | String <br> (10) |
| Data de aprovação (`SETTLEMENT_DATE`) | Data de aprovação da transação. | DateTime <br> (yyyy-MM-dd'T'HH:mm:ssZ) |
| Valor líquido da operação (`REAL_AMOUNT`) | Valor líquido da transação, se é um settlement, os valores para estornos, reclamações ou devoluções são descontados. | Numeric <br> (17) |
| Cupom de desconto (`COUPON_AMOUNT`) | Valor do cupom de desconto. **Apenas o valor bruto** (`TRANSACTION_AMOUNT`) **é descontado se fornecido pelo vendedor**. | Numeric <br> (17) |
| Dados adicionais (`METADATA`) | Dados extras, como por exemplo, o ID dos reembolsos parciais ou dados fornecidos pelo vendedor no caso de integrações externas. | String <br> (JSON)  |
| Tarifa do Mercado Livre + IVA (`MKP_FEE_AMOUNT`) | Tarifa do Mercado Livre. Incluir IVA. | Numeric <br> (17) |
| Tarifa por oferecer parcelas sem acréscimo (`FINANCING_FEE_AMOUNT`) | Custo de oferecer parcelamento quando o custo dessa comissão for assumido pelo seller. | Numeric <br> (17) |
| Frete (`SHIPPING_FEE_AMOUNT`) | Custo de envio. | Numeric <br> (17) |
| Impostos cobrados por retenções de IIBB (`TAXES_AMOUNT`) | Impostos cobrados. | Numeric <br> (17) |
| Parcelas (`INSTALLMENTS`) | Número de parcelas em que a transação foi realizada. | Numeric <br> (2) |
| Detalhes dos impostos (`TAX_DETAIL`) | Descrição do imposto retido por transação `TAXES_AMOUNT`. | String <br> (50) |
| ID do caixa (`POS_ID`) | ID do caixa, se o pagamento é feito através de um comércio físico. | String <br> (50) |
| Nome do caixa (`POS_NAME`) | Nome do caixa para o pagamento realizado em um comércio físico. | String <br> (200) |
| ID do caixa, definido pelo usuário (`EXTERNAL_POS_ID`) | ID do caixa definido pelo usuário para o pagamento realizado em um comércio físico. | String <br> (100) |
| ID da loja (`STORE_ID`) | ID da loja se o pagamento é feito em um comércio físico. | String <br> (50) |
| Nome da loja  (`STORE_NAME`) | Nome da loja para o pagamento feito em um comércio físico. | String <br> (200) |
| ID da loja, definido pelo usuário (`EXTERNAL_STORE_ID`) | ID da loja definido pelo usuário para o pagamento feito em um comércio físico. | String <br> (100) |
| ID do pedido (`ORDER_ID`) | Ordem de compra. | Numeric <br> (19) |
| ID do envio (`SHIPPING_ID`) | Identificador de envio. | Numeric <br> (19) |
| Forma de envio (`SHIPMENT_MODE`) | Modalidade de envio. | String <br> (10) |
| ID do pacote (`PACK_ID`) | Identificador do pacote no carrinho. | Numeric <br> (19) |
| Impostos desagregados (`TAXES_DISAGGREGATED`) | Detalhamento dos impostos no formato JSON. | String <br> (255) |
| Número de série da maquininha (S/N) (`POI_ID`) | ID da maquininha se o pagamento é feito em uma loja física. | String <br> (50) |
| Carteira digital (`POI_WALLET_NAME`) | Nome da carteira digital de onde um pagamento virtual saiu. Permite identificar a origem de uma transação quando você cobra com um código QR do Mercado Pago. | String <br> (200) |
| Banco de origem (`POI_BANK_NAME`) | Nome da instituição bancária de onde um pagamento virtual saiu. Permite identificar a origem de uma transação quando você cobra com um código QR do Mercado Pago. | String <br> (200) |
| Descrição (`DESCRIPTION`) | Ajuda a identificar transações ou operações registradas em um período de tempo.<br> Quando se tratar de pagamento parcelado, a linha será identificada como "INSTALLMENT". | String <br> (50) |
| Data de liberação do dinheiro (`MONEY_RELEASE_DATE`) | Data de previsão da liberação do pagamento de cada parcela ou da parcela única. | DateTime <br> (yyyy-MM-dd'T'HH:mm:ssZ) |
| Cartão do seu comprador (`CARD_INITIAL_NUMBER`) | Corresponde aos primeiros dígitos do cartão de crédito ou débito utilizado para fazer a compra. | Numeric <br> (6) |
| Etiquetas da transação (`OPERATION_TAGS`) | São etiquetas para categorizar e/ou segmentar diferentes aspectos da transação, como por exemplo, os canais usados para fazer um pagamento. Eles são identificados como: <br><br>  - Pagamento via WhatsApp (WHATSAPP_PAY) Esta etiqueta indica que o pagamento foi feito via WhatsApp. | String <br> (JSON) | 
| Canal de venda (`BUSINESS_UNIT`) | Corresponde ao canal pelo qual uma venda foi gerada. Os canais são Mercado Pago, Mercado Livre, Mercado Shops e Delivery. | String <br> (255) |
| Plataforma de pagamento (`SUB_UNIT`) | Permite identificar o meio de pagamento usado para cobrar por uma venda com o Mercado Pago. | String <br> (255) |
| Código do produto SKU (`PRODUCT_SKU`) | Código SKU, com o qual você poderá identificar seus produtos vendidos. | String <br> (200) |
| Detalhe da venda (`SALE_DETAIL`) | Esta coluna apresenta informações detalhadas sobre os produtos vendidos, facilitando a reconciliação e o controle das suas vendas. Cada entrada nesta coluna mostra o primeiro elemento da venda, seguido do agrupamento dos demais produtos. É importante observar que, devido ao espaço, apenas os primeiros 100 caracteres do nome do produto serão mostrados. | String <br> (200) |

------------
----[mpe]----

| Nome da coluna do relatório | O que significa | Tipo de dado <br> (longitude máxima) |
|---|---|---|
| Código de referência (`EXTERNAL_REFERENCE`) |  ID que ajuda a identificar a origem da operação. Por exemplo, pode ser a venda através do ID do pedido ou do envio (se for uma compra de carrinho) ou o próprio ID fornecido pelo vendedor no caso de uma integração externa. <br><br> Lembre-se que é possível que este campo esteja vazio para alguns casos, como pagamento de boletos ou envio de dinheiro, entre outros. <br>  | String <br> (255) |
| ID da operação no Mercado Pago (`SOURCE_ID`) | ID da transação no Mercado Pago (por exemplo, o pagamento de uma venda). Este campo pode conter valores alfanuméricos. | String <br> (100) |
| Código da conta do vendedor (`USER_ID`) | Código da conta do vendedor. (Cust ID). | String <br> (19) |
| Meio de pagamento (`PAYMENT_METHOD`) | Confira os [meios de pagamento disponíveis](/developers/pt/docs/sales-processing/payment-methods) de acordo com o país no qual você opera com o Mercado Pago. | String <br> (50) |
| Tipo de meio de pagamento (`PAYMENT_METHOD_TYPE`) | Tipo de meio de pagamento. Pode ser:<br><br>*credit_card*: cartão de crédito.<br>*debit_card*: cartão de débito.<br>*bank_transfer*: transferência.<br>*atm*: caixa eletrônico.<br>*ticket*: à vista<br>*account_money*: dinheiro em conta.<br>*prepaid_card*: cartão pré-pago.<br>  | String <br> (200) |
| País de origem da conta do Mercado Pago (`SITE`) | MPE: Perú | String <br> (200) |
| Tipo de operação (`TRANSACTION_TYPE`) | Tipo de operação. Pode ser:<br><br> Pagamento aprovado (SETTLEMENT): pagamento aprovado.<br> *REFUND*: pagamento totalmente devolvido. <br> Contestação (CHARGEBACK): o comprador fez uma contestação (desconhece o pagamento) no seu cartão de crédito.<br> Contestação (DISPUTE): o comprador iniciou uma reclamação por esse pagamento. <br> Transferência (WITHDRAWAL): retirada para a conta bancária. <br> Cancelamento da transferência (WITHDRAWAL_CANCEL): retirada para a conta bancária que foi cancelada .<br> Saque (PAYOUT) saque em dinheiro ou transferência por PIX de saldo disponível no Mercado Pago. | String <br> (200) |
| Valor da compra (`TRANSACTION_AMOUNT`) | Valor bruto da transação. | Numeric <br> (17) |
| Moeda (`TRANSACTION_CURRENCY`) | Moeda:<br><br>MXN (Peso mexicano)<br>CLP (Peso Chileno)<br>ARS (Peso Argentino)<br>BRL (Real Brasileiro)<br>EN (Sol Peruano)<br>COP (Peso Colombiano)<br>UYU (Peso Uruguayo)<br>VES (Bolivar Venezolano)<br> | String <br> (10) |
| Valor recebido por compras com split de pagamento (`SELLER_AMOUNT`) | Valor recebido por compras com split. | Numeric <br> (17) |
| Data de origem (`TRANSACTION_DATE`) | Data de criação da transação. | DateTime <br> (yyyy-MM-dd'T'HH:mm:ssZ) |
| Tarifas + IVA (`FEE_AMOUNT`) | É a somatória das tarifas de processamento, shipping, financiamento e boleto, se foi assumido pelo vendedor.Incluir IVA. | Numeric <br> (17) |
| Valor líquido da operação que impactou no dinheiro (`SETTLEMENT_NET_AMOUNT`) | Valor líquido da transação que impactou o dinheiro em conta. Foram descontadas todas as comissões envolvidas da valor da compra (`TRANSACTION_AMOUNT`). | Numeric <br> (17) |
| Moeda da liquidação (`SETTLEMENT_CURRENCY`) | Moeda:<br><br> MXN (Peso mexicano)<br>CLP (Peso Chileno)<br>ARS (Peso Argentino)<br>BRL (Real Brasileiro)<br>PEN (Sol Peruano)<br>COP (Peso Colombiano)<br>UYU (Peso Uruguayo)<br>VES (Bolivar Venezolano)<br> | String <br> (10) |
| Data de aprovação (`SETTLEMENT_DATE`) | Data de aprovação da transação. | DateTime <br> (yyyy-MM-dd'T'HH:mm:ssZ) |
| Valor líquido da operação (`REAL_AMOUNT`) | Valor líquido da transação, se é um settlement, os valores para estornos, reclamações ou devoluções são descontados. | Numeric <br> (17) |
| Cupom de desconto (`COUPON_AMOUNT`) | Valor do cupom de desconto. **Apenas o valor bruto** (`TRANSACTION_AMOUNT`) **é descontado se fornecido pelo vendedor**. | Numeric <br> (17) |
| Dados adicionais (`METADATA`) | Dados adicionais como, por exemplo, ou dados informados pelo vendedor em caso de integração externa. | String <br> (JSON)  |
| Tarifa do Mercado Livre + IVA (`MKP_FEE_AMOUNT`) | Tarifa do Mercado Livre. Incluir IVA. | Numeric <br> (17) |
| Tarifa por oferecer parcelas sem acréscimo (`FINANCING_FEE_AMOUNT`) | Custo de oferecer parcelamento quando o custo dessa comissão for assumido pelo seller. | Numeric <br> (17) |
| Frete (`SHIPPING_FEE_AMOUNT`) | Custo de envio. | Numeric <br> (17) |
| Impostos cobrados por retenções de IIBB (`TAXES_AMOUNT`) | Impostos cobrados. | Numeric <br> (17) |
| Parcelas (`INSTALLMENTS`) | Número de parcelas em que a transação foi realizada. | Numeric <br> (2) |
| Detalhes dos impostos (`TAX_DETAIL`) | Descrição do imposto retido por transação `TAXES_AMOUNT`. | String <br> (50) |
| ID do caixa (`POS_ID`) | ID do caixa, se o pagamento é feito através de um comércio físico. | String <br> (50) |
| Nome do caixa (`POS_NAME`) | Nome do caixa para o pagamento realizado em um comércio físico. | String <br> (200) |
| ID do caixa, definido pelo usuário (`EXTERNAL_POS_ID`) | ID do caixa definido pelo usuário para o pagamento realizado em um comércio físico. | String <br> (100) |
| ID da loja (`STORE_ID`) | ID da loja se o pagamento é feito em um comércio físico. | String <br> (50) |
| Nome da loja  (`STORE_NAME`) | Nome da loja para o pagamento feito em um comércio físico. | String <br> (200) |
| ID da loja, definido pelo usuário (`EXTERNAL_STORE_ID`) | ID da loja definido pelo usuário para o pagamento feito em um comércio físico. | String <br> (100) |
| ID do pedido (`ORDER_ID`) | Ordem de compra. | Numeric <br> (19) |
| ID do envio (`SHIPPING_ID`) | Identificador de envio. | Numeric <br> (19) |
| Forma de envio (`SHIPMENT_MODE`) | Modalidade de envio. | String <br> (10) |
| ID do pacote (`PACK_ID`) | Identificador do pacote no carrinho. | Numeric <br> (19) |
| Impostos desagregados (`TAXES_DISAGGREGATED`) | Detalhamento dos impostos no formato JSON. | String <br> (255) |
| Número de série da maquininha (S/N) (`POI_ID`) | ID da maquininha se o pagamento é feito em uma loja física. | String <br> (50) |
| Carteira digital (`POI_WALLET_NAME`) | Nome da carteira digital de onde um pagamento virtual saiu. Permite identificar a origem de uma transação quando você cobra com um código QR do Mercado Pago. | String <br> (200) |
| Banco de origem (`POI_BANK_NAME`) | Nome da instituição bancária de onde um pagamento virtual saiu. Permite identificar a origem de uma transação quando você cobra com um código QR do Mercado Pago. | String <br> (200) |
| Descrição (`DESCRIPTION`) | Ajuda a identificar transações ou operações registradas em um período de tempo.<br> Quando se tratar de pagamento parcelado, a linha será identificada como "INSTALLMENT". | String <br> (50) |
| Data de liberação do dinheiro (`MONEY_RELEASE_DATE`) | Data de previsão da liberação do pagamento de cada parcela ou da parcela única. | DateTime <br> (yyyy-MM-dd'T'HH:mm:ssZ) |
| Cartão do seu comprador (`CARD_INITIAL_NUMBER`) | Corresponde aos primeiros dígitos do cartão de crédito ou débito utilizado para fazer a compra. | Numeric <br> (6) |
| Etiquetas da transação (`OPERATION_TAGS`) | São etiquetas para categorizar e/ou segmentar diferentes aspectos da transação, como por exemplo, os canais usados para fazer um pagamento. Eles são identificados como: <br><br>  - Pagamento via WhatsApp (WHATSAPP_PAY) Esta etiqueta indica que o pagamento foi feito via WhatsApp. | String <br> (JSON) | 
| Canal de venda (`BUSINESS_UNIT`) | Corresponde ao canal pelo qual uma venda foi gerada. Os canais são Mercado Pago, Mercado Livre, Mercado Shops e Delivery. | String <br> (255) |
| Plataforma de pagamento (`SUB_UNIT`) | Permite identificar o meio de pagamento usado para cobrar por uma venda com o Mercado Pago. | String <br> (255) |
| Código do produto SKU (`PRODUCT_SKU`) | Código SKU, com o qual você poderá identificar seus produtos vendidos. | String <br> (200) |
| Detalhe da venda (`SALE_DETAIL`) | Esta coluna apresenta informações detalhadas sobre os produtos vendidos, facilitando a reconciliação e o controle das suas vendas. Cada entrada nesta coluna mostra o primeiro elemento da venda, seguido do agrupamento dos demais produtos. É importante observar que, devido ao espaço, apenas os primeiros 100 caracteres do nome do produto serão mostrados. | String <br> (200) |

------------

> NOTE
>
> Nota
>
>(*) Estas informações só podem ser usadas para fins de reconciliação e serão tratadas de acordo com as leis de  proteção de dados pessoais aplicáveis. Elas estarão disponíveis quando pagamentos via código QR e transferências forem recebidos ou quando uma doação for recebida por uma ONG.