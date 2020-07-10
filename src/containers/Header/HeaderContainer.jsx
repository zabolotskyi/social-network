import * as axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';

import { setAuthUserData } from '../../redux/authReducer';

class HeaderContainer extends React.Component {

  componentDidMount() {
    axios.get(
      'https://social-network.samuraijs.com/api/1.0/auth/me',
      { withCredentials: true }
    )
      .then(res => {
        if (res.data.resultCode === 0) {
          this.props.setAuthUserData(res.data.data);
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
