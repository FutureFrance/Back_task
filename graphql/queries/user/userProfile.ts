import { extendType } from 'nexus';
import { getUserProfileResolver } from '../../resolvers/userResolvers';

export const getuserProfile = extendType({
  type: "Query",
  definition(t) {
    t.field("getUserProfile", {
      type: "User",
      resolve: getUserProfileResolver
    })
  }
});
