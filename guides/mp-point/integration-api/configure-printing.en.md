# Configure printings

The Printing API offers a practical solution to integrate your systems and manage printings on configured Point terminals. This resource allows the printing of images and custom printings directly from a Point of Sale (POS), using the integrated printer of Smart devices.

Use the endpoints below to manage the printing queue, taking into account the specifications of each endpoint. Ensure that the terminal is correctly configured in **[POS mode (Point of Sale)](/developers/es/docs/mp-point/integration-configuration/integrate-with-pdv/configure-devices#bookmark_activar_el_modo_pdv_en_tu_dispositivo_point)**.

> RED_MESSAGE
>
> For image printing, keep in mind that the accepted formats are PNG or JPEG, with Base64 encoding and a maximum size of 1MB. Images exceeding the dimensions of the paper roll will be automatically adjusted.

   - [Create terminal action](/developers/pt/reference/mercado_pago_point/impressions/post): Allows the creation of a new printing action for Mercado Pago Point, either images or [custom printings](/developers/en/docs/mp-point/integration-configuration/configure-printing#bookmark_tags_personalizadas). If successful, the response will return a 201 status code.
   - [Get action by ID](/developers/en/reference/mercado_pago_point/impressions/get): Allows retrieving all information of an action created for a Point terminal using the ID obtained in the response upon its creation. Querying the printing action provides a practical tool to verify the action sent by the API, especially in case of printing failures on the terminal.
   - [Cancel action by ID](/developers/en/reference/mercado_pago_point/impressions_cancel/post): Allows canceling an action created for Mercado Pago Point and its transactions using the reference ID obtained in the response upon its creation. Only an action with a `created` status can be canceled. If successful, the request will return a 200 status response.

Wait until the attempt reaches the terminal and the printing is processed. If the printing doesn't arrive automatically, press the **Refresh** button to search for the attempt manually.

### Custom tags

Custom tags allow you to adjust the format and appearance of printed documents, ensuring greater control over the style and structure of the text. They must be used when sending a **POST** to the [Create terminal action](/developers/en/reference/mercado_pago_point/impressions/post) endpoint, through the `subtype` attribute, which must be set as `custom`. When `subtype` is defined as `custom`, the `content` attribute must include the formatted string using the supported tags.

Below, check out the different available tags, their functions, and examples of usage:

> NOTE
>
> Custom tags have a minimum limit of 100 characters and a maximum of 4096 characters, including the tags themselves.

| Tags   | Function                                     | Example                          |
|------------|---------------------------------------------|----------------------------------|
| `{b}`      | Bold text                                   | `{b}Bold text{/b}`               |
| `{w}`      | Large text                                  | `{w}Large text{/w}`              |
| `{s}`      | Small text                                  | `{s}Small text{/s}`              |
| `{br}`     | Line break                                  | `{br}`                           |
| `{left}`   | Align to the left                           | `{left}Left-aligned text{/left}` |
| `{center}` | Center text                                 | `{center}Centered text{/center}` |
| `{qr}`     | Print a QR representing the sent text       | `{qr}Text{/qr}`                  |
| `{pdf417}` | Print the smudge of a TED                   | `{pdf417}Text{/pdf417}`          |

**Example:**

```
{
  "type": "print",
  "config": {
    "point": {
      "terminal_id": "{{device.id}}",
      "subtype": "custom"
    }
  },
  "external_reference": "8a42e06e45d5",
  "content": "{br}--------------------------------{br}{center}{w} DELIVERY RECEIPT{/w}{br}{br}{s} Order No:12345{/s}{br}{s} Store: Test Store{/s}{br}--------------------------------{br}{s}***DISPATCHED ITEM(S)***{/s}{br}{s}SKU / ITEM                       QUANTITY   {/s}{br}{s}----------------------------------------------{/s}{br}{s}4065432630504 / FOOTBALL WUCL LGE EHV240424   1{br}{s}DELIVER ON: 06/06/2024{/s}{br}{s}ADDRESS: METROPOLITANA  {/s}{br}{s}RECEIVER: John{/s}{br}{s}delivery to client in the morning{/s}{br}--------------------------------{br}"
}
```