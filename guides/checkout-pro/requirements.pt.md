# Componentes Nova Arquitetura de Docs

Segue lista de componentes da nova arquitetura de documentações


## Componentes Novos

Implementação dos componentes novos linkados nesse [Figma](https://www.figma.com/design/Z1MQhRUyq0xH0APuFEWS1b/Componentes-e-templates?node-id=4357-2253&m=dev)

## Tooltip

Lorem :toolTipComponent[ipsum]{content="Sed viverra nunc sit amet congue pellentesque. In a diam sit amet velit tempor."} dolor sit amet, consectetur adipiscing elit. Nunc consequat dignissim tellus eu sagittis. Nulla cursus diam a erat facilisis sollicitudin. Sed tincidunt :toolTipComponent[imperdiet]{content="Phasellus sodales risus nisi, in sollicitudin nulla faucibus et"}. interdum. Nullam aliquam nibh id posuere dapibus.

## Tab

::::TabsComponent

:::TabComponent{title="Lorem"}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat dignissim tellus eu sagittis. Nulla cursus diam a erat facilisis sollicitudin. Sed tincidunt imperdiet interdum. Nullam aliquam nibh id posuere dapibus. Cras et tincidunt eros, at lobortis arcu. Sed euismod ut diam vitae mollis. Maecenas mattis leo ut mollis egestas. Suspendisse dictum vitae justo suscipit fermentum. Praesent ultrices, est eget commodo suscipit, mauris neque posuere lorem, eu rhoncus neque libero at ex.
:::

:::TabComponent{title="Aenean"}
Aenean velit lorem, tristique eu lacinia non, malesuada vitae lacus. Nam placerat sed elit eget tincidunt. Sed viverra nunc sit amet congue pellentesque. In a diam sit amet velit tempor pellentesque. Vivamus luctus at nulla sed dignissim. Cras at consectetur ex, sit amet pellentesque erat. Phasellus molestie, sem ut commodo ullamcorper, diam velit interdum ante, non vestibulum tellus nisi quis sapien. Proin congue consectetur maximus.
:::

:::TabComponent{title="Vestibulum"}
Cras dignissim elementum aliquet. Sed in convallis ante. Nunc convallis metus eu odio ullamcorper sollicitudin. Integer orci nibh, molestie ac commodo vel, varius sit amet dui. Quisque ultrices orci vel lorem ullamcorper tempus. Aenean porta pretium nisl, hendrerit molestie diam gravida vel. Aenean congue urna neque, a placerat sem commodo non. Suspendisse luctus, erat mollis ultrices consequat, lorem lacus lacinia dolor, tristique rutrum quam ante quis turpis. Aenean a nibh vel arcu tincidunt ultrices ut eget sem.
:::

::::

## Accordion

<br>

:::AccordionComponent{title="Aliquam id elementum nulla, fermentum volutpat justo." pill="1"}
Ut ullamcorper nulla et luctus malesuada. Maecenas mollis rhoncus euismod. Suspendisse vel feugiat sapien. Fusce euismod dui orci, vel euismod enim finibus vitae. Nullam efficitur non arcu et laoreet. Praesent maximus, odio nec ullamcorper maximus, nibh justo posuere felis, non convallis justo mauris eget urna. Phasellus rutrum diam at semper convallis. Sed non augue condimentum neque euismod dictum vel quis quam. Sed ac porta massa. Donec et auctor nulla. Morbi vitae ullamcorper arcu. 
:::
:::AccordionComponent{title="Proin in semper ante. Donec ultrices ligula rutrum maximus consectetur." pill="2"}
Suspendisse ac dolor a diam viverra volutpat eu a ipsum. Etiam vitae dui libero. Suspendisse molestie tellus sit amet purus blandit maximus. Donec rutrum tellus felis, ac placerat diam efficitur a. Phasellus lorem elit, egestas et nisi eget, dictum cursus velit. Maecenas dui neque, suscipit ac bibendum at, ultricies id purus. Nunc non elit non eros aliquet molestie. Curabitur lobortis egestas dolor, id auctor justo commodo sed. 
:::
:::AccordionComponent{title="Aliquam id elementum nulla, fermentum volutpat justo." pill="3"}
Ut ullamcorper nulla et luctus malesuada. Maecenas mollis rhoncus euismod. Suspendisse vel feugiat sapien. Fusce euismod dui orci, vel euismod enim finibus vitae. Nullam efficitur non arcu et laoreet. Praesent maximus, odio nec ullamcorper maximus, nibh justo posuere felis, non convallis justo mauris eget urna. Phasellus rutrum diam at semper convallis. Sed non augue condimentum neque euismod dictum vel quis quam. Sed ac porta massa. Donec et auctor nulla. Morbi vitae ullamcorper arcu. 
:::
:::AccordionComponent{title="Vivamus vel efficitur ante." pill="Opcional"}
Etiam ex ante, sollicitudin eu magna ac, lacinia convallis enim. Vivamus rhoncus, ipsum a egestas vulputate, nunc libero semper elit, et elementum neque orci eget ipsum. Vivamus aliquam ex felis, quis varius ex cursus vulputate. Sed facilisis tempus molestie. Integer sed blandit purus, sed elementum metus. 
:::


<br>

## Tag

Aenean velit :TagComponent{textTag="NON" size="small" hierarchy="loud" color="orange"} lorem, tristique eu lacinia non, [Api Order :TagComponent{textTag="API"}](/developers/es/docs/checkout-pro/integrate-checkout-pro/mobile/android/reactnative-cli) vitae lacus. Nam placerat sed. Sed viverra nunc :TagComponent{textTag="SIT" size="small" hierarchy="loud" color="red"} congue pellentesque. In a diam sit amet velit [Tempor](/developers/es/docs/checkout-pro/integrate-checkout-pro/mobile/android/reactnative-cli) :TagComponent{textTag="AMET" size="small" hierarchy="loud" color="green"} pellentesque. Vivamus luctus at :TagComponent{textTag="NULLA" size="small" hierarchy="loud" color="gray"} sed dignissim.

## Diagramas

### Sequence

<pre class="mermaid">
  sequenceDiagram
      participant Navegador del comprador
      participant Front-end del integrador
      participant MercadoPago.js
      participant Back-end del integrador
      participant API Mercado Pago
      Navegador del comprador->>Front-end del integrador: 1. Pantalla del cobro<br>El Comprador accede a la pantalla de cobro.
      Front-end del integrador->>MercadoPago.js: 2. Inicialización SDK JS Mercado Pago<br> El front-end del integrador descarga e<br>inicializa la SDK JS de Mercado Pago 
      Front-end del integrador->>Navegador del comprador: 3. Formulario de pago<br>El front-end del integrador muestra el<br>formulário de pago
      Navegador del comprador->>Front-end del integrador: 4. Confirmación de pago<br>El comprador completa el formulário y<br>finaliza el pago.
      Front-end del integrador->>MercadoPago.js: 5. Creación del token<br>El front-end del integrador utiliza la SDK JS<br>para crear el token que contendrá los datos<br>de tarjeta de forma segura.
      Front-end del integrador->>Back-end del integrador: 6. Envío del token<br>El front-end del integrador envía el token de<br>tarjeta y los datos de pago a su back-end.
      Back-end del integrador->>API Mercado Pago: 7. Creación del pago<br>Desde el back-end, se llama a los servicios<br>de Mercado Pago para crear el pago.
      API Mercado Pago->>Navegador del comprador: 8. Resultado del pago<br>El front-end del integrador le muestra al<br>comprador el resultado de la operación.
      API Mercado Pago->>Back-end del integrador: 9. Actualizaciones de estado del pago<br>Mercado Pago puede enviar notificaciones<br>vía Webhook con actualizaciones del estado<br>del pago.
      Back-end del integrador->>Navegador del comprador: 10. Notificación al comprador<br>Si corresponde, se le avisa al comprador<br>sobre la actualización del pago.
</pre>

### Graph
<br>
<pre class="mermaid">
    graph TD
      A[Christmas] -->|Get money| B(Go shopping)
      B --> C{Let me think}
      B --> G[/Another/]
      C ==>|One| D[Laptop]
      C -->|Two| E[iPhone]
      C -->|Three| F[fa:fa-car Car]
      subgraph section
        C
        D
        E
        F
        G
      end
</pre>
<br>

## Iteração de componentes existentes

Implementação dos componentes já existentes linkados nesse [Figma](https://www.figma.com/design/Z1MQhRUyq0xH0APuFEWS1b/Componentes-e-templates?node-id=4267-1792&m=dev).

## Message

> RED_MESSAGE
>
> Integer auctor viverra ultrices.
>
> Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer auctor viverra ultrices. Curabitur ante magna, aliquet ut placerat eu, iaculis ac metus.

> WARNING
>
> Sed aliquet et velit bibendum consectetur. 
>
> Donec mollis laoreet libero, quis aliquet ante auctor non. Sed aliquet et velit bibendum consectetur. Phasellus felis sapien, pharetra eu aliquet vel, egestas quis tortor. Suspendisse ac dolor a diam viverra volutpat eu a ipsum.

> SUCCESS_MESSAGE
>
> Suspendisse ac dolor a diam viverra volutpat eu a ipsum.
>
> Vivamus vel efficitur ante. Etiam ex ante, sollicitudin eu magna ac, lacinia convallis enim.

> NOTE
>
> Integer auctor viverra ultrices.
>
> Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer auctor viverra ultrices. Curabitur ante magna, aliquet ut placerat eu, iaculis ac metus.

> NEUTRAL_MESSAGE
>
> Suspendisse ac dolor a diam viverra volutpat eu a ipsum.
>
> Vivamus vel efficitur ante. Etiam ex ante, sollicitudin eu magna ac, lacinia convallis enim.


## Imagens/Diagramação

<br>

:::AlignedImageComponent{imageAlt="cow" shadow="true" imageUrl="https://http2.mlstatic.com/storage/dx-devsite/docs-assets/images/cow/wallet-render-pt.png?v=4.39.7-rc-1"}
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus bibendum, massa et varius facilisis, quam diam sodales ipsum, maximus varius lorem ligula vitae purus. Maecenas ullamcorper erat sit amet enim bibendum, eget consectetur arcu placerat.
</p>
<p>
Duis pharetra, felis non blandit vestibulum, felis leo lobortis lorem, vel dapibus ipsum neque a orci. Donec ultrices ante at efficitur tincidunt. Phasellus ultrices magna non risus ornare tristique.
</p>
:::

<br>

## Ver mais

<br>

:::LinksListComponent{title="Nam semper in ante"}
- [Curabitur sagittis felis](/developers/es/docs/checkout-pro/integrate-checkout-pro/mobile/android/reactnative-cli)
- [Nulla quis magna ex](/developers/es/docs/checkout-pro/integrate-checkout-pro/mobile/android/java-kotlin)
- [Nunc posuere interdum](/developers/es/docs/checkout-pro/integrate-checkout-pro/mobile/android/reactnative-cli)
- [Mauris velit lectusx](/developers/es/docs/checkout-pro/integrate-checkout-pro/mobile/android/java-kotlin)
:::

<br>
<br>
