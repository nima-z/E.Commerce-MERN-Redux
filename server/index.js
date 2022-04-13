const express = require("express");
// const mongo = require("mongodb");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
//--------------------------------------
const usersRoutes = require("./Routes/users-routes");
const authRoutes = require("./Routes/auth-routes");
//--------------------------------------
dotenv.config();

const app = express();

// middleware
app.use(express.json());

// routes
app.use("/api/users", usersRoutes);
app.use("/api/auth", authRoutes);

// database connection
// const MongoClient = mongo.MongoClient;
mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("db is connected"))
  .catch((err) => console.log(err));

//express port
app.listen(process.env.PORT || 5000, () => {
  console.log("backend is running");
});
