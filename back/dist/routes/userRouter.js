"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = __importDefault(require("../controllers/userController"));
const express_1 = require("express");
const userRouter = (0, express_1.Router)();
userRouter.get("/", userController_1.default.getUsersController);
userRouter.post("/register", userController_1.default.postRegisterUserController);
userRouter.post("/login", userController_1.default.postLoginUserController);
userRouter.get("/:id", userController_1.default.getUserByIdController);
exports.default = userRouter;
