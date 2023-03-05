import { extendType, inputObjectType, nonNull } from "nexus";
import { createPostResolver } from "../../resolvers/productResolvers";

export const createProduct = extendType({
  type: "Mutation",
  definition(t) {
    t.field("createProduct", {
      type: "Product",
      args: {
        data: nonNull(ProductInputType)
      },
      resolve: createPostResolver
    })
  }
});

const ProductInputType = inputObjectType({
  name: "ProductType",
  definition(t) {
    t.nonNull.boolean('active'),
    t.nonNull.string('category'),
    t.nonNull.string('title'),
    t.nullable.string('color'),
    t.nullable.string('description'),
    t.nonNull.int('owner')
  },
});

