(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();console.log(127);(()=>{const o={openModalBtn:document.querySelector("[data-follow-open]"),closeModalBtn:document.querySelector("[data-follow-close]"),modal:document.querySelector("[data-follow]")};o.openModalBtn.addEventListener("click",r),o.closeModalBtn.addEventListener("click",r);function r(){o.modal.classList.toggle("is-hidden")}})();$(".responsive").slick({prevArrow:'<button type="button" class="my-slick-prev">&xlarr;</button>',nextArrow:'<button type="button" class="my-slick-next">&xrarr;</button>',infinite:!0,speed:300,slidesToScroll:1,adaptiveHeight:!0,slidesToShow:3,variableWidth:!0,responsive:[{breakpoint:1200,settings:{slidesToShow:2}},{breakpoint:768,settings:{slidesToShow:1}}]});(function(o){typeof o.matches!="function"&&(o.matches=o.msMatchesSelector||o.mozMatchesSelector||o.webkitMatchesSelector||function(r){for(var n=this,l=(n.document||n.ownerDocument).querySelectorAll(r),e=0;l[e]&&l[e]!==n;)++e;return Boolean(l[e])}),typeof o.closest!="function"&&(o.closest=function(r){for(var n=this;n&&n.nodeType===1;){if(n.matches(r))return n;n=n.parentNode}return null})})(window.Element.prototype);document.addEventListener("DOMContentLoaded",function(){var o=document.querySelectorAll(".js-open-modal"),r=document.querySelector(".js-overlay-modal"),n=document.querySelectorAll(".js-modal-close");o.forEach(function(l){l.addEventListener("click",function(e){e.preventDefault();var t=this.getAttribute("data-modal"),s=document.querySelector('.modal[data-modal="'+t+'"]');s.classList.add("active"),r.classList.add("active")})}),n.forEach(function(l){l.addEventListener("click",function(e){var t=this.closest(".modal");t.classList.remove("active"),r.classList.remove("active")})}),document.body.addEventListener("keyup",function(l){var e=l.keyCode;e==27&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))},!1),r.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")})});
