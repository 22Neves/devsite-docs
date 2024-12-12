# Main Apps (Integração local)

Se você atualmente utiliza uma integração local com Redelcom, a solução equivalente oferecida pelo Mercado Pago é **Main Apps**.

**Main Apps** são aplicações de gestão de negócios que podem ser integradas ao **Point Smart**, um dispositivo de pagamento do tipo SmartPOS. Essas aplicações atuam como a interface principal, permitindo que o vendedor utilize o leitor para processar pagamentos de forma integrada com o Mercado Pago.

## Pré-requisitos
Para garantir uma migração bem-sucedida para Main Apps, você deve cumprir com os seguintes requisitos prévios:

| Requisito                                 | Descrição                                                                                                                                                                                                                              |
|-------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Conta de vendedor do Mercado Pago         | Para realizar uma integração com o Mercado Pago, você precisa ter uma conta de vendedor. Se ainda não a possui, acesse a [página](https://www.mercadopago.cl/hub/registration?from_landing=true&contextual=company&entity=pj) para criá-la gratuitamente.                                                                             |
| Aplicação criada em [Suas integrações](/developers/panel/app)      | As aplicações são as diferentes integrações contidas em uma ou várias lojas. Você pode criar uma aplicação para cada solução que implementar, a fim de manter tudo organizado e ter um controle que facilite a gestão. <br><br> Para integrar **Main Apps**, é necessário criar uma aplicação e obter o `application_id`, que deve ser enviado no `manifest`. Obtenha mais informações sobre este processo na seção [Configuração da integração](#configuraodaintegrao). <br><br> Para criar sua aplicação, consulte a [documentação do Painel do desenvolvedor](/developers/pt/docs/mp-point/additional-content/your-integrations/dashboard). |
| Terminal Point do Mercado Pago        | Para realizar uma integração com o Mercado Pago, você precisa que forneçamos um dispositivo Point. Para obtê-lo, **entre em contato com seu executivo comercial de carteira assessorada**.                                                  |
| Aplicação do Mercado Pago                 | Além do dispositivo, é necessário ter o aplicativo Mercado Pago para fazer login e gerenciar os pagamentos realizados. Você pode baixá-lo tanto para dispositivos [Android](https://play.google.com/store/apps/details?id=com.mercadopago.wallet&hl=pt_BR&pli=1) quanto para [iOS](https://apps.apple.com/br/app/mercado-pago-banco-digital/id925436649).                                                |

## Configuração da integração

Antes de começar sua integração com o Main Apps, é necessário enviar seu `application_id` no Android Manifest. 

Para isso, primeiramente obtenha seu `application_id` acessando [Suas integrações](/developers/panel/app) e selecionando sua aplicação. Você o encontrará na seção **Detalhes do aplicação**, abaixo do nome "Número do aplicação". 

Em seguida, copie e cole esse número no arquivo _AndroidManifest.xml_, seguindo o formato `value='application_id + L'`, conforme mostrado no exemplo abaixo.

```manifest
<meta-data
name='com.mercadolibre.android.sdk.CLIENT_ID'
value='XXXXXXXXXXXXXXXXL'>
</meta-data>
```

Se você vai implementar o fluxo de OAuth para obter informações da conta do vendedor de maneira segura, adicione as seguintes linhas:

```manifest
<meta-data
name='com.mercadolibre.android.sdk.OAUTH_ENABLED'
value='true'>
</meta-data>
```

Uma vez concluído este passo prévio, continue com a integração do **Main Apps** seguindo a [documentação](/developers/pt/docs/main-apps/landing).