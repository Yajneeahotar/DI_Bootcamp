//Create an array which value is the planets of the solar system
let planets = ['Mercury','Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
console.log(planets);
let newDiv;
let newClass;
let planetList = document.querySelector('.listPlanets');


//A loop to create a div using createElement, add a class using setAttribute
for(let i = 0; i < planets.length; i++) 
{
  newDiv = document.createElement("div");
  newDiv.textContent = planets[i];
  planetList.appendChild(newDiv);
  newDiv.setAttribute('class', 'planet');


    if (planets[i] == 'Mercury')
    {
        newDiv.style.backgroundColor = 'grey';
    }

    if (planets[i] == 'Venus')
    {
        newDiv.style.backgroundColor = 'brown';
    }

    if (planets[i] == 'Earth')
    {
        newDiv.style.backgroundColor = 'brown';
    }

    if (planets[i] == 'Mars')
    {
        newDiv.style.backgroundColor = ' red';
    }

    if (planets[i] == 'Jupiter')
    {
        newDiv.style.backgroundColor = 'yellow';
    }

    if (planets[i] == 'Saturn')
    {
        newDiv.style.backgroundColor = 'blue';
    }

    if (planets[i] == 'Uranus')
    {
        newDiv.style.backgroundColor = 'white';
    }

    if (planets[i] == 'Neptune')
    {
        newDiv.style.backgroundColor = 'pink';
    }
} 







