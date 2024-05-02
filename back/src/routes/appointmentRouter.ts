import express from "express";
import AppointmentController  from "../controllers/appointmentController";

const appointmentRouter = express.Router();

appointmentRouter.get("/", AppointmentController.getAppointmentController)
appointmentRouter.post("/schedule", AppointmentController.postScheduleAppointmentController)
appointmentRouter.post("/cancel", AppointmentController.postCancelAppointmentController)
appointmentRouter.get("/:id", AppointmentController.getAppointmentByIdController)

export default appointmentRouter