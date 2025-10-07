const express = require('express');
const app = express();
let userList = require("./users.json");
let newUser ={};
const bcrypt = require('bcrypt');
const saltRounds = 10;

//Retrieving a list of all registered users from a JSON file
app.get('/api/users', (req, res) => 
{
    res.json (userList)
});

app.listen(5002, () => 
{
    console.log('Server is listening on port 5002');
});

//Retrieve a specific user by ID from the JSON file 
app.get("/api/users/:userID", (req, res) => 
{
  const id = Number(req.params.userID);
  const findUser = userList.find((user) => user.userID === id);

if (!findUser) 
{
    return res.status(404).json({ error: `User with ID ${id} not found.` });
}
  res.json(findUser);
 
});

//Update a user’s information by ID in the JSON file
app.use(express.json()); 

app.put("/api/users/:userID", (req, res) => 
{
  const id = Number(req.params.userID);
  const index = userList.findIndex((user) => user.userID === id);
  if (index === -1) {
    return res.status(404).send("User not found");
  }

  const updatedUser = 
  {
    userID: userList[index].userID,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    userName: req.body.userName,
    passWord: req.body.passWord    
  };
  userList[index] = updatedUser;
  

const fs = require('fs');
fs.writeFile('users.json', JSON.stringify(userList), function (err) 
{
    if (err) 
    {
        console.error(err)
        return
    }
});
res.status(200).json("User updated");
console.log('User saved');
});


app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.get('/register', (req, res) => {
    res.sendFile(__dirname + "/public/register.html");
})
app.get('/login', (req, res) => {
    res.sendFile(__dirname + "/public/login.html");
})

//Allow users to register by providing a username and password
app.post("/registered", (req, res) => 
{

  let hashedPassword;
  bcrypt.hash(req.body.password , saltRounds, (err, hash) => {
            if (err) 
            {
                // Handle error
            } else 
            {
              hashedPassword = hash;
                // Store the generated hash in the database
              console.log('Hashed password:', hash);
            }
        });
console.log("the hashed pwd is " + hashedPassword)
   newUser = 
  {
    userID: userList.length + 1,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    userName: req.body.userName,
    passWord: hashedPassword   
  };


  userList.push(newUser);
//res.status(201).json(newUser);
res.send('welcome, ' + req.body.firstName)


const fs = require('fs');
fs.writeFile('users.json', JSON.stringify(userList), function (err) {
    if (err) {
        console.error(err)
        return
    }
});
console.log('Hello Your account is now created');
});

//Allow users to login by providing their username and password.

app.get("/loggedin", (req, res) => 
{
 
  
  //res.status(201).json(newUser);

//console.log(req.query);

const username = req.query.userName;

  const index = userList.findIndex((user) => user.userName === username);
  if (index === -1) {
    return res.status(404).send("User not found");
  }

  const password = req.query.password;
  //console.log(typeof(password))
  console.log(req.query);
  //const indexpwd = userList.findIndex((user) => user.passWord === password);
  let userPassword = userList[index].passWord;

  console.log(userPassword)
  console.log(password)
  
  
  if (userPassword != password) {
    return res.status(404).send("Wrong password");
  }

  res.send('Hi ' + req.query.userName + ' welcome back again!')


});
