# Status da order

Veja a lista de possíveis `status` e `status_detail` que uma order pode assumir. 

| `status` | `status_detail` | Descrição |
|:---:|:---:|:---:|
| `created` | `created` | A order foi criada com sucesso. Nesse momento, ainda não foi iniciada nenhuma ação de processamento, e a order está no estado inicial de espera. |
| `processed` | `accredited` | A order foi processada com sucesso e o pagamento foi creditado. |
| `processed` | `partially_refunded` | A order foi processada e uma parte do valor foi reembolsada. Isso indica que, embora a transação tenha sido concluída, houve um reembolso parcial do valor pago em favor do pagador. |
| `processing` | `in_process` | A order está em processamento. Isso significa que a transação está em andamento e ainda não foi concluída.  |
| `action_required` | `waiting_payment` | A order requer uma ação adicional do pagador e está aguardando o pagamento. Isso significa que a transação foi iniciada, mas o pagamento ainda não foi concluído. |
| `action_required` | `waiting_capture` | A order requer uma ação adicional do vendedor e está aguardando a captura do pagamento. Isso significa que o pagamento foi autorizado, mas ainda não foi capturado. |
| `action_required` | `waiting_transfer` | A order requer uma ação adicional do pagador e está aguardando a transferência dos valores. Isso significa que o pagamento foi iniciado, mas os valores ainda não foram transferidos para a conta do vendedor. |
| `cancelled` | `cancelled` | A order foi cancelada e não será concluída. |
| `charged_back` | `in_process` | A order sofreu um chargeback. Isso significa que uma das transações da ordem foi contestada e está em processo de avaliação. |
| `charged_back` | `settled` | A order sofreu um chargeback. Isso significa que a transação foi liquidada. Isso pode ocorrer quando o valor da transação foi processado e confirmado. |
| `charged_back` | `reimbursed` | A order sofreu um chargeback. Isso significa que a transação foi reembolsada e o valor da transação foi devolvido ao pagador após o estorno.  |
| `expired` | `expired` | A order expirou. Isso significa que a transação não foi concluída dentro do tempo limite e, portanto, foi encerrada. |
| `failed` | `failed` | A order falhou. Isso significa que a transação não foi bem-sucedida e não será concluída. |
| `refunded` | `refunded` | A order foi reembolsada. Isso significa que o valor da transação foi devolvido integralmente ao pagador. |