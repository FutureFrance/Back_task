// context.ts
import { PrismaClient } from "@prisma/client";
import { IRequest } from "./interfaces/request-headers";

export type Context = {
  req: IRequest;
  prisma: PrismaClient;
};