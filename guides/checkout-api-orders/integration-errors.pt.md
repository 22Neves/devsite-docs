# Possíveis erros

Veja a lista de possíveis erros retornados pela API e como corrigi-los.

| Tipo de Erro | Status | Código | Descrição e soluções possíveis |
|:---:|:---:|:---:|:---:|
| Erro de requisição | 400 | `json_syntax_error` | Certifique-se de que a requisição possua uma estrutura JSON válida, com chaves e valores adequados. |
| Erro de requisição | 400 | `required_properties` | Algumas propriedades obrigatórias estão ausentes. Verifique a solicitação e assegure-se de incluir todas as propriedades requeridas conforme a documentação da API. |
| Erro de requisição | 400 | `unsupported_properties` | Algumas propriedades informadas não são suportadas pela API. Revise a solicitação e remova ou corrija as propriedades não suportadas. |
| Erro de requisição | 400 | `minimum_properties` | O número mínimo de propriedades requeridas não foi atendido. Adicione as propriedades necessárias para completar a solicitação.  |
| Erro de requisição | 400 | `property_type` | O tipo da propriedade informada é invalido. Certifique-se de que o valor enviado na requisição corresponda ao tipo esperado.  |
| Erro de requisição | 400 | `property_value` | O valor da propriedade informado é invalido. Verifique o valor enviado e ajuste-o para que corresponda aos valores permitidos. |
| Erro de requisição | 400 | `maximum_items` | O número máximo de itens permitidos foi excedido. Reduza a quantidade de itens enviados para que não ultrapasse o máximo permitido.  |
| Erro de requisição | 400 | `minimum_items` | O número mínimo de itens requerido não foi atendido. Adicione mais itens à solicitação para cumprir com os requisitos da API. |
| Erro de requisição | 400 | `invalid_path_param` | Verifique se o ID fornecido como parâmetro é válido. |
| Erro de requisição | 400 | `invalid_properties` | Algumas propriedades informadas são inválidas ou estão malformadas. Revise as propriedades enviadas e verifique se estão de acordo com as especificações da API.  |
| Erro de requisição | 400 | `empty_required_header` | Um ou mais _headers_ obrigatórios estão vazios. Verifique a solicitação e assegure-se de que todos os headers requeridos estão presentes e devidamente preenchidos.  |
| Erro de requisição | 400 | `order_builder_without_transactions` | Não há uma transação associada a order. Certifique-se de incluir ao menos uma transação a criação da order. |
| Erro de requisição | 400 | `invalid_order_mode_for_operation` | O modo informado não é valido para esta operação. Verifique se está utilizando o modo correto conforme a operação desejada. |
| Erro de requisição | 400 | `invalid_order_type` | Tipo da order é invalido. Verifique se o tipo utilizado é valido para a operação. |
| Erro de requisição | 400 | `invalid_transaction_id` | O ID da transação é invalido. Certifique-se de que o ID está correto. |
| Erro de requisição | 400 | `exceeded_number_of_transactions` | Ocorreu um erro na requisição. A order aceita, no máximo, uma transação. Remova as transações excedentes. |
| Erro de requisição | 400 | `invalid_email_for_sandbox` | O formato de e-mail é inválido para o ambiente de *sandbox*, deve conter "@testuser.com". |
| Erro de processamento | 402 | `failed` | Ocorreu um erro no processamento de alguma das transações. Verifique a mensagem para mais informações. |
| Erro de requisição | 404 | `order_not_found` | A order não foi encontrada. Verifique se o ID informado está correto. |
| Erro de requisição | 404 | `transaction_not_found` | A transação não foi encontrada. Verifique se o ID informado está correto. |
| Erro de requisição | 409 | `cannot_refund_order` | Certifique-se de que a order esteja em um status que permita a realização de um reembolso. |
| Erro de requisição | 409 | `cannot_capture_order` | Verifique se o status que permite a captura e que a order foi criada com o campo `processing_mode` definido como "automatic".  |
| Erro de requisição | 409 | `cannot_cancel_order` | Certifique-se de que a order esteja em um status que permita cancelamento. |
| Erro de requisição | 409 | `already_queued_order_for_device` | Já existe uma order na fila para o dispositivo informado. Não é possível criar uma nova order do tipo "point" enquanto uma order anterior estiver aguardando. Aguarde o processamento da order atual antes de tentar novamente.  |
| Erro de Idempotencia | 409 | `idempotency_key_already_used` | A chave `X-Idempotency-Key` fornecida já foi utilizada. Cada chave de idempotência deve ser única para garantir que a operação seja realizada uma única vez. Utilize uma nova chave para a próxima solicitação. |
| Erro de requisição | 409 | `operation_not_supported` | A operação solicitada não é suportada. Verifique se a operação que você está tentando realizar é válida para o contexto atual.  |
| Erro de requisição | 409 | `order_already_refunded` | A order informada já foi reembolsada. Não é possível processar um reembolso em uma Order que já possui esse status.  |
| Erro de requisição | 409 | `order_already_cancelled` | A order informada já foi cancelada. Não é possível realizar operações em uma order que já se encontra cancelado.  |
| Erro de Idempotencia | 423 | `resource_locked` | A chave de idempotência está temporariamente bloqueada. Aguarde alguns instantes e tente executar a requisição novamente.  |
| Erro de Idempotencia | 500 | `idempotency_validation_failed` | Ocorreu um erro interno no servidor. Tente reenviar a requisição com uma chave de idempotência nova e única para evitar conflitos. Se o problema persistir, entre em contato com o suporte, forneça o `x-request-id` e mais detalhes sobre a operação realizada.  |
| Erro da api | 500 | `internal_error` | Ocorreu um erro interno no servidor. Por favor, tente novamente mais tarde. Se o problema persistir, entre em contato com o suporte, forneça o `x-request-id` e mais detalhes sobre a operação realizada. |

Para obter mais informações sobre como enviar as solicitações, requisitos e validações necessárias, consulte nossa :TagComponent{tag="API" text="Referência de API" href="/developers/en/reference/orders/online-payments/create/post"}.
