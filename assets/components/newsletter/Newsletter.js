const $ = document;
const template = $.createElement("template");
template.innerHTML = `
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <link rel="stylesheet" href="./assets/css/style.css" />
    <link rel="stylesheet" href="./assets/components/newsletter/Newsletter.css" />
    <section class="newsletter d-flex">
        <article class="newsletter-text d-flex">
          <h5 class="text-light mb-3">Subscribe Our Newsletter</h5>
          <p class="text-light mb-3">
            Subscribe newsletter to get offers and about new places to dedscribe
          </p>
        </article>
        <form action="#">
          <fieldset class="d-flex">
            <input
              type="email"
              placeholder="Enter your Email"
              class="input text-light"
            />
            <a href="#" type="button" class="btn btn-newsletter">Subscribe</a>
          </fieldset>
        </form>
    </section>
`;

class Newsletter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

export default Newsletter;
