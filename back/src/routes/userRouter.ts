import userController from "../controllers/userController";
import {Router} from "express";

const userRouter = Router();

userRouter.get("/", userController.getUsersController);
userRouter.post("/register", userController.postRegisterUserController);
userRouter.post("/login", userController.postLoginUserController);
userRouter.get("/:id", userController.getUserByIdController);

export default userRouter