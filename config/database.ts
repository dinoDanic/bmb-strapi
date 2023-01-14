module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "DATABASE_HOST"),
      port: env.int("DATABASE_PORT", "DATABASE_PORT"),
      database: env("DATABASE_NAME", "DATABASE_NAME"),
      user: env("DATABASE_USERNAME", "DATABASE_USERNAME"),
      password: env("DATABASE_PASSWORD", "DATABASE_PASSWORD"),
    },
    debug: false,
  },
});
