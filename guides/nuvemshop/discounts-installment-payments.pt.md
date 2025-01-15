# Descontos, parcelamentos e acréscimos

Com o Mercado Pago, você tem a flexibilidade de oferecer benefícios exclusivos aos seus clientes, como descontos, creditos e parcelamentos com condições especiais, de forma personalizada e opcional. 

Você pode personalizar essas configurações de acordo com suas necessidades, sendo:

* [Descontos através do Painel Administrativo da sua loja](/developers/pt/docs/nuvemshop/payments-configuration/discounts-and-installment-payments#:~:text=Configura%C3%A7%C3%A3o%20atrav%C3%A9s%20do%20Painel%20Administrativo%20da%20Nuvemshop)
* [Parcelamentos com acréscimos diretamente no plugin Mercado Pago na Nuvemshop](/developers/pt/docs/nuvemshop/payments-configuration/discounts-and-installment-payments#:~:text=Configura%C3%A7%C3%A3o%20atrav%C3%A9s%20do%20plugin%20Mercado%20Pago%20na%20Nuvemshop)
* [Parcelamentos sem acréscimos diretamente na sua conta Mercado Pago vinculada](/developers/pt/docs/nuvemshop/payments-configuration/discounts-and-installment-payments#:~:text=Configura%C3%A7%C3%A3o%20atrav%C3%A9s%20da%20conta%20Mercado%20Pago)

## Descontos

### Configuração através do Painel Administrativo da Nuvemshop

1. No Painel Administrativo da sua loja na Nuvemshop, acesse **Meus aplicativos**.
2. Localize o plugin do Mercado Pago na lista das aplicações e clique em **Ações > Configurar**.
3. Na lista de meios de pagamentos, localize o plugin do Mercado Pago e clique em **Editar configuração** para definir as configurações abaixo.

----[mlb]----
![discounts mlb](/images/nuvemshop/discounts-admin-mlb.png)

------------
----[mlm, mla]----
![discounts all](/images/nuvemshop/discounts-admin-all.png)

------------
----[mlm, mla]----
* **Checkout API**: essas configurações opcionais permitem que você configure descontos específicos para diferentes métodos de pagamento com [Checkout API](/developers/pt/docs/nuvemshop/payment-configuration/checkout-api). Defina o desconto em porcentagem aplicado aos clientes que escolherem pagar com:
   * Cartão de crédito
   * Cartão de débito
   * Redes de pagamento em efectivo
------------
----[mlb]----
* **Checkout transparente**: essas configurações opcionais permitem que você configure descontos específicos para diferentes métodos de pagamento com [Checkout Transparente](/developers/pt/docs/nuvemshop/payment-configuration/checkout-api). Defina o desconto em porcentagem aplicado aos clientes que escolherem pagar com:
   * Boleto bancário
   * Cartão de crédito
------------
* **Checkout externo (Checkout Pro)**: você pode definir um desconto global em porcentagem para clientes que escolherem o [Checkout Pro](/developers/pt/docs/nuvemshop/payment-configuration/checkout-pro). Insira o valor em porcentagem a ser deduzido do total da compra.

## Parcelamentos e acréscimos

### Configuração através do plugin Mercado Pago na Nuvemshop

Você também pode configurar as experiências de parcelamento de cada checkout em sua loja através do próprio Painel administrativo do plugin Mercado Pago. Para isso:

#### Checkout Pro

1. No Painel Administrativo da sua loja na Nuvemshop, acesse **Meus aplicativos**.
2. Localize o plugin do Mercado Pago na lista das aplicações e clique em **Ações > Configurar**.
3. Na lista de meios de pagamentos, localize o plugin do Mercado Pago e clique em **Editar configuração**.
4. Desça até o final da página e clique em **Mais configurações no site do Mercado Pago**.
5. Na tela em questão, localize o meio de pagamento "Checkout Pro"  e clique em **Configurar**.
6. Nesta seção, você pode definir o **número máximo de parcelas** nos quais seus clientes poderão efetuar o pagamento utilizando o Checkout Pro.

> WARNING
>
> Atenção
>
> Sempre que forem alteradas as configurações de parcelamento, será necessário **sincronizar** as alterações com a sua loja.

----[mlb]----
![discounts checkout-pro mlb](/images/nuvemshop/discounts-checkout-pro-mlb.png)

------------
----[mlm]----
![discounts checkout-pro mlm](/images/nuvemshop/discounts-checkout-pro-mlm.png)

------------
----[mla]----
![discounts checkout-pro mla](/images/nuvemshop/discounts-checkout-pro-mla.png)

------------

----[mlm, mla]----
#### Checkout API

------------
----[mlb]----
#### Checkout Transparente

------------
1. No Painel Administrativo da sua loja na Nuvemshop, acesse **Meus aplicativos**.
2. Localize o plugin do Mercado Pago na lista das aplicações e clique em **Ações > Configurar**.
3. Na lista de meios de pagamentos, localize o plugin do Mercado Pago e clique em **Editar configuração**.
4. Desça até o final da página e clique em **Mais configurações no site do Mercado Pago**.
5. Na tela em questão, localize o meio de pagamento ----[mlm, mlm]---- "Checkout API" ------------ ----[mlb]---- "Checkout Transparente" ------------ e clique em **Configurar**.
6. Nesta seção, você pode definir o **número máximo de parcelas** nos quais seus clientes poderão efetuar o pagamento utilizando o ----[mlm, mla]---- Checkout API. ------------ ----[mlb]---- Checkout Transparente. ------------

> WARNING
>
> Atenção
>
> Sempre que forem alteradas as configurações de parcelamento, será necessário **sincronizar** as alterações com a sua loja.

----[mlb]----
![discounts checkout-api mlb](/images/nuvemshop/discounts-checkout-api-mlb.png)

------------
----[mlm]----
![discounts checkout-api mlm](/images/nuvemshop/discounts-checkout-api-mlm.png)

------------
----[mla]----
![discounts checkout-api mla](/images/nuvemshop/discounts-checkout-api-mla.png)

------------

### Configuração através da conta Mercado Pago

Na sua conta do Mercado Pago, você pode consultar e configurar o número de parcelas sem acréscimos que deseja oferecer para seus clientes. Nesta opção, seus clientes podem parcelas suas compras sem juros e você assume a taxa de financiamento.

> WARNING
>
> Attención
>
> A quantidade de parcelamento sem juros que você escolher vai valer para pagamentos com cartão, tanto pelo [Checkout Pro](/developers/pt/docs/nuvemshop/payment-configuration/checkout-pro) quanto pelo [----[mlm, mla]----Checkout API.------------ ----[mlb]----Checkout Transparente.------------](/developers/pt/docs/nuvemshop/payment-configuration/checkout-api)

Para configurar parcelas sem juros na sua loja, siga estes passos:

1. Faça login em sua [conta do Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/home).
2. No menu da sua conta Mercado Pago, selecione **Seu negócio > Taxas e parcelas**.

![discounts-mercadopago-1-pt](/images/nuvemshop/discounts-mercadopago-1-pt.png)

3. No topo da tela, selecione **Checkout**.

![discounts-mercadopago-2-pt](/images/nuvemshop/discounts-mercadopago-2-pt.png)

4. Selecione "Parcelamento" e, em seguida, **Oferecer**.

![discounts-mercadopago-3-pt](/images/nuvemshop/discounts-mercadopago-3-pt.png)

5. **Ative o botão** ao lado de "Oferecer parcelado vendedor".

![discounts-mercadopago-4-pt](/images/nuvemshop/discounts-mercadopago-4-pt.png)

6. Escolha o máximo de parcelas que quer oferecer aos seus clientes e pronto!

![discounts-mercadopago-5-pt](/images/nuvemshop/discounts-mercadopago-5-pt.png)