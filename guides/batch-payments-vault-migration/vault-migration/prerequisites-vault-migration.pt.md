# Requisitos prévios

Para utilizar tanto o produto de Migração de Cofres quanto o produto de Pagamentos em Lote, será necessário cumprir com os seguintes requisitos:

| Requisito | Descrição |
|---|---|
| Conta de vendedor do Mercado Pago | Para integrar com o Mercado Pago, você precisa de uma conta de vendedor no Mercado Pago. Se você não tiver uma, [clique aqui](https://www.mercadopago.com.ar/hub/registration/landing) para criá-la gratuitamente. |
| Aplicação criada em [Suas Integrações](https://www.mercadopago.com/developers/panel/app) | As aplicações são as diversas integrações contidas em uma ou várias lojas. Você pode criar uma aplicação para cada solução que implementar, a fim de ter tudo organizado e manter um controle que facilite a gestão. Consulte [Suas integrações](https://www.mercadopago.com.ar/developers/es/docs/batch-payments/additional-content/your-integrations/introduction) para obter mais informações sobre como criar uma aplicação. |

## Migração de cofres

Se for necessário realizar o processo de migração de um cofre, serão requeridos:

### Com processador de pagamentos atual

| Requisito | Descrição |
|---|---|
| AOC (Atestado de Conformidade) do PSP | Necessário quando há um processador de pagamentos que mantém o cofre. |

### Sem processador de pagamentos atual

| Requisito | Descrição |
|---|---|
| AOC (Atestado de Conformidade) | O AOC é necessário se a empresa estiver em conformidade com o PCI (Payment Card Industry). Caso contrário, deve ser apresentado um [SAQ-D](https://docs-prv.pcisecuritystandards.org/SAQ%20(Assessment)/SAQ/PCI-DSS-v4-0-SAQ-D-Merchant-r1.pdf) assinado e completo. |

No caso de o SFTP ser fornecido pelo Mercado Pago e a migração seguir o procedimento padrão, será necessário fornecer os seguintes dados:

| Requisito | Descrição |
|---|---|
| IP ou Rango de IPs | Endereços dos servidores que se conectarão ao SFTP. |
| Chave pública do usuário SFTP | Chave utilizada para a autenticação. Deve ser fornecida no formato SSH2 (ssh-rsa) e será convertida para OpenSSH. |
| Nome do terceiro | Nome da pessoa responsável pelo contato. |
| E-mail de contato do terceiro | E-mail do contato responsável. |
| Telefone de contato do terceiro | Número de telefone do contato do terceiro. |

A seguir, devolveremos os seguintes dados de conexão:

| Dados de conexão | Descrição |
|---|---|
| UserName | Nome de usuário necessário para a conexão ao SFTP. |
| Host | URL de conexão do servidor. |
| Chave pública de criptografia | Chave utilizada para criptografar o arquivo. |