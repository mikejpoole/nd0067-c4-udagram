import * as dotenv from "dotenv";
import cors from "cors";
import express from "express";
import { sequelize } from "./sequelize";

import { IndexRouter } from "./controllers/v0/index.router";

import bodyParser from "body-parser";
import { V0_FEED_MODELS, V0_USER_MODELS } from "./controllers/v0/model.index";

(async () => {
  console.log('Configuring server...');

  dotenv.config();

  await sequelize.addModels(V0_FEED_MODELS);
  await sequelize.addModels(V0_USER_MODELS);
  // await sequelize.sync();                    // This will prevent the server running at the moment

  console.log("Database Connected");

  const app = express();
  const port = process.env.PORT || 8081;

  app.use(bodyParser.json());

  app.use(cors());

  app.use("/api/v0/", IndexRouter);

  // Root URI call
  app.get("/", async (req, res) => {
    console.log('Traffic received to root of site');
    res.send("/api/v0/");
  });

  // Start the Server
  app.listen(port, () => {
    console.log(`Server running ${process.env.URL} on port ${port}`);
    console.log(`Press CTRL+C to stop server`);
  });
})();
