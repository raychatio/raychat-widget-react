export function Raychat(token = null) {
  window.RAYCHAT_TOKEN = token;

  const d = document;
  var s = d.createElement("script");
  s.src = "https://widget-react.raychat.io/install/widget.js";
  s.async = 1;
  d.getElementsByTagName("head")[0].appendChild(s);
}
