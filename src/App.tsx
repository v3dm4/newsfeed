import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Router } from '@reach/router'
import { NavBar } from './components/layout/NavBar'

import { MainPage } from './pages/main'
import { NewsPage } from './pages/news'
import { ProfilePage } from './pages/profile'
import { LoginPage } from './pages/login'

class App extends Component {
  render() {
    return (
      <div className="container">
				<NavBar />
        <Router>
          <MainPage path="/" />
          <NewsPage path="/news" />
          <ProfilePage path="/profile" />
          <LoginPage path="/login" />
        </Router>  
			</div>	
    );
  }
}

export default App;
