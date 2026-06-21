const button = document.getElementById('search-btn');
const input = document.getElementById('cityInput');
const city = document.getElementById('city-name');
const temperature = document.getElementById('temperature');
const time = document.getElementById('localtime');

async function getWeather(cityName){
  const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=b22403f333f740df966135223260502&q=${cityName}&aqi=yes
`);
return await response.json();
}

button.addEventListener("click", async()=>{
   const value = input.value;
   if(!value){
   alert("Please enter a city name.");
    return;
   }
   try{
   const weatherData = await getWeather(value);

    if (weatherData.error) {
      error.innerText = weatherData.error.message;
      city.innerText = "";
      time.innerText = "";
      temp.innerText = "";
      return;
    }
    
   city.innerText = `${weatherData.location.name},${weatherData.location.region}, ${weatherData.location.country}`;
   time.innerText = `Local Time: ${weatherData.location.localtime}`;
   temperature.innerText = `Temperature: ${weatherData.current.temp_c} °C`;
    }catch(error){
    alert("Error fetching weather data. Please try again.");
    }
})


