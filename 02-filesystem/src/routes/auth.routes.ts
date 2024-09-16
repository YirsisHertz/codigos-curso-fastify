import { FastifyInstance } from "fastify";
import fastifyPlugin from "fastify-plugin";

import { AuthController } from "../controllers/auth.controller";

const authRoutes = async (fastify: FastifyInstance) => {
  const authController = new AuthController();

  // fastify.post(
  //   "/auth/signin",
  //   { onRequest: [fastify.signJWT] },
  //   authController.signin,
  // );

  fastify.post("/auth/register", authController.signin);
};

export default fastifyPlugin(authRoutes);
