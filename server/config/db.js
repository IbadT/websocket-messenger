require('dotenv').config();
const {Pool} = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "messanger",
    password: "postgres",
    port: 5432
});

module.exports = pool;