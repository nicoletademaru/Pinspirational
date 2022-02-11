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
    this.renderErrors = this.renderErrors.bind(this)
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
      .fail(res => {
        const elementPass = document.getElementById('password');
        if (this.props.formType !== 'Signup' || res.errors.responseJSON.includes('Username has already been taken')) {
          const elementUser = document.getElementById('username');
          elementUser.style.borderColor = 'red';
        }
        elementPass.style.borderColor = 'red';
        this.setState({ errors: res.errors.responseJSON })
      })
      // .then(() => this.props.history.push('/feed'))
      // .then(this.props.closeModal);
  }

  renderErrors(idx) {
    return (
      // <ul>
      //   {
      //     Array.isArray(this.state.errors) ?
      //       this.state.errors.map((error, i) => (
      //         <li key={`error-${i}`}>
      //           <p style={{color: 'red'}}>{error}</p>
      //         </li>
      //       )) :
      //       ''
      //   }
      // </ul>

      <ul>
        {
          Array.isArray(this.state.errors) ?
            <li key={`error-${idx}`}>
              <p style={{color: 'red'}}>{this.state.errors[idx]}</p>
            </li>
          :
          ''
        }
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
    return(
      <div className='modal-form'>
        <div className='session-header'>
          <img className='logo' src={logoUrl} alt="logo" />
          <h1>Welcome to Pinspiration</h1>
        </div>
        <form className='session-form' onSubmit={this.handleSubmit}>
          { this.props.formType === 'Login' ? null : <input 
              type="text" 
              placeholder="Email" 
              value={this.state.email} 
              onChange={this.update('email')} /> }
          { this.props.formType === 'Signup' ? this.renderErrors(1) : ""}
          <br/>
          <input 
              id='username'
              type="text" 
              placeholder="Username" 
              value={this.state.username} 
              onChange={this.update('username')} />
          { this.props.formType === 'Signup' ? this.renderErrors(0) : ""}
          <br/>
            <input 
              id="password"
              type="password" 
              placeholder="Password" 
              value={this.state.password} 
              onChange={this.update('password')} />
              { this.props.formType !== 'Signup' ? this.renderErrors(0) : this.renderErrors(2)}
          <br/>
          <button type='submit'>{this.props.cta}</button>
          <SessionFormFooter 
            handleDemo={this.handleDemo} 
            openModal={this.props.openModal} 
            formType={this.props.formType} 
          />
        </form>
        {/* <ul> {Array.isArray(this.props.errors) ? this.props.errors.map((error,i) => 
        <li key={i}>{error}</li>) : "" } </ul> */}
      </div>
    )
  }
}

export default SessionForm