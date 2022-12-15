import React, { Component } from 'react';
import './Auth.css';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../../redux/actions/authActions';
import classnames from 'classnames';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChangeRegister = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  registerSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors, name, password, password2, email } = this.state;
    return (
      <section className="register">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">
            {/* <div className="col-lg-6 d-flex align-items-center justify-content-center">
              <div className="">
                <h4 className="text-capitalize">Hello Mates,</h4>
                <h2 className="text-capitalize">Welcome to our saving</h2>
              </div>
            </div> */}
            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                <h1>Signup</h1>
                <form noValidate onSubmit={this.registerSubmit}>
                    <div class="form-group mb-3">
                      <label htmlFor="name">Full Name</label> <br />
                      <input
                        type="text"
                        placeholder="Enter your name"
                        id="name"
                        value={name}
                        onChange={this.onChangeRegister}
                        error={errors.name}
                        className={`form-control ${errors?.name ? 'is-invalid' : ''}`}
                      />
                      <span className="text-danger my-1">{errors.name}</span>
                    </div>
                    <div class="form-group mb-3">
                      <label htmlFor="Email">Email</label> <br />
                      <input
                        type="email"
                        // className="input-control"
                        placeholder="Enter your email"
                        id="email"
                        value={email}
                        onChange={this.onChangeRegister}
                        error={errors.email}
                        className={`form-control ${errors?.email ? 'is-invalid' : ''}`}
                      />
                      <span className="text-danger my-1">{errors.email}</span>
                    </div>
                    <div class="form-group mb-3">
                      <label htmlFor="Password">Password</label> <br />
                      <input
                        type="password"
                        // className="input-control"
                        placeholder="Enter your password"
                        id="password"
                        value={password}
                        onChange={this.onChangeRegister}
                        error={errors.password}
                        className={`form-control ${errors?.password ? 'is-invalid' : ''}`}
                      />
                      <span className="text-danger my-1">{errors.password}</span>
                    </div>
                    <div class="form-group mb-3">
                      <label htmlFor="Confirm Password">Confirm Password</label>
                      <br />
                      <input
                        type="password"
                        // className="input-control"
                        placeholder="Confirm your password"
                        id="password2"
                        value={password2}
                        onChange={this.onChangeRegister}
                        error={errors.password2}
                        className={`form-control ${errors?.password2 ? 'is-invalid' : ''}`}
                      />
                      <span className="text-danger my-1">{errors.password2}</span>
                    </div>
                    <div class="form-group col-md-12">
                      <button type="submit" className="btn btn-md btn-register">
                        Signup
                      </button>
                    </div>
                    <p className='my-2 mt-3'>
                        Already have an account ?
                        <Link to="/login" className="text-success">
                          Login
                        </Link>
                      </p>
                </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(mapStateToProps, { registerUser })(withRouter(Register));
