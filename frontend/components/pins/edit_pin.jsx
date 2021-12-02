import React from "react";

class EditPin extends React.Component {
  constructor(props) {
    super(props)
    this.state= this.props.pin;
    
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(type) {
    return (e) => this.setState({ [type]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();

    formData.append('pin[id]', this.props.pin.id)
    formData.append('pin[title]', this.state.title)
    formData.append('pin[description]', this.state.description)
    formData.append('pin[pinboard_id]', 1)

    this.props.updatePin(formData)
      .then(this.props.closeModal);
  }

  handleDelete() {
    this.props.deletePin(this.props.pin.id)
      .then(this.props.closeModal)
      .then(this.props.history.push('/feed'));
  }
            
  render() {
    const { pin, closeModal } = this.props;

    return (
      <div className='edit-pin-page'>
        <div className='edit-form-header'>
          <h1>Edit this pin</h1>
        </div>
        <div className='edit-form-body'>
          <form className='edit-form-details'>
            <label htmlFor="title">Title
              <input
                name='title'
                type="text"
                value={this.state.title}
                onChange={this.handleChange('title')}
              />
            </label>
            <br />
            <label htmlFor="description">Description
              <input
                name='description'
                type="text"
                value={this.state.description}
                onChange={this.handleChange('description')}
              />
            </label>
          </form>
          <img src={this.state.photoUrl} alt="media" />
        </div>
        <div className='edit-form-footer'>
          <div className='left-footer'>
            <button 
              className='delete-cancel' 
              onClick={this.handleDelete}>Delete</button>
          </div>
          <div className='right-footer'>
            <button 
              className='delete-cancel' onClick={closeModal}>Cancel</button>
            <button className='save' type='submit' onClick={this.handleSubmit}>Save</button>
          </div>
        </div>
      </div>
    )
  }
}

export default EditPin;