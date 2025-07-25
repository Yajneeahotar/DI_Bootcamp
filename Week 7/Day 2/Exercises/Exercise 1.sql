-- Database: public

-- DROP DATABASE IF EXISTS public;

--CREATE DATABASE public
--    WITH
--    OWNER = postgres
--    ENCODING = 'UTF8'
--    LC_CTYPE = 'English_Mauritius.1252'
--    LOCALE_PROVIDER = 'libc'
--    TABLESPACE = pg_default
--    CONNECTION LIMIT = -1
--    IS_TEMPLATE = False;
CREATE TABLE items(
Item_id SERIAL PRIMARY KEY,
Description TEXT,
Price smallint
)
INSERT INTO items (Description,Price)
VALUES ('Small Desk', 100)


INSERT INTO items (Description,Price)
VALUES ('Large Desk', 300)


INSERT INTO items (Description,Price)
VALUES ('Fan', 80)

DELETE FROM items
WHERE price = 32000 AND description = 'Fan';
UPDATE items
SET item_id = 3
WHERE item_id = 4;

CREATE TABLE customers(
Customer_id SERIAL PRIMARY KEY,
"First Name" TEXT,
"Last Name" TEXT
)
ALTER TABLE customers
RENAME COLUMN "Last Name" to last_name;
ALTER TABLE customers
RENAME COLUMN "First Name" to first_name;

INSERT INTO customers (first_name,last_name)
VALUES ('Greg', 'Jones')

INSERT INTO customers (first_name,last_name)
VALUES ('Sandra', 'Jones')

INSERT INTO customers (first_name,last_name)
VALUES ('Scott', 'Scott')

INSERT INTO customers (first_name,last_name)
VALUES ('Trevor', 'Green')

INSERT INTO customers (first_name,last_name)
VALUES ('Melanie', 'Johnson')


SELECT * FROM items;
SELECT * FROM customers;
SELECT * FROM items WHERE (Price>80)
SELECT * FROM items WHERE (Price<300)

SELECT * FROM customers WHERE ("Last Name"='Smith')
SELECT * FROM customers WHERE ("Last Name"='Jones')
SELECT * FROM customers WHERE ("First Name"<>'Scott')