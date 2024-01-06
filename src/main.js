import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector(".search-form");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

iziToast.settings({
  message: 'Sorry, there are no images matching your search query. Please try again!',
  messageColor: '#fff',
  backgroundColor: '#EF4040',
  position: 'topRight'
});

const searchParams = new URLSearchParams({
  key: '41673326-36a35a0e0851ae97a957fbd95',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true'
})

const loadImgs = (searchImg) => {
  loader.classList.add("loader-active");
  gallery.textContent = "";
  fetchImages(searchImg)
    .then(res => !res.hits.length ? iziToast.show() : renderImages(res.hits))
    .catch(err => alert(err))
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  loadImgs(event.currentTarget.search.value);
  event.currentTarget.reset();
});

function fetchImages(searchImg) {
  return fetch(`https://pixabay.com/api/?${searchParams}&q=${searchImg}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      loader.classList.remove("loader-active");
      return response.json();
    })
}

function renderImages(images) {
  const str = images.reduce((acc, e) => acc + `
    <li class="gallery-item">
      <a class="gallery-link" href="${e.largeImageURL}">
        <img
          class="gallery-image"
          src="${e.webformatURL}"
          data-source="${e.largeImageURL}"
          alt="${e.tags}"
        />
      </a>
      <ul>
        <li><b>Likes</b> ${e.likes}</li>
        <li><b>Views</b> ${e.views}</li>
        <li><b>Comments</b> ${e.comments}</li>
        <li><b>Downloads</b> ${e.downloads}</li>
      </ul>
    </li>`, ''
  );
  gallery.insertAdjacentHTML("afterbegin", str);
  lightbox.refresh();
}

const lboxOptions = {
  captionsData: "alt",
  captionDelay: 250
}

const lightbox = new SimpleLightbox('.gallery a', lboxOptions);

