import * as React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Login: any = ({setUsername, setPassword}: {setUsername: (value: string) => void, setPassword: (value: string) => void }) => {
  const setUser = (e: any) => setUsername(e.target.value);
  const setPass = (e: any) => setPassword(e.target.value);
  
  return (
    <FormGroup>
      <FormControl>
        <TextField onChange={ setUser }/>
      </FormControl>
      <FormControl>
        <TextField onChange={ setPass }/>
      </FormControl>
      <FormControl>
        <Button
          variant='outlined'
          color='primary'
          // onClick={ this.validateCredentials }
        >Login</Button>
      </FormControl>
    </FormGroup>
  );
};

export default Login;