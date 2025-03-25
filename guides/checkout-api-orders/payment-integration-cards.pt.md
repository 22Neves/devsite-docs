# Cartões

A integração de pagamentos com **cartão de crédito e/ou débito** no ----[mlb]---- Checkout Transparente------------ ----[mla, mlm, mlu, mco, mlc, mpe]---- Checkout API ------------ é realizada por meio do _Card Payment Brick_.

Nesse modo de integração, a biblioteca `MercadoPago.js`, incluída no seu projeto durante a [configuração do ambiente de desenvolvimento](/developers/pt/docs/checkout-api/development-environment), é responsável por obter as informações necessárias para a geração de um pagamento. Ou seja, ela realiza uma busca pelos tipos de documentos disponíveis para o país correspondente e, conforme os dados do cartão são inseridos, também busca as informações relativas ao emissor e às parcelas disponíveis.

Toda a informação envolvida no processamento da transação é armazenada no *backend*, em conformidade com os padrões de [segurança PCI](/developers/pt/docs/security/pci).

Com isso, a implementação do fluxo é transparente para quem realiza a integração, conforme mostrado no diagrama a seguir.

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

Além disso, o componente oferece a possibilidade de orientar o usuário com alertas sobre campos incompletos ou possíveis erros ao preencher os dados, otimizando o processo de compra.

Para avançar com a configuração de pagamentos com cartão de débito e/ou crédito via _Card Payment Brick), siga os passos abaixo.