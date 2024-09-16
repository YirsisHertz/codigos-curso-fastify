import { RouteShorthandOptions } from "fastify";

export const loginDocs: RouteShorthandOptions = {
  schema: {
    summary: "Login User",
    description: "Login user",
    tags: ["Auth", "Sign In"],
    body: {
      type: "object",
      properties: {
        email: {
          type: "string",
          description: "Email",
        },
        password: {
          type: "string",
          description: "Password",
        },
      },
      required: ["email", "password"],
    },
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
