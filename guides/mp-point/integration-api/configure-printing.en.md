# Configure impressions

The Printings API offers a practical solution to integrate your systems and manage printings on configured Point terminals. This resource allows the printing of images and customized printings directly from a point of sale (POS), using the integrated printer of Smart devices. This simplifies the billing process and quickly responds to the needs of your business.

## Custom tags

Custom tags allow you to adjust the presentation of printed documents. This resource offers flexibility and control over the text format, enabling the creation of efficient and visually attractive printings. Below, check the different available tags, their functions, and usage examples:

> Custom tags have a minimum limit of 100 characters and a maximum of 4096 characters, including the tags themselves.

| Tag        | Function                                    | Example                          |
|------------|---------------------------------------------|----------------------------------|
| `{b}`      | Bold                                        | `{b}Bold text{/b}`               |
| `{w}`      | Large letter                                | `{w}Large letter text{/w}`       |
| `{s}`      | Small letter                                | `{s}Small letter text{/s}`       |
| `{br}`     | Line break                                  | `{br}`                           |
| `{left}`   | Align left                                  | `{left}Left-aligned text{/left}` |
| `{center}` | Center text                                 | `{center}Centered text{/center}` |
| `{qr}`     | Print a QR that represents the sent text    | `{qr}Text{/qr}`                  |
| `{pdf417}` | Print the mark of a TED                     | `{pdf417}Text{/pdf417}`          |

## Print configuration

Use the endpoints below to manage the print queue, taking into account the specifications of each endpoint. Ensure that the terminal is configured in POS (Point of Sale) mode.

> RED_MESSAGE
>
> Important
>
> For image printing, keep in mind that the accepted formats are PNG or JPEG, with Base64 encoding and a maximum size of 1MB. Images that exceed this limit will be automatically resized to fit the width of the paper roll.

   - [Create terminal action](/developers/en/reference/mercado_pago_point/impressions/post): Allows the creation of a new printing action for Mercado Pago Point, either images or customized printings. For images, the Base64 format is supported. In case of success, the response will return a status code 201.
   - [Get action by ID](/developers/en/reference/mercado_pago_point/impressions/get): Allows you to consult all the information of an action created for a Point terminal using the ID obtained in the response to its creation. In case of success, the request will return a response with status 200.
   - [Cancel action by ID](/developers/en/reference/mercado_pago_point/impressions_cancel/post): Allows you to cancel an action created for Mercado Pago Point and its transactions using the reference ID obtained in the response to its creation. Only an action in "created" status can be canceled. In case of success, the request will return a response with status 200.

Wait until the attempt reaches the terminal and the printing is processed. If the printing does not arrive automatically, press the **Update** button to search for the attempt manually.