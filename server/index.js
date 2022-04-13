const express = require("express");
const mongo = require("mongodb");
const dotenv = require("dotenv");
//--------------------------------------

const MongoClient = mongo.MongoClient;
dotenv.config();

const app = express();

MongoClient.connect(process.env.MONGO_URL)
  .then(console.log("db is connected"))
  .catch((err) => console.log(err));

app.listen(5000, () => {
  console.log("backend is running");
});
