const express = require('express');
const router = express.Router();
let bookList = [];
let bookID = 1;


//(Get all books)
router.get('/', (req,res) =>
{
    res.json(bookList);
});

//(Create a book with a JSON request body)
router.post('/', (req,res) =>
{
    const { bookName } = req.body;
    if (!bookName) 
    {
        return res.status(400).json({ error: 'Book name is required' });
    }

    const newBook = { id: bookID++, bookName };
    bookList.push(newBook);
    res.status(201).json(newBook);
})


//(Update a book by ID with a JSON request body)

router.put('/:id', (req, res) => {
  
  let amendedBook = bookList.find(book => book.id == req.params.id);
  
  if (!amendedBook) {
    return res.status(404).json({ error: 'Task not found' });
  }

  
  if (req.body.bookName) 
{
  amendedBook.bookName = req.body.bookName;
}

  res.json(amendedBook);
});

// Delete book
router.delete('/:id', (req, res) => 
{
  const idToDelete = req.params.id;

  const bookToDelete = bookList.find(book => book.id == idToDelete);
  if (!bookToDelete) 
    {
        return res.status(404).json({ error: 'Book not found' });
    }

  bookList = bookList.filter(book => book.id != idToDelete);

  res.json({ message: 'Deleted successfully', book: bookToDelete });
});

module.exports = router;



