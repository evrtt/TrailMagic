import React from 'react';
import {Redirect} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: "",
        password: ""
      },
      redirected: false,
      formType: this.props.formType,
      errors: this.props.errors

    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirect = this.redirect.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  update(field) {
    return (
      e => this.setState({
        user: {
          [field]: e.currentTarget.value
        }
      })
    )   
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.formAction(this.state.user);
  }

  redirect() {
    this.setState({
      redirected: true
    })
  }

  demoLogin() {
    this.props.login({username: 'Demo Guest', password: '!@#$%^&*()'})
  }

  render() {

    if(this.state.redirected) {
      if (this.state.formType == 'login') {
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
      if(this.props.formType === 'login') {
        spanText = "New to Trail Magic?";
        buttonText = "Sign up for free";
        title = "Log in and get after it"
        corrected = "Log In"
      } else {
        spanText = "Already have an account?";
        buttonText = "Login";
        title = "Create your free account"
        corrected = "Sign In"
      }

      return (
        <div className="session-form-container">
          <form 
            onSubmit={this.handleSubmit}
            className="session-form"
            >
            <h1>{title}</h1>
            <label>
              <input 
                type="text" 
                value={this.state.user.username} 
                onChange={this.update('username')}
                placeholder="username"
                />
            </label>

            <label>
              <input 
                type="password" 
                value={this.state.user.password} 
                onChange={this.update('password')}
                placeholder="password"
                />
            </label>

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