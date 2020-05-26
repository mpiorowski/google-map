// Update with your config settings.
//TODO: change into working ts config

export = {
  development: {
    client: "pg",
    connection: {
      host: "localhost",
      port: 5432,
      database: "server",
      user: "admin",
      password: "zaq1@WSX",
    },
    migrations: {
      tableName: "knex_migrations",
    },
    pool: { min: 0, max: 7 },
  },

  staging: {
    client: "pg",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "pg",
    connection: {
      host: "db",
      port: 5432,
      database: "server",
      user: "admin",
      password: "zaq1@WSX",
    },
    migrations: {
      tableName: "knex_migrations",
    },
    pool: { min: 0, max: 7 },
  },
};
