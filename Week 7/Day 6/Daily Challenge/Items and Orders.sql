CREATE TABLE product_orders (
  order_id serial PRIMARY KEY,
  order_date DATE 
);
SELECT * FROM product_orders

CREATE TABLE items (
  item_id serial PRIMARY KEY,
  item_name VARCHAR,
  stock_qty INTEGER,
  price MONEY,
  id INTEGER,
  FOREIGN KEY (id) REFERENCES product_orders(order_id)
);
SELECT * FROM items
