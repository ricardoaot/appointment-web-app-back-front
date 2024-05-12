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
    const userTable = await UserRepository.findOneOrFail({
        where: { userId: id },
        relations: ["appointments"],
        //
      });
    return userTable
}

const postLoginUser = async (credentialObject: credentialDto) : Promise<UserEntity | undefined> => {
    const {userName, password} = credentialObject
    const credentialId = await credentialService.getValidateCredentials({userName, password})

    const foundUser = await UserRepository
    .createQueryBuilder('users')
    .leftJoinAndSelect('users.credential', 'credential')
//    .addSelect('usersAlias.userId AS alias1')
//    .addSelect('usersAlias.name AS nombre')
    .select([
        'users.userId', 
        'users.name', 
        'users.email', 
        'users.birthdate', 
        'users.nDni'])  
    .where('credential.credentialId = :value', { value: credentialId })
    .getOneOrFail();

    return foundUser;
}
const postCreateUser = async (userObject: userDto) : Promise<undefined | UserEntity> => {
    const {name, email, birthdate, nDni} = userObject
    const credential = await credentialService.postCreateCredentials({userName: email, password: nDni})
    const newUser = 
    {
         name, email, birthdate, nDni
    }
    console.log(newUser)
    const newUserEntity = UserRepository.create(newUser);
    const newUserEntitySaved = await UserRepository.save(newUserEntity)
    const userFound = await getUserById(newUserEntitySaved.userId)
    if(userFound){
        userFound.credential = credential
        await UserRepository.save(userFound)
    }
    return newUserEntitySaved
}

export default {getUsers, getUserById, postCreateUser, postLoginUser}