# Notificações

As notificações são mensagens enviadas pelo servidor do Mercado Pago a partir de eventos realizados em sua aplicação. Para que essas notificações sejam enviadas, é necessário ativar diferentes tópicos de notificação, seja em [Suas integrações](/developers/panel/app) ou ao criar um pagamento. Isso permitirá que você obtenha informações sobre os diferentes eventos ocorridos.

Webhooks (também conhecido como retorno de chamada web) utiliza HTTP REST para notificar instantaneamente as atualizações e oferece maior segurança na integração por meio de uma assinatura secreta. Este método de validação garante que as notificações recebidas são enviadas pelo Mercado Pago.

Uma vez configuradas, as notificações Webhooks serão enviadas sempre que ocorrer um ou mais eventos cadastrados. Isso evita a necessidade de verificações constantes, prevenindo a sobrecarga do sistema e a perda de dados em situações críticas. 


## Configurar notificações Webhooks

As notificações Webhooks podem ser configuradas para cada uma das aplicações criadas em  [Suas integrações](/developers/panel/app). Você também poderá configurar uma URL de teste que, junto com suas credenciais de teste, permitirá testar o funcionamento correto das suas notificações antes de sair à produção.

Uma vez configuradas, as notificações Webhooks serão enviadas sempre que ocorrer um ou mais eventos cadastrados. Isso evita a necessidade de verificações constantes, prevenindo a sobrecarga do sistema e a perda de dados em situações críticas. 

Para configurar as notificações Webhooks de Order, siga as estapas descritas abaixo.

1. Acesse [Suas integrações](/developers/panel/app) e selecione a aplicação para a qual deseja ativar as notificações. Caso ainda não tenha criado uma aplicação, acesse a [documentação Painel do Desenvolvedor](/developers/pt/docs/your-integrations/dashboard) e siga as instruções.
2. No menu à esquerda, vá até **Webhooks > Configurar notificações** e configure as URLs que serão usadas para receber as notificações. Recomendamos utilizar uma URL diferente para o modo de teste e o modo produção:
    * **URL modo teste:** fornece uma URL que permite testar o correto funcionamento das notificações dessa aplicação durante a fase de teste ou desenvolvimento. O teste dessas notificações deverá ser realizado exclusivamente com as **credenciais de teste de usuários produtivos**.
    * **URL modo produção:** fornece uma URL para receber notificações com sua integração produtiva. Essas notificações deverão ser configuradas com **credenciais produtivas**.

![webhooks](/images/dashboard/webhooks-pt.png)

> NOTE
>
> Nota
> 
> Caso seja necessário identificar múltiplas contas, adicione o parâmetro `?cliente=(nomedovendedor)` ao final da URL indicada para identificar os vendedores.

3. Selecione o eventos **Order (Mercado Pago)** para receber as notificações em formato `json` através de um `HTTP POST` para a URL especificada anteriormente. Um evento pode ser qualquer atualização no objeto relatado, incluindo criação e atualização de orders e processamento de transações.

4. Por fim, clique e **Salvar** para gerar uma **assinatura secreta** exclusiva para a sua aplicação, permitindo validar a autenticidade das notificações recebidas e garantir que tenham sido enviadas pelo Mercado Pago. A assinatura gerada não tem prazo de validade e sua renovação periódica não é obrigatória, embora seja altamente recomendável. Para renová-la, clique no botão de **Redefinição** ao lado da assinatura.

## Validar origem da notificação

As notificações enviadas pelo Mercado Pago serão semelhantes ao exemplo abaixo para um alerta do tópico `payment`:

```json
{
 "id": 12345,
 "live_mode": true,
 "type": "payment",
 "date_created": "2015-03-25T10:04:58.396-04:00",
 "user_id": 44444,
 "api_version": "v1",
 "action": "payment.created",
 "data": {
     "id": "999999999"
 }
}
```

