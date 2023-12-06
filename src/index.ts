declare global {
  interface Window {
    RAYCHAT_TOKEN: string;
  }
}

/**
 * This function installs the raychat widget
 * @param {string} token The first value. Get the token from https://raychat.io Function will return if token is null
 */
export function raychat(token: string): void {
  if (!token) return;

  window.RAYCHAT_TOKEN = token;

  const d = document;
  const s = d.createElement("script");
  s.src = "https://widget-react.raychat.io/install/widget.js";
  s.async = true;
  d.getElementsByTagName("head")[0].appendChild(s);
}
