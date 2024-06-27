import axios from "axios";
const generateJoke = async () => {
  const config = {
    /* response gets as a json type  */
    headers: {
      Accept: "application/json",
    },
  };
  /* try bloğu, hata üretebilecek kodları içerir. 
  Bu blok içerisindeki kodlar normal bir şekilde çalıştırılmaya başlar. 
  Eğer bu blok içerisinde çalışan bir kod parçası hata üretirse, hata anında try bloğunun geri kalan kısmı atlanır ve direkt olarak catch bloğuna geçilir. */
  try {
    const response = await axios.get("https://icanhazdadjoke.com", config);
    console.log(response);
    document.getElementById("joke").innerHTML = response.data.joke;
  } catch (err) {
    /* catch bloğu, try bloğunda bir hata oluştuğunda çalıştırılan bloktur.  */
    console.error(err);
    document.getElementById("joke").innerHTML = "There is no joke!";
  }
};

export default generateJoke;
