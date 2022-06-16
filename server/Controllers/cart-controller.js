//libraries
const { ObjectId } = require("mongodb");

//modules
const dbConnection = require("../Helper/db-connection");

//Create Cart
async function createCart(req, res) {
  const { userId } = req.params;

  const client = await dbConnection();
  const db = client.db();

  try {
    const user = await db.collection("users").findOneAndUpdate(
      { _id: ObjectId(userId) },
      {
        $set: { cart: req.body },
        $currentDate: { updatedAt: true },
      },
      { returnDocument: "after" }
    );
    client.close();
    res
      .status(201)
      .json({ message: "cart has been updated", user: user.value });
  } catch (err) {
    res.status(500).json({ message: "could not update cart", err });
  }
}

//Edit cart
// async function updateCart(req, res) {
//   const { cartId } = req.params;

//   const client = await dbConnection();
//   const db = client.db();

//   try {
//     const updatedCart = await db.collection("carts").findOneAndUpdate(
//       { _id: ObjectId(cartId) },
//       {
//         $set: req.body,
//         $currentDate: { updatedAt: true },
//       },
//       { returnDocument: "after" }
//     );
//     client.close();
//     res.status(200).json({
//       message: "Cart has been Updated",
//       cart: updatedCart.value,
//     });
//   } catch (err) {
//     client.close();
//     res.status(500).json(err);
//   }
// }

// //Delete Cart
// async function deleteCart(req, res) {
//   const { cartId } = req.params;

//   const client = await dbConnection();
//   const db = client.db();

//   try {
//     await db.collection("carts").findOneAndDelete({ _id: ObjectId(cartId) });
//     client.close();
//     res.status(200).json({ message: "Cart has been deleted" });
//   } catch (err) {
//     client.close();
//     res.status(500).json(err);
//   }
// }

// //Get user cart
// async function getCart(req, res) {
//   const { userId } = req.params;

//   const client = await dbConnection();
//   const db = client.db();

//   try {
//     const foundCart = await db
//       .collection("carts")
//       .findOne({ userId: ObjectId(userId) });
//     client.close();
//     res
//       .status(200)
//       .json({ message: "Product has been found", cart: foundCart });
//   } catch (err) {
//     client.close();
//     res.status(500).json(err);
//   }
// }

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
module.exports = { createCart, getAllCarts };
