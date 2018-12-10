
//Weather data

// var weather;
// var api = 'https://api.openweathermap.org/data/2.5/weather?q=';
// var city = 'London';
// var apikey = '&APPID=7d4bd8d275acf1140cd5432d602ebf68';
// var units = '&units=metric';
// var url = api + city + apikey + units;

function getWeather(){

    var cityname = document.querySelector('.text').value;

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&APPID=7d4bd8d275acf1140cd5432d602ebf68&units=metric`)
.then(result => {
    console.log(result);
    return result.json();
})
.then(data=>{
    console.log(`Today's Temperatures in ${data.name} is ${data.main.temp} and the temparature 
    is between ${data.main.temp_min} - ${data.main.temp_max}` );
})
.catch(error=> {
    console.log(error);
});

}