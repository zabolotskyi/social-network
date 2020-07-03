import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header/Header';
import MessagesContainer from './components/Messages/MessagesContainer';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';

import './App.css';

const App = () => (
  <div className="app-wrapper">
    <Header />
    <Navbar />
    <div className="app-wrapper-content">
      <Route path="/profile" render={() => <Profile />} />
      <Route exact path="/messages" render={() => <MessagesContainer />} />
      <Route path="/news" component={News} />
      <Route path="/music" component={Music} />
      <Route path="/settings" component={Settings} />
    </div>
  </div>
);

export default App;
