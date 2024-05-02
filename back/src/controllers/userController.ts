import { Request, Response } from "express";

const getUsersController = (req: Request, res: Response): void =>{
    res.json({message:"Get all users"})
}

const getUserByIdController = (req: Request, res: Response): void => {
    res.json({message:"Get user by id"})
}

const postRegisterUserController = (req: Request, res: Response): void => {
    res.json({message:"Register user"})
}

const postLoginUserController = (req: Request, res: Response): void => {
    res.json({message:"Login user"})
}

const userController = {getUsersController, getUserByIdController, postRegisterUserController, postLoginUserController}

export default userController