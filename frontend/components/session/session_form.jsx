import React from 'react';
import {Redirect} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      redirected: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirect = this.redirect.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  componentDidMount() {
    if (Array.isArray(this.props.errors)) {
      this.props.clearErrors();
    }
  }

  update(field) {
    return (
      e => this.setState({
          [field]: e.currentTarget.value
      })
    )   
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.formAction({
        username: this.state.username, 
        password: this.state.password
      });
  }

  redirect() {
    this.setState({
      redirected: true
    })
  }

  demoLogin(e) {
    e.preventDefault();
    this.props.login({username: 'Demo Guest', password: '!@#$%^&*()'})
  }

  render() {

    if(this.state.redirected) {
      if (this.props.formType == 'login') {
        return (
          <Redirect to='/signup' />
        )
      } else {
        return (
          <Redirect to='/login' />
        )
      }
    } else {

      let spanText;
      let buttonText;
      let title;
      let corrected;
      let loginError;
      let usernameError = "";
      let passwordError = "";
      let usernameClass = "input-good";
      let passwordClass = "input-good";
      if(this.props.formType === 'login') {
        spanText = "New to Trail Magic?";
        buttonText = "Sign up for free";
        title = "Log in and let's get after it";
        corrected = "Log In";
        if (Array.isArray(this.props.errors)) {
          if (this.props.errors.includes(
            "Cannot find a user with that username and password"
            )
          ) { 
          loginError = <span>
            Login failed. Please check username and password.
          </span>
        }

        }
      } else {
        spanText = "Already have an account?";
        buttonText = "Login";
        title = "Create your free account";
        corrected = "Sign In";
        if (Array.isArray(this.props.errors)) {
          if (this.props.errors.includes("Username has already been taken")) {
            usernameError = "Username has already been taken.";
            usernameClass = "input-bad";
          } else if (this.props.errors.includes("Username can't be blank")) {
            usernameError = "Username can't be blank.";
            usernameClass = "input-bad";
          };
          if (this.props.errors.includes("Password is too short (minimum is 8 characters)")) {
            passwordError = "Password must contain at least 8 characters.";
            passwordClass = "input-bad";
          };
        };
      };
      return (
        <div className="session-form-container">
          <form 
            onSubmit={this.handleSubmit}
            className="session-form"
            >
            <h1>{title}</h1>
            <div className={usernameClass}>
              <input 
                type="text" 
                value={this.state.username} 
                onChange={this.update('username')}
                placeholder="username"
                />
                <span>{usernameError}</span>
            </div>

            <div className={passwordClass}>
              <input 
                type="password" 
                value={this.state.password} 
                onChange={this.update('password')}
                placeholder="password"
                />
                <span>{passwordError}</span>
            </div>

            {loginError}

            <input type="submit" value={corrected}/>

            <button onClick={this.demoLogin}>Demo</button>
          </form>
          <div className="switch-form">
            <span>{spanText}</span>
            <button onClick={this.redirect}>
              {buttonText}
            </button>
          </div>
        </div>
      )
    }  
  };
};

export default SessionForm;