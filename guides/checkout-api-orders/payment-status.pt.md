# Status da transação

Veja a lista de possíveis `status` e `status_detail` que uma transação pode retornar. 

| `status` | `status_detail` | Descrição |
|:---:|:---:|:---:|
| `created` | `created` | A transação foi criada com sucesso, mas ainda não foi processada. Este é o status inicial de uma transação após sua criação. |
| `processed` | `accredited` | A transação foi processada com sucesso e o valor foi efetivamente creditado. |
| `processed` | `partially_refunded` | A transação foi processada com sucesso e uma parte do valor foi reembolsada. Isso indica que, embora a transação tenha sido concluída, houve um reembolso parcial do valor pago em favor do pagador. |
| `processing` | `in_process` | A transação está em processamento. Isso significa que a transação está em andamento e ainda não foi concluída.  |
| `processing` | `pending_review_manual` | A transação está em andamento. Este status detalha que está aguardando uma revisão manual. Isso geralmente acontece quando a order precisa de uma avaliação adicional antes de prosseguir.  |
| `action_required` | `waiting_payment` | A transação requer uma ação adicional e está aguardando o pagamento. Isso significa que a transação foi iniciada, mas o pagamento ainda não foi concluído. |
| `action_required` | `waiting_capture` | A transação requer uma ação adicional e está aguardando a captura do pagamento. Isso significa que o pagamento foi autorizado, mas ainda não foi capturado. |
| `action_required` | `waiting_transfer` | A transação requer uma ação adicional e está aguardando a transferência dos valores. Isso significa que o pagamento foi iniciado, mas os valores ainda não foram transferidos para a conta do vendedor. |
| `charged_back` | `in_process` | A transação sofreu um chargeback. Isso significa que foi contestada e o valor está sendo revertido. |
| `charged_back` | `settled` | A transação sofreu um chargeback. Isso significa que foi contestada e o valor foi disponibilizado ao vendedor. |
| `charged_back` | `reimbursed` | A transação sofreu um chargeback. Isso significa que foi contestada e o valor foi reembolsado ao comprador.  |
| `expired` | `expired` | A transação expirou. Isso significa que não foi concluída dentro do tempo limite e, portanto, foi encerrada. |
| `refunded` | `refunded` | A order foi reembolsada. Isso significa que o valor da transação foi devolvido integralmente ao pagador. |
| `failed` | `bad_filled_card_data` | A transação falhou devido a dados do cartão preenchidos incorretamente. Isso pode incluir informações como número do cartão, CVV, data de validade, entre outros. |
| `failed` | `invalid_card_token` | A transação falhou. Isso significa que a transação falhou devido a um token de cartão inválido. |
| `failed` | `high_risk` | A transação falhou devido a um alto risco detectado. Isso pode ocorrer quando o sistema de detecção de fraudes identifica um possível risco na transação. |
| `failed` | `rejected_by_issuer` | A transação falhou devido à rejeição pelo emissor do cartão. |
| `failed` | `required_call_for_authorize` | A transação falhou porque é necessária uma chamada para autorização. Isso pode ocorrer quando o emissor do cartão exige uma verificação adicional antes de aprovar a transação. |
| `failed` | `max_attempts_exceeded` | A transação falhou devido ao número máximo de tentativas excedido. Pode ocorrer quando o número de tentativas de pagamento ultrapassa o limite permitido pelo sistema. |
| `failed` | `card_disabled` | A transação falhou devido ao cartão estar desativado. Isso pode ocorrer quando o cartão foi bloqueado ou desativado pelo emissor. |
| `failed` | `insufficient_amount` | A transação falhou devido a um valor insuficiente. Pode ocorrer quando o saldo disponível não é suficiente para cobrir o valor da transação. |
| `failed` | `amount_limit_exceeded` | A transação falhou devido ao limite de valor excedido. Isso pode ocorrer quando o valor da transação ultrapassa o limite permitido pelo emissor do cartão ou pelo sistema.  |
| `failed` | `processing_error` | A transação falhou devido a um erro de processamento. Isso pode ocorrer quando há um problema técnico ou um erro no sistema que impede a conclusão da transação. Se o problema persistir, entre em contato com o suporte, forneça o `x-request-id` e mais detalhes sobre a operação realizada. |
| `failed` | `invalid_installments` | A transação falhou devido a parcelas inválidas. Pode ocorrer quando o número de parcelas selecionado não é aceito pelo emissor do cartão ou pelo sistema. |
| `failed` | `pending_challenge` | A transação falhou devido a um desafio pendente. Pode ocorrer quando a transação requer uma verificação adicional, como uma autenticação 3DS, que não foi concluída.  |
| `failed` | `3ds_challenge_expired` | A transação falhou devido à expiração do desafio 3DS. Pode ocorrer quando o tempo para completar a autenticação 3DS expirou.   |
| `failed` | `pending_challenge` | A transação falhou devido à falha no desafio 3DS. Isso pode ocorrer quando a autenticação 3DS não é bem-sucedida.  |