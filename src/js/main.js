"use strict";

// Get the current year to automatically update the copyright year in the footer
let currentYear = new Date().getFullYear();

let copyrightElement = document.getElementsByClassName("footer__copyright");

copyrightElement[0].innerHTML = "© Copyright " + currentYear; 


// Toggle the hamburger menu on/off
let hamburgerState = false;

let hamburgerElement = document.getElementsByClassName("nav__content-icon");
let menuElement = document.getElementsByClassName("nav__content-mobile");

function hamburgerInit() {
    hamburgerElement[0].addEventListener("click", hamburgerToggle);
}

function hamburgerToggle() {
    if (hamburgerState == false) {
        menuElement[0].style = "display: grid";
        hamburgerState = true;

    } else {
        menuElement[0].style = "display: none";
        hamburgerState = false;
    }


}

hamburgerInit();