fetch("https://official-joke-api.appspot.com/jokes/ten")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    createJokes(data);
  })
  .catch((error) => {
    console.error("Error:", error);
    document.querySelector(".navbar-brand").innerText = "error";
  });
function createJokes(data) {
  console.log(data);
  const jokeContainer = document.querySelector(".joke-container");

  let html = "";

  for (let i = 0; i < data.length; i++) {
    html += `<div class="col-sm-6 col-md-4 col-lg-3">
      <div class="card">
          <div class="details">
              <h4 class="name"><p> Type of Joke:<p>${data[i].type}</h4>
              <p><b>Setup:</b> ${data[i].setup}</p>
              <p><b>Punchline:</b> ${data[i].punchline}</p>
              <a class="btn btn-primary" href="details.html?id=${data[i].id}">Details</a>
          </div>
      </div>
  </div>`;
  }
  jokeContainer.innerHTML = html;
}
