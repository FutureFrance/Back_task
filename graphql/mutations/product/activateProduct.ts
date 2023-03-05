import { booleanArg, extendType, intArg, nonNull } from "nexus";
import { activeProductResolver } from "../../resolvers/productResolvers";

export const activeProduct = extendType({
  type: "Mutation",
  definition(t) {
    t.field("activeProduct", {
      type: "Product",
      args: {
        active: nonNull(booleanArg()),
        id: nonNull(intArg())
      },
      resolve: activeProductResolver
    })
  }
});