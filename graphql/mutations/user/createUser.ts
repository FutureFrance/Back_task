import { extendType, nonNull, stringArg } from "nexus";
import { createUserResolver } from "../../resolvers/userResolvers";

export const createUser = extendType({
  type: "Mutation",
  definition(t) {
    t.field("createUser", {
      type: "User",
      args: {
        email: nonNull(stringArg()),
        name: nonNull(stringArg()),
      },
      resolve: createUserResolver
    });
  },
});


