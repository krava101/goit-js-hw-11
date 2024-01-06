import{i as l,S as u}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const d=document.querySelector(".search-form"),n=document.querySelector(".gallery"),c=document.querySelector(".loader");l.settings({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",backgroundColor:"#EF4040",position:"topRight"});const f=new URLSearchParams({key:"41673326-36a35a0e0851ae97a957fbd95",image_type:"photo",orientation:"horizontal",safesearch:"true"}),m=a=>{c.classList.add("loader-active"),n.textContent="",g(a).then(t=>t.hits.length?h(t.hits):l.show()).catch(t=>alert(t))};d.addEventListener("submit",a=>{a.preventDefault(),m(a.currentTarget.search.value),a.currentTarget.reset()});function g(a){return fetch(`https://pixabay.com/api/?${f}&q=${a}`).then(t=>{if(!t.ok)throw new Error(t.status);return c.classList.remove("loader-active"),t.json()})}function h(a){const t=a.reduce((s,r)=>s+`
    <li class="gallery-item">
      <a class="gallery-link" href="${r.largeImageURL}">
        <img
          class="gallery-image"
          src="${r.webformatURL}"
          data-source="${r.largeImageURL}"
          alt="${r.tags}"
        />
      </a>
      <ul>
        <li><b>Likes</b> ${r.likes}</li>
        <li><b>Views</b> ${r.views}</li>
        <li><b>Comments</b> ${r.comments}</li>
        <li><b>Downloads</b> ${r.downloads}</li>
      </ul>
    </li>`,"");n.insertAdjacentHTML("afterbegin",t),p.refresh()}const y={captionsData:"alt",captionDelay:250},p=new u(".gallery a",y);
//# sourceMappingURL=commonHelpers.js.map
