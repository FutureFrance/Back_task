import { extendType, intArg, nonNull } from "nexus";
import { UserResolver } from "../../resolvers/userResolvers";
import { z } from "zod";

export const user = extendType({
  type: "Query",
  definition(t) {
    t.field("user", {
      type: "User",
      args: {
        id: nonNull(intArg()),
      },
      resolve: UserResolver
    });
  },
});
