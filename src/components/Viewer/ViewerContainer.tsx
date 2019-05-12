import { connect } from 'react-redux';
import { CredentialState, CredentialProps } from '../../interfaces/App.interface';
import Viewer from './Viewer';

const mapStateToProps = (state: CredentialState): CredentialProps => ({
    username: state.storedCredentials.username,
    password: state.storedCredentials.password
});

export default connect(mapStateToProps)(Viewer);