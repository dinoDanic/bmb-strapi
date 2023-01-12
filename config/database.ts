module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "135.181.214.24"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "brunobmb_develop"),
      user: env("DATABASE_USERNAME", "brunobmb_dino"),
      password: env("DATABASE_PASSWORD", "Ruda,actv1"),
      // schema: env("DATABASE_SCHEMA", "public"), // Not required
    },
    debug: false,
  },
});
