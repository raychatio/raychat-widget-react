# RayChat Package For React

![raychat](https://raychat.io/_next/static/media/raychat-logo-english.486d7b96.svg)

[![NPM version][npm-version-image]][npm-url] [![NPM downloads][npm-downloads-size-image]][npm-url] [![NPM downloads][npm-downloads-image]][downloads-url] [![MIT License][license-image]][license-url]

#### The new online chat experience begins here!

Get closer to your leads and customers with a website chat widget. Adding a chat widget to your website will make your customer service experience even more exceptional.

- [Installation](#installation)
- [Usage](#USE)
- [Props](#Props)
- [License](#license)
- [Author](#author)

### Installation

> Get `token` from [raychat.io](https://raychat.io/signup)

```bash
npm i @raychat/widget-reactjs
```

## USE Raychat Package

Wrote to App.js

```js
import React from "react";
import { RayChat } from "@raychat/widget-reactjs";

function App() {
  const token = "6d5b4ba5-xxxx-xxxx-xxxx-48498f3fc2a2";

  useEffect((token) => {
    raychat();
  }, []);
}
```

## Props

| props | defaultValue | description                                              |
| ----- | ------------ | -------------------------------------------------------- |
| token | null         | Get `token` from [raychat.io](https://raychat.io/signup) |

### License

MIT

### Author

> Mahdi Vajdi <mahdivajdii@gmail.com>

[license-image]: http://img.shields.io/npm/l/raychat-react.svg?style=flat
[license-url]: LICENSE
[npm-url]: https://npmjs.org/package/raychat-react
[npm-version-image]: http://img.shields.io/npm/v/raychat-react.svg?style=flat
[npm-downloads-image]: http://img.shields.io/npm/dm/raychat-react.svg?style=flat
[npm-downloads-size-image]: https://img.shields.io/bundlephobia/minzip/raychat-react.svg?style=flat
[downloads-url]: https://npmcharts.com/compare/raychat-react?minimal=true
