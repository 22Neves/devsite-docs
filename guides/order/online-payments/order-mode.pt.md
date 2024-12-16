# Pedidos

Um pedido de pagamentos online pode ser criado para ser processado de dois modos: **Modo automático** e **Modo manual**. 

## Modo automático

O modo Automático é o modo padrão da aplicação. Por meio dele, a transação é concluída em uma única etapa e as modificações são limitadas. Para criar o pedido no modo automático, o campo `processing_mode`, que é responsável por definir o formato de criação e processamento da transação, estará como `automatic` e todas as informações serão enviadas em uma única solicitação.

As operações permitidas são: 

- [**Criar e processar order**](/developers/pt/reference/order/online-payments/create/post): responsável pela criação da order já com o processamento da transação simultâneo.
- [**Obter order**](/developers/pt/reference/order/online-payments/get-order/get): permite obter informações sobre uma order, incluindo o seu status em tempo real.
- [**Capturar order**](/developers/pt/reference/order/online-payments/capture/post): possibilita a captura do valor autorizado de uma order. Essa opção só é válida para cartões de crédito.
- [**Cancelar order**](/developers/pt/reference/order/online-payments/cancel-order/post): responsável pelo cancelamento de uma order já existente, mas que ainda não foi processada. 
- [**Reembolsar order**](/developers/pt/reference/order/online-payments/refund/post): no caso do modo automático, podem ser criados estornos totais ou parciais de um pagamento. A order será reembolsada totalmente se todas as transações forem estornadas por completo. 
  - **Reembolso total**: não deverá ser indicado o valor a ser reembolsado no `body` da requisição, que deve ser enviado vazio.
  - **Reembolso parcial**: deverá ser especificada a quantia a ser reembolsada no `body` da requisição junto com o ID da transação. Todas as outras transações permanecerão como estão e somente a transação alterada será reembolsada. 

## Modo manual

O Modo manual é onde podemos dividir o processamento da transação em etapas que podem ser configuradas e executadas de maneira incremental. Permite a personalização de cada etapa do processo de pagamento, adaptando-se a diferentes necessidades e cenários. Para criar a order no modo manual, é necessário certificar-se que o campo `processing_mode`, responsável por definir o formato de criação e processamento da transação, esteja como `manual`. 

As operações permitidas são:

- [**Criar order (sem transações ou com transações)**](/developers/pt/reference/order/online-payments/create/post): responsável pela criação e autorização da order, mas sem o processamento simultâneo.
- [**Adicionar transação**](/developers/pt/reference/order/online-payments/add-transaction/post): essa operação de adição de transações só pode ser feita no modo manual e é responsável por adicionar mais de uma transação em um mesmo _payload_. 
- **[Alterar](/developers/pt/reference/order/online-payments/update-transaction/put) e/ou [remover](/developers/pt/reference/order/online-payments/delete-transaction/delete) transação**: a alteração e remoção de transações só pode ser feita no modo manual e permitem mudar informações de pagamento que já tinham sido adicionadas anteriormente à order. São operações que modificam um item dentro de qualquer campo do parâmetro `transactions`.
- [**Capturar order**](/developers/pt/reference/order/online-payments/capture/post): responsável por capturar o valor autorizado de um order. Essa opção só é válida para cartões de crédito.
- [**Processar transação**](/developers/pt/reference/order/online/process-order/post): possibilitada a execução das transações criadas e/ou alteradas no modo manual. 
- [**Obter order**](/developers/pt/reference/order/online-payments/get-order/get): permite obter informações sobre uma order, incluindo o seu status em tempo real.
- [**Cancelar order**](/developers/pt/reference/order/online-payments/cancel-order/post): responsável pelo cancelamento de um order já existente, mas não que ainda não foi processada. 
- [**Reembolsar order ou transação**](/developers/pt/reference/order/online-payments/refund/post): no modo manual podem ser criados estornos totais ou parciais de um pagamento. A order será reembolsada totalmente se todas as transações forem estornadas por completo. 
  - **Reembolso total**: não deverá ser indicado o valor a ser reembolsado no `body` da requisição, que deve ser enviado vazio.
  - **Reembolso parcial**: deverá ser especificada a quantia a ser reembolsada no `body` da requisição junto com o ID da transação. Todas as outras transações permanecerão como estão e somente a transação alterada será reembolsada. 