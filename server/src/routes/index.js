const express = require("express");
const notesRouter = require("./notes.route");
const userRouter = require("./user.route");
const apiRouter = express.Router();

apiRouter.use("/notes", notesRouter);
apiRouter.use("/user", userRouter);

module.exports = apiRouter;
