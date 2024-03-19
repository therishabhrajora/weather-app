const result = document.querySelector(".result"),
    searchbtn = document.querySelector(".search-btn"),
    cityName = document.querySelector("input"),
    notfound=document.querySelector(".not-found"),
    weatherinfo=document.querySelector(".weather-info");

let getWeather = () => {
    let cityvalue = cityName.value;
    if (cityvalue.length == 0) {
        result.innerHTML=`<p class=msg> Please enter a city name</p>`
    }
    else {
        notfound.style.display="none";
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&appid=${key}&units=metric`;
        cityName.value="";
        fetch(url)
            .then(
                (resp) => resp.json()
            )
            .then(
                (data) => {
                    console.log(data)
                    result.innerHTML = `<h2 class="city-name">${data.name}</h2> 
                    <p class="description">${data.weather[0].description}</p>
                    <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
                    <p class="temp">${data.main.temp}&#176;</p>
                    <div class="div-min-max">
                    <div class="div-min">
                    <span class="min">min</span>
                        <span class="min">${data.main.temp_min}&#176;</span>
                    </div>
                    <div class="div-max">
                        <span class="max">max</span>
                        <span class="max">${data.main.temp_max}&#176;</span>
                    </div>`;
                }
            )
            .catch(() => {
                result.innerHTML = `<h3>City not found</h3>`;
            })
    }
};

searchbtn.addEventListener("click",getWeather);
window.addEventListener("load", getWeather);