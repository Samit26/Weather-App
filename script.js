const key = "3c4b2582d54a0ab46846d47006c67387";
let data;
let city = "Mumbai";
const tempId1 = "temperature";
const tempId2 = "temp1";
const tempId3 = "temp2";
const tempId4 = "temp3";
const tempId5 = "temp4";
const tempId6 = "temp5";
const time1 = "time1";
const time2 = "time2";
const time3 = "time3";
const time4 = "time4";
const time5 = "time5";
const time6 = "time6";
const time7 = "time7";
const logoId1 = "logo1";
const logoId2 = "logo2";
const logoId3 = "logo3";
const logoId4 = "logo4";
const logoId5 = "logo5";

const weatherData = async (city, key) => {
  if (city != "") {
    try {
      let res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric`
      );
      data = await res.json();
      console.log(data);
      // setDate(data, 0);
      setLocation(data.city.name);
      setCondition(data.list[0].weather[0].main);
      setTemp(data.list[0].main.temp, tempId1);
      setTemp(data.list[1].main.temp, tempId2);
      setTemp(data.list[2].main.temp, tempId3);
      setTemp(data.list[3].main.temp, tempId4);
      setTemp(data.list[4].main.temp, tempId5);
      setTemp(data.list[5].main.temp, tempId6);
      setDate(data.list[1].dt, time1);
      setDate(data.list[2].dt, time2);
      setDate(data.list[3].dt, time3);
      setDate(data.list[4].dt, time4);
      setDate(data.list[5].dt, time5);
      setDate(data.city.sunrise, time6);
      setDate(data.city.sunset, time7);
      setLogo(data.list[1].weather[0].icon, logoId1);
      setLogo(data.list[2].weather[0].icon, logoId2);
      setLogo(data.list[3].weather[0].icon, logoId3);
      setLogo(data.list[4].weather[0].icon, logoId4);
      setLogo(data.list[5].weather[0].icon, logoId5);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  } else {
    console.log("City is null");
  }
};
// weatherData(city, key);

const getValue = () => {
  let val = document.getElementById("city-input");
  city = val.value;
  weatherData(city, key);
};

const setDate = (data, timeId) => {
  const unixTimestamp = data;

  const date = new Date(unixTimestamp * 1000);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear()).slice(-2);
  const formattedDate = `${day}/${month}/${year}`;

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const formattedTime = `${hours}:${minutes}`;

  //   console.log(`Date: ${formattedDate}`);
  //   console.log(`Time: ${formattedTime}`);
  const time = document.getElementById(timeId);
  time.innerText = formattedTime;
};

const setLocation = (city) => {
  const location1 = document.getElementById("location");
  location1.innerText = city;
};
setLocation(city);

const setTemp = (temp1, tempId) => {
  const temp2 = parseInt(temp1);
  const temp = document.getElementById(tempId);
  temp.innerText = `${temp2}°C`;
};

const setCondition = (data) => {
  const condition = document.getElementById("condition");
  condition.innerText = data;
};

const setLogo = (logo, logoId) => {
  const div = document.getElementById(logoId);
  div.style.backgroundImage = `url(https://openweathermap.org/img/wn/${logo}@2x.png)`;
};
