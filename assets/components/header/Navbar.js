const $ = document;

const template = $.createElement("template");
template.innerHTML = `
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <link rel="stylesheet" href="./assets/css/style.css" />
    <link rel="stylesheet" href="./assets/components/header/Navbar.css" />
    <section class="navbar d-flex">
        <h3 class="text-green">BackPacker</h3>
        <nav class="nav-wrapper">
          <a href="" class="nav-links home-link">Home</a>
          <a href="" class="nav-links" id="nav-dropdown-btn"
            >Pages <i class="fa fa-caret-down"></i
          ></a>
          <div class="nav-dropdown d-none">
            <!--add class d-flex to show dropdown-->
            <a href="" class="nav-links blog-link">Categories</a>
            <a href="" class="nav-links article-link">Categories Detail</a>
          </div>
          <a href="" class="nav-links contact-link">Contact Me</a>
        </nav>
        <div class="icons d-flex">
          <div class="search-icon">
            <a href="#"><i class="fa fa-search"></i></a>
          </div>
          <div class="drop-down-icon">
            <a href="#"><i class="fa fa-bars"></i></a>
          </div>
        </div>
    </section>
    <!--bar-menu-->
    <section class="bar-menu d-none">
        <a href="#" class="close-btn text-muted text-ltr"
          ><i class="fa fa-times"></i
        ></a>
        <nav class="d-flex">
          <a href="./index.html" class="bar-menu-items text-dark"
            >Home <i class="fa fa-home"></i
          ></a>
          <a href="#" class="bar-menu-items text-dark"
            >Categories <i class="fa fa-th-large"></i
          ></a>
          <a href="./blog.html" class="bar-menu-items text-dark mr-2"
            >Destinations <i class="fa fa-map-marker"></i
          ></a>
          <a href="./blog.html" class="bar-menu-items text-dark mr-2"
            >Stories <i class="fa fa-paragraph"></i
          ></a>
          <a href="./article.html" class="bar-menu-items text-dark mr-2"
            >Article <i class="fa fa-pencil"></i
          ></a>
          <a href="./contact.html" class="bar-menu-items text-dark"
            >Contact Me <i class="fa fa-user"></i
          ></a>
        </nav>
    </section>
`;

class Navbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot
      .querySelector(".home-link")
      .setAttribute("href", this.getAttribute("home-link"));
    this.shadowRoot
      .querySelector(".blog-link")
      .setAttribute("href", this.getAttribute("blog-link"));
    this.shadowRoot
      .querySelector(".article-link")
      .setAttribute("href", this.getAttribute("article-link"));
    this.shadowRoot
      .querySelector(".contact-link")
      .setAttribute("href", this.getAttribute("contact-link"));

    //navbar drop down
    const navbarDropdownbtn =
      this.shadowRoot.querySelector("#nav-dropdown-btn");
    const navbarDropdownBox = this.shadowRoot.querySelector(".nav-dropdown");
    navbarDropdownbtn.addEventListener("click", (event) => {
      event.preventDefault();
      navbarDropdownBox.classList.toggle("d-none");
    });

    //navbar in tablet & mobile
    const closeBtn = this.shadowRoot.querySelector(".close-btn");
    const barMenu = this.shadowRoot.querySelector(".bar-menu");
    const dropDownIcon = this.shadowRoot.querySelector(".drop-down-icon");
    dropDownIcon.addEventListener("click", () => {
      barMenu.classList.remove("d-none");
    });
    closeBtn.addEventListener("click", () => {
      barMenu.classList.add("d-none");
    });
  }

  static observedAttributes() {
    return ["home-link", "blog-link", "article-link", "contact-link"];
  }
}

export default Navbar;
