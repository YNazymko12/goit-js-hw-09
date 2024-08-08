import { images } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const createGallery = images
  .map(({ preview, original, description }) => {
    return `<li class="gallery-item">
  <a
    class="gallery-link"
    href="${original}"
  >
    <img
      class="gallery-image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
  })
  .join('');

gallery.insertAdjacentHTML('beforeend', createGallery);

const lightbox = new SimpleLightbox('.gallery a', {
  overlayOpacity: 0.8,
  caption: true,
  captionsData: 'alt',
  captionDelay: 250,
});
