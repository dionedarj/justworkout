import './App.css';
import * as React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Viewer from './components/Viewer';
import store from './store';
import { submitCredentials, createAccount } from './actions';
import { connect } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return {
    submitCredentials: (user: string, pass: string) => { dispatch(submitCredentials(user,pass)) },
    createAccount: (user: string, pass: string) => { dispatch(createAccount(user,pass)) }
  }
};

interface IConnectedAppProps {
  submitCredentials(user: string, pass: string): void;
  createAccount(user: string, pass: string): void;
}

const initialState = {
  user: '',
  pass: ''
}

type IConnectedAppState = Readonly<typeof initialState>;

class ConnectedApp extends React.Component<IConnectedAppProps,IConnectedAppState> {
  constructor(props: IConnectedAppProps) {
    super(props);
    this.state = initialState;
  };

  render() {
    return (
      <React.Fragment>
        <CssBaseline/>
        <FormGroup>
          <FormControl className='centered'>
            <TextField onChange={ this.handleUserChange }/>
          </FormControl>
          <FormControl className='centered'>
            <TextField onChange={ this.handlePassChange }/>
          </FormControl>
          <FormControl className='centeredButton'>
            <Button
              variant='outlined'
              color='primary'
              onClick={ this.login }
            >Login</Button>
          </FormControl>
          <FormControl className='centeredButton'>
            <Button
              variant='raised'
              color='primary'
              onClick={ this.createAccount }
            >Create Account</Button>
          </FormControl>
        </FormGroup>
        <Viewer/>
      </React.Fragment>
    );
  }

  updateFields = () => {
    const { user, pass } = this.state;
    this.props.submitCredentials(user, pass);
  };

  login = () => {
    const { user, pass } = this.state;
    if (user === store.getState().storedUser && pass === store.getState().storedPass) {
      alert('correct login! :)');
    } else {
      alert('incorrect login! :(');
    }
  };

  createAccount = () => {
    const { user, pass } = this.state;
    this.props.createAccount(user,pass);
    alert('Account Created!');
  };

  handlePassChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      pass: event.currentTarget.value,
    });
  };
  
  handleUserChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      user: event.currentTarget.value,
    });
  };
};

const App = connect(null, mapDispatchToProps)(ConnectedApp)

export default App;