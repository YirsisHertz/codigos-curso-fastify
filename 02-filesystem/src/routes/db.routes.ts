import { FastifyInstance } from "fastify";
import fastifyPlugin from "fastify-plugin";

import { DbUsersController } from "../controllers/dbUsers.controller";

const dbRoutes = async (fastify: FastifyInstance) => {
  const dbUsersController = new DbUsersController();

  fastify.get("/users", dbUsersController.findAll);
  fastify.get("/users/:id", dbUsersController.findOneById);
  fastify.get(
    "/users/zodiac/:zodiac_sign",
    dbUsersController.findManyByZodiacSign,
  );

  fastify.post("/users", dbUsersController.create);
  fastify.patch("/users/:id", dbUsersController.update);

  // Soft Delete -> active = true | false
  fastify.delete(
    "/users/:id",
    dbUsersController.softDelete,
  );

  // Hard Delete -> fisicamente existe o no existe
  fastify.delete(
    "/users/hard/:id",
    dbUsersController.hardDelete,
  );
};

export default fastifyPlugin(dbRoutes);
