//libraries
const cryptoJS = require("crypto-js");
const { ObjectId } = require("mongodb");
//modules
const dbConnection = require("../Helper/db-connection");
//--------------------------------------------------------

//Edit User
async function editUser(req, res) {
  const { password } = req.body;
  const { id } = req.params;
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
      { _id: ObjectId(id) },
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
  const { id } = req.params;

  const client = await dbConnection();
  const db = client.db();

  try {
    await db.collection("users").findOneAndDelete({ _id: id });
    client.close();
    res.status(200).json({ message: "User has been deleted" });
  } catch (err) {
    client.close();
    res.status(500).json(err);
  }
}

//Get a single user
async function getUser(req, res) {
  const { id } = req.params;

  const client = await dbConnection();
  const db = client.db();

  try {
    const foundUser = await db
      .collection("users")
      .findOne({ _id: ObjectId(id) });
    client.close();
    res.status(200).json({ message: "user has been found", user: foundUser });
  } catch (err) {
    client.close();
    res.status(500).json(err);
  }
}

//Get all users
async function getAllUser(req, res) {
  const query = req.query.new;

  const client = await dbConnection();
  const db = client.db();

  try {
    const users = query
      ? await db.collection("users").find().sort({ _id: -1 }).limit(5).toArray()
      : await db.collection("users").find().toArray();
    console.log(users);
    client.close();
    res.status(200).json({ message: "users has been found", users: users });
  } catch (err) {
    client.close();
    res.status(500).json(err);
  }
}
//============================
exports.editUser = editUser;
exports.deleteUser = deleteUser;
exports.getUser = getUser;
exports.getAllUser = getAllUser;
