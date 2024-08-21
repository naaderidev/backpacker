const $ = document;

////////////////////////////////////////////////////////////////

let slideIndex = 1;
const photos = [
  "https://images.unsplash.com/photo-1530311583484-ea8bf4c407fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXJhbnxlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1673415819362-c2ca640bfafe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9yb2Njb3xlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1666432045848-3fdbb2c74531?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWFsZGl2ZXN8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1697730150275-dba1cfe8af9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TmV3WW9ya3xlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1661891622579-bee76e28c304?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWd5cHR8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1671809692422-4893b9e09119?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG9uZG9ufGVufDB8fDB8fHww",
];

const prevBtn = $.querySelector(".prev-btn");
const nextBtn = $.querySelector(".next-btn");
const shownPhoto = $.querySelector(".article-slider img");
let slideNumber = $.querySelector(".slide-number");
const thumbnailImages = $.getElementsByClassName("thumbnail-img");

prevBtn.addEventListener("click", prevSlideHandler);
nextBtn.addEventListener("click", nextSlideHandler);

function nextSlideHandler() {
  slideIndex++;
  if (slideIndex > photos.length) {
    slideIndex = 1;
  }
  slideHandler(slideIndex);
}

function prevSlideHandler() {
  slideIndex--;
  if (slideIndex < 1) {
    slideIndex = photos.length;
  }
  slideHandler(slideIndex);
}

function activeThumbnailImages(index) {
  for (let i = 0; i < thumbnailImages.length; i++) {
    thumbnailImages[i].classList.remove("active");
  }
  thumbnailImages[index - 1].classList.toggle("active");
}

function currentSlide(thumbnailIndex) {
  slideIndex = thumbnailIndex;
  slideHandler(slideIndex);
  activeThumbnailImages(thumbnailIndex);
}

function slideHandler(index) {
  shownPhoto.setAttribute("src", photos[index - 1]);
  slideNumber.innerHTML = `${slideIndex} / ${thumbnailImages.length}`;
  activeThumbnailImages(index);
}
