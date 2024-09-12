import fs from "node:fs/promises";
import path from "node:path";

import { FastifyReply, FastifyRequest } from "fastify";

export class FsMiddleware {
  static verifyIsExistFilesDir = async (
    request: FastifyRequest,
    reply: FastifyReply
  ) => {
    if (request.url !== "/create") return;

    try {
      await fs.access(path.join(path.dirname("."), "./files"));
    } catch (error) {
      await fs.mkdir(path.join(path.dirname("."), "./files"));
    }
  };
}
