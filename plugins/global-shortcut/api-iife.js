if("__TAURI__"in window){var __TAURI_PLUGIN_GLOBALSHORTCUT__=function(t){"use strict";function e(t,e,r,s){if("a"===r&&!s)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!s:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?s:"a"===r?s.call(t):s?s.value:e.get(t)}function r(t,e,r,s,n){if("function"==typeof e?t!==e||!n:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return e.set(t,r),r}var s,n,i;"function"==typeof SuppressedError&&SuppressedError;class o{constructor(){this.__TAURI_CHANNEL_MARKER__=!0,s.set(this,(()=>{})),n.set(this,0),i.set(this,{}),this.id=function(t,e=!1){return window.__TAURI_INTERNALS__.transformCallback(t,e)}((({message:t,id:o})=>{if(o===e(this,n,"f")){r(this,n,o+1),e(this,s,"f").call(this,t);const a=Object.keys(e(this,i,"f"));if(a.length>0){let t=o+1;for(const r of a.sort()){if(parseInt(r)!==t)break;{const n=e(this,i,"f")[r];delete e(this,i,"f")[r],e(this,s,"f").call(this,n),t+=1}}r(this,n,t)}}else e(this,i,"f")[o.toString()]=t}))}set onmessage(t){r(this,s,t)}get onmessage(){return e(this,s,"f")}toJSON(){return`__CHANNEL__:${this.id}`}}async function a(t,e={},r){return window.__TAURI_INTERNALS__.invoke(t,e,r)}return s=new WeakMap,n=new WeakMap,i=new WeakMap,t.isRegistered=async function(t){return await a("plugin:global-shortcut|is_registered",{shortcut:t})},t.register=async function(t,e){const r=new o;r.onmessage=e,await a("plugin:global-shortcut|register",{shortcut:t,handler:r})},t.registerAll=async function(t,e){const r=new o;r.onmessage=e,await a("plugin:global-shortcut|register_all",{shortcuts:t,handler:r})},t.unregister=async function(t){await a("plugin:global-shortcut|unregister",{shortcut:t})},t.unregisterAll=async function(){await a("plugin:global-shortcut|unregister_all")},t}({});Object.defineProperty(window.__TAURI__,"globalShortcut",{value:__TAURI_PLUGIN_GLOBALSHORTCUT__})}