-- Connect to database
\c nc_snacks;

-- Drop ALL tables
-- Opposite order to table creation
DROP TABLE IF EXISTS snacks;
DROP TABLE IF EXISTS categories;

-- Create tables
-- REFERENCED tables first, REFERENCING tables following
CREATE TABLE categories (
  category_id SERIAL PRIMARY KEY,
  category_name VARCHAR(50),
  category_description TEXT
);

CREATE TABLE snacks (
  snack_id SERIAL PRIMARY KEY,
  snack_name VARCHAR(30),
  snack_description TEXT,
  price INT,
  category_id INT REFERENCES categories(category_id)
);

-- Insert data
-- Same order as table creation
INSERT INTO categories
(category_name, category_description)
VALUES
('biscuit', 'aint biscuits brillaint'),
('chocolate bar', 'whats better than a biscuite ... chocolate'),
('drink', 'thirst quenching'),
('fruit', 'get your 7 a day in!');

INSERT INTO SNACKS
(snack_name, snack_description, price, category_id)
VALUES
('hobnobs', 'a delicious biscuit', '100', '1'),
('kitkat', 'is it really a chocloate bar?', '150', '2'),
('cola', 'fizzy good make feel nice', '120', '3'),
('water', 'a healthy option', '90', '3'),
('custard cream', 'un classique', '100', '1'),
('apple', 'one a day', '200', '4'),
('boost', 'the best chocolate bar', '120', '2');