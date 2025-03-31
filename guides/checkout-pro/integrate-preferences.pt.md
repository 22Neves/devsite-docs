> SERVER_SIDE
>
> h1
>
> Criar e configurar uma preferência de pagamento

Uma preferência de pagamento é um objeto ou conjunto de informações que representa o produto ou serviço pelo qual você deseja cobrar. Dentro do ecossistema do Mercado Pago, este objeto é conhecido como `preference`. Ao criar uma preferência de pagamento, você pode definir detalhes essenciais como o preço, a quantidade e os meios de pagamento, bem como outras configurações relacionadas ao fluxo de pagamento.

Para criar uma preferência de pagamento, utilize o método associado a `preference` no SDK de backend. É necessário que você crie uma preferência de pagamento para cada pedido ou fluxo de pagamento que queira iniciar.

A seguir, você encontrará exemplos de como implementar isso no seu backend utilizando o SDK, que está disponível em diferentes linguagens de programação. Complete os atributos com as informações adequadas para refletir os detalhes de cada transação e garantir um fluxo de pagamento preciso.

> NOTE
>
> Nota
>
> Você pode adaptar a integração do Checkout Pro ao seu modelo de negócio configurando os atributos da preferência de pagamento. Estes permitirão definir parcelas, excluir um meio de pagamento, alterar a data de vencimento de um determinado pagamento, entre outras opções. Para personalizar sua preferência de pagamento, acesse **[Personalização do checkout > Preferências](/developers/pt/docs/checkout-pro/checkout-customization/preferences)**.

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

O identificador da preferência é um identificador de transação único para uma solicitação de pagamento específica. Para obtê-lo, você deverá executar sua aplicação.

Na resposta, você obterá o **identificador da preferência** na propriedade `ID`. **Guarde este valor, pois você precisará dele no próximo passo para sua integração** em um site ou em um aplicativo móvel.

A seguir, mostramos um exemplo de como o atributo `ID` com o identificador de preferência aparece em uma resposta.

```
"id": "787997534-6dad21a1-6145-4f0d-ac21-66bf7a5e7a58"
```

Uma vez configurada a preferência de pagamento, é o momento de [Configurar as URLs](/developers/pt/docs/checkout-pro/configure-urls) de retorno para onde seus clientes serão redirecionados ao finalizar o processo de pagamento.