let newFileName = 'Hello World.txt';
let fileContent = 'Hello World!!'

let newFileName2 = 'Bye World.txt';
let fileContent2 = 'Bye World!!'

//Implement the readFile function to read the content of a specified file using the fs module.
let readFile = function(fileName)
{
    const fs = require('fs');

    fs.readFile(fileName, 'utf-8', function (err, data) 
    {
        if (err) 
        {
            console.error(err)
            return
        }
        console.log(data);
    })
}



let writeFile = function(fileToCreate, contentToAdd)
{
    const fs = require('fs');

    fs.writeFile(fileToCreate,contentToAdd, function (err) 
    {
        if (err)
        { 
            console.log(err);
        }
            else
        {
            console.log('Write operation complete.');
        }
    })
}
writeFile(newFileName, fileContent);
writeFile(newFileName2, fileContent2);

readFile(newFileName);
readFile(newFileName2);

module.exports = {readFile, writeFile};

/*const fs = require('fs');


fs.appendFile(newFileName, fileContent + '\n', function (err) {
    if (err) {
        console.error(err)
        return
    }
});


fs.readFile(newFileName, 'utf-8', function (err, data) {
    if (err) {
        console.error(err)
        return
    }

    console.log(data)
});




fs.appendFile(newFileName2, fileContent2 + '\n', function (err) {
    if (err) {
        console.error(err)
        return
    }
});


fs.readFile(newFileName2, 'utf-8', function (err, data) {
    if (err) {
        console.error(err)
        return
    }

    console.log(data)
}); */