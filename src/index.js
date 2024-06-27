import generateJoke from "./generateJoke";
import "./style/style.scss";
import laughing from "./assets/laughing.svg";

const laughImg = document.getElementById("loughImage");
laughImg.src = laughing;

document.getElementById("jokeBtn").addEventListener("click", generateJoke); //button

// document.getElementById("joke").innerHTML = jokeResponse.data.joke;



