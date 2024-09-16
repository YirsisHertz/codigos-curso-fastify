import { FastifyInstance } from "fastify";
import fastifyPlugin from "fastify-plugin";

import { AuthController } from "../controllers/auth.controller";
import { loginDocs } from "../docs/auth/login.docs";
import { registerDocs } from "../docs/auth/register.docs";
import { renewTokenDocs } from "../docs/auth/renewToken.docs";

const authRoutes = async (fastify: FastifyInstance) => {
  const authController = new AuthController();

  fastify.post(
    "/auth/renewToken",
    { ...renewTokenDocs },
    async (request, reply) =>
      authController.renewToken(request, reply, fastify),
  );

  fastify.post(
    "/auth/register",
    { ...registerDocs },
    async (request, reply) =>
      authController.register(request, reply, fastify),
  );

  fastify.post(
    "/auth/login",
    { ...loginDocs },
    async (request, reply) =>
      authController.login(request, reply, fastify),
  );
};

export default fastifyPlugin(authRoutes);
