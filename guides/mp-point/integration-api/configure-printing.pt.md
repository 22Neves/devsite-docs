# Configurar impressões

A API de Impressões oferece uma solução prática para integrar seus sistemas e gerenciar impressões nas terminais Point configuradas. Este recurso permite a impressão de imagens e impressões personalizadas diretamente de um ponto de venda (PDV), utilizando a impressora integrada dos dispositivos Smart. Isso simplifica o processo de cobrança e responde rapidamente às necessidades do seu negócio.

## Tags personalizadas

As tags personalizadas permitem ajustar a apresentação dos documentos impressos. Este recurso oferece flexibilidade e controle sobre o formato do texto, possibilitando a criação de impressões eficientes e visualmente atraentes. A seguir, consulte as diferentes tags disponíveis, suas funções e exemplos de uso:

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

## Configuração da impressão

Utilize os endpoints abaixo para gerenciar a fila de impressões, levando em conta as especificações de cada endpoint. Certifique-se de que o terminal esteja configurado no modo PDV (Ponto de Venda). 

> RED_MESSAGE
>
> Importante
>
> Para a impressão de imagens, tenha em mente que os formatos aceitos são PNG ou JPEG, com codificação Base64 e um tamanho máximo de 1MB. As imagens que excederem este limite serão redimensionadas automaticamente para se ajustarem à largura do rolo de papel.

   - [Criar ação da terminal](/developers/pt/reference/mercado_pago_point/impressions/post): Permite a criação de uma nova ação de impressão para Mercado Pago Point, seja de imagens ou impressões personalizadas. Para imagens, é suportado o formato Base64. Em caso de sucesso, a resposta devolverá um código de status 201.
   - [Obter ação por ID](/developers/pt/reference/mercado_pago_point/impressions/get): Permite consultar todas as informações de uma ação criada para uma terminal Point através do ID obtido na resposta à sua criação. Em caso de sucesso, a solicitação devolverá uma resposta com status 200.
   - [Cancelar ação por ID](/developers/pt/reference/mercado_pago_point/impressions_cancel/post): Permite cancelar uma ação criada para Mercado Pago Point e suas transações utilizando o ID de referência obtido na resposta à sua criação. Apenas uma ação com status "created" pode ser cancelada. Em caso de sucesso, a solicitação devolverá uma resposta com status 200. 

Aguarde até que a tentativa chegue ao terminal e a impressão seja processada. Se a impressão não chegar automaticamente, pressione o botão **Atualizar** para buscar a tentativa manualmente.