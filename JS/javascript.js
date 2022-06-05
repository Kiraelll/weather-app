let now = new Date();
let date = document.querySelector("#current-date");
let days = [
  "Sunday",
  "Monday",
  "Tusday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
date.innerHTML = `${day}`;
let time = document.querySelector("#current-time");
let hours = now.getUTCHours();
let minutes = now.getUTCMinutes();
time.innerHTML = `${hours}:${minutes}`;

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let h1 = document.querySelector("h1");
  let city = `${searchInput.value}`;
  h1.innerHTML = city;
  let apiKey = "a65639754880304ce961a06a55d37ed0";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;

  function showTemperature(response) {
    console.log(response.data);
    let temperature = Math.round(response.data.main.temp);
    let currentCityTemperature = document.querySelector("#temperature");
    currentCityTemperature.innerHTML = `${temperature}`;
    let weather = response.data.weather[0].main;
    let currentWeather = document.querySelector("#current-weather");
    currentWeather.innerHTML = `${weather}`;
    let humidity = response.data.main.humidity;
    let currentHumidity = document.querySelector("#humidity");
    currentHumidity.innerHTML = `${humidity}`;
    let wind = response.data.wind.speed;
    let currentWind = document.querySelector("#wind");
    currentWind.innerHTML = `${wind}`;
  }
  axios.get(`${apiUrl}`).then(showTemperature);
}
let form = document.querySelector("#input-form");
form.addEventListener("click", search);
form.addEventListener("submit", search);

function showWeather(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;

  let apiKey = "a65639754880304ce961a06a55d37ed0";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

  function showCurrentTemperature(response) {
    console.log(response.data);
    let cityName = response.data.name;
    let currentCity = document.querySelector("h1");
    currentCity.innerHTML = `${cityName}`;
    let temperature = Math.round(response.data.main.temp);
    let currentCityTemperature = document.querySelector("#temperature");
    currentCityTemperature.innerHTML = `${temperature}`;
    let weather = response.data.weather[0].main;
    let currentWeather = document.querySelector("#current-weather");
    currentWeather.innerHTML = `${weather}`;
    let humidity = response.data.main.humidity;
    let currentHumidity = document.querySelector("#humidity");
    currentHumidity.innerHTML = `${humidity}`;
    let wind = response.data.wind.speed;
    let currentWind = document.querySelector("#wind");
    currentWind.innerHTML = `${wind}`;
  }
  axios.get(`${apiUrl}`).then(showCurrentTemperature);
}

function getCity() {
  navigator.geolocation.getCurrentPosition(showWeather);
}

let currentButton = document.querySelector("#current-button");
currentButton.addEventListener("click", getCity);

//let temp = document.querySelector("#temperature");
//let celsius = Number(temp.textContent);

//function inCelsius(event) {
// event.preventDefault();
//temp.innerHTML = `${celsius}`;
//}
//let celsiusLink = document.querySelector("#celsius");
//celsiusLink.addEventListener("click", inCelsius);

//function inFahrenheit(event) {
//event.preventDefault();
//temp.innerHTML = `${celsius * (9 / 5) + 32}`;
//}
//let fahrenheitLink = document.querySelector("#fahrenheit");
//fahrenheitLink.addEventListener("click", inFahrenheit);
