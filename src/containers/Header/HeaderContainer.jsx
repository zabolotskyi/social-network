import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';

import { setAuthUserData } from '../../redux/authReducer';
import { login } from '../../api/api';

class HeaderContainer extends React.Component {

  componentDidMount() {
    login()
      .then(res => {
        if (res.resultCode === 0) {
          this.props.setAuthUserData(res.data);
        }
      });
    }

  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  login: state.auth.login
});

const mapDispatchToProps = ({
  setAuthUserData
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
