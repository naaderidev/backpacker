const $ = document;
const template = $.createElement("template");
template.innerHTML = `
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <link rel="stylesheet" href="./assets/css/style.css" />
    <link rel="stylesheet" href="./assets/components/quinary-card/QuinaryCard.css" />
    <figure class="video">
        <img alt="youtube-videos" onerror="this.src='https://via.placeholder.com/500x300';"/>
        <figcaption class="video-caption d-flex">
            <h3 class="text-center text-light">Enjoy Video</h3>
            <a class="youtube-link">
                <i class="fa fa-youtube-play"></i>
            </a>
        </figcaption>
    </figure>
`;

class QuinaryCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot
      .querySelector(".youtube-link")
      .setAttribute("href", this.getAttribute("video-link"));
    this.shadowRoot
      .querySelector(".video img")
      .setAttribute("src", this.getAttribute("cover-img"));
  }

  static observedAttributes() {
    return ["video-link", "cover-img"];
  }
}

export default QuinaryCard;
