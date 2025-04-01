O Mercado Pago fornece **cartões de teste** que permitirão que você teste pagamentos sem usar um cartão real.

Seus dados, como número, código de segurança e data de validade, podem ser combinados com os **dados relativos ao titular do cartão**, que permitirão que você teste diferentes cenários de pagamento. Ou seja, **você pode usar as informações de qualquer cartão de teste e testar resultados de pagamento diferentes a partir dos dados do titular**.

A seguir, você pode ver os **dados dos cartões de débito e crédito de teste**. Selecione aquele que você quer usar para testar sua integração.

----[mla]----
| Tipo de cartão | Bandeira | Número | Código de segurança | Data de vencimento |
| :--- | :---: | :---: | :---: | :---: |
| Cartão de crédito | Mastercard | 5031 7557 3453 0604 | 123 | 11/30 |
| Cartão de crédito | Visa | 4509 9535 6623 3704 | 123 | 11/30 |
| Cartão de crédito | American Express | 3711 803032 57522 | 1234 | 11/30 |
| Cartão de débito | Mastercard | 5287 3383 1025 3304 | 123 | 11/30 |
| Cartão de débito | Visa | 4002 7686 9439 5619 | 123 | 11/30 |

------------
----[mlb]----
| Tipo de cartão | Bandeira | Número | Código de segurança | Data de vencimento |
| :--- | :---: | :---: | :---: | :---: |
| Cartão de crédito | Mastercard | 5031 4332 1540 6351 | 123 | 11/30 |
| Cartão de crédito | Visa | 4235 6477 2802 5682 | 123 | 11/30 |
| Cartão de crédito | American Express | 3753 651535 56885 | 1234 | 11/30 |
| Cartão de débito | Elo | 5067 7667 8388 8311 | 123 | 11/30 |
------------
----[mlc]----
| Tipo de cartão | Bandeira | Número | Código de segurança | Data de vencimento |
| :--- | :---: | :---: | :---: | :---: |
| Cartão de crédito | Mastercard | 5416 7526 0258 2580 | 123 | 11/30 |
| Cartão de crédito | Visa | 4168 8188 4444 7115 | 123 | 11/30 |
| Cartão de crédito | American Express | 3757 781744 61804 | 1234 | 11/30 |
| Cartão de débito | Mastercard | 5241 0198 2664 6950 | 123 | 11/30 |
| Cartão de débito | Visa | 4023 6535 2391 4373 | 123 | 11/30 |

------------
----[mco]----
| Tipo de cartão | Bandeira | Número | Código de segurança | Data de vencimento |
| :--- | :---: | :---: | :---: | :---: |
| Cartão de crédito | Mastercard | 5254 1336 7440 3564| 123 | 11/30 |
| Cartão de crédito | Visa | 4013 5406 8274 6260 | 123 | 11/30 |
| Cartão de crédito | American Express | 3743 781877 55283 | 1234 | 11/30 |
| Cartão de débito | Visa | 4915 1120 5524 6507 | 123 | 11/30 |
------------
----[mlm]----
| Tipo de cartão | Bandeira | Número | Código de segurança | Data de vencimento |
| :--- | :---: | :---: | :---: | :---: |
| Cartão de crédito | Mastercard | 5474 9254 3267 0366 | 123 | 11/30 |
| Cartão de crédito | Visa | 4075 5957 1648 3764 | 123 | 11/30 |
| Cartão de débito | Mastercard | 5579 0534 6148 2647 | 123 | 11/30 |
| Cartão de débito | Visa | 4189 1412 2126 7633 | 123 | 11/30 |
------------
----[mlu]----
| Tipo de cartão | Bandeira | Número | Código de segurança | Data de vencimento |
| :--- | :---: | :---: | :---: | :---: |
| Cartão de crédito | Mastercard | 5031 7557 3453 0604 | 123 | 11/30 |
| Cartão de crédito | Visa | 4509 9535 6623 3704 | 123 | 11/30 |
| Cartão de débito | Visa | 4213 0163 1470 6756 | 123 | 11/30 |
------------
----[mpe]----
| Tipo de cartão | Bandeira | Número | Código de segurança | Data de vencimento |
| :--- | :---: | :---: | :---: | :---: |
| Cartão de crédito | Mastercard | 5031 7557 3453 0604 | 123 | 11/30 |
| Cartão de crédito | Visa | 4009 1753 3280 6176 | 123 | 11/30 |
| Cartão de crédito | American Express | 3711 803032 57522 | 1234 | 11/30 |
| Cartão de débito | Mastercard | 5178 7816 2220 2455 | 123 | 11/30 |
------------

