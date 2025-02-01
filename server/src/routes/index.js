import express from "express";
import notesRouter from "./notes.route";
import userRouter from "./user.route";
const apiRouter = express.Router();

apiRouter.use("/notes", notesRouter);
apiRouter.use("/user", userRouter);

export default apiRouter;
