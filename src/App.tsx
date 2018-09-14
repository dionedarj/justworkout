import './App.css';
import * as React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Viewer from './components/ShowText';
import { changePass, changeUser } from './actions';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch: any ) => {
  return {
    changePass: (pass: string) => dispatch(changePass(pass)),
    changeUser: (user: string) => dispatch(changeUser(user))
  }
};

interface IConnectedAppProps {
  changePass(pass: string): void;
  changeUser(user: string): void;
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
          <TextField onChange={this.handlePassChange}/>
          <TextField onChange={this.handleUserChange}/>
        
          <Button
            variant='outlined'
            color='primary'
            onClick={this.updateFields}
          >Help Me!</Button>
        </div>
        <Viewer/>
      </React.Fragment>
    );
  }

  updateFields = (event: React.MouseEvent<HTMLInputElement>) => {
    const { user, pass } = this.state;
    this.props.changePass(pass);
    this.props.changeUser(user);
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