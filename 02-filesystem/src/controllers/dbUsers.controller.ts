import { PrismaClient } from "@prisma/client";
import { FastifyReply, FastifyRequest } from "fastify";
import { DeleteUserParams } from "../interfaces/deleteUser.interface";
import { CreateUserBody } from "../interfaces/request/createUser.interface";
import {
  FindUserByIdParams,
  FindUsersByZodiacSignParams,
  FindUsersByZodiacSignQueryParams,
} from "../interfaces/request/findUserById.interface";
import {
  UpdateUserBody,
  UpdateUserParams,
} from "../interfaces/request/updateUser.interface";

export class DbUsersController {
  private readonly prisma: PrismaClient =
    new PrismaClient();

  private findUserById = async (id: string) => {
    const user = await this.prisma.users.findUnique({
      where: {
        id,
        active: true,
      },
    });

    return user;
  };

  findAll = async (
    req: FastifyRequest,
    reply: FastifyReply,
  ) => {
    const users = await this.prisma.users.findMany({
      select: {
        id: true,
        country: true,
        first_name: true,
        last_name: true,
        zodiac_sign: true,
      },
      take: 10,
      where: {
        active: true,
      },
    });

    const response = {
      users,
      count: users.length,
    };

    return reply.send(response);
  };

  findOneById = async (
    req: FastifyRequest,
    reply: FastifyReply,
  ) => {
    const { id } = req.params as FindUserByIdParams;

    const user = await this.findUserById(id);

    return reply.send(user);
  };

  findManyByZodiacSign = async (
    req: FastifyRequest,
    reply: FastifyReply,
  ) => {
    const { zodiac_sign } =
      req.params as FindUsersByZodiacSignParams;

    const { limit = 15, page = 1 } =
      req.query as FindUsersByZodiacSignQueryParams;

    const currentPage = +page - 1;

    const users = await this.prisma.users.findMany({
      where: {
        zodiac_sign,
        active: true,
      },
      take: +limit,
      skip: currentPage * limit,
    });

    if (!users.length)
      return reply.code(404).send({
        message: "Users not found",
      });

    return reply.send({
      page: +page,
      users,
    });
  };

  create = async (
    req: FastifyRequest,
    reply: FastifyReply,
  ) => {
    const data = req.body as CreateUserBody;

    const user = await this.prisma.users.create({
      data,
    });

    return reply.send({ user });
  };

  update = async (
    req: FastifyRequest,
    reply: FastifyReply,
  ) => {
    const { id } = req.params as UpdateUserParams;
    const data = req.body as UpdateUserBody;

    try {
      const user = await this.findUserById(id);

      if (!user)
        return reply.code(404).send({
          message: "User not found",
        });

      await this.prisma.users.update({
        data,
        where: {
          id,
        },
      });

      return reply.send({ id, data });
    } catch (error) {
      return reply.code(404).send({
        message: "CATCH: User not found",
      });
    }
  };

  hardDelete = async (
    req: FastifyRequest,
    reply: FastifyReply,
  ) => {
    const { id } = req.params as DeleteUserParams;

    try {
      const user = await this.findUserById(id);

      if (!user)
        return reply.code(404).send({
          message: "User not found",
        });

      await this.prisma.users.delete({
        where: {
          id,
        },
      });

      return reply.send({ message: "User deleted", id });
    } catch (error) {
      return reply.code(404).send({
        message: "CATCH: User not found",
      });
    }
  };

  softDelete = async (
    req: FastifyRequest,
    reply: FastifyReply,
  ) => {
    const { id } = req.params as DeleteUserParams;

    try {
      const user = await this.findUserById(id);

      if (!user)
        return reply.code(404).send({
          message: "User not found",
        });

      await this.prisma.users.update({
        data: {
          active: false,
        },
        where: {
          id,
        },
      });

      return reply.send({ message: "User deleted", id });
    } catch (error) {
      return reply.code(404).send({
        message: "CATCH: User not found",
      });
    }
  };
}
