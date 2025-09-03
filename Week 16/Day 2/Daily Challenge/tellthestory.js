let inputs;
let button;

inputs = document.getElementsByTagName('input');
//console.log(inputs[0].value);

button = document.getElementById('lib-button');
button.addEventListener('click', onClick);

function onClick(event)
{
    let inputValue;
    event.preventDefault();
   
    for(let i = 0; i < inputs.length; i++)
    {
        console.log(inputs[i].value);
        inputValue = (inputs[i].value);
    
        if (inputValue == "")
        {
            alert("Please fill in all the fields");
  
            return;
        }
    }   
    let story = document.getElementById('story');
    console.log(story);
    

    story.textContent = ("Today " + (inputs[2].value) + " " + "saw a gigantic" + " " + (inputs[0].value) + " " + (inputs[3].value) + 
                        " in the " + (inputs[4].value) + "." + "I ran and then found a " + (inputs[1].value) + " " + "umbrella." + "It was hilarious!");

}





