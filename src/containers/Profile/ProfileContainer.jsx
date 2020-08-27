import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';

import Profile from './Profile';

import { setIsFetching, setUserProfile } from '../../redux/profileReducer';
import { getUser } from '../../api/api';

class ProfileContainer extends React.Component {

  componentDidMount() {
    this.props.setIsFetching(true);
    const userId = this.props.match.params.id ?? '9096';
    getUser(userId)
      .then(res => {
        this.props.setIsFetching(false);
        this.props.setUserProfile(res);
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

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(ProfileContainer);
