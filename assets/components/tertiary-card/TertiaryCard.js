const $ = document;

const photographyBtns = $.querySelectorAll(".filter-btn");
let filterType = "All";

const template = $.createElement("template");
template.innerHTML = `
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <link rel="stylesheet" href="./assets/css/style.css" />
    <link rel="stylesheet" href="./assets/components/tertiary-card/TertiaryCard.css" />
    <figure class="tertiary-card" data-type="">
        <div class="tertiary-card-img">
            <img
                class="tertiary-card-img"
                src=""
                alt="photography-img"
                onerror="this.src='https://via.placeholder.com/500x300';"
            />
            <div class="photo-date">
                <span class="date-month text-light text-italic-bold"></span>
                <span class="date-year text-light text-italic-bold"></span>
            </div>
        </div>
        <figcaption class="tertiary-card-caption d-flex">
            <div class="tertiary-card-caption-labels d-flex">
                <span class="card-label"></span
                ><a href="./article.html" class="text-dark mb-2"></a>
            </div>
            <div class="tertiary-card-caption-icons d-flex">
                <a href="#" class="text-muted"
                    ><i class="fa fa-share-alt"></i></a
                ><a href="#" class="text-muted"
                    ><i class="fa fa-heart-o"></i
                ></a>
            </div>
        </figcaption>
    </figure>
`;

class TertiaryCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot
      .querySelector(".tertiary-card")
      .setAttribute("data-type", this.getAttribute("data-type"));
    this.shadowRoot
      .querySelector(".tertiary-card-img img")
      .setAttribute("src", this.getAttribute("photo-img"));
    this.shadowRoot.querySelector(".date-month").innerHTML =
      this.getAttribute("photo-date-month");
    this.shadowRoot.querySelector(".date-year").innerHTML =
      this.getAttribute("photo-date-year");
    this.shadowRoot.querySelector(
      ".tertiary-card-caption-labels span"
    ).innerHTML = this.getAttribute("photo-mainland");
    this.shadowRoot.querySelector(".tertiary-card-caption-labels a").innerHTML =
      this.getAttribute("photo-country");

    const photographyCards = this.shadowRoot.querySelectorAll(".tertiary-card");

    photographyBtns.forEach((btn) => {
      btn.addEventListener("click", (event) => {
        filterType = event.target.dataset.btn;
        photographyCards.forEach((photo) => {
          if (filterType == "All") {
            photo.style.display = "block";
          } else if (filterType !== photo.dataset.type) {
            photo.style.display = "none";
          } else {
            photo.style.display = "block";
          }
        });
        for (let i = 0; i < photographyBtns.length; i++) {
          photographyBtns[i].classList.remove("btn-active");
        }
        btn.classList.add("btn-active");
      });
    });
  }

  static observedAttributes() {
    return [
      "data-type",
      "photo-country",
      "photo-mainland",
      "photo-date-year",
      "photo-date-month",
      "photo-img",
    ];
  }
}

export default TertiaryCard;
