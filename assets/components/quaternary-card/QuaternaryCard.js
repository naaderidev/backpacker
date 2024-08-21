const $ = document;
const template = $.createElement("template");
template.innerHTML = `
    <link rel="stylesheet" href="./assets/css/style.css" />
    <link rel="stylesheet" href="./assets/components/quaternary-card/QuaternaryCard.css" />
        <figure class="story-card d-flex">
            <img src="./images/s3.jpg" alt="story-img" class="story-img" onerror="this.src='https://via.placeholder.com/500x300';"/>
            <figcaption>
                <a href="./article.html" class="story-title text-light"
                    >Discovering Dominica, the wild isle that stole my heart</a
                >
            </figcaption>
        </figure>
`;

class QuaternaryCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot
      .querySelector(".story-img")
      .setAttribute("src", this.getAttribute("story-img"));
    // this.shadowRoot.querySelectorAll("img").forEach(image => console.log(image.src))
    this.shadowRoot
      .querySelector(".story-title")
      .setAttribute("href", this.getAttribute("story-detail"));
  }

  static observedAttributes() {
    return ["story-img", "story-detail"];
  }
}

export default QuaternaryCard;
