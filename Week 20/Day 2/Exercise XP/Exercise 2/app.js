import {personDetails} from "C:/DI_Bootcamp/Week 20/Exercise XP/Exercise 2/Data/data.js";

//console.log(personDetails);

let calculatePersonAge = function()
{
    let sum = 0;
    for(let i = 0; i < personDetails.length; i++)
    {
       sum += personDetails[i].age;
    }
    let averageAge = (sum/personDetails.length);
    return averageAge;

    
    
}
  



console.log(calculatePersonAge());

