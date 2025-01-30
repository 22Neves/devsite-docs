# Formato de entrada 

Este é o formato de entrada requerido para o fluxo de cobranças em lote:

* **Formato:** Arquivo CSV, com campos separados por ponto e vírgula (";").
* **Nome do arquivo:** O nome do arquivo deve seguir o formato: `namefile.csv`
    * **namefile:** Nome atribuído ao arquivo (obrigatório).
    * **.csv:** Extensão do arquivo (obrigatória).
* **Expressão regular:** O nome do arquivo deve cumprir a seguinte expressão regular: `(?i)^[^$%&|<>#=]+\.csv$`

> NOTE
> 
> Observação
> 
> Validações são realizadas para evitar a duplicação de nomes de arquivos. Se arquivos com nomes idênticos forem enviados, um erro será gerado. Além disso, também serão realizadas verificações para identificar conteúdos duplicados nos arquivos. Se arquivos com conteúdos idênticos forem detectados, um erro será gerado.

Exemplo:

```csv
external_reference;card_id;payer_id;amount;reason;echo_data;soft_descriptor
24324234332;3154;1234-1234;299;Exemplo de pagamento;dado aleatório;NomeDaEmpresa
24324234332;3154;1234-1234;Exemplo de pagamento;dado aleatório;NomeDaEmpresa
24324234332;3154;1234-1234;299;Exemplo de pagamento;dado aleatório;NomeDaEmpresa
24324234332;3154;1234-1234;299;Exemplo de pagamento;dado aleatório;NomeDaEmpresa
```

| Campo | Formato | Descrição |
|---|---|---|
| `external_reference` | Aceita apenas caracteres alfanuméricos, barras (“/”) e traços (“-”, “_”). | Identificador utilizado para a reconciliação do pagamento no sistema do vendedor. |
| `card_id` | - | Identificador obtido durante o vínculo, que representa o cartão. |
| `payer_id` | - | Identificador obtido durante o vínculo, que representa o cliente (pagador). |
| amount | - | Valor a ser cobrado. Este campo é validado de acordo com a moeda local especificada pelo vendedor. <ul><li>Exemplo:</li><li>Para vendedores da Argentina, o campo deve ser separado por “,” (vírgula) nos decimais.</li><li>Para vendedores do México, o campo deve ser separado por “.” (ponto) nos decimais.</li></ul> |
| `reason` | - | Opcional. Detalhe ou explicação sobre a cobrança. |
| `echo_data` | - | Opcional. Informação adicional que não será utilizada, mas que pode ser enviada pelo vendedor. |
| `soft_descriptor` | Aceita apenas caracteres alfanuméricos. | Opcional. Descrição que será exibida na fatura do banco emissor do cartão do cliente. Se preenchido, o campo aceita apenas caracteres alfanuméricos. Caso contrário, o pagamento não será processado e o relatório indicará a rejeição com a mensagem: “O soft_descriptor inserido é inválido”. O campo tem um limite de 50 caracteres. |

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
* **Cliente ou cartão inválidos:** O cliente ou o cartão não pertencem a uma das partes (Vendedor ou Pagador).