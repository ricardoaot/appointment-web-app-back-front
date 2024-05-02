import userRouter from "./userRouter";
import appointmentRouter from "./appointmentRouter";
//import {Router} from "express";
import express from "express";

const indexRouter = express.Router();

indexRouter.use("/user", userRouter);
indexRouter.use("/appointment", appointmentRouter);

export default indexRouter