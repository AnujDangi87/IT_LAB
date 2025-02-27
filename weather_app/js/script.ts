import axios from "axios"; 
 
// Define API response type 
interface WeatherResponse { 
    main: { 
        temp: number; 
        humidity: number; 
    }; 
    weather: { description: string }[]; 
    name: string; 
} 
 
// Select DOM elements 
const cityInput = document.getElementById("city-input") as 
HTMLInputElement; 
const fetchWeatherBtn = document.getElementById("fetch-weather") as 
HTMLButtonElement; 
const weatherDataDiv = document.getElementById("weather-data") as 
HTMLDivElement; 
 
// API Key & URL 
const API_KEY = "c7a2743e2c8db250c4f994ad2cf13813"; 
const API_URL = "https://api.openweathermap.org/data/2.5/weather"; 
 
// Fetch Weather Data 
const getWeather = async (city: string): Promise<void> => { 
    try { 
        const response = await 
axios.get<WeatherResponse>(`${API_URL}?q=${city}&units=metric&appid=${
 API_KEY}`); 
        displayWeather(response.data); 
    } catch (error) { 
        weatherDataDiv.innerHTML = `<p style="color:red;">City not 
found. Please try again.</p>`; 
    } 
}; 
 
// Display Weather Data 
const displayWeather = (data: WeatherResponse) => { 
    weatherDataDiv.innerHTML = ` 
        <h2>Weather in ${data.name}</h2> 
        <p>Temperature: ${data.main.temp}°C</p> 
        <p>Humidity: ${data.main.humidity}%</p> 
        <p>Condition: ${data.weather[0].description}</p> 
    `; 
}; 
// Event Listener 
fetchWeatherBtn.addEventListener("click", () => { 
const city = cityInput.value.trim(); 
if (city) { 
getWeather(city); 
} else { 
weatherDataDiv.innerHTML = `<p style="color:red;">Please enter 
a city name.</p>`; 
} 
});