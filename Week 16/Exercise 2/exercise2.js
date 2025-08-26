//Retrieve the form and console.log it.
let form = document.querySelector('form');
console.log(form.innerHTML);

//Retrieve the inputs by their id and console.log them.
let fName = document.getElementById("fname");
console.log(fName);

let lName = document.getElementById("lname");
console.log(lName);

let submit = document.getElementById("submit");
console.log(submit);

//Retrieve the inputs by their name attribute and console.log them.
let firstName = document.getElementsByName("firstname");
console.log(firstName);

let lastName = document.getElementsByName("lastname");
console.log(lastName);

let submit1 = document.getElementsByName("submit");
console.log(submit1);

//When the user submits the form (ie. submit event listener)
//use event.preventDefault(), why ?
//Answer: The preventDefault() method prevents further propagation of an event through the DOM.

//get the values of the input tags,
submit.addEventListener("click", buttonName);

function buttonName()
{
    event.preventDefault();
    console.log(fName.value);
    console.log(lName.value);

    //create an li per input value,
    //then append them to a the <ul class="usersAnswer"></ul>, below the form.
    let newTag = document.createElement("li");
    newTag.innerHTML = fName.value;
    document.getElementsByTagName("ul")[0].appendChild(newTag);

    let newTag1 = document.createElement("li");
    newTag1.innerHTML = lName.value;
    document.getElementsByTagName("ul")[0].appendChild(newTag1);    
}




