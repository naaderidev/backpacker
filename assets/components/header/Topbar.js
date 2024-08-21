const $ = document;

const template = $.createElement("template");
template.innerHTML = `
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <link rel="stylesheet" href="./assets/css/style.css" />
    <link rel="stylesheet" href="./assets/components/header/Topbar.css" />
    <section class="topbar perfect-centered">
        <div class="quick-contact d-flex text-green">
          <small> <i class="fa fa-envelope"></i>&nbspnaaderidev@gmail.com </small>
          <small>|</small>
          <small><i class="fa fa-phone"></i>&nbsp+98 919 357 1290</small>
        </div>
        <div class="topbar-social-links d-flex">
          <a class="text-green" href="">
            <i class="fa fa-linkedin"></i>
          </a>
          <a class="text-green" href="">
            <i class="fa fa-facebook"></i>
          </a>
          <a class="text-green" href="">
            <i class="fa fa-instagram"></i>
          </a>
          <a class="text-green" href="">
            <i class="fa fa-youtube-play"></i>
          </a>
        </div>
    </section>
`;

class Topbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

export default Topbar;
