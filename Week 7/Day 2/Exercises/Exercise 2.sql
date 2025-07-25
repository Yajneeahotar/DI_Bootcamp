-- Database: bootcamp

-- DROP DATABASE IF EXISTS bootcamp;

-- CREATE DATABASE bootcamp
--    WITH
--    OWNER = postgres
--    ENCODING = 'UTF8'
--    LC_COLLATE = 'English_Mauritius.1252'
--    LC_CTYPE = 'English_Mauritius.1252'
--    LOCALE_PROVIDER = 'libc'
--    TABLESPACE = pg_default
--    CONNECTION LIMIT = -1
--    IS_TEMPLATE = False;

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