O Mercado Pago sempre incluirá a assinatura secreta nas notificações Webhooks recebidas na URL cadastrada. Isso permitirá validar a sua autenticidade, proporcionando maior segurança e prevenindo possíveis fraudes. 

Esta assinatura será enviada no _header_ `x-signature`, conforme o exemplo abaixo.

```x-signature
`ts=1704908010,v1=618c85345248dd820d5fd456117c2ab2ef8eda45a0282ff693eac24131a5e839`

```

Para configurar essa validação, é necessário extrair a chave contida no _header_ e compará-la com a chave fornecida para sua aplicação em Suas integrações. Para isso, siga as etapas abaixo. No final, disponibilizamos alguns SDKs com um exemplo de código completo para facilitar o processo:

1. Para extrair o _timestamp_ (`ts`) e a assinatura do _header_ `x-signature`, divida o conteúdo do _header_ pelo caractere `,`, o que resultará em uma lista de 2 elementos. O valor para o prefixo  `ts` é o _timestamp_ (em milissegundos) da notificação, e `v1` é a assinatura encriptada. Seguindo o exemplo apresentado acima, `ts=1704908010` e `v1=618c85345248dd820d5fd456117c2ab2ef8eda45a0282ff693eac24131a5e839`.
2. Utilizando o _template_ e as descrições abaixo, substitua os parâmetros pelos dados recebidos na sua notificação.

```template
id:[data.id_url];request-id:[x-request-id_header];ts:[ts_header];
```

 * Parâmetros com sufixo `_url` são provenientes de _query params_. Exemplo: `[data.id_url]`. Deve ser substituído pelo valor correspondente ao ID do evento (`data.id`). Esse `query param` poderá ser encontrado na notificação recebida.
 * `[ts_header]` representa o valor `ts` extraído do _header_ `x-signature`.
 * `[x-request-id_header]` deve ser substituído pelo valor recebido no _header_ `x-request-id`.

> WARNING
>
> Importante
> 
> Se algum dos valores mostrados no modelo acima não estiver presente na sua notificação, você deve removê-lo.

3. Em [Suas integrações](/developers/panel/app), selecione a aplicação integrada e navegue até a seção de Webhooks para visualizar a assinatura secreta gerada.
4. Crie a contra chave para validação. Para isso, calcule um HMAC (Código de Autenticação de Mensagem Baseado em Hash) utilizando a função de `hash SHA256` em base hexadecimal. Utilize a **assinatura secreta** como chave e o template preenchido com os respectivos valores como mensagem.

[[[
```php
$cyphedSignature = hash_hmac('sha256', $data, $key);
```
```node
const crypto = require('crypto');
const cyphedSignature = crypto
    .createHmac('sha256', secret)
    .update(signatureTemplateParsed)
    .digest('hex'); 
```
```java
String cyphedSignature = new HmacUtils("HmacSHA256", secret).hmacHex(signedTemplate);
```
```python
import hashlib, hmac, binascii

cyphedSignature = binascii.hexlify(hmac_sha256(secret.encode(), signedTemplate.encode()))
```
]]]

5. Por fim, compare a chave gerada com a chave extraída do _header_, assegurando que correspondam exatamente. Além disso, é possível usar o _timestamp_ extraído do _header_ para compará-lo com um _timestamp_ gerado no momento do recebimento da notificação. Isso permite estabelecer uma margem de tolerância para atrasos no recebimento da mensagem.

Veja exemplos de códigos completos abaixo:

