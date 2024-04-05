import express from "express";
import router from "./controller.js";
import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerSpec from "./swaggerdefination.js";
const app = express();
app.use(bodyParser.json());

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Practice apis",
      version: "1.0.0",
      description: " Let's see what we can do with this!",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./controller.js"],
};

const swaggerSpec1 = swaggerJSDoc(swaggerOptions);
console.log(swaggerSpec);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(router);

//console.log(t || "hello");

app.listen(3000, () => console.log("server started"));
