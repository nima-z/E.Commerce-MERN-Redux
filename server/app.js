// libraries
const express = require("express");
const dotenv = require("dotenv");

// modules
const usersRoutes = require("./Routes/users-routes");
const authRoutes = require("./Routes/auth-routes");
//--------------------------------------

dotenv.config();
const app = express();

// middlewares
app.use(express.json());

// routes
app.use("/api/users", usersRoutes);
app.use("/api/auth", authRoutes);

//express port
app.listen(process.env.PORT || 5000, () => {
  console.log("backend is running");
});
