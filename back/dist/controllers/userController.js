"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = __importDefault(require("../services/userService"));
const getUsersController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield userService_1.default.getUsers();
    res.json(users);
});
const getUserByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userService_1.default.getUserById(Number(req.params.id));
        res.status(200).json(user);
    }
    catch (error) {
        res.status(404).json({ message: "User not found" });
    }
});
const postRegisterUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body);
        const userRegistered = yield userService_1.default.postCreateUser(req.body);
        res.status(201).json(userRegistered);
        console.log(userRegistered);
    }
    catch (error) {
        res.status(400).json({ message: "Incorrect data" });
    }
});
const postLoginUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userService_1.default.postLoginUser(req.body);
        res.status(200).json({ login: true, user });
    }
    catch (error) {
        res.status(400).json({ message: "incorrect credentials", error });
    }
});
const userController = {
    getUsersController,
    getUserByIdController,
    postRegisterUserController,
    postLoginUserController
};
exports.default = userController;
