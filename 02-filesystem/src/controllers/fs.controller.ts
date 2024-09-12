import fs from "node:fs/promises";
import path from "node:path";

import { FastifyReply, FastifyRequest } from "fastify";
import { FsCreateDatasourceEntity } from "../entities/fs.entity";

export class FsController {
  create = async (request: FastifyRequest, reply: FastifyReply) => {
    const { name, content } = request.body as FsCreateDatasourceEntity;

    try {
      await fs.writeFile(
        path.join(path.dirname("."), `./files/${name}.txt`),
        content
      );

      return {
        message: "File created"
      };
    } catch (error: any) {
      reply.code(500).send({ error: error.message });
    }
  };

  readDir = async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const files = await fs.readdir(path.join(path.dirname("."), "./files"));

      return {
        message: "File created",
        files
      };
    } catch (error: any) {
      reply.code(500).send({ error: error.message });
    }
  };

  readFile = async (request: FastifyRequest, reply: FastifyReply) => {
    const { name } = request.params as { name: string };

    try {
      const file = await fs.readFile(
        path.join(path.dirname("."), `./files/${name}`)
      );

      return {
        message: `File content of ${name}`,
        file: file.toString()
      };
    } catch (error: any) {
      reply.code(500).send({ error: error.message });
    }
  };
}
