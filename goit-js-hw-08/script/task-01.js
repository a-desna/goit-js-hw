'use strict';
import images from './gallery-items.js';

const refs = {
  galleryList: document.querySelector('.js-gallery'),
  lightbox: document.querySelector('.js-lightbox'),
  lightboxImage: document.querySelector('.lightbox__image'),
  btnCloseLightbox: document.querySelector(
    'button[data-action="close-lightbox"]',
  ),
};

const gallery = creatGallery(images);
refs.galleryList.insertAdjacentHTML('beforeend', gallery);

function creatGalleryMarkup({ preview, original, description }) {
  const markup = `
  <li class="gallery__item">
    <a
      class="gallery__link"
      href="${original}"
    >
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`;
  return markup;
}

function creatGallery(images) {
  return images.reduce(
    (markup, image) => (markup += creatGalleryMarkup(image)),
    '',
  );
}

refs.galleryList.addEventListener('click', handleOpenModal);
refs.lightbox.addEventListener('click', handleCloseModal);

function handleOpenModal(e) {
  e.preventDefault();

  if (e.target === e.currentTarget) {
    return;
  }
  refs.lightbox.classList.add('is-open');
  window.addEventListener('keydown', handleKeyPress);

  const imgUrl = e.target.dataset.source;
  const imgAlt = e.target.alt;

  refs.lightboxImage.src = imgUrl;
  refs.lightboxImage.alt = imgAlt;
}

function handleCloseModal(e) {
  if (e.target === refs.lightboxImage) {
    return;
  }
  closeModal();
}

function handleKeyPress(e) {
  if (e.code !== 'Escape') {
    return;
  }

  closeModal();
}

function closeModal() {
  refs.lightbox.classList.remove('is-open');
  window.removeEventListener('keydown', handleKeyPress);
  refs.lightboxImage.src = '';
  refs.lightboxImage.alt = '';
}
