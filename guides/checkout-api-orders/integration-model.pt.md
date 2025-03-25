# Modelo de integração

----[mlb]---- Checkout Transparente------------ ----[mla, mlm, mlu, mco, mlc, mpe]---- Checkout API ------------ agora processa pagamentos com **Orders**. Se trata de uma API projetada para simplificar seu desenvolvimento com o Mercado Pago: com uma única integração, você poderá acessar diversas soluções de pagamento.

Além disso, a API torna o código de integração mais intuitivo e fornece mensagens de erro mais detalhadas, facilitando o processo de desenvolvimento.

## Diferenças no processamento

Anteriormente, os pagamentos via ----[mlb]---- Checkout Transparente------------ ----[mla, mlm, mlu, mco, mlc, mpe]---- Checkout API ------------ eram processados exclusivamente pela **API de Pagamentos**. Agora, também é possível processá-los por meio de Orders, que oferece uma alternativa eficiente e simples para a integração. 

Veja abaixo as principais diferenças entre as duas opções.

| Funcionalidade  |  API de Pagamentos  | API de Orders |
| --- | --- |--- |
| Processamento do pagamento  | Automático (crie e processe sua transação) | Automático e manual (escolhendo quando processar a  sua transação) . |
| Transações | Uma transação por requisição. | Múltiplas transações por requisição. |
| Operações  | Pagamentos online. | Pagamentos online e Pagamentos presenciais (Point do Mercado Pago).|
| Notificações  | Configuração avançada por `notification_url`. | Configuração mais simples a partir de [Suas integrações](/developers/docs/your-integrations/introduction). |
| Validação dos erros  | Retorna um erro por vez.  | Retorna uma lista com todos os erros na requisição. |

## Modos de processamento de Orders

Uma order de pagamentos online pode ser criada para ser processada de dois modos: **Modo automático** e **Modo manual**. 

### Modo automático

O **modo automático** é o modo padrão da aplicação. Por meio dele, a transação é concluída em uma única etapa e as modificações são limitadas.

### Modo manual

O **modo manual** é o modo personalizável da aplicação, que permite dividir o processamento do pagamento em etapas que podem ser configuradas e executadas de maneira incremental.

Além disso, é possível configurar cada etapa do processo de pagamento, adaptando-se a diferentes necessidades e cenários.