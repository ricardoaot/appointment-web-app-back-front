import appointmentDto from "../dto/appointmentDto";
import appointmentInterface from "../interfaces/appointmentInterface";
import { AppointmentRepository, UserRepository } from "../config/data-source";
import { AppointmentEntity } from "../entities/appointmentEntity";

var appointmentTable: appointmentInterface[] = [
    {   "id":1,
        "date": "2022-10-10", 
        "time": "10:00", 
        "userId": 1, 
        "status": "pending"
    }
];

const getAppointments = async () : Promise<undefined | AppointmentEntity[]> => {
    const appointmentTable = AppointmentRepository.find()
    return appointmentTable
}

const getAppointmentById = async (id: number) : Promise <null | AppointmentEntity> => {
    const appointmentTable = AppointmentRepository.findOneBy({appointmentId:id})
    return appointmentTable
}

const postScheduleAppointment = async (appointmentObject: appointmentDto)/*  : Promise<AppointmentEntity | undefined> */ => {
    
    const {date, time, userId} = appointmentObject
    const userFound = await UserRepository.findOneBy({userId})
    if(userFound){
        const newAppointment = {date, time, status:"pending", userId:userFound }
        const newAppointmentEntity = AppointmentRepository.create(newAppointment)  
        const newAppointmentEntitySaved = await AppointmentRepository.save(newAppointmentEntity)
        return newAppointmentEntitySaved
    }

}

const postCancellAppointment = async (id:number) : Promise<number | undefined> => {
    const cancelledAppointment = await AppointmentRepository.findOneBy({appointmentId:id})

    if(cancelledAppointment){
         cancelledAppointment.status = "cancelled"
         AppointmentRepository.save(cancelledAppointment)
    }
    return cancelledAppointment?.appointmentId
}

export default {getAppointments, getAppointmentById, postScheduleAppointment, postCancellAppointment}