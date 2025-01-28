
# Formato de entrada para migração de cofres para uma tokenização

O formato do arquivo de entrada deve ser CSV separado por vírgulas (","), e o nome do arquivo deve seguir uma nomenclatura definida pelo Mercado Pago, que será comunicado oportunamente.

A seguir, mostramos um exemplo:

```
Filler,external_reference,customer_email,Filler,Filler,card_number,expiration_month,expiration_year,cardholder_name,Filler
,217307543,test1@gmail.com,,,4356141052114191,11,25,Mary Meir,
,485342254,test2@gmail.com,,,4356141052114192,02,28,Jhon Doe,
```

Todos os campos são obrigatórios. A seguir, estão as descrições detalhadas de cada campo e suas particularidades:

| Campo | Descrição | Requerido ou opcional |
|---|---|---|
| `filler` | Estes campos devem ser preenchidos com um espaço em branco, pois são necessários para nosso processamento interno. | Requerido. |
| `external_reference` | Referência do pagador no sistema do vendedor. | Requerido. |
| `customer_email` | E-mail do usuário pagador associado à vinculação. | Requerido. |
| `card_number` | Número do cartão (PAN). | Requerido. |
| `expiration_month` | Mês de vencimento do cartão. | Requerido. |
| `expiration_year` | Ano de vencimento do cartão. | Requerido. |
| `cardholder_name` | Nome que aparece no cartão. | Requerido. |

> WARNING
>
> Importante
>
> Caso não disponha das informações de algum campo (por exemplo: data de vencimento ou nome do titular do cartão), preencha com dados fictícios.

## Validações do arquivo de entrada

A seguir, detalharemos as validações que são realizadas durante o processamento do arquivo de entrada:

* É importante ressaltar que **o limite para associar cartões a um único e-mail é de 20 cartões**. Se esse limite for ultrapassado, a linha correspondente não poderá ser processada.
* A data de vencimento do cartão deve ser uma data futura.
* Serão realizadas validações nos caracteres dos e-mails e no nome do titular do cartão.
* O nome do arquivo deve estar conforme acordado anteriormente.