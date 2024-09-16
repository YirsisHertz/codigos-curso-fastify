import { RouteShorthandOptions } from "fastify";

export const registerDocs: RouteShorthandOptions = {
  schema: {
    summary: "Register User",
    description: "Register new user",
    tags: ["Auth", "Sign In"],
    body: {
      type: "object",
      properties: {
        email: {
          type: "string",
          description: "Email",
        },
        first_name: {
          type: "string",
          description: "First Name",
        },
        last_name: {
          type: "string",
          description: "Last Name",
        },
        password: {
          type: "string",
          description: "Password",
        },
      },
      required: [
        "email",
        "first_name",
        "last_name",
        "password",
      ],
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
      400: {
        type: "object",
        properties: {
          message: {
            type: "string",
            description: "Error message",
            example:
              "Password must be at least 8 characters long",
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
