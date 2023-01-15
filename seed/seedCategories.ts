const categories = require("../data/categories.json");
import { Strapi } from "@strapi/strapi";

export const seedCategories = async (strapi: Strapi) => {
  const data = categories[2].data;

  const deleteAll = async () => {
    await strapi.db.query("api::category.category").deleteMany({
      where: {
        id: {
          $null: false,
        },
      },
    });
  };

  const clearProductsSeq = async () => {
    //@ts-ignore
    await strapi.db.connection.raw(
      `SELECT setval('categories_id_seq', 1, false);`
    );
  };

  const create = async (data: any) => {
    await strapi.db.query("api::category.category").create({
      data,
    });
  };

  const unwanted = [33, 34, 35, 56, 60, 63, 66, 78, 80, 81, 82, 89];

  const filterUnWanted = data.filter(
    (category) => !unwanted.includes(Number(category.category_id))
  );

  const converted = filterUnWanted.map((category) => {
    return {
      id: Number(category["category_id"]),
      name: category["name_hr-HR"],
      category_parent_id: category["category_parent_id"],
      created_by_id: 1,
    };
  });

  const createAll = async () => {
    converted.forEach(async (category) => {
      await create(category);
    });
  };

  await deleteAll();
  await clearProductsSeq();
  await createAll();
};
