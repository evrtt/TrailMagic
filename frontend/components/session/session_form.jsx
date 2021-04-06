import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.props.formAction(this.state);
  }

  render() {
    return (
      <form 
        onSubmit={this.handleSubmit}
        className="session-form"
      >
        <h1>{this.props.formType}</h1>
        <label>Username
          <input 
            type="text" 
            value={this.state.username} 
            onChange={this.update('username')}  
          />
        </label>

        <label>Password
          <input 
            type="password" 
            value={this.state.password} 
            onChange={this.update('password')}  
          />
        </label>

        <input type="submit" value={this.props.formType}/>

      </form>
    )
  };
};

export default SessionForm;