import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

//Створення і рендер розмітки на підставі масиву
 //даних galleryItems і наданого шаблону елемента галереї.

 //Реалізація делегування на div.gallery і отримання url великого зображення.

 const imgList = document.querySelector ('.gallery'); 
 const imgMarkup = createImagesMarkup (galleryItems);

 function createImagesMarkup (galleryItems) {
    return galleryItems
    .map(({preview, original, description}) => {
       return ` <a class = "gallery__link " href=large-image.jpg>
       <img 
       class = "gallery__image" 
       src = "${preview}" 
       data-source = "${original}" 
       alt = "${description}"/>
       </a>`;
    }) .join ("");
 }
 
imgList.insertAdjacentHTML('beforeend', imgMarkup)
imgList.addEventListener ("click" , onImgClick)