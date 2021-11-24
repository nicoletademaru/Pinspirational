import React from "react";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
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
    console.log(this.props)
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleDemo() {
    const user = { 
      username: 'demoUser', 
      email: 'demoUser@demo.com',
      password: 'password',
    }
    this.props.demoLogin(user);
  }

  render() {
    return(
      <div className='modal-form'>
        <div className='session-header'>
          <img className='logo' src="assets/logo.png" alt="logo" />
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
          
          <div className='modal-footer'>
            <p>&nbsp;OR&nbsp;</p>
            <button onClick={this.handleDemo}>Continue with Demo</button>
            {this.props.formType === 'Login'
              ? <a onClick={() => this.props.openModal('signup')}>
                Not on Pinspiration yet? Sign up</a>
              : <a onClick={() => this.props.openModal('login')}>
                Already a member? Log in</a>}
          </div>
        </form>
        <ul> {Array.isArray(this.props.errors) ? this.props.errors.map((error) => <li>{error}</li>) : "" } </ul>
      </div>
    )
  }
}

export default SessionForm