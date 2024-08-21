const $ = document;
const template = $.createElement("template");
template.innerHTML = `
    <link rel="stylesheet" href="./assets/css/style.css" />
    <article>
        <slot name="title"></slot>
        <slot name="subtitle"></slot>
        <slot name="text"></slot>
    </article>
`;

class SectionTitle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

export default SectionTitle;
