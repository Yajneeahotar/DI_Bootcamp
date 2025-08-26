//Declare a global variable named allBoldItems.
var allBoldItems;

//Create a function called getBoldItems() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.
function getBoldItems()
{
    allBoldItems = document.getElementsByTagName('strong');
    for(let i = 0; i < allBoldItems.length; i++)
    {
       console.log(allBoldItems[i]);
    }
}

 //Create a function called highlight() that changes the color of all the bold text to blue.
 function  highlight()
 {
    for(let i = 0; i < allBoldItems.length; i++)
    {
       allBoldItems[i].style.color = 'blue';
    }
 }

//Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.
 function  returnItemsToDefault()
 {
    for(let i = 0; i < allBoldItems.length; i++)
    {
       allBoldItems[i].style.color = 'black';
    }
 }

 //Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function returnItemsToDefault() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example
getBoldItems();
let paragraphs = document.getElementsByTagName('p');
console.log(paragraphs[0]);
paragraphs[0].addEventListener("mouseover",highlight);
paragraphs[0].addEventListener("mouseout",returnItemsToDefault);

