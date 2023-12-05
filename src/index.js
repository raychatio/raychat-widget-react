/**
 * This function installs the raychat widget
 * @param {string} token The first value. Get the token from https://raychat.io Function will return if token is null
 */
export function raychat(token = null) {
  if (!token) return;

  window.RAYCHAT_TOKEN = token;

  const d = document;
  var s = d.createElement("script");
  s.src = "https://widget-react.raychat.io/install/widget.js";
  s.async = 1;
  d.getElementsByTagName("head")[0].appendChild(s);
}
