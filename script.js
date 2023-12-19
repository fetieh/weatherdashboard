const apiKey = 'dbde979bd11d36ead8079e42229433dc';
const baseURL = 'https://api.openweathermap.org/data/2.5/forecast';

const cityForm = document.getElementById('city-form');
const cityInput = document.getElementById('city-input');
const weatherContainer = document.getElementById('weather-container');

cityForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const cityName = cityInput.value;
    getWeatherData(cityName);
});

function getWeatherData(cityName) {
  M
}

function displayWeatherData(weatherData) {
    
}
