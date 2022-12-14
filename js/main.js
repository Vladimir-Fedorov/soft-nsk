'use strict';

document.addEventListener('DOMContentLoaded', () => {
  AOS.init();

  let burger = document.querySelector('.js-menu-burger');
  let item = document.querySelector('.js-menu-burger-item');
  let menu = document.querySelector('.js-menu');

  const anchors = document.querySelectorAll('a.js-scroll-to');

  burger.addEventListener('click', () => {
    item.classList.toggle('header-burger__item_active');
    menu.classList.toggle('header-menu_active');
  });


  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute('href');

      document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }

});