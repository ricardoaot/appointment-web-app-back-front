import myAppointmentsData from "../helpers/myAppointmentsData"
import Appointment from "../components/Appointment"
import { useEffect, useState } from "react"
import axios from "axios"

const Appointments = () => {

    const [appointments, setAppointment] = useState([])
    
    useEffect(() => {
        axios.get("http://localhost:3000/appointment")
        .then((response) => {
            setAppointment(response.data)
        })
    }, [])
 
    return (
        <>
            <h1>Appointments</h1>
            {
                appointments.map( (appointment) => {
                    return <Appointment key={appointment.appointmentId} appointment={appointment} />
                })    
            }
            
        </>
    ) 
}  

export default Appointments