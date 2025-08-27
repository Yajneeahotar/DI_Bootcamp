-- Database: bootcamp

-- DROP DATABASE IF EXISTS bootcamp;

--CREATE DATABASE bootcamp
--    WITH
--    OWNER = postgres
--    ENCODING = 'UTF8'
--    LC_COLLATE = 'English_Mauritius.1252'
--    LC_CTYPE = 'English_Mauritius.1252'
--    LOCALE_PROVIDER = 'libc'
--    TABLESPACE = pg_default
--    CONNECTION LIMIT = -1
--    IS_TEMPLATE = False;

CREATE TABLE firsttab (
     id integer, 
     name VARCHAR(10) --stores text, but only up to 10 characters
)

INSERT INTO firsttab VALUES
(5,'Pawan'),
(6,'Sharlee'),
(7,'Krish'),
(NULL,'Avtaar')

SELECT * FROM firsttab

CREATE TABLE SecondTab (
    id integer 
)

INSERT INTO SecondTab VALUES
(5),
(NULL)

SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id not IN 
(SELECT id FROM SecondTab WHERE id IS NULL)
--0

SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN 
( SELECT id FROM SecondTab WHERE id = 5 )
--2

SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN 
( SELECT id FROM SecondTab )
--0

SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN 
( SELECT id FROM SecondTab WHERE id IS NOT NULL )
--2


