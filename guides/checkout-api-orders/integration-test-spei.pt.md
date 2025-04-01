# Realizar uma compra teste com Transferências SPEI

Para testar sua integração com **Transferências SPEI**, após ter [configurado seu ambiente de testes](/developers/pt/docs/checkout-api/integration-test), você deverá criar um order. Isso significa que só será possível verificar o funcionamento da sua integração por meio de uma requisição, e não simulando uma compra.

Para realizar estes testes, envie a seguinte solicitação ao endpoint :TagComponent{tag="API" text="/v1/orders" href="/developers/pt/reference/order/online-payments/create/post"}, juntamente com o :toolTipComponent[_Access Token_ do usuário de testes]{content="Chave privada da aplicação de testes criada com seu usuário de testes. É utilizada no _backend_ para poder testar seu desenvolvimento. Você pode acessá-la fazendo login com seu usuário de testes e acessando *Suas integrações > Detalhes da aplicação > Produção > Credenciais de produção*."}. 

```curl 
curl --request POST \
  --url https://api.mercadopago.com/v1/orders \
  --header 'content-type: application/json' \
  --data '{
  "type": "online",
  "external_reference": "ext_ref_1234",
  "processing_mode": "automatic",
  "marketplace": "NONE",
  "total_amount": "200.00",
  "payer": {
    "first_name": <PAYER_NAME>,
    "email": <PAYER_EMAIL>
  },
  "transactions": {
    "payments": [
      {
        "amount": "200.00",
        "payment_method": {
          "id": "clabe",
          "type": "bank_transfer"
        }
      }
    ]
  }
}
'
```

A resposta devolverá o status `action_required`, que indica que se está aguardando o pagamento, conforme mostrado a seguir.

```json
{
  "id": "ORD01JPQVD4ED4QSPT1N787C8PYQT",
  "processing_mode": "automatic",
  "external_reference": "ext_ref_1234",
  "marketplace": "NONE",
  "site_id": "MLM",
  "user_id": "1735143232",
  "product_id": "CIFI5HEOD60B64QAI5O0",
  "capture_mode": "automatic",
  "currency": "MXN",
  "type": "online",
  "status": "action_required",
  "status_detail": "waiting_transfer",
  "total_amount": "200.00",
  "created_date": "2025-03-19T18:42:12.557054278Z",
  "last_updated_date": "2025-03-19T18:42:13.645123166Z",
  "integration_data": {
    "application_id": "4863578097401450"
  },
  "payer": {
    "email": "payer@testuser.com",
    "first_name": "Payer Name"
  },
  "transactions": {
    "payments": [
      {
        "id": "PAY01JPQVD4ED4QSPT1N7895PA160",
        "date_of_expiration": "2025-03-26T18:42:12.838+00:00",
        "status": "action_required",
        "status_detail": "waiting_transfer",
        "amount": "200.00",
        "payment_method": {
          "id": "clabe",
          "type": "bank_transfer",
          "ticket_url": "https://www.mercadopago.com.mx/payments/105292425055/ticket?caller_id=1872745950&hash=0db37f93-34e2-45cd-acd6-c8a8950b0512",
          "reference": "646010349353743569"
        },
        "reference": {
          "id": "0002inkmnw",
          "source": "transaction_intent",
          "metadata": {
            "from_id": "01JPQVD4H5NT6DZDV5BQX7YB3G",
            "to_id": "01JPQVD4H5QA5XCTFVBHD17GHE"
          }
        }
      }
    ]
  }
}
```

Por fim, para verificar se a compra de teste foi realizada corretamente, envie um **GET** para o endpoint :TagComponent{tag="API" text="/v1/orders/{id}" href="/developers/en/reference/order/online-payments/get-order/get"}, substituindo `id` pela identificação da order, recebida na resposta à sua criação.

Pronto! Uma vez finalizadas estas etapas, a integração de Transferências SPEI como meio de pagamento estará completa e você poderá, ou continuar testando outros meios de pagamento integrados, ou [sair à produção](/developers/pt/docs/checkout-api/go-to-production).