const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokegenerator();
jokeBtn.addEventListener("click", jokegenerator);
function jokegenerator() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  fetch("https://icanhazdadjoke.com", config)
    .then((res) => res.json())
    .then((data) => {
      jokeEl.innerHTML = data.joke;
    });
}
