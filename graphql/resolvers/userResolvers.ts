import { User } from "@prisma/client";
import { FieldResolver } from "nexus";
import { Context } from "../../context";
import { toRestrictPosts } from "./restrictions";

export const createUserResolver: FieldResolver<
  "Mutation", 
  "createUser"
> = async (_root, { email, name }: Omit<User, 'id'>, ctx: Context) => {
  const user = await ctx.prisma.user.create({
    data: { email, name },
  });

  return user;
}

export const getUserProfileResolver: FieldResolver<
  "Query",
  "getUserProfile"
> = async (_root, args, ctx: Context) => {
  const { userid } = ctx.req.headers;
  const restrict = toRestrictPosts(ctx.req.headers.admin);

  if (!userid) throw new Error("Invalid user id");

  const user = await ctx.prisma.user.findUnique({
    where: {
      id: parseInt(userid)
    },
    include: {
      products: {
        where: { ...restrict }
      }
    }
  });

  console.log(user);
  
  return user;
}

export const UserResolver: FieldResolver<
  "Query",
  "user"
> = async (_root, { id }, ctx: Context) => {
  const user = await ctx.prisma.user.findUnique({
    where: { id }
  });

  return user;
}