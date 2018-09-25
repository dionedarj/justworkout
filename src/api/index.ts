import { CredentialState } from '../interfaces/App.interface';

export const loadJson = async (): Promise<CredentialState> => {
  const data = await fetch('test.json');
  const json = await data.json();

  return json;
}