import home_page from "./home.js"
import menu_page from "./menu.js"

init();
const content = document.querySelector("#content")
const home_btn = document.querySelector(".home_btn")
const menu_btn = document.querySelector(".menu_btn")


home_btn.addEventListener("click", function(){
    clear_page();
    home_page();
})

menu_btn.addEventListener("click", function(){
    clear_page();
    menu_page();
})



function clear_page(){
    content.textContent = "";
}



function init(){
    home_page();
}

