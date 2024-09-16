import { RouteShorthandOptions } from "fastify";

export const invoiceDocs: RouteShorthandOptions = {
  schema: {
    summary: "Invoice Report PDF",
    description: "Invoice Report PDF",
    tags: ["PDF", "Auth Routes"],
    headers: {
      type: "object",
      properties: {
        Authorization: {
          type: "string",
          description: "Bearer Token",
        },
      },
    },
    response: {
      200: {},
      401: {
        type: "object",
        properties: {
          message: {
            type: "string",
            description: "Error message",
            example: "Email or password Invalid",
          },
        },
      },
      500: {
        type: "object",
        properties: {
          message: {
            type: "string",
            description: "Error message",
          },
        },
      },
    },
  },
};
