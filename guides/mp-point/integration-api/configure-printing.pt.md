# Configurar impressões

A API de Impressões permite integrar seus sistemas para gerenciar impressões nas terminais Point configuradas. Este recurso possibilita imprimir imagens personalizadas diretamente de um ponto de venda (PDV), utilizando a impressora integrada dos dispositivos Smart. 

## Configuração da impressão

Utilize os endpoints abaixo para gerenciar a fila de impressões, levando em conta as especificações de cada endpoint. Garanta que o terminal esteja corretamente configurado no **[modo PDV (Ponto de Venda)](/developers/pt/docs/mp-point/integration-configuration/integrate-with-pdv/configure-devices#bookmark_ativar_modo_pdv_no_dispositivo_point)**.

> WARNING
>
> Para a impressão de imagens, tenha em mente que os formatos aceitos são PNG ou JPEG, com codificação Base64 e um tamanho máximo de 1MB. As imagens que excederem este limite serão redimensionadas automaticamente para se ajustarem à largura do rolo de papel.

   - [Criar ação da terminal](/developers/pt/reference/mercado_pago_point/impressions/post): Permite a criação de uma nova ação de impressão para Mercado Pago Point, seja de imagens ou [impressões personalizadas](). Em caso de sucesso, a resposta devolverá um código de status 201.
   - [Obter ação por ID](/developers/pt/reference/mercado_pago_point/impressions/get): Permite consultar todas as informações de uma ação criada para uma terminal Point através do ID obtido na resposta à sua criação. A consulta de ações de impressão fornece ao vendedor uma ferramenta prática para verificar a ação enviada pela API, especialmente no caso de falhas de impressão na terminal.
   - [Cancelar ação por ID](/developers/pt/reference/mercado_pago_point/impressions_cancel/post): Permite cancelar uma ação criada para Mercado Pago Point e suas transações utilizando o ID de referência obtido na resposta à sua criação. Apenas uma ação com status `created` pode ser cancelada. Em caso de sucesso, a solicitação devolverá uma resposta com status 200. 

Aguarde até que a tentativa chegue ao terminal e a impressão seja processada. Se a impressão não chegar automaticamente, pressione o botão **Atualizar** para buscar a tentativa manualmente.

### Tags personalizadas

As tags personalizadas permitem ajustar o formato e a aparência dos documentos impressos, garantindo maior controle sobre o estilo e a estrutura do texto. Elas devem ser utilizadas ao enviar um **POST** ao endpoint [Criar ação do terminal](/developers/pt/reference/mercado_pago_point/impressions/post), através do atributo `subtype`, que deve ser configurado como `custom`. Quando o `subtype` é definido como `custom`, o atributo `content` deve incluir a _string_ formatada utilizando as tags suportadas.

A seguir, consulte as diferentes tags disponíveis, suas funções e exemplos de uso:

> NOTE
>
> As tags personalizadas têm um limite mínimo de 100 caracteres e um máximo de 4096 caracteres, incluindo as próprias tags.

| Tag        | Função                                      | Exemplo                          |
|------------|---------------------------------------------|----------------------------------|
| `{b}`      | Negrito                                     | `{b}Texto em negrito{/b}`        |
| `{w}`      | Letra grande                                | `{w}Texto em letra grande{/w}`   |
| `{s}`      | Letra pequena                               | `{s}Texto em letra pequena{/s}`  |
| `{br}`     | Quebra de linha                             | `{br}`                           |
| `{left}`   | Alinhar à esquerda                          | `{left}Texto alinhado à esquerda{/left}` |
| `{center}` | Centralizar texto                           | `{center}Texto centralizado{/center}` |
| `{qr}`     | Imprimir um QR que representa o texto enviado | `{qr}Texto{/qr}`                 |
| `{pdf417}` | Imprimir a mancha de um TED                 | `{pdf417}Texto{/pdf417}`         | 

**Exemplo de utilização*:**

```
{
  "type": "print",
  "config": {
    "point": {
      "terminal_id": "{{device.id}}",
      "subtype": "custom"
    }
  },
  "external_reference": "8a42e06e45d5",
  "content": "{br}--------------------------------{br}{center}{w} COMPROBANTE DE ENTREGA{/w}{br}{br}{s} Nro pedido :12345{/s}{br}{s} Tienda: Tienda de prueba{/s}{br}--------------------------------{br}{s}***ITEM(S) DESPACHO***{/s}{br}{s}SKU / ARTICULO                    CANTIDAD    {/s}{br}{s}----------------------------------------------{/s}{br}{s}4065432630504 / BALON FUTBOL ADIDAS WUCL LGE EHV240424   1{br}{s}ENTREGAR: 06/06/2024{/s}{br}{s}DIRECCION: METROPOLITANA Cerro Navia test 12345  {/s}{br}{s}RECIBE: Pepito Perez{/s}{br}{s}entrega a cliente en horario am{/s}{br}--------------------------------{br}"
}
```