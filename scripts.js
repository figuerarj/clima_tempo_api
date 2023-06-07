const key = "1562a8c142ef4944f71d2543961d6236";

function placeDataOnHtml(data) {
  document.querySelector(".city").innerHTML = `Temperatura em ${data.name}`;
  document.querySelector(".temp").innerHTML =
    Math.floor(data.main.temp) + "º C";
  document.querySelector(".climate").innerHTML = data.weather[0].description;
  /*weather[0].toUpperCase() + weather.substr(1);*/
  const iconcode = data.weather[0].icon;
  console.log(iconcode);
  const urlicon = "icons/" + iconcode + ".png";
  document.querySelector(".img-temp").src = urlicon;
  document.querySelector(
    ".info-hum"
  ).innerHTML = `Umidade: ${data.main.humidity}%`;
}

async function getData(city) {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
  ).then((answer) => answer.json());

  placeDataOnHtml(data);
}

function getNameCity() {
  const city = document.querySelector(".input-city").value;

  getData(city);
}
