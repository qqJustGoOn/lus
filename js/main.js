"use strict";

const tabItems = document.querySelectorAll(".tabs__button-item");
const tabContents = document.querySelectorAll(".tabs__content-item");

tabItems.forEach((el) => {
  el.addEventListener("click", changeActive);
});

function changeActive(e) {
  const tabTarget = e.currentTarget;
  const buttonId = tabTarget.dataset.button;
  const currentContent = document.querySelector(`#${buttonId}`);

  tabItems.forEach((el) => {
    el.classList.remove("tabs__button-item--active");
  });

  tabContents.forEach((el) => {
    el.classList.remove("tabs__content-item--active");
  });

  tabTarget.classList.add("tabs__button-item--active");
  currentContent.classList.add("tabs__content-item--active");
}

const menuButton = document.querySelector(".mobile-menu");
const menu = document.querySelector(".nav__menu-list");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("nav__menu-list--active");
});
