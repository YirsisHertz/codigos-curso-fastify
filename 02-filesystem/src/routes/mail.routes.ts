import { FastifyInstance } from "fastify";
import fastifyPlugin from "fastify-plugin";
import { MailController } from "../controllers/mails.controller";

const mailsRoutes = async (fastify: FastifyInstance) => {
  const mailsController = new MailController();

  fastify.post("/mail/send", mailsController.sendMail);
};

export default fastifyPlugin(mailsRoutes);
