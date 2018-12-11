import { connect } from 'react-redux';
import { CredentialState } from '../interfaces/App.interface';
import Viewer from '../components/Viewer';

const mapStateToProps = (state: CredentialState) => {
  return {
    username: state.storedCredentials.username,
    password: state.storedCredentials.password,
  };
};

export default connect(mapStateToProps)(Viewer);
