import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const onCreateGalleryElevents = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__link" href="${original}">
         <img class="gallery__image" src="${preview}" 
         alt="${description}"/></a>`
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", onCreateGalleryElevents);

gallery.addEventListener("click", onClickGallery);

function onClickGallery(event) {
  event.preventDefault();
  const lightbox = new SimpleLightbox(".gallery .gallery__link", {
    captionsData: "alt",
    captionDelay: 250,
  });
}
