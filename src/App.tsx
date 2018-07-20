import './App.css';
import IAppState from  './interfaces/App.interface';

import Button from '@material-ui/core/Button';

import * as React from 'react';

class App extends React.Component<{}, IAppState> {
  constructor(props: any) {
    super(props)
    this.state = {
      password: '',
      username: ''
    }
    this.changeName = this.changeName.bind(this);
    this.changePass = this.changePass.bind(this);
  }

  public changeName(e : any) {
    this.setState({
      username: e.target.value
    })
  }

  public changePass(e: any) {
    this.setState({
      password: e.target.value
    })
  }

  public render() {
    return (
      <div>
        <Button color='primary' variant='contained'>
          Hello {this.state.username}
        </Button>
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
      
    )
  }
}

export default App;
