//const { readFile } = require("fs");
let filemanager = require("./filemanager.js");

//console.log(filemanager.readFile, filemanager.writeFile);
let newFileName = 'Hello World.txt';
let fileContent = 'Hello World!!'

let newFileName2 = 'Bye World.txt';
let fileContent2 = 'Bye World!!'

//reading Hello World.txt
filemanager.readFile(newFileName);

//changing content of Bye World to 'Writing to the file'
const fs = require('fs');
fs.appendFile(newFileName2, 'Writing to the file' + '\n', function (err) 
{
    if (err) 
    {
        console.error(err)
        return
    }
});
filemanager.readFile(newFileName2);