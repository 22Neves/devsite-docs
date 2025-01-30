# Como criar as vinculações

Existem duas maneiras de estabelecer as vinculações: uma para aqueles que têm uma equipe de desenvolvimento dedicada e outra para aqueles que não contam com esse suporte.

## Com equipe de desenvolvimento

Caso você tenha uma equipe de desenvolvimento, poderá estabelecer as vinculações através das [APIs](/developers/pt/docs/checkout-api/customer-management).

## Sem equipe de desenvolvimento

* **Para vinculações em massa:** é possível optar pela Migração de Cofres, um processo que deve ser realizado uma única vez pela equipe de desenvolvimento do Mercado Pago. Nesta etapa, solicitaremos que você envie os dados abertos, e nós devolveremos um Customer & Card (os dados tokenizados) que permitirá o envio para cobrança, promovendo uma operação mais segura.

* **Para vinculações unitárias manuais:** você pode utilizar o [Tokenizador de Pontos de Venda](/docs/batch-payments/pos-tokenizer). Há um aplicativo web que permite carregar, uma por uma, os novos cartões que precisam ser tokenizados. Neste caso, o vendedor deverá inserir os dados abertos dos cartões.