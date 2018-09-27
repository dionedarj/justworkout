import * as React from 'react';
import { UserPassState } from '../interfaces/App.interface';
import TextField from '@material-ui/core/TextField';

const Viewer: React.SFC<UserPassState> = ({ username, password }) => {
  return (
    <React.Fragment>
      <TextField value={username} />
      <TextField value={password} />
    </React.Fragment>
  );
};

export default Viewer;