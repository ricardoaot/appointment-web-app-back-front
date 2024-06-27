import { Link } from "react-router-dom"
import styles from "./Appointment.module.css"
const Appointment = ({ appointment, handleCancelOnClick }) => {
    return (
        <div className={styles.appointmentCard}>
            <Link to={`/appointment/${appointment.appointmentId}`}> View Detail ID:{appointment.appointmentId}</Link>
            <h3>Date: {appointment.date}</h3>
            <h3>Time: {appointment.time}</h3>
            <h3>Status: {appointment.status}</h3>
            <button onClick={() => handleCancelOnClick(appointment.appointmentId)}>Cancel</button>
        </div>
    )
}

export default Appointment