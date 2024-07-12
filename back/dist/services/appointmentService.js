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
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../config/data-source");
var appointmentTable = [
    { "id": 1,
        "date": "2022-10-10",
        "time": "10:00",
        "userId": 1,
        "status": "pending"
    }
];
const getAppointments = () => __awaiter(void 0, void 0, void 0, function* () {
    const appointmentTable = data_source_1.AppointmentRepository.find();
    return appointmentTable;
});
const getAppointmentById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const appointmentTable = data_source_1.AppointmentRepository.findOneBy({ appointmentId: id });
    return appointmentTable;
});
const postScheduleAppointment = (appointmentObject) => __awaiter(void 0, void 0, void 0, function* () {
    const { date, time, userId } = appointmentObject;
    const userFound = yield data_source_1.UserRepository.findOneBy({ userId });
    if (userFound) {
        const newAppointment = { date, time, status: "pending", userId: userFound };
        const newAppointmentEntity = data_source_1.AppointmentRepository.create(newAppointment);
        const newAppointmentEntitySaved = yield data_source_1.AppointmentRepository.save(newAppointmentEntity);
        return newAppointmentEntitySaved;
    }
});
const postCancellAppointment = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const cancelledAppointment = yield data_source_1.AppointmentRepository.findOneBy({ appointmentId: id });
    if (cancelledAppointment) {
        cancelledAppointment.status = "cancelled";
        data_source_1.AppointmentRepository.save(cancelledAppointment);
    }
    return cancelledAppointment === null || cancelledAppointment === void 0 ? void 0 : cancelledAppointment.appointmentId;
});
exports.default = { getAppointments, getAppointmentById, postScheduleAppointment, postCancellAppointment };
