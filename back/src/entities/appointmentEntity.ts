import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm"

import { UserEntity } from "./userEntity"

@Entity({name: "appointments"})
export class AppointmentEntity {

    @PrimaryGeneratedColumn()
    appointmentId: number

    @Column({length: 500, nullable: true})
    description: string;
    
    @Column({type: "date"})
    date: Date;

    @Column({type: "time"})
    time: Date;

    @Column({length: 100})
    status: string;

    @ManyToOne(
        () => UserEntity, 
        (user) => user.appointments)
    userId: UserEntity

    //@Column()
    //userId: number

}

