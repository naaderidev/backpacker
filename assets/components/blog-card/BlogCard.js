const $ = document;

const template = $.createElement("template");
template.innerHTML = `
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <link rel="stylesheet" href="./assets/css/style.css" />
    <link rel="stylesheet" href="./assets/components/blog-card/BlogCard.css" />
    <article class="blog-card d-flex" data-type="">
        <div class="blog-card-header">
            <img src="" alt="card" onerror="this.src='https://via.placeholder.com/500x300';"/>
        </div>
        <div class="blog-card-body">
            <h4 class="card-title text-dark text-ltr"></h4>
            <p class="text-ltr">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            obcaecati facilis, nam fugit eum voluptates.
            </p>
            <br />
            <small class="card-label"></small>
        </div>
        <div class="blog-card-footer">
            <a href="./article.html" type="button">Read More</a>
        </div>
    </article>
`;

class BlogCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const images = this.shadowRoot.querySelector(".blog-card-header img");
    images.setAttribute("src", this.getAttribute("blog-card-img"));

    this.shadowRoot.querySelector(".card-title").innerHTML =
      this.getAttribute("blog-card-title");
    this.shadowRoot.querySelector(".card-label").innerHTML =
      this.getAttribute("blog-card-label");

    this.shadowRoot.querySelector(".blog-card").dataset.type =
      this.getAttribute("blog-card-data-type");

    const blogCards = this.shadowRoot.querySelectorAll(".blog-card");
    const blogBtns = $.querySelectorAll(".filter-btn");

    blogBtns.forEach((btn) => {
      btn.addEventListener("click", (event) => {
        blogCards.forEach((photo) => {
          if (event.target.dataset.btn == "All") {
            photo.style.display = "block";
          } else if (event.target.dataset.btn !== photo.dataset.type) {
            photo.style.display = "none";
          } else {
            photo.style.display = "block";
          }
          for (let i = 0; i < blogBtns.length; i++) {
            blogBtns[i].classList.remove("btn-active");
          }
          btn.classList.add("btn-active");
        });
      });
    });
  }

  static observedAttributes() {
    return [
      "blog-card-img",
      "blog-card-title",
      "blog-card-label",
      "blog-card-data-type",
    ];
  }
}

export default BlogCard;
