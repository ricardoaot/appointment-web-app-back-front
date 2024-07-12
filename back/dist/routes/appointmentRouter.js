"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const appointmentController_1 = __importDefault(require("../controllers/appointmentController"));
const appointmentRouter = express_1.default.Router();
appointmentRouter.get("/", appointmentController_1.default.getAppointmentController);
appointmentRouter.post("/schedule", appointmentController_1.default.postScheduleAppointmentController);
appointmentRouter.put("/cancel/:id", appointmentController_1.default.postCancelAppointmentController);
appointmentRouter.get("/:id", appointmentController_1.default.getAppointmentByIdController);
exports.default = appointmentRouter;
