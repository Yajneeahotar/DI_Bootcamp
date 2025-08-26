//Add the code above, to your HTML file
let containerName = document.getElementById("container").innerHTML;
console.log(containerName);

//Change the name “Pete” to “Richard”.
let originalList =  document.getElementsByTagName ('ul');
console.log(originalList[0].textContent);

let changedList = originalList[0].children[1].textContent = 'Richard'
console.log(changedList);

//Delete the <li> that contains the text node “Sarah”. (It’s the second <li> of the second <ul>)
originalList[1].children[1].remove();
console.log(originalList[1].textContent);

//Change each first name of the two <ul>'s to your name. (Hint : use a loop)
console.log(originalList[0].children[0].textContent);
console.log(originalList[1].children[0].textContent);

//originalList[0].children[0].textContent = 'Yajnee';
//originalList[1].children[0].textContent = 'Yajnee';

//console.log(originalList.length);

for(let i = 0; i < originalList.length; i++)
{
    originalList[i].children[0].textContent = 'Yajnee';

}



/*for (let i of elements)
{
    console.log(i);
    if(i.innerHTML == "Pete")
    {
        i.innerHTML = "Richard";
        console.log(i.innerHTML);         
    }
    if(i.innerHTML == 'Sarah')
    {
        i.remove();
    }
}*/

//for()
//if(i.innerHTML == 'John' || i.innerHTML == 'David')
   



    