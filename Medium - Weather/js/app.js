/*
MEDIUM: Using a weather API, fetch and display weather for Charlotte to a webpage that you create. The webpage that you use can either be a simple page that just shows the data you receive from the API, or you can integrate it with your personal website. You should display at a minimum temperature and sky conditions. This API: http://weathers.co/api is free, simple, and doesn't require an account to be created. You can browse other weather APIs here if you would like to use something else: https://www.programmableweb.com/category/weather/api.

MEDIUM (BONUS): Add an input field and button on your page that let's the user enter a city and update the weather to the city of their choosing. Handle errors if a user enters bad input.
*/

$(document).ready(getWeather);
$('#searchCity').on('click',getWeather);

function getWeather(){
  var city = $('#city').val()
  var url = 'https://weathers.co/api.php?city=' + city

  if(city){
    url = 'https://weathers.co/api.php?city=' + city
  }else{
    url = 'https://weathers.co/api.php?city=charlotte'
  }
  $.getJSON(url,function(data){
    // var weatherSpan = document.createElement('span');
    console.log(data);
    if(data.data.error){
      $("#report").html('');
      $("#report").html('<span>' + data.data.error + '</span>');
    }else{
      $("#report").html('');
      $("#report").prepend('<span>The current weather in ' + data.data.location + ' is ' + Math.round(((parseInt(data.data.temperature)*1.8)+32)) + ' degrees with a forecast of ' + (data.data.skytext).toLowerCase() + '.</span');
    }


    console.log(data);
  })
}
