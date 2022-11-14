"use strict";

// Get the current year to automatically update the copyright
let currentYear = new Date().getFullYear();

// Get the footer copyright element
let copyrightElement = document.getElementsByClassName("footer__copyright");

// Set the text in the element
copyrightElement[0].innerHTML = "© Copyright " + currentYear; 
