import { FastifyReply, FastifyRequest } from "fastify";

export class AuthController {
  signin = async (
    request: FastifyRequest,
    reply: FastifyReply,
  ) => {
    return {
      message: "Signin route",
    };
  };
}
