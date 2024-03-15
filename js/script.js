// get ID from URL -building an vanilla JS router
// console.log(window.location.pathname); //  index.html or whatever page the href is to
// the current page
const global = {
  currentPage: window.location.pathname,
};
// Init App setting up the dyi router with switch statement
function init() {
  switch (global.currentPage) {
    case "/":
      console.log("Home");
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
}

// when dom content is loaded run this
document.addEventListener("DOMContentLoaded", init);
