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
npm i raychat-widget-react
```

## Use in ReactJS

> Get `token` from [raychat.io][raychat-landing]

Wrote to index.js:

```js
// Other imports...
import RaychatWidget from "raychat-widget-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <RaychatWidget token="c030a005-xxxx-xxxx-xxxx-19ead862dc7f" type="SEO_FRIENDLY"/>
  </React.StrictMode>
);
```

## Use in NextJS (js/ts)

> Get `token` from [raychat.io][raychat-landing]

Wrote to \_app.js/\_app.tsx

```js
import RaychatWidget from "@raychat/widget-react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />;
      <RaychatWidget token="6d5b4ba5-xxxx-xxxx-xxxx-48498f3fc2a2" type="SEO_FRIENDLY" />
    </div>
  );
}
```

## Props

| Props | Required | Default Value | Description                                            |
| ----- | -------- | ------------- | ------------------------------------------------------ |
| token | true     | undefined     | Get `token` from [raychat.io][raychat-get-token]       |
| type  | false    | NORMAL        | Widget load types: [ NORMAL, SEO_FRIENDLY, FAST_LOAD ] |

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
