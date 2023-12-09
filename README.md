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

## Install

```bash
npm i @raychat/widget-react
```

## Use in ReactJS

> Get `token` from [raychat.io][raychat-landing]

Wrote to App.js:

```js
import Raychat from "@raychat/widget-react";

function App() {
  return (
    <div className="App">
      <!-- other components -->

      <Raychat token="6d5b4ba5-xxxx-xxxx-xxxx-48498f3fc2a2" type="normal" />
    </div>
  );
}
```

## Use in NextJS (js/ts)

> Get `token` from [raychat.io][raychat-landing]

Wrote to \_app.js/\_app.tsx

```js
import Raychat from "@raychat/widget-react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />;
      <Raychat token="6d5b4ba5-xxxx-xxxx-xxxx-48498f3fc2a2" type="normal" />
    </div>
  );
}
```

## Props

| props | required | defaultValue | description                                           |
| ----- | -------- | ------------ | ----------------------------------------------------- |
| token | true     | undefined    | Get `token` from [raychat.io][raychat-get-token]      |
| type  | false    | normal       | The type of script: [normal, fast-laod, seo-friendly] |

### License

MIT

### Author

Mahdi Vajdi<br>
Github: [@mahdi-vajdi][author-github]<br>
Email: [mahdivajdii@gmail.com][author-email]<br>

[logo]: https://raychat.io/_next/static/media/raychat-logo-english.486d7b96.svg
[raychat-landing]: https://raychat.io/signup
[raychat-get-token]: https://raychat.io/dashboard/widget-installation
[author-github]: https://github.com/mahdi-vajdi
[author-email]: mailto:mahdivajdii@gmail.com
