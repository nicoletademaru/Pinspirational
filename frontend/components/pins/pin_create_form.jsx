import React from "react";
import { CurrUserInfo } from "../users/user_info";

class PinCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      pinboard_id: 0,
      photoFile: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  update(type) {
    return (e) => this.setState({ [type]: e.target.value })
  }


  handleFile(e) {
    this.setState({photoFile: e.currentTarget.files[0]})
  }

  handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();

    formData.append('pin[title]', this.state.title)
    formData.append('pin[description]', this.state.description)
    formData.append('pin[pinboard_id]', 1)
    formData.append('pin[photo]', this.state.photoFile)

    this.props.createPin(formData)
      .then(this.props.history.push('/feed'));
  }

  render() {
    console.log(this.state)
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
                <input type="file"
                  onChange={this.handleFile} />
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