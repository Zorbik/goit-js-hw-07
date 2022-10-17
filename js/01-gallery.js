import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const onCreateGalleryElevents = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" 
            data-source="${original}" alt="${description}"
            />
          </a>
        </div>`
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", onCreateGalleryElevents);

gallery.addEventListener("click", onClickGallery);

function onClickGallery(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `
    <img src="${event.target.dataset.source}" width="1280">
`,
    {
      onClose: () => {
        window.removeEventListener("keydown", onEscClose);
      },
    }
  );

  instance.show();
  window.addEventListener("keydown", onEscClose);

  function onEscClose(event) {
    console.log(event.code);
    if (event.code === "Escape") {
      instance.close();
    }
  }
}
