
# Formato de entrada 

Este é o formato de entrada requerido para o fluxo de reembolsos em batch:

* **Formato:** Arquivo CSV, com campos separados por ponto e vírgula (";").
* **Nome do Arquivo:** O nome do arquivo deve seguir o formato `namefile.csv`.
* **namefile:** Nome atribuído ao arquivo (obrigatório).
* **.csv:** Extensão do arquivo (obrigatória).

Exemplo:

```csv
payment_id;external_reference;amount
123;ext_ref_1;100
1234;ext_ref_2;200
```

| Campo | Descrição |
|---|---|
| payment_id | ID identificador do pagamento. |
| external_reference | ID para a reconciliação do reembolso no sistema do vendedor. |
| amount | Montante a ser reembolsado. Este campo é validado de acordo com a moeda local especificada pelo vendedor. Exemplo:<br/>1. Para vendedores da Argentina, o campo deve ser separado por “,” (vírgula) nos decimais.<br/>2. Para vendedores do México, o campo deve ser separado por “.” (ponto) nos decimais. |

## Possíveis erros de carga ou processamento

> WARNING
> 
> Importante
> 
> O SFTP fornecido deve ser utilizado exclusivamente para o envio de arquivos novos. Qualquer movimentação ou criação de novas pastas resultará no reprocessamento dos arquivos.

* **Nome de arquivo inválido:** Alguns caracteres não são permitidos no nome do arquivo (como $, %, &, |, <, >, #, =), ou o arquivo já foi processado anteriormente.
* **Nome de arquivo já utilizado:** O nome do arquivo foi utilizado em um processamento anterior.
* **Arquivo já processado:** Existe uma validação para evitar o processamento de arquivos idênticos.
* **Descumprimento no formato ou tipo de dados válidos no CSV:** O arquivo não atende aos requisitos de formato ou contém tipos de dados inválidos.
* **Caracteres especiais não permitidos:** Não são permitidos caracteres especiais (como ñ, &%·!”?¿, entre outros).
* **Montantes inválidos:** Os valores devem estar de acordo com a moeda especificada, não podem ser negativos e devem corresponder ao valor do pagamento.
