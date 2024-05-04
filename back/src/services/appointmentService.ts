import appointmentDto from "../dto/appointmentDto";
import appointmentInterface from "../interfaces/appointmentInterface";

var appointmentTable: appointmentInterface[] = [
    {   "id":1,
        "date": "2022-10-10", 
        "time": "10:00", 
        "userId": 1, 
        "status": "pending"
    }
];

const getAppointments = async () : Promise<undefined | appointmentInterface[]> => {
    return appointmentTable
}

const getAppointmentById = async (id: number) : Promise<undefined | appointmentInterface> => {
    return appointmentTable.find(appointment => appointment.id === id)
}

const postScheduleAppointment = async (appointmentObject: appointmentDto) : Promise<number | undefined> => {
    //console.log(appointmentObject)
    const appointmentId = appointmentTable.length+1
    const {date, time, userId} = appointmentObject
    return appointmentTable.push({id:appointmentId,date, time, userId, status:"pending"})
    //return undefined
}

const postCancellAppointment = async (id:number) : Promise<number | undefined> => {
    const cancelledAppointment = appointmentTable.find(appointment => appointment.id === id)
    if(cancelledAppointment){
         cancelledAppointment.status = "cancelled"
    }
    return cancelledAppointment?.id
}

export default {getAppointments, getAppointmentById, postScheduleAppointment, postCancellAppointment}