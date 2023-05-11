const connection = require("./connection");

exports.formatCategories = (categories) => {
  return categories.map((category) => {
    return [category.category_name, category.description];
  });
};

exports.formatSnacks = (snacks, categories) => {
  return snacks.map(({ snack_name, description, price, category }) => {
    const correctCategory = categories.find((cat) => {
      return cat.category_name === category;
    });
    return [snack_name, description, price, correctCategory.category_id];
  });
};

exports.checkCategoryExists = (category) => {
  // if there is a category query...
  return connection
    .query("SELECT * FROM categories WHERE category_name = $1;", [category])
    .then((result) => {
      console.log(result.rows);
      if (result.rows.length === 0 && category) {
        return Promise.reject({ status: 404, msg: "category not found!" });
      }
      // otherwise... do nothing
    });
};
