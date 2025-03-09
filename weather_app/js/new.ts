
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY =  "c7a2743e2c8db250c4f994ad2cf13813";

var cityInput = document.getElementById("city-input") as HTMLInputElement;
var fetchWeatherBtn = document.getElementById("fetch-weather") as HTMLButtonElement;
var weatherDataDiv = document.getElementById("weather-data") as HTMLDivElement;
var time = document.getElementById("time") as HTMLElement;

setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  time.innerHTML=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
}

const getWeather = async (city : String) => { 
    try{
        let response = await fetch(`${API_URL}?q=${city}&units=metric&appid=${API_KEY}`);
        let data = await response.json();
        displayWeather(data);
    }
    catch(error)
    {
        weatherDataDiv.innerHTML = `<p style="color:red;">City not found. Please try again.</p>`;
        console.error("Error : "+error);
    }
        
        // .then(Response => Response.json())
        // .then(data => displayWeather(data))
        // .catch(err => {console.error(err);
        // weatherDataDiv.innerHTML = `<p style="color:red;">City not found. Please try again.</p>`;})
}; 
const displayWeather = (data:any) => { 
    weatherDataDiv.innerHTML = ` 
        <h2>Weather in ${data.name}</h2> 
        <p>Temperature: ${data.main.temp}°C</p> 
        <p>Humidity: ${data.main.humidity}%</p> 
        <p>Condition: ${data.weather[0].description}</p> 
    `; 
};

fetchWeatherBtn.addEventListener("click", () => { 
    const city = cityInput.value.trim(); 
    if (city) { 
    getWeather(city); 
    } else { 
    weatherDataDiv.innerHTML = `<p style="color:red;">Please enter 
    a city name.</p>`; 
    } 
    });