const connection = require("../db/connection.js");

exports.selectSnacks = (sort_by = "snack_name", category) => {
  const validSortQueries = ["snack_name", "price"];
  if (!validSortQueries.includes(sort_by)) {
    return Promise.reject({ status: 400, msg: "invalid sort query!" });
  }
  let queryStr = `
    SELECT snacks.*, category_name FROM snacks
    JOIN categories ON categories.category_id = snacks.category_id
  `;
  const queryValues = [];
  if (category) {
    queryStr += ` WHERE category_name = $1`;
    queryValues.push(category);
  }
  queryStr += ` ORDER BY ${sort_by};`;
  return connection.query(queryStr, queryValues).then((result) => {
    return result.rows;
  });
};

exports.selectSnackById = (snack_id) => {
  return connection
    .query(`SELECT * FROM snacks WHERE snack_id = $1`, [snack_id])
    .then((result) => {
      if (result.rows.length === 0) {
        return Promise.reject({ status: 404, msg: "not found!" });
      }
      return result.rows[0];
    });
};

exports.createSnack = (newSnack) => {
  const { snack_name, snack_description, price, category_id } = newSnack;
  return connection
    .query(
      `
    INSERT INTO snacks
    (snack_name, snack_description, price, category_id)
    VALUES
    ($1, $2, $3, $4)
    RETURNING *;
  `,
      [snack_name, snack_description, price, category_id]
    )
    .then((result) => {
      return result.rows[0];
    });
};
