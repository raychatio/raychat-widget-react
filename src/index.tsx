import React, { useEffect } from "react";

declare global {
  interface Window {
    RAYCHAT_TOKEN: string;
  }
}

interface RaychatProps {
  token: string;
  type?: "normal";
}

const Raychat: React.FC<RaychatProps> = ({ token, type }) => {
  useEffect(() => {
    window.RAYCHAT_TOKEN = token;

    if (type === "normal") {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src = "https://widget-react.raychat.io/install/widget.js";

      document.head.appendChild(script);

      // Cleanup: remove the script element when the component is unmounted
      return () => {
        document.head.removeChild(script);
      };
    }

    // Explicitly return undefined when type is not "normal"
    return undefined;
  }, [token, type]);

  return null; // Raychat doesn't render any additional content
};

export default Raychat;
