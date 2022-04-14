const cryptoJS = require("crypto-js");
const { ObjectId } = require("mongodb");
const dbConnection = require("../Helper/db-connection");

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
    res.status(200).json({ user: updatedUser.value });
  } catch (err) {
    res.status(500).json(err);
  }
}

exports.editUser = editUser;
