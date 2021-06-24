let button = document.querySelector(".search_button");
let name = document.querySelector(".card__title");
let gender = document.querySelector(".card__gender");
let height = document.querySelector(".card__height");
let mass = document.querySelector(".card__mass");
let homeWorld = document.querySelector(".card__homeplanet");
let eyeColor = document.getElementsByClassName("eye-color-indicator");
let form = document.querySelector(".search")
let input = document.querySelector(".input")
let ApiUrl = "https://swapi.dev/api/people/";


async function fetchData() {
  let input = document.querySelector(".input").value;
  const data = await fetch(ApiUrl + input)
    .then((response) => response.json());
  const planet = await fetch(data.homeworld)
    .then((response) => response.json());
  updateCard(data, planet);
}

function updateCard(data, planet) {
  name.innerText = data.name;
  gender.innerText = `Пол: ${data.gender}`;
  height.innerText = `Рост: ${data.height} см`;
  mass.innerText = `Вес: ${data.mass} кг`;
  homeWorld.innerText = `Родная планета: ${planet.name}`;
  for (var i = 0; i < eyeColor.length;  i++) {
    eyeColor[i].setAttribute("style", `background-color: ${data.eye_color}`);
    }

}

button.addEventListener("click", fetchData);
