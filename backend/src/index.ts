import "reflect-metadata";

import express from "express";
import cors from "cors";

import router from "./routes";

import "./database/connect";

const app = express();

app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(router);

app.listen(4444, () => {
  console.log("Server is running on port 4444!");
});
