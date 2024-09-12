import Fastify from "fastify";
import pingRoutes from "./routes/ping.routes";
import tasksRoutes from "./routes/tasks.routes";

const fastify = Fastify({
  logger: true
});

fastify.register(pingRoutes);
fastify.register(tasksRoutes);

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });

    // fastify.log.info(`server listening on port 3000`);
    fastify.log.error(`server listening on port 3000`);
  } catch (error) {
    fastify.log.error(error);
  }
};

start();
