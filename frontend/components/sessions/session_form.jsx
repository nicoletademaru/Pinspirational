import React from "react";
import SessionFormFooter from "./session_form_footer";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDemo = this.handleDemo.bind(this)
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
      .then(() => this.props.history.push('/feed'))
      .then(this.props.closeModal);
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
    return(
      <div className='modal-form'>
        <div className='session-header'>
          <img className='logo' src={logoUrl} alt="logo" />
          <h1>Welcome to Pinspiration</h1>
        </div>
        <form className='session-form' onSubmit={this.handleSubmit}>
            <input 
              type="text" 
              placeholder="Username" 
              value={this.state.username} 
              onChange={this.update('username')} />
          <br/>
            <input 
              type="text" 
              placeholder="Email" 
              value={this.state.email} 
              onChange={this.update('email')} />
          <br/>
            <input 
              type="password" 
              placeholder="Password" 
              value={this.state.password} 
              onChange={this.update('password')} />
          <br/>
          <button type='submit'>{this.props.cta}</button>

          <SessionFormFooter 
            handleDemo={this.handleDemo} 
            openModal={this.props.openModal} 
            formType={this.props.formType} 
          />
        </form>
        <ul> {Array.isArray(this.props.errors) ? this.props.errors.map((error,i) => 
        <li key={i}>{error}</li>) : "" } </ul>
      </div>
    )
  }
}

export default SessionForm