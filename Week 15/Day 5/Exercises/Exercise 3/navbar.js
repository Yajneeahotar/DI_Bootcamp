//Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
let element = document.getElementById('navBar');
(element.setAttribute('id', 'socialNetworkNavigation'));
//console.log("New ID:", element.id);

console.log((element.hasAttribute('id')));
console.log((element.hasAttribute('class')));
//console.log((element.removeAttribute('id')));


//First, create a new <li> tag (use the createElement method).
let newList = document.createElement("li");
newList.innerHTML = "Logout";
document.getElementsByTagName("ul")[0].appendChild(newList);

//Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).
let element1 = document.getElementsByTagName("ul")[0];
console.log(element1);
console.log(element1.firstElementChild.textContent);
console.log(element1.lastElementChild.textContent);

