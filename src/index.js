import home_page from "./home.js";
import menu_page from "./menu.js";
import contact_page from "./contact.js";

init();

const content = document.querySelector("#content");
const home_btn = document.querySelector(".home_btn");
const menu_btn = document.querySelector(".menu_btn");
const contact_btn = document.querySelector(".contact_btn");

home_btn.addEventListener("click", function () {
    clear_page();
    home_page();
});

menu_btn.addEventListener("click", function () {
    clear_page();
    menu_page();
});

contact_btn.addEventListener("click", function () {
    clear_page();
    contact_page();
});

function clear_page() {
    content.textContent = "";
}

function init() {
    home_page();
}
