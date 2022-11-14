"use strict";

// Get the current year to automatically update the copyright year in the footer
let currentYear = new Date().getFullYear();

let copyrightElement = document.getElementsByClassName("footer__copyright");

copyrightElement[0].innerHTML = "© Copyright " + currentYear; 
