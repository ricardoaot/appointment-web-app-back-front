"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentRepository = exports.CredentialRepository = exports.UserRepository = exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const userEntity_1 = require("../entities/userEntity");
const appointmentEntity_1 = require("../entities/appointmentEntity");
const credentialEntity_1 = require("../entities/credentialEntity");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "soyhenry_db",
    //dropSchema: true,
    synchronize: true,
    logging: false, // display logs
    entities: [userEntity_1.UserEntity, appointmentEntity_1.AppointmentEntity, credentialEntity_1.CredentialEntity],
    subscribers: [],
    migrations: [],
});
exports.UserRepository = exports.AppDataSource.getRepository(userEntity_1.UserEntity);
exports.CredentialRepository = exports.AppDataSource.getRepository(credentialEntity_1.CredentialEntity);
exports.AppointmentRepository = exports.AppDataSource.getRepository(appointmentEntity_1.AppointmentEntity);
