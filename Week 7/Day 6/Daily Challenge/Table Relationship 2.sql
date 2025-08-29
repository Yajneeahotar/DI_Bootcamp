--Create a table named Book, with the columns : book_id SERIAL PRIMARY KEY, title NOT NULL, author NOT NULL
CREATE TABLE Book (
  book_id SERIAL PRIMARY KEY,
  title VARCHAR(50)NOT NULL ,
  author VARCHAR(50) NOT NULL
);
SELECT * from Book

--Insert books :
INSERT INTO Book (title , author) 
VALUES
('Alice In Wonderland','Lewis Carroll'),
('Harry Potter','J.K Rowling'),
('To kill a mockingbird','Harper Lee')

CREATE TABLE Student (
  student_id SERIAL PRIMARY KEY,
  name VARCHAR(50)NOT NULL UNIQUE,
  age INTEGER NOT NULL,  
  check ( age  <= 15 )

);

INSERT INTO Student ( name , age) 
VALUES
('John','12'),
('Lera','11'),
('Patrick','10'),
('Bob','14')

SELECT * FROM Student

CREATE TABLE Student (
  student_id SERIAL PRIMARY KEY,
  name VARCHAR(50)NOT NULL UNIQUE,
  age INTEGER NOT NULL,  
  check ( age  <= 15 )
);

--Create a table named Library, with the columns
CREATE TABLE Library (
  book_fk_id SERIAL,
  student_fk_id SERIAL,
  borrowed_date DATE,
  FOREIGN KEY (book_fk_id) REFERENCES Book (book_id)  ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (student_fk_id) REFERENCES Student (Student_id)  ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO Library ( book_fk_id , student_fk_id, borrowed_date ) 
VALUES
((SELECT  book_id from book WHERE title='Alice In Wonderland'),(SELECT  student_id from Student WHERE name='John'), '15/02/2022'),
((SELECT  book_id from book WHERE title='To kill a mockingbird'),(SELECT  student_id from Student WHERE name='Bob'), '03/03/2021'),
((SELECT  book_id from book WHERE title='Alice In Wonderland'),(SELECT  student_id from Student WHERE name='Lera'), '23/05/2021'),
((SELECT  book_id from book WHERE title='Harry Potter'),(SELECT  student_id from Student WHERE name='Bob'), '12/08/2021')



--Display the data
SELECT * FROM Library

SELECT student.student_id,student.name, library.borrowed_date
FROM Library
INNER JOIN student
ON library.student_fk_id = student.student_id;

SELECT *
FROM Library
INNER JOIN Book
ON library.book_fk_id = book.book_id;

SELECT student.name, book.title
FROM Library
INNER JOIN student
ON library.student_fk_id = student.student_id
INNER JOIN Book
ON library.book_fk_id = book.book_id

SELECT AVG(age)
FROM Library
INNER JOIN student
ON library.student_fk_id = student.student_id
INNER JOIN Book
ON library.book_fk_id = book.book_id
where book.title = 'Alice In Wonderland'

DELETE FROM Student 
WHERE name = 'John';
Select * FROM Library
--Delete a student from the Student table, what happened in the junction table ?
-- The record of John has been deleted in the Library table