import myAppointmentsData from "../helpers/myAppointmentsData";
import AppointmentRow from "../components/AppointmentRow";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAppointment } from "../redux/userAppointmentsSlice";
import swal from 'sweetalert2';
import apiService from "../services/apiServices";
import { Button } from "../components/ui/button";
import { AppointmentTable } from "@/components/AppointmentTable";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Appointments = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const appointments = useSelector((state) => state.userAppointmentsState) ?? [];
    const user = useSelector((state) => state.userState);
    console.log(appointments);
    console.log(user)

    const [newAppointment, setNewAppointment] = useState({        
        date: '',
        time: '',
        description: '',
        userId: Number(user?.user?.userId),
    });

    const fetchAppointments = () => {
        
        if (user.login) {
            const userId = Number(user.user.userId)
            apiService.getUserById(userId)
                .then((response) => {
                    console.log(response.data.appointments);
                    dispatch(fetchAppointment(response.data.appointments));
                });
        } else {
            navigate("/login");
        }
    };

    useEffect(() => {
        fetchAppointments();
    }, []);



    const handleCancelOnClick = (id) => {
        console.log(id);
        apiService.cancelAppointment(id)
            .then((response) => {
                swal.fire({
                    icon: 'success',
                    title: 'Appointment Cancelled',
                    timer: 2000
                });
                fetchAppointments();
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const handleDetailOnClick = (id) => {
        navigate(`/appointment/${id}`);
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewAppointment({ ...newAppointment, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        apiService.scheduleAppointment(newAppointment)
            .then((response) => {
                swal.fire({
                    icon: 'success',
                    title: 'Appointment Created',
                    timer: 2000
                });
                fetchAppointments();
                setNewAppointment({ date: '', time: '' });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 m-8 gap-y-4">
                
                

                <Card className="h-full col-span-1 m-2">
                    <CardHeader>
                        <CardTitle>New Booking</CardTitle>
                        <CardDescription>
                        Lorem ipsum dolor sit amet consectetur.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className=' items-center w-full'>

                    <form onSubmit={handleSubmit}>
                        
                        <div>
                            <label>Date:</label>
                            <input
                                type="date"
                                name="date"
                                value={newAppointment.date}
                                onChange={handleInputChange}
                                />
                        </div>
                        <div>
                            <label>Time:</label>
                            <input
                                type="time"
                                name="time"
                                value={newAppointment.time}
                                onChange={handleInputChange}
                                />
                        </div>
                        <div>
                            <label>Description:</label>
                            <input
                                type="text"
                                name="description"
                                value={newAppointment.description}
                                onChange={handleInputChange}
                                />
                        </div>
                        <button type="submit">Create Appointment</button>
                    </form>

                    </CardContent>
                </Card>                

                <Card className="h-full  col-span-2 m-2">
                    <CardHeader>
                        <CardTitle>My Bookings</CardTitle>
                        <CardDescription>
                        Lorem ipsum dolor sit amet consectetur.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className=' items-center w-full'>
                        <AppointmentTable 
                            appointments={appointments} 
                            handleCancelOnClick={handleCancelOnClick} 

                            handleDetailOnClick={handleDetailOnClick} 
                        />
                    </CardContent>
                </Card>
            </div>
        </>
    );
};

export default Appointments;
