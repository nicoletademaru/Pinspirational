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
    this.props.processForm(user);
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
        </form>
        {/* {this.props.location.pathname === '/login' ? <Link to='/signup'>Signup</Link> : <Link to='/login'>Login</Link> } */}
        <ul> {Array.isArray(this.props.errors) ? this.props.errors.map((error) => <li>{error}</li>) : "" } </ul>
      </div>
    )
  }
}

export default SessionForm