Em seguida, escolha qual cenário de pagamento testar e preencha os campos do **titular do cartão** (Nome e sobrenome e Tipo e número de documento) conforme indicado na tabela abaixo.

----[mla]----

| Status de pagamento | Nome e sobrenome do titular | Documento de identidade |
| --- | --- | --- |
| Pagamento aprovado | `APRO` | (DNI) 12345678 |
| Recusado por erro geral | `OTHE` | (DNI) 12345678 |
| Pagamento pendente | `CONT` | - |
| Recusado com validação para autorizar | `CALL` | - |
| Recusado por quantia insuficiente | `FUND` | - |
| Recusado por código de segurança inválido | `SECU` | - |
| Recusado por problema com a data de vencimento | `EXPI` | - |
| Recusado por erro no formulário | `FORM` | - |
| Rejeitado por falta de card_number | `CARD` | - |
| Rejeitado por parcelas inválidas | `INST` | - |
| Rejeitado por pagamento duplicado | `DUPL` | - |
| Rejeitado por cartão desabilitado | `LOCK` | - |
| Rejeitado por tipo de cartão não permitido | `CTNA` | - |
| Rejeitado devido a tentativas excedidas de pin do cartão | `ATTE` | - |
| Rejeitado por estar na lista negra | `BLAC` | - |
| Não suportado | `UNSU` | - |
| Usado para aplicar regra de valores | `TEST` | - |

------------
----[mlb]----

 
| Status de pagamento | Nome e sobrenome do titular | Documento de identidade |
| --- | --- | --- |
| Pagamento aprovado | `APRO` | (CPF) 12345678909 |
| Recusado por erro geral | `OTHE` | (CPF) 12345678909 |
| Pagamento pendente | `CONT` | - |
| Recusado com validação para autorizar | `CALL` | - |
| Recusado por quantia insuficiente | `FUND` | - |
| Recusado por código de segurança inválido | `SECU` | - |
| Recusado por problema com a data de vencimento | `EXPI` | - |
| Recusado por erro no formulário | `FORM` | - |
| Rejeitado por falta de card_number | `CARD` | - |
| Rejeitado por parcelas inválidas | `INST` | - |
| Rejeitado por pagamento duplicado | `DUPL` | - |
| Rejeitado por cartão desabilitado | `LOCK` | - |
| Rejeitado por tipo de cartão não permitido | `CTNA` | - |
| Rejeitado devido a tentativas excedidas de pin do cartão | `ATTE` | - |
| Rejeitado por estar na lista negra | `BLAC` | - |
| Não suportado | `UNSU` | - |
| Usado para aplicar regra de valores | `TEST` | - |
------------
----[mlc]----

 
| Status de pagamento | Nome e sobrenome do titular | Documento de identidade |
| --- | --- | --- |
| Pagamento aprovado | `APRO` | (otro) 123456789 |
| Recusado por erro geral | `OTHE` | (otro) 123456789 |
| Pagamento pendente | `CONT` | - |
| Recusado com validação para autorizar | `CALL` | - |
| Recusado por quantia insuficiente | `FUND` | - |
| Recusado por código de segurança inválido | `SECU` | - |
| Recusado por problema com a data de vencimento | `EXPI` | - |
| Recusado por erro no formulário | `FORM` | - |
| Rejeitado por falta de card_number | `CARD` | - |
| Rejeitado por parcelas inválidas | `INST` | - |
| Rejeitado por pagamento duplicado | `DUPL` | - |
| Rejeitado por cartão desabilitado | `LOCK` | - |
| Rejeitado por tipo de cartão não permitido | `CTNA` | - |
| Rejeitado devido a tentativas excedidas de pin do cartão | `ATTE` | - |
| Rejeitado por estar na lista negra | `BLAC` | - |
| Não suportado | `UNSU` | - |
| Usado para aplicar regra de valores | `TEST` | - |

