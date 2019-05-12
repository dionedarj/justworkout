import Login from './Login';
import { changeUserCredential } from '../../actions';
import { AnyAction, Dispatch } from 'redux';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        setUsername: (value: string) => dispatch(changeUserCredential('username', value)),
        setPassword: (value: string) => dispatch(changeUserCredential('password', value))
    };
};

export default connect(null, mapDispatchToProps)(Login);