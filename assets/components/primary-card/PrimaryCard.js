const $ = document;
const DEFAULT_IMAGE_URL = "https://via.placeholder.com/500x300";

const template = $.createElement("template");
template.innerHTML = `
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <link rel="stylesheet" href="./assets/css/style.css" />
    <link rel="stylesheet" href="./assets/components/primary-card/PrimaryCard.css" />
    <figure class="primary-card">
        <img
            class="primary-card-img"
            src=""
            alt="destination-img"
            onerror="this.src='https://via.placeholder.com/500x300';"
        />
        <figcaption>
            <a class="primary-card-caption">
            <h4 class="text-center text-light"></h4>
            <small class="text-center text-light"></small>
            </a>
        </figcaption>
    </figure>
`;

class PrimaryCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const destinationImg =
      this.getAttribute("destination-img") || DEFAULT_IMAGE_URL;
    this.shadowRoot
      .querySelector(".primary-card img")
      .setAttribute("src", destinationImg);
    this.shadowRoot.querySelector(".primary-card-caption h4").innerHTML =
      this.getAttribute("destination-name");
    this.shadowRoot.querySelector(".primary-card-caption small").innerHTML =
      this.getAttribute("destination-cities");
  }

  static observedAttributes() {
    return ["destination-img", "destination-name", "destination-cities"];
  }
}

export default PrimaryCard;
