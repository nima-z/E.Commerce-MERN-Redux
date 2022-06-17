const { ObjectId } = require("mongodb");
const dbConnection = require("../Helper/db-connection");

async function setWishlist(req, res) {
  const { userId } = req.params;
  const client = await dbConnection();
  const db = client.db();

  try {
    const user = await db.collection("users").findOneAndUpdate(
      { _id: ObjectId(userId) },
      {
        $set: { wishlist: req.body },
        $currentDate: { updatedAt: true },
      },
      { returnDocument: "after" }
    );

    client.close();
    res
      .status(201)
      .json({ message: "wishlist has been updated", user: user.value });
  } catch (err) {
    res.status(500).json({ message: "could not update wishlist", err });
  }
}

module.exports = { setWishlist };
