import express from 'express';
import { ApolloServer } from "apollo-server-express";
import { schema } from "./schema";
import { prisma } from "./db";
import { isAdmin } from './middlewares/isAdmin';

async function bootstrap() {
  const app = express();

  app.use("*", isAdmin as any);

  const server = new ApolloServer({ 
    schema, 
    context: ({ req }) => ({ req, prisma }),
    formatError: (err) => {      
      return err;
    }
  });

  await server.start();

  server.applyMiddleware({ app });

  app.listen(4000, () => console.log(`🚀 Server ready at http://localhost:4000`));
}
bootstrap();