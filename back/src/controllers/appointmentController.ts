import {Request, Response} from "express"
import appointmentService from "../services/appointmentService"

const getAppointmentController = async (req:Request, res:Response):Promise<void> => {
    const appointments = await appointmentService.getAppointments()
    res.json(appointments)
}
const getAppointmentByIdController = async (req:Request, res:Response):Promise<void> => {
    const appointment = await appointmentService.getAppointmentById(Number (req.params.id))
    res.json(appointment)
}

const postScheduleAppointmentController = async (req:Request, res:Response):Promise<void> => {
    const appointmentResult = await appointmentService.postScheduleAppointment(req.body)
    res.json(appointmentResult)
}

const postCancelAppointmentController = async (req:Request, res:Response):Promise<void> => {
    const cancelledAppointment = await appointmentService.postCancellAppointment(Number (req.params.id))
    res.json(cancelledAppointment)
}

const AppointmentController = {
    getAppointmentController, 
    getAppointmentByIdController, 
    postScheduleAppointmentController, 
    postCancelAppointmentController
}

export default AppointmentController