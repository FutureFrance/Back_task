import { extendType, intArg, nonNull } from "nexus";
import { productResolver } from "../../resolvers/productResolvers";

export const product = extendType({
  type: "Query",
  definition(t) {
    t.field("product", {
      type: "Product",
      args: {
        id: nonNull(intArg())
      }, 
      resolve: productResolver
    });
  }
})