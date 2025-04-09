# Integrar via API para Ponto de Venda

A API de Integrações Point é uma ferramenta que possibilita a conexão dos seus Pontos de Venda (PDV) com o ecossistema de Point. Essa conexão facilita o recebimento de pagamentos nos terminais previamente configurados por você, assegurando uma experiência de pagamento consistente e integrada.

> RED_MESSAGE
>
> Mercado Pago está evoluindo a maneira de integrar e agora oferecemos uma nova API para realizar integrações com o Mercado Pago Point, que descontinuará a API atual. Caso você esteja integrando esta solução de pagamento pela primeira vez, utilize os endpoints da nova API de Orders. Se você já integrou Point anteriormente, em breve traremos mais informações sobre o processo de migração.

Veja abaixo o diagrama que ilustra o mecanismo de funcionamento da integração.

![Diagram 1](/images/point-api/1-diagram-pt.png)

----[mla]----
> NOTE
>
> Nota
>
> A integração é compatível com os dispositivos **Point Plus (POS)** e **Point Smart**. Se deseja adquirir um, consulte nossa [loja oficial](https://www.mercadopago.com.ar/point). Vale ressaltar que o dispositivo aceita exclusivamente cartões, pagamentos sem contato e SWIFT como métodos de pagamento.

------------
----[mlm, mlb]----
> NOTE
>
> Nota
>
> A integração é compatível com o dispositivo **Point Smart**. Se deseja adquirir um, consulte nossa [loja oficial](https://www.mercadopago.com.mx/point). Vale ressaltar que o dispositivo aceita exclusivamente cartões, pagamentos sem contato e SWIFT como métodos de pagamento.

------------

## Vantagens

* **Segurança**: todas as solicitações são feitas através de HTTPS e autenticadas por OAuth, garantindo a proteção de seus dados e transações.
* **Facilidade de uso**: você só precisa das suas credenciais de acesso para começar a usar nossa plataforma sem complicações ou atrasos.
* **Agilidade na gestão**: gerencie seus pedidos de pagamento diretamente do seu Ponto de Venda, agilize seus processos e melhore a experiência do cliente.
* **Eficiência**: Nossa integração reduz a probabilidade de erros ao cobrar, garantindo uma operação fluida e segura. Além disso, permite automatizar tarefas para otimizar seu desempenho e resultados

### Funcionamento da API

![Mercado Pago Point Flow](/images/point-api/2-flow-diagram-pt.png)