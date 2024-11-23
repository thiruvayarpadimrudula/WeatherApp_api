const apikey = "dec42bfc2761d4e690942468387021b6";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    try {
        const response = await fetch(apiurl + city + `&appid=${apikey}`);
        
        if (response.status === 404) {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        } else {
            const data = await response.json();
            console.log(data);
            
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
            
            // Set appropriate weather icon based on weather condition
            if (data.weather[0].main === "Clouds") {
                weathericon.src = "clouds.png";
            } else if (data.weather[0].main === "Clear") {
                weathericon.src = "cloudwithsun.png";
            } else if (data.weather[0].main === "Rain") {
                weathericon.src = "rainy.png";
            } else if (data.weather[0].main === "Snow") {
                weathericon.src = "snow.png";
            }
            
            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
        }
    } catch (error) {
        console.error("Error fetching the weather data:", error);
    }
}

searchbtn.addEventListener("click", () => {
    const city = searchbox.value.trim();
    if (city) {
        checkWeather(city);
    }
});
