const key = "3c4b2582d54a0ab46846d47006c67387";
let data;
let city = "Mumbai";

const weatherData = async (city, key) => {
  try {
    let res = await fetch(
      ` https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${city}&appid=${key}`
    );
    data = await res.json(); // Await the JSON response
    console.log(data);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};
weatherData(city, key);

const getValue = () => {
  let val = document.getElementById("city-input");
  city = val.value;
  weatherData(city, key);
};
