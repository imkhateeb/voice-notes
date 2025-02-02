const { User } = require("../../models");
const bcrypt = require("bcryptjs");
const generateToken = require("./generateToken");

const loginUser = async (data) => {
  const { email, password } = data;
  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");

  return { user, token: generateToken(user) };
};

module.exports = loginUser;
