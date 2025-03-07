# Overview de Produtos

Este documento descreve os componentes utilizados para criar a página de [Overview de Produtos](https://www.mercadopago.com.br/developers/pt/docs/checkout-pro/landing) no devsite. Cada componente possui uma sintaxe específica dentro do markdown, que é processada e renderizada no frontend.

## Estrutura dos Componentes

A tabela abaixo descreve as sessões disponíveis e seus respectivos campos.

### `product_landing_hero`

| Campo            | Tipo   | Obrigatório | Descrição |
|-----------------|--------|------------|-----------|
| `title`        | string | Sim        | Título principal da seção |
| `message`      | string | Sim        | Texto introdutória |
| `image`        | string | Não        | URL da imagem de destaque |
| `benefit_icon` | string | Não        | Ícone representando um benefício. Sempre vem em conjunto com um `benefit_title`. A quantidade de pares `benefit_icon` + `benefit_title` é livre. As opções disponíveis são: <br>- `bank-transfer`<br>- `categories`<br>- `edit`<br>- `history`<br>- `laptop`<br>- `link`<br>- `mercado-credito`<br>- `mercado-pago-card`<br>- `payment-link`<br>- `protected-purchase`<br>- `recurring-payments`<br>- `sort `<br>- `to-agree`<br>- `view-mosaic`<br>- `view-relevant` |
| `benefit_title` | string | Não        | Descrição do benefício. Sempre vem em conjunto com um `benefit_icon` |
| `info`         | string | Não        | Informação adicional, suporta links |

#### Exemplo de Uso

```yaml
---
product_landing_hero:
 - title: Integra Checkout Pro fácilmente
 - message: Incorpora esta solución de cobro que permite a tus clientes pagar en Mercado Pago sin necesidad de iniciar sesión.
 - image: https://http2.mlstatic.com/storage/dx-devsite/docs-assets/custom-upload/2025/1/26/1740592108112-imgchopro4x.png
 - benefit_icon: recurring-payments
 - benefit_title: Para pagos online
 - benefit_icon: categories
 - benefit_title: Simple de integrar
 - benefit_icon: link
 - benefit_title: Redirección a Mercado Pago
 - benefit_icon: edit
 - benefit_title: Baja personalización
 - info: ¿Buscas opciones más fáciles? Explora nuestras [soluciones sin desarrollo](/docs#online-payments).
---
```

> :warning: Altamente recomendável que a `image` seja em formato PNG e de alta qualidade. No exemplo foi exportado com a qualidade 4x no Figma


### `product_landing_what_it_offers`

| Campo           | Tipo   | Obrigatório | Descrição |
|---------------|--------|------------|-----------|
| `title`      | string | Sim        | Título da seção |
| `message`    | string | Sim        | Descrição da seção |
| `media_video` | string | Não       | URL do vídeo ilustrativo. É possível exibir o vídeo ou uma imagem. Caso exista `media_video` será prioritário sobre a imagem. Não havendo nenhum dos 2 a media será ocultada. |
| `media_image` | string | Não       | URL da imagem ilustrativa É possível exibir a imagem ou um vídeo. Caso exista `media_video` será prioritário sobre a imagem. Não havendo nenhum dos 2 a media será ocultada. |
| `benefit_title` | string | Sim       | Título de um benefício que será exibido em uma tabela. Sempre em conjunto com um ou mais `benefit_bullet` |
| `benefit_bullet` | string | Sim       | Item da lista de benefícios |

#### Exemplo de Uso

```yaml
---
product_landing_what_it_offers:
 - title: Qué ofrece
 - message: Combina distintos métodos de pago y funciones para garantizar seguridad y conversión de las operaciones.
 - media_video: https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1
 - benefit_title: Seguridad ante fraudes
 - benefit_bullet: Buyer Portection Program.
 - benefit_bullet: Seguridad en transacciones de alto riesgo usando 3DS (3-Domain Secure).
 - benefit_title: Aprobación de pagos
 - benefit_bullet: Validación de tarjetas con Zero Dollar Authorization.
 - benefit_bullet: Reconocimiento facial como método de verificación con FaceAuth.
 - benefit_title: Conversión
 - benefit_bullet: Configuración de la opción CVV.
 - benefit_bullet: Métodos de pago diversos y customizables.
 - benefit_bullet: Capacidad de recuperar pagos que fueron inicialmente rechazados.
 - benefit_bullet: Posibilidad de impulsar las ventas a través de cupones y campañas promocionales.
 - benefit_title: Personalización
 - benefit_bullet: Métodos y condiciones de pago a plazos.
 - benefit_bullet: Apariencia y estilo del botón de pago.
 - benefit_bullet: URL de retorno después de la redirección de pago.
 - benefit_bullet: División del porcentaje de interés entre pagador y vendedor.
---
```

### `product_landing_how_works`

| Campo          | Tipo   | Obrigatório | Descrição |
|--------------|--------|------------|-----------|
| `title`     | string | Sim        | Título da seção |
| `message`   | string | Sim        | Mensagem explicativa |
| `sub_title` | string | Não        | Subtítulo opcional |
| `image`     | string | Sim        | URL da imagem ilustrativa |
| `image_text` | string | Não       | Texto do link da imagem |
| `image_text_link` | string | Não   | URL do link associado a imagem |
| `list_title` | string | Sim       | Lista de um ou mais passos automaticamente numerados  |
| `button_description` | string | Sim | Texto do botão de ação |
| `button_link` | string | Sim | URL do botão de ação |

#### Exemplo de Uso

```yaml
---
product_landing_how_works:
 - title: Cómo funciona
 - message: La persona compra el producto en tu sitio y es redirigida a un entorno seguro de Mercado Pago para pagar.
 - sub_title: Conoce los pasos del proceso de cobro
 - image: https://http2.mlstatic.com/storage/dx-devsite/docs-assets/custom-upload/2025/1/20/1740032685728-image450.png
 - image_text: Simula el procesamiento de pago
 - image_text_link: /live-demo/checkout-pro
 - list_title: El comprador elige pagar con Mercado Pago y es redirigido al flujo de pagos de Mercado Pago.
 - list_title: Elige si inicia sesión en su cuenta de Mercado Pago o continúa como usuario invitado sin loguearse.
 - list_title: Selecciona el método de pago de su preferencia, pudiendo incluso dividir el pago entre más de un método.
 - list_title: Después de completar la compra, es redirigido automáticamente a la tienda online.
 - button_description: Cómo integrar
 - button_link: /docs/checkout-pro/landing
---
```


### `product_landing_what_differentiates`

| Campo        | Tipo   | Obrigatório | Descrição |
|-------------|--------|------------|-----------|
| `title`    | string | Sim        | Título da seção |
| `message`  | string | Sim        | Descrição |
| `highlight_text` | string | Não   | Texto do produto destacado |
| `column_image` | string | Sim    | URL da imagem do produto a ser comparado. Sempre em conjunto com<br>`column_product`<br>`column_button_text`<br>`column_button_link`<br>Suporta dois ou mais conjunto dos quatro campos|
| `column_product` | string | Sim  | Nome do produto. Sempre em conjunto com <br>`column_image`<br>`column_button_text`<br>`column_button_link`<br>Suporta dois ou mais conjunto dos quatro campos |
| `column_button_text` | string | Sim | Texto do botão de produto. Sempre em conjunto com <br>`column_product`<br>`column_image`<br>`column_button_link`<br>Suporta dois ou mais conjunto dos quatro campos |
| `column_button_link` | string | Sim | Link do botão de produto. Sempre em conjunto com <br>`column_product`<br>`column_button_text`<br>`column_image`<br>Suporta dois ou mais conjunto dos quatro campos |
| `line_text` | string | Sim  | Texto descritivo da linha comparativa |
| `line_type` | string | Sim  | Tipo da linha<br>- `dots`: recebe um valor numérico de 1 a 5<br>- `check`: recebe `true` ou `false`<br>- `text`: recebe uma string<br>- `sites`: recebe `all` para exibir o ícone de todos os sites, ou declarativamente cada site: `mla`, `mlb`, `mlm` e etc |
| `line_values` | string | Sim | Valores de cada coluna separados por pipe `\|`. Ex:<br>Para um campo do tipo `dots` o `line_values` teria os respectivos valores numéricos `4\|3\|1`<br>Para um campo do tipo `text` o `line_values` teria os respectivos valores string `texto coluna 1\|texto coluna 2\|texto coluna 3`

#### Exemplo de Uso

```yaml
---
product_landing_what_differentiates:
 - title: Qué lo diferencia
 - message: Compara las características de nuestros checkouts y elige el que mejor se adapte a tu negocio.
 - highlight_text: Estás aquí
 - column_image: https://http2.mlstatic.com/storage/dx-devsite/docs-assets/custom-upload/2025/1/24/1740402110505-eschopro.png
 - column_product: Checkout Pro
 - column_button_text: Cómo integrar
 - column_button_link: /docs/checkout-pro/integrate-checkout-pro/web
 - column_image: https://http2.mlstatic.com/storage/dx-devsite/docs-assets/custom-upload/2025/1/24/1740402132575-eschobricks.png
 - column_product: Checkout Bricks
 - column_button_text: Ver resumo
 - column_button_link: /docs/checkout-pro/integrate-checkout-pro/web
 - column_image: https://http2.mlstatic.com/storage/dx-devsite/docs-assets/custom-upload/2025/1/24/1740402177212-eschoapi.png
 - column_product: Checkout Transparente
 - column_button_text: Ver resumo
 - column_button_link: /docs/checkout-pro/integrate-checkout-pro/web
 - line_text: Esfuerzo de integración
 - line_type: dots
 - line_values: 4|3|1
 - line_text: Nivel de personalización
 - line_type: dots
 - line_values: 2|3|5
 - line_text: Diseño listo para configurar
 - line_type: check
 - line_values: true|true|false
 - line_text: Experiencia de cobro
 - line_type: text
 - line_values: En Mercado Pago|En tu sitio|En tu sitio
 - line_text: Medios de pago
 - line_type: text
 - line_values: Dinero en cuenta, Pix, tarjeta de crédito o débito, Línea de crédito, boleto|Dinero en cuenta, Pix, tarjeta de crédito o débito, Línea de crédito, boleto|Dinero en cuenta, Pix, tarjeta de crédito o débito, Línea de crédito, boleto
 - line_text: Disponibilidad por país
 - line_type: sites
 - line_values: all|all|mlb, mla, mlm, mlc, mlu, mpe
---
```

### `product_landing_how_integrate`

| Campo                 | Tipo   | Obrigatório | Descrição |
|----------------------|--------|------------|-----------|
| `title`             | string | Sim        | Título da seção |
| `sub_title`         | string | Não        | Subtítulo da seção |
| `image`             | string | Sim        | URL da imagem |
| `image_text`        | string | Não        | Texto alternativo para a imagem |
| `image_text_link`   | string | Não        | URL para a simulação |
| `requirement_title` | string | Sim        | Título da seção de requisitos |
| `requirement_table_title` | string | Sim  | Título de um item da tabela. Sempre em conjunto com um `requirement_table_list`.|
| `requirement_table_list` | string | Sim  | Lista de requisitos. Sempre em conjunto com um `requirement_table_title`. |
| `list_title`        | string | Sim        | Título da lista de passos |
| `list_item`         | string | Sim        | Item da lista de integração |
| `button_description` | string | Sim        | Texto do botão de ação |
| `button_link`       | string | Sim        | URL do botão |

---

#### Exemplo de Uso

```yaml
---
product_landing_how_integrate:
 - title: Cómo integrar
 - sub_title: Conoce los etapas que deberás seguir para integrar esta solución.
 - image: https://http2.mlstatic.com/storage/dx-devsite/docs-assets/custom-upload/2025/1/25/1740511571091-Group94928.png
 - image_text: Explora ejemplos de código
 - image_text_link: /live-demo/checkout-pro
 - requirement_title: Requisitos prévios
 - requirement_table_title: Cuenta de vendedor
 - requirement_table_list: Para integrar Checkout Pro, necesitas una cuenta de vendedor en Mercado Pago. Si no tienes una, puedes [crearla gratis](/docs/checkout-pro/landing).
 - requirement_table_title: Credenciales
 - requirement_table_list: Son claves únicas para que puedas configurar tus integraciones. Necesitas 2 de prueba para probar la integración y 2 de producción para recibir pagos reales. [Saber más](/docs/checkout-pro/landing)
 - requirement_table_title: Certificado SSL
 - requirement_table_list: Permite la navegación segura y la protección de tus datos durante las transferencia de información.
 - list_title: Proceso de integración
 - list_item: Crear la aplicación desde el panel
 - list_item: Construir tu integración
 - list_item: Probar su funcionamiento
 - list_item: Salir a producción
 - list_item: Medir la calidad
 - button_description: Quiero comenzar a integrar
 - button_link: #
---
```

Este markdown será processado e exibido como uma página de Overview de Produtos na documentação técnica.
