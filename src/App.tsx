import './App.css';
import * as React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import Viewer from './components/ShowText';
import { changeCredential, loadCredentials, submitCredentials } from './actions';
import { connect } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';
import { FormControl } from '@material-ui/core';

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return {
    changeCredential: (credential: string, value: string) => { dispatch(changeCredential(credential, value)) },
    loadCredentials: () => { dispatch<any>(loadCredentials())},
    submitCredentials: (user: string, pass: string) => { dispatch(submitCredentials(user, pass))}
  }
};

interface IConnectedAppProps {
  changeCredential(credential: string, value: string): void;
  loadCredentials(): void;
  submitCredentials(user: string, pass: string): void;
}

const initialState = {
  username: '',
  password: ''
}

type IConnectedAppState = Readonly<typeof initialState>;

class ConnectedApp extends React.Component<IConnectedAppProps, IConnectedAppState> {
  constructor(props: IConnectedAppProps) {
    super(props);
    this.state = initialState;
  };

  componentDidMount() {
    this.props.loadCredentials();
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline/>
        <div className='centered'>
          <FormGroup>
            <FormControl>
              <TextField onChange={ this.handleUserChange }/>
            </FormControl>
            <FormControl>
              <TextField onChange={ this.handlePassChange }/>
            </FormControl>
            <FormControl>
              <Button
                variant='outlined'
                color='primary'
                onClick={ this.validateCredentials }
              >Help Me!</Button>
            </FormControl>
          </FormGroup>
        </div>
        <Viewer/>
      </React.Fragment>
    );
  }

  validateCredentials = () => {
    const { username, password } = this.state;
    this.props.changeCredential('username', username);
    this.props.changeCredential('password', password);
  }

  handlePassChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      password: event.currentTarget.value,
    });
  };
  
  handleUserChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      username: event.currentTarget.value,
    });
  };
};

const App = connect(null, mapDispatchToProps)(ConnectedApp)

export default App;