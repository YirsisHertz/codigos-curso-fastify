import {
  FastifyInstance,
  FastifyPluginAsync,
  FastifyReply,
  FastifyRequest,
} from "fastify";

import fastifyPlugin from "fastify-plugin";

declare module "fastify" {
  interface FastifyInstance {
    auth: any;
  }
}

const authPlugin: FastifyPluginAsync = async (
  fastify: FastifyInstance,
  options: Record<never, never>,
) => {
  fastify.decorate(
    "auth",
    async (
      request: FastifyRequest,
      reply: FastifyReply,
    ) => {
      try {
        await request.jwtVerify();
      } catch (error) {
        reply.code(401).send({
          message: "Unauthorized",
        });
      }
    },
  );
};

export default fastifyPlugin(authPlugin);
