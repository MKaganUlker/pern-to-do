const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "wasd..0123456",
    host: "localhost",
    port: 5432,
    database: "perntodo"
});

module.exports = pool