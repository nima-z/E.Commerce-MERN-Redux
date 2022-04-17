//libraries
const { ObjectId } = require("mongodb");

//modules
const dbConnection = require("../Helper/db-connection");

//Create Cart
async function createCart(req, res) {
  const { title, desc, price, category } = req.body;
  const newCart = { title, desc, price, category };

  const client = await dbConnection();
  const db = client.db();

  try {
    await db.collection("carts").insertOne(newCart);
    client.close();
    res
      .status(201)
      .json({ message: "new cart has been created", cart: newCart });
  } catch (err) {
    res.status(500).json({ message: "could not create a new cart", err });
  }
}

//Edit cart
async function updateCart(req, res) {
  const { cartId } = req.params;

  const client = await dbConnection();
  const db = client.db();

  try {
    const updatedCart = await db.collection("carts").findOneAndUpdate(
      { _id: ObjectId(cartId) },
      {
        $set: req.body,
        $currentDate: { updatedAt: true },
      },
      { returnDocument: "after" }
    );
    client.close();
    res.status(200).json({
      message: "Cart has been Updated",
      cart: updatedCart.value,
    });
  } catch (err) {
    client.close();
    res.status(500).json(err);
  }
}

//Delete Cart
async function deleteCart(req, res) {
  const { cartId } = req.params;

  const client = await dbConnection();
  const db = client.db();

  try {
    await db.collection("carts").findOneAndDelete({ _id: ObjectId(cartId) });
    client.close();
    res.status(200).json({ message: "Cart has been deleted" });
  } catch (err) {
    client.close();
    res.status(500).json(err);
  }
}

//Get user cart
async function getCart(req, res) {
  const { userId } = req.params;

  const client = await dbConnection();
  const db = client.db();

  try {
    const foundCart = await db
      .collection("carts")
      .findOne({ userId: ObjectId(userId) });
    client.close();
    res
      .status(200)
      .json({ message: "Product has been found", cart: foundCart });
  } catch (err) {
    client.close();
    res.status(500).json(err);
  }
}

async function getAllCarts(req, res) {
  const client = await dbConnection();
  const db = client.db();

  try {
    const allCarts = await db.collection("carts").find().toArray();
    client.close();
    res
      .status(200)
      .json({ message: "all carts have been gotten", carts: allCarts });
  } catch (err) {
    res.status(500).json(err);
  }
}

//===========================================
module.exports = { createCart, updateCart, deleteCart, getCart, getAllCarts };
