import { RouteShorthandOptions } from "fastify";

export const renewTokenDocs: RouteShorthandOptions = {
  schema: {
    headers: {
      type: "object",
      properties: {
        authorization: {
          type: "string",
          description: "Bearer Current Token (jwt)",
        },
      },
      required: ["authorization"],
    },
    summary: "Renew Token",
    description: "Renewed JWT Token",
    tags: ["Auth", "JWT"],
    response: {
      200: {
        type: "object",
        properties: {
          token: {
            type: "string",
            description: "New JWT Token",
          },
          user: {
            type: "object",
            properties: {
              uid: {
                type: "string",
                description: "Unique user id",
              },
              email: {
                type: "string",
                description: "Unique email",
              },
              username: {
                type: "string",
                description: "Unique username",
              },
            },
          },
        },
      },
      500: {
        type: "object",
        properties: {
          statusCode: { type: "number", example: 500 },
          code: { type: "string" },
          error: { type: "string" },
          message: { type: "string" },
        },
      },
    },
  },
};
