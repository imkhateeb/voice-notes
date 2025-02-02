const { JWT_SECRET } = require("../../config/server.config");
const jwt = require("jsonwebtoken");
const generateToken = (user) => {
  return jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
    expiresIn: "1d",
  });
};

module.exports = generateToken;
