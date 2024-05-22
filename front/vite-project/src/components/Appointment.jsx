import styles from "./Appointment.module.css"
const Appointment = ({ appointment }) => {
    return (
        <div className={styles.appointmentCard}>
            <h3>Date: {appointment.date}</h3>
            <h3>Time: {appointment.time}</h3>
            <h3>Status: {appointment.status}</h3>
        </div>
    )
}

export default Appointment