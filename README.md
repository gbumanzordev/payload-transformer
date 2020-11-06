# Payload Transformer

This package aims to help you keeping consistency when working with APIs that do not provide you with the type of keys you want for your models.

You can work with `camelCase`, `snake_case` and even `kebab-case`, the package's purpose is to help you getting the transformed payload so you can use it in your applications.

### Usage:

In order to use this library all you need to do is import the function:

```javascript
import { convertPayloadKeys } from 'payload-transformer';
```

The funcion itself accepts two parameters, `payload` and `conversionType`.

The payload can be pretty much anything, however, the function will validate that it is an object in order to convert its keys.
The second parameter, so far accepts only three values: `'camelCase'`, `'snakeCase'` and `'kebabCase'` and its defaultt vaule is `'camelCase'`.

If you submit another value for the second parameter most likely you will get an error, however, if you're working with Typescript it is already validated so you will get an error right away.

**_How it works_**
You can submit a request of transformation:

```javascript
const snakeCasePayload = {
  key_one: 'valueOne',
  key_two: 'valueTwo',
  full_name: 'John Doe',
};
```

and after you call the function `convertPayloadKeys(snakeCasePayload, 'camelCase')` you will get this as a result:

```json
{
  "keyOne": "valueOne",
  "keyTwo": "valueTwo",
  "fullName": "John Doe"
}
```

If you have any ideas or would like to submit any new features or new key types to be supported you can reach out.

Regards.
