import Fastify from "fastify";

import { FsMiddleware } from "./middlewares/fs.middleware";

import dbRoutes from "./routes/db.routes";
import fsRoutes from "./routes/fs.routes";
import reportsRoutes from "./routes/reports.routes";

import pgPlugin from "./plugins/pgPlugin";

const fastify = Fastify({ logger: true });

fastify.register(pgPlugin);

fastify.addHook(
  "onRequest",
  FsMiddleware.verifyIsExistFilesDir,
);

fastify.register(fsRoutes, {
  prefix: "/fs",
});

fastify.register(reportsRoutes, {
  prefix: "/reports",
});

fastify.register(dbRoutes, {
  prefix: "/db",
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });

    fastify.log.info("app listening on port 3000");
  } catch (error) {
    fastify.log.error(error);
  }
};

start();
