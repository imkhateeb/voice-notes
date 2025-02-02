const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/server.config");

const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token)
    return res.status(401).json({
      status: "failure",
      msg: "No token provided",
      data: {},
      error: {
        msg: "No token provided",
      },
    });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({
      status: "failure",
      msg: "Invalid token",
      data: {},
      error: {
        msg: "Invalid token",
      },
    });
  }
};

module.exports = authenticate;
