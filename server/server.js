import devBundle from "./devBundle";
import path from "path";
import express from "express";
import template from "./../template";
import { MongoClient } from "mongodb";

const app = express();
const CURRENT_WORKING_DIR = process.cwd();

devBundle.compile(app);
                    
app.get("/", (req, res) => {
  res.status(200).send(template());
});
let port = process.env.PORT || 3000;
app.listen(port, function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info("Server started on port %s.", port);
});

const url =
  "mongodb+srv://fullstack:fullstack@cluster0.xtlm5.mongodb.net/fullstack?retryWrites=true&w=majority";
MongoClient.connect(url, (err, db) => {
  if (err) {
    comsole.log(err);
  }
  console.log("Connected successfully to mongodb server");
  db.close();
});
