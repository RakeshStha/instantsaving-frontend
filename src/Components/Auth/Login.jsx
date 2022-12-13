import React, { Component } from "react";
import "./Auth.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/authActions";
import classnames from "classnames";
import Logo from "../assets/img/logos.png"

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  onChangeLogin = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  loginSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
  };

  render() {
    const { email, password, errors } = this.state;
    return (
     <div className="row d-flex align-items-center justify-content-center logins">
      <div className="col-sm-6 col-lg-4">
      <div className="card">
        <div className="card-body">
        <form>
          <h1 className="h3 mb-3 fw-normal text-center"><img src={Logo} alt="Logo" /></h1>

          <div className="form-floating">
            <input
              type="email"
              placeholder="Enter your email"
              id="email"
              value={email}
              onChange={this.onChangeLogin}
              error={errors.email}
              className={classnames("form-control", {
                invalid: errors.email || errors.emailNotFound,
              })}
            />
            <label for="floatingInput">Email address</label>
            <br />
            <span className="text-danger">
              {errors.email}
              {errors.emailNotFound}
            </span>
          </div>
          <div className="form-floating">
            <input
              type="password"
              placeholder="Enter your password"
              id="password"
              value={password}
              onChange={this.onChangeLogin}
              error={errors.password}
              className={classnames("form-control", {
                invalid: errors.password || errors.passwordIncorrect,
              })}
            />

            <label for="floatingPassword">Password</label>
            <br />
            <span className="text-danger">
              {errors.password}
              {errors.passwordIncorrect}
            </span>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={this.loginSubmit}>
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted text-center">&copy; Instant Saving 27
           {/* Design and developed by <a href="https://www.shrestharakesh.com.np">Rakesh Shrestha</a> */}
           </p>
        </form>
        </div>
      </div>
      </div>
     </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { loginUser })(Login);
