// api : https://api.weatherapi.com/v1/current.json?key=2b43ab6060474d4fb3742334230707&q=Mumbai&aqi=yes

let input_box = document.querySelector("#input-box");
let searchBtn = document.querySelector("#btn");
let weatherImg = document.querySelector("#weather-img");
let cityName = document.querySelector("#city");
let temprature = document.querySelector("#tem");
let description = document.querySelector("#description");
let humidity = document.querySelector("#humid");
let windSpeed = document.querySelector("#Wind");
let weather_body = document.querySelector(".weather-body")
const getWeatherData = async (e) =>{
    e.preventDefault();
    try{
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=2b43ab6060474d4fb3742334230707&q=${input_box.value}&aqi=yes`);
    
    const data = await response.json();
    // console.log(data)
    // weather body jo css file me display none kar rakhi thi usko js file ke throught data aane per show kiya hai...
    weather_body.style.display ="flex";

    const locationName = data.location.name;
    const locationTemp = data.current.temp_c + "°C";
    const locationDescrip = data.current.condition.text;
    const locationHumidity = data.current.humidity + "°C";
    const wind_speed = data.current.wind_kph + " " +"kph";
    const icon = data.current.condition.icon;
    
    cityName.innerText = locationName;
    temprature.innerText = locationTemp;
    description.innerText = locationDescrip;
    humidity.innerText = locationHumidity;
    windSpeed.innerText = wind_speed;
    weatherImg.setAttribute('src',icon);
    }
    catch{
        window.alert("Enter Valid City Name")
    }


}

searchBtn.addEventListener("click",getWeatherData);
