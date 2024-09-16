import { FastifyInstance } from "fastify";
import fastifyPlugin from "fastify-plugin";

import { ReportsController } from "../controllers/reports.controller";
import { invoiceDocs } from "../docs/invoice/invoice.docs";

const reportsRoutes = async (fastify: FastifyInstance) => {
  const reportsController = new ReportsController();

  fastify.get(
    "/invoice",
    { onRequest: [fastify.auth], ...invoiceDocs },
    reportsController.getInvoice,
  );
};

export default fastifyPlugin(reportsRoutes);
