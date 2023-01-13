module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "167.235.150.40"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "develop"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "Ruda,actv1"),
      // schema: env("DATABASE_SCHEMA", "public"), // Not required
    },
    debug: false,
  },
});
