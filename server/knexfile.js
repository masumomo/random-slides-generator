module.exports = {
  client: "pg",
  connection:
    process.env.DATABASE_URL ||
    `postgres://${process.env.USER}@127.0.0.1:5432/random_slides_generator`,
  searchPath: "public",
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "./migrations"
  },
  seeds: {
    directory: "./seeds"
  }
};
