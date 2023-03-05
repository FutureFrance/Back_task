import { FieldResolver } from "nexus";
import { Context } from "../../context";
import { toRestrictPosts } from "./restrictions";

export const createPostResolver: FieldResolver<
  "Mutation", 
  "createProduct"
> = async (_root, args , ctx: Context) => {
  const product = await ctx.prisma.product.create({
    data: {
      ...args.data,
      owner: {
        connect: { id: args.data.owner }
      }
    },
    include: { owner: true }
  });

  return product;
}

export const activeProductResolver: FieldResolver<
  "Mutation",
  "activeProduct"
> = async (_root, { active , id }, ctx: Context) => {
  const product = await ctx.prisma.product.update({
    where: { id }, 
    data: {
      active
    }
  })

  return product;
}

export const productResolver: FieldResolver<
  "Query",
  "product"
> = async (_root, { id }, ctx: Context) => {
  const restrict = toRestrictPosts(ctx.req.headers.admin);

  const product = await ctx.prisma.product.findFirst({
    where: { 
      id, ...restrict 
    },
    include: { owner: true }
  });

  return product;
}

export const productsResolver: FieldResolver<
  "Query",
  "getProducts"
> = async (_root, { start, amount, filter }, ctx: Context) => {
  const restrict = toRestrictPosts(ctx.req.headers.admin);

  const where = filter
    ? {
      OR: [
        { description: { contains: filter }, ...restrict },
        { title: { contains: filter }, ...restrict }, 
      ],
    }
    : {}

  const products = await ctx.prisma.product.findMany({
    where,
    skip: start,
    take: amount
  });

  return products;
}