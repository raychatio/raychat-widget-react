import{useEffect as t}from"react";const e=({token:e,type:o="normal"})=>(t(()=>{if(void 0!==typeof window&&(window.RAYCHAT_TOKEN=e),"normal"===o){const t=document.createElement("script");return t.type="text/javascript",t.async=!0,t.src="https://widget-react.raychat.io/install/widget.js",document.head.appendChild(t),()=>{document.head.removeChild(t)}}},[e,o]),null);export{e as default};
//# sourceMappingURL=index.modern.js.map
