const deleteUser = require("./user/deleteUser");
const generateToken = require("./user/generateToken");
const getUserById = require("./user/getUserById");
const loginUser = require("./user/loginUser");
const registerUser = require("./user/registerUser");
const updateUser = require("./user/updateUser");

const userService = {
  deleteUser,
  generateToken,
  getUserById,
  loginUser,
  registerUser,
  updateUser,
};

module.exports = userService;
