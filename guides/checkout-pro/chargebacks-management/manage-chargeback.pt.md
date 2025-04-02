# Gerenciar contestações 

Ao receber uma notificação de início de contestação, utilize os dados fornecidos para auxiliar no gerenciamento do processo. Esses dados serão fundamentais para preparar e enviar a documentação necessária à disputa.

Nesta etapa, analise as informações detalhadas incluídas na notificação para compreender os aspectos específicos da contestação. Abaixo, apresentamos um diagrama que ilustra como funciona o fluxo de envio e recebimento da documentação:

![Chargebacks](/images/cow/chargebacks-flow.png) 

## Consultar contestação

Inicie o processo consultando as informações da contestação utilizando o `id` ou o `payment_id` fornecidos no corpo da notificação. A partir dos detalhes obtidos, será possível avaliar se há necessidade de envio da documentação para dar continuidade ao processo de contestação.

:::::TabsComponent

::::TabComponent{title="Consultar contestação através do id"}

Para consultar mais informações sobre a contestação, envie um GET ao endpoint [/v1/chargebacks/{id}](/developers/pt/reference/chargebacks/_chargebacks_id/get), substituindo o campo `id` pelo `id` da contestação trazido no `body` da notificação:

```
curl --location --globoff 'https://api.mercadopago.com/v1/chargebacks/{id}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{access_token}}'
```

Confira abaixo um exemplo de resposta à requisição:

```
{
    "id": "234000062890459000",
    "payments": [
        86439942806
    ],
    "currency": "ARS",
    "amount": 1000.50,
    "reason": "general",
    "coverage_applied": null,
    "coverage_elegible": true,
    "documentation_required": false,
    "documentation_status": "not_supplied",
    "documentation": [],
    "date_documentation_deadline": null,
    "date_created": null,
    "date_last_updated": "2024-10-17T12:48:24.000-04:00",
    "live_mode": true
}
```
::::

::::TabComponent{title="Consultar contestação através do payment_id"}
Para consultar mais informações sobre a contestação, execute um GET ao endpoint [/v1/chargebacks/{id}](/developers/pt/reference/chargebacks/_chargebacks_id/get), substituindo o campo `payment_id` pelo `payment_id` da contestação trazido no body da notificação:

```
curl --location 'https://api.mercadopago.com/v1/chargebacks/search?payment_id={payment_id}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{access_token}}'
```

Confira abaixo um exemplo de resposta à requisição:

```
{
    "paging": {
        "offset": 0,
        "limit": 25,
        "total": 1
    },
    "results": [
        {
            "id": "234000062890459000",
            "payments": [
                86439942806
            ],
            "currency": "ARS",
            "amount": 1000.5,
            "reason": "general",
            "coverage_applied": null,
            "coverage_elegible": true,
            "documentation_required": false,
            "documentation_status": "not_supplied",
            "documentation": [],
            "date_documentation_deadline": null,
            "date_created": null,
            "date_last_updated": "2024-10-17T12:48:24.000-04:00",
            "live_mode": true
        }
    ]
}
```
::::

:::::

## Enviar documentação 

Na resposta à consulta realizada para obter mais informações sobre a contestação, será indicado se você deve enviar a documentação necessária para contestá-lo. Você só precisará fazê-lo se o campo `documentation_required` for true e o campo `date_documentation_deadline` indicar uma data futura. 

Nesta etapa, você poderá enviar a documentação que comprove que a venda é válida através do seguinte POST:

> RED_MESSAGE
>
> Importante
>
> Os arquivos devem ser enviados em formato .jpg, .png ou .pdf e ter um tamanho máximo de até 10MB. 

```
curl -X POST  \
-F 'files[]=@/path/to/file/file1.png' \
-F 'files[]=@/path/to/file/file2.pdf' \
-H 'Authorization: Bearer {{access_token}}'
https://api.mercadopago.com/v1/chargebacks/{id}/documentation
```

Se os arquivos forem enviados com sucesso, a API retornará um código `HTTP 200` e o `documentation_status` da contestação será alterado para `review_pending`.

Após receber a documentação, o Mercado Pago atua como mediador no processo de resolução da contestação. A análise é iniciada junto à bandeira do cartão, que então envia a documentação recebida ao banco emissor do cartão. Uma vez que a análise do banco é concluída, a resolução da contestação é determinada e as partes envolvidas são notificadas. 

Aguarde a notificação Webhook referente à resolução e cheque novamente a contestação usando o endpoint [Obter estorno](/developers/pt/reference/chargebacks/_chargebacks_id/get). Após a resolução, o campo `coverage_applied` indicará o resultado e assumirá um dos possíveis valores:

| Valor | Descrição                                                                 |
|-------|---------------------------------------------------------------------------|
| `true`  | Indica que a decisão foi a favor do vendedor e o dinheiro será devolvido. |
| `false` | Indica que a decisão foi contra o vendedor e o dinheiro será descontado.  |

> RED_MESSAGE
>
> Importante
>
> A resolução da contestação pode levar até 6 meses, dependendo da bandeira do cartão.

## Status de pagamento

Quando uma contestação é iniciada, o status do pagamento associado é diretamente impactado. Inicialmente, o `status` é alterado para `charged_back` e o `status_detail` para `in_process`. Após a conclusão da análise da contestação, seja pela decisão do banco emissor, pela determinação da elegibilidade para cobertura pelo Mercado Pago ou pela ausência de documentação fornecida, o `status_detail` do pagamento será atualizado para `settled` ou `reimbursed`.


| Status      | Status detail | Descrição                                                                 |
|------------------|-------------------|-------------------------------------------------------------------------------|
| `charged_back`     | `in_process`        | Contestação recebida. A disputa do pagamento está em andamento, aguardando uma decisão final. |
| `charged_back`     | `settled`           | Decisão contra o vendedor. Dinheiro retirado da conta do vendedor.            |
| `charged_back`     | `reimbursed`        | Decisão favorável ao vendedor. Dinheiro reembolsado para a conta do vendedor. |

