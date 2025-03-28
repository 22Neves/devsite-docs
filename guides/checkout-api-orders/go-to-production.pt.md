# Sair à produção

Uma vez finalizado o processo de configuração e dos testes, sua integração estará pronta para ser colocada em produção.

Veja abaixo as recomendações necessárias para realizar essa mudança de maneira eficaz e segura, garantindo que a integração esteja preparada para o recebimento de transações reais.

## Ativar credenciais de produção

As credenciais utilizadas durante a fase de desenvolvimento eram credenciais de teste. Para começar a receber pagamentos reais, você deverá **ativar as credenciais de produção da sua conta do Mercado Pago e substituí-las**.

Para isso, acesse [Suas integrações](/developers/panel/app), selecione a aplicação desejada e, no menu lateral, acesse **Produção > Credenciais de Produção**. Lá você encontrará sua :toolTipComponent[_Public Key_]{content="Chave pública que é utilizada no _frontend_ para acessar informações e criptografar dados. Você pode acessá-la através de **Suas integrações > Detalhes da aplicação > Produção > Credenciais de produção**."} e o :toolTipComponent[Access Token produtivos]{content="Chave privada da aplicação criada no Mercado Pago e que é utilizada no _backend_ ao receber pagamentos reais. Você pode acessá-la através de **Suas integrações > Detalhes da aplicação > Produção > Credenciais de produção**."}, que deverão ser utilizados no lugar dos de teste.

----[mlm]----
![Como acessar as credenciais através das Suas Integrações](/images/credentials/credentials-prod-panel-pt.png)

------------
----[mla, mlb]----
![Como acessar as credenciais através das Suas Integrações](/images/credentials/credentials-prod-panel-pt.gif)

------------

Para obter mais informações, consulte nossa [documentação sobre Credenciais](/developers/pt/docs/checkout-api/resources/credentials).

## Implementar certificado SSL

Para garantir uma integração segura que proteja os dados de cada transação, é necessário implementar um certificado SSL (_Secure Sockets Layer_). Este certificado, junto com a utilização do protocolo HTTPS na disponibilização dos meios de pagamento, assegura uma conexão criptografada entre o cliente e o servidor.

Adotar estas medidas não apenas reforça a segurança dos dados dos usuários, mas também assegura a conformidade com as normativas e leis específicas de cada país relativas à proteção de dados e à segurança da informação. Além disso, contribui significativamente para proporcionar uma experiência de compra mais segura e confiável.

Embora **a exigência do certificado SSL não se aplique durante o período de testes**, sua implementação é obrigatória para entrar em produção. 

Para mais informações, confira os [Termos e Condições](/developers/pt/docs/resources/legal/terms-and-conditions) do Mercado Pago.