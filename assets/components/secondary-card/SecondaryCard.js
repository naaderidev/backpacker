const $ = document;

const template = $.createElement("template");

template.innerHTML = `
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <link rel="stylesheet" href="./assets/css/style.css" />
    <link rel="stylesheet" href="./assets/components/secondary-card/SecondaryCard.css" />
        <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <figure class="secondary-card d-flex">
                  <img
                    class="secondary-card-img"
                    src="./images/p3.webp"
                    alt=""
                    onerror="this.src='https://via.placeholder.com/500x300';"
                  />
                  <figcaption class="secondary-card-caption d-flex">
                    <div class="secondary-card-caption-header d-flex">
                      <small class="tour-country text-muted text-italic-bold">
                        <i class="fa fa-map-marker text-green"></i>
                      </small>
                      <small class="tour-duration text-muted text-italic-bold">
                        <i class="fa fa-calendar text-green"></i>
                      </small>
                      <small class="tour-capacity text-muted text-italic-bold">
                        <i class="fa fa-user text-green"></i>
                      </small>
                    </div>
                    <a class="text-center text-dark" href="./article.html"
                      >Discover amazing places of the world</a
                    >
                    <div class="secondary-card-caption-footer">
                      <div class="border d-flex">
                        <small class="text-muted text-italic-bold">
                          <i class="fa fa-plane text-green"></i
                          ><i class="fa fa-train text-green"></i>Trans.
                        </small>
                        <small class="text-muted text-italic-bold">
                          <i class="fa fa-dollar text-green"></i>350
                        </small>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
              <div class="flip-card-back d-flex perfect-centered">
                <article class="secondary-card-back d-flex">
                  <h5>Perfect Tour</h5>
                  <small
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda, placeat.</small
                  >
                  <div class="tour-more-options d-flex">
                    <small
                      ><i class="fa fa-plane text-green"></i>&nbspQatarWays
                      Airline</small
                    >
                    <small
                      ><i class="fa fa-train text-green"></i>&nbspFree City
                      Tour</small
                    >
                    <small
                      ><i class="fa fa-credit-card text-green"></i>&nbspHealth
                      Insurance</small
                    >
                    <small
                      ><i class="fa fa-bed text-green"></i>&nbspClean 3 Star
                      Hotel</small
                    >
                    <small
                      ><i class="fa fa-coffee text-green"></i>&nbspFree
                      Breakfast</small
                    >
                  </div>
                </article>
              </div>
            </div>
        </div>
`;

class SecondaryCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot
      .querySelector(".secondary-card img")
      .setAttribute("src", this.getAttribute("tour-img"));
    this.shadowRoot.querySelector(".tour-country").innerHTML +=
      this.getAttribute("tour-country");
    this.shadowRoot.querySelector(".tour-duration").innerHTML +=
      this.getAttribute("tour-duration");
    this.shadowRoot.querySelector(".tour-capacity").innerHTML +=
      this.getAttribute("tour-capacity");
  }

  static observedAttributes() {
    return ["tour-img", "tour-country", "tour-duration", "tour-capacity"];
  }
}

export default SecondaryCard;
