export type CredentialState = {
  readonly storedCredentials: {
    readonly username: string,
    readonly password: string,
  }
  readonly loginCredentials: {
    readonly username: string,
    readonly password: string,
  },
};

export interface UserPassState {
  readonly username: string;
  readonly password: string;
}

export interface CredentialProps {
  readonly username: string;
  readonly password: string;
}
