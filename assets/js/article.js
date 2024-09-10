const $ = document;

////////////////////////////////////////////////////////////////

let slideIndex = 1;
const photos = [
  "https://naaderidev-bucket.storage.c2.liara.space/backpacker/p16.webp",
  "https://naaderidev-bucket.storage.c2.liara.space/backpacker/p15.jpg",
  "https://naaderidev-bucket.storage.c2.liara.space/backpacker/p13.jpg",
  "https://naaderidev-bucket.storage.c2.liara.space/backpacker/p4.jpg",
  "https://naaderidev-bucket.storage.c2.liara.space/backpacker/p3.webp",
  "https://naaderidev-bucket.storage.c2.liara.space/backpacker/p22.jpg",
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
