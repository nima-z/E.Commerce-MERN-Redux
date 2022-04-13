const User = require("../Models/UserModel");

async function register(req, res, next) {
  const { name, lastname, username, password, email } = req.body;
  const newUser = new User({
    name,
    lastname,
    username,
    email,
    password,
  });

  try {
    await newUser.save();
    res.status(201).json({ user: newUser });
  } catch (err) {
    console.log(err);
  }
}

exports.register = register;
