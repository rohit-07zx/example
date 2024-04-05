//const swaggerJSDoc = require("swagger-jsdoc");
import swaggerJSDoc from "swagger-jsdoc";
import YAML from "js-yaml";

// Swagger definition
const swaggerDefinition = {
  info: {
    title: "My API",
    version: "1.0.0",
    description: "API documentation using swagger-jsdoc",
  },
  host: "localhost:3000", // Your server host name
  basePath: "/", // Base path of your API
};

// Options for the swagger docs
const options = {
  // Import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // Path to the API docs
  apis: ["src/test.js"], // Path to the API routes in your application
};

// Initialize swagger-jsdoc -> returns validated swagger spec in json format

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
