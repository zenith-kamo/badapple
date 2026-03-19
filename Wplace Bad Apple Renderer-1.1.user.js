// ==UserScript==
// @name         Wplace Bad Apple Renderer
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  wplcaeのオーバーレイにBad Appleを描画する
// @author       zenith
// @match        https://wplace.live
// @grant        GM_xmlhttpRequest
// @connect      github.com
// @connect      githubusercontent.com
// ==/UserScript==

!function(){"use strict";const t=50,e=50,a=10;let n,o,r,s,c=[];function i(a){const n=new Uint8Array(t*e);let o=0;for(let t of a)for(let e=7;e>=0&&!(o>=n.length);e--)n[o++]=t>>e&1;return n}function l(){if(r&&!r.paused){const t=r.currentTime,e=Math.floor(t*a);e<c.length&&function(t){if(o){for(let e=0;e<t.length;e++){const a=t[e]?255:0,n=4*e;s.data[n]=a,s.data[n+1]=a,s.data[n+2]=a,s.data[n+3]=255}o.putImageData(s,0,0)}}(c[e])}requestAnimationFrame(l)}function d(t){return new Promise((e=>{const a=document.querySelector(t);if(a)return e(a);const n=new MutationObserver((()=>{const a=document.querySelector(t);a&&(e(a),n.disconnect())}));n.observe(document.body,{childList:!0,subtree:!0})}))}!async function(){try{n=await d('canvas[class*="pixelated"][class*="svelte-1mwy93i"]');const u=await d('div[class*="flex-col"][class*="px-3.5"]');n.width=t,n.height=e,o=n.getContext("2d",{alpha:!1}),s=o.createImageData(t,e),r=document.createElement("audio"),r.src="https://github.com/zenith-kamo/badapple/raw/refs/heads/main/bad_apple.mp3",r.controls=!0,r.style.width="100%",u.appendChild(r);const m=await(a="https://github.com/zenith-kamo/badapple/raw/refs/heads/main/frames.json",new Promise(((t,e)=>{GM_xmlhttpRequest({method:"GET",url:a,onload:function(a){200===a.status?t(JSON.parse(a.responseText)):e("Failed to load data")},onerror:function(t){e(t)}})})));c=m.map(i),requestAnimationFrame(l)}catch(t){console.error("Bad Apple Script Error:",t)}var a}()}();