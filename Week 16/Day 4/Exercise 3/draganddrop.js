function onDragStart(event)
{
    event.dataTransfer.setData("text", event.target.id);
}

function dragoverHandler(event) 
{
  event.preventDefault();
}

function onDrop(event) 
{
  event.preventDefault();
  let data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
}

























/*function onDragStart(event)
{
    console.log("dragstart");
}
function onDrop(event)
{
    event.preventDefault();
    let imageDrop = document.getElementById('target');
    console.log(imageDrop);
    imageDrop.innerText = "Image Dropped";
    console.log("ondrag");
}
function dragoverHandler(event)
{
    event.preventDefault();
    console.log("dragover");
}*/