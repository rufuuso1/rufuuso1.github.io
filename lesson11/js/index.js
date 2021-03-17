

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
  
    const towns = jsonObject['towns'];
    for (let i = 0; i <= 6 ; i++ ) {
        if (i==0 || i==6 || i==2) {
            

            let card = document.createElement('section');
            
            let h2 = document.createElement('h2');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let p4 = document.createElement('p');
            let image = document.createElement('img');
            let info = document.createElement('div');

            h2.textContent = towns[i].name;
            p1.textContent = towns[i].motto;

            p2.textContent = "Year Founded: "+towns[i].yearFounded;
            p3.textContent ="Population: "+ towns[i].currentPopulation;
            p4.textContent ="Annual Rain Fall: " + towns[i].averageRainfall;
            image.setAttribute('src','img/' + towns[i].photo);
            image.setAttribute('alt', towns[i].name)

            info.setAttribute('class', 'info');
            card.setAttribute('class', 'cards');


            info.appendChild(h2);
            info.appendChild(p1);
            info.appendChild(p2);
            info.appendChild(p3);
            info.appendChild(p4);

            
            card.appendChild(info);
            card.appendChild(image);


            document.querySelector('div.towns').appendChild(card);
        }}
       
  });

 
