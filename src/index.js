import "./style/style.scss";
import Img from "./assets/laughing.svg";
import generateJoke from "./generateJoke";

const img = document.getElementById("img");
img.src = Img;

//activated event listener in generateJoke method
generateJoke();
