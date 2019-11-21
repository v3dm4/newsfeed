import React, { Component } from "react";
import "./App.css";
import { Router, Redirect } from "@reach/router";
import NavBar from "./components/layout/NavBar";
import ErrorBoundary from "./components/ErrorBoundary";

const MainPage = React.lazy(() => import("./pages/main"));
const NewsPage = React.lazy(() => import("./pages/news"));
const ProfilePage = React.lazy(() => import("./pages/profile"));
const LoginPage = React.lazy(() => import("./pages/login"));

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <div className="container">
          <NavBar />
          <React.Suspense fallback={<div>...Loading</div>}>
            <Router>
              <MainPage path="/" />
              <Redirect from="/news" to="/news/1" noThrow />
              <NewsPage path="/news/:page" />
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
