const products = require("../data/products.json");

import { Strapi } from "@strapi/strapi";

export const seedProducts = async (strapi: Strapi) => {
  const data = products[2].data;

  const deleteAll = async () => {
    await strapi.db.query("api::product.product").deleteMany({
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
      `SELECT setval('products_id_seq', 1, false);`
    );
  };

  const converted = data?.map((product) => {
    return {
      id: product["product_id"],
      name: product["name_hr-HR"],
      vpc: product["product_price"],
      valuta: "EUR",
      meta_title: product["meta_title_hr-HR"],
      meta_description: product["meta_description_hr-HR"],
      meta_keyword: product["meta_keyword_hr-HR"],
      opis: product["description_hr-HR"],
      ean: product["product_ean"],
      tezina: product["product_weight"],
      dimenzija_lozista: product["extra_field_5"],
      radna_ploca: product["extra_field_6"],
      promjer_stola: product["extra_field_22"],
      visina: product["extra_field_6"],
      created_by_id: 1,
    };
  });

  const create = async (data: any) => {
    await strapi.db.query("api::product.product").create({
      data,
    });
  };

  const createAll = async () => {
    converted.forEach(async (product) => {
      await create(product);
    });
  };

  await deleteAll();
  await clearProductsSeq();
  await createAll();
};
