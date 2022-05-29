//libraries
const { ObjectId } = require("mongodb");

//modules
const dbConnection = require("../Helper/db-connection");

//Create new product
async function createNewProduct(req, res) {
  const { title, desc, price, category } = req.body;
  const newProduct = { title, desc, price: +price, category: [] };

  const client = await dbConnection();
  const db = client.db();

  try {
    await db.collection("products").insertOne(newProduct);
    client.close();
    res
      .status(201)
      .json({ message: "new product has been created", product: newProduct });
  } catch (err) {
    res.status(500).json({ message: "could not create a new product", err });
  }
}

//Edit Product
async function editProduct(req, res) {
  const { productId } = req.params;

  const client = await dbConnection();
  const db = client.db();

  try {
    const updatedProduct = await db.collection("products").findOneAndUpdate(
      { _id: ObjectId(productId) },
      {
        $set: req.body,
        $currentDate: { updatedAt: true },
      },
      { returnDocument: "after" }
    );
    client.close();
    res.status(200).json({
      message: "Product has been Updated",
      product: updatedProduct.value,
    });
  } catch (err) {
    client.close();
    res.status(500).json(err);
  }
}

//Delete Product
async function deleteProduct(req, res) {
  const { productId } = req.params;

  const client = await dbConnection();
  const db = client.db();

  try {
    const deletedItem = await db
      .collection("products")
      .findOneAndDelete({ _id: ObjectId(productId) });
    client.close();
    res.status(200).json({
      message: "Product has been deleted",
      product: deletedItem.value,
    });
  } catch (err) {
    client.close();
    res.status(500).json(err);
  }
}

//Get a single Product
async function getProduct(req, res) {
  const { productId } = req.params;

  const client = await dbConnection();
  const db = client.db();

  try {
    const foundProduct = await db
      .collection("products")
      .findOne({ _id: ObjectId(productId) });
    client.close();
    res
      .status(200)
      .json({ message: "Product has been found", product: foundProduct });
  } catch (err) {
    client.close();
    res.status(500).json(err);
  }
}

//Get all Products
async function getAllProducts(req, res) {
  const { latest, qcategory } = req.query;

  const client = await dbConnection();
  const db = client.db();

  try {
    let products;
    if (latest) {
      products = await db
        .collection("products")
        .find()
        .sort({ createdAt: -1 })
        .limit(5)
        .toArray();
    } else if (qcategory) {
      products = await db
        .collection("products")
        .find({ tag: { $in: [qcategory] } })
        .toArray();
    } else {
      products = await db.collection("products").find().toArray();
    }

    client.close();
    res.status(200).json({ message: "Products has been found", products });
  } catch (err) {
    client.close();
    res.status(500).json(err);
  }
}

//===========================================
module.exports = {
  getAllProducts,
  getProduct,
  createNewProduct,
  editProduct,
  deleteProduct,
};
