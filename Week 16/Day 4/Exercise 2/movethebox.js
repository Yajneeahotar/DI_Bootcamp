//In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.

function myMove()
{
    let id;
    let animate = document.getElementById("animate");   
    let position = 0;
    //clearInterval(id);
    id = setInterval(frame, 5);

    function frame()
    {
        if(position == 350)
        {
            clearInterval(id);
        }
        else
        {
            position++;
            animate.style.left = position + "px"; 
        }
    }

}





