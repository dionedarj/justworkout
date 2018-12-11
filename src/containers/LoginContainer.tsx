import Login from '../components/Login';
import { changeCredential } from '../actions';
import { AnyAction, Dispatch } from 'redux';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return {
    setUsername: (value: string) => dispatch(changeCredential('username', value)),
    setPassword: (value: string) => dispatch(changeCredential('password', value)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
