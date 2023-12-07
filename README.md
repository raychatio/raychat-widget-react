# RayChat widget installer for ReactJS/NextJS

![raychat][logo]

#### The new online chat experience begins here!

Get closer to your leads and customers with a website chat widget. Adding a chat widget to your website will make your customer service experience even more exceptional.

- [Install](#install)
- [Use in ReactJS](#use-in-reactjs)
- [Use in NextJS](#use-in-nextjs-jsts)
- [Props](#props)
- [License](#license)
- [Author](#author)

<a name="install"></a>

## Install

```bash
npm i @raychat/widget-react
```

<a name="use-react"></a>

## Use in ReactJS

> Get `token` from [raychat.io][raychat-landing]

Wrote to App.js:

```js
import Raychat from "@mahdivajdi/raychat-react";

function App() {
  return (
    <div className="App">
      <!-- other components -->

      <Raychat token="6d5b4ba5-xxxx-xxxx-xxxx-48498f3fc2a2" />
    </div>
  );
}
```

<a name="use-next"></a>

## Use in NextJS (js/ts)

> Get `token` from [raychat.io][raychat-landing]

Wrote to \_App.js/\_App.ts

```js
import { raychat } from "@mahdivajdi/raychat-react";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const token = "6d5b4ba5-xxxx-xxxx-xxxx-48498f3fc2a2";
    raychat(token);
  }, []);

  // rest of the code
}
```

<a name="props"></a>

## Props

| props | defaultValue | description                                              |
| ----- | ------------ | -------------------------------------------------------- |
| token | null         | Get `token` from [raychat.io](https://raychat.io/signup) |

<a name="license"></a>

### License

MIT

<a name="author"></a>

### Author

Mahdi Vajdi<br>
Github: [@mahdi-vajdi][author-github]<br>
Email: [mahdivajdii@gmail.com][author-email]<br>

[logo]: https://raychat.io/_next/static/media/raychat-logo-english.486d7b96.svg
[raychat-landing]: https://raychat.io/signup
[author-github]: https://github.com/mahdi-vajdi
[author-email]: mailto:mahdivajdii@gmail.com
