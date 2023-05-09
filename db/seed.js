// Connect to database - already done in connection.js
const db = require('./connection');
const format = require('pg-format');
const { formatCategories, formatSnacks } = require('./utils');

function seed({ snacks, categories }) {
  // Drop ALL tables
  // Opposite order to table creation
  return db
    .query('DROP TABLE IF EXISTS snacks;')
    .then(() => {
      return db.query('DROP TABLE IF EXISTS categories;');
    })
    .then(() => {
      // Create tables
      // REFERENCED tables first, REFERENCING tables following
      return db.query(`
        CREATE TABLE categories (
          category_id SERIAL PRIMARY KEY,
          category_name VARCHAR(50),
          category_description TEXT
        );
      `);
    })
    .then(() => {
      return db.query(`
        CREATE TABLE snacks (
          snack_id SERIAL PRIMARY KEY,
          snack_name VARCHAR(30),
          snack_description TEXT,
          price INT,
          category_id INT REFERENCES categories(category_id)
        );
      `);
    })
    .then(() => {
      // Insert data
      // Same order as table creation
      const formattedCategories = formatCategories(categories);

      const queryString = format(
        `
        INSERT INTO categories
        (category_name, category_description)
        VALUES
        %L
        RETURNING *;
      `,
        formattedCategories
      );
      return db.query(queryString);
    })
    .then((result) => {
      const insertedCategories = result.rows;
      const formattedSnacks = formatSnacks(snacks, insertedCategories);

      const queryString = format(
        `
        INSERT INTO SNACKS
        (snack_name, snack_description, price, category_id)
        VALUES
        %L;
      `,
        formattedSnacks
      );
      return db.query(queryString);
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = seed;
