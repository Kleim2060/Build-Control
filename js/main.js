!function(){var e={54:function(e){e.exports=(e,t)=>e+t}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var c=t[r]={exports:{}};return e[r](c,c.exports,o),c.exports}!function(){const e=o(54);console.log(e(2,10)),console.log(e(12,5));const t=document.querySelector(".burger");if(t){const e=document.querySelector(".header__nav"),o=document.querySelector("body");t.addEventListener("click",(function(r){t.classList.toggle("_active"),e.classList.toggle("_active"),o.classList.toggle("_active")}))}const r=document.querySelectorAll('.header__nav--link[href*="#"]');for(let e of r)e.addEventListener("click",(function(t){t.preventDefault();const o=e.getAttribute("href");document.querySelector(""+o).scrollIntoView({behavior:"smooth",block:"center"})}));const n=document.querySelectorAll('.footer__nav--link[href*="#"]');for(let e of n)e.addEventListener("click",(function(t){t.preventDefault();const o=e.getAttribute("href");document.querySelector(""+o).scrollIntoView({behavior:"smooth",block:"center"})}))}()}();