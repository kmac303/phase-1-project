//Searches the TV Maze API
function searchShows(query) {
  const site = `http://api.tvmaze.com/search/shows?q=${query}`;
  fetch(site)
  .then(response => response.json())
  .then((data) => {
    const results = data.map(tvShows => tvShows.show.name);
    displayResults(results);
  })
}

//Shows results in a list
function displayResults(results) {
  const list = document.getElementById("output");
  list.innerHTML = "";
  results.forEach(showName => {
    const element = document.createElement("li");
    element.innerText = showName;
    list.appendChild(element);
  });
}  

//Shows text above the input field when the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById(`text`).textContent = "Search by Name of Any TV Show:";
  });

//Runs when the "Search" button is clicked
const form = document.getElementById('test');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const category = document.getElementById('category');
  searchShows(category.value);
})

//Logs what is being typed in the console
const categoryField = document.getElementById('category');
categoryField.addEventListener("change", (e) => {
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

//prevents the submit button from refreshing the page when clicked
// document.addEventListener("DOMContentLoaded", () => {
//   document.querySelector('form').addEventListener('submit', (e) => {
//     e.preventDefault()
//     console.log(e.target.value);
//   })
// })