# POC - Separação de Snippets de Código da Documentação

A estratégia adotada para separar o código da documentação consiste em importar os snippets a partir de um repositório externo ao **devsite-docs**.
Este repositório é dedicado exclusivamente à manutenção dos snippets de código utilizados na docu.

O principal objetivo dessa separação é permitir que o time de SDKs seja o responsável por esse repositório, podendo implementar mecanismos de controle e validação da saúde do código, garantindo que não ocorram erros de sintaxe ou compilação nos snippets, como já ocorre atualmente.

Para a POC, foi criado o repositório **dx-devsite-snippets**, que está sendo utilizado como um repositório de teste. Esse repositório é importado como submódulo no **devsite-docs**.

## Estrutura de Pastas

A estrutura de pastas do repositório **dx-devsite-snippets** segue o padrão abaixo:

devsite-docs/dx-devsite-snippets/snippets/[lang]/[snippet]/index.[lang]

A pasta **/snippets** contém as linguagens utilizadas **/lang** (PHP, Node, Java, Ruby, etc.).
E cada linguagem possui uma pasta para cada **/snippet**, identificada pelo caso de uso, como *criação de pagamentos*, *adição de SDK*, etc.

Exemplo de estrutura:

snippets
  ├── php
  │   ├── create-payment
  │   ├── create-preference
  │   ├── add-sdk
  │   └── ...
  ├── node
  │   ├── create-payment
  │   ├── create-preference
  │   ├── add-sdk
  │   └── ...

## Utilização para o Time DevComm

A utilização do componente de multi snippets languages atual não será alterada.
No entanto, será adicionado um novo componente para a importação dos snippets, com a seguinte estrutura:

```markdown
---
code_snippet:
 - snippet: [key que identifica a pasta onde está o código]
 - partial: [key que identifica uma porção do código a ser importado, caso não se queira importar o arquivo inteiro]
 - lang: [lista de linguagens para os snippets]
---
```

### Como Funciona
O componente irá buscar no repositório, na pasta /snippets, para cada /lang, o /snippet especificado no componente.
Pode haver casos em que se deseja importar apenas parte do snippet e não o arquivo inteiro
Para esse cenário p campo **partial** é definido e o componente importará apenas a porção especificada do arquivo.

Exemplo de uso:

---
code_snippet:
  - snippet: create-payment
  - partial: import-mercadopago
  - lang: [php, node]
---

Este exemplo busca os arquivos devsite-docs/dx-devsite-snippets/snippets/[php]/[create-payment]/index.php, esse arquivo não possui partial então é importado por inteiro
E o arquivo devsite-docs/dx-devsite-snippets/snippets/[node]/[create-payment]/index.js, possui partial definido, importando apenas a porção import-mercadopago no arquivo.

### Explicação do Uso de Partials
O uso de partials permite a importação de trechos específicos do código, oferecendo mais flexibilidade na documentação de diferentes cenários sem a necessidade de importar o código inteiro.
O que é útil para incluir apenas uma parte de um exemplo, como a inicialização de um SDK por ex, sem expor o código completo.
Isso é feito por comentários no código com a seguinte estrutura

// snippet-start: partial-key
// snippet-end: partial-key

Exemplo

```node
// snippet-start: import-mercadopago
import { Payment, MercadoPagoConfig } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: '<ACCESS_TOKEN>' });
// snippet-end: import-mercadopago

// snippet-start: create-client
client.create({
  body: {
    transaction_amount: req.transaction_amount,
    token: req.token,
    ...
  },
})
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
// snippet-end: create-client
```

## Utilização para o Time de SDKs
O time de SDKs será responsável por criar os exemplos de código para cada linguagem, com especificações de partials quando necessário. A principal vantagem dessa abordagem é que será possível utilizar ferramentas de validação, como pre-commit e CI, para evitar que códigos com erro sejam adicionados ao repositório. Isso garante que os snippets mantêm sua integridade e qualidade ao longo do tempo.

No escopo da POC fizemos a configuração de pre-commit com validação para as linguagens:

* php-linter
* node-linter
* java-linter
* ruby-linter
* python-linter
* go-linter
* shellcheck

=====================================

# PROS
* Validação de código simples no repositório
* Mitigação de erros de sintaxis
* Gestão simplificada para o time de SDKs
* Referência simples para devcomm


# CONTRAS
* Mudanças na estrutura de pastas poderiam comprometer todos os snippets
* É um passo a mais no processamento de dados para a IA
* Os partials deixam o código sujo com comentários


# WARNINGS
* O repositório precisa de acesso desde devtools, devcomm e SDKs? É possível fazer isso sem adicionar pessoas a um Team do Fury?
* É simples manter o repositório atualizado automaticamente em devsite-docs?
