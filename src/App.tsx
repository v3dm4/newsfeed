import React, { Component } from 'react';
import './App.css';
import { Router } from '@reach/router'
import NavBar from './components/layout/NavBar'
import ErrorBoundary from './components/ErrorBoundary'

const MainPage = React.lazy(() => import('./pages/Main'))
const NewsPage = React.lazy(() => import('./pages/News'))
const ProfilePage = React.lazy(() => import('./pages/Profile'))
const LoginPage = React.lazy(() => import('./pages/Login'))

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <div className="container">
          <NavBar />
          <React.Suspense fallback={<div>...Loading</div>}>
            <Router>
              <MainPage path="/" />
              <NewsPage path="/news" />
              <ProfilePage path="/profile" />
              <LoginPage path="/login" />
            </Router>
          </React.Suspense>
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
