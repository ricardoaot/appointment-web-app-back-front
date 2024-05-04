import userInterface from "../interfaces/userInterface";
import userDto from "../dto/userDto";
import credentialDto from "../dto/credentialDto";
import credentialService from "../services/credentialService";

var userTable: userInterface[] = [];
const getUsers = async () : Promise<undefined | userInterface[]> => {
    return userTable
}

const getUserById = async (id: number) : Promise<undefined | userInterface> => {
    return userTable.find(user => user.userId === id)
}

const postLoginUser = async (credentialObject: credentialDto) : Promise<number | undefined> => {
    const {userName, password} = credentialObject
    const credentialId = await credentialService.getValidateCredentials({userName, password})
    return credentialId
}
const postCreateUser = async (userObject: userDto) : Promise<number | undefined> => {
    const {name, email, birthdate, nDni} = userObject
    const userId = userTable.length+1
    const credentialId = await credentialService.postCreateCredentials({userName: email, password: nDni})
    const newUser = 
    {
        userId, name, email, birthdate, nDni, credentialId
    }
    userTable.push(newUser)
    return userId
}

export default {getUsers, getUserById, postCreateUser, postLoginUser}