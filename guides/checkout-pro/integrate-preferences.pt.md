> SERVER_SIDE
>
> h1
>
> Criar e configurar uma preferência de pagamento

Uma preferência de pagamento é um objeto que reúne informações sobre o produto ou serviço pelo qual você deseja cobrar. No ecossistema do Mercado Pago, esse objeto é denominado `preference`. Ao criar uma preferência de pagamento, é possível definir atributos essenciais, como preço, quantidade e métodos de pagamento, além de configurar outros aspectos do fluxo de pagamento.

Para configurar uma preferência de pagamento, utilize o método correspondente à _preference_ no SDK de backend. É necessário criar uma nova preferência de pagamento para cada pedido ou fluxo de pagamento que você deseja iniciar.

Abaixo, você encontrará exemplos práticos de como implementar essa funcionalidade em seu backend utilizando o SDK, disponível em várias linguagens de programação. Certifique-se de preencher os atributos com informações precisas para detalhar cada transação e garantir um processo de pagamento eficiente.

> NOTE
>
> Nota
>
> Esses atributos permitem ajustar parcelas, excluir determinados meios de pagamento, modificar a data de vencimento de um pagamento, entre outras opções. Para personalizar sua preferência de pagamento, acesse **[Personalização do checkout](/developers/pt/docs/checkout-pro/additional-settings)**.

[[[
```php
<?php
$client = new PreferenceClient();
$preference = $client->create([
  "items"=> array(
    array(
      "title" => "Meu produto",
      "quantity" => 1,
      "unit_price" => 2000
    )
  )
]);

echo $preference
?>
```
```node
const preference = new Preference(client);

preference.create({
  body: {
    items: [
      {
        title: 'Meu produto',
        quantity: 1,
        unit_price: 2000
      }
    ],
  }
})
.then(console.log)
.catch(console.log);
```
```java
PreferenceItemRequest itemRequest =
       PreferenceItemRequest.builder()
           .id("1234")
           .title("Games")
           .description("PS5")
           .pictureUrl("http://picture.com/PS5")
           .categoryId("games")
           .quantity(2)
           .currencyId("BRL")
           .unitPrice(new BigDecimal("4000"))
           .build();
   List<PreferenceItemRequest> items = new ArrayList<>();
   items.add(itemRequest);
PreferenceRequest preferenceRequest = PreferenceRequest.builder()
.items(items).build();
PreferenceClient client = new PreferenceClient();
Preference preference = client.create(request);
```
```ruby
# Cria um objeto de preferência
preference_data = {
  items: [
    {
      title: 'Meu produto',
      unit_price: 75.56,
      quantity: 1
    }
  ]
}
preference_response = sdk.preference.create(preference_data)
preference = preference_response[:response]

# Este valor substituirá a string "<%= @preference_id %>" no seu HTML
@preference_id = preference['id']
```
```csharp
// Cria o objeto de request da preference
var request = new PreferenceRequest
{
    Items = new List<PreferenceItemRequest>
    {
        new PreferenceItemRequest
        {
            Title = "Meu produto",
            Quantity = 1,
            CurrencyId = "ARS",
            UnitPrice = 75.56m,
        },
    },
};

// Cria a preferência usando o client
var client = new PreferenceClient();
Preference preference = await client.CreateAsync(request);
```
```python
# Cria um item na preferência
preference_data = {
    "items": [
        {
            "title": "Meu produto",
            "quantity": 1,
            "unit_price": 75.76,
        }
    ]
}

preference_response = sdk.preference().create(preference_data)
preference = preference_response["response"]
```
```go

client := preference.NewClient(cfg)

request := preference.Request{
	Items: []preference.ItemRequest{
		{
			Title:       "Meu produto",
			Quantity:    1,
			UnitPrice:   75.76,
		},
	},
}

resource, err := client.Create(context.Background(), request)
if err != nil {
	fmt.Println(err)
	return
}

fmt.Println(resource)
```
]]]

## Obter o identificador da preferência

O identificador da preferência é um código único que representa uma transação específica para uma solicitação de pagamento. Para obtê-lo, você deve executar sua aplicação.

Na resposta, o **identificador da preferência** estará localizado na **propriedade ID**. Guarde esse valor com atenção, pois ele será **necessário na próxima etapa para integrar o pagamento** ao seu site ou aplicativo móvel.

Veja abaixo um exemplo de como o atributo ID, contendo o identificador de preferência, é exibido em uma resposta:

```
"id": "787997534-6dad21a1-6145-4f0d-ac21-66bf7a5e7a58"
```

Após configurar a preferência de pagamento, o próximo passo será [configurar as URLs de retorno](/developers/pt/docs/checkout-pro/configure-back-urls) para redirecionar seus clientes ao final do processo de pagamento.