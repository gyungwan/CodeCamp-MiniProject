export const options = {
  failOnErrors: true, // Whether or not to throw when parsing errors. Defaults to false.
  definition: {
    openapi: "3.0.0",
    info: {
      title: "미니프로젝트 API Docs",
      version: "1.0.0",
      description: "testing",
    },
  },
  apis: ["./swagger/*.swagger.js"],
};