[[[
```php
<?php
// Obtain the x-signature value from the header
$xSignature = $_SERVER['HTTP_X_SIGNATURE'];
$xRequestId = $_SERVER['HTTP_X_REQUEST_ID'];

// Obtain Query params related to the request URL
$queryParams = $_GET;

// Extract the "data.id" from the query params
$dataID = isset($queryParams['data.id']) ? $queryParams['data.id'] : '';

// Separating the x-signature into parts
$parts = explode(',', $xSignature);

// Initializing variables to store ts and hash
$ts = null;
$hash = null;

// Iterate over the values to obtain ts and v1
foreach ($parts as $part) {
    // Split each part into key and value
    $keyValue = explode('=', $part, 2);
    if (count($keyValue) == 2) {
        $key = trim($keyValue[0]);
        $value = trim($keyValue[1]);
        if ($key === "ts") {
            $ts = $value;
        } elseif ($key === "v1") {
            $hash = $value;
        }
    }
}

// Obtain the secret key for the user/application from Mercadopago developers site
$secret = "your_secret_key_here";

// Generate the manifest string
$manifest = "id:$dataID;request-id:$xRequestId;ts:$ts;";

// Create an HMAC signature defining the hash type and the key as a byte array
$sha = hash_hmac('sha256', $manifest, $secret);
if ($sha === $hash) {
    // HMAC verification passed
    echo "HMAC verification passed";
} else {
    // HMAC verification failed
    echo "HMAC verification failed";
}
?>
```
```javascript
// Obtain the x-signature value from the header
const xSignature = headers['x-signature']; // Assuming headers is an object containing request headers
const xRequestId = headers['x-request-id']; // Assuming headers is an object containing request headers

// Obtain Query params related to the request URL
const urlParams = new URLSearchParams(window.location.search);
const dataID = urlParams.get('data.id');

// Separating the x-signature into parts
const parts = xSignature.split(',');

// Initializing variables to store ts and hash
let ts;
let hash;

// Iterate over the values to obtain ts and v1
parts.forEach(part => {
    // Split each part into key and value
    const [key, value] = part.split('=');
    if (key && value) {
        const trimmedKey = key.trim();
        const trimmedValue = value.trim();
        if (trimmedKey === 'ts') {
            ts = trimmedValue;
        } else if (trimmedKey === 'v1') {
            hash = trimmedValue;
        }
    }
});

// Obtain the secret key for the user/application from Mercadopago developers site
const secret = 'your_secret_key_here';

// Generate the manifest string
const manifest = `id:${dataID};request-id:${xRequestId};ts:${ts};`;

// Create an HMAC signature
const hmac = crypto.createHmac('sha256', secret);
hmac.update(manifest);

// Obtain the hash result as a hexadecimal string
const sha = hmac.digest('hex');

if (sha === hash) {
    // HMAC verification passed
    console.log("HMAC verification passed");
} else {
    // HMAC verification failed
    console.log("HMAC verification failed");
}
```
```python
import hashlib
import hmac
import urllib.parse

# Obtain the x-signature value from the header
xSignature = request.headers.get("x-signature")
xRequestId = request.headers.get("x-request-id")

# Obtain Query params related to the request URL
queryParams = urllib.parse.parse_qs(request.url.query)

# Extract the "data.id" from the query params
dataID = queryParams.get("data.id", [""])[0]

# Separating the x-signature into parts
parts = xSignature.split(",")

# Initializing variables to store ts and hash
ts = None
hash = None

# Iterate over the values to obtain ts and v1
for part in parts:
    # Split each part into key and value
    keyValue = part.split("=", 1)
    if len(keyValue) == 2:
        key = keyValue[0].strip()
        value = keyValue[1].strip()
        if key == "ts":
            ts = value
        elif key == "v1":
            hash = value

# Obtain the secret key for the user/application from Mercadopago developers site
secret = "your_secret_key_here"

# Generate the manifest string
manifest = f"id:{dataID};request-id:{xRequestId};ts:{ts};"

# Create an HMAC signature defining the hash type and the key as a byte array
hmac_obj = hmac.new(secret.encode(), msg=manifest.encode(), digestmod=hashlib.sha256)

# Obtain the hash result as a hexadecimal string
sha = hmac_obj.hexdigest()
if sha == hash:
    # HMAC verification passed
    print("HMAC verification passed")
else:
    # HMAC verification failed
    print("HMAC verification failed")
```
```go
import (
	"crypto/hmac"
	"crypto/sha256"
	"encoding/hex"
	"fmt"
	"net/http"
	"strings"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		// Obtain the x-signature value from the header
		xSignature := r.Header.Get("x-signature")
		xRequestId := r.Header.Get("x-request-id")

		// Obtain Query params related to the request URL
		queryParams := r.URL.Query()

		// Extract the "data.id" from the query params
		dataID := queryParams.Get("data.id")

		// Separating the x-signature into parts
		parts := strings.Split(xSignature, ",")

		// Initializing variables to store ts and hash
		var ts, hash string

		// Iterate over the values to obtain ts and v1
		for _, part := range parts {
			// Split each part into key and value
			keyValue := strings.SplitN(part, "=", 2)
			if len(keyValue) == 2 {
				key := strings.TrimSpace(keyValue[0])
				value := strings.TrimSpace(keyValue[1])
				if key == "ts" {
					ts = value
				} else if key == "v1" {
					hash = value
				}
			}
		}

		// Get secret key/token for specific user/application from Mercadopago developers site
		secret := "your_secret_key_here"

		// Generate the manifest string
		manifest := fmt.Sprintf("id:%v;request-id:%v;ts:%v;", dataID, xRequestId, ts)

		// Create an HMAC signature defining the hash type and the key as a byte array
		hmac := hmac.New(sha256.New, []byte(secret))
		hmac.Write([]byte(manifest))

		// Obtain the hash result as a hexadecimal string
		sha := hex.EncodeToString(hmac.Sum(nil))

if sha == hash {
    // HMAC verification passed
    fmt.Println("HMAC verification passed")
} else {
    // HMAC verification failed
    fmt.Println("HMAC verification failed")
}

	})
}
```
]]]

