# Configurar impressões

A API de Impressões permite integrar seus sistemas para gerenciar impressões nas terminais Point configuradas. Este recurso possibilita imprimir imagens personalizadas diretamente de um ponto de venda (PDV), utilizando a impressora integrada dos dispositivos Smart. 

Utilize os endpoints abaixo para gerenciar a fila de impressões, levando em conta as especificações de cada endpoint. Garanta que o terminal esteja corretamente configurado no **[modo PDV (Ponto de Venda)](/developers/pt/docs/mp-point/integration-configuration/integrate-with-pdv/configure-devices#bookmark_ativar_modo_pdv_no_dispositivo_point)**.

> RED_MESSAGE
>
> Para a impressão de imagens, tenha em mente que os formatos aceitos são PNG ou JPEG, com codificação Base64 e um tamanho máximo de 1MB. As imagens que excederem as dimensões do rolo de papel serão ajustadas automaticamente.

   - [Criar ação da terminal](/developers/pt/reference/mercado_pago_point/impressions/post): Permite a criação de uma nova ação de impressão para Mercado Pago Point, seja de imagens ou [impressões personalizadas](/developers/pt/docs/mp-point/integration-configuration/configure-printing#bookmark_tags_personalizadas). Em caso de sucesso, a resposta devolverá um código de status 201.
   - [Obter ação por ID](/developers/pt/reference/mercado_pago_point/impressions/get): Permite consultar todas as informações da ação de impressão criada para uma terminal Point através do ID obtido na resposta à sua criação. A consulta da ação de impressão fornece uma ferramenta prática para verificar a ação enviada pela API, especialmente no caso de falhas de impressão na terminal.
   - [Cancelar ação por ID](/developers/pt/reference/mercado_pago_point/impressions_cancel/post): Permite cancelar uma ação criada para Mercado Pago Point e suas transações utilizando o ID de referência obtido na resposta à sua criação. Apenas uma ação com status `created` pode ser cancelada. Em caso de sucesso, a solicitação devolverá uma resposta com status 200. 

Aguarde até que a tentativa chegue ao terminal e a impressão seja processada. Se a impressão não chegar automaticamente, pressione o botão **Atualizar** para buscar a tentativa manualmente.

### _Tags_ personalizadas

As _tags_ personalizadas permitem ajustar o formato e a aparência dos documentos impressos, garantindo maior controle sobre o estilo e a estrutura do texto. Elas devem ser utilizadas ao enviar um **POST** ao endpoint [Criar ação do terminal](/developers/pt/reference/mercado_pago_point/impressions/post), através do atributo `subtype`, que deve ser configurado como `custom`. Quando o `subtype` é definido como `custom`, o atributo `content` deve incluir a _string_ formatada utilizando as _tags_ suportadas.

A seguir, consulte as diferentes _tags_ disponíveis, suas funções e exemplos de uso:

> NOTE
>
> As _tags_ personalizadas têm um limite mínimo de 100 caracteres e um máximo de 4096 caracteres, incluindo elas próprias.

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

**Exemplo de utilização:**

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
  "content": "{br}--------------------------------{br}{center}{w} COMPROVANTE DE ENTREGA{/w}{br}{br}{s} Nro pedido :12345{/s}{br}{s} Loja: Loja de teste{/s}{br}--------------------------------{br}{s}***ITEM(S) DESPACHO***{/s}{br}{s}SKU / ARTIGO                     QUANTIDADE   {/s}{br}{s}----------------------------------------------{/s}{br}{s}4065432630504 / BOLA FUTEBOL WUCL LGE EHV240424   1{br}{s}ENTREGAR: 06/06/2024{/s}{br}{s}ENDEREÇO: METROPOLITANA  {/s}{br}{s}RECEBE: John{/s}{br}{s}entrega ao cliente no período da manhã{/s}{br}--------------------------------{br}"
}
```