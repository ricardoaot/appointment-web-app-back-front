import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity ({name: "credentials"})

export class CredentialEntity {

    @PrimaryGeneratedColumn()
    credentialId: number

    @Column({length: 100})
    userName: string;

    @Column({length: 100})
    password: string;

}
