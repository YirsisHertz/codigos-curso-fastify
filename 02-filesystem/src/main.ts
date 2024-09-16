import Fastify from "fastify";

import fastifyJwt from "@fastify/jwt";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";

import { FsMiddleware } from "./middlewares/fs.middleware";

import authPlugin from "./plugins/auth.plugin";
import pgPlugin from "./plugins/pgPlugin";

import authRoutes from "./routes/auth.routes";
import dbRoutes from "./routes/db.routes";
import fsRoutes from "./routes/fs.routes";
import mailRoutes from "./routes/mail.routes";
import reportsRoutes from "./routes/reports.routes";

const fastify = Fastify({ logger: true });

const start = async () => {
  try {
    // await fastify.register(fastifyEnv, {
    //   dotenv: true,
    //   schema: {},
    // });

    await fastify.register(fastifySwagger);

    await fastify.register(fastifySwaggerUI, {
      routePrefix: "/docs",
      uiConfig: {
        docExpansion: "list",
        deepLinking: false,
      },
      uiHooks: {
        onRequest: function (request, reply, next) {
          next();
        },
        preHandler: function (request, reply, next) {
          next();
        },
      },
      staticCSP: true,
      transformStaticCSP: (header) => header,
      transformSpecification: (
        swaggerObject,
        request,
        reply,
      ) => {
        return swaggerObject;
      },
      transformSpecificationClone: true,
    });

    fastify.register(fastifyJwt, {
      secret: process.env.JWT_SECRET,
    } as any);

    fastify.register(pgPlugin);
    fastify.register(authPlugin);

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

    fastify.register(mailRoutes, {
      prefix: "/mail",
    });

    fastify.register(authRoutes, {
      prefix: "/auth",
    });

    fastify.register(dbRoutes, {
      prefix: "/db",
    });

    await fastify.listen({
      port: +`${process.env.PORT || 3000}`,
    });

    fastify.log.info(
      `app listening on port ${process.env.PORT}`,
    );
  } catch (error) {
    fastify.log.error(error);
  }
};

start();
