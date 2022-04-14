const jwt = require("jsonwebtoken");

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

function verifyId(req, res, next) {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not allowed");
    }
  });
}

// exports.verifyToken = verifyToken;
// exports.verifyId = verifyId;
module.exports = { verifyToken, verifyId };
