//libraries
const cryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
//modules
const dbConnection = require("../Helper/db-connection");
//-------------------------------------------------------

// REGISTER USER
async function register(req, res) {
  const { firstname, lastname, password, email } = req.body;

  const createDate = new Date();
  const encryptedPass = cryptoJS.AES.encrypt(
    password,
    process.env.SEC_PASS_PHRASE
  ).toString();

  const newUser = {
    firstname,
    lastname,
    email,
    password: encryptedPass,
    isAdmin: false,
    phone: "",
    address: {},
    cart: {
      products: [],
      quantity: 0,
      total: 0,
    },
    wishList: [],
    createdAt: createDate,
    updatedAt: createDate,
  };

  // db operations
  const client = await dbConnection();
  const db = client.db();

  let existedUser;

  try {
    existedUser = await db.collection("users").findOne({ email });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Something went wrong, please try again " });
  }

  if (existedUser) {
    client.close();
    res.status(502).json({ message: "This email exist already" });
  } else {
    try {
      await db.collection("users").insertOne(newUser);
      client.close();
      res.status(201).json({ message: "User has been created", user: newUser });
    } catch (err) {
      client.close();
      res
        .status(502)
        .json({ message: "Something went wrong, please try again" });
    }
  }
}

//LOGIN USER
async function login(req, res) {
  const { email, password } = req.body;
  console.log(req.body);

  const client = await dbConnection();
  const db = client.db();

  let existedUser;
  try {
    existedUser = await db.collection("users").findOne({ email });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong, please try again" });
  }

  if (!existedUser) {
    res.status(500).json({ message: "User does not exist for this email" });
  }

  const decryptedPass = cryptoJS.AES.decrypt(
    existedUser.password,
    process.env.SEC_PASS_PHRASE
  ).toString(cryptoJS.enc.Utf8);

  if (decryptedPass !== password) {
    res.status(500).json({ message: "password is wrong" });
  } else {
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
  }
}

//============================
module.exports = { register, login };
