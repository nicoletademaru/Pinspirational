import React from "react";

class EditPin extends React.Component {
  constructor(props) {
    super(props)
    this.state= this.props.pin;
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(type) {
    return (e) => this.setState({ [type]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.updatePin(this.state)
  }

  handleDelete() {
    this.props.deletePin(this.props.pin.id)
      .then(() => this.props.history.push('/feed'))
      .then(this.props.closeModal);
  }
            
  render() {
    const { pin, closeModal } = this.props;

    return (
      <div className='edit-pin-page'>
        <div className='edit-form-header'>
          <h1>Edit this pin</h1>
        </div>
        <div className='edit-form-body'>
          <form className='edit-form-details' onSubmit={this.handleSubmit}>
            <label htmlFor="title">Title
              <input
                type="text"
                value={pin.title}
                onChange={this.handleChange('title')}
              />
            </label>
            <br />
            <label htmlFor="description">Description
              <input
                type="text"
                value={pin.description}
                onChange={this.handleChange('description')}
              />
            </label>
          </form>
          <img src={pin.media} alt="media" />
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
            <button className='save' type='submit'>Save</button>
          </div>
        </div>
      </div>
    )
  }
}

export default EditPin;