if("__TAURI__"in window){var __TAURI_DIALOG__=function(n){"use strict";return n.ask=async function(n,o){var t,i,l,e,u;const _="string"==typeof o?{title:o}:o;return window.__TAURI_INVOKE__("plugin:dialog|ask",{message:n.toString(),title:null===(t=null==_?void 0:_.title)||void 0===t?void 0:t.toString(),type_:null==_?void 0:_.type,okButtonLabel:null!==(l=null===(i=null==_?void 0:_.okLabel)||void 0===i?void 0:i.toString())&&void 0!==l?l:"Yes",cancelButtonLabel:null!==(u=null===(e=null==_?void 0:_.cancelLabel)||void 0===e?void 0:e.toString())&&void 0!==u?u:"No"})},n.confirm=async function(n,o){var t,i,l,e,u;const _="string"==typeof o?{title:o}:o;return window.__TAURI_INVOKE__("plugin:dialog|confirm",{message:n.toString(),title:null===(t=null==_?void 0:_.title)||void 0===t?void 0:t.toString(),type_:null==_?void 0:_.type,okButtonLabel:null!==(l=null===(i=null==_?void 0:_.okLabel)||void 0===i?void 0:i.toString())&&void 0!==l?l:"Ok",cancelButtonLabel:null!==(u=null===(e=null==_?void 0:_.cancelLabel)||void 0===e?void 0:e.toString())&&void 0!==u?u:"Cancel"})},n.message=async function(n,o){var t,i;const l="string"==typeof o?{title:o}:o;return window.__TAURI_INVOKE__("plugin:dialog|message",{message:n.toString(),title:null===(t=null==l?void 0:l.title)||void 0===t?void 0:t.toString(),type_:null==l?void 0:l.type,okButtonLabel:null===(i=null==l?void 0:l.okLabel)||void 0===i?void 0:i.toString()})},n.open=async function(n={}){return"object"==typeof n&&Object.freeze(n),window.__TAURI_INVOKE__("plugin:dialog|open",{options:n})},n.save=async function(n={}){return"object"==typeof n&&Object.freeze(n),window.__TAURI_INVOKE__("plugin:dialog|save",{options:n})},n}({});Object.defineProperty(window.__TAURI__,"dialog",{value:__TAURI_DIALOG__})}