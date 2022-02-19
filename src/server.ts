//TypeORM
import "reflect-metadata";
import { createConnection } from "typeorm";
import dbConfig from "./config/database"

//Express
import express, { Application } from "express";
import morgan from "morgan";
import Router from "./routes/index";
import swaggerUI from "swagger-ui-express";

const PORT = process.env.PORT || 3000;

const app : Application = express();

app.use(express.json());
app.use(morgan('tiny'));
app.use(express.static("public"));

app.use(
  "/docs",
  swaggerUI.serve,
  swaggerUI.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json"
    }
  })
);

app.use(Router);

createConnection(dbConfig)
  .then((_connection) => {
    app.listen(PORT, () => {
      console.log(`Server running on PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

