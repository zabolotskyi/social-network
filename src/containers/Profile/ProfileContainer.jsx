import * as axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';

import Profile from './Profile';

import { setIsFetching, setUserProfile } from '../../redux/profileReducer';

class ProfileContainer extends React.Component {

  componentDidMount() {
    this.props.setIsFetching(true);
    axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
      .then(res => {
        this.props.setIsFetching(false);
        this.props.setUserProfile(res.data);
      });
  }

  render() {
    return (
      <Profile userProfile={this.props.userProfile} />
    );
  }
}

const mapStateToProps = state => ({
  userProfile: state.profile.userProfile
});

const mapDispatchToProps = {
  setUserProfile,
  setIsFetching
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
