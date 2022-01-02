const knex = {
  client: "pg",
  connection: {
    host: "192.168.0.226",
    port: 5432,
    user: "wscada_user",
    password: "wscada_user_passess",
    database: "pg_test",
  },
};
module.exports = knex;
