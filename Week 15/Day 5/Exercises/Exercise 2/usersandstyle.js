//Add a “light blue” background color and some padding to the <div>.
let  element = document.getElementsByTagName('div');
//console.log(element[0].textContent);
element[0].style.background = 'lightblue';
element[0].style.padding = '10px';

//Do not display the <li> that contains the text node “John”. (the first <li> of the <ul>)
let names = document.getElementsByTagName('li');
//console.log(names[0].textContent);
names[0].style.visibility = "hidden";

//Add a border to the <li> that contains the text node “Pete”. (the second <li> of the <ul>)
console.log(names[1].textContent);
names[1].style.border = '2px solid red';

//Change the font size of the whole body.
let allElements = document.body.style.fontSize = "x-large";