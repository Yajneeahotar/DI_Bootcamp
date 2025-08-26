let radius = document.getElementById("radius");
let volume = document.getElementById("volume");
let submit = document.getElementById("submit");

submit.addEventListener("click", buttonName);

function buttonName()
{
    volume.value = ((4/3) * 3.14 * (radius.value * radius.value * radius.value)107);
    event.preventDefault();
}



