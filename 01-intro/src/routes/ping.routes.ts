import { FastifyInstance } from "fastify";
import fastifyPlugin from "fastify-plugin";

const pingRoutes = async (fastify: FastifyInstance) => {
  fastify.get("/ping", async (request, reply) => {
    const params = request;

    return { message: "pong", query: params.query };
  });

  fastify.post("/ping", async (request, reply) => {
    const body = request.body;

    return { message: "pong", body, headers: request.headers };
  });

  fastify.patch("/ping", async (request, reply) => {
    return { message: "pong" };
  });

  fastify.delete("/ping", async (request, reply) => {
    return { message: "pong" };
  });
};

export default fastifyPlugin(pingRoutes);
