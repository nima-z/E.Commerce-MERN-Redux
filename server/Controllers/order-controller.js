//libraries
const { ObjectId } = require("mongodb");

//modules
const dbConnection = require("../Helper/db-connection");

//Create Order
async function createOrder(req, res) {
  const { userId, userName, products, amount, address, status } = req.body;

  const createdDate = new Date();

  const newOrder = {
    userId,
    userName,
    products,
    amount,
    address,
    status,
    createdAt: createdDate,
  };

  const client = await dbConnection();
  const db = client.db();

  try {
    await db.collection("orders").insertOne(newOrder);
    client.close();
    res
      .status(201)
      .json({ message: "new order has been created", order: newOrder });
  } catch (err) {
    res.status(500).json({ message: "could not create a new order", err });
  }
}

//Edit Order
async function updateOrder(req, res) {
  const { orderId } = req.params;

  const client = await dbConnection();
  const db = client.db();

  try {
    const updatedOrder = await db.collection("orders").findOneAndUpdate(
      { _id: ObjectId(orderId) },
      {
        $set: req.body,
        $currentDate: { updatedAt: true },
      },
      { returnDocument: "after" }
    );
    client.close();
    res.status(200).json({
      message: "Order has been Updated",
      order: updatedOrder.value,
    });
  } catch (err) {
    client.close();
    res.status(500).json(err);
  }
}

//Delete Order
async function deleteOrder(req, res) {
  const { orderId } = req.params;

  const client = await dbConnection();
  const db = client.db();

  try {
    await db.collection("orders").findOneAndDelete({ _id: ObjectId(orderId) });
    client.close();
    res.status(200).json({ message: "Order has been deleted" });
  } catch (err) {
    client.close();
    res.status(500).json(err);
  }
}

//Get user order
async function getOrder(req, res) {
  const { userId } = req.params;

  const client = await dbConnection();
  const db = client.db();

  try {
    const orders = await db
      .collection("orders")
      .findOne({ userId: ObjectId(userId) })
      .toArray();
    client.close();
    res.status(200).json({ message: "Order has been found", orders });
  } catch (err) {
    client.close();
    res.status(500).json(err);
  }
}

async function getAllOrders(req, res) {
  const client = await dbConnection();
  const db = client.db();

  try {
    const allOrders = await db.collection("orders").find().toArray();
    client.close();
    res.status(200).json({ message: "All orders have been gotten", allOrders });
  } catch (err) {
    res.status(500).json(err);
  }
}

//get monthly income

async function getMonthlyIncome(req, res) {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  const client = await dbConnection();
  const db = client.db();

  const MONTHS = [
    "",
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];

  try {
    const income = await db
      .collection("orders")
      .aggregate([
        { $match: { createdAt: { $gte: lastYear } } },
        {
          $group: {
            _id: { $month: "$createdAt" },
            sales: { $sum: "$amount" },
            quantity: { $sum: 1 },
          },
        },
        {
          $project: {
            month: {
              $arrayElemAt: [MONTHS, "$_id"],
            },
            sales: 1,
            quantity: 1,
            _id: 0,
          },
        },
      ])
      .toArray();
    console.log("income :" + income);
    res.status(200).json(income);
  } catch (err) {
    res.status(500).json(err);
  }
}

//===========================================
module.exports = {
  getAllOrders,
  getOrder,
  getMonthlyIncome,
  createOrder,
  updateOrder,
  deleteOrder,
};
