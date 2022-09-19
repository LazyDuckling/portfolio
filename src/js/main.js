"use strict";

// Get content classes for nav, content and footer
let navElement = document.getElementsByClassName("nav__content");
let contentElement = document.getElementsByClassName("content");
let footerElement = document.getElementsByClassName("footer__content");

// Get the nav width
let navWidth = navElement[0].clientWidth;

// Function to convert pixel value of nav width to rem, then assign it to elements
function pixelsToRem(pixels) {
    let contentWidth = pixels / 16 + "rem";
    footerElement[0].style.width = (contentWidth);
}

// Run pixelsToRem function on page load
window.addEventListener = ("Load", pixelsToRem(navWidth));