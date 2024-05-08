import userInterface from "../interfaces/userInterface";
import userDto from "../dto/userDto";
import credentialDto from "../dto/credentialDto";
import credentialService from "../services/credentialService";

import { UserRepository, CredentialRepository, AppointmentRepository } from "../config/data-source";
import { UserEntity } from "../entities/userEntity";
import { CredentialEntity } from "../entities/credentialEntity";

//DTO: data transfer object

var userTable: userInterface[] = [];
const getUsers = async () : Promise<undefined | UserEntity[]> => {
    const userTable = await UserRepository.find()
    return userTable
}

const getUserById = async (id: number) : Promise<null | UserEntity> => {
    const userTable = await UserRepository.findOneBy({userId: id})
    return userTable
}

const postLoginUser = async (credentialObject: credentialDto) : Promise<number | undefined> => {
    const {userName, password} = credentialObject
    const credentialId = await credentialService.getValidateCredentials({userName, password})
    return credentialId
}
const postCreateUser = async (userObject: userDto) : Promise<undefined | UserEntity> => {
    const {name, email, birthdate, nDni} = userObject
    const credentialId = await credentialService.postCreateCredentials({userName: email, password: nDni})
    const newUser = 
    {
         name, email, birthdate, nDni, credentialId
    }
    const newUserEntity = UserRepository.create(newUser);
    const newUserEntitySaved = await UserRepository.save(newUserEntity)
    return newUserEntitySaved
}

export default {getUsers, getUserById, postCreateUser, postLoginUser}