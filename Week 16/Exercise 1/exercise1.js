//Using a DOM property, retrieve the h1 and console.log it.
let element = document.getElementsByTagName("h1");
console.log(element);

//Using DOM methods, remove the last paragraph in the <article> tag.
let paragraphs = document.getElementsByTagName("p")[3];
console.log(paragraphs);
paragraphs.remove();

//Add an event listener which will change the background color of the h2 to red, when it’s clicked on.
let x = document.getElementsByTagName("h2")[0];
 x.addEventListener("click", RespondClick); 

 function RespondClick()
 {
    x.style.background = "red";
 }

 //Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
let y = document.getElementsByTagName("h3")[0];
y.addEventListener("click", changeDisplay); 

function changeDisplay()
{
   y.style.display = "none";
}

//Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
let z = document.getElementsByTagName("button")[0];
z.addEventListener("click", paraBold); 

function paraBold()
{

    let paragraphs = document.getElementsByTagName("p");
    for(let i = 0; i < paragraphs.length; i++)
    {
       paragraphs[i].style.fontWeight="bold";
    }
}



