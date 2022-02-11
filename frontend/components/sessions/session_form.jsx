import React from "react";
import SessionFormFooter from "./session_form_footer";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      errors: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDemo = this.handleDemo.bind(this)
    this.renderError = this.renderError.bind(this)
  }

  update(type) {
    return (e) => this.setState({ [type]: e.target.value})
  }

  UNSAFE_componentDidMount() {
    if (this.props.sessionId !== null ) {
      this.props.history.push('/')
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
      .then(() => { this.setState({ errors: null }, this.props.closeModal())})
      .then(() => this.props.history.push('/feed'))
      .fail(res => {
        this.setState({ errors: res.errors.responseJSON })
      })
  }

  renderError(input) {
    let displayError = "";

    if (Array.isArray(this.state.errors)) 
      this.state.errors.map((error) => (error.includes(input) ? displayError = error : ""))
    
    let eleId = input.toLowerCase();
    if (this.props.formType === 'Signup' && displayError !== "") 
      document.getElementById(eleId).style.borderColor = 'red'

    if (this.props.formType === 'Login' && displayError !== "") {
      document.getElementById('password').style.borderColor = 'red';
      document.getElementById('username').style.borderColor = 'red';
    }
    
    return (
      <ul>
        <li className='session-error' key={`error-${input}`}>
          <p style={{color: 'red'}}>{displayError}</p>
        </li>
      </ul>
    );
  }

  handleDemo() {
    const user = { 
      username: 'demoUser', 
      email: 'demoUser@demo.com',
      password: 'demouser1212',
    }
    this.props.demoLogin(user)
      .then(() => this.props.history.push('/feed'))
      .then(this.props.closeModal);
  }

  render() {
    let { formType, openModal, cta } = this.props;
    return(
      <div className='modal-form'>
        <div className='session-header'>
          <img className='logo' src={logoUrl} alt="logo" />
          <h1>Welcome to Pinspiration</h1>
        </div>
        <form className='session-form' onSubmit={this.handleSubmit}>
          { formType === 'Login' ? null : <input 
              id='email'
              type="text" 
              placeholder="Email" 
              value={this.state.email} 
              onChange={this.update('email')} /> }
            {this.renderError("Email")}
          <br/>
          <input 
              id='username'
              type="text" 
              placeholder="Username" 
              value={this.state.username} 
              onChange={this.update('username')} />

          {this.renderError("Username")}

          <br/>
            <input 
              id="password"
              type="password" 
              placeholder="Password" 
              value={this.state.password} 
              onChange={this.update('password')} />
            {this.renderError("Password")}
            {this.renderError("login")}
          <br/>
          <button type='submit'>{cta}</button>
          <SessionFormFooter 
            handleDemo={this.handleDemo} 
            openModal={openModal} 
            formType={formType} 
          />
        </form>
      </div>
    )
  }
}

export default SessionForm