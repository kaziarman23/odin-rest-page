function contact_page() {
    const content = document.querySelector("#content");
    const input_contener = document.createElement("div");
    const input_content1 = document.createElement("div");
    const input_content2 = document.createElement("div");
    const input_content3 = document.createElement("div");
    const input_content4 = document.createElement("div");

    const heading = document.createElement("h1");
    heading.textContent = "Contact Us";
    input_content1.appendChild(heading);

    const email = document.createElement("h1");
    email.textContent = "ThisIsNotAFake@gmail.com";
    input_content2.appendChild(email);

    const phone = document.createElement("h1");
    phone.textContent = "01*********";
    input_content3.appendChild(phone);

    const address = document.createElement("pre");
    address.textContent = "32/97,something dhaka";
    input_content4.appendChild(address);

    input_contener.setAttribute("id", "contact_page");

    input_contener.appendChild(input_content1);
    input_contener.appendChild(input_content2);
    input_contener.appendChild(input_content3);
    input_contener.appendChild(input_content4);
    content.appendChild(input_contener);
}

export default contact_page;
