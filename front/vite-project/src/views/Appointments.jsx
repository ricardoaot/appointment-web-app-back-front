import myAppointmentsData from "../helpers/myAppointmentsData";
import AppointmentRow from "../components/AppointmentRow";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAppointment } from "../redux/userAppointmentsSlice";
import swal from 'sweetalert2';
import apiService from "../services/apiServices";

const Appointments = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [newAppointment, setNewAppointment] = useState({
        title: '',
        date: '',
        time: ''
    });
    const appointments = useSelector((state) => state.userAppointmentsState) ?? [];
    const user = useSelector((state) => state.userState);
    console.log(appointments);
    console.log(user)

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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewAppointment({ ...newAppointment, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        apiService.scheculeAppointment(newAppointment)
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
            <h1>Appointments</h1>
            <h2>New Appointment</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={newAppointment.title}
                        onChange={handleInputChange}
                    />
                </div>
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
                <button type="submit">Create Appointment</button>
            </form>

            <h2>My Appointments</h2>
            {/*  <pre>{JSON.stringify(appointments, null, 2)}</pre>  */}
            {
                appointments && appointments.map((appointment) => {
                    return <AppointmentRow key={appointment.appointmentId} appointment={appointment} handleCancelOnClick={handleCancelOnClick} />;
                })
            }
        </>
    );
};

export default Appointments;
