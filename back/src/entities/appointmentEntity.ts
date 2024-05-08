import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm"

import { UserEntity } from "./userEntity"

@Entity({name: "appointments"})
export class AppointmentEntity {

    @PrimaryGeneratedColumn()
    appointmentId: number
    
    @Column()
    date: Date;

    @Column({type: "time"})
    time: Date;

    @Column({length: 100})
    status: string;
    

    @ManyToOne(
        () => UserEntity, 
        (user) => user.appointmentsColumn)
    userColumn: UserEntity

}
