import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as authActions from './auth.actions';
import Login from './components/Login';

function mapStateToProps(state) {
    return {
        identity: state.identity,
        auth: state.auth
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(authActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);