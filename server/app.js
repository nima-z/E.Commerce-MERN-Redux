// libraries
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

// modules
const usersRoutes = require("./Routes/users-routes");
const authRoutes = require("./Routes/auth-routes");
const productRoutes = require("./Routes/product-routes");
const cartRoutes = require("./Routes/cart-routes");
const orderRoutes = require("./Routes/order-routes");
const stripeRoute = require("./Routes/stripe-route");
//--------------------------------------

dotenv.config();
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/products", productRoutes);
app.use("/api/carta", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/stripe", stripeRoute);

//express port
app.listen(process.env.PORT || 5000, () => {
  console.log("backend is running");
});
