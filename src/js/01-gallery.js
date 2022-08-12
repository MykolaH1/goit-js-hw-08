import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line


const galleryEl = document.querySelector(".gallery");

const makeGallery = ({ preview, original, description } = {}) => {
  return `
   <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
   `;
};

const galleryCardArr = galleryItems.map((el) => {
  return makeGallery(el);
});

galleryEl.insertAdjacentHTML("beforeend", galleryCardArr.join(""));

const onGalleryImgClick = (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
};

galleryEl.addEventListener("click", onGalleryImgClick);

const lightbox = new SimpleLightbox(".gallery a", {
  captionPosition: "bottom",
  animationSpeed: 250,
  captionsData: "alt",
});