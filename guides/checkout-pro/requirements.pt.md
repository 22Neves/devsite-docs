# Componentes Nova Arquitetura de Docs

Segue lista de componentes da nova arquitetura de documentações


## Componentes Novos

Implementação dos componentes novos linkados nesse [Figma](https://www.figma.com/design/Z1MQhRUyq0xH0APuFEWS1b/Componentes-e-templates?node-id=4357-2253&m=dev)

### Tooltip

Lorem :toolTipComponent[ipsum]{content="Sed viverra nunc sit amet congue pellentesque. In a diam sit amet velit tempor."} dolor sit amet, consectetur adipiscing elit. Nunc consequat dignissim tellus eu sagittis. Nulla cursus diam a erat facilisis sollicitudin. Sed tincidunt :toolTipComponent[imperdiet]{content="Phasellus sodales risus nisi, in sollicitudin nulla faucibus et"}. interdum. Nullam aliquam nibh id posuere dapibus.

#### Exemplo

```yaml
Esse aqui é um texto livre em markdown, mas que no meio dele possui um :toolTipComponent[Tooltip para que el usuario vea]{content="Esse é o conteúdo do tooltip"}. Isso não gera nenhum problema no restante do texto
```

### Tab

::::TabsComponent

:::TabComponent{title="Lorem"}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat dignissim tellus eu sagittis. Nulla cursus diam a erat facilisis sollicitudin. Sed tincidunt imperdiet interdum. Nullam aliquam nibh id posuere dapibus. Cras et tincidunt eros, at lobortis arcu. Sed euismod ut diam vitae mollis. Maecenas mattis leo ut mollis egestas. Suspendisse dictum vitae justo suscipit fermentum. Praesent ultrices, est eget commodo suscipit, mauris neque posuere lorem, eu rhoncus neque libero at ex. Quisque sit amet erat odio. Phasellus sodales risus nisi, in sollicitudin nulla faucibus et. Donec sit amet rhoncus sapien. Aenean interdum consequat sollicitudin. Cras eleifend ex hendrerit ligula varius, aliquet auctor augue facilisis. Morbi in euismod lorem.
:::

:::TabComponent{title="Aenean"}
Aenean velit lorem, tristique eu lacinia non, malesuada vitae lacus. Nam placerat sed elit eget tincidunt. Sed viverra nunc sit amet congue pellentesque. In a diam sit amet velit tempor pellentesque. Vivamus luctus at nulla sed dignissim. Cras at consectetur ex, sit amet pellentesque erat. Phasellus molestie, sem ut commodo ullamcorper, diam velit interdum ante, non vestibulum tellus nisi quis sapien. Proin congue consectetur maximus.
:::

:::TabComponent{title="Vestibulum"}
Cras dignissim elementum aliquet. Sed in convallis ante. Nunc convallis metus eu odio ullamcorper sollicitudin. Integer orci nibh, molestie ac commodo vel, varius sit amet dui. Quisque ultrices orci vel lorem ullamcorper tempus. Aenean porta pretium nisl, hendrerit molestie diam gravida vel. Aenean congue urna neque, a placerat sem commodo non. Suspendisse luctus, erat mollis ultrices consequat, lorem lacus lacinia dolor, tristique rutrum quam ante quis turpis. Aenean a nibh vel arcu tincidunt ultrices ut eget sem. Suspendisse maximus nunc nec dui hendrerit condimentum. Cras placerat ornare enim, in luctus tellus pretium non. Ut sit amet est est.
:::

::::

#### Exemplo

```yaml
::::TabsComponent

:::TabComponent{title="Tab 1"}
Conteúdo da Tab 1
:::

:::TabComponent{title="Tab 2"}
Conteúdo da Tab 2
:::

:::TabComponent{title="Tab 3"}
Conteúdo da Tab 3
:::

::::
```

### Tag

Aenean velit lorem, tristique eu lacinia non, :TagComponent{textTag="API" size="small" hierarchy="loud" color="accent"} vitae lacus. Nam placerat sed elit eget tincidunt. Sed viverra nunc sit amet congue pellentesque. In a diam sit amet velit tempor :TagComponent{textTag="SDK" size="small" hierarchy="loud" color="green"} pellentesque. Vivamus luctus at nulla sed dignissim.

#### Exemplo

```yaml
:TagComponent{tagText="API" size="small" hierarchy="loud" color="accent"}
```

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


```yaml
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
```

## Iteração de componentes existentes

Implementação dos componentes já existentes linkados nesse [Figma](https://www.figma.com/design/Z1MQhRUyq0xH0APuFEWS1b/Componentes-e-templates?node-id=4267-1792&m=dev).
# Message
## Message
### Message

> WARNING
>
> title
>
> content

asdasd

> WARNING
>
> content

asdasd

> NEUTRAL_MESSAGE
>
> title
>
> content

asdasd

> content

#### Exemplo

```
> WARNING
>
> title
>
> content
```

| Aspecto | Descrição |
|---|---|
| Experiência da pessoa que compra | Para crescer e manter o índice de usuários em sua integração, é importante oferecer uma boa experiência de pagamento. As sugestões fornecidas pelo Mercado Pago, resultantes da medição de qualidade irão guiá-lo para alcançar os melhores resultados. |
| Conciliação financeira | A consistência em conferir informações financeiras visa manter a integridade dos dados em seu sistema. Por isso, é importante incluir as medidas necessárias e as boas práticas recomendadas pelo resultado de sua avaliação. |
| Aprovação de pagamentos | Para garantir uma boa taxa de aprovação de pagamento, é importante validar todos os campos indicados como melhorias necessárias e seguir as boas práticas recomendadas pelo Mercado Pago. Isso fornecerá dados mais completos às nossas ferramentas de fraude,  permitindo uma avaliação mais precisa e detalhada. |
| Escalabilidade | Ao avaliar a qualidade é importante utilizar as versões mais atualizadas das nossas APIs e bibliotecas oficiais. Isso assegura que você alcançará os melhores resultados possíveis. |
| Segurança | O Mercado Pago buscará garantir a confidencialidade dos dados envolvidos no processo de compra. As melhorias indicadas ou as boas práticas sugeridas no resultado da sua medição permitirão obter os dados necessários de forma segura. |
