import './App.css';
import IAppState from  './interfaces/App.interface';

import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';

import * as React from 'react';

class App extends React.Component<{}, IAppState> {
  constructor(props: any) {
    super(props)
    this.state = {
      password: '',
      username: ''
    }
  }

  public changeName = (e : any) => {
    this.setState({
      username: e.target.value  
    })
  }

  public changePass = (e: any) => {
    this.setState({
      password: e.target.value
    })
  }

  public alertName = (e: any) => {
    alert(this.state.username)
  }

  public render() {

    const style: any = {
      paddingTop: '30px',
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }


    return (
      <React.Fragment>
        <CssBaseline />
          <div style={style}>
            <input
              type='text'
              value={this.state.password}
              onChange={this.changePass}
            />
            <input
              type='text'
              value={this.state.username}
              onChange={this.changeName}
            />
          </div>
          <div style={style}>
            <Button color='primary' variant='contained' onClick={this.alertName}>
              Hello {this.state.username}
            </Button>
          </div>
      </React.Fragment>
    )
  }
}

export default App;
