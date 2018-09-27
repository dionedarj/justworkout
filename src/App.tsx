import './App.css';
import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import ViewerContainer from './containers/ViewerContainer';
import LoginContainer from './containers/LoginContainer';
import { changeUserCredential, loadCredentials, submitCredentials } from './actions';
import { connect } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return {
    changeCredential: (credential: string, value: string) => { dispatch(changeUserCredential(credential, value)) },
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
          <LoginContainer />
        </div>
        <ViewerContainer />
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