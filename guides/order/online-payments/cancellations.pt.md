# Cancelamentos

**Cancelamentos** acontecem quando uma compra é realizada mas a order ainda não foi aprovada por algum motivo. Neste caso, considerando que a transação não foi processada e o estabelecimento não recebeu qualquer valor, a compra é cancelada e não ocorre cobrança.

> NOTE
>
> Nota
>
> Apesar de serem transações similares, é importante ter em mente que o **cancelamento** é feito no mesmo dia da captura da order, devolvendo o limite ao cartão do comprador dentro do período definido pelo banco emissor. Já o **reembolso** é feito diretamente na fatura do cartão de crédito ou na conta corrente em alguns casos.

Nesta documentação, você encontra as instruções e os links dos endpoints necessários para cancelar uma compra.

> WARNING
>
> Importante
>
> Ao executar as APIs citadas nesta documentação, você deverá enviar o atributo **X-Idempotency-Key**. Seu preenchimento é obrigatório para garantir a execução e re-execução de requisições sem que haja efeitos colaterais como por exemplo, transações em duplicidade em casos de reembolso. Atualize [nossa biblioteca de SDK](/developers/pt/docs/sdks-library/landing) ou gere um UUID V4 e envie-o no _header_ de suas chamadas para evitar erros.

## Cancelamentos

Antes de realizar o cancelamento de uma compra, é preciso atentar-se os seguintes fatores: 

- **Prazo de vencimento**: uma order expira após 30 dias sem confirmação e o cancelamento é automático. O status final dessa transação aparecerá como `cancelled` ou `expired`. Essas informações serão exibidas na resposta da chamada à API [Obter order](/developers/pt/reference/order/online-payments/get-order/get), nos campos `status` e `status_detail`.

- **Status de pagamento**: os cancelamentos somente poderão ser realizados caso o status da order esteja como `action_required`. Esse status é exibido na resposta da chamada à API de cancelamento nos campos `status` e `status_detail`.

Se esses requisitos forem atendidos e você desejar cancelar uma order por ID, acesse nossa [Referência API](/developers/pt/reference/order/online-payments/cancel-order/post).