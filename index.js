function loadREST() {
  fetch('https://api.publicapis.org/entries')
  .then(function(response){
    return response.json();
    console.log(response);
  })
  .then(function(entries){
     let html = "";

     entries.forEach(function(category){
      html += `
        <li>
          <a href="${entries.Category}
          ">View API</a>
          ${entries.API}
        </li>
        `;
     })
   })
}



document.addEventListener("DOMContentLoaded", function() {
    document.getElementById(`text`).textContent = "Search for an API by Category Below";
  });


document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e)
  })
})

  function darkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
  }