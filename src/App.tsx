import './App.css';
import * as React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Viewer from './components/ShowText';
import { submitCredentials } from './actions';
import { connect } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return {
    submitCredentials: (user: string, pass: string) => { dispatch(submitCredentials(user,pass)) }
  }
};

interface IConnectedAppProps {
  submitCredentials(user: string, pass: string): void;
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
        <div className='centered'>
          <TextField onChange={ this.handleUserChange }/>
          <TextField onChange={ this.handlePassChange }/>
        
          <Button
            variant='outlined'
            color='primary'
            onClick={ this.updateFields }
          >Help Me!</Button>
        </div>
        <Viewer/>
      </React.Fragment>
    );
  }

  updateFields = (event: React.MouseEvent<HTMLInputElement>) => {
    const { user, pass } = this.state;
    this.props.submitCredentials(user, pass);
  }

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