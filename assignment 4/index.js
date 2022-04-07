// Background video speed
document.querySelector("video").playbackRate = 1.3;
document.querySelector("video").play();
// search bar
const getsearch = document.getElementById("search");
const results = document.getElementById("results");
let search_term = "";
// clear the list
const showList = () => {
  results.innerHTML = "";
  // fillter function by title and year
  movies
    .filter((movie) => {
      return (
        movie.title.toLowerCase().includes(search_term) ||
        movie.year.toLowerCase().includes(search_term)
      );
    })
    .forEach((e) => {
      let example = "https://www.imdb.com/title/";
      let exampleHref = example + e.imdbID;

      const liS = document.createElement("li");
      const tag = document.createElement("a");

      tag.setAttribute("href", exampleHref);
      tag.target = "_blank";

      const img = document.createElement("img");
      img.src = e.poster;
      const getUl = document.querySelector("ul");

      const cool = liS.appendChild(tag);
      const cool2 = tag.appendChild(img);
      const cool1 = getUl.appendChild(liS);
    });
};

showList();

// addEventListener for the search bar
getsearch.addEventListener("input", (event) => {
  search_term = event.target.value.toLowerCase();
  showList();
});
// create all imdbID and poster

const createIdAndPoster = (coolsed, imgs) => {
  for (let index = 0; index < coolsed.length; index++) {
    let example = "https://www.imdb.com/title/";
    let exampleHref = example + coolsed[index];

    const liS = document.createElement("li");
    const tag = document.createElement("a");

    tag.setAttribute("href", exampleHref);
    tag.target = "_blank";

    const img = document.createElement("img");
    img.src = imgs[index];
    const getUl = document.querySelector("ul");

    const cool = liS.appendChild(tag);
    const cool2 = tag.appendChild(img);
    const cool1 = getUl.appendChild(liS);
  }
};
// map all imdbid and poster
const allMovies = () => {
  const mapGetNewMovies = movies.map((movie) => movie.imdbID);
  const mapGetNewMovies1 = movies.map((movie) => movie.poster);

  createIdAndPoster(mapGetNewMovies, mapGetNewMovies1);
};
allMovies();

// clear the showlist
const deleteAll = (movieThatYouFillter) => {
  const fast = document.querySelector("#movie-display ul");

  fast.innerHTML = "";
};
const deleteAndRemake = (movieThatYouFillter, imgs) => {
  deleteAll();
  createIdAndPoster(movieThatYouFillter, imgs);
};
// radio addEventListener fillters maps
if (document.querySelector('input[name="contract_duration"]')) {
  document
    .querySelectorAll('input[name="contract_duration"]')
    .forEach((elem) => {
      elem.addEventListener("change", function (event) {
        let item = event.target.value;
        if (item === "All-movies") {
          deleteAll();
          allMovies();
        } else if (item === "New-movies") {
          const getNewMovies = movies.filter((movie) => movie.year >= 2014);
          const mapGetNewMovies = getNewMovies.map((movie) => movie.imdbID);
          const mapGetNewMovies1 = getNewMovies.map((movie) => movie.poster);
          console.log(mapGetNewMovies1);

          deleteAndRemake(mapGetNewMovies, mapGetNewMovies1);
        } else if (item === "Avengers") {
          const getAvenger = movies.filter((movie) =>
            movie.title.includes("Avengers")
          );
          const mapGetAvenger = getAvenger.map((movie) => movie.imdbID);

          const mapGetAvenger1 = getAvenger.map((movie) => movie.poster);

          deleteAndRemake(mapGetAvenger, mapGetAvenger1);
        } else if (item === "X-Men") {
          const getXMen = movies.filter((movie) =>
            movie.title.includes("X-Men")
          );
          const mapgetXMen = getXMen.map((movie) => movie.imdbID);
          const mapgetXMen1 = getXMen.map((movie) => movie.poster);

          deleteAndRemake(mapgetXMen, mapgetXMen1);
          // }
        } else if (item === "Princess") {
          const getPrincess = movies.filter((movie) =>
            movie.title.includes("Princess")
          );
          const mapPrincess = getPrincess.map((movie) => movie.imdbID);
          const mapPrincess1 = getPrincess.map((movie) => movie.poster);

          deleteAndRemake(mapPrincess, mapPrincess1);
          // }
        } else if (item === "Batman") {
          const getBatman = movies.filter((movie) =>
            movie.title.includes("Batman")
          );
          const mapBatman = getBatman.map((movie) => movie.imdbID);
          const mapBatman1 = getBatman.map((movie) => movie.poster);

          deleteAndRemake(mapBatman, mapBatman1);
        }
      });
    });
}
