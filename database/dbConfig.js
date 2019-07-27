const knex = require("knex");
require("dotenv").config();

const db = process.env.DB_ENV || "development"; // Setup for deployment
const knexConfig = require("../knexfile.js")[db]; // Assignment

module.exports = knex(knexConfig);
