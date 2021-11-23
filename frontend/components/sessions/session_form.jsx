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

  componentDidMount() {
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
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Username 
            <input type="text" value={this.state.username} onChange={this.update('username')} />
          </label>
          <br/>
          <label>Email
            <input type="text" value={this.state.email} onChange={this.update('email')} />
          </label>
          <br/>
          <label>Password
            <input type="password" value={this.state.password} onChange={this.update('password')} />
          </label>
          <br/>
          <button type='submit'>{this.props.formType}</button>
        </form>
        {/* {this.props.location.pathname === '/login' ? <Link to='/signup'>Signup</Link> : <Link to='/login'>Login</Link> } */}
        <ul> {Array.isArray(this.props.errors) ? this.props.errors.map((error) => <li>{error}</li>) : "" } </ul>
      </div>
    )
  }
}

export default SessionForm