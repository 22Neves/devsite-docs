# Pré-requisitos

Antes de começar a desenvolver sua solução, veja as condições que devem ser cumpridas.

| Requisitos | Descrição |
|---|---|
| Aplicação  | As aplicações são as diferentes integrações contidas em uma ou mais lojas. Você pode criar uma aplicação para cada solução que implementar, a fim de ter tudo organizado e manter um controle que facilite a gestão. Veja [Suas integrações](/developers/pt/docs/checkout-bricks/additional-content/your-integrations/introduction) para mais informações sobre como criar uma aplicação. |
| Credenciais | Senhas únicas com as quais identificamos uma integração na sua conta. Para realizar as integrações, será necessário o **Client ID**. Acesse [Credenciais](/developers/pt/docs/main-apps/additional-content/your-integrations/credentials) para mais informações. |
|Loja e caixa | As lojas e caixas criadas no Mercado Pago permitem gerenciar as vendas realizadas em um negócio. Para criá-las, acesse o [Painel Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/stores#from-section=menu)|
| Point Smart do Mercado Pago | Mercado Pago Point é a maquininha de cartão do Mercado Pago que permite aos compradores realizarem pagamentos presenciais de maneira rápida e segura utilizando cartões de crédito ou débito. |
| Pré-configuração de dispositivos | Para que as maquininhas operem em **Modo integrado** e a pré-configuração seja feita, compartilhe com o Mercado Pago a conta que será utilizada para a integração, bem como as configurações de caixas, lojas e números de série dos aparelhos. |
|Kit de Desenvolvimento| Para iniciar o desenvolvimento, baixe o [Kit de Desenvolvimento](https://github.com/mercadolibre/point-mainapp-demo-android) fornecido pelo Mercado Pago. |
|Android Studio| Instale o [ambiente de desenvolvimento Android](https://developer.android.com/studio) para construir e depurar os main apps.|
|OAuth| O OAuth é um protocolo de autorização que permite que aplicações tenham acesso limitado às informações privadas das contas do Mercado Pago. Se for obter informações da conta da pessoa vendedora, faça o [fluxo de OAuth](/developers/pt/docs/main-apps/additional-content/security/oauth/introduction). |

## Especificações técnicas da Point Smart

Para garantir que a integração seja exitosa, considere as características da maquininha Point Smart que você possui, seja o A910 ou o N950, e como o aplicativo se adaptará a elas.

![prerequisites](/main-apps/prerequisites-all.png)

| Especificação | A910 | N950 |
|---|---|---|
|Tela| 5'' IPS WXGA 720 x 1280 Pixels <br> Multi-Point Capacitive HD Touch Screen | LCD colorida TFT de 5,99 polegadas, 1440 x 720 pixels, com luz de fundo ajustável, tela multitoque capacitiva e assinatura eletrônica |
|Sistema operacional|Android 6| Android 12 |
|Impressora|Sim <br> 40 Linhas/Sec <br> Diâmetro do rolo de papel: 40mm | Impressora térmica de alta velocidade, 80 mm/s. <br> Diâmetro do rolo de papel: 40mm <br> Largura do papel: 58mm |
|Memória RAM|1GB| 2/3/4 GB |
|Armazenamento interno|6GB| 16/32/64GB |
|Meios de pagamento processados|Chip & PIN <br> NFC sem contato <br> Magnetic Stripe| Chip e PIN <br> Cartões sem contato <br> Carteiras baseadas em NFC ou código QR |
|Arquitetura|ARMv7| ARMv7-M security core, 192MHz |
|Android System Web View (renderização das WebViews nos aplicativos Android)|Pacote: com.android.webview <br> Versão: 52.0.2743.100 <br> | |Pacote: com.android.webview <br> Versão: 93.0.4577.62 <br> |