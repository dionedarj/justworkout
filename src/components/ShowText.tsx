import * as React from 'react';
import { connect } from 'react-redux';
import { CredentialState } from '../interfaces/App.interface';
import TextField from '@material-ui/core/TextField';

const mapStateToProps = (state: CredentialState) => {
  return {
    username: state.username,
    password: state.password
  };
};

const ConnectedViewer: React.SFC<any> = ({ username, password }: CredentialState) => {
  return (
    <React.Fragment>
      <TextField value={username} />
      <TextField value={password} />
    </React.Fragment>
  );
};

export default connect(mapStateToProps)(ConnectedViewer);