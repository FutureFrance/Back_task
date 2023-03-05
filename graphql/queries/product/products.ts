import { extendType, intArg, list, nonNull, nullable, objectType, stringArg } from "nexus";
import { productsResolver } from "../../resolvers/productResolvers";

export const getProducts = extendType({
  type: "Query",
  definition(t) {
    t.field("getProducts", {
      type: list('Product'),
      args: {
        start: nonNull(intArg()),
        amount: nonNull(intArg()),
        filter: nullable(stringArg()),
      },
      resolve: productsResolver
    })
  }
});