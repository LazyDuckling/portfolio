"use strict";

// -------------------------------------------------------------------------------------------

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

// -------------------------------------------------------------------------------------------

// Get the current year to automatically update the copyright
let currentYear = new Date().getFullYear();

// Get the footer copyright element
let copyrightElement = document.getElementsByClassName("footer__copyright");

// Set the text in the element
copyrightElement[0].innerHTML = "© Copyright " + currentYear; 
