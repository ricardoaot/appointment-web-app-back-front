interface IUser {
    userId: number;
    name: string;
    email: string;
    birthdate: string;
    nDni: string;
    credentialId: number;
}

interface ICredentials {
    credentialId: number;
    userName: string;
    password: string;
}

export type {ICredentials, IUser}
