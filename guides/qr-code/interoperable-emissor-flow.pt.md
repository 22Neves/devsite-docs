# Fluxo emissor

> WARNING
>
> Importante  
>
> A funcionalidade de QR interoperável só pode ser configurada por **carteiras digitais** externas ao Mercado Pago. Se você não for representante de uma carteira digital, dirija-se à [Configuração de integração](/developers/pt/docs/qr-code/introduction) para configurar a opção que mais se adeque ao seu modelo de negócio.


As carteiras digitais externas ao Mercado Pago têm a possibilidade de solicitar o cadastrodo fluxo emissor de códigos QR interoperáveis. Ou seja, solicitar ao Mercado Pago que inicie o processo de testes necessário para que códigos QR de outras carteiras sejam escaneados e pagos através do Mercado Pago.

Para iniciar essa solicitação, quem representar a carteira digital interessada deverá entrar em contato com nossa equipe de Suporte e fornecer as seguintes informações.

## Dados da carteira

Ao entrar em contato com o Suporte, será necessário que você forneça as seguintes informações.

| Dado | Descrição |
|---|---|
| **Denominação** | Nome comercial da carteira digital, como é conhecida no mercado. |
| **Razão social** | Nome oficial da empresa à qual pertence a carteira digital. |
| **CUIT** | Chave Única de Identificación Tributaria da empresa.|
| **IEP** | URI da API resolve do aceitador, que deverá ser chamada para a resolução dos códigos QR. |

## Questionário

Para avançar com os testes e homologação, a equipe de Suporte também solicitará as respostas ao seguinte questionário:

1. Qual administrador utilizam? COELSA, Prisma, Link ou algum outro?
2. Qual é o nome e os IDs (de homologação e produção) que têm registrados no administrador?
3. Que tipos de códigos QR permitem? Estáticos ou dinâmicos?
4. Utilizam valor aberto e fechado nos códigos QR?
5. Têm a IEP para todos os tipos de códigos QR?
6. Têm implementados fluxos de reembolso total e/ou parcial? Se não, há planos para tê-los?
7. Qual é a data prevista para entrar em um ambiente produtivo?
8. Estão dentro do workspace QRIA? Podem compartilhar um contato para que os busquemos lá?
9. Poderiam anexar os QR necessários para que o Mercado Pago possa realizar os testes necessários?
10. Quais são os e-mails de contato em caso de dúvidas? Tenham em mente que esses e-mails podem ser adicionados ao ticket de Suporte posteriormente.

Uma vez fornecidas todas as informações requeridas, será a própria equipe de Suporte quem comunicará a programação dos testes e seus resultados à carteira solicitante.

