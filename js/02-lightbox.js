import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");
const markupOfGallery = createMarkupOfGallery(galleryItems);

galleryRef.insertAdjacentHTML("afterbegin", markupOfGallery);

function createMarkupOfGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => 
    `<a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"        
        alt="${description}"
      />
    </a>`
    ).join("");
};


    const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
    })
    
  





