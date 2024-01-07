import React, { useEffect } from "react";

declare global {
  interface Window {
    RAYCHAT_TOKEN: string;
    SEO_FRIENDLY: boolean;
    FAST_LOAD: boolean;
  }
}

interface RaychatProps {
  token: string;
  type?: string;
}

const RaychatWidget: React.FC<RaychatProps> = ({ token, type = "normal" }) => {
  useEffect(() => {
    if (!token || token.length === 0) return undefined;

    if (typeof window !== "undefined") {
      window.RAYCHAT_TOKEN = token;

      if (type === "SEO_FRIENDLY") {
        window.SEO_FRIENDLY = true;
      } else if (type === "FAST_LOAD") {
        window.FAST_LOAD = true;
      }
    }

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://widget-react.raychat.io/install/widget.js";

    document.head.appendChild(script);

    // Cleanup: remove the script element when the component is unmounted
    return () => {
      document.head.removeChild(script);
    };
  }, [token, type]);

  return null; // Raychat doesn't render any additional content
};

export default RaychatWidget;
