----[mlb]----
# Checkout Transparente 

Com o [Checkout Transparente](/developers/pt/docs/checkout-api/landing), todo o processo de finalização de compra acontecerá dentro do ambiente da loja online, sem a necessidade de redirecionamento para uma página externa. Além de permitir maior controle no processo de customização e integração, o checkout oferece uma estrutura completa para processamento de pagamentos com os principais meios disponíveis no mercado. 

Para integrar o Checkout Transparente, siga os passos abaixo.

------------
----[mla, mlm]----
# Checkout API 

Com o [Checkout API](/developers/pt/docs/checkout-api/landing), todo o processo de finalização de compra acontecerá dentro do ambiente da loja online, sem a necessidade de redirecionamento para uma página externa. Além de permitir maior controle no processo de customização e integração, o checkout oferece uma estrutura completa para processamento de pagamentos com os principais meios disponíveis no mercado.

Para integrar o Checkout API, siga os passos abaixo.

------------
----[mlb]----
1. No Painel Administrativo da sua loja na Nuvemshop, acesse **Meus aplicativos**.
2. Localize o plugin do Mercado Pago na lista das aplicações e clique em **Ações > Configurar**.
3. Na lista de meios de pagamentos, localize o plugin do Mercado Pago e clique em **Editar configuração**.
4. Desça até o final da página e clique em **Mais configurações no site do Mercado Pago**.
5. Na tela de configuração dos checkouts, navegue até a área "Checkout Transparente" e habilite a opção de pagamento desejada, podendo ser:
  * **Cartões de crédito e/ou débito**:
    * **Crédito**. Selecione as bandeiras que deseja habilitar em sua loja e indique também o **número máximo de parcelas a serem permitidas para parcelamento de compras**. Para configurar um parcelamento sem acréscimos, veja a seção de [Descontos, parcelamentos e acréscimos](/developers/pt/docs/nuvemshop/payments-configuration/discounts-and-installment-payments).
    * **Débito**. Selecione as bandeiras que deseja habilitar em sua loja.
  * **Pix**. Indique também um prazo de vencimento para pagamento com código Pix. Além disso, a opção de pagamento com Pix só será exibida se houver uma Chave Pix cadastrada no Mercado Pago. Caso ainda não tenha criado, assista o [vídeo](https://www.youtube.com/watch?v=60tApKYVnkA) e veja o passo a passo.
  * **Boleto**. Indique também o número de dias para vencimento do boleto (incluindo sábado e domingo).
6. Por fim, clique em **Salvar alterações**.

------------ 
----[mla]----
1. No Painel Administrativo da sua loja na Nuvemshop, acesse **Mis aplicaciones**.
2. Localize o plugin do Mercado Pago na lista das aplicações e clique em **Acciones > Configurar**.
3. Na lista de meios de pagamentos, localize o plugin do Mercado Pago e clique em **Editar configuración**.
4. Desça até o final da página e clique em **Más configuraciones en el sitio de Mercado Pago**.
5. Na tela em questão, navegue até a área "Checkout API" e habilite a opção de pagamento desejada, podendo ser:
  * **Tarjeta de crédito y/o débito**:
    * **Crédito**.  Selecione as bandeiras que deseja habilitar em sua loja e indique também o **número máximo de parcelas a serem permitidas para parcelamento de compras**. Para configurar um parcelamento sem acréscimos, veja a seção de [Descontos, parcelamentos e acréscimos](/developers/pt/docs/nuvemshop/payments-configuration/discounts-and-installment-payments).
    * **Débito**. Selecione as bandeiras que deseja habilitar em sua loja.
  * **Efectivo**. Selecione outros tipos de meios de pagamento que deseja habilitar em sua loja, como Rapipago e Pago Fácil. Indique também o número de dias para vencimento do ticket (incluindo sábado e domingo).
6. Por fim, clique em **Guardar cambios**.

------------
----[mlm]----
1. No Painel Administrativo da sua loja na Nuvemshop, acesse **Mis aplicaciones**.
2. Localize o plugin do Mercado Pago na lista das aplicações e clique em **Acciones > Configurar**.
3. Na lista de meios de pagamentos, localize o plugin do Mercado Pago e clique em **Editar configuración**.
4. Desça até o final da página e clique em **Más configuraciones en el sitio de Mercado Pago**.
5. Na tela em questão, navegue até a área "Checkout API" e habilite a opção de pagamento desejada, podendo ser:
  * **Tarjeta de crédito y/o débito**:
    * **Crédito**.  Selecione as bandeiras que deseja habilitar em sua loja e indique também o **número máximo de parcelas a serem permitidas para parcelamento de compras**. Para configurar um parcelamento sem acréscimos, veja a seção de [Descontos, parcelamentos e acréscimos](/developers/pt/docs/nuvemshop/payments-configuration/discounts-and-installment-payments).
    * **Débito**. Selecione as bandeiras que deseja habilitar em sua loja.
  * **Efectivo**. Selecione outros tipos de meios de pagamento que deseja habilitar em sua loja, como OXXO, Paycash, entre outros. Indique também o número de dias para vencimento do ticket (incluindo sábado e domingo).
6. Por fim, clique em **Guardar cambios**.

------------
----[mlb]---- 
![nuvemshop - checkout transparente - mlb](/images/nuvemshop/integration-checkout-api-mlb.png)

Pronto! O Checkout Transparente está pronto para receber os pagamentos da sua loja.

------------
----[mla]---- 
![nuvemshop - checkout api - mla](/images/nuvemshop/integration-checkout-api-mla.png)

Pronto! O Checkout API está pronto para receber os pagamentos da sua loja.

------------
----[mlm]---- 
![nuvemshop - checkout api - mlm](/images/nuvemshop/integration-checkout-api-mlm.png)

Pronto! O Checkout API está pronto para receber os pagamentos da sua loja.

------------