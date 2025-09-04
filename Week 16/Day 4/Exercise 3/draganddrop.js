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





















