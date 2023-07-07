const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const container = document.querySelector(".search__movie-postars");

// ! MenuBar Set up
const menuBar = () => {
  const showBar = document.getElementById("showBar");
  const closeBar = document.getElementById("closeBar");
  const navUl = document.getElementById("top");
  navUl.style.top = "0";
};
const closeBar = () => {
  const navUl = document.getElementById("top");
  navUl.style.top = "-100%";
};
const getApi = async (api) => {
  const response = await fetch(api);
  const data = await response.json();
  enterData(data.results);
};

const enterData = (data) => {
  container.innerHTML = "";

  data.forEach((item) => {
    const movieBox = document.createElement("div");
    movieBox.classList.add("moviesBox");

    movieBox.innerHTML = `
        <img  style="
        border-radius: 10px;
        width: 100%;
        object-fit: cover;
        border-radius: 15px;
        filter: brightness(110%);
        }
        
        
        " src="${IMGPATH + item.poster_path}">
        `;
    container.appendChild(movieBox);
  });
};

const searchBox = document.querySelector(".main__search");
searchBox.addEventListener("keyup", (event) => {
  if (event.target.value != "") {
    getApi(SEARCHAPI + event.target.value);
  } else {
    getApi(APIURL);
  }
});

// init call
getApi(APIURL);

const popular = async (APIURL) => {
  const response = await fetch(APIURL);
  const data = await response.json();
  console.log(fetchUrl, data);
};
popular(APIURL);

let loader = document.getElementById("preloader");
window.addEventListener("load", () => {
  setTimeout(() => {
    loader.style.display = "none";
  }, 500);
});
