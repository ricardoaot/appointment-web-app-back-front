import { Request, Response } from "express";
import userServices from "../services/userService";

const getUsersController = async (req: Request, res: Response): Promise<void> =>{
    const users = await userServices.getUsers()
    res.json(users)
}

const getUserByIdController = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await userServices.getUserById(Number (req.params.id))
        res.status(200).json(user)
    } catch (error) {
        res.status(404).json({message:"User not found"})
    }
}

const postRegisterUserController = async (req: Request, res: Response): Promise<void> => {
    try {         
        console.log(req.body)   
        const userRegistered = await userServices.postCreateUser(req.body)
        res.status(201).json(userRegistered)
        console.log(userRegistered)
    } catch (error) {
        res.status(400).json({message:"Incorrect data"})
    }
}

const postLoginUserController = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await userServices.postLoginUser(req.body)
        res.status(200).json({login:true, user} )
    } catch (error) {
        res.status(400).json({message:"incorrect credentials", error} )
    }
}

const userController = {
    getUsersController, 
    getUserByIdController, 
    postRegisterUserController, 
    postLoginUserController
}

export default userController