"use strict";

document.addEventListener("click", documentActions);

const headerButton = document.querySelector(".header__btn");
const logoSVG = document.querySelector(".logo-header__svg");
const logoPath = logoSVG.querySelector("path");
const logoText = document.querySelector(".logo-header__text");

function documentActions(e) {
    const targetElement = e.target;

    if (targetElement.closest(".header__burger")) {
        document.body.classList.toggle("menu-open");
        headerButton.classList.toggle("btn--transparent");
        logoText.classList.toggle("logo-header__text--visible");

        if (document.body.classList.contains("menu-open")) {
            logoPath.style.fill = "black";
        } else {
            logoPath.style.fill = "white";
        }
    }
}

const navMenu = document.querySelector('.header__menu');
const burgerMenu = document.querySelector('.header__burger')

let notMoved = true;

function moveButtonsIfNeeded() {
    if (window.innerWidth <= 540 && notMoved) {
        navMenu.appendChild(headerButton);
        notMoved = false;
    } else if (window.innerWidth > 540 && !notMoved) {
        burgerMenu.before(headerButton)
        notMoved = true;
    }
}

moveButtonsIfNeeded();

window.addEventListener('resize', moveButtonsIfNeeded);
