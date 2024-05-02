import {Request, Response} from "express"

const getAppointmentController = (req:Request, res:Response):void => {
    res.json({message:"Get all appointments"})
}
const getAppointmentByIdController = (req:Request, res:Response):void => {
    res.json({message:"Get appointment by id"})
}

const postScheduleAppointmentController = (req:Request, res:Response):void => {
    res.json({message:"Schedule appointment"})
}

const postCancelAppointmentController = (req:Request, res:Response):void => {
    res.json({message:"Cancel appointment"})
}

const AppointmentController = {
    getAppointmentController, 
    getAppointmentByIdController, 
    postScheduleAppointmentController, 
    postCancelAppointmentController
}

export default AppointmentController