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
