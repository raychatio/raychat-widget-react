# RayChat widget installer for ReactJS

![raychat](https://raychat.io/_next/static/media/raychat-logo-english.486d7b96.svg)

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
import { useEffect } from "react";
import { raychat } from "@mahdivajdi/raychat-react";

function App() {
  useEffect(() => {
    const token = "6d5b4ba5-xxxx-xxxx-xxxx-48498f3fc2a2";
    raychat(token);
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

Mahdi Vajdi<br>
Github: [@mahdi-vajdi][author-github]<br>
Email: <mahdivajdii@gmail.com><br>

[author-github]: https://github.com/mahdi-vajdi
