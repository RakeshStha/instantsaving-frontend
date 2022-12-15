import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css"
import './App.css';
import "./Components/shared/Navbar.css";
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import Navbar from './Components/shared/Navbar';
import NotFound from './Components/NotFound/NotFound';
import { Provider } from 'react-redux';
import store from './redux/store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './redux/actions/authActions';
import PrivateRoute from './Components/private-route/PrivateRoute';
import { TeamMembers, YourPortfolio, TeamPortfolio, Transcation, Notifications, Rules, ApplyLoan} from "./Components/pages"

function App() {
  // Check for token to keep user logged in
  if (localStorage.jwtToken) {
    // Set auth token header auth
    const token = localStorage.jwtToken;
    setAuthToken(token);
    // Decode token and get user info and exp
    const decoded = jwt_decode(token);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded)); // Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (decoded.exp < currentTime) {
      // Logout user
      store.dispatch(logoutUser()); // Redirect to login
      window.location.href = './login';
    }
  }
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Switch>
            <PrivateRoute exact path="/dashboard" component={TeamMembers} />
            <PrivateRoute exact path="/your-portfolio" component={YourPortfolio} />
            <PrivateRoute exact path="/team-portfolio" component={TeamPortfolio} />
            <PrivateRoute exact path="/transcation" component={Transcation} />
            <PrivateRoute exact path="/notifications" component={Notifications} />
            <PrivateRoute exact path="/apply-loan" component={ApplyLoan} />
            <PrivateRoute exact path="/rules" component={Rules} />
            <Route path="*" component={NotFound} />
          </Switch>
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
