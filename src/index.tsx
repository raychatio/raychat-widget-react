import React, { useEffect } from "react";

declare global {
  interface Window {
    RAYCHAT_TOKEN: string;
    LOAD_TYPE: string;
  }
}

interface RaychatProps {
  token: string;
  type?: string;
}

const RaychatWidget: React.FC<RaychatProps> = ({ token, type = "NORMAL" }) => {
  useEffect(() => {
    // Validate token
    if (!token || token.trim() === "") {
      console.error('Token for raychat widget is not provided.');
      return undefined;
    }

    // Validate type
    const validTypes = ['NORMAL', 'SEO_FRIENDLY', 'FAST_LOAD'];
    if (type && !validTypes.includes(type.toUpperCase())) {
      console.warn(
        `Provided type for raychat widget: "${type}" is not valid. using type "NORMAL" instead.`
      );
    }

    if (typeof window !== "undefined") {
      window.RAYCHAT_TOKEN = token;

      if (type.toUpperCase() === "SEO_FRIENDLY") {
        window.LOAD_TYPE = "SEO_FRIENDLY";
      } else if (type.toUpperCase() === "FAST_LOAD") {
        window.LOAD_TYPE = "FAST_LOAD";
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
