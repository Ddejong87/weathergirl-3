let now = new Date();
let h3 = document.querySelector("h3");
let hours = now.getHours();
let minutes = now.getMinutes();

let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
let day = weekdays[now.getDay()];

h3.innerHTML = `${day} ${hours}:${minutes}`;

function showTemperature(response) {
    console.log(response);
    let h1 = document.querySelector("h1");
    let temperature = Math.round(response.data.main.temp);
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = `${temperature}°C`;
    document.querySelector("#humidity").innerHTML = response.data.main.humidity;
    document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed);
}
function searchCity(city) {
    let apiKey = "bf1a450160d22fdfe731b236aa5f1569";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(showWeather);
}

function search(event) {
    event.preventDefault();
    let search = document.querySelector("#search-text-input");
    let Currentcity = document.querySelector();
}
function search(event) {
    event.preventDefault();
    let search-form = document.querySelector("#search-text-input");
    let city = document.querySelector("#city");
    city.innerHTML = `${city}`;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function searchLocation(position) {
    let apiKey = "bf1a450160d22fdfe731b236aa5f1569";
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${apiKey}`;
    axios.get(url).then(showWeather);
}
function currentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation)
}
let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

searchCity("Tilburg, the Netherlands");
