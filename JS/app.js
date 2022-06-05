let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  moscow: {
    temp: -5,
    humidity: 20,
  },
};
let city = prompt("Enter a city?");
city = city.trim().toLowerCase();
let cities = ["paris", "tokyo", "lisbon", "san francisco", "moscow"];
if (cities.includes(city)) {
  alert(
    `It is currently ${Math.round(weather[city].temp)}°C (${Math.ceil(
      weather[city].temp * (9 / 5) + 32
    )} °F)in ${city.toUpperCase()} with a humidity of ${
      weather[city].humidity
    }%`
  );
} else {
  alert(
    `Sorry we don't know weather for this city, try going to https://www.google.com/search?=weather+${city}`
  );
}
