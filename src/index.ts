import {
  calculatePriceWithTax,
  convertEurVpcToHrkMpc,
} from "./helpers/calculator";
import { Strapi } from "@strapi/strapi";

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }: { strapi: Strapi }) {
    const extensionService = strapi.service("plugin::graphql.extension");

    console.log("HIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII autobuild");

    extensionService.use(({ strapi }) => ({
      typeDefs: `
       type ProductEntityResponseCollection {
         test: String
         products: [Product]
       }
       type Product {
         mpc: Float
         mpcHRK: Float
         pdv: Float 
       }
      `,
      resolvers: {
        Product: {
          mpc(root) {
            return calculatePriceWithTax(root.vpc);
          },
          mpcHRK(root) {
            return convertEurVpcToHrkMpc(root.vpc);
          },
        },
        Query: {},
      },
    }));
  },

  bootstrap(/*{ strapi }*/) {},
};
