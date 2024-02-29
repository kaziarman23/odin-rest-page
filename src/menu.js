function menu_page() {
    const content = document.querySelector("#content");
    const page_contener = document.createElement("div");
    const page_content1 = document.createElement("p");
    const page_content2 = document.createElement("p");
    const page_content3 = document.createElement("p");
    const page_content4 = document.createElement("p");

    // creating menu list
    const menuList = document.createElement("ul");
    menuList.textContent = "Our Menu:";
    menuList.style.backgroundColor = "gold";
    menuList.style.color = "black";
    menuList.style.textAlign = "center";
    page_contener.appendChild(menuList);
    const menuItem1 = document.createElement("li");
    menuItem1.textContent = "Ukrainian Red Borscht Soup";
    page_content1.appendChild(menuItem1);
    const menuItem2 = document.createElement("li");
    menuItem2.textContent = "Eggplant Caponata";
    page_content2.appendChild(menuItem2);
    const menuItem3 = document.createElement("li");
    menuItem3.textContent = "Caprese Salad with Balsamic Reduction";
    page_content3.appendChild(menuItem3);
    const menuItem4 = document.createElement("li");
    menuItem4.textContent = "Beet Salad with Goat Cheese";
    page_content4.appendChild(menuItem4);

    page_contener.appendChild(menuItem1);
    page_contener.appendChild(menuItem2);
    page_contener.appendChild(menuItem3);
    page_contener.appendChild(menuItem4);
    content.appendChild(page_contener);

    page_contener.setAttribute("id", "menu_page");
}

export default menu_page;
