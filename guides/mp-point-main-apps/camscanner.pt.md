# Iniciar Câmera Scanner

Usando nossos SDKs, é possível iniciar a câmera scanner dos dispositivos Point Smart para ler códigos QR e de barras.

Para fazer isso, a **opção recomendada** é implementar o [método Callback](/developers/pt/docs/main-apps/camscanner/callback), que permite uma integração simples ao centralizar o lançamento em um único método.

> WARNING
>
> Importante
>
> Se você possui uma integração antiga do Main Apps, é provável que tenha implementado um **método legado para iniciar a câmera scanner**, baseado em uma implementação adicional (`onActivityResult`). Embora este método continue em funcionamento, recomendamos atualizar sua integração para o método Callback para ter uma implementação simplificada. Se você precisar de suporte para sua implementação antiga, consulte a [documentação](/developers/pt/docs/main-apps/camscanner/legacy).