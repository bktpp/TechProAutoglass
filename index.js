"strict mode";

const hamBtn = document.querySelector(".ham__icon-btn");

const hamContainer = document.querySelector(".ham");
const menu = document.querySelector(".slideout");
const menuLinks = document.querySelectorAll(".slideout__item");

const handleMenu = () => {
   hamBtn.classList.toggle("toggle");
   menu.classList.toggle("show");
};

hamContainer.addEventListener("click", handleMenu);

menuLinks.forEach((link) => link.addEventListener("click", handleMenu));
