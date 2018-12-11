export interface CredentialState {
<<<<<<< HEAD
    username: string,
    password: string,
    storedUser: string,
    storedPass: string
=======
    readonly storedCredentials: {
        readonly username: string,
        readonly password: string
    }
    readonly userCredentials: {
        readonly username: string,
        readonly password: string
    }
}

export interface UserPassState {
    readonly username: string,
    readonly password: string
>>>>>>> 17e319ace71617a3eb0fe379592674ecd612b453
}

export interface CredentialProps {
    readonly username: string,
    readonly password: string
}