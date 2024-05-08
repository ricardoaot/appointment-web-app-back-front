import {ICredentials} from "../interfaces/credentialInterface";
import ICredentialsDto from "../dto/credentialDto";

import { CredentialRepository } from "../config/data-source";

var credentialTable: ICredentials[] = [];

const postCreateCredentials = async (credentialObject:ICredentialsDto ) => {
    const {userName, password} = credentialObject
    const newCredential = {userName, password}
    CredentialRepository.create(newCredential)
    const credentialSaved = await CredentialRepository.save(newCredential)
    return credentialSaved.credentialId
}

const getValidateCredentials = async (credentialObject:ICredentialsDto): Promise<number | undefined> => {
    const {userName, password} = credentialObject
    const credential = await CredentialRepository.findOneBy({userName, password})
    
    return credential?.credentialId
}

export default {postCreateCredentials, getValidateCredentials} 