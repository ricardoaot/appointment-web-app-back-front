import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
//import { VehicleEntity } from "./VehicleEntity"

import { CredentialEntity } from "./credentialEntity"

import { AppointmentEntity } from "./appointmentEntity"

@Entity({name: "users"})

export class UserEntity {
    @PrimaryGeneratedColumn()
    userId: number

    @Column({length: 100})
    name: string // VARCHAR(100)

    @Column()
    email: string

    @Column()
    birthdate: Date

    @Column()
    nDni: string


    @OneToMany(
        () => AppointmentEntity,
        (appointment) => appointment.userColumn)
    appointmentsColumn: AppointmentEntity[]

    @OneToOne(() => CredentialEntity)
    @JoinColumn()
    credential: CredentialEntity

}
