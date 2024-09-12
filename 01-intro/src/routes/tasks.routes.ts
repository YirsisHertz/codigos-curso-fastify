import { FastifyInstance } from "fastify";
import fastifyPlugin from "fastify-plugin";
import { TasksController } from "../controllers/tasks.controllers";

const taskRoutes = async (fastify: FastifyInstance) => {
  const tasksController = new TasksController();

  fastify.get("/tasks", tasksController.findAll);
  fastify.get("/tasks/:id", tasksController.findOneById);
  fastify.post("/tasks", tasksController.create);
  fastify.patch("/tasks/:id", tasksController.update);
};

export default fastifyPlugin(taskRoutes);
