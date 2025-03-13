# Reembolsos

**Reembolsos** são transações realizadas quando determinada cobrança é revertida e os valores pagos retornam para o comprador. Isso significa que o cliente receberá de volta em sua conta ou na fatura do cartão de crédito, o valor pago na aquisição de determinado produto ou serviço.

> NOTE
>
> Nota
>
> Apesar de serem transações similares, é importante ter em mente que o **reembolso** é feito diretamente na fatura do cartão de crédito ou na conta corrente em alguns casos. Já o **cancelamento** é feito no mesmo dia da captura do pagamento, devolvendo o limite ao cartão do comprador dentro do período definido pelo banco emissor.

Nesta documentação, você encontra as instruções e os links dos endpoints necessários para realizar um reembolso integral e parcial.

> WARNING
>
> Importante
>
> Ao executar as APIs citadas nesta documentação, você deverá enviar o atributo **X-Idempotency-Key**. Seu preenchimento é obrigatório para garantir a execução e re-execução de requisições sem que haja efeitos colaterais como por exemplo, pagamentos em duplicidade em casos de reembolso. Atualize [nossa biblioteca de SDK](/developers/pt/docs/sdks-library/landing) ou gere um UUID V4 e envie-o no _header_ de suas chamadas para evitar erros.

## Reembolsos

Os reembolsos podem ser feitos de duas maneiras: **integral**, quando o valor total da venda é devolvido ao comprador ou **parcial**, quando apenas parte do valor pago é retornado ao comprador.

Antes de realizar um reembolso, é importante considerar os fatores abaixo.

* **Prazo de reembolso:** é possível reembolsar um pagamento dentro de 180 dias a partir da sua data de aprovação. 
* **Meio de pagamento:** para pagamentos com cartão de crédito, o valor será devolvido diretamente na fatura.

Para realizar reembolsos integrais ou parciais de um pagamento e consultar os reembolsos feitos em sua loja, visite nossa Referência API e acesse a API de [Reembolso da order](/developers/pt/reference/order/online-payments/refund/post).