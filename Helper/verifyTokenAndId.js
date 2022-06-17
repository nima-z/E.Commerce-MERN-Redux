//libraries
const jwt = require("jsonwebtoken");
//------------------------------------

//Verify Token
function verifyToken(req, res, next) {
  const { token } = req.headers;
  if (token) {
    const splitToken = token.split(" ")[1];
    jwt.verify(splitToken, process.env.JWT_SEC, (err, data) => {
      if (err) {
        res.status(403).json("Token is not valid");
      }
      req.user = data;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated");
  }
}

//Verify user ID
function verifyTokenAndId(req, res, next) {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.userId || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not allowed");
    }
  });
}

//verify Admin
function verifyTokenAndAdmin(req, res, next) {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not allowed");
    }
  });
}

//==========================================
module.exports = { verifyToken, verifyTokenAndId, verifyTokenAndAdmin };
