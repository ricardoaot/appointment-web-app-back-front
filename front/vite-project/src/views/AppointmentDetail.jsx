import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import apiService from "../services/apiServices"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
            <Card className="h-full w-[400px] m-8">
                <CardHeader>
                    <CardTitle>Appointment Details</CardTitle>
                    <CardDescription>
                        Bellow are the detail of your appointment
                    </CardDescription>
                </CardHeader>
                <CardContent className=' items-center w-full'>
                    <p>ID: {id}</p>
                    <h3>Date: {appointment.date}</h3>
                    <h3>Time: {appointment.time}</h3>
                    <h3>Description: {appointment.description}</h3>
                    <h3>Status: {appointment.status}</h3>
                    <button onClick={handleBackOnClick}>Back</button>
                </CardContent>
            </Card>
        </div>
    )
}   

export default AppointmentParams