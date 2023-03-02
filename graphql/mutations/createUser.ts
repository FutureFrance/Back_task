import { extendType, intArg, nonNull, stringArg } from "nexus";

export const createUser = extendType({
  type: "Mutation",
  definition(t) {
    t.field("createUser", {
      type: "User",
      args: {
        email: nonNull(stringArg()),
        name: nonNull(stringArg()),
      },
      resolve: async (_root, { email, name }, ctx, info) => {
        const user = await ctx.db.user.create({
          data: { email, name },
        });

        return user;
      },
    });
  },
});
