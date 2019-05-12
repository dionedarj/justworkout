import * as React from 'react';
import { CredentialProps } from '../../interfaces/App.interface';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import '../../App.css';

const ConnectedViewer: React.FunctionComponent<any> = ({ username, password }: CredentialProps) => {
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

export default ConnectedViewer;