import { API_KEY } from "../env.js";
// get ID from URL -building an vanilla JS router
// console.log(window.location.pathname); //  index.html or whatever page the href is to
// the current page
const global = {
  currentPage: window.location.pathname,
};

// display (popular ) movies- add this to the DYI router
async function displayPopularMovies() {
  const { results } = await fetchAPIData("movie/popular");

  results.forEach((movie) => {
    // display a card for each result
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `  
  <a href="movie-details.html?id=${movie.id}">

  ${
    movie.poster_path
      ? `<img
    src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
    class="card-img-top"
    alt="${movie.title}"
  />`
      : `    <img
  src="../images/no-image.jpg"
  class="card-img-top"
  alt="${movie.title}"
/>`
  }
  </a>
  <div class="card-body">
    <h5 class="card-title">${movie.title}</h5>
    <p class="card-text">
      <small class="text-muted">Release: ${movie.release_date}</small>
    </p>

</div>`;
    document.querySelector("#popular-movies").appendChild(div);
  });
}
async function displayPopularShows() {
  const { results } = await fetchAPIData("tv/popular");

  results.forEach((show) => {
    // display a card for each result
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `  
  <a href="tv-details.html?id=${show.id}">

  ${
    show.poster_path
      ? `<img
    src="https://image.tmdb.org/t/p/w500${show.poster_path}"
    class="card-img-top"
    alt="${show.title}"
  />`
      : `    <img
  src="../images/no-image.jpg"
  class="card-img-top"
  alt="${show.title}"
/>`
  }
  </a>
  <div class="card-body">
    <h5 class="card-title">${show.title}</h5>
    <p class="card-text">
      <small class="text-muted">Release: ${show.release_date}</small>
    </p>

</div>`;
    document.querySelector("#popular-shows").appendChild(div);
  });
}

// Fetch data from TMDB API note   IRL this would be on the server
async function fetchAPIData(endpoint) {
  const API_URL = "https://api.themoviedb.org/3/";
  showSpinner();

  const response = await fetch(
    `${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`
  );
  const data = await response.json();
  hideSpinner();
  return data;
}
// show or hide spinner
function showSpinner() {
  document.querySelector(".spinner").classList.add("show");
}
function hideSpinner() {
  document.querySelector(".spinner").classList.remove("show");
}
// highlight active link
function highlightActiveLink() {
  const links = document.querySelectorAll(".nav-link");
  links.forEach((link) => {
    if (link.getAttribute("href") === global.currentPage) {
      link.classList.add("active");
    }
  });
}

// setting up the dyi router with switch statement
function init() {
  switch (global.currentPage) {
    case "/":
    case "/index.html":
      displayPopularMovies();
      break;
    case "/shows.html":
      displayPopularShows();
      break;
    case "/search.html":
      console.log("search");
      break;
    case "/movie-details.html":
      console.log("movie d");
      break;
    case "/tv-details.html":
      console.log("tv d");
      break;
  }
  // init runs on every page so calling here
  highlightActiveLink();
}

// when dom content is loaded run this
document.addEventListener("DOMContentLoaded", init);