## Simular o recebimento da notificação

Para garantir que as notificações estejam configuradas corretamente, é necessário simular o recebimento delas. Para isso, siga os seguintes passos:

1. Após configurar as URLs e os eventos desejados, clique em **Salvar** para salvar a configuração.
2. Após isso, clique em **Simular** para testar se a URL indicada está recebendo as notificações corretamente.
3. Na tela de simulação, selecione a URL a ser testada, podendo ser uma URL de **teste** ou de **produção**.
4. Em seguida, selecione o evento **tOrder (Mercado Pago)** e insira a **identificação** que será enviada no corpo da notificação.
5. Por fim, clique em **Enviar teste** para verificar a solicitação, a resposta dada pelo servidor e a descrição do evento.

## Ações necessárias após receber uma notificação

Ao receber uma notificação em sua plataforma, o Mercado Pago aguarda uma resposta para validar se você a recebeu corretamente. Para isso, é necessário retornar um status `HTTP STATUS 200 (OK)` ou `201 (CREATED)`. 

O **tempo de espera** para a confirmação da recepção das notificações será de **22 segundos**. Se essa confirmação não for enviada, o sistema entenderá que a notificação não foi recebida e realizará **novas tentativas de envio a cada 15 minutos**, até receber uma resposta. Após a terceira tentativa, o prazo será prorrogado, mas os envios continuarão acontecendo.

Após responder à notificação e confirmar seu recebimento, é possível obter as informações completas do recurso notificado enviando um **GET** ao endpoint [/v1/orders/{id}](/developers/pt/reference/order/online-payments/get-order/get).

Com essas informações, você poderá realizar as atualizações necessárias na sua plataforma como, por exemplo, atualizar um pagamento aprovado.

> NOTE
>
> Nota
>
> Voçê pode visualizar os eventos disparados sobre uma determinada integração, verificar o status e obter informações detalhadas desses eventos através do Painel de notificações. Consulte mais informações acessando a [documentação](/developers/pt/docs/your-integrations/notifications/webhooks#paineldenotificaes).  