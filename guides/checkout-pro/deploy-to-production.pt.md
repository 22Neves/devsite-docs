# Subir em produção

Uma vez finalizado o processo de configuração e testes, sua integração estará pronta para subir em produção.

A seguir, veja as recomendações necessárias para realizar essa transição de maneira eficaz e segura, garantindo que sua integração esteja preparada para receber transações reais.

## Usar credenciais de produção

Agora que você concluiu todos os testes necessários para verificar que sua integração está funcionando corretamente, é preciso substituir as **credenciais de teste** pelas **credenciais de produção** da sua aplicação do Mercado Pago**.

Para fazer isso, acesse [Suas integrações](/developers/panel/app) e, no menu lateral esquerdo, acesse **Produção > Credenciais de produção**. Lá você encontrará sua `public_key` e `access_token` produtivos, que deverá utilizar no lugar das credenciais da conta de teste. Para mais informações, consulte nossa documentação de [Credenciais](/developers/pt/docs/checkout-pro/additional-content/your-integrations/credentials).

## Certificado SSL

[TXTSNIPPET][/guides/snippets/ssl-certificate/ssl-certificate]

## Medir a qualidade da sua integração

Depois de concluir a configuração da sua integração, recomendamos que você realize uma **medição de qualidade**. Este é um processo de certificação da sua integração que garante que seu desenvolvimento atenda aos requisitos de qualidade necessários para proporcionar uma melhor experiência e aumentar a taxa de aprovação de pagamentos. Para saber mais, acesse a documentação [Como medir a qualidade da sua integração](/developers/pt/docs/integration-quality).