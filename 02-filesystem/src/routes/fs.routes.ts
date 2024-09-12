import { FastifyInstance } from "fastify";
import fastifyPlugin from "fastify-plugin";

import { FsController } from "../controllers/fs.controller";

const fsRoutes = async (fastify: FastifyInstance) => {
  const fsController = new FsController();

  fastify.get("/read", fsController.readDir);
  fastify.get("/read/:name", fsController.readFile);

  fastify.post("/create", fsController.create);
};

export default fastifyPlugin(fsRoutes);
