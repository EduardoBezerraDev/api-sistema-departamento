var knex = require("knex")({
    client: "pg",
    connection: {
        database: "system",
        user: "postgres",
        password: "8522323893",
    },
});
module.exports = knex;