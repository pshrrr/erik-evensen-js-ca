const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id;

if (params.has("id")) {
  id = params.get("id");
} else {
  document.location.href = "/";
}

const baseUrl = "https://official-joke-api.appspot.com/jokes/";
const jokeUrl = `${baseUrl}random`;

fetch(jokeUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    createDetails(json);
  })
  .catch(function (error) {
    console.dir(error);
    document.querySelector(".navbar-brand").innerText = "error";
  });
function createDetails(data) {
  console.dir(data);
  const heading = document.querySelector("h1");
  heading.innerHTML = data.type;
  const setup = document.querySelector(".value1");
  setup.innerHTML = data.setup;
  const punchline = document.querySelector(".value2");
  punchline.innerHTML = data.punchline;

  document.title = data.setup + " RANDOMIZED " + document.title;
}

/* Chosen API does not include any way of getting specific jokes as all API-calls are randomized.So id ithe querystring will always be randomiozed.
 * LINK TO API DOCUMENTATION ** https://github.com/15Dkatz/official_joke_api/blob/master/index.js **/
