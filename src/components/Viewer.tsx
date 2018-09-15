import * as React from 'react';
import { connect } from 'react-redux';
import { CredentialState } from '../interfaces/App.interface';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import '../App.css';

const mapStateToProps = (state: CredentialState) => {
  return {
    username: state.username,
    password: state.password
  };
};

const ConnectedViewer: React.SFC<any> = ({ username, password }: CredentialState) => {
  return (
    <React.Fragment>
      <FormGroup>
        <FormControl className='centered'>
          <TextField value={username} />
        </FormControl>
        <FormControl className='centered'>
          <TextField value={password} />
        </FormControl>      
      </FormGroup>
    </React.Fragment>
  );
};

export default connect(mapStateToProps)(ConnectedViewer);