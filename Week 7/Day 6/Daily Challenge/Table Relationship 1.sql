--Create 2 tables : Customer and Customer profile. They have a One to One relationship.
CREATE TABLE Customer (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(15) ,
  last_name  VARCHAR(15) 
);

SELECT * FROM Customer

CREATE TABLE Customer_profile (
  id SERIAL PRIMARY KEY,
  isLoggedIn BOOLEAN DEFAULT false ,
  customer_id INTEGER,
  FOREIGN KEY (customer_id) REFERENCES Customer(id)
);

SELECT * FROM Customer_profile

--Insert those customers
INSERT INTO Customer (first_name, last_name) 
VALUES
('John','Doe'),
('Jerome','Lalu'),
('Lea','Rive')

--Insert those customer profiles, use subqueries
INSERT INTO  Customer_profile (isLoggedIn,customer_id)
VALUES 
(True, (SELECT id from Customer WHERE first_name='John')),
(False,(SELECT id from Customer WHERE first_name='Jerome'))

--Use the relevant types of Joins to display:
SELECT Customer.first_name
FROM Customer
INNER JOIN Customer_profile
ON Customer.id = Customer_profile.customer_id
WHERE isLoggedIn = True

SELECT first_name, isLoggedIn
FROM Customer
LEFT JOIN Customer_profile
ON Customer.id = Customer_profile.customer_id

SELECT COUNT(first_name),isLoggedIn
FROM Customer
INNER JOIN Customer_profile
ON Customer.id = Customer_profile.customer_id
GROUP BY isLoggedIn 
HAVING isLoggedIn = False





