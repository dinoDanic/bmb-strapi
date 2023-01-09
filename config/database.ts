module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "localhost"),
      port: env.int("DATABASE_PORT", 5431),
      database: env("DATABASE_NAME", "dino"),
      user: env("DATABASE_USERNAME", "dino"),
      password: env("DATABASE_PASSWORD", ""),
      schema: env("DATABASE_SCHEMA", "public"), // Not required
    },
    debug: false,
  },
});
