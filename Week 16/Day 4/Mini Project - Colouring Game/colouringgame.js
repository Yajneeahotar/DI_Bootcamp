let color;
let rightContainer;
let numberOfDivs;
let drawingPane;
let clearButton;
let colourPalette;
let drawingBox;

//Creating divs for the drawing pane on the right side - createElement()
rightContainer = document.getElementsByClassName("right_container");
console.log(rightContainer);

numberOfDivs = 4200;

for (let i = 0; i < numberOfDivs; i++) 
{
    drawingPane = document.createElement("div");
    drawingPane.className = 'drawing-pane'; 
    rightContainer[0].appendChild(drawingPane);
}

//Creating an event listener for the Cleaar button
clearButton = document.getElementsByTagName('button');
console.log(clearButton);

clearButton[0].addEventListener('click', buttonFunction);

function buttonFunction()
{
    for(let i = 0; i < drawingBox.length; i++)
    {
        drawingBox[i].style.backgroundColor = 'white';
    }
}

//Accessing div from the colour palette
colourPalette = document.getElementsByClassName('color-box');
//console.log(colourPalette[0]);

for(let i = 0; i < colourPalette.length; i++)
{
  colourPalette[i].addEventListener('click', colorBoxFunction);  
}

function colorBoxFunction(event)
{
    color = event.target.style.backgroundColor;
    console.log(color);
}

//Retrieve div class drawing pane
drawingBox = document.getElementsByClassName('drawing-pane');
console.log(drawingBox[0]);

//Add event listener click - create a function

for(let i = 0; i < drawingBox.length; i++)
{
  drawingBox[i].addEventListener('click', drawingBoxFunction);  
  drawingBox[i].addEventListener('mouseover', drawingBoxFunction);
}

function drawingBoxFunction(event)
{
    event.target.style.backgroundColor = color;
}





