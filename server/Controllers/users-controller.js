//libraries
const cryptoJS = require("crypto-js");
const { ObjectId } = require("mongodb");
//modules
const dbConnection = require("../Helper/db-connection");
//--------------------------------------------------------

//Edit User
async function editUser(req, res) {
  const { password } = req.body;
  const { userId } = req.params;
  if (password) {
    req.body.password = cryptoJS.AES.encrypt(
      password,
      process.env.SEC_PASS_PHRASE
    ).toString();
  }
  const client = await dbConnection();
  const db = client.db();

  try {
    const updatedUser = await db.collection("users").findOneAndUpdate(
      { _id: ObjectId(userId) },
      {
        $set: req.body,
        $currentDate: { updatedAt: true },
      },
      { returnDocument: "after" }
    );
    client.close();
    res.status(200).json({ message: "User Updated", user: updatedUser.value });
  } catch (err) {
    client.close();
    res.status(500).json(err);
  }
}

//Delete User
async function deleteUser(req, res) {
  const { userId } = req.params;

  const client = await dbConnection();
  const db = client.db();

  try {
    await db.collection("users").findOneAndDelete({ _id: ObjectId(userId) });
    client.close();
    res.status(200).json({ message: "User has been deleted" });
  } catch (err) {
    client.close();
    res.status(500).json(err);
  }
}

//Get a single user
async function getUser(req, res) {
  const { userId } = req.params;

  const client = await dbConnection();
  const db = client.db();

  try {
    const foundUser = await db
      .collection("users")
      .findOne({ _id: ObjectId(userId) });
    client.close();
    res.status(200).json({ message: "user has been found", user: foundUser });
  } catch (err) {
    client.close();
    res.status(500).json(err);
  }
}

//Get all users
async function getAllUsers(req, res) {
  const { latest } = req.query;

  const client = await dbConnection();
  const db = client.db();

  try {
    const users = latest
      ? await db.collection("users").find().sort({ _id: -1 }).limit(2).toArray()
      : await db.collection("users").find().toArray();
    client.close();
    res.status(200).json({ message: "users has been found", users: users });
  } catch (err) {
    client.close();
    res.status(500).json(err);
  }
}

//Get All Stats
async function getAllStats(req, res) {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  const client = await dbConnection();
  const db = client.db();

  try {
    const stats = await db
      .collection("users")
      .aggregate([
        { $match: { createdAt: { $gte: lastYear } } },
        { $group: { _id: { $month: "$createdAt" }, total: { $sum: 1 } } },
      ])
      .toArray();
    client.close();
    res.status(200).json({ message: "stat is done", stats });
  } catch (err) {
    client.close();
    res.status(500).json({ message: "something went wrong", err });
  }
}

//============================
module.exports = { getAllUsers, getUser, getAllStats, editUser, deleteUser };
