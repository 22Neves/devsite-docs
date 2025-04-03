# Reembolsos e cancelamentos

Os reembolsos e as cancelamentos são gestões que você pode realizar uma vez que um pagamento tenha sido efetuado. Por se tratar de ações que implicam uma devolução de dinheiro, podem parecer similares, mas é importante levar em consideração o que as diferencia para poder realizar corretamente cada um dos processos.

Um **cancelamento** é feito quando um pagamento ainda não foi aprovado e o limite é devolvido ao cartão do comprador dentro do período definido pelo banco emissor, enquanto o **reembolso** é feito após a captura do pagamento e a devolução do valor será feita diretamente na fatura, no caso de cartão de crédito, ou na conta do pagador, quando o pagamento for feito por outros meios.

Veja abaixo mais informações sobre reembolsos e cancelamentos.

> RED_MESSAGE
>
> Esta documentação é **destinada a integradores**. Se você é comprador e deseja cancelar ou solicitar o reembolso de um pagamento, acesse sua conta do Mercado Pago, selecione a compra em questão, clique em "Preciso de ajuda" e escolha a opção de reembolso ou cancelamento.

## Reembolsos

São transações realizadas quando determinada cobrança é revertida e os valores pagos retornam para o comprador. Isso significa que o cliente receberá de volta os valores do pagamento.

É possível :TagComponent{tag="API" text="realizar um reembolso" href="/developers/pt/reference/orders/online-payments/refund/post"} de duas maneiras: 

- **Total**: quando o valor total da venda é devolvido ao comprador. Neste caso, não deverá ser indicado o valor a ser reembolsado no `body` da requisição, que deve ser enviado vazio.
- **Parcial**: quando apenas parte do valor pago é retornado ao comprador. Neste caso, deverá ser especificada a quantia a ser reembolsada no `body` da requisição junto com o ID da transação.

Antes de realizar um reembolso, é importante considerar os fatores abaixo.

- **Prazo de reembolso**: é possível reembolsar um pagamento dentro de 180 dias a partir da sua data de aprovação.
- **Meio de pagamento**: para pagamentos com cartão de crédito, o valor será devolvido diretamente na fatura. Para outros meios de pagamento o valor será devolvido na conta do pagador.
- **Dinheiro em conta**: é preciso ter saldo suficiente disponível em sua conta para efetuar a devolução do valor, caso contrário, a transação não será realizada
- **Processamento da order**: será possível reembolsar apenas uma transação específica, seja parcialmente ou não, mas para que a order seja reembolsada totalmente é necessário que **todas as suas transações incluídas manualmente** sejam estornadas por completo.

Para realizar reembolsos integrais ou parciais de um pagamento e consultar os reembolsos feitos em sua loja, visite nossa Referência API e acesse o endpoint de :TagComponent{tag="API" text="Reembolsar uma order" href="/developers/pt/reference/orders/online-payments/refund/post"}.

## Cancelamentos

Transações que ocorrem quando uma compra é realizada, mas por algum motivo o pagamento não foi aprovado. Nesse caso, considerando que a transação não foi processada e nenhum valor foi transacionado, a compra é cancelada e a cobrança não é efetivada.

Antes de realizar o cancelamento de uma compra, é preciso atentar-se os seguintes fatores:

- **Status de pagamento**: os cancelamentos somente poderão ser realizados caso o status de pagamento esteja como `action_required`. Esses status são exibidos na resposta da chamada ao endpoint de :TagComponent{tag="API" text="Obter order" href="/developers/pt/reference/orders/online-payments/get-order/get"} nos campos `status` e `status_detail`, respectivamente.
- **Prazo de vencimento**: um pagamento expira após 30 dias sem confirmação e o cancelamento é automático. O status final dessa transação aparecerá como `cancelled` ou `expired`. Essas informações serão exibidas na resposta da chamada ao endpoint de :TagComponent{tag="API" text="Cancelar order" href="/developers/pt/reference/orders/online-payments/cancel-order/post"}, nos campos `status` e `status_detail`, respectivamente.

Visite nossa Referência API para ter acesso ao endpoint de :TagComponent{tag="API" text="Cancelar order por ID" href="/developers/pt/reference/orders/online-payments/cancel-order/post"}.