------------
----[mco]----

 
| Status de pagamento | Nome e sobrenome do titular | Documento de identidade | 
| --- | --- | --- | 
| Pagamento aprovado | `APRO` | 123456789 |
| Recusado por erro geral | `OTHE` | 123456789 |
| Pagamento pendente | `CONT` | - |
| Recusado com validação para autorizar | `CALL` | - |
| Recusado por quantia insuficiente | `FUND` | - |
| Recusado por código de segurança inválido | `SECU` | - |
| Recusado por problema com a data de vencimento | `EXPI` | - |
| Recusado por erro no formulário | `FORM` | - |
| Rejeitado por falta de card_number | `CARD` | - |
| Rejeitado por parcelas inválidas | `INST` | - |
| Rejeitado por pagamento duplicado | `DUPL` | - |
| Rejeitado por cartão desabilitado | `LOCK` | - |
| Rejeitado por tipo de cartão não permitido | `CTNA` | - |
| Rejeitado devido a tentativas excedidas de pin do cartão | `ATTE` | - |
| Rejeitado por estar na lista negra | `BLAC` | - |
| Não suportado | `UNSU` | - |
| Usado para aplicar regra de valores | `TEST` | - |

------------
----[mlm]----

 
| Nome e sobrenome do titular | Status de pagamento |
| --- | --- |
| `APRO` | Pagamento aprovado |
| `OTHE` | Recusado por erro geral |
| `CONT` | Pagamento pendente |
| `CALL` | Recusado com validação para autorizar |
| `FUND` | Recusado por quantia insuficiente |
| `SECU` | Recusado por código de segurança inválido |
| `EXPI` | Recusado por problema com a data de vencimento |
| `FORM` | Recusado por erro no formulário |
| `CARD` | Rejeitado por falta de card_number |
| `INST` | Rejeitado por parcelas inválidas |
| `DUPL` | Rejeitado por pagamento duplicado |
| `LOCK` | Rejeitado por cartão desabilitado |
| `CTNA` | Rejeitado por tipo de cartão não permitido |
| `ATTE` | Rejeitado devido a tentativas excedidas de pin do cartão |
| `BLAC` | Rejeitado por estar na lista negra |
| `UNSU` | Não suportado |
| `TEST` | Usado para aplicar regra de valores |

------------
----[mlu]----

| Status de pagamento | Nome e sobrenome do titular | Documento de identidade |
| --- | --- | --- |
| Pagamento aprovado | `APRO` | (CI) 12345678 <br> (otro) 123456789 |
| Recusado por erro geral | `OTHE` | (CI) 12345678 <br> (otro) 123456789 |
| Pagamento pendente | `CONT` | - |
| Recusado com validação para autorizar | `CALL` | - |
| Recusado por quantia insuficiente | `FUND` | - |
| Recusado por código de segurança inválido | `SECU` | - |
| Recusado por problema com a data de vencimento | `EXPI` | - |
| Recusado por erro no formulário | `FORM` | - |
| Rejeitado por falta de card_number | `CARD` | - |
| Rejeitado por parcelas inválidas | `INST` | - |
| Rejeitado por pagamento duplicado | `DUPL` | - |
| Rejeitado por cartão desabilitado | `LOCK` | - |
| Rejeitado por tipo de cartão não permitido | `CTNA` | - |
| Rejeitado devido a tentativas excedidas de pin do cartão | `ATTE` | - |
| Rejeitado por estar na lista negra | `BLAC` | - |
| Não suportado | `UNSU` | - |
| Usado para aplicar regra de valores | `TEST` | - |

------------
----[mpe]----

| Status de pagamento | Nome e sobrenome do titular | Documento de identidade |
| --- | --- | --- |
| Pagamento aprovado | `APRO` | 123456789 |
| Recusado por erro geral | `OTHE` | 123456789 |
| Pagamento pendente | `CONT` | - |
| Recusado com validação para autorizar | `CALL` | - |
| Recusado por quantia insuficiente | `FUND` | - |
| Recusado por código de segurança inválido | `SECU` | - |
| Recusado por problema com a data de vencimento | `EXPI` | - |
| Recusado por erro no formulário | `FORM` | - |
| Rejeitado por falta de card_number | `CARD` | - |
| Rejeitado por parcelas inválidas | `INST` | - |
| Rejeitado por pagamento duplicado | `DUPL` | - |
| Rejeitado por cartão desabilitado | `LOCK` | - |
| Rejeitado por tipo de cartão não permitido | `CTNA` | - |
| Rejeitado devido a tentativas excedidas de pin do cartão | `ATTE` | - |
| Rejeitado por estar na lista negra | `BLAC` | - |
| Não suportado | `UNSU` | - |
| Usado para aplicar regra de valores | `TEST` | - |

------------

Assim que você tiver preenchido todos os campos corretamente, clique no botão para processar o pagamento e aguarde o resultado.