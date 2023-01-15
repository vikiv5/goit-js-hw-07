import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imgList = document.querySelector ('.gallery'); 
const imgMarkup = createImagesMarkup (galleryItems);
imgList.insertAdjacentHTML('beforeend', imgMarkup);

 function createImagesMarkup (galleryItems) {
    return galleryItems
    .map(({preview, original, description}) => {
       return ` <li><a class = "gallery__item " href="${original}">
       <img 
       class = "gallery__image" 
       src = "${preview}"
       alt = "${description}"/>
       </a></li>`;
    }) .join ("");
 
 }
 //new SimpleLightbox(".gallery a");
 const gallery = new SimpleLightbox ('.gallery a', 
 {
    captions : true ,
    captionsData : "alt", 
    captionDelay:250,
 }) ;
