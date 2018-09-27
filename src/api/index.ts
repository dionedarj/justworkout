import { UserPassState } from '../interfaces/App.interface';

export const loadJson = async (): Promise<UserPassState> => {
  const data = await fetch('test.json');
  const json = await data.json();

  return json;
}