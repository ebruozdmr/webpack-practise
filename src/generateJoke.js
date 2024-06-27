import axios from "axios";

//helper method
const generateJoke = () => {
  document.getElementById("btn").addEventListener("click", async () => {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    try {
      const response = await axios.get("https://icanhazdadjoke.com", config);
      console.log(response.data.joke);
      document.getElementById("joke").innerHTML = response.data.joke;
    } catch (error) {
      console.error(error);
    }
  });
};

export default generateJoke;
