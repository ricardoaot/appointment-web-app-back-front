import { Request, Response } from "express";
import userServices from "../services/userService";

const getUsersController = async (req: Request, res: Response): Promise<void> =>{
    const users = await userServices.getUsers()
    res.json(users)
}

const getUserByIdController = async (req: Request, res: Response): Promise<void> => {
    const user = await userServices.getUserById(Number (req.params.id))
    res.json(user)
}

const postRegisterUserController = async (req: Request, res: Response): Promise<void> => {
    const userRegistered = await userServices.postCreateUser(req.body)
    res.json(userRegistered)
}

const postLoginUserController = async (req: Request, res: Response): Promise<void> => {
    const userLoged = await userServices.postLoginUser(req.body)
    res.json({message:"Login user", userLoged} )
}

const userController = {
    getUsersController, 
    getUserByIdController, 
    postRegisterUserController, 
    postLoginUserController
}

export default userController