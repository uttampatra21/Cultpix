const api_key = "239d3a45321204f077707a2deaae0b75";
const apiEndPoint = `https://api.themoviedb.org/3`;
const IMGPATH = "https://image.tmdb.org/t/p/original";
const movie__section = document.getElementsByClassName("movie__section");
const apiPath = {
  fetchAllCetagoies: `${apiEndPoint}/genre/movie/list?api_key=${api_key}`,

  fetchMoviesList: (id) =>
    `${apiEndPoint}/discover/movie/list?api_key=${api_key}&with_genres=${id}`,

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
};

//!  Movies Categories ::
const fetchCategories = async () => {
  const response = await fetch(apiPath.fetchAllCetagoies);
  const data = await response.json();
  const categories = data.genres;
  if (Array.isArray(categories) && categories.length) {
    categories.forEach((item) => {
      moviesCategories(item);
    });
  }
};
const moviesCategories = (item) => {
  console.log(item);
};

// ! Tranding Data ::
const fetchTranding = async () => {
  const response = await fetch(apiPath.fetchTrending);
  const data = await response.json();
  const tranding = data.results;
  trandingData(tranding);

  // if (Array.isArray(tranding) && tranding.length) {
  //   tranding.forEach((item) => {
  //     trandingData(item);
  //     console.table(item);
  //   });
  // }
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
  // console.log(movieSecHTML);
  const div = document.createElement("div");
  div.className = "movie__row";
  div.innerHTML = movieSecHTML;
  // ! Append HTML in div ::
  movieCont.append(div);
};
// !  Loading Data ::
window.addEventListener("load", () => {
  init();
});
// !  Loading ::
let loader = document.getElementById("preloader");
window.addEventListener("load", () => {
  setTimeout(() => {
    loader.style.display = "none";
  }, 500);
});
