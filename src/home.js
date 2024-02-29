function home_page() {
    const content = document.querySelector("#content");
    const page_content = document.createElement("div");

    const headling = document.createElement("h1");
    headling.textContent =
        "our restaurant is the best restuarant! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida neque convallis a cras semper. Sit amet cursus sit amet dictum sit. Odio ut sem nulla pharetra diam sit amet nisl. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Porta non pulvinar neque laoreet suspendisse. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Et odio pellentesque diam volutpat commodo.";

    page_content.setAttribute("ID", "home_page_text");
    page_content.appendChild(headling);
    content.appendChild(page_content);
}

export default home_page;
