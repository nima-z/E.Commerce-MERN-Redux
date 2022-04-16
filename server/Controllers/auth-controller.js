//libraries
const cryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
//modules
const dbConnection = require("../Helper/db-connection");
//-------------------------------------------------------

// REGISTER USER
async function register(req, res) {
  const { name, lastname, phone, password, email } = req.body;

  const createDate = new Date();
  const encryptedPass = cryptoJS.AES.encrypt(
    password,
    process.env.SEC_PASS_PHRASE
  ).toString();

  const newUser = {
    name,
    lastname,
    email,
    password: encryptedPass,
    isAdmin: false,
    phone,
    address: {},
    cart: [],
    orders: [],
    createdAt: createDate,
    updatedAt: createDate,
  };

  // db operations
  const client = await dbConnection();
  const db = client.db();

  try {
    await db.collection("users").insertOne(newUser);
  } catch (err) {
    client.close();
    res.status(502).json({ message: err });
  }
  client.close();
  res.status(201).json({ message: "User has been created", user: newUser });
}

//LOGIN USER
async function login(req, res) {
  const { email, password } = req.body;

  const client = await dbConnection();
  const db = client.db();

  try {
    const existedUser = await db.collection("users").findOne({ email });

    if (!existedUser) {
      res.status(500).json({ message: "User does not exist for this email" });
    }

    const decryptedPass = cryptoJS.AES.decrypt(
      existedUser.password,
      process.env.SEC_PASS_PHRASE
    ).toString(cryptoJS.enc.Utf8);

    if (decryptedPass !== password) {
      res.status(500).json({ message: "password is wrong" });
    }

    const accessToken = jwt.sign(
      {
        id: existedUser._id,
        isAdmin: existedUser.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "2d" }
    );

    const { password: userPass, ...others } = existedUser;
    res
      .status(200)
      .json({ message: "Logged in", user: { ...others, accessToken } });
  } catch (err) {
    res.status(500).json("could not search in db", err);
  }
}

//============================
// module.exports = { register, login };
exports.register = register;
exports.login = login;
