import React from 'react';
import { Route } from 'react-router-dom';

import HeaderContainer from './containers/Header/HeaderContainer';
import MessagesContainer from './containers/Messages/MessagesContainer';
import Music from './containers/Music/Music';
import Navbar from './containers/Navbar/Navbar';
import News from './containers/News/News';
import ProfileContainer from './containers/Profile/ProfileContainer';
import Settings from './containers/Settings/Settings';
import UsersContainer from './containers/Users/UsersContainer';

import './App.css';

const App = () => (
  <div className="app-wrapper">
    <HeaderContainer />
    <Navbar />
    <div className="app-wrapper-content">
      <Route path="/profile/:id?" render={() => <ProfileContainer />} />
      <Route exact path="/messages" render={() => <MessagesContainer />} />
      <Route path="/users" render={() => <UsersContainer />} />
      <Route path="/news" component={News} />
      <Route path="/music" component={Music} />
      <Route path="/settings" component={Settings} />
    </div>
  </div>
);

export default App;
