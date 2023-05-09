const seed = require('./seed');
const db = require('./connection');
const categories = require('./data/dev-data/categories');
const snacks = require('./data/dev-data/snacks');

seed({ categories, snacks }).then(() => {
  console.log(`Database ${process.env.PGDATABASE} seeded`);
  return db.end();
});
