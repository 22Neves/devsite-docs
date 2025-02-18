# Batch Payments com clientes e cartões

## Requisitos

Para realizar cobranças através de Batch Payments, é necessário:

| Requisito | Descrição |
|---|---|
| Conta do Mercado Pago | Para realizar uma integração com o Mercado Pago, você precisa ter uma conta de vendedor. Assim, poderá acessar os recursos das APIs necessárias. Se ainda não tiver, acesse o [site oficial do Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration?from_landing=true&contextual=company&entity=pj) para criá-la gratuitamente. |
| Aplicação criada em [Suas Integrações](https://www.mercadopago.com/developers/panel/app) | As aplicações são as diferentes integrações contidas em uma ou várias lojas. Você pode criar uma aplicação para cada solução que implementar, a fim de manter tudo organizado e ter um controle que facilite a gestão. Além disso, ao criar uma aplicação, você poderá obter as credenciais necessárias para operar. Para criar sua aplicação, consulte a documentação do [Painel do desenvolvedor](/developers/es/docs/your-integrations/dashboard). |
| IP ou intervalo de IPs dos servidores que se conectarão ao SFTP | Os IP(s) ou o intervalo de IPs que terão permissão para se conectar ao SFTP devem ser definidos e informados. |
| Chave pública associada ao usuário que se conectará ao SFTP | A chave pública do usuário responsável pela conexão ao SFTP deve ser fornecida para autenticação. |
| Razão Social | Razão social da empresa ou entidade que está realizando a integração. |
| Tax ID (CNPJ) | Número de identificação fiscal (CNPJ) da empresa ou entidade. |
| País | O país onde a empresa ou entidade está registrada. |
| Nome do contato da terceira parte | Nome completo do responsável ou contato principal da terceira parte. |
| E-mail de contato da terceira parte | Endereço de e-mail para comunicação com a terceira parte. |
| Telefone de contato da terceira parte | Número de telefone para contato direto com a terceira parte. |
| E-mail do proprietário do Mercado Pago | Endereço de e-mail do proprietário da conta do Mercado Livre/Mercado Pago (Meli). |

> WARNING
> 
> Importante
> 
> Deve-se usar a mesma conta e a mesma aplicação com a qual foram gerados os vínculos.

A seguir, junto com o SFTP, devolveremos os seguintes dados de conexão:

| Dados de conexão | Descrição |
|---|---|
| UserName | Nome de usuário necessário para a conexão ao SFTP. |
| Host | URL de conexão do servidor. |

> NOTE
> 
> Nota
> 
> O carregamento de arquivos está disponível 24 horas por dia, 7 dias por semana. O período de processamento varia de 1 a 5 dias úteis.