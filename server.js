// libraries
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

// modules
const usersRoutes = require("./Routes/users-routes");
const authRoutes = require("./Routes/auth-routes");
const productRoutes = require("./Routes/product-routes");
const cartRoutes = require("./Routes/cart-routes");
const wishlistRoute = require("./Routes/wishlist-route");
const orderRoutes = require("./Routes/order-routes");
const stripeRoute = require("./Routes/stripe-route");
const searchRoutes = require("./Routes/search-routes");

// const dbRoute = require("./Routes/firstDb-route");
//--------------------------------------

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "client", "build")));

// routes
app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/wishlist", wishlistRoute);
app.use("/api/orders", orderRoutes);
app.use("/api/checkout", stripeRoute);
app.use("/api/search", searchRoutes);
// app.use("/api/db", dbRoute);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

//express port
app.listen(process.env.PORT || 5000, () => {
  console.log("Server is Listening");
  console.log(process.env.PORT);
});
