import { FastifyInstance } from "fastify";
import fastifyPlugin from "fastify-plugin";

import { ReportsController } from "../controllers/reports.controller";

const reportsRoutes = async (fastify: FastifyInstance) => {
  const reportsController = new ReportsController();

  fastify.get("/invoice", reportsController.getInvoice);
};

export default fastifyPlugin(reportsRoutes);
