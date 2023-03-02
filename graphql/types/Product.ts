import { objectType } from "nexus";
import { Product as PrismaProduct } from "nexus-prisma";

export const Product = objectType({
  name: PrismaProduct.$name,
  description: PrismaProduct.$description,
  definition(t) {
    t.field(PrismaProduct.id);
    t.field(PrismaProduct.title);
    t.field(PrismaProduct.description);
    t.field(PrismaProduct.category);
    t.field(PrismaProduct.color);
    t.field(PrismaProduct.active);
    t.field(PrismaProduct.owner);
  },
});
