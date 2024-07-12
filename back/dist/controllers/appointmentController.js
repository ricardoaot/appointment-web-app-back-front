"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const appointmentService_1 = __importDefault(require("../services/appointmentService"));
const getAppointmentController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const appointments = yield appointmentService_1.default.getAppointments();
    res.json(appointments);
});
const getAppointmentByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const appointment = yield appointmentService_1.default.getAppointmentById(Number(req.params.id));
    res.json(appointment);
});
const postScheduleAppointmentController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const appointmentResult = yield appointmentService_1.default.postScheduleAppointment(req.body);
    res.json(appointmentResult);
});
const postCancelAppointmentController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cancelledAppointment = yield appointmentService_1.default.postCancellAppointment(Number(req.params.id));
    res.json(cancelledAppointment);
});
const AppointmentController = {
    getAppointmentController,
    getAppointmentByIdController,
    postScheduleAppointmentController,
    postCancelAppointmentController
};
exports.default = AppointmentController;
