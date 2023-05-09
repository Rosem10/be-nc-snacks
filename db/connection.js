const { Pool } = require("pg");

const ENV = process.env.NODE_ENV || "development";

require("dotenv").config({
  path: `${__dirname}/../.env.${ENV}`
});

if (!process.env.PGDATABASE) {
  throw new Error("no database set");
}

const connection = new Pool();

module.exports = connection;
