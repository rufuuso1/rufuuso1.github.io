const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const day= 0; 
const hour= "18:00:00";
const d= new Date();
const todayDayNum = d.getDay();


//summary

const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5585010&appid=416c13fe86c73d1f7b9908b469e78f7f&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.getElementById('now').textContent = jsObject.list[0].weather[0].description;
    document.getElementById('courent').textContent = jsObject.list[0].main.temp;
    document.getElementById('hum').textContent = jsObject.list[0].main.humidity;
    document.getElementById('windSpeed').textContent = jsObject.list[0].wind.speed;
    // console.log(jsObject.list.time.includes('18:00:00'));
  

//five days forcast
let forecastDayNumber = todayDayNum;
for (i = 0; i < jsObject.list.length; i++) {

    if (jsObject.list[i].dt_txt.includes('18:00:00')){
        
        forecastDayNumber += 1;
        if (forecastDayNumber === 7){
            forecastDayNumber = 0;
        }
        let card = document.createElement('section');
        let h5 = document.createElement('h5');
        let p1 = document.createElement('p');
        let br = document.createElement('br');
        let image = document.createElement('img');
        h5.textContent = weekDay[forecastDayNumber];
        p1.textContent = jsObject.list[i].main.temp +  "\xB0";
        let iconPath= "https://openweathermap.org/img/w/" + jsObject.list[i].weather[0].icon + ".png";
        image.setAttribute('src', iconPath);
        image.setAttribute('alt', jsObject.list[i].weather[0].description)
        card.appendChild(h5);
        card.appendChild(image);
        card.appendChild(br)
        card.appendChild(p1);
        document.querySelector('div.days').appendChild(card);
            }
}});        
