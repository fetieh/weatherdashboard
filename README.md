# Weather Dashboard

This is a Weather Dashboard web application that allows users to check the current and future weather conditions for multiple cities.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

The Weather Dashboard provides an intuitive interface for travelers to plan their trips by viewing the weather outlook for various cities. It uses the OpenWeatherMap API to retrieve weather data and localStorage for storing persistent data such as search history.

## Features

- **Search Form:** Users can enter a city name to view current and future weather conditions.

- **City History:** A list of most commonly searched cities is displayed below the search button.

- **Current Weather Display:** The current weather conditions include the city name, date, weather icon, temperature, humidity, and wind speed.

- **5-Day Forecast:** A 5-day forecast is provided, showing the date, weather icon, temperature, and humidity for each day.

## Getting Started

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/weather-dashboard.git
    cd weather-dashboard
    ```

2. Obtain an API key from [OpenWeatherMap](https://openweathermap.org/) and replace `YOUR_API_KEY` in the `script.js` file.

3. Open the `index.html` file in your preferred web browser.

## Usage

1. Enter a city name in the search form and click the "Search" button.

2. View the current weather conditions for the entered city, including the 5-day forecast.

3. The search history is displayed below the search button for quick access to commonly searched cities.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/new-feature`)
3. Make changes and commit them (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a pull request

## License

This project is licensed under the [MIT License](LICENSE).
