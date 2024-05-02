import {ICredentials, IUser} from "../interfaces/userInterface";
import ICredentialsDto from "../dto/credentialDto";
var credentialTable: ICredentials[] = [];

const postCreateCredentials = (credentialObject:ICredentialsDto ) => {
    const {userName, password} = credentialObject
    const newCredential = 
    {
        credentialId: credentialTable.length+1, userName, password
    }
    credentialTable.push(newCredential)
    const credential_id = 1
    return credential_id
}