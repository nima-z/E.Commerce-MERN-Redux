// libraries
const express = require("express");
const dotenv = require("dotenv");

// modules
const usersRoutes = require("./Routes/users-routes");
const authRoutes = require("./Routes/auth-routes");
const productRoutes = require("./Routes/product-routes");
//--------------------------------------

dotenv.config();
const app = express();

// middlewares
app.use(express.json());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/products", productRoutes);

//express port
app.listen(process.env.PORT || 5000, () => {
  console.log("backend is running");
});
