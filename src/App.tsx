import './App.css';
import IAppState from  './interfaces/App.interface';

import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import * as React from 'react';

class App extends React.Component<{}, IAppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      password: '',
      username: ''
    };
  }

  public changeName = (e : any) => {
    this.setState({
      username: e.target.value  
    })
  };

  public changePass = (e : any) => {
    this.setState({
      password: e.target.value
    })
  };

  public login = () => {
    alert('You logged in!');
  };

  public checkLoginEnter = (e : any) => {
    if (e.key === 'Enter') {
        this.checkLogin();
        e.preventDefault();
    }
  };

  public checkLogin = () => {
      if (this.state.password.localeCompare('password') === 0 && this.state.username.localeCompare('username') === 0) {
          this.login();
      }
  };

  public render() {

    const style: any = {
      paddingTop: '30px',
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    };


    return (
      <React.Fragment>
        <CssBaseline />
          <div style={style}>
            <TextField onChange={this.changeName} onKeyPress={this.checkLoginEnter}/>
            <TextField onChange={this.changePass} onKeyPress={this.checkLoginEnter}/>
          </div>
          <div style={style}>
            <Button color='primary' variant='contained' onClick={this.checkLogin}>
              Hello {this.state.username}
            </Button>
          </div>
      </React.Fragment>
    );
  }
}

export default App;
