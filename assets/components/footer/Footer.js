const $ = document;
const template = $.createElement("template");
template.innerHTML = `
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <link rel="stylesheet" href="./assets/css/style.css" />
    <link rel="stylesheet" href="./assets/components/footer/Footer.css" />
    <footer id="footer">
        <p class="text-center text-light">
            TM <i class="fa fa-copyright"></i> Bahar Travel Blog -- All Rights Reserved
        </p>
        <nav class="links d-flex">
            <a href="#"><i class="fa fa-instagram"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-facebook"></i></a>
        </nav>
    </footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

export default Footer;
