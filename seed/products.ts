const { query } = require("strapi-utils");

module.exports = {
  async seed(params) {
    await query("categories", "categories").create({
      name: "newuser",
      created_by_id: 1,
      updated_by_id: 1,
    });
  },
};
