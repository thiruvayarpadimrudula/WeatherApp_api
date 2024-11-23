# WeatherApp_api

## Description
The Weather App is a simple web application that allows users to check the current weather conditions for any city. It uses the OpenWeatherMap API to fetch real-time weather data and displays the temperature, humidity, wind speed, and an appropriate weather icon.

---

## Features
- Search for weather data by city name.
- Displays:
  - Current temperature (in °C).
  - Humidity percentage.
  - Wind speed (in km/h).
  - Weather conditions with an appropriate icon.
- Error handling for invalid city names.

---

## Technologies Used
- **HTML**: For the structure of the application.
- **CSS**: For styling and creating a responsive, visually appealing design.
- **JavaScript**: For fetching and displaying weather data dynamically.
- **OpenWeatherMap API**: To retrieve real-time weather data.

---

## Installation

### Prerequisites
- A web browser (e.g., Chrome, Firefox).
- An internet connection.

### Steps
1. Clone the repository or download the project files.
   ```bash
   git clone https://github.com/your-repo/weather-app.git
   ```
2. Navigate to the project folder.
   ```bash
   cd weather-app
   ```
3. Replace the placeholder `apikey` in `script.js` with your OpenWeatherMap API key.
4. Open the `index.html` file in a web browser to use the app.

---

## Usage
1. Enter the name of the city in the search bar.
2. Click the search button to fetch weather details.
3. View the temperature, humidity, wind speed, and weather icon.
4. If the city name is invalid, an error message will be displayed.

---

## Project Structure
```plaintext
weather-app/
│
├── index.html        # Main HTML file.
├── style.css         # Styling for the application.
├── script.js         # JavaScript file for app logic and API calls.
├── clouds.png
├── cloudwithsun.png
├── humidity.png
├── rainy.png
├── search.png
├── snow.png
├── wind.png
└── README.md         # Documentation for the project.
```

---

## API Reference
The app uses the [OpenWeatherMap API](https://openweathermap.org/current) to fetch weather data.

### Example API Request
```plaintext
GET https://api.openweathermap.org/data/2.5/weather?units=metric&q={city}&appid={apikey}
```

### Response Fields Used:
- `name`: City name.
- `main.temp`: Temperature in °C.
- `main.humidity`: Humidity in percentage.
- `wind.speed`: Wind speed in km/h.
- `weather[0].main`: Weather condition (e.g., Clouds, Clear, Rain, Snow).

---

## Acknowledgments
- **OpenWeatherMap API** for providing the weather data.
- **Icons8** or similar services for weather icons.

---
