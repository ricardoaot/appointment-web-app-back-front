import { DataSource } from "typeorm";
import { UserEntity } from "../entities/userEntity";
import { AppointmentEntity } from "../entities/appointmentEntity";
import { CredentialEntity } from "../entities/credentialEntity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "root",
  database: "soyhenry_db",
  dropSchema: true,
  synchronize: true,
  logging: false, // display logs
  entities: [UserEntity, AppointmentEntity, CredentialEntity],
  subscribers: [],
  migrations: [],
});

export const UserRepository = AppDataSource.getRepository(UserEntity);
export const CredentialRepository = AppDataSource.getRepository(CredentialEntity);
export const AppointmentRepository = AppDataSource.getRepository(AppointmentEntity);