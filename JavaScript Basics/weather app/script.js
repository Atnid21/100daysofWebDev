const button = document.getElementById("search-button");
const input = document.getElementById("city-input");

const city = document.getElementById("city-name");
const cityTime = document.getElementById("city-time")
const cityTemp = document.getElementById("city-temp");


async function getData(cityName){
   const promise =  await fetch(
        `http://api.weatherapi.com/v1/current.json?key=e6f97b78687c400bac8170316232911&q=${cityName}&aqi=yes`
    );

    return await promise.json();
}



button.addEventListener("click",async ()=>{
    const value = input.value;
   const result = await getData(value);
    city.innerText =`${result.location.name},${result.location.region} - ${result.location.country}`;

    cityTime.innerHTML = `${result.location.localtime}`;

    cityTemp.innerHTML = `${result.current.temp_c}`
})


// http://api.weatherapi.com/v1/current.json?key=e6f97b78687c400bac8170316232911&q=London&aqi=yes