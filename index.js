const api_key = "239d3a45321204f077707a2deaae0b75";
const apiEndPoint = `https://api.themoviedb.org/3`;
const IMGPATH = "https://image.tmdb.org/t/p/original";
const movie__section = document.getElementsByClassName("movie__section");
const apiPath = {
  fetchAllCetagoies: `${apiEndPoint}/genre/movie/list?api_key=${api_key}`,

  fetchMoviesList: `${apiEndPoint}/discover/movie/list?api_key=${api_key}`,

  fetchTrending: `${apiEndPoint}/trending/all/week?api_key=${api_key}&language=en-US`,

  fetchNetflixOriginals: `${apiEndPoint}/discover/tv?api_key=${api_key}&with networks=213`,

  fetchTopRated: `${apiEndPoint}/movie/top_rated?api_key=${api_key}&language=en-US`,

  fetchActionMovies: `${apiEndPoint}/discover/movie?api_key=${api_key}&with_genres=28`,

  fetchComedyMovies: `${apiEndPoint}/discover/movie?api_key=${api_key}&with_genres=35`,

  fetchHorrorMovies: `${apiEndPoint}/discover/movie?api_key=${api_key}with_genres=27`,

  fetchRomanceMovies: `${apiEndPoint}/discover/movie?api_key=${api_key}&with_genres-10749`,

  fetchDocumentaries: `${apiEndPoint}/discover/movie?api_key=${api_key}&with_genres=99`,
};

//! boots up data ::
const init = () => {
  fetchCategories();
  fetchTranding();
  fetchNetflixOriginals();
  fetchTopRated();
  fetchActionMovies();
};

//!  --------------Movies Categories----------------//
const fetchCategories = async () => {
  const response = await fetch(apiPath.fetchAllCetagoies);
  const data = await response.json();
  const categories = data.genres;
  if (Array.isArray(categories) && categories.length) {
    categories.forEach((fetchUrl, item) => {
      // moviesCategories(item);
    });
  }
};

// ! ------------------Tranding Data---------------//
const fetchTranding = async () => {
  const response = await fetch(apiPath.fetchTrending);
  const data = await response.json();
  const tranding = data.results;
  trandingData(tranding);
};

const trandingData = (tranding) => {
  const movieCont = document.getElementById("movies__container");
  const movieList = tranding
    .map((item) => {
      return `
            <img class="movie__postars" src="${IMGPATH}${item.backdrop_path}"/>
    `;
    })
    .join(" ");
  const movieSecHTML = `
      ${movieList}
`;
  const div = document.createElement("div");
  div.className = "movie__row";
  div.innerHTML = movieSecHTML;
  movieCont.append(div);
};

//! ------------FetchNetflixOriginals------------------//
const fetchNetflixOriginals = async () => {
  const response = await fetch(apiPath.fetchNetflixOriginals);
  const data = await response.json();
  NetflixOriginals(data.results);
};
const NetflixOriginals = (NetflixOriginals) => {
  const movieCont = document.getElementById("original__container");
  const NetflixOriginalsItem = NetflixOriginals.map((item) => {
    return `
    <img class="movie__postars" src="${IMGPATH}${item.backdrop_path}"/>
    `;
  }).join(" ");
  const SecHTML = `
  ${NetflixOriginalsItem}
  `;
  const original = document.createElement("div");
  original.className = "movie__row";
  original.innerHTML = SecHTML;
  movieCont.append(original);
};

// ! --------------------fetchTopRated----------------------- //
const fetchTopRated = async () => {
  const response = await fetch(apiPath.fetchTopRated);
  const data = await response.json();
  topRated(data.results);
};
const topRated = (topRated) => {
  const poster = topRated
    .map((item) => {
      return `
    <img class="movie__postars" src="${IMGPATH}${item.backdrop_path}"/>
    `;
    })
    .join(" ");
  const topRatedHTML = `
  ${poster}
  `;
  const fetchRated = document.getElementById("fetchTopRated");
  const topRatedcont = document.createElement("div");
  topRatedcont.className = "movie__row";
  topRatedcont.innerHTML = topRatedHTML;
  fetchRated.append(topRatedcont);
};

// ! --------------------fetchActionMovies----------------------- //
const fetchActionMovies = async () => {
  const response = await fetch(apiPath.fetchActionMovies);
  const data = await response.json();
  ActionMovies(data.results);
};
const ActionMovies = (ActionMovies) => {
  const actionData = ActionMovies.map((item) => {
    return `
    <img class="movie__postars" src="${IMGPATH}${item.backdrop_path}"/>
    `;
  }).join(" ");
  const actionHTML = `
  ${actionData}
  `;
  const ActionMovie = document.getElementById("fetchActionMovies");
  const actionDiv = document.createElement("div");
  actionDiv.className = "movie__row";
  actionDiv.innerHTML = actionHTML;
  ActionMovie.append(actionDiv);
};

// ! --------------------Loading Data----------------------- //
// ! --------------------Loading Data----------------------- //
// ! --------------------Loading Data----------------------- //
// ! --------------------Loading Data----------------------- //
window.addEventListener("load", () => {
  init();
});
// !  MAIN  ::
let loader = document.getElementById("preloader");
window.addEventListener("load", () => {
  setTimeout(() => {
    loader.style.display = "none";
  }, 500);
});
