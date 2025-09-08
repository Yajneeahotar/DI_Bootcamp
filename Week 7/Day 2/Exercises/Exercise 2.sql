CREATE TABLE students(
student_id SERIAL PRIMARY KEY,
last_name TEXT,
first_name TEXT,
birth_date DATE
)

INSERT INTO students (last_name, first_name,birth_date)
VALUES ('Benichou', 'Marc', '1998-11-02' )

INSERT INTO students (last_name, first_name,birth_date)
VALUES ('Cohen', 'Yoan', '2010-12-03' )

INSERT INTO students (last_name, first_name,birth_date)
VALUES ('Benichou', 'Lea', '1987-07-27' )

INSERT INTO students (last_name, first_name,birth_date)
VALUES ('Dux', 'Amelia', '1996-04-07' )

INSERT INTO students (last_name, first_name,birth_date)
VALUES ('Grez', 'David', '2003-06-14' )

INSERT INTO students (last_name, first_name,birth_date)
VALUES ('Simpson', 'Omer', '1980-10-03' )

--test
INSERT INTO students (last_name, first_name,birth_date)
VALUES ('Simpson', 'Omer', '1980-10-03' )
--test

SELECT * FROM students
SELECT first_name, last_name FROM students
SELECT first_name, last_name FROM students WHERE student_id=2
SELECT first_name, last_name FROM students WHERE last_name= 'Benichou' AND first_name= 'Marc'
SELECT first_name, last_name FROM students WHERE last_name= 'Benichou' OR first_name= 'Marc'
SELECT first_name, last_name FROM students WHERE first_name LIKE'%a%'
SELECT first_name, last_name FROM students WHERE first_name LIKE'a%'
SELECT first_name, last_name FROM students WHERE first_name LIKE'A%'
SELECT first_name, last_name FROM students WHERE first_name LIKE '%a'
SELECT * from students where SUBSTRING (first_name, LENGTH(first_name) - 1 , 1) = 'a'
SELECT first_name, last_name FROM students WHERE student_id IN (1, 3)
SELECT * FROM students WHERE birth_date >= '2000-01-01'

--Exercise XP Gold:
SELECT first_name, last_name, birth_date FROM students;

--Fetch the first four students. You have to order the four students alphabetically by last_name.
SELECT first_name, last_name, birth_date FROM students ORDER BY last_name ASC LIMIT 4;

--Fetch the details of the youngest student.
SELECT first_name, last_name, birth_date FROM students 
ORDER BY birth_date DESC LIMIT 1;

--Fetch three students skipping the first two students.
SELECT * FROM Students;
SELECT first_name, last_name, birth_date FROM students LIMIT 3 OFFSET 2;


--test
SELECT DISTINCT first_name FROM students;
SELECT * FROM students
SELECT * FROM students WHERE first_name in ('Marc','David');
SELECT * FROM students WHERE first_name not in ('Marc','David');
SELECT * FROM students WHERE birth_date between '1980-10-03' and '2000-01-01';


