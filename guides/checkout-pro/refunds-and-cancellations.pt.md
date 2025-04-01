# Reembolsos e cancelamentos

Os **reembolsos** e **cancelamentos** são ações disponíveis após a realização de um pagamento. Embora ambas envolvam a devolução de dinheiro, é crucial compreender suas diferenças para executar os processos corretamente.

- **Cancelamento**: Realizado quando um pagamento ainda não foi aprovado. Nesse caso, o valor é devolvido ao cartão do comprador dentro do prazo estabelecido pelo banco emissor.

- **Reembolso**: Ocorre após a captura do pagamento. O valor é devolvido diretamente na fatura (em pagamentos com cartão de crédito) ou na conta do pagador (para outros métodos).

Abaixo, detalhamos as informações essenciais sobre cada processo.

> RED_MESSAGE
>
> Importante
>
> Esta documentação está **destinada a integradores**. Se você é um comprador e precisa cancelar ou solicitar o reembolso de um pagamento, acesse sua conta do Mercado Pago, selecione a compra, clique em "Preciso de ajuda" e escolha entre as opções de reembolso ou cancelamento.

## Reembolsos

Os **reembolsos** referem-se à reversão de uma cobrança, devolvendo os montantes ao comprador. Esse processo é gerenciado diretamente através da API [Criar reembolso](/developers/pt/reference/chargebacks/_payments_id_refunds/post). Existem duas formas de realizar reembolsos:

- **Total**: O valor completo da venda é devolvido ao comprador. Nesse caso, o `body` da solicitação deve ser enviado vazio.
- **Parcial**: Apenas uma parte do valor pago é devolvida ao comprador. O valor a ser reembolsado deve ser especificado no `body` da solicitação, juntamente com o ID da transação.

Antes de realizar um reembolso, é importante levar em consideração os seguintes fatores:

- **Prazo de reembolso**: Reembolsos podem ser realizados dentro de 180 dias após a aprovação do pagamento.
- **Meio de pagamento**: Pagamentos com cartão de crédito são devolvidos na fatura; outros métodos,----[mlb]----como Pix, por exemplo,------------ têm o valor devolvido na conta do pagador.
- **Dinheiro na conta**: É necessário ter saldo suficiente na conta para efetuar o reembolso. Caso contrário, a transação será rejeitada.
- **Processamento do pedido em modo manual**: Apenas transações individuais podem ser reembolsadas manualmente. Para reembolsar uma compra completa, todas as transações associadas devem ser revertidas.

Para realizar reembolsos totais ou parciais de um pagamento e consultar os reembolsos realizados na sua loja, consulte as APIs [Criar reembolso](/developers/pt/reference/chargebacks/_payments_id_refunds/post), [Obter lista de reembolsos](/developers/pt/reference/chargebacks/_payments_id_refunds/get) e [Obter reembolso específico](/developers/pt/reference/chargebacks/_payments_id_refunds_refund_id/get).

## Cancelamentos

Os cancelamentos são operações realizadas quando uma compra é efetuada, mas o pagamento não é aprovado por algum motivo. Nesse caso, como a transação não foi concluída e nenhum valor foi processado, a compra é anulada e a cobrança não é efetuada.

Antes de realizar o cancelamento de uma compra, é importante levar em consideração os seguintes fatores:

- **Status do pagamento**: Cancelamentos podem ser realizados apenas se o status do pagamento for `pending` ou `in_process`. Essas informações são exibidas nos campos `status` e `status_detail` da resposta da API [Criar cancelamento](/developers/pt/reference/chargebacks/_payments_payment_id/put), respectivamente.
- **Prazo de vencimento**: Pagamentos expiram automaticamente após 30 dias sem confirmação. O status final será `cancelled` ou `expired`, conforme indicado nos campos `status` e `status_detail` da API [Criar cancelamento](/developers/pt/reference/chargebacks/_payments_payment_id/put), respectivamente.

Para mais informações, consulte a API [Criar cancelamento](/developers/pt/reference/chargebacks/_payments_payment_id/put).