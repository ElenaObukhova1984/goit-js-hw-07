import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");
const marrkupOfGallery = createMarkupOfGallery(galleryItems);

galleryRef.insertAdjacentHTML("beforeend", marrkupOfGallery);

function createMarkupOfGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description}) => `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`
    ).join("");
};

galleryRef.addEventListener("click", handleClick);

function handleClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return
    }
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

instance.show();

galleryRef.addEventListener("keydown",(event) => {
    if (event.code === "Escape") {
        instance.close();    
}
}
)

}


    

