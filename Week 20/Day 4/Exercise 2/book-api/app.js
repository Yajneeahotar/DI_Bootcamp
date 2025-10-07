const express = require('express');
const app = express();
let bookList = require("./book.json");
let newBook = {};

//GET method to retrieve all books from book.json
app.get('/api/books', (req, res) => 
{
    res.json (bookList)
});

//GET method to retrieve a specific book by its ID
app.get('/api/books/:bookID', (req, res) => 
{
  const id = Number(req.params.bookID);
  const findBook = bookList.find((book) => book.bookID === id);

    if (!findBook) 
    {
        res.status(404).send(`Book not found`);
    } else 
    {
        res.json(findBook);
    }
});

app.listen(5000, () => 
{
    console.log('server is listening on port 5000');
});

//POST method to create a new book
app.use(express.json());

app.post("/api/books", (req, res) => 
{
   newBook = 
  {
    bookID: bookList.length + 1,
    title: req.body.title,
    author: req.body.author,
    publishedYear: req.body.publishedYear
  };
  bookList.push(newBook);
  res.status(201).json(newBook);


const fs = require('fs');
fs.writeFile('book.json', JSON.stringify(bookList), function (err) 
{
    if (err) 
    {
        console.error(err)
        return
    }
});
console.log('Book saved');
});