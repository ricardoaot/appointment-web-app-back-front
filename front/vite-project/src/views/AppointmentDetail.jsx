import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import apiService from "../services/apiServices"
const AppointmentParams = () => {
    const {id} = useParams()
    const [appointment, setAppointment] = useState({})
    const navigate = useNavigate()
    useEffect(() => {
        apiService.getAppointmentById(id)
        .then((response) => {
            console.log(response.data)
            setAppointment(response.data)
        })
    },[])
    
    const handleBackOnClick = () => {
        navigate("/appointments")
    }
    return (
        <div>
            <h1>AppointmentParams</h1>
            <p>ID: {id}</p>
            <h3>Date: {appointment.date}</h3>
            <h3>Time: {appointment.time}</h3>
            <h3>Status: {appointment.status}</h3>
            <button onClick={handleBackOnClick}>Back</button>
        </div>
    )
}   

export default AppointmentParams