const api_key = "239d3a45321204f077707a2deaae0b75";
const apiEndPoint = `https://api.themoviedb.org/3`;
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
  // console.log(item);
};
// ! Tranding Data ::
const fetchTranding = async () => {
  const response = await fetch(apiPath.fetchTrending);
  const data = await response.json();
  const tranding = data.results;
  if (Array.isArray(tranding) && tranding.length) {
    tranding.forEach((item) => {
      console.log(item);
      const err = `
        <div class="movie__row">
            <img
              class="movie__postars"
              src="${item.poster_path}"
              alt=""
            />
          </div>
      `;
    });
  }
};

// const trandingData = (item) => {
//   console.log(item);
//   const movieBox = document.createElement("div");
//   movieBox.classList.add = "movie__row";
//   movieBox.innerHTML = `
//             <img
//               class="movie__postars"

//               src="${item.backdrop_path}"
//               alt=""
//             />
//   `;
//   movie__section.appendChild(movieBox);
// };
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
