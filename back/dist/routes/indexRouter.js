"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userRouter_1 = __importDefault(require("./userRouter"));
const appointmentRouter_1 = __importDefault(require("./appointmentRouter"));
//import {Router} from "express";
const express_1 = __importDefault(require("express"));
const indexRouter = express_1.default.Router();
indexRouter.use("/user", userRouter_1.default);
indexRouter.use("/appointment", appointmentRouter_1.default);
exports.default = indexRouter;
