import path from "path";

import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { PrismaClient } from "@prisma/client";
import { buildSchema } from "type-graphql";

import { resolvers } from "./resolvers";

interface Context {
  prisma: PrismaClient;
}

async function main() {
  const schema = await buildSchema({
    resolvers,
    validate: false,
    emitSchemaFile: path.resolve(__dirname, "../generated/schema.graphql"),
  });

  const prisma = new PrismaClient();
  await prisma.$connect();

  const server = new ApolloServer({
    schema,
    context: (): Context => ({ prisma }),
  });

  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
}

main();
