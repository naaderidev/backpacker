const $ = document;

const template = $.createElement("template");
template.innerHTML = `
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <link rel="stylesheet" href="./assets/css/style.css" />
    <link rel="stylesheet" href="./assets/components/sidebar/Sidebar.css" />

    <aside class="info-sidebar perfect-centered">
        <div class="about-me">
        <img src="./assets/images/profile.webp" alt="profile-image" />
        <h5 class="text-dark">Hi! I'm Bahar</h5>
        <p class="text-ltr">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Doloribus, beatae? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Ab, dolores?
        </p>
        <div class="social-links d-flex">
            <a href="#"><i class="fa fa-instagram"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-facebook"></i></a>
        </div>
        </div>
        <div class="contact-me d-flex">
        <h6 class="dark-text">Send me your thought!</h6>
        <input
            type="text"
            placeholder="Enter Name"
            class="input text-dark"
        />
        <input
            type="text"
            placeholder="Enter Email"
            class="input text-dark"
        />
        <textarea
            class="textarea text-dark"
            cols="30"
            rows="5"
            placeholder="write..."
        ></textarea>
        <a href="#" type="button" class="btn contact-btn">Send</a>
        </div>
    </aside>
`;

class Sidebar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

export default Sidebar;
