"use strict";var e=document.querySelectorAll(".services__slide-btn"),t=document.querySelectorAll(".services__slide");e.forEach((function(e){e.addEventListener("click",(function(){var e=this.parentNode;t.forEach((function(t){t.id!=e.id&&t.classList.remove("services__slide-".concat(t.id))})),e.classList.toggle("services__slide-".concat(e.id))}))}));var c="modal--active",o=document.getElementById("modalBtnClose"),i=document.getElementById("modal"),n=document.querySelectorAll(".hero__btn"),s=document.querySelectorAll(".services__slide-link");n.forEach((function(e){e.addEventListener("click",(function(){i.classList.add(c)}))})),s.forEach((function(e){e.addEventListener("click",(function(){i.classList.add(c)}))})),o.addEventListener("click",(function(){i.classList.remove(c)}));var l=document.getElementById("burger"),r=document.querySelector(".header__nav");l.addEventListener("click",(function(){this.classList.toggle("burger--active"),r.classList.toggle("header__nav--active")}));var d=document.querySelector(".about__item-text-1"),a=document.getElementById("aboutBtn"),u=document.getElementById("about");a.addEventListener("click",(function(){u.classList.add("about--active"),d.classList.remove("about__item-text-1")}));var v=document.querySelectorAll(".portfolio__btn"),m=document.querySelector(".portfolio"),f=document.querySelectorAll(".portfolio__left-text-1");v.forEach((function(e){e.addEventListener("click",(function(){m.classList.add("portfolio--active"),f.forEach((function(e){e.classList.remove("portfolio__left-text-1")}))}))}));var _=document.getElementById("btn-scroll");addEventListener("scroll",(function(){window.pageYOffset>500?_.classList.remove("invisible"):_.classList.add("invisible")}),{passive:!0}),_.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})}));