const inputBox=document.querySelector(".input-box");
const searchBtn=document.getElementById("searchBtn");
const weather_img=document.querySelector(".weather-img");
const temprature=document.querySelector(".temprature");
const description=document.querySelector(".description");
const humidity=document.getElementById("humidity");
const wind_speed=document.getElementById("wind-speed");
const weather_body=document.querySelector(".weather-body");

const location_not_found=document.querySelector(".location-not-found");

async function checkWeather(city){
    const api_key="c2bea21adb46b04adaed9f1ec5cdd96a";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data=await fetch(`${url}`)
    .then(response => response.json());
    console.log(weather_data);

    if(weather_data.cod==="404"){
        location_not_found.style.display="flex";
        weather_body.style.display="none";
        console.log("not found error");
        return;
    }
    location_not_found.style.display="none";
    weather_body.style.display="flex";
    temprature.innerHTML=`${Math.round(weather_data.main.temp-273.15)}°C`;
    description.innerHTML=`${(weather_data.weather[0].description)}`;
    
    if (humidity) {
        humidity.innerHTML=`${weather_data.main.humidity}%`;
    }
    if (wind_speed) {
        wind_speed.innerHTML=`${weather_data.wind.speed}Km/H`;
    }

    switch(weather_data.weather[0].main){
        case "Clouds":
            weather_img.src="images/suncloud.jpg";
            break;
        case "Clear":
            weather_img.src="images/sun.jpg";
            break;
        case "Rain":
            weather_img.src="images/raincloud.jpg";
            break;
        case "Mist":
            weather_img.src="images/celcis.jpg";
            break;
        case "Snow":
            weather_img.src="images/bluerain.jpg"; 
            break;
    }
}    

searchBtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
});
