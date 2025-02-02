const express = require("express");
const userController = require("../controllers/user.controller");
const authenticate = require("../middlewares/auth.middleware");

const userRouter = express.Router();

userRouter.post("/register", userController.register);
userRouter.post("/login", userController.login);
userRouter.get("/:id", authenticate, userController.getUser);

module.exports = userRouter;
