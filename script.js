const apiKey = '900d770ed9d618c3198f58f668f062c7';
const city = document.getElementById("city");
const country = document.getElementById("country");
const temp = document.getElementById("temp");
const description = document.getElementById("description");
const city_name = document.getElementById("city-name");
const btn = document.getElementById("submit");
const btn_close = document.getElementById("close");
const container = document.querySelector(".container");
const input_container = document.querySelector(".input-container");

btn.addEventListener('click', () =>{
  container.style.display = "flex";
  input_container.style.display = "none";
  getWeatherData();
});

btn_close.addEventListener('click', () =>{
  container.style.display = "none";
  input_container.style.display = "flex";
});

async function getWeatherData() {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city_name.value}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        city.textContent = data.name;
        temp.textContent = `${data.main.temp}°C`;
        country.textContent = `,${data.sys.country}`;
        description.textContent = data.weather[0].description;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

