let x=document.querySelector(".sea");

x.addEventListener("click",async function logMovies() {
    var c=document.querySelector("#inner");
    var inputValue = document.getElementById('search').value;
    var y=document.querySelector("#deg");
    var z=document.querySelector("#image")
    var a=document.getElementById("hum");
    var b=document.getElementById("wind");
    c.style.height="80%"
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=217f48d6b02e40a387540923240901&q=${inputValue}&aqi=no`);
    const movies = await response.json();
    y.innerHTML=`<span>${movies.current.temp_c}</span><sup>o</sup>c`
    z.src="https://"+movies.current.condition.icon
    z.alt=movies.current.condition.text
    console.log(movies.current.temp_c);
    a.innerHTML=`${movies.current.humidity}%`
    b.innerHTML=`${movies.current.wind_kph}Km/h`
    return movies;
  } 
);