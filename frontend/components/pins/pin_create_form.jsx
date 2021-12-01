import React from "react";
import { CurrUserInfo } from "../users/user_info";

class PinCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      media: "",
      pinboard_id: 0,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(type) {
    return (e) => this.setState({ [type]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    const pin = Object.assign({}, this.state);
    this.props.createPin(pin)
      .then(pin => this.props.history.push(`/users/${this.props.authorId}`))
  }

  render() {
    return (
      <div className='create-pin'>
        <p>Create a Pin</p>
        <form className='create-pin-form' onSubmit={this.handleSubmit}>
          <div className='form-header'>
            <button className='save-button' type='submit'>Save</button>
          </div>
          <div className='form-body'>
            <div className='form-left'>
              <div className='media-container'>
                <input
                  type="text"
                  placeholder="Add image URL"
                  value={this.state.media}
                  onChange={this.update('media')}
                />
              </div>
            </div>
            <div className='form-right'>
              <input className='pin-title'
                type="text"
                placeholder="Add your title"
                value={this.state.title}
                onChange={this.update('title')}
              />
              <br />
              <CurrUserInfo user={this.props.currUser} />
              <input className='pin-description'
                placeholder="Tell everyone what your Pin is about"
                value={this.state.description}
                onChange={this.update('description')}
              />
            </div>
          </div>
        </form>
      </div>
    )
  };
};

export default PinCreateForm;