import React from 'react';

import Content from './components/Content';
import Header from './components/Header';
import Navbar from './components/Navbar';

import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Content />
    </div>
  )
};

export default App;
