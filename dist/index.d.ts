import React from "react";
declare global {
    interface Window {
        RAYCHAT_TOKEN: string;
    }
}
interface RaychatProps {
    token: string;
    type?: string;
}
declare const Raychat: React.FC<RaychatProps>;
export default Raychat;
