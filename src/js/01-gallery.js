import 'lazysizes';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';

const gallery = document.querySelector('.gallery');

const galleryListMarkup = galleryItems
  .map(
    ({ description, original, preview }) =>
      `<a class="gallery__item" href="${original}">
        <img class="gallery__image lazyload" data-src="${preview}" alt="${description}" />
      </a>`,
  )
  .join('');

gallery.insertAdjacentHTML('afterbegin', galleryListMarkup);

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
