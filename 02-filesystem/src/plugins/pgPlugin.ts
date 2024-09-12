import {
  FastifyInstance,
  FastifyPluginAsync,
} from "fastify";
import fastifyPlugin from "fastify-plugin";

import { PrismaClient } from "@prisma/client";

declare module "fastify" {
  interface FastifyInstance {
    prisma: PrismaClient;
  }
}

const pgPlugin: FastifyPluginAsync = async (
  fastify: FastifyInstance,
  options: any,
) => {
  const prisma = new PrismaClient();

  await prisma.$connect();
  fastify.log.info("Connected to the database");

  fastify.decorate("prisma", prisma);

  fastify.addHook("onClose", async (fastify) => {
    await fastify.prisma.$disconnect();
  });
};

export default fastifyPlugin(pgPlugin);
