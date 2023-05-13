 const inputbox= document.querySelector('.inputbox');
 const searchbtn=document.getElementById('searchbtn');
 let  weatherimg= document.querySelector('.weatherimg');
 const temperature=document.querySelector('.temperature');
 const description=document.querySelector('.description');
const humidity2=document.getElementById('humidity2');
const windspeed=document.getElementById('windspeed');
const locationnotfound=document.querySelector('.locationnotfound');
const weatherbody=document.querySelector('.weatherbody'); 



// Function to take the Location for which user wants the weather of

async function checkweather(city){
  const apikey="9f1cc04190182a14a813f912f695f688";
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
  const weatherdata= await fetch(`${url}`).then(response=>response.json());
 if(weatherdata.cod ==`404`){
  locationnotfound.style.display="flex";
  console.log("error")
  return;
 }

    temperature.innerHTML=`${Math.round(weatherdata.main.temp-273.15)}°C`;
    description.innerHTML=`${weatherdata.weather[0].description}`;
    humidity2.innerHTML=`${weatherdata.main.humidity}%`;
    windspeed.innerHTML=`${weatherdata.wind.speed}km/hr`;
    console.log(weatherdata)
  if(weatherdata.weather[0].main=== 'Clouds'){
       weatherimg.src ="cloud.png"
  }
  else if(weatherdata.weather[0].main === 'Clear Sky'){
    weatherimg.src ="clear.png"
  }
  else if(weatherdata.weather[0].main === 'Rain'){
    weatherimg.src ="rain.png"
  }
  else if(weatherdata.weather[0].main === 'Haze'){
    weatherimg.src ="humid.jpg"
  }
  else if(weatherdata.weather[0].main === 'Snow'){
    weatherimg.src ="snow.png"
  }
  else if(weatherdata.weather[0].main === 'Wind'){
    weatherimg.src ="mist.png"
  }
  
    
}

searchbtn.addEventListener('click',()=>{
    checkweather(inputbox.value);
})   