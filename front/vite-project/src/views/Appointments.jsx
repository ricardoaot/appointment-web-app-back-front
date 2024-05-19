import myAppointmentsData from "../helpers/myAppointmentsData"
import Appointment from "../components/Appointment"
import { useState } from "react"

const Appointments = () => {

    const [appointment, setAppointment] = useState(myAppointmentsData)
    return (
        <>
            <h1>Appointments</h1>
            {
                myAppointmentsData.map( (appointment) => {
                    return <Appointment key={appointment.appointmentId} appointment={appointment} />
                })    
            }
            
        </>
    ) 
}  

export default Appointments