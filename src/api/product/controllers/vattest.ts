/**
 * A set of functions called "actions" for `vattest`
 */

export default {
  exampleAction: async (ctx, next) => {
    try {
      ctx.body = 'ok';
      return "kuri"
    } catch (err) {
      ctx.body = err;
    }
  }
};
