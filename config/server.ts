export default ({ env }) => ({
  host: env("HOST", "HOST"),
  port: env.int("PORT", "PORT"),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
