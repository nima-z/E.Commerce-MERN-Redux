const dbConnection = require("../Helper/db-connection");

async function collectProductsTitle(req, res, next) {
  const client = await dbConnection();
  const db = client.db();

  try {
    const products = await db
      .collection("products")
      .aggregate([
        {
          $project: { title: 1, _id: 1 },
        },
        { $sort: { title: 1 } },
      ])
      .toArray();
    res.status(200).json({ products });
  } catch (err) {
    res.status(500).json({ message: "something went wrong" });
  }
}

module.exports = { collectProductsTitle };
