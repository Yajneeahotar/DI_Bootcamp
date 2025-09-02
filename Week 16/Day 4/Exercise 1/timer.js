var counter = 0;

//In your Javascript file, using setTimeout, call a function after 2 seconds.
//The function will alert “Hello World”.
function sayHello(phrase) 
{
  alert(phrase);
}
setTimeout(sayHello, 2000, "Hello"); 

//In your Javascript file, using setTimeout, call a function after 2 seconds.
//The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
function helloWorld() 
{
  let container = document.getElementById('container');
  let newParagraph = document.createElement('p');
  newParagraph.textContent = 'Hello World';
  console.log(container.appendChild(newParagraph));

  counter++;
  console.log(counter);

  if(counter == 5)
  {
    myStopFunction(); 
  }
}
setTimeout(helloWorld, 2000); 

//In your Javascript file, using setInterval, call a function every 2 seconds.
//The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
let timer = setInterval(helloWorld, 2000);

//The interval will be cleared (ie. clearInterval), when the user will click on the button.
function myStopFunction() 
{
  clearInterval(timer);
}

//Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.
console.log(container);
//console.log(newParagraph);

let paragraphList = document.getElementsByTagName('p');
//console.log(paragraphList.length);






