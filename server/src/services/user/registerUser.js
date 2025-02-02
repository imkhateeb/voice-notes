const { User } = require("../../models");
const bcrypt = require("bcryptjs");
const generateToken = require("./generateToken");

const registerUser = async (data) => {
  const { name, email, password } = data;
  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error("User already exists");

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashedPassword });

  return { user, token: generateToken(user) };
};

module.exports = registerUser;
