const txt = document.getElementById("text");
const category = document.getElementById("category");
const shows = document.getElementById("shows");

//Searches the TV Maze API
function searchShows(query) {
  const site = `http://api.tvmaze.com/search/shows?q=${query}`;
  fetch(site)
  .then(response => response.json())
  .then((data) => {
    shows.innerHTML = '';
    
    const results = data.filter(tvShow => {
      if ((tvShow.show.network) === null) {
        return false;
      }
      if ((tvShow.show.url) === null) {
        return false;
      }
      if ((tvShow.show.image) === null) {
        return false;
      }
      return true;
    })
    .forEach(el => {
      const img = el.show.image.medium;
      const name = el.show.name;
      const ntwrk = el.show.network.name;
      const url = el.show.url;
      const li = document.createElement("li");
      li.innerText = name + " -  " + ntwrk + " - " + url;
      let showImg = document.createElement("img")
      showImg.src = img;
      shows.append(li, showImg);
    }
    )
  })
}

// //Shows text above the input field when the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    txt.textContent = "Search for any TV Show";
  }); 

//Runs when the "Search" button is clicked
const form = document.getElementById('test');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // const category = document.getElementById('category');
  searchShows(category.value);
})

//Logs what is being typed in the console
category.addEventListener("change", (e) => {
  console.log(e.target.value);
});

//Function that adds the Dark Mode CSS configuration
function darkMode() {
  let element = document.body;
  element.classList.add("dark-mode");
}

//Function that removes the Dark Mode CSS configuration (Light Mode is loaded by default)
function lightMode() {
  let element = document.body;
  element.classList.remove("dark-mode");
}
