import { API_KEY } from "../env.js";
// get ID from URL -building an vanilla JS router
// console.log(window.location.pathname); //  index.html or whatever page the href is to
// the current page
const global = {
  currentPage: window.location.pathname,
};
const moviesForGrid = document.getElementById("popular-movies");
// display (popular ) movies- add this to the DYI router
async function displayPopularMovies() {
  const { results } = await fetchAPIData("movie/popular");
  console.log(results[0]);
  results.forEach((result) => {
    // display a card for each result
    ` <div class="card">
  <a href="movie-details.html?id=1">
    <img
      src="${result.backdrop_path}"
      class="card-img-top"
      alt="${title}"
    />
  </a>
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class="card-text">
      <small class="text-muted">Release: ${release_date}</small>
    </p>
  </div>
</div>`;
  });
}

// Fetch data from TMDB API note   IRL this would be on the server
async function fetchAPIData(endpoint) {
  const API_URL = "https://api.themoviedb.org/3/";

  const response = await fetch(
    `${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`
  );
  const data = await response.json();
  return data;
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
      console.log("Show");
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
