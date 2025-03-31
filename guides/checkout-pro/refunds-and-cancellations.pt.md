# Reembolsos e cancelamentos

Os reembolsos e cancelamentos são ações que você pode realizar uma vez que um pagamento tenha sido efetuado. Ambas as ações envolvem a devolução do dinheiro e, por isso, é importante identificar suas diferenças para executar corretamente cada um dos processos.

Um **cancelamento** é realizado quando um pagamento ainda não foi aprovado, e o dinheiro é devolvido ao cartão do comprador dentro do período definido pelo banco emissor. Por sua vez, um **reembolso** é realizado após a captura do pagamento, e a devolução do montante é feita diretamente na fatura, no caso de um cartão de crédito, ou na conta do pagador, quando o pagamento foi realizado por outros meios.

Veja mais informações sobre reembolsos e cancelamentos a seguir.

> RED_MESSAGE
>
> Importante
>
> Esta documentação está **destinada a integradores**. Se você é um comprador e precisa cancelar ou solicitar o reembolso de um pagamento, acesse sua conta do Mercado Pago, selecione a compra para a qual deseja solicitar, clique em "Preciso de ajuda" e escolha a opção de reembolso ou cancelamento.

## Reembolsos

Os reembolsos, transações que são realizadas quando uma cobrança determinada é revertida e os montantes pagos retornam ao comprador, são diretamente gerenciados através da API [Criar reembolso](/developers/pt/reference/chargebacks/_payments_id_refunds/post).

É possível realizar um reembolso de duas maneiras: 

- **Total**: quando o valor total da venda é devolvido ao comprador. Neste caso, não se deve indicar o valor a ser reembolsado no `body` da solicitação, que deve ser enviado vazio.
- **Parcial**: quando apenas uma parte do valor pago é devolvida ao comprador. Neste caso, deve-se especificar a quantia a ser reembolsada no `body` da solicitação junto com o ID da transação.

Antes de realizar um reembolso, é importante levar em consideração os seguintes fatores:

- **Prazo de reembolso**: é possível reembolsar um pagamento dentro de 180 dias a partir da sua data de aprovação.
- **Meio de pagamento**: para pagamentos com cartão de crédito, o valor será devolvido diretamente na fatura. Para outros meios de pagamento,----[mlb]----como Pix, por exemplo,------------ o valor será devolvido na conta do pagador.
- **Dinheiro na conta**: é necessário ter saldo suficiente disponível na sua conta para efetuar a devolução do valor; caso contrário, a transação não será realizada.
- **Processamento do pedido em modo manual**: será possível reembolsar apenas uma transação específica, seja parcial ou totalmente, mas para que o pedido seja reembolsado na sua totalidade é necessário que **todas as suas transações incluídas manualmente** sejam revertidas por completo.

Para realizar reembolsos totais ou parciais de um pagamento e consultar os reembolsos realizados na sua loja, visite nossas APIs [Criar reembolso](/developers/pt/reference/chargebacks/_payments_id_refunds/post), [Obter lista de reembolsos](/developers/pt/reference/chargebacks/_payments_id_refunds/get) e [Obter reembolso específico](/developers/pt/reference/chargebacks/_payments_id_refunds_refund_id/get).

## Cancelamentos

Os cancelamentos são transações que ocorrem quando uma compra é realizada, mas por algum motivo, o pagamento não é aprovado. Neste caso, considerando que a transação não foi processada e nenhum valor foi transacionado, a compra é cancelada e a cobrança não é efetuada.

Antes de realizar o cancelamento de uma compra, é importante prestar atenção aos seguintes fatores:

- **Status do pagamento**: os cancelamentos só poderão ser realizados se o status do pagamento for `pending` ou `in_process`. Esse status é mostrado na resposta da chamada à API [Criar cancelamento](/developers/pt/reference/chargebacks/_payments_payment_id/put), nos campos `status` e `status_detail`, respectivamente.
- **Prazo de vencimento**: um pagamento expira após 30 dias sem confirmação e o cancelamento é automático. O status final dessa transação aparecerá como `cancelled` ou `expired`. Essas informações serão mostradas na resposta da chamada à API [Criar cancelamento](/developers/pt/reference/chargebacks/_payments_payment_id/put), nos campos `status` e `status_detail`, respectivamente.

Visite nossa Referência de API para acessar a API [Criar cancelamento](/developers/pt/reference/chargebacks/_payments_payment_id/put).