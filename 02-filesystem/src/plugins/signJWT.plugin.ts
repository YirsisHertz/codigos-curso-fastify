import {
  FastifyInstance,
  FastifyPluginAsync,
  FastifyReply,
  FastifyRequest,
} from "fastify";

import fastifyPlugin from "fastify-plugin";

declare module "fastify" {
  interface FastifyInstance {
    signJWT: any;
  }
}

const signJWTPlugin: FastifyPluginAsync = async (
  fastify: FastifyInstance,
  options: Record<never, never>,
) => {
  fastify.decorate(
    "signJWT",
    async (
      request: FastifyRequest,
      reply: FastifyReply,
    ) => {
      try {
        const token = fastify.jwt.sign(
          {
            uid: 1,
          },
          {
            expiresIn: "1h",
          },
        );

        reply.send({ token });
      } catch (error) {
        reply.code(401).send({
          message: "Unauthorized",
        });
      }
    },
  );
};

export default fastifyPlugin(signJWTPlugin);
