import {ICredentials} from "../interfaces/credentialInterface";
import ICredentialsDto from "../dto/credentialDto";

var credentialTable: ICredentials[] = [];

const postCreateCredentials = (credentialObject:ICredentialsDto ) => {
    const {userName, password} = credentialObject
    const credential_id = credentialTable.length+1
    const newCredential = 
    {
        credentialId: credential_id , userName, password
    }
    credentialTable.push(newCredential)
    return credential_id
}

const getValidateCredentials = async (credentialObject:ICredentialsDto): Promise<number | undefined> => {
    const {userName, password} = credentialObject
   
    const credential = credentialTable.find( 
        credential => credential.userName === userName && credential.password === password 
    ) 
    return credential?.credentialId
}

export default {postCreateCredentials, getValidateCredentials} 