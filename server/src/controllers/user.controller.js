const userService = require("../services/user.service");
const { registerSchema, loginSchema } = require("../validators/user.validator");
const { StatusCodes } = require("http-status-codes");

const register = async (req, res) => {
  try {
    const validatedData = registerSchema.parse(req.body);
    const { user, token } = await userService.registerUser(validatedData);

    res.status(StatusCodes.OK).json({
      status: "success",
      msg: "User registered successfully",
      data: { user, token },
      error: {},
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res) => {
  try {
    const validatedData = loginSchema.parse(req.body);
    const { user, token } = await userService.loginUser(validatedData);

    res.status(StatusCodes.OK).json({
      status: "success",
      msg: "Login successful",
      data: { user, token },
      error: {},
    });
  } catch (error) {
    next(error);
  }
};

const getUser = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    if (!user) throw new Error("User not found");
    res.status(StatusCodes.OK).json({
      status: "success",
      data: { user },
      msg: "User found",
      error: {},
    });
  } catch (error) {
    next(error);
  }
};

const userController = {
  register,
  login,
  getUser,
};

module.exports = userController